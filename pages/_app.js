import BouncingBalls from "../components/BouncingBalls";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <BouncingBalls />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
