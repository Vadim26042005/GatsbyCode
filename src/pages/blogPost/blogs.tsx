import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <div className="place-content-center flex flex-row space-x-4 mx-auto">
        {data.allMdx.nodes.map((node) => {
          // Extract the image using getImage
          const image = getImage(node.frontmatter.hero_image);

          return (
            <div
              className="border-black border-4 max-w-48 px-8 py-2"
              key={node.id}
            >
              <article>
                <h2>
                  <Link to={`/blogPost/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
                <div className="mx-1">
                  {image && (
                    <GatsbyImage
                      image={image}
                      alt={node.frontmatter.hero_image_alt || "Blog hero image"}
                    />
                  )}
                </div>
                <p>{node.excerpt}</p>
                {/* Render the image if it exists */}
              </article>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
