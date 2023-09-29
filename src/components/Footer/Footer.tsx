const Footer = () => {
  return (
    <>
      <div className="footer-border">
        <hr />
        <img src="./pixel.svg" alt="" />
        <hr />
      </div>
      <footer>
        <div className="left-side">
          <img
            src="https://univesthub.com/wp-content/uploads/2022/11/univest-logo-horizon-1-1536x429.png"
            alt="univesthub-logo"
          />

          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            nesciunt atque similique maxime sint suscipit saepe numquam iste.
          </p>
          <div className="social-side">
            <img src="./instagram.svg" alt="instagram" />
            <img src="./facebook.svg" alt="facebook" />
            <img src="./twitter.svg" alt="twitter" />
          </div>
        </div>
        <div className="right-side">
          <ul className="first-list">
            <li className="first-list-item">
              <p>Our Brands</p>
              <ul className="second-list">
                <li>Univestup</li>
                <li>Univestshop</li>
                <li>UnivestAcad</li>
                <li>CyberHoly</li>
                <li>AppCommenter</li>
                <li>UnivestPay</li>
              </ul>
            </li>
            <li className="first-list-item">
              <p>Developers</p>
              <ul className="second-list">
                <li>Forum</li>
                <li>Projects</li>
                <li>Open Source</li>
              </ul>
            </li>
            <li className="first-list-item">
              <p>Company</p>
              <ul className="second-list">
                <li>About Us</li>
                <li>Careers</li>
                <li>Partnerships</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </li>
            <li className="first-list-item">
              <p>Resources</p>
              <ul className="second-list">
                <li>Docs</li>
                <li>Blog</li>
                <li>Learn More</li>
              </ul>
            </li>
            <li className="first-list-item">
              <form className="subscribe-form">
                <p>Subscribe</p>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Company" />
                <input type="submit" value="Subscribe" />
              </form>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}
export default Footer
