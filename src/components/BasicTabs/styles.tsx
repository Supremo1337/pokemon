export function styledBox1() {
    return {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",
    };
  }
  
  export function styledBox() {
    return {
      width: "150px",
      height: "20px",
      // background: "red",
      borderBottom: 1,
      borderColor: "divider",
      // position: "relative",
      // top: "200px",
      order: 1,
    };
  }
  
  export function styledTabs() {
    return {
      minHeight: "unset",
      height: "20px",
    };
  }
  
  export function styledTab() {
    return {
      background: "#676E78",
      fontSize: "20px",
      minWidth: "unset",
      maxWidth: "unset",
      minHeight: "unset",
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      p: "0",
    };
  }
  
  export function tabPanel() {
    return {
      display: "flex",
      gap: "31px",
      flexDirection: "column",
    };
  }