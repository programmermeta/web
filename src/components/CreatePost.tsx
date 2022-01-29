import { FC } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import { privateApi } from "../services/api";

const postSchema = yup.object({
  title: yup.string().required().trim(),
  message: yup.string().required().trim(),
});

const CreatePost: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
    defaultValues: {
      title: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<{ title: string; message: string }> = async (
    values
  ) => {
    await privateApi.post("/api/v1/posts", values);
  };

  return (
    <>
      <div className="mb-4 text-xl text-primary font-light">
        what's on your mind today?
      </div>
      <form
        className="shadow rounded-xl bg-dark flex flex-col gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          className="w-full bg-transparent font-bold text-3xl pt-8 px-8 border-none outline-none"
          placeholder="AMAZING TITLE"
          {...register("title")}
        />
        <textarea
          className="w-full bg-transparent text-xl pb-8 px-8 border-none outline-none"
          placeholder="type your message here..."
          rows={3}
          {...register("message")}
        />
        <div className="pb-8 px-8 w-40 ml-auto">
          <Button type="submit">post</Button>
        </div>
      </form>
    </>
  );
};

export default CreatePost;
