import React from "react";

import styles from "./Theme.module.scss";
import Card from "components/Posts/Post";

const Theme = () => {
  return (
    <div className={styles.container}>
      <section className={styles.container__section}>
        <h3 className={styles.conatiner__section__heading}>Fonts</h3>

        <p className={styles.text_primary}>Primary text</p>
        <p className={styles.text_secondary}>Secondary text</p>
      </section>

      <section className={styles.container__section}>
        <h3 classname={styles.conatiner__section__heading}>Cards</h3>

        <Card title="First Post">Card content</Card>
      </section>
    </div>
  );
};

export default Theme;
