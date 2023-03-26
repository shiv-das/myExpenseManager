import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../AppContext";
import axios from "../axios";
import { auth } from "../actions";

export default function Login(props) {
  console.log(props);

  const [router, setRouter] = React.useState({});
  const { state, dispatch } = useContext(AppContext);

  React.useEffect(() => {
    if (localStorage.getItem("x-auth-token")) {
      dispatch(auth({}, true));
      props.router.push("/list");
    }
    setRouter(props.router);
  }, []);

  const [validateLogin, setValidateLogin] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    console.log(payload);
    try {
      const res = await axios({
        method: "POST",
        url: "/login",
        data: {
          email: email,
          password: password,
        },
        headers: { "content-type": "application/json" },
      });
      console.log("hello");
      console.log(res);
      setValidateLogin(false);
      localStorage.setItem("x-auth-token", res.data["authorization"]);
      dispatch(auth({}, true));
      router.push("/list");
    } catch (e) {
      console.log("error");
      setValidateLogin(true);
      console.log(e);
    }
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img src="logo.png" className="w-full" alt="Sample image" />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="text"
                  placeholder="Email"
                  onChange={(e) => {
                    console.log(email);
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="**********"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
