
import React from "react";


const Footer = () => {
  const githubRepoUrl = "https://github.com/Mishra0123";

  return (
    <footer className="footer-box">
      <p><h1>Contribution on GitHub    :</h1>    </p>
      <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer">
      <b>GitHubRepo</b> 
      </a>
    </footer>
  );
};

export default Footer;
