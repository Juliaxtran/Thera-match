import React, { useState, useEffect } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { List, Card } from "@mui/material";
import axios from "axios";



const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    axios.get('/therapists/reviews').then(res => {
      setReviewList(res.data)
    })
  }, []);


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