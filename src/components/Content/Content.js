import styles from "./Content.module.scss";

const Content = () => {
  return (
    <main id={styles.content}>
      <aside id={styles.sidebar}>
        <h1>Content</h1>
      </aside>
      <main id={styles.main}>
        <div className={styles.inner}>
          <table>
            <thead>
              <tr>
                <th>Oct 2022</th>
                <th>Nov 2022</th>
                <th>Dec 2022</th>
                <th>Jan 2023</th>
                <th>Feb 2023</th>
              </tr>
            </thead>
          </table>
        </div>
      </main>
    </main>
  );
};

export default Content;
