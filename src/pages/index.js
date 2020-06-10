import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroIcon from "../components/HeroIcon"
import Card from "../components/Card"
import Section from "../components/Section"
import IndexBackgroundWave from "../components/indexBackgroundWave"
import GridText from "../components/GridText"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to<br/>design and code modern apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>

        <Link to="/video">
          <button>Watch the video</button>
        </Link>
        
        <div className="HeroIcons">
          <HeroIcon pic={require('../images/logo-sketch.png')} />
          <HeroIcon pic={require('../images/logo-figma.png')} />
          <HeroIcon pic={require('../images/logo-react.png')} />
          <HeroIcon pic={require('../images/logo-swift.png')} />
          <HeroIcon pic={require('../images/logo-studio.png')} />
          <HeroIcon pic={require('../images/logo-xcode.png')} />
        </div>
      </div>
      <IndexBackgroundWave />
    </div>

    <div className="Cards">
      <h2>卡片群组标题</h2>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="10 sections"
          tag="New"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="React for Designers"
          text="11 sections"
          tag="New"
          image={require('../images/wallpaper2.jpg')} />
        <Card
          title="Sound Design"
          text="11 sections"
          tag="New"
          image={require('../images/wallpaper3.jpg')} />
        <Card
          title="ARKit 2"
          text="11 sections"
          tag="Class"
          image={require('../images/wallpaper4.jpg')} />
        <Card
          title="Figma"
          text="11 sections"
          tag="Class"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="Sketch"
          text="11 sections"
          tag="Class"
          image={require('../images/wallpaper2.jpg')} />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <GridText />
  </Layout>
)

export default IndexPage
