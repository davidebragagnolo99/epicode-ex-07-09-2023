import { Button, ListGroup } from "react-bootstrap";

let authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4Njk1MzY4NWVjNDAwMTQ1MGI4NWQiLCJpYXQiOjE2OTQwOTEzNDUsImV4cCI6MTY5NTMwMDk0NX0.roirevZfs_2cmnZXIsAgMhvbWrlQdKyokK3-cs_p4J8";

const SingleComment = (props) => {
  const deleteComment = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.commentId, {
        method: "DELETE",
        headers: {
          Authorization: authorization,
        },
      });
      if (response.ok) {
        alert("Comment was deleted successfully!");
      } else {
        alert("Error - comment was NOT deleted!");
      }
    } catch (error) {
      alert("Error - comment was NOT deleted!");
    }
  };
  return (
    <>
      <ListGroup.Item>{props.singleComment}</ListGroup.Item>
      <ListGroup.Item>
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(props._id)}>
          Delete
        </Button>
      </ListGroup.Item>
    </>
  );
};

export default SingleComment;
