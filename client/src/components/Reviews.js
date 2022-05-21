import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { List } from "@mui/material";


const reviewList = [
  {
    name: "Angelica Belle",
    review: "I highly recommend this therapist! Thank you for everything. ",
  },
  {
    name: "Trish Gonzalez",
    review: "An Amazing Therapist! Had progress thanks to him . ",
  },
  {
    name: "Emily Blint",
    review: "Very kind, has helped me through my problems ",
  },
  {
    name: "Hailey Bailey",
    review: "Amazing therapist, helped my kids with their ADD ",
  },
  {
    name: "Madison Ted",
    review: "Love my she amazing at his jobs ",
  }

];



function renderRow(props) {
  const { index, style } = props;


  return (
    <ListItem style={style} key={index} component="div" disablePadding>

      <ListItemButton>
        <ListItemText primary={reviewList.map(review =>
          <p>{review.review}</p>
        )} />
      </ListItemButton>
    </ListItem>
  );
}


const Reviews = () => {


  return (
    <div className="review-list">
      <h1>Reviews</h1>
      <Box
        sx={{ maxHeight: '100%', width: '100%', height: 1000, maxWidth: 600, bgcolor: 'background.paper' }}
      >
        <FixedSizeList
          height={1000}
          width={300}
          itemSize={20}
          itemCount={1}
          overscanCount={2}
        >
          {renderRow}
        </FixedSizeList>


      </Box>
    </div>
  )
}

export default Reviews; 