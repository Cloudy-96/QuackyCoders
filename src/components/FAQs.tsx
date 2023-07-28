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
      question: "What sets Quacky Coders apart?",
      answer:
        "Our handpicked and carefully designed rubber duck collection with engaging themes specifically targets software developers and makes debugging sessions entertaining.",
    },
    {
      id: 2,
      question: "Can I cancel at any time?",
      answer:
        "Yes, you can cancel or modify your subscription at any time through your account settings.",
    },
    {
      id: 3,
      question: "Can I gift a subscription?",
      answer:
        "Yes, you can gift a loved one or a colleague the joy of debugging with our ducks as a token of appreciation or a fun keepsake.",
    },
  ];
  return (
    <section>
      <h1 className="text-3xl font-bold">Quacktions & Answers</h1>

      <ul className="flex">
        {FAQs.map((FAQ) => (
          <li className="">
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
