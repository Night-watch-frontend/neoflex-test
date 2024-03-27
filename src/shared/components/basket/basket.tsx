import { FC } from "react";
import styles from "./basket.module.scss";
import { CardBasket } from "../card-basket";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ICard } from "../../../store/slice-card";
import { Outlet, useNavigate } from "react-router-dom";

export const Basket: FC = () => {
  const cards = useSelector<RootState, ICard[]>((state) => state.basket.basket);
  const finalPrice = useSelector<RootState, number>(
    (state) => state.basket.finalPrice
  );
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/basket/payment");
  };

  return (
    <div className={styles.container}>
      <h2>{"Корзина"}</h2>
      <section>
        <div className={styles.descr}>
          {cards.length ? (
            <ul className={styles.list}>
              {cards.map((card) => (
                <li key={card.id}>
                  <CardBasket
                    title={card.title}
                    id={card.id}
                    image={card.img}
                    price={`${card.price} ₽`}
                    count={card.count}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <h3>{"Корзина пуста"}</h3>
          )}
        </div>
        <div className={styles.order}>
          <div className={styles.orderText}>
            <span>{"ИТОГО"}</span>
            <span>{`${finalPrice} ₽`}</span>
          </div>
          <button
            onClick={handleClick}
            className={styles.btn}
            disabled={finalPrice === 0}>
            {"Перейти к оформлению"}
          </button>
        </div>
      </section>
      <Outlet />
    </div>
  );
};
