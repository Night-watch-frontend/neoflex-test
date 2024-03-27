import { FC } from "react";
import { CardProduct } from "../card-product";
import styles from "./list-card.module.scss";

interface IListCardProps {
  headPhone: {
    id: number;
    title: string;
    rate: string;
    price: number;
    oldPrice: number;
    img: string;
    finalPrice: number;
    count: number;
    descr: string;
  }[];
  wireless: {
    id: number;
    title: string;
    rate: string;
    price: number;
    oldPrice: number;
    img: string;
    finalPrice: number;
    count: number;
    descr: string;
  }[];
}

export const ListCard: FC<IListCardProps> = ({ headPhone, wireless }) => {
  return (
    <div className={styles.container}>
      <section className={styles.sectionHeadphones}>
        <h2>{"Наушники"}</h2>
        <ul className={styles.list}>
          {headPhone.map((card) => (
            <li key={card.id}>
              <CardProduct card={card} />
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.sectionWireless}>
        <h2>{"Беспроводные наушники"}</h2>
        <ul className={styles.list}>
          {wireless.map((card) => (
            <li key={card.id}>
              <CardProduct card={card} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
