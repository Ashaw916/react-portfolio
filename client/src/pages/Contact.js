import React from "react";

// const Mailto = ({ email, subject, body, children }) => {
//   return (
//     <a
//       href={`mailto:${email}?subject=${
//         encodeURIComponent(subject) || ""
//       }&body=${encodeURIComponent(body) || ""}`}
//     >
//       {children}
//     </a>
//   );
// };

function Contact() {
  return (
    <div className="row cont-cont">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <a
          id="contact"
          className="mailTo"
          href="mailto:a.s.young530@gmail.com?subject=Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </a>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
}

export default Contact;
