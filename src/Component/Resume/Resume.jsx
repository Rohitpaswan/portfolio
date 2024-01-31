import { Grid, Typography } from "@mui/material";
import "./resume.css";
import EducationTimeBar from "../Timeline/Education/EducationTimeBar";
import Skill from "../Skill/Skill";
const Resume = () => {
  return (
    <div>
      {/* About Section */}
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h5" className="mainBox__title">
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography className="about">
            🌟 Hey there! I'm Rohit, your friendly neighborhood web wizard! 🚀
            <br />
            💻 As a web developer, I weave digital magic with HTML, CSS, and
            JavaScript to &nbsp; craft stunning online experiences.
            <br />
            <br />
            &nbsp;Let's turn your web dreams into reality!
          </Typography>
        </Grid>

        {/* Education-section */}
        <Grid item xs={12} md={12}>
          <EducationTimeBar />
        </Grid>

        {/* Skill-section */}
        <Grid item xs={12} md={12}>
          <Skill />
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
