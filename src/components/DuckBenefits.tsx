export default function DuckBenefits() {
  const benefits = [
    {
      id: 0,
      title: "Engaging process",
      info: "Transform debugging into a delightfiul experience.",
    },
    {
      id: 1,
      title: "Improved Focus",
      info: "Convey your thoughts better to your duck debugger.",
    },
    {
      id: 2,
      title: "Communication Skills",
      info: "Enhance your ability to articulate complex problems.",
    },
    {
      id: 3,
      title: "Debugging Efficiency",
      info: "Quicken the pace of discovering solution insights.",
    },
    {
      id: 4,
      title: "Novel Collection",
      info: "Adorn your workspace with an ever-growing duck army.",
    },
    {
      id: 5,
      title: "Fun Conversations",
      info: "Be the talk of the office with your quirky companions.",
    },
  ];

  return (
    <section className="grid gap-12 justify-center w-11/12">
      <h1 className="text-3xl font-bold">Duck debugging benefits</h1>

      <ul className=" grid grid-cols-2 gap-y-12 gap-x-40">
        {benefits.map((benefit) => (
          <li className="w-80">
            <h2 className="text-lg font-bold capitalize">{benefit.title}</h2>
            <p className="text-darkBlue text-lg">{benefit.info}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
