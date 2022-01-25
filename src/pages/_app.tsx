import { useAtom } from "jotai";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { refreshAtom, userAtom } from "../atoms";
import { privateApi } from "../services/api";
import "../styles/globals.css";
import { User } from "../types";
import { tokenName } from "../utils/constants";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false);
  const [, setUser] = useAtom(userAtom);
  const [refresh, setRefresh] = useAtom(refreshAtom);

  const router = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await privateApi.get("/api/v1/auth/me");
        console.log(res.data);
        if (res.data.ok) {
          localStorage.setItem(tokenName, res.data.token);
          setUser(res.data.user as User);
          router.replace("/dashboard");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoaded(true);
      }
    };

    if (refresh) {
      fetchUser();
      setRefresh(false);
    }
  }, [refresh]);

  if (!loaded) return <div>Loading...</div>;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
