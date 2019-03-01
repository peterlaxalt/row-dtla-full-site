import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/map">
      <a style={linkStyle}>Map</a>
    </Link>
    <Link href="/buildings">
      <a style={linkStyle}>Buildings</a>
    </Link>
    <Link href="/retail">
      <a style={linkStyle}>Retail</a>
    </Link>
    <Link href="/location">
      <a style={linkStyle}>Location</a>
    </Link>
    <Link href="/story">
      <a style={linkStyle}>Story</a>
    </Link>
    <Link href="/availability">
      <a style={linkStyle}>Availability</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
    <Link href="/news">
      <a style={linkStyle}>News</a>
    </Link>
  </div>
)

export default Header