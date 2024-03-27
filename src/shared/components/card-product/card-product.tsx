import { FC } from "react";
import styles from "./card-product.module.scss";
import { Icon } from "../icon-component";
import { useDispatch } from "react-redux";
import { addCard } from "../../../store/slice-card";
import { useNavigate } from "react-router-dom";

interface ICardProductProps {
  card: {
    id: number;
    title: string;
    rate: string;
    price: number;
    oldPrice: number;
    img: string;
    finalPrice: number;
    count: number;
    descr: string;
  };
}

export const CardProduct: FC<ICardProductProps> = ({ card }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addCard({ card: card }));
  };

  const handleOpenCard = () => {
    navigate(`/${card.id}`);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleOpenCard} className={styles.zoom}>
        <Icon title={"zoom"} />
      </button>
      <div className={styles.img}>
        <img src={card.img} alt={card.title}></img>
      </div>
      <div className={styles.descr}>
        <div className={styles.top}>
          <h3>{card.title}</h3>
          <span>{`${card.price} ₽`}</span>
          {card.oldPrice !== 0 && (
            <span className={styles.old}>{`${card.oldPrice} ₽`}</span>
          )}
        </div>
        <div className={styles.bottom}>
          <div className={styles.rate}>
            <Icon title={"star"} />
            <span>{card.rate}</span>
          </div>
          <button onClick={handleClick} className={styles.btn}>
            {"Купить"}
          </button>
        </div>
      </div>
    </div>
  );
};
