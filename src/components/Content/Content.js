import { useState } from "react";
import styles from "./Content.module.scss";
import { FaAngleDown } from "react-icons/fa";

const Content = () => {
  const [banks, setBanks] = useState({
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
  });
  const [income, setIncome] = useState([]);
  const [cogs, setCogs] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const months = [
    ...new Set(
      Object.values(banks).flatMap((bank) => bank.map((entry) => entry.month))
    ),
  ];

  const sumBalances = (month) =>
    Object.keys(banks).reduce((total, bank) => {
      const entry = banks[bank].find((entry) => entry.month === month);
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
            <h3>
              Banks <FaAngleDown />
            </h3>
            <ul>
              {Object.keys(banks).map((key) => (
                <li key={key}>{key}</li>
              ))}
              <li>
                <strong>Total Balance</strong>
              </li>
            </ul>
          </li>
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
          <li className={styles.dropdown}>
            <h3>
              Expenses <FaAngleDown />
            </h3>
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
              {Object.keys(banks).map((key) => (
                <tr key={key}>
                  {banks[key].map((item, index) => {
                    return <td key={index}>{item.balance}</td>;
                  })}
                </tr>
              ))}
              <tr>
                {months.map((month, index) => (
                  <td className={styles.special} key={index}>
                    {sumBalances(month)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </main>
  );
};

export default Content;
