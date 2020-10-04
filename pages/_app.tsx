import Header from "../components/Header";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-body">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
