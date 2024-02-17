/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";

const CustomCircularProgress = ({ value, text }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    
    if (window.innerWidth > 500) {
      interval = setInterval(() => {
        if (progress < value) {
          setProgress(progress + 10);
        } else {
          clearInterval(interval);
        }
      }, 800);
    } else {
      setProgress(value);
    }

    return () => clearInterval(interval);
  }, [value, progress]);

  return (
    <div
      style={{
        position: "relative",
        width: "100px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={progress}
        size={70}
        thickness={3}
        color="primary"
        style={{ position: "absolute" }}
      />
      <Typography
        variant="body2"
        component="div"
        style={{
          position: "absolute",
          color: "black",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {Math.round(progress)}%
      </Typography>
      <Typography
        variant="body2"
        component="div"
        style={{
          position: "absolute",
          color: "black",
          top: "75%", // Adjust this value for vertical positioning
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {text}
      </Typography>
    </div>
  );
};

export default CustomCircularProgress;
