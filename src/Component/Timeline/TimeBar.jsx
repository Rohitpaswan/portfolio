import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography, Box } from "@mui/material";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import profileData from "../../utils/profileData";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { saveAs } from "file-saver";


import "./timeBar.css";
const downloadFile = () => {
  const pdfUrl = "../../../RohitPaswan.pdf"; // Specify the URL or local path to your PDF file
  const pdfFilename = "RohitPaswan.pdf"; // Specify the filename for the downloaded file
  saveAs(pdfUrl, pdfFilename);
};


const TimeBar = () => {
  
  const dataEntries = Object.entries(profileData);
  return (
    <div>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {dataEntries.map(([key, value], index) => {
          return (
            <TimelineItem key={index} sx={{ height: "18px" }}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    background: "var( --main-color)", // change the color of dot
                  }}
                />
                <TimelineConnector
                  sx={{
                    background: "var( --main-color)",
                    height: 0.8, //  change the color of line
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ padding: 0, fontSize: "14px" , }}>
                  {key}:<span className="x"> {value}</span>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
      <button className="download-btn"
        onClick={downloadFile}
      >
        Download Resume
       
          <CloudDownloadIcon />
      </button>
    </div>
  );
};

export default TimeBar;
