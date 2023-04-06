import { useState } from "react";
import styles from "./Content.module.scss";

const Content = () => {
  const [banks, setBanks] = useState([]);
  const [income, setIncome] = useState([]);
  const [cogs, setCogs] = useState([]);
  const [expenses, setExpenses] = useState([]);

  return (
    <main id={styles.content}>
      <aside id={styles.sidebar}>
        <ul>
          <li className={styles.dropdown}>
            <h3>Banks</h3>
          </li>
          <li className={styles.dropdown}>
            <h3>Income</h3>
          </li>
          <li className={styles.dropdown}>
            <h3>COGS (Cost of Goods Sold)</h3>
          </li>
          <li className={styles.dropdown}>
            <h3>Expenses</h3>
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
              <tr>
                <td width="20%">1</td>
                <td width="20%">2</td>
                <td width="20%">3</td>
                <td width="20%">4</td>
                <td width="20%">5</td>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </main>
  );
};

export default Content;
