import { useDispatch, useSelector } from "react-redux";

import { useGetPostsQuery } from "../../redux/features/posts/postsApi";
import {
  setSearchText,
  setSelectedPage,
} from "../../redux/features/posts/postsSlice";

function Home() {
  //= Redux ==========
  const dispatch = useDispatch();
  const { searchText, selectedPage } = useSelector((state) => state?.posts);

  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts</p>;

  const handleSearchChange = (value) => {
    dispatch(setSearchText(value));
  };

  const handlePageClick = () => {
    dispatch(setSelectedPage(selectedPage + 1));
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md p-4 bg-white rounded-xl shadow-md">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Search Data
          </label>
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <button onClick={handlePageClick}>
        Page Count{" "}
        <span className="bold bg-amber-900 text-white p-1">{selectedPage}</span>
      </button>
      <br />
      <br />

      <div className="flex  gap-3">
        <div>
          <h1>Search {filteredPosts?.length}</h1>
          <ul>
            {filteredPosts?.length === 0 ? (
              <li>No data found!</li>
            ) : (
              filteredPosts?.map((post) => <li key={post.id}>{post.title}</li>)
            )}
          </ul>
        </div>
        <div>
          <h1>Posts</h1>
          <ul>
            {posts?.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
