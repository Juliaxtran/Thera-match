import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const minimum = 50;
const resMin = `< ${minimum}$`;



const FilterPriceMinItem = ({ setMinimum }) => {

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


      setMinimum(newChecked)


      return newChecked;
    })

  }

  return (
    <div className="filter-item">
      <FormGroup className='specialty-list'>
        <FormControlLabel
          key={minimum}
          control={
            <Checkbox checked={checked.includes(minimum)} onChange={(e) => onChange(e.target.checked, minimum)}
            />
          }
          label={resMin}
        />
      </FormGroup>
    </div>
  )
}

export default FilterPriceMinItem;