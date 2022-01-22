import Link from "next/link";

const IndexPage = () => {
  return (
    <div className="text-white font-body min-h-screen flex flex-col m-auto container">
      <header>
        <nav className="py-8">
          <div className="font-logo text-4xl">
            code<span className="text-primary">space</span>
          </div>
        </nav>
      </header>
      <section className="flex-grow grid grid-cols-2">
        <div className="self-center">
          <div className="text-7xl leading-normal">
            a social media for{" "}
            <span className="text-primary font-bold">developers</span>
          </div>
          <ul className="mt-10 text-2xl leading-loose">
            <li>- completely free and open source</li>
            <li>- share code snippets with others easily</li>
          </ul>
          <Link href="/" passHref>
            <a className="block w-max my-16 px-8 py-4 bg-accent text-xl font-bold rounded-lg">
              get started
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
