import Head from "next/head";
import { FC } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useQuery } from "react-query";
import CreatePost from "../components/CreatePost";
import Header from "../components/Header";
import PrivateHOC from "../hoc/PrivateHOC";
import { privateApi } from "../services/api";

const DashboardPage: FC = () => {
  const {
    data: posts,
    isLoading,
    refetch,
  } = useQuery("fetchPosts", async () => {
    const res = await privateApi.get("/api/v1/posts");
    return res.data.posts;
  });

  const votePost = async (id: string, type: string) => {
    await privateApi.get(`/api/v1/posts/vote/${id}/${type}`);
    refetch();
  };

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
        <section className="my-12">
          {isLoading ? (
            <h2>loading posts...</h2>
          ) : (
            posts.map((post: any) => (
              <div key={post.id} className="p-8 shadow-md">
                <p className="text-lg font-bold pb-2">@{post.user.username}</p>
                <hr />
                <div className="pt-2">
                  <p className="text-3xl font-bold">{post.title}</p>
                  <p className="text-xl leading-relaxed mt-2">{post.message}</p>
                </div>
                <div className="mt-8 flex gap-8">
                  <div
                    className="flex gap-3 items-center"
                    onClick={() => votePost(post.id, "positive")}
                  >
                    <FaThumbsUp size={20} />
                    {post.positiveCount}
                  </div>
                  <div
                    className="flex gap-3 items-center"
                    onClick={() => votePost(post.id, "negative")}
                  >
                    <FaThumbsDown size={20} />
                    {post.negativeCount}
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </PrivateHOC>
  );
};

export default DashboardPage;
