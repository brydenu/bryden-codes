import React from "react";
import { Header, Footer, Navbar } from "components";

export default function Layout({ headerProps, children }){

  return(
    <>
      <Navbar />
      <header>
        <Header {...headerProps} />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}