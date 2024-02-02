import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { Button, Box} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Instagram } from "@mui/icons-material";


const Header = () => {




  const openGmail = () => {
    const senderEmail = "rohitpaswan2444@gmail.com";
    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${senderEmail}`;
    window.open(gmailComposeUrl, "_blank");
  };

  const openInstagram = () => {
    const InstagramUrl = "https://www.instagram.com/rohit_0o0_/";
    window.open(InstagramUrl, "_blank");
  };

  const openGithub = () => {
    const githubprofileUrl = "https://github.com/Rohitpaswan";
    window.open(githubprofileUrl, "_blank");
  };

  const openLinkedin = () => {
    const linkedinUrl = "https://www.linkedin.com/in/rohit-paswan-7b34601ba/";
    window.open(linkedinUrl, "_blank");
  };

  return (
    <div >
      <Navbar expand="lg" sticky="top" className=" custom-navbar">
        <Container>
          <NavLink to={"/"}>
            <HomeIcon
              sx={{ width: "30px", background: "yellow", color: "black" }}
            />
          </NavLink>
          <div className=" header__smallscreen">
            <Instagram
              className="header__icons"
              sx={{ fontSize: "32px", color: "black" }}
              onClick={openInstagram}
            />
            <LinkedInIcon
              className="header__icons"
              sx={{ fontSize: "32px", color: "black" }}
              onClick={openLinkedin}
            />
            <GitHubIcon
              className="header__icons"
              sx={{ fontSize: "32px", color: "black" }}
              onClick={openGithub}
            />
            
          </div>

          {/* Navigation links */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link as={NavLink} to={"/"} className="navItem">
                Resume
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/portfolio"} className="navItem">
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/contact"} className="navItem">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="header__right header__lap">
            <Container>
              <Instagram
                className="header__icons"
                sx={{ fontSize: "36px", color: "black", cursor: "pointer" }}
                onClick={openInstagram}
              />
              <LinkedInIcon
                className="header__icons"
                sx={{ fontSize: "36px", color: "black", cursor: "pointer" }}
                onClick={openLinkedin}
              />
              <GitHubIcon
                className="header__icons"
                sx={{ fontSize: "36px", color: "black", cursor: "pointer" }}
                onClick={openGithub}
              />
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  p: 1,
                  m: "5px",
                  ml: "8px",
                  borderRadius: 4,
                  width: "113px",
                  height: "32px",
                  fontSize: "14px",
                  backgroundColor: "var( --main-color)",
                  ':hover': {
                    bgcolor: '#cfad3bd1', // theme.palette.primary.main
                   }
                }}
         
                onClick={openGmail}
              >
                Hire me
                <Box sx={{ paddingLeft: "8px", paddingTop: "3px"  ,mb:"5px"}}>
                  <SendRoundedIcon />
                </Box>
              </Button>
            </Container>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
