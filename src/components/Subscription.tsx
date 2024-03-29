//TODO: capitalise the includes in the map function

export default function Subcription() {
  const subOptions = [
    {
      id: 0,
      title: "Quacktastic Monthly",
      cost: 9.99,
      per: "MO",
      includes: ["1 Duck", "Info Card", "Free Shipping"],
    },
    {
      id: 1,
      title: "Quacktacular Quarterly",
      cost: 24.99,
      per: "QTR",
      includes: ["1 Duck", "Collector's edition", "Info Card", "Free Shipping"],
    },
    {
      id: 2,
      title: "Quacktastic Annual",
      cost: 89.99,
      per: "YR",
      includes: [
        "12 Ducks",
        "Collector's edition",
        "Info Card",
        "Free Shipping",
      ],
    },
  ];

  return (
    <div className="flex justify-center align-center m-[24px] lg:m-24 ">
      <ul className="flex gap-6 lg:gap-12 w-auto lg:justify-center pb-[12px] lg:pb-0 overflow-x-auto">
        {subOptions.map((sub) => (
          <li
            key={`key${sub.id}`}
            className="bg-grey grid gap-11 rounded-3xl p-8 lg:p-20"
          >
            <div className="grid gap-2">
              <p className="font-semibold">{sub.title}</p>
              <h2 className="font-bold text-3xl">
                £{sub.cost}/{sub.per}
              </h2>
            </div>

            <ul>
              {sub.includes.map((item) => (
                <li className="index py-[2px]"> 🦆 {item}</li>
              ))}
            </ul>
            <button className="bg-primary h-10 rounded-lg font-semibold">
              Subscribe Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
