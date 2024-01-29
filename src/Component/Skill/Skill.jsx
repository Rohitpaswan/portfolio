import {  Grid, Stack, Typography } from "@mui/material";
import "./skill.css";
import CustomCircularProgress from "../../CustomCircularProgress";
// eslint-disable-next-line react/prop-types
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { BiLogoPython } from "react-icons/bi";

const Skill = () => {
  return (
    <div>
      <Typography variant="h5" className="edu__title">
        skill sets
      </Typography>
      <Grid container>
        {/* item-1 */}
        <Grid item xs={12} md={6} sm={4}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: "16px",
              m: 2,
              mb:0,
              fontWeight: "500",
              display: "block",
              width: "100%",
            }}
          >
            {" "}
            Frontend skill
          </Typography>
          <Stack direction="row" spacing={2} >
            <CustomCircularProgress
              value={80}
              text={<AiFillHtml5 className="custom__icon" color="rgba(241, 15, 26, 0.8)"/>}
            />
            <CustomCircularProgress
              value={70}
              text={<BiLogoCss3 className="custom__icon" color="rgba(0, 0, 255, 0.8)"/>}
            />
            <CustomCircularProgress
              value={60}
              text={<RiJavascriptFill className="custom__icon" color="rgba(255, 215, 0, 0.801)"/>}
            />
          </Stack>
        </Grid>
        
        {/* item--2 */}
        <Grid item xs={12} md={4} mt={2} sm={4}>
          <Stack direction="row"  mt={3}>
            <CustomCircularProgress
              value={60}
              text={<IoLogoReact className="custom__icon" color=" rgba(55, 163, 206, 0.8)" />}
            />
            <CustomCircularProgress
              value={80}
              text={<FaBootstrap className="custom__icon" color="rgba(143, 5, 143,0.8)" />}
            />
          </Stack>
        </Grid>

        {/* item-3 */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "16px", m: 2,mb:0, mt: 4.5, fontWeight: "500" }}
          >
            {" "}
            Other Programming Skill
          </Typography>
          <Stack spacing={2} direction="row" >
            <CustomCircularProgress
              value={70}
              text={<FaJava className="custom__iconOther" color="rgba(166, 42, 84, 0.8)"/>}
            />
            <CustomCircularProgress
              value={60}
              text={<TbSql className="custom__iconOther" color="rgba(82, 79, 79, 0.818)"/>}
            />
            <CustomCircularProgress value={30} text={<BiLogoPython className="custom__iconOther" color="rgba(0,128,0, 0.8)"/>} />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skill;
