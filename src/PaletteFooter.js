import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyles";
// import './xyz.css'
function PaletteFooter(props) {
  const {  classes } = props;
  return (
    
    <footer className={classes.PaletteFooter} >
      Made With <span> ❤️ </span> By Vivek
      
    </footer>
  );
}
export default withStyles(styles)(PaletteFooter);
