
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import { Typography } from '@mui/material';
import educationData from '../../../utils/educationalData';
import './educationTime.css'
const EducationTimeBar = () => {
  
  return (
    <>
     <Typography variant='h5' className='edu__title' sx={{ '@media (max-width: 600px)': { fontSize: '1.3rem' } }}>EDUCATIONAL HISTORY</Typography>
       <Timeline position="alternate">
        {/* first item */}
       <TimelineItem>
      
        <TimelineSeparator>
       
          <TimelineDot sx={{backgroundColor:"var(--main-color)"}}>  <SchoolSharpIcon/></TimelineDot> 
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
         
        </TimelineContent>
      </TimelineItem>


      {/* Rest items */}

      {
        educationData.map((item , index) =>{
         return(
          <TimelineItem key={index}>
        <TimelineOppositeContent color="text.secondary" sx={{'@media (max-width: 600px)': {pl:"8px"}}}>
        <Typography sx={{fontSize:'12px', '@media (max-width: 600px)': { fontSize:"10px" , pr:"0"}}}>{item.description} </Typography>
          
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{backgroundColor:"var(--main-color)"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{'@media (max-width: 600px)': {pl:"8px"}}}>
            <Typography sx={{fontSize:'16px' , fontWeight:'600' ,'@media (max-width: 600px)': { fontSize:"14px" }}}>{item.title}</Typography>
            <Typography variant='span' sx={{fontSize:'12px' , '@media (max-width: 600px)': { fontSize:"10px" }}}>{item.years}</Typography>
        </TimelineContent>
      </TimelineItem> 
         
         )
        })
      }
    </Timeline>
    </>
  )
}

export default EducationTimeBar
