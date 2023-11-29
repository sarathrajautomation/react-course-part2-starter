import axios from "axios";
import React, { useEffect, useState } from "react";
import post from "../routing/hooks/UsePost";
import Usepost from "../routing/hooks/UsePost";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
  } = Usepost({ pageSize });

  if (error) return <p>{error.message}</p>;
  if (posts?.pages?.length == 0) {
    return "working on that";
  }
  return (
    <>
      <ul className="list-group">
        {posts?.pages.map((post) => (
          <React.Fragment>
            {post.map((po) => (
              <li key={po.id} className="list-group-item">
                {po.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "loading" : "next"}
      </button>
    </>
  );
};

export default PostList;
