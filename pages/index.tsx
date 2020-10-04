import { useState } from "react";
import Head from "next/head";
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import { TiSortAlphabetically } from "react-icons/ti";

import Input from "../components/Input";
import { Button } from "../components/Button";

const HomePage = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [fullname, setFullname] = useState<string>();
  const [teacher, setTeacher] = useState(false);

  const [register, setRegister] = useState(false);

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
            onClick={null}
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
        <section className="w-2/3"></section>
      </main>
    </>
  );
};

export default HomePage;
