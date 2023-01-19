import Link from "next/link";
import React from "react";

function index(props) {
  return (
    <div className="middle">
      Click here to go{" "}
      <span style={{ color: "#22D3EE" }}>
        <Link href="/">back</Link>
      </span>{" "}
      to home page again
    </div>
  );
}

export default index;
