import styles from "./Content.module.scss";

const Content = () => {
  return (
    <main id={styles.content}>
      <aside id={styles.sidebar}>
        <h1>Content</h1>
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
            </tbody>
          </table>
        </div>
      </main>
    </main>
  );
};

export default Content;
