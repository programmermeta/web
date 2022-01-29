import Head from "next/head";
import { FC } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import PrivateHOC from "../hoc/PrivateHOC";

const DashboardPage: FC = () => {
  return (
    <PrivateHOC>
      <Head>
        <title>codespace - dashboard</title>
      </Head>
      <div className="py-12 container mx-auto text-white">
        <Header />
        <div className="mt-12">
          <CreatePost />
        </div>
      </div>
    </PrivateHOC>
  );
};

export default DashboardPage;
