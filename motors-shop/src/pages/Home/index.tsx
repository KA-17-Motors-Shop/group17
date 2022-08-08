import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header isLogged={false} />
      <main></main>
      <Footer />
    </div>
  );
};

export default Home;
