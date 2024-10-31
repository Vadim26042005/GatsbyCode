import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="max-w-4xl mx-auto space-y-4 border-black border-4">
      <header className="border-black border-4">
        {data.site.siteMetadata.title}
      </header>

      <nav className=" ">
        <ul className=" flex flex-row justify-center space-x-4 ">
          <li className="text-red-500 border-4 border-red-500 px-4 ">
            <Link to="/blogPost">Home</Link>
          </li>

          <li className="text-red-500 border-4 border-red-500 px-4">
            <Link to="/about">About</Link>
          </li>

          <li className="text-red-500 border-4 border-red-500 px-4">
            <Link to="/blogPost/blogs">Blog</Link>
          </li>
        </ul>
      </nav>
      <main className="px-4 space-y-4">
        <h1 className="border-black border-4 p-1 px-4 space-y-4 ">
          {pageTitle}
        </h1>

        {children}
      </main>
    </div>
  );
};

export default Layout;
