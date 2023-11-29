import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface pageQuery {
  pageSize: number;
}
const Usepost = (page: pageQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["users", page],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * page.pageSize,
            _limit: page.pageSize,
          },
        })
        .then((res) => res.data),
    keepPreviousData: true,
    getNextPageParam: (lastpage, allpage) => {
      return lastpage.length > 1 ? allpage.length + 1 : undefined;
    },
  });
};
export default Usepost;
