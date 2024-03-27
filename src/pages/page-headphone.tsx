import { FC } from "react";
import { Header } from "../shared/components/header";
import { Main } from "../shared/components/main";
import { ListCard } from "../shared/components/list-card/list-card";
import { Footer } from "../shared/components/footer";
import { headPhones, wireless } from "../shared/helpers/list-products";
import { Outlet } from "react-router-dom";

export const PageHeadPhone: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <ListCard headPhone={headPhones} wireless={wireless} />
      </Main>
      <Footer />
      <Outlet />
    </>
  );
};
