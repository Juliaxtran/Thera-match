import React from 'react';
import '../stylesheet/FilterTable.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FilterTableItem from './FilterTableItem';


const FilterTable = ({ setSpecialties }) => {


  return (
    <div className='filter-table'>
      <Card sx={{ minWidth: 260 }}>
        <CardContent>
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