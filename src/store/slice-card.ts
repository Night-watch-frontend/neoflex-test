import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICard {
  id: number;
  title: string;
  img: string;
  rate: string;
  oldPrice: number;
  price: number;
  finalPrice: number;
  count: number;
  descr: string;
}

const loadCards = (): ICard[] => {
  const data = sessionStorage.getItem("basket");
  if (data) return JSON.parse(data);
  return [];
};

const finalPrice = (): number => {
  const data = sessionStorage.getItem("finalPrice");
  if (data) return JSON.parse(data);
  return 0;
};

const count = (): number => {
  const data = sessionStorage.getItem("count");
  if (data) return JSON.parse(data);
  return 0;
};

interface IBasketState {
  basket: ICard[];
  count: number;
  finalPrice: number;
}

const initialState: IBasketState = {
  basket: loadCards(),
  count: count(),
  finalPrice: finalPrice(),
};

const cardSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<{ card: ICard }>) {
      const isExisting = state.basket.some(
        (card) => card.id === action.payload.card.id
      );
      if (!isExisting) {
        state.basket.push(action.payload.card);
        state.count = state.basket.length;
        state.finalPrice = state.finalPrice + action.payload.card.price;
        sessionStorage.setItem("basket", JSON.stringify(state.basket));
        sessionStorage.setItem("finalPrice", JSON.stringify(state.finalPrice));
        sessionStorage.setItem("count", JSON.stringify(state.count));
      }
    },
    removeCard(state, action: PayloadAction<{ cardId: number }>) {
      state.basket = state.basket.filter(
        (card) => card.id !== action.payload.cardId
      );
      state.finalPrice = state.basket.reduce(
        (total, item) => total + item.finalPrice,
        0
      );
      state.count = state.basket.length;
      sessionStorage.setItem("basket", JSON.stringify(state.basket));
      sessionStorage.setItem("finalPrice", JSON.stringify(state.finalPrice));
      sessionStorage.setItem("count", JSON.stringify(state.count));
    },
    increment(state, action: PayloadAction<{ id: number }>) {
      state.basket.map((card) => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            finalPrice: (card.finalPrice += card.price),
            count: (card.count += 1),
          };
        } else return card;
      });
      state.finalPrice = state.basket.reduce(
        (total, item) => total + item.finalPrice,
        0
      );
      sessionStorage.setItem("basket", JSON.stringify(state.basket));
      sessionStorage.setItem("finalPrice", JSON.stringify(state.finalPrice));
      sessionStorage.setItem("count", JSON.stringify(state.count));
    },
    decrement(state, action: PayloadAction<{ id: number }>) {
      state.basket.map((card) => {
        if (card.id === action.payload.id && card.finalPrice > card.price) {
          return {
            ...card,
            finalPrice: (card.finalPrice -= card.price),
            count: (card.count = card.count > 1 ? card.count - 1 : 1),
          };
        } else return card;
      });
      state.finalPrice = state.basket.reduce(
        (total, item) => total + item.finalPrice,
        0
      );
      sessionStorage.setItem("basket", JSON.stringify(state.basket));
      sessionStorage.setItem("finalPrice", JSON.stringify(state.finalPrice));
      sessionStorage.setItem("count", JSON.stringify(state.count));
    },
  },
});

export const { addCard, removeCard, increment, decrement } = cardSlice.actions;
export default cardSlice.reducer;
