export default function Newsletter() {
  return (
    <section className="grid justify-center gap-12 p-24 bg-[pink]">
      <h1 className="uppercase text-3xl font-bold">
        Join our Quacktastic Newsletter
      </h1>

      <form className="grid gap-2">
        <input
          className="w-96 h-12 rounded-3xl bg-grey p-3.5"
          type="email"
          placeholder="name@email.com"
        ></input>
        <button className="w-96 h-12  rounded-3xl bg-orange" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}
