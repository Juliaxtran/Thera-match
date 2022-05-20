import React from 'react';
import './FilterTable.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import { IconButton } from '@mui/material';
import FilterPriceMinItem from './FilterPriceMinItem';
import FilterPriceMaxItem from './FilterPriceMaxItem';

const FilterPrice = ({ setMinimum, setMaximum }) => {


  return (
    <div className='filter-table'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className='filter-icon-button'>
            <IconButton>
              <FilterAltIcon />
            </IconButton>
            <span> Filter By Cost</span>
          </div>

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