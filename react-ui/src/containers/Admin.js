import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

// import UserService from "../services/user.service";

const Admin = () => {
  const { isLoggedIn, user: currentUser } = useSelector((state) => state.user);

  // Get data from the server for the Admin Board
  // const [content, setContent] = useState("");
  // useEffect(() => {
  //   UserService.getAdminBoard().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  if (currentUser.isAdmin) {
    return <Container>Admin content</Container>;
  }

  return <Redirect to="/" />;
};

export default Admin;
