import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import petsStyles from './pets.module.scss'


function PetsPage() {
    const data = useStaticQuery(graphql`
        query { 
            allFile(filter: {relativePath: {}, sourceInstanceName: {eq: "pets"}}) 
            {
                nodes {
                    childImageSharp {
                        sizes {
                            originalName
                            src
                        }
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    id
                }
            
            }
        }
    `)
    
    //console.log(data)
    const imageList = data.allFile.nodes.map(picture => {
        return (
            <div key={ picture.id }className={petsStyles.gallery__div}>
                {/* <img className={petsStyles.gallery__pic} src={picture.childImageSharp.fluid.src} alt='cucciolo' ></img>
                 */}
                 <Img className={petsStyles.gallery__pic} fluid={picture.childImageSharp.fluid} alt='cucciolo' />
            </div>
        )
    })
    //console.log(imageList)

    return (
        <Layout>
            <h1>Our Pets</h1>
            <div className={petsStyles.gallery}>
                 {imageList} 
             </div>        
        </Layout>
    )
}
export default PetsPage
