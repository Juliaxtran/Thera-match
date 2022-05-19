import React, { useState, useEffect } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";

// const specialties = [
//   {
//     type: "Addiction",
//   },
//   {
//     type: "Anxiety"
//   },
//   {
//     type: "Binge Eating Disorder"
//   },
//   {
//     type: "Bulimia"
//   },
//   {
//     type: "Bullying"
//   },
//   {
//     type: "Couples Therapy"
//   },
//   {
//     type: "Depression"
//   },
//   {
//     type: "Divorce"
//   },
//   {
//     type: "Domestic Abuse"
//   },
//   {
//     type: "Drug Abuse"
//   },
//   {
//     type: "Family"
//   },
//   {
//     type: "Grief"
//   },
//   {
//     type: "LGBTQ2S+"
//   },
//   {
//     type: "Sex Therapy"
//   }

// ];

// { specialties, setSpecialties }

const FilterTableItem = ({ setSpecialties }) => {
  const [checked, setChecked] = useState([]);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get('/filters/specialties')
      .then(res => {
        setChecked(res.data);
        setIssues(res.data);
      })
  }, [])


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
      setSpecialties(newChecked);
      return newChecked;
    })

  }

  return (
    <div className="filter-item">
      <FormGroup className='specialty-list'>
        {issues.map(specialty =>
          <FormControlLabel
            key={specialty.id}
            control={
              <Checkbox key={specialty.type} checked={checked.includes(specialty.type)} onChange={(e) => onChange(e.target.checked, specialty.type)}
              />

            }
            label={specialty.type}
          />
        )}
      </FormGroup>
    </div>
  )
}

export default FilterTableItem;

