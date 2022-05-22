import React from 'react';
import '../FilterTable.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FilterTableItemByGender from '../components/FilterTableItemByGender';


const FilterTableByGender = ({ setGender }) => {


  return (
    <div className='filter-table'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <FilterTableItemByGender
            setGender={setGender}
          />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  )
}

export default FilterTableByGender; 