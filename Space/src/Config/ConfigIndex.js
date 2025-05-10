export const registerFormControls = [
    {
      name: "userName",
      label: "User Name",
      placeholder: "Enter your user name",
      componentType: "input",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];
  
  export const loginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];

  
  
  export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "PrivateCabin", label: "PrivateCabin" },
        { id: "DedicatedDesk", label: "DedicatedDesk" },
        { id: "VirtualOffice", label: "VirtualOffice" },
        { id: "ConferenceRoom", label: "ConferenceRoom" },
        { id: "MeetingRoom", label: "MeetingRoom" },
      ],
    },
    {
      label: "Location",
      name: "location",
      componentType: "select",
      options: [
        { id: "kharadi", label: "Kharadi" },
        { id: "Hinjewadi", label: "Hinjewadi" },
        { id: "Magarpatta", label: "Magarpatta" },
        { id: "VimanNagar", label: "VimanNagar" },
        { id: "KalyaniNagar", label: "KalyaniNagar" },
        { id: "CommerceZone", label: "Commerzone" },
      ],
    },
  ];
  
  export const shoppingViewHeaderMenuItems = [
    {
      id: "home",
      label: "Home",
      path: "/shop/shophome",
    },
    {
      id: "products",
      label: "Products",
      path: "/shop/listing",
    },
    {
      id: "facility",
      label: "Facility",
      path: "/shop/Facilities",
    },
  ];
  
  export const categoryOptionsMap = {
    PrivateCabin: "PrivateCabin",
    DedicatedDesk: "DedicatedDesk",
    VirtualOffice: "VirtualOffice",
    ConferenceRoom: "ConferenceRoom",
    MeetingRoom: "MeetingRoom",
  };
  
  export const locationOptionsMap = {
    kharadi: "Kharadi",
    Hinjewadi: "Hinjewadi",
    Magarpatta: "Magarpatta",
    VimanNagar: "VimanNagar",
    CommerceZone: "CommerceZone",
    KalyaniNagar:"KalyaniNagar"
    
  };
  
  export const filterOptions = {
    category: [
      { id: "PrivateCabin", label: "PrivateCabin" },
        { id: "DedicatedDesk", label: "DedicatedDesk" },
        { id: "VirtualOffice", label: "VirtualOffice" },
        { id: "ConferenceRoom", label: "ConferenceRoom" },
        { id: "MeetingRoom", label: "MeetingRoom" },
    ],
    location: [
      { id: "Kharadi", label: "Kharadi" },
        { id: "Hinjewadi", label: "Hinjewadi" },
        { id: "Magarpatta", label: "Magarpatta" },
        { id: "Viman", label: "Viman-Nagar" },
        { id: "Kalyani", label: "Kalyani-Nagar" },
        { id: "Commerce", label: "Commerzone" },
    ],
  };

  export const sortOptions = [
    { id: "price-lowtohigh", label: "Price: Low to High" },
    { id: "price-hightolow", label: "Price: High to Low" },
    { id: "title-atoz", label: "Title: A to Z" },
    { id: "title-ztoa", label: "Title: Z to A" },
  ];

  export const addOfferFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter Offerings title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter Offerings description",
    },
  ]


  
  