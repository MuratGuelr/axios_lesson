import axios from "axios";

const GetData = async (userId) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const onlyOnePost = post.length > 0 ? post[0] : null;

  const data = {
    user,
    onlyOnePost,
  };

  return data;
};

export default GetData;
