import React from "react";

const Footer = props => {
  return (
    <footer>
      <div className="footer">
        <p className="text text-center">
          <small>Developed by {props.author}</small>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
