import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm making this by Adding Layout function.</p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
