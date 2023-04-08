import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function CompanyInfo() {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      return history.push("/login");
    }
  }, [history]);

  return (
    <span style={{ color: "white" }}>
      <br />
      <br />
      <br />
      <br />
      <p>
        <b>Company: </b>Geeksynergy Technologies Pvt Ltd
      </p>
      <p>
        <b>Address: </b>Sanjayanagar, Bengaluru-56
      </p>
      <p>
        <b>Phone: </b>XXXXXXXXX09
      </p>
      <p>
        <b>Email: </b>XXXXXX@gmail.com
      </p>
    </span>
  );
}

export default CompanyInfo;
