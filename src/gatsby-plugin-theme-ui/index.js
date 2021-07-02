const theme = {
  colors: {
    primary: "#ED8C72",
    secondary: "#120A8F",
    text: "#000000",
    background: "#F2F3F4",
    muted: "#A9A9A9",
    button: "#F2F3F4",
    modes: {
      dark: {
        primary: "#ED8C72",
        secondary: "#120A8F",
        text: "#F2F3F4",
        background: "#333333",
        muted: "#A9A9A9",
        button: "#F2F3F4",
      },
      alt: {
        primary: "#DFC097",
        secondary: "#4D453C",
        text: "#080706",
        background: "#EFEFEF",
        muted: "#929292",
        button: "#EFEFEF",
      },
      alt_dark: {
        primary: "#DFC097",
        secondary: "#4D453C",
        text: "#EFEFEF",
        background: "#080706",
        muted: "#929292",
        button: "#EFEFEF",
      },
    },
  },
  fonts: {
    body: '"Raleway", sans-serif',
    heading: '"Brygada 1918", serif',
    monospace: "Menlo, monospace",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      margin: 0,
    },
    caption: {
      fontFamily: "body",
      fontSize: "1.2rem",
      fontWeight: 200,
    },
  },
  styles: {
    root: {
      margin: 0,
    },
    h1: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "3rem",
    },
    h2: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "2.8rem",
    },
    h3: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "2.6rem",
    },
    h4: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "2.4rem",
    },
    h5: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "2rem",
    },
    h6: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "1.8rem",
    },
    p: {
      fontFamily: "body",
      fontWeight: 300,
      fontSize: "1.5rem",
      lineHeight: "body",
    },
  },
  buttons: {
    primary: {
      fontFamily: "body",
      color: "button",
      bg: "primary",
    },
    secondary: {
      fontFamily: "body",
      color: "button",
      bg: "secondary",
    },
  },
};

export default theme;
