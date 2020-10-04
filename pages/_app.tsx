import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { User, UserContext } from "../utils/user";
import Header from "../components/Header";
import "../styles/main.css";

function App({ Component, pageProps }) {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user");
    if (token && userId) {
      axios
        .get(`${process.env.SERVER_BASE_URL}/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((userRes) => {
          setUser({
            id: userId,
            username: userRes.data.username,
            fullname: userRes.data.fullname,
            teacher: userRes.data.teacher,
          });
        });
    }
  }, []);

  return (
    <div className="min-h-screen h-full font-body bg-white text-gray-700">
      <UserContext.Provider value={[user, setUser]}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
