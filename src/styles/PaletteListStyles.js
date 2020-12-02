import sizes from "./sizes";
import bg from "./bg.svg";
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    /* Creadit : background by SVGBackgrounds.com */
    backgroundColor: "#394bad",
    backgroundImage: `url(${bg})`,
    overflow: "scroll"
  },
  heading: {
    fontSize: "2.5rem",
    fontFamily: '"Architects Daughter", cursive',
    letterSpacing: '3px',
    fontWeight : 'bold'

  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "75%"
    }
  },
  a1 : {
    color : 'black'
  },
  a2 : {
    color : 'green'

  },
  a3 : {
    color : 'blue'

  },
  a4 : {
    color : '#9423a8'

  },
  a5 : {
    color : 'red'

  },
  a6 : {
    color : ''

  },
  a7 : {
    color : 'black'

  },
  a8 : {
    color : 'green'

  },
  a9 : {
    color : 'blue'

  },
  a10 : {
    color : 'red'

  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    "& a": {
      color: "black",
      fontSize : '1.2rem'
    }
  },
  cplink : {
    // justifyContent: 'center'
    textAlign: 'center',
    paddingRight : '45px'
  },
  contributton : {
      paddingRight : '80px'
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem"
    }
  }
};
