import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

function BlogPage() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        excerpt
                        html
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog Posts</h1>
            <ul>
                {data.allMarkdownRemark.edges.map(edge => {
                    return(
                        <li>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h3>Title: {edge.node.frontmatter.title}</h3>
                                <p>{edge.node.excerpt.slice(0, 30)}...</p>
                                <h4>Date: {edge.node.frontmatter.date}</h4>
                            </Link>
                            
                        </li>
                    )
                })}
            </ul>

        </Layout>
    )
}

export default BlogPage
