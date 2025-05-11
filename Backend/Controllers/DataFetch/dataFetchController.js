const Booking = require("../../Models/BookingModel");
const exceljs = require("exceljs");
const path = require("path");

exports.fetchData = async (req, res) => {
  try {
    const { fromDate, toDate } = req.body;

    // Validate input
    if (!fromDate || !toDate) {
      return res.status(400).json({ message: "Both fromDate and toDate are required." });
    }

    const start = new Date(fromDate);
    const end = new Date(toDate);
    end.setHours(23, 59, 59, 999); // Include the entire toDate day

    // Fetch data from MongoDB
    const bookings = await Booking.find({
      fromDate: { $gte: start },
      toDate: { $lte: end },
    }).lean();

    if (bookings.length === 0) {
      return res.json({ message: "No data found for the selected date range." });
    }

    // Create an Excel workbook and worksheet
    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet("Bookings");

    // Define headers dynamically from the keys of the first booking record
    const headers = Object.keys(bookings[0]).map((key) => ({
      header: key,
      key: key,
      width: 20, // Set default column width
    }));

    worksheet.columns = headers;

    // Add rows to the worksheet
    bookings.forEach((booking) => {
      const row = {};

      // Ensure all keys are present, setting `null` for missing ones
      headers.forEach((column) => {
        row[column.key] = booking[column.key] || null;
      });

      worksheet.addRow(row);
    });

    // Save the Excel file
    const filePath = path.join(__dirname, "../../public/bookings.xlsx");
    await workbook.xlsx.writeFile(filePath);

    res.json({
      message: "Data fetched successfully. File ready for download.",
      fileUrl: `http://localhost:5500/public/bookings.xlsx`,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};
