import { FC } from "react";
import { Header } from "../shared/components/header";
import { Main } from "../shared/components/main";
import { Footer } from "../shared/components/footer";
import { Basket } from "../shared/components/basket";

export const PageBasket: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Basket />
      </Main>
      <Footer />
    </>
  );
};
