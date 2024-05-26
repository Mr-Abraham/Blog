import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authstatus = useSelector((state) => state.status);

  useEffect(() => {
    if (authentication && authstatus !== authentication) {
      navigate("/login");
    } else if (authentication && authstatus !== authentication) {
      navigate("/login");
    }
    setLoader(false);
  }, [authstatus, navigate, authentication]);

  return loader ? <h1>Loadding.....</h1> : <div>{children}</div>;
}

export default Protected;
