import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "./project.css";
import { useState } from "react";
import projectData from "../../utils/projectData";
import TabNavigation from "./TabNavigation";

// Portfolio component
const Portfolio = () => {
  const [item, setItem] = useState(projectData);

  // Filter function
  const filterItems = (category) => {
    if (category === "All") {
      // Show all projects when "All" is selected
      setItem(projectData);
    } else {
      // Filter and display projects of the selected category
      const filteredProjects = projectData.filter(
        (val) => val.category === category
      );
      setItem(filteredProjects);
      console.log(item);
    }
  };

//function for project links
const  handleProjectLink =(index ,link) =>{
  console.log(link);
 if(index === 0 ) {
  const githubLink = link;
  window.open(githubLink, "_blank");
 }
 else {
  const demoLink = link;
  window.open(demoLink, "_blank")
 }
}

  return (
    <div className="project__container">
      <Grid container>
        {/* Title */}
        <Grid item xs={12} md={12} sm={12}>
          <Typography variant="h5" className="project">
            Projects
          </Typography>
        </Grid>

        {/* Tabs for project categories */}
        <Grid item xs={12} md={12} sm={12}>
          <TabNavigation filterItems={filterItems} />
        </Grid>
      </Grid>

      {/* Projects to display */}
      <Grid container spacing={1.2} alignItems="center" >
        {item.map((project) => {
          return (
            <Grid item  xs={12} md={6} lg={6}  key={project.id} sx={{mb:"16px" ,}}>
              <Card sx={{ maxWidth: 250 }} >
                <CardMedia
                  sx={{ height: 140, }}
                  image={project.img}
                  title="green iguana"
                />

                <CardContent>
                  {/* Project title */}
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  {/* Project description */}
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions>
                  {/* Links for the project */}
                  {project.Links.map((link,index) => {
                    return (
                      <Button size="small" key={link.id}sx={{ml :1.9}} onClick={() =>{handleProjectLink(index ,link.url)}}>
                        {link.icon}
                      </Button>
                    );
                  })}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Portfolio;
