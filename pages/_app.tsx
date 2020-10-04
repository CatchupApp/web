import React, { useContext, useState } from "react";

import { User, UserContext } from "../utils/user";
import Header from "../components/Header";
import "../styles/main.css";

function App({ Component, pageProps }) {
  const [user, setUser] = useState<User>();

  return (
    <div className="min-h-screen h-full font-body bg-white text-gray-700">
      <UserContext.Provider value={[user, setUser]}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
