import { FC } from "react";
import styles from "./card-basket.module.scss";
import { Icon } from "../icon-component";
import { useDispatch } from "react-redux";
import { decrement, increment, removeCard } from "../../../store/slice-card";

interface ICardBasketProps {
  title: string;
  id: number;
  image: string;
  price: string;
  count: number;
}

export const CardBasket: FC<ICardBasketProps> = ({
  title,
  price,
  image,
  id,
  count,
}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment({ id: id }));
  };
  const handleDecrement = () => {
    dispatch(decrement({ id: id }));
  };

  const handleDeleteCard = () => {
    dispatch(removeCard({ cardId: id }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.descr}>
          <img className={styles.descrImg} src={image}></img>
          <div className={styles.descrText}>
            <h3>{title}</h3>
            <span>{price}</span>
          </div>
        </div>
        <button onClick={handleDeleteCard} className={styles.topBtn}>
          <Icon title={"deleteCard"} />
        </button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.controls}>
          <button
            onClick={handleDecrement}
            disabled={count === 1}
            className={styles.controlsBtn}>
            <Icon title={"minus"} />
          </button>
          <div>{count}</div>
          <button onClick={handleIncrement} className={styles.controlsBtn}>
            <Icon title={"plus"} />
          </button>
        </div>
        <span>{price}</span>
      </div>
    </div>
  );
};
