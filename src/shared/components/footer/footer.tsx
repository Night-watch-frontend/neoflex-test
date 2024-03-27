import { FC } from "react";
import styles from "./footer.module.scss";
import logo from "/QPICK.png";
import { Icon } from "../icon-component";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";

export const Footer: FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo QPICK" />
        </Link>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link className={styles.link} to={"/favorites"}>
                {"Избранное"}
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"/basket"}>
                {"Корзина"}
              </Link>
            </li>
            <li>
              <Link className={styles.link} to={"/contacts"}>
                {"Контакты"}
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link className={styles.link} to={"/terms of service"}>
            {"Условия сервиса"}
          </Link>
          <div className={styles.listLanguage}>
            <Icon title={"language"} />
            <a
              href="/"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Сервис недоспупен"
              className={styles.navlink}>
              {"Каз"}
            </a>
            <NavLink
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Сервис не доспупен"
              className={styles.navlink}
              to={"#"}>
              {"Рус"}
            </NavLink>
            <a
              href="/"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Сервис не доспупен"
              className={styles.navlink}>
              {"Eng"}
            </a>
            <Tooltip id="my-tooltip" />
          </div>
        </div>
        <div className={styles.social}>
          <Link to={"https://vk.com/"}>
            <Icon title={"vk"} />
          </Link>
          <Link to={"https://t.me/792222090000"}>
            <Icon title={"telegram"} />
          </Link>
          <Link to={"https://wa.me/792222090000"}>
            <Icon title={"whatsapp"} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
