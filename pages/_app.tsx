import Header from "../components/Header";
import "../styles/main.css";

function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen h-full font-body bg-white text-gray-700">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
