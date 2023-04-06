import { useState } from "react";
import styles from "./Content.module.scss";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Content = () => {
  const [banks, setBanks] = useState({
    isOpen: true,
    list: {
      "First Republic Savings": [
        { month: "Oct2022", balance: 10 },
        { month: "Nov2022", balance: 0 },
        { month: "Dec2022", balance: 13897 },
        { month: "Jan2023", balance: 12 },
        { month: "Feb2023", balance: 0 },
      ],
      "Chase Checking": [
        { month: "Oct2022", balance: 1780 },
        { month: "Nov2022", balance: 0 },
        { month: "Dec2022", balance: 1567 },
        { month: "Jan2023", balance: 0 },
        { month: "Feb2023", balance: 0 },
      ],
    },
  });
  /*
  const [income, setIncome] = useState({});
  const [cogs, setCogs] = useState([]);
  */
  const [expenses, setExpenses] = useState({
    isOpen: true,
    list: {
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
    },
  });

  const getUniqueMonths = (data) => {
    const months = [
      ...new Set(
        Object.values(data.list).flatMap((item) =>
          item.map((entry) => entry.month)
        )
      ),
    ];

    return months;
  };

  const sumBalances = (data, month) =>
    Object.keys(data.list).reduce((total, bank) => {
      const entry = data.list[bank].find((entry) => entry.month === month);
      if (entry) {
        return total + entry.balance;
      } else {
        return total;
      }
    }, 0);

  return (
    <main id={styles.content}>
      <aside id={styles.sidebar}>
        <ul>
          <li className={styles.dropdown}>
            <h3
              onClick={() =>
                setBanks((prevState) => ({
                  ...prevState,
                  isOpen: !prevState.isOpen,
                }))
              }
            >
              Banks {banks.isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </h3>
            {banks.isOpen === true && (
              <ul>
                {Object.keys(banks.list).map((key) => (
                  <li key={key}>{key}</li>
                ))}
                <li>
                  <strong>Total Balance</strong>
                </li>
              </ul>
            )}
          </li>
          {/*
            <li className={styles.dropdown}>
              <h3>
                Income <FaAngleDown />
              </h3>
            </li>
            <li className={styles.dropdown}>
              <h3>
                COGS (Cost of Goods Sold) <FaAngleDown />
              </h3>
            </li>
          */}
          <li className={styles.dropdown}>
            <h3
              onClick={() =>
                setExpenses((prevState) => ({
                  ...prevState,
                  isOpen: !prevState.isOpen,
                }))
              }
            >
              Expenses {expenses.isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </h3>
            {expenses.isOpen === true && (
              <ul>
                {Object.keys(expenses.list).map((key) => (
                  <li key={key}>{key}</li>
                ))}
                <li>
                  <strong>Total Balance</strong>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </aside>
      <main id={styles.main}>
        <div className={styles.inner}>
          <table width="100%">
            <thead>
              <tr>
                <th>Oct 2022</th>
                <th>Nov 2022</th>
                <th>Dec 2022</th>
                <th>Jan 2023</th>
                <th>Feb 2023</th>
              </tr>
            </thead>
            <tbody>
              {banks.isOpen && (
                <>
                  {Object.keys(banks.list).map((key) => (
                    <tr key={key}>
                      {banks.list[key].map((item, index) => (
                        <td key={index}>{item.balance}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    {getUniqueMonths(banks).map((month, index) => (
                      <td className={styles.special} key={index}>
                        {sumBalances(banks, month)}
                      </td>
                    ))}
                  </tr>
                </>
              )}
              <tr>
                <td colSpan={5}></td>
              </tr>
              {expenses.isOpen && (
                <>
                  {Object.keys(expenses.list).map((key) => (
                    <tr key={key}>
                      {expenses.list[key].map((item, index) => (
                        <td key={index}>{item.balance}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    {getUniqueMonths(expenses).map((month, index) => (
                      <td className={styles.special} key={index}>
                        {sumBalances(expenses, month)}
                      </td>
                    ))}
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </main>
  );
};

export default Content;
