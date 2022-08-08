import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BannerMain from "../../components/BannerMain";

const Home: React.FC = () => {
  return (
    <div>
      <Header isLogged={false} />
      <BannerMain />
      <Footer />
    </div>
  );
};

export default Home;
