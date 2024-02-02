import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Profile from "./Component/Profile/Profile";
import Project from "./Component/Portfolio/Project";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import TimeBar from "./Component/Timeline/TimeBar";
import { Routes, Route } from "react-router-dom";
import Resume from "./Component/Resume/Resume";
import ContactUs from "./Component/Contact Us/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css"; /* The following line can be included in your src/index.js or App.js file */

function App() {
  return (
    <Container >
      <Grid container sx={{p:"15px", pt:"30px"}}>
        {/* Left-side  */}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          boxShadow={3}
          sx={{
           marginRight: "38px",
            marginBottom: "10px",
            background: "azure",
            p: 1,
            pb: 0,
            height: "750px",
           
          }}
        >
          <Profile />
          <TimeBar />
        </Grid>

        {/* Right-side  */}
        <Grid item xs style={{ background: "#fff" }}>
          <Header />

          <div className="main__contain">
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/portfolio" element={<Project />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} sx={{ marginBottom: "10px" }}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
