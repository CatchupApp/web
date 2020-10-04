import { useState, useContext } from "react";
import Head from "next/head";
import { createRouter, useRouter } from "next/router";
import axios from "axios";
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import { TiSortAlphabetically } from "react-icons/ti";

import { User, UserContext } from "../utils/user";
import Input from "../components/Input";
import { Button } from "../components/Button";

const HomePage = () => {
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [teacher, setTeacher] = useState(false);

  const [register, setRegister] = useState(false);

  const submit = () => {
    console.log(process.env.SERVER_BASE_URL);
    if (register) {
      axios
        .post(`${process.env.SERVER_BASE_URL}/user`, {
          username,
          password,
          fullname,
          teacher,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.id);
          setUser({ id: res.data.id, username, fullname, teacher });
          router.push("/dashboard");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${process.env.SERVER_BASE_URL}/auth`, { username, password })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.id);
          axios
            .get(`${process.env.SERVER_BASE_URL}/user/${res.data.id}`, {
              headers: {
                Authorization: `Bearer ${res.data.token}`,
              },
            })
            .then((userRes) => {
              setUser({
                id: res.data.id,
                username,
                fullname: userRes.data.fullname,
                teacher: userRes.data.teacher,
              });
              router.push("/dashboard");
            });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Head>
        <title>Catchup | {register ? "Register" : "Log In"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full flex">
        <section className="w-1/3 flex flex-col justify-center p-8 bg-black text-white">
          <div className="mb-4">
            <p className="opacity-50 text-3xl font-bold">Catchup</p>
            <h1 className="text-5xl font-bold">Welcome</h1>
            <p>
              {register ? "Create your account." : "Accelerate your learning."}
            </p>
          </div>
          <div className="mb-2">
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              icon={AiOutlineUser}
              className="mb-2"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              icon={AiOutlineKey}
              className="mb-2"
            />
            {register ? (
              <>
                <Input
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  icon={TiSortAlphabetically}
                  className="mb-2"
                />
                <div className="flex flex-col justify-center text-center my-4">
                  <p className="mb-4">Select your role.</p>
                  <div className="flex mx-auto">
                    <Button
                      text="Student"
                      onClick={() => setTeacher(false)}
                      className={`${
                        teacher
                          ? "opacity-75 border-transparent"
                          : "border-white"
                      } mx-2 border-4`}
                    />
                    <Button
                      text="Teacher"
                      onClick={() => setTeacher(true)}
                      className={`${
                        teacher
                          ? "border-white"
                          : "opacity-75 border-transparent"
                      } mx-2 border-4`}
                    />
                  </div>
                </div>
              </>
            ) : null}
          </div>
          <Button
            text={register ? "Register" : "Log in"}
            onClick={submit}
            className="w-full justify-center py-3 mb-4"
          />
          <div className="text-center">
            <p className="inline">
              {register ? "Already have an account?" : "Dont' have an account?"}
            </p>
            <span
              className="text-dark inline cursor-pointer"
              onClick={() => setRegister(!register)}
            >
              {register ? " Log in." : " Register."}
            </span>
          </div>
        </section>
        <section className="w-2/3 relative">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 963 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="963" height="1024" fill="#4E4E67" />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="4"
              width="963"
              height="1020"
            >
              <rect y="4" width="963" height="1020" fill="#9F5757" />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M529.5 938C337.1 793.2 95.6667 741.333 -1 733.5V1029.5H967.5V938C901.667 998.333 721.9 1082.8 529.5 938Z"
                fill="#737398"
              />
              <path
                d="M542.5 914C275.7 911.2 70 991.833 0.5 1032.5H1039V684.5C984.667 762.167 809.3 916.8 542.5 914Z"
                fill="#9A9ABC"
              />
            </g>
            <circle cx="605" cy="455" r="113" fill="white" />
          </svg>
        </section>
      </main>
    </>
  );
};

export default HomePage;
