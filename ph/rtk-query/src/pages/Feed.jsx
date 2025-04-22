import PostCard from "../components/layout/PostCard";
import {
  useGetPostByIdQuery,
  useGetPostsQuery,
} from "../redux/features/api/baseApi";

const Feed = () => {
  // const { data: posts, isLoading, isError } = useGetPostsQuery();
  const { data: post, isLoading, isError } = useGetPostByIdQuery(1);

  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading...!!!</p>;
  }

  if (!isLoading && isError) {
    return <p className="text-9xl text-zinc-300">Something wrong</p>;
  }

  return (
    <div>
      <h1>Feed</h1>
      <div className="flex flex-col gap-3">
        {/* {posts?.map((post) => ( */}
        <PostCard key={post.id} post={post} />
        {/* ))} */}
      </div>
    </div>
  );
};

export default Feed;
