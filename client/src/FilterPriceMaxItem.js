import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




const maximum = 50;
const resMax = `> ${maximum}$`;

const FilterPriceMaxItem = ({ setMaximum }) => {

  const [checked, setChecked] = useState([]);

  const onChange = (isChecked, specialtyName) => {
    // console.log(isChecked);
    // console.log(specialtyName);

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


      setMaximum(newChecked)


      return newChecked;
    })

  }

  return (
    <div className="filter-item">
      <FormGroup className='specialty-list'>

        <FormControlLabel
          key={maximum}
          control={
            <Checkbox checked={checked.includes(maximum)} onChange={(e) => onChange(e.target.checked, maximum)}
            />
          }
          label={resMax}
        />
      </FormGroup>

    </div>
  )
}

export default FilterPriceMaxItem;