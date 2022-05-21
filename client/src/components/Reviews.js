import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';


const reviewList = [
  {
    name: "Angelica",
    review: "Addiction",
  },
  {
    type: "Anxiety"
  },
  {
    type: "Binge Eating Disorder"
  },
  {
    type: "Bulimia"
  },
  {
    type: "Bullying"
  },
  {
    type: "Couples Therapy"
  },
  {
    type: "Depression"
  },
  {
    type: "Divorce"
  },
  {
    type: "Domestic Abuse"
  },
  {
    type: "Drug Abuse"
  },
  {
    type: "Family"
  },
  {
    type: "Grief"
  },
  {
    type: "LGBTQ2S+"
  },
  {
    type: "Sex Therapy"
  }

];



function renderRow(props) {
  const { index, style } = props;


  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}


const Reviews = () => {


  return (
    <div>
      <h1>Reviews</h1>
      <Box
        sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
        <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={10}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </div>
  )
}

export default Reviews; 