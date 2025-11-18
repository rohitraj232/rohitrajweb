import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    {/* <!-- footer part start --> */}
    <footer className="footer-area">
      <div className="container">
        <div className="text text-center">
          <p>@ Copyright 2025, Design By <Link to="#">Rohit Raj</Link></p>
        </div>
      </div>
    </footer>
    {/* <!-- footer part end --> */}
    </>
  )
}

export default Footer