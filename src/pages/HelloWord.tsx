import { useState } from 'react';
import logo from '~/assets/logo.svg';
import styles from './hello.module.css';

function HelloWord() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className={styles.appLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default HelloWord;
