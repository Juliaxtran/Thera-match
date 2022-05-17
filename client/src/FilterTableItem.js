import React, { useState } from "react";
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

const FilterTableItem = ({ setSpecialties }) => {

  const [checked, setChecked] = useState([]);

  const onChange = (isChecked, specialtyName) => {
    // console.log(isChecked);
    // console.log(specialty);

    setChecked((checked) => {

      let newChecked = [...checked];

      if (isChecked) {
        if (!checked.includes(specialtyName)) {
          newChecked.push(specialtyName);

        }

      } else {
        const currentIndex = newChecked.indexOf(specialtyName);
        newChecked.splice(currentIndex, 1);

      }
      setSpecialties(newChecked);
      return newChecked;
    })

  }

  return (
    <div>
      <FormGroup className='specialty-list'>
        {specialties.map(specialty =>
          <FormControlLabel
            key={specialty.name}
            control={
              <Checkbox checked={checked.includes(specialty.name)} onChange={(e) => onChange(e.target.checked, specialty.name)} />
            }
            label={specialty.name}
          />
        )}
      </FormGroup>
    </div>
  )
}

export default FilterTableItem;

