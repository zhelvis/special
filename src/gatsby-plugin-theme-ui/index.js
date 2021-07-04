const theme = {
  colors: {
    primary: "#ED8C72",
    secondary: "#120A8F",
    text: "#000000",
    background: "#F2F3F4",
    muted: "#A9A9A9",
    button_primary: "#F2F3F4",
    button_secondary: "#F2F3F4",
    modes: {
      dark: {
        primary: "#F8B29F",
        secondary: "#0047AB",
        text: "#F2F3F4",
        background: "#333333",
        muted: "#A9A9A9",
        button_primary: "#000000",
        button_secondary: "#F2F3F4",
      },
      alt: {
        primary: "#FFDBA7",
        secondary: "#372928",
        text: "#080706",
        background: "#EFEFEF",
        muted: "#929292",
        button_primary: "#080706",
        button_secondary: "#EFEFEF",
      },
      alt_dark: {
        primary: "#DFC097",
        secondary: "#4D453C",
        text: "#EFEFEF",
        background: "#080706",
        muted: "#929292",
        button_primary: "#080706",
        button_secondary: "#EFEFEF",
      },
    },
  },
  fonts: {
    body: '"Raleway", sans-serif',
    heading: '"Brygada 1918", serif',
    monospace: "'Source Code Pro', monospace",
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
      fontFamily: "monospace",
      fontSize: "0.9rem",
      fontWeight: 200,
    },
    button: {
      fontFamily: "body",
      fontWeight: 400,
    }
  },
  styles: {
    root: {
      margin: 0,
    },
    h1: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "3.3rem",
    },
    h2: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "2.6rem",
    },
    h3: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "2.4rem",
    },
    h4: {
      variant: "text.heading",
      fontWeight: 300,
      fontSize: "2.2rem",
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
      fontSize: "1rem",
      lineHeight: "body",
    },
  },
  buttons: {
    primary: {
      fontFamily: "body",
      color: "button_primary",
      bg: "primary",
    },
    secondary: {
      fontFamily: "body",
      color: "button_secondary",
      bg: "secondary",
    },
  },
};

export default theme;
