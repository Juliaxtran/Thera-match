import React from 'react';
import './FilterTable.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { IconButton } from '@mui/material';
import FilterTableItem from './FilterTableItem';


const FilterTable = () => {


  return (
    <div>
      <h1>I am Filter Table!!</h1>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className='filter-icon-button'>
            <IconButton>
              <FilterAltIcon />
            </IconButton>
            <span> Filter By...</span>
          </div>
          <FilterTableItem />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  )
}

export default FilterTable; 