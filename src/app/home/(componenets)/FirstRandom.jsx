function FirstRandom() {
  return (
    <div className="my-8 flex  items-center pr-14">
      <img
        src="/firstrandom/firstrandom.png"
        width={600}
        height={600}
        alt="first"
        className="border border-foreground p-1 "
      />
      <div className="ml-5">
        <p className="text-4xl font-bold">
          Simple Ways to inspire Your Inner Innovator
        </p>
        <p className="text-2xl my-2">
          Whether you are an aspiring artist, a curios thinker, or simply
          looking to add a touch of creativity to your routine, our journey
          together will remind you that creativity knowns no bounds. Get ready
          to unlock a world of innovation and self-expression
        </p>
        <button className="bg-foreground text-background font-bold my-2 py-3 px-5 rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
}

export default FirstRandom;
