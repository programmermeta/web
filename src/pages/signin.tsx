import Image from "next/image";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaArrowCircleRight } from "react-icons/fa";
import Button from "../components/Button";
import { publicApi } from "../services/api";
import { toast } from "react-toastify";
import { useAtom } from "jotai";
import { refreshAtom } from "../atoms";
import { useRouter } from "next/router";
import { tokenName } from "../utils/constants";
import Header from "../components/Header";

const schema = yup.object({
  username: yup.string().required("username cannot be empty"),
  password: yup.string().required("password cannot be empty"),
});

const SigninPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [, setRefresh] = useAtom(refreshAtom);
  const router = useRouter();

  const onSubmit: SubmitHandler<{
    username: string;
    password: string;
  }> = async (values) => {
    try {
      const res = await publicApi.post("/api/v1/auth/login", values);
      localStorage.setItem(tokenName, res.data.token);
      setRefresh(true);
      router.replace("/dashboard");
    } catch (err: any) {
      return toast.error(err.response.data.message);
    }
  };

  return (
    <section className="text-white w-screen h-screen flex flex-col md:grid md:gap-8 md:grid-cols-[1fr_2fr]">
      <section className="p-8 md:p-16 flex flex-col">
        <Header />
        <section className="mt-8 flex-grow md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl md:text-6xl font-bold">welcome back.</h1>
          <form
            className="my-12 flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              htmlFor="username"
              className="text-md md:text-xl flex flex-col mb-2"
            >
              <div className="mb-2">username</div>
              <input
                type="text"
                className="rounded-lg p-3 bg-dark"
                {...register("username")}
              />
              {errors?.username && (
                <div className="text-red-500">{errors.username.message}</div>
              )}
            </label>
            <label
              htmlFor="password"
              className="text-md md:text-xl flex flex-col"
            >
              <div className="mb-2">password</div>
              <input
                type="password"
                className="rounded-lg p-3 bg-dark"
                {...register("password")}
              />
              {errors?.password && (
                <div className="text-red-500">{errors.password.message}</div>
              )}
            </label>
            <div className="p-2" />
            <Button type="submit">
              login <FaArrowCircleRight size={20} />
            </Button>
          </form>
        </section>
      </section>
      <section className="h-full w-full relative">
        <Image priority src="/login.webp" layout="fill" objectFit="cover" />
      </section>
    </section>
  );
};

export default SigninPage;
