import "../styles/globals.css";
import React, { useContext, useState } from "react";
import { AppContextProvider, AppContext } from "../AppContext";
import { useRouter } from "next/router";

const ConnectComponent = ({ Component, pageProps }) => {
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();

  return <Component {...pageProps} router={router} />;
};

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ConnectComponent Component={Component} pageProps={pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
