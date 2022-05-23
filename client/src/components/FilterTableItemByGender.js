import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const genders = [
  {
    name: "Male",
  },
  {
    name: "Female"
  }

];

const FilterTableItemByGender = ({ setGender }) => {

  const [checked, setChecked] = useState([]);

  const onChange = (isChecked, specialtyName) => {
  

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
      setGender(newChecked);
      return newChecked;
    })

  }

  return (
    <div className="filter-item">
      <FormGroup className='specialty-list'>
        {genders.map(gender =>
          <FormControlLabel
            key={gender.name}
            control={
              <Checkbox checked={checked.includes(gender.name)} onChange={(e) => onChange(e.target.checked, gender.name)}
              />

            }
            label={gender.name}
          />
        )}
      </FormGroup>
    </div>
  )
}

export default FilterTableItemByGender;