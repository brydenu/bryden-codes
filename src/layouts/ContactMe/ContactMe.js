import React from "react";
import Layout from "layouts/Layout";
import { Contact } from "components";

export default function ContactMePage() {

  const title = <h1>Contact Me</h1>
  const subtitle = <div>Let's connect.</div>
  const content = <div>I'm usually available and will respond ASAP through LinkedIn, Twitter, or the message system below. I'm always open to new opportunities, connections, and/or feedback. So don't be shy, let's connect!</div>


  const headerProps = { title, subtitle, content };
  return (
    <Layout headerProps={headerProps}>
      <Contact />
    </Layout>
  )
}