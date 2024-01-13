export default function Newsletter() {
  const validEmail = false;
  const email = "";

  const handleInput = () => {
    //set value of email to value of input
    console.log("emial is changing");
  };

  const handleSubmit = () => {
    // email regex

    if (!validEmail) {
      console.log(":( invalid email");
    }
    console.log("success!");
    return alert("yay");
  };

  return (
    <section className="grid justify-center justify-items-center gap-[24px] md:gap-12 p-[12px] md:p-24 bg-[pink] w-[100%]">
      <h1 className=" w-[100%] uppercase text-xl md:text-3xl font-bold text-center">
        Join our Quacktastic Newsletter
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[100%] grid gap-2 justify-center"
      >
        <input
          className=" w-[100%] md:w-96 md:h-12 rounded-3xl bg-grey p-3.5"
          type="email"
          placeholder="name@email.com"
        ></input>
        {validEmail ? (
          <button
            onClick={handleSubmit}
            className="md:w-96 h-12  rounded-3xl bg-orange shadow-sm"
            type="submit"
          >
            <strong>Sign Up</strong>
          </button>
        ) : (
          <button
            disabled
            onClick={handleSubmit}
            className="md:w-96 h-12  rounded-3xl bg-orange shadow-sm"
            type="submit"
          >
            <strong>Sign Up</strong>
          </button>
        )}
      </form>
    </section>
  );
}
