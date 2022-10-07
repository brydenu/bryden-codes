import React from "react";
import { Header, Footer, Navbar, NavBubble } from "components";

export default function Layout({ headerProps, children }){

  return(
    <>
      <Navbar />
      <NavBubble />
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