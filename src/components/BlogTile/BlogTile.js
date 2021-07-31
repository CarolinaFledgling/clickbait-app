import React from "react";
const styles = {
  backgroundColor: "#1abc9c",
  color: "#ecf0f1",
  border: "1px solid #2c3e50",
  padding: 10,
  para:{
    color:'#34495e'
  }
};

export default function BlogTile({ title, intro }) {
  return (
    <div style={styles}>
      <h2 style={styles.para}>{title}</h2>
      <p>{intro.length > 25 ? `${intro.substring(0, 25)}...` : intro}</p>
    </div>
  );
}
