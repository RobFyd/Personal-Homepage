import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
// import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/RobFyd",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "LinkedIn",
    url: "http://linkedin.com/in/robert-fydrych",
    Icon: styleIcon(LinkedInIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/robert.fydrych",
    Icon: styleIcon(FacebookIcon),
  },

  // {
  //   name: "Instagram",
  //   url: "https://instagram.com",
  //   Icon: styleIcon(InstagramIcon),
  // },
];
