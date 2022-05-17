import React from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const specialties = [
  {
    name: "Addiction",
  },
  {
    name: "Autism"
  },
  {
    name: "Binge Eating Disorder"
  },
  {
    name: "Grief"
  }
];

const FilterTableItem = () => {
  return (
    <div>
      <FormGroup className='specialty-list'>
        {specialties.map(specialty =>
          <FormControlLabel control={<Checkbox defaultUnChecked />} label={specialty.name} />
        )}
      </FormGroup>
    </div>
  )
}

export default FilterTableItem;

