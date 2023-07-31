// TODO: Import SVGs

export default function Footer() {
  const socials = [
    { id: 0, name: "twitter", socialLink: "" },
    { id: 1, name: "instagram", socialLink: "" },
    { id: 2, name: "facebook", socialLink: "" },
    { id: 3, name: "twitch", socialLink: "" },
  ];

  return (
    <section className="grid justify-center gap-12">
      {/* TODO: Make way bigger */}
      <h1 className="font-extrabold text-9xl ">2023</h1>

      <ul className="flex gap-24 justify-center">
        {socials.map((social) => (
          <li className="flex justify-center align-center w-28 h-28 bg-darkBlue rounded">
            <a
              className="text-white"
              href={social.socialLink}
              target="_blank"
              rel="noreferrer"
            >
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
