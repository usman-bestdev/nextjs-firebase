import TopNavBar from "../components/TopNavBar";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import HomeCardSession from "../components/HomeCardSection";
import SecurePage from "../authentication/auth-page-wrappers/SecurePage";

const Home = () => {
  return (
    <>
      <SecurePage>
        <TopNavBar />

        <HomeBanner />

        <HomeCardSession />

        <Footer />
      </SecurePage>
    </>
  );
};

export default Home;
