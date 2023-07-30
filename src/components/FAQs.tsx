export default function FAQs() {
  const FAQs = [
    {
      id: 0,
      question: "How does the subscription work?",
      answer:
        "Choose a subscription plan and we’ll deliver a unique rubber duck with an info card straight to your door every month, quarter, or year.",
    },
    {
      id: 1,
      question: "Can I cancel at any time?",
      answer:
        "Yes, you can cancel or modify your subscription at any time through your account settings.",
    },
    {
      id: 2,
      question: "What sets Quacky Coders apart?",
      answer:
        "Our handpicked and carefully designed rubber duck collection with engaging themes specifically targets software developers and makes debugging sessions entertaining.",
    },
    {
      id: 3,
      question: "Can I gift a subscription?",
      answer:
        "Yes, you can gift a loved one or a colleague the joy of debugging with our ducks as a token of appreciation or a fun keepsake.",
    },
  ];
  return (
    <section className="grid gap-12 justify-center w-screen my-24">
      <h1 className="text-4xl font-bold w-screen px-60">
        Quacktions & Answers
      </h1>

      <ul className=" grid grid-cols-2 gap-y-12 gap-x-40 w-screen px-60 justify-items-start">
        {FAQs.map((FAQ) => (
          <li key={FAQ.id} className="w-80">
            <h2 className="text-lg font-bold  text-darkBlue capitalize">
              {FAQ.question}
            </h2>
            <p className="text-lg">{FAQ.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
