export default function About() {
  return (
    <section className="bg-black flex-row text-primary h-screen py-24 w-full">
      <div className="flex flex-row-reverse justify-center space-x-24 w-fit m-auto mb-16">
        <img
          className="w-96 rounded-lg hue-rotate-60"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Famzftw.com%2Fwp-content%2Fuploads%2F2015%2F02%2Frubber-duckies2.jpg&f=1&nofb=1&ipt=b62223e72418ef6b70f4d7391ca1db42863dde460254879f4a80a9dbc9b2aa54&ipo=images"
          alt="Lots of rubber ducks"
        />
        <div className="self-center display grid gap-6 ">
          <h2 className="uppercase font-bold text-xl w-7/12">
            Banish tedious debugging with quirky rubber ducks!
          </h2>

          <p className="w-7/12">
            Each duck holds the power to make your coding experience delightful
            and engaging whils assisting in problem-solving.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-16 w-fit m-auto">
        <img
          className="h-96 rounded-lg mx-24"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Famzftw.com%2Fwp-content%2Fuploads%2F2015%2F02%2Frubber-duckies2.jpg&f=1&nofb=1&ipt=b62223e72418ef6b70f4d7391ca1db42863dde460254879f4a80a9dbc9b2aa54&ipo=images"
          alt="Lots of rubber ducks"
        />
        <div className="self-center display grid gap-6">
          <h2 className="uppercase  font-bold text-xl w-7/12">
            Debugging made fun with unique monthly deliveries!
          </h2>

          <p className="w-7/12">
            Experience the excitement of receiving a random themed rubber duck,
            specially designed for developers like you.
          </p>
        </div>
      </div>
    </section>
  );
}
