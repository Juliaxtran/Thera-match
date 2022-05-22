import React from 'react';
import '../FilterTable.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FilterTableItemBySession from '../components/FilterTableItemBySession';


const FilterTableBySession = ({ setSession }) => {


  return (
    <div className='filter-table'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <FilterTableItemBySession
            setSession={setSession}
          />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  )
}

export default FilterTableBySession; 