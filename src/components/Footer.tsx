// TODO: Import SVGs
import { Twitter, Twitch, Facebook, Instagram } from "../assets/Socials.jsx";
import "../assets/twitter.svg";

export default function Footer() {
  const socials = [
    {
      id: 0,
      name: "twitter",
      socialLink: "https://twitter.com/?lang=en-gb",
      svg: "Twitter",
    },
    {
      id: 1,
      name: "instagram",
      socialLink: "https://www.instagram.com/",
      svg: "Instagram",
    },
    {
      id: 2,
      name: "facebook",
      socialLink: "https://www.facebook.com/",
      svg: "Facebook",
    },
    {
      id: 3,
      name: "twitch",
      socialLink: "https://www.twitch.tv/",
      svg: "Twitch",
    },
  ];

  return (
    <section className="flex-col justify-center space-y-4 md:space-y-8 lg:space-y-24 p-[24px]">
      {/* TODO: Make way bigger */}
      <h1 className="font-extrabold text-center text-[90px] md:text-[120px] lg:text-[20em] ">
        2023
      </h1>

      <ul className="flex gap-4 lg:gap-24 justify-center">
        {socials.map((social) => (
          <li
            key={social.id}
            className="flex justify-center align-center lg:w-28 lg:h-28"
          >
            {/* TODO: restyle and degub SVG */}
            <a
              className="text-white *:w-[40px] *:h-[40px] "
              href={social.socialLink}
              target="_blank"
              rel="noreferrer"
            >
              {social.svg === "Twitter" ? (
                <Twitter />
              ) : social.svg === "Facebook" ? (
                <Facebook />
              ) : social.svg === "Twitch" ? (
                <Twitch />
              ) : (
                <Instagram />
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
