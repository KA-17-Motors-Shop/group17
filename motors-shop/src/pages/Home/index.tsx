import BannerMain from "../../components/BannerMain";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Main, Page } from "./styles";

const Home: React.FC = () => {
  return (
    <Page>
      <Header />
      <Main>
        <BannerMain />
      </Main>
      <Footer />
    </Page>
  );
};

export default Home;
