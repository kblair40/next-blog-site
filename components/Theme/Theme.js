import React from "react";

import styles from "./Theme.module.scss";

const Theme = () => {
  return (
    <div className={styles.container}>
      <section className={styles.container__section}>
        <h3 classname={styles.conatiner__section__heading}>Fonts</h3>

        <p className={styles.text_primary}>Primary text</p>
        <p className={styles.text_secondary}>Secondary text</p>
      </section>
    </div>
  );
};

export default Theme;
