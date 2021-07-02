import React from "react";
import { Helmet } from "react-helmet";

export const AlternateLinksContext = React.createContext([]);

export function wrapRootElement({ element, props }) {
  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Brygada+1918:wght@400;500;600;700&family=Raleway:wght@200;300&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div {...props}>{element}</div>
    </React.Fragment>
  );
}
