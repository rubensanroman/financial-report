const banks = (req, res) => {
  const obj = {
    "First Republic Savings": [
      { month: "Oct2022", balance: 0 },
      { month: "Nov2022", balance: 0 },
      { month: "Dec2022", balance: 13897 },
      { month: "Jan2023", balance: 0 },
      { month: "Feb2023", balance: 0 },
    ],
    "Chase Checking": [
      { month: "Oct2022", balance: 0 },
      { month: "Nov2022", balance: 0 },
      { month: "Dec2022", balance: 1567 },
      { month: "Jan2023", balance: 0 },
      { month: "Feb2023", balance: 0 },
    ],
  };

  res.status(200).json(obj);
};

export default banks;
