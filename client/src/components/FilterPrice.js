import React from 'react';
import '../FilterTable.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FilterPriceMinItem from '../components/FilterPriceMinItem';
import FilterPriceMaxItem from '../components/FilterPriceMaxItem';

const FilterPrice = ({ setMinimum, setMaximum }) => {


  return (
    <div className='filter-table'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <FilterPriceMinItem
            setMinimum={setMinimum}
          />
          <FilterPriceMaxItem
            setMaximum={setMaximum} />
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  )
}

export default FilterPrice; 