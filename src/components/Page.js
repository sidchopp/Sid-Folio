import React, { useEffect } from "react";
import BasicContainer from "./BasicContainer";

function Page(props) {
  useEffect(() => {
    document.title = `${props.title}| Sid-Folio`;
    window.scrollTo(0, 0);
  }, []);
  return <BasicContainer>{props.children}</BasicContainer>;
}

export default Page;
