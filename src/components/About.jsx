export default function About() {
  const cards = [
    {
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Famzftw.com%2Fwp-content%2Fuploads%2F2015%2F02%2Frubber-duckies2.jpg&f=1&nofb=1&ipt=b62223e72418ef6b70f4d7391ca1db42863dde460254879f4a80a9dbc9b2aa54&ipo=images",
      title: "Banish tedious debugging with quirky rubber ducks!",
      description:
        " Each duck holds the power to make your coding experience delightful and engaging whils assisting in problem-solving.",
    },
    {
      img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Famzftw.com%2Fwp-content%2Fuploads%2F2015%2F02%2Frubber-duckies2.jpg&f=1&nofb=1&ipt=b62223e72418ef6b70f4d7391ca1db42863dde460254879f4a80a9dbc9b2aa54&ipo=images",
      title: " Debugging made fun with unique monthly deliveries!",
      description:
        "Experience the excitement of receiving a random themed rubber duck, specially designed for developers like you.",
    },
  ];

  return (
    <section className="bg-black flex  justify-center text-primary h-fit w-full py-[65px]">
      <div className="flex-col justify-center gap-16 w-[100%] m-auto lg:max-w-[1310px]  space-y-[32px]">
        <div className="w-[100%] lg:max-w-[1310px] flex flex-row-reverse space-y-3 h-[300px] bg-[#1211118f] rounded-lg shadow-sm gap-3">
          <div className="w-[50%] relative">
            <img
              className="h-full w-full absolute object-cover object-center rounded-lg hue-rotate-60"
              src={cards[0].img}
              alt="Lots of rubber ducks"
            />
          </div>

          <div className="self-center display grid gap-6 w-[50%] px-[16px] lg:px-[32px]">
            <h2 className="uppercase  font-bold text-xl w-7/12">
              {cards[0].title}
            </h2>

            <p className="w-7/12">{cards[0].description}</p>
          </div>
        </div>

        <div className="w-[100%] lg:max-w-[1310px] flex space-y-3 h-[300px] bg-[#1211118f] rounded-lg shadow-sm gap-3">
          <div className="w-[50%] relative">
            <img
              className="h-full w-full absolute object-cover object-center rounded-lg  mr-[24px]"
              src={cards[1].img}
              alt="Lots of rubber ducks"
            />
          </div>
          <div className="self-center display grid justify-center items-center gap-6 w-[50%] px-[16px] lg:px-[32px]">
            <h2 className="uppercase  font-bold text-xl w-7/12">
              {cards[1].title}
            </h2>

            <p className="w-7/12">{cards[1].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
