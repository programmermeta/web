import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { FC } from "react";
import { userAtom } from "../atoms";

const PrivateHOC: FC = ({ children }) => {
  const router = useRouter();
  const [user] = useAtom(userAtom);

  if (!user) router.replace("/");

  return <>{user && children}</>;
};

export default PrivateHOC;
