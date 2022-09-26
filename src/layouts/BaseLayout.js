import React from "react";
import { Footer, Navbar } from "components";

export default function BaseLayout({ children }){
  return(
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}