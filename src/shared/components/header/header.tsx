import { FC } from "react";
import styles from "./header.module.scss";
import logo from "/QPICK.png";
import { Icon } from "../icon-component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

export const Header: FC = () => {
  const count = useSelector<RootState, number>((state) => state.basket.count);
  return (
    <header>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo QPICK" />
        </Link>
        <nav className={styles.nav}>
          <Link to={"/favorites"}>
            <Icon title="like" />
          </Link>
          <Link to={"/basket"}>
            <Icon title="basket" />
          </Link>
          <div className={styles.countLike}>{2}</div>
          {count > 0 && <div className={styles.countItem}>{count}</div>}
        </nav>
      </div>
    </header>
  );
};
