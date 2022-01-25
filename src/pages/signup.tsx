import Image from "next/image";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaArrowCircleRight } from "react-icons/fa";
import { debounce } from "lodash-es";
import Button from "../components/Button";
import { publicApi } from "../services/api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const validateUsername = async (
  value: string | undefined,
  resolve: (val: boolean) => void
) => {
  const res = await publicApi.get(`/api/v1/users/check/${value}`);
  return resolve(!!res.data.ok);
};

const validateDebounced = debounce(validateUsername, 1000);

const schema = yup.object({
  username: yup
    .string()
    .required()
    .test(
      "checkUsername",
      "oops! username is already taken :(",
      (value) => new Promise((resolve) => validateDebounced(value, resolve))
    ),
  password: yup
    .string()
    .required("Password cannot be empty")
    .min(4, "Password is too short"),
});

const SignupPage: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: any) => {
    try {
      await publicApi.post("/api/v1/users", values);
      router.push("/signin");
    } catch (err: any) {
      return toast.error(err.response.data.message);
    }
  };

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
          <h1 className="text-3xl md:text-6xl font-bold">get started now.</h1>
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
              htmlFor="username"
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
              signup <FaArrowCircleRight size={20} />
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

export default SignupPage;
