import React from "react";
import Alert from "./Alert";
import Container from 'react-bootstrap/Container';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  title: "Alert Box",
  component: Alert,
};

export const AlertPrimary = () => (
  <Container className="p-3">
      <Alert headerMsg='Primary Alert'>
        {" "}
        Primary Alert Box
        <span role="img" aria-label="tada">
          🎉
        </span>
      </Alert>
  </Container>
);
