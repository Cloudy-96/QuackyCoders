// TODO: Import SVGs
import { Twitter, Twitch, Facebook, Instagram } from "../assets/Socials.jsx";
import "../assets/twitter.svg";

export default function Footer() {
  const socials = [
    { id: 0, name: "twitter", socialLink: "", svg: "Twitter" },
    { id: 1, name: "instagram", socialLink: "", svg: "Instagram" },
    { id: 2, name: "facebook", socialLink: "", svg: "Facebook" },
    { id: 3, name: "twitch", socialLink: "", svg: "Twitch" },
  ];

  return (
    <section className="grid justify-center gap-12">
      {/* TODO: Make way bigger */}
      <h1 className="font-extrabold text-[30em] ">2023</h1>

      <ul className="flex gap-24 justify-center">
        {socials.map((social) => (
          <li
            key={social.id}
            className="flex justify-center align-center w-28 h-28"
          >
            {/* TODO: restyle and degub SVG */}
            <a
              className="text-white"
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
