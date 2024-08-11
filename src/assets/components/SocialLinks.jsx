import React from "react";
import { social_data } from "../constants/footer_data";

const SocialLinks = () => {
  return (
    <ul className="social-list flex justify-center gap-[10px]  pb-[15px] ">
      {social_data.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className="social-link font-fw-500 hover:underline focus-visible:underline"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
