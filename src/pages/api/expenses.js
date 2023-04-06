const expenses = (req, res) => {
  const obj = {
    "Bank Charge & Fees": [
      {
        month: "Oct2022",
        balance: -100,
        transactions: [
          { id: 1000, name: "Google Ads", balance: -30 },
          { id: 1000, name: "Notebook repair services", balance: -60 },
          { id: 1000, name: "Instagram Ads", balance: -10 },
        ],
      },
      { month: "Nov2022", balance: 0, transactions: [] },
      { month: "Dec2022", balance: 0, transactions: [] },
      { month: "Jan2023", balance: 0, transactions: [] },
      { month: "Feb2023", balance: 0, transactions: [] },
    ],
    "Legal Services": [
      { month: "Oct2022", balance: -600, transactions: [] },
      { month: "Nov2022", balance: 0, transactions: [] },
      { month: "Dec2022", balance: 0, transactions: [] },
      { month: "Jan2023", balance: 0, transactions: [] },
      { month: "Feb2023", balance: 0, transactions: [] },
    ],
    "Taxes & Licenses": [
      { month: "Oct2022", balance: -300, transactions: [] },
      { month: "Nov2022", balance: 0, transactions: [] },
      { month: "Dec2022", balance: 0, transactions: [] },
      { month: "Jan2023", balance: 0, transactions: [] },
      { month: "Feb2023", balance: 0, transactions: [] },
    ],
    "Office Supplies & Software": [
      { month: "Oct2022", balance: -200, transactions: [] },
      { month: "Nov2022", balance: 0, transactions: [] },
      { month: "Dec2022", balance: 0, transactions: [] },
      { month: "Jan2023", balance: 0, transactions: [] },
      { month: "Feb2023", balance: 0, transactions: [] },
    ],
  };

  res.status(200).json(obj);
};

export default expenses;
