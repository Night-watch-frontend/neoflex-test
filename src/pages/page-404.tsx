import { FC } from "react";
import { Header } from "../shared/components/header";
import { Main } from "../shared/components/main";
import { Footer } from "../shared/components/footer";

export const Page404: FC = () => {
  return (
    <>
      <Header />
      <Main>
        <div>
          <h2 style={{ textAlign: "center" }}>{"Page not found"}</h2>
        </div>
      </Main>
      <Footer />
    </>
  );
};
