import { Link } from "gatsby"
import React, {useState, useEffect} from "react"
import "./Header.css"

const Header =()=> {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(()=> {
    window.addEventListener('scroll',
    hanldScroll)
  })

  let hanldScroll = () => {
    const scrollTop = window.pageYOffset
    scrollTop >= 50 ? setHasScrolled(true) : setHasScrolled(false)
  }

  return(
    <div className={hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <Link to="/"><img src={require('../images/logo-designcode.svg')}width = "30"></img></Link>
        <Link to="/course">Course</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshop">Workshop</Link>
        <Link to="/buy"><button>Buy</button></Link>
      </div>
    </div>
  )
}

export default Header
