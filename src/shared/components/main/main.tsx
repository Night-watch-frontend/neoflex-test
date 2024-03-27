import { FC, ReactNode } from "react";
import styles from "./main.module.scss";

interface IMainProps {
  children?: ReactNode;
}

export const Main: FC<IMainProps> = ({ children }) => {
  return (
    <main>
      <div className={styles.container}>
        <h1>{"Интернет магазин электроники"}</h1>
        {children}
      </div>
    </main>
  );
};
