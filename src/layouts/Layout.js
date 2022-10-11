import React from "react";
import { Header, Footer, Navbar, NavBubble } from "components";

export default function Layout({ headerProps, children }){

  return(
    <>
      <Navbar />
      <NavBubble />
      <Header {...headerProps} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}