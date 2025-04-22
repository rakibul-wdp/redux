import { useForm } from "react-hook-form";
import PostCard from "../components/layout/PostCard";
import {
  useGetPostByIdQuery,
  useSetPostMutation,
} from "../redux/features/api/baseApi";

const Feed = () => {
  // const { data: posts, isLoading, isError } = useGetPostsQuery();
  const { register, handleSubmit } = useForm();

  const { data: post, isLoading, isError } = useGetPostByIdQuery(1);

  const [setPost, { data: postData }] = useSetPostMutation();

  console.log(postData);

  const onSubmit = (data) => {
    setPost({ title: "this is title", body: data.post, userId: 999 });
  };

  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading...!!!</p>;
  }

  if (!isLoading && isError) {
    return <p className="text-9xl text-zinc-300">Something wrong</p>;
  }

  return (
    <div>
      <h1 className="text-zinc-300">Feed</h1>
      <div className="my-10">
        <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full text-zinc-300 bg-zinc-800 p-3 rounded-md"
            type="text"
            {...register("post")}
          />
          <button
            type="submit"
            className="bg-zinc-800 text-zinc-300 text-lg p-3 border border-zinc-300 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-3">
        {/* {posts?.map((post) => ( */}
        <PostCard key={post.id} post={post} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Feed;
