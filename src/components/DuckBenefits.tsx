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
    <section className="grid gap-12 justify-center w-screen lg:max-w-[1300px] *:px-[36px] py-24 m-auto">
      <h1 className=" text-4xl font-bold w-[100%] md:text-center lg:px-60">
        Duck debugging benefits
      </h1>

      <ul className="m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-y-12 justify-center justify-items-center lg:gap-x-12 w-[100%] lg:max-w-[1300px] ">
        {benefits.map((benefit) => (
          <li
            key={benefit.id}
            className="text-balance w-[100%] md:w-[80%] lg:w-[100%] flex lg:justify-center *:text-left"
          >
            <div>
              <h2 className="text-lg font-bold capitalize">{benefit.title}</h2>
              <p className="text-darkBlue text-lg w-[100%] lg:w-[50%] lg:max-w-[300px]">
                {benefit.info}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
