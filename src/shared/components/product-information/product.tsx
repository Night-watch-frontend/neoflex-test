import { FC } from "react";
import { Modal } from "../modal";
import styles from "./product.module.scss";
import { useParams } from "react-router-dom";
import { headPhones, wireless } from "../../helpers/list-products";

export const ProductInfo: FC = () => {
  const { id } = useParams();
  const cards = [...headPhones, ...wireless];
  const itemIndex = cards.find((item) => item.id === Number(id));
  return (
    <Modal>
      <div className={styles.container}>
        <img src={itemIndex?.img}></img>
        <div className={styles.descr}>
          <h2>{itemIndex?.title}</h2>
          <p>{itemIndex?.descr}</p>
        </div>
      </div>
    </Modal>
  );
};
