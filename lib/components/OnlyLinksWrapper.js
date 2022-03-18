import React, { useEffect, useState } from "react";
const OnlyLinksWrapper = ({ id, children }) => {
  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    const ref = params.ref;
    console.log(ref);

    //TODO: send ref and id to api
  }, []);

  return <div>{children}</div>;
};
export default OnlyLinksWrapper;
