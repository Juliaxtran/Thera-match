import React from "react";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import { FixedSizeList } from 'react-window';
import { List, Card } from "@mui/material";

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
    review: "Love my therapist! she amazing at his jobs ",
  }

];

const Reviews = () => {


  return (
    <div className="review-list">
      <h1>Reviews</h1>
      <Card sx={{ maxWidth: 345 }}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="center">
            <ListItemText primary={reviewList.map(review =>
              <p>{review.review} <hr /></p>
            )} />
          </ListItem>
        </List >
      </Card>
    </div >
  )
}

export default Reviews; 