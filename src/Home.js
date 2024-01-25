import React from "react";
import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

import { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { fetchError, isLoading } = useContext(DataContext);
  const searchResults = useStoreState((state) => state.searchResults);

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg"> Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}

      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg">No posts to display.</p>
        ))}

      {/* {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )} */}
    </main>
  );
};

export default Home;
