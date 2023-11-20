import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
const post = (userID: number | undefined) => {
  return useQuery<Post[], Error>({
    queryKey: ["users", userID, "posts"],
    queryFn: () =>
      axios
        .get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts", 
            {
              params: {
                userID,
              },
            }
        )
        .then((res) => res.data),
  });
};
export default post;
