import Image from "next/image";
import { FC } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Button from "../components/Button";

const SigninPage: FC = () => {
  return (
    <section className="text-white w-screen h-screen flex flex-col md:grid md:gap-8 md:grid-cols-[1fr_2fr]">
      <section className="p-8 md:p-16 flex flex-col">
        <header>
          <nav>
            <div className="font-logo text-xl md:text-4xl">
              <span className="border-b-4 border-primary">code</span>
              <span className="text-primary">space</span>
            </div>
          </nav>
        </header>
        <section className="mt-8 flex-grow md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl md:text-6xl font-bold">welcome back.</h1>
          <form className="my-12 flex flex-col gap-4">
            <label
              htmlFor="username"
              className="text-md md:text-xl flex flex-col mb-2"
            >
              <div className="mb-2">username</div>
              <input type="text" className="rounded-lg p-3 bg-dark" />
            </label>
            <label
              htmlFor="username"
              className="text-md md:text-xl flex flex-col"
            >
              <div className="mb-2">password</div>
              <input type="password" className="rounded-lg p-3 bg-dark" />
            </label>
            <div className="p-2" />
            <Button>
              login <FaArrowCircleRight size={20} />
            </Button>
          </form>
        </section>
      </section>
      <section className="h-full w-full relative">
        <Image priority src="/login.jpg" layout="fill" objectFit="cover" />
      </section>
    </section>
  );
};

export default SigninPage;
