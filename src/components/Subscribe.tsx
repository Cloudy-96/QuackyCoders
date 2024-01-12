export default function Newsletter() {
  return (
    <section className="grid justify-center justify-items-center gap-[24px] md:gap-12 p-[12px] md:p-24 bg-[pink] w-[100%]">
      <h1 className=" w-[100%] uppercase text-xl md:text-3xl font-bold text-center">
        Join our Quacktastic Newsletter
      </h1>

      <form className="w-[100%] grid gap-2 justify-center">
        <input
          className=" w-[100%] md:w-96 md:h-12 rounded-3xl bg-grey p-3.5"
          type="email"
          placeholder="name@email.com"
        ></input>
        <button className="md:w-96 h-12  rounded-3xl bg-orange" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
}
