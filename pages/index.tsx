import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const IndexPage = () => {
  return (
    <div className="text-white font-body min-h-screen flex flex-col container m-auto p-12 md:p-0">
      <header>
        <nav className="py-8">
          <div className="font-logo text-xl md:text-4xl">
            <span className="border-b-4 border-primary">code</span>
            <span className="text-primary">space</span>
          </div>
        </nav>
      </header>
      <section className="flex-grow grid grid-cols-1 md:grid-cols-2">
        <div className="self-center text-center md:text-left">
          <div className="text-4xl leading-normal md:text-7xl md:leading-normal">
            a social media for{" "}
            <span className="text-primary font-bold">developers</span>
          </div>
          <ul className="mt-10 text-sm leading-loose md:text-2xl md:leading-loose">
            <li>- completely free and open source</li>
            <li>- share code snippets with others easily</li>
          </ul>
          <Link href="/signin" passHref>
            <a className="flex items-center gap-3 w-max px-6 py-3 mx-auto md:mx-0 my-16 md:px-8 md:py-4 bg-accent text-xs md:text-xl tracking-widest rounded-lg">
              get started <FaArrowCircleRight size={20} />
            </a>
          </Link>
        </div>
        <div className="w-full h-full relative">
          <Image priority layout="fill" src="/hero.svg" />
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
