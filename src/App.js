import logo from "./logo.svg";
// import './App.css';
// import "./App.scss";
import styles from "./App.module.css";

import Button from "./components/Button";

console.log(styles);
// {App: "App_App__2_wh8"
// App-header: "App_App-header__1HFdb"
// App-link: "App_App-link__1VJYO"
// App-logo: "App_App-logo__13QiU"
// App-logo-spin: "App_App-logo-spin__2Kotf"}
// 모듈이란 전역적으로 오염되지 않도록 하는것.
// {style['^&^^']} or {style.%DSA}

function App() {
  return (
    <div className={styles["App"]}>
      <header className={styles["App-header"]}>
        <img src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
