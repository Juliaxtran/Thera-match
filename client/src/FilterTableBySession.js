import React, { useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const sessions = [
  {
    name: "Online",
  },
  {
    name: "In-Person"
  }

];

const FilterTableBySession = ({ setSession }) => {

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
      setGender(newChecked);
      return newChecked;
    })

  }

  return (
    <div className="filter-item">
      <FormGroup className='specialty-list'>
        {sessions.map(session =>
          <FormControlLabel
            key={gender.name}
            control={
              <Checkbox checked={checked.includes(session.name)} onChange={(e) => onChange(e.target.checked, session.name)}
              />

            }
            label={session.name}
          />
        )}
      </FormGroup>
    </div>
  )
}

export default FilterTableItemByGender;