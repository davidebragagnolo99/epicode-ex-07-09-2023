import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

let authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4Njk1MzY4NWVjNDAwMTQ1MGI4NWQiLCJpYXQiOjE2OTQwOTEzNDUsImV4cCI6MTY5NTMwMDk0NX0.roirevZfs_2cmnZXIsAgMhvbWrlQdKyokK3-cs_p4J8";

const CommentArea = (props) => {
  const [setError] = useState(false);
  const [comments, setComments] = useState([]);
  const [id] = useState(props.id);

  const fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.id, {
        headers: {
          Authorization: authorization,
        },
      });

      if (response.ok) {
        const fetchedComments = await response.json();
        setComments(fetchedComments);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [id]);

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <CommentsList comment={comments} />
      <AddComment id={props.id} fetchComments={fetchComments} />
    </>
  );
};

export default CommentArea;
