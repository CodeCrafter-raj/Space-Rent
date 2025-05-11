const Contact = require("../../Models/ContactModel");
const excel = require("exceljs");

exports.fetchContacts = async (req, res) => {
  const { fromDate, toDate } = req.body;

  try {
    // Validate Date Range
    if (!fromDate || !toDate) {
      return res
        .status(400)
        .json({ message: "Please provide both 'fromDate' and 'toDate'." });
    }

    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);

    // Fetch data within the date range
    const data = await Contact.find({
      createdAt: { $gte: startDate, $lte: endDate },
    }).lean();

    if (data.length === 0) {
      return res.status(404).json({
        message: "No data found within the specified date range.",
      });
    }

    // Generate Excel Workbook
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Contacts Data");

    // Define Columns
    worksheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone Number", key: "Phone_Number", width: 15 },
      { header: "Message", key: "message", width: 40 },
      { header: "Created At", key: "createdAt", width: 25 },
      { header: "Updated At", key: "updatedAt", width: 25 },
    ];

    // Add Rows
    data.forEach((contact) => {
      worksheet.addRow({
        name: contact.name || null,
        email: contact.email || null,
        Phone_Number: contact.Phone_Number || null,
        message: contact.message || null,
        createdAt: contact.createdAt || null,
        updatedAt: contact.updatedAt || null,
      });
    });

    // Prepare and Send File
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Contacts_Data.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
