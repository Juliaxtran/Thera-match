import React from 'react';
import '../FilterTable.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { IconButton } from '@mui/material';
import FilterTableItem from './FilterTableItem';


const FilterTable = ({ setSpecialties }) => {


  return (
    <div className='filter-table'>
      <Card sx={{ minWidth: 260 }}>
        <CardContent>
          <div className='filter-icon-button'>
            <IconButton>
              <FilterAltIcon />
            </IconButton>
            <span> Filter By Specialties</span>
          </div>
          <FilterTableItem
            setSpecialties={setSpecialties}
          />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  )
}

export default FilterTable; 