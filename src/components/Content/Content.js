import { useEffect, useState } from "react";
import styles from "./Content.module.scss";
import { FaAngleDown, FaAngleUp, FaRegTimesCircle } from "react-icons/fa";

const Content = () => {
  const [banks, setBanks] = useState({ isOpen: true, list: {} });
  const [expenses, setExpenses] = useState({ isOpen: true, list: {} });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTransactions, setActiveTransactions] = useState([]);

  useEffect(() => {
    fetch("/api/banks")
      .then((res) => res.json())
      .then((data) => {
        setBanks((prevState) => ({
          ...prevState,
          list: data,
        }));
      });
    fetch("/api/expenses")
      .then((res) => res.json())
      .then((data) => {
        setExpenses((prevState) => ({
          ...prevState,
          list: data,
        }));
      });
  }, []);

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

  const sumBalances = (data, month) => {
    return Object.keys(data.list).reduce((total, bank) => {
      const entry = data.list[bank].find((entry) => entry.month === month);

      if (entry) {
        return total + entry.balance;
      } else {
        return total;
      }
    }, 0);
  };

  const handleViewTransactions = (transactionsList) => {
    setIsModalOpen(true);
  };

  return (
    <>
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
                <td className={styles.separator} colSpan={5}></td>
              </tr>
              {expenses.isOpen && (
                <>
                  {Object.keys(expenses.list).map((key) => (
                    <tr key={key}>
                      {expenses.list[key].map((item, index) => (
                        <td
                          className={styles.clickable}
                          key={index}
                          onClick={() => handleViewTransactions()}
                        >
                          {item.balance}
                        </td>
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
        </main>
      </main>
      {isModalOpen && (
        <div id={styles.modal}>
          <div
            className={styles.closeModal}
            onClick={() => setIsModalOpen(false)}
          >
            <FaRegTimesCircle />
          </div>
          <h1>Modal!</h1>
        </div>
      )}
    </>
  );
};

export default Content;
