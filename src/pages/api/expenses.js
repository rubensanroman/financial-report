const expenses = (req, res) => {
  const obj = {
    "Bank Charge & Fees": [
      { month: "Oct2022", balance: -100 },
      { month: "Nov2022", balance: 0 },
      { month: "Dec2022", balance: 0 },
      { month: "Jan2023", balance: 0 },
      { month: "Feb2023", balance: 0 },
    ],
    "Legal Services": [
      { month: "Oct2022", balance: -600 },
      { month: "Nov2022", balance: 0 },
      { month: "Dec2022", balance: 0 },
      { month: "Jan2023", balance: 0 },
      { month: "Feb2023", balance: 0 },
    ],
    "Taxes & Licenses": [
      { month: "Oct2022", balance: -300 },
      { month: "Nov2022", balance: 0 },
      { month: "Dec2022", balance: 0 },
      { month: "Jan2023", balance: 0 },
      { month: "Feb2023", balance: 0 },
    ],
    "Office Supplies & Software": [
      { month: "Oct2022", balance: -200 },
      { month: "Nov2022", balance: 0 },
      { month: "Dec2022", balance: 0 },
      { month: "Jan2023", balance: 0 },
      { month: "Feb2023", balance: 0 },
    ],
  };

  res.status(200).json(obj);
};

export default expenses;
