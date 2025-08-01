import React from "react";

const styles = {
  container: {
    background: "#000",
    color: "#fff",
    padding: "40px 20px",
    fontFamily: "Georgia, serif",
    minHeight: "350px",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    borderTop: "1px solid #666"
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingRight: "40px",
    borderRight: "1px solid #222"
  },
  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: "40px"
  },
  eyeText: {
    fontSize: "18px",
    marginTop: "0",
    marginBottom: "80px",
    color: "#efe6e1"
  },
  connectText: {
    fontSize: "38px",
    fontWeight: "normal"
  },
  info: {
    marginBottom: "20px",
    fontSize: "16px"
  },
  address: {
    marginBottom: "15px",
    fontSize: "15px"
  },
  socials: {
    display: "flex",
    gap: "20px",
    marginTop: "10px"
  },
  footerLinks: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    fontSize: "15px",
    gap: "5px"
  },
  link: {
    color: "#fff",
    textDecoration: "underline"
  }
};

const socialIcons = [
  // Use Font Awesome icons or similar
  <i className="fab fa-facebook-f" aria-label="Facebook" />, 
  <i className="fab fa-instagram" aria-label="Instagram" />,
  <i className="fab fa-x-twitter" aria-label="X" />,
  <i className="fab fa-tiktok" aria-label="TikTok" />
];

function Footer() {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div style={styles.eyeText}>
          It once caught my eye.
        </div>
        <div style={styles.connectText}>
          Connect with Us
        </div>
      </div>
      <div style={styles.right}>
        <div style={styles.info}>
          123-456-7890<br />
          info@mysite.com
        </div>
        <div style={styles.address}>
          500 Terry Francine Street,<br />
          6th Floor, San Francisco,<br />
          CA 94158
        </div>
        <div style={styles.socials}>
          {socialIcons}
        </div>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.link}>Privacy Policy</a>
          <a href="#" style={styles.link}>Accessibility Statement</a>
          <a href="#" style={styles.link}>Shipping Policy</a>
          <a href="#" style={styles.link}>Terms &amp; Conditions</a>
          <a href="#" style={styles.link}>Refund Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
