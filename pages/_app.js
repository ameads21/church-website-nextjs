import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "../components/NavBar/NavBarComponent";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarComponent />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
