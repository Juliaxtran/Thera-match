import { useState } from "react"
import '../Profile.css';
import axios from "axios";
import HomeNav from "../components/HomeNav";
import { useNavigate } from "react-router-dom";


const Profile = () => {

const navigate = useNavigate()
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    about: '',
    image: '',

  })

  const handleSubmit = async (e) => {
   e.preventDefault()
   try {
    const response = await axios.post(`http://localhost:9000/users/profile`, {formData}, {withCredentials: true})
    const success = response.status === 200
    if (success) navigate('/dashboard');

   } catch (error) {
    setError("Error: Profile page was not created")
   }
  }




  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    console.log("value", value, "name", name)

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className="profile">
      <HomeNav success="false" />

      <h1>Create your profile </h1>


      <form onSubmit={handleSubmit} >
        <section>

          <label htmlFor='first_name'> First Name </label>
          <input
            id='first_name'
            type='text'
            name='first_name'
            placeholder="First Name"
            required={true}
            value={formData.first_name}
            onChange={handleChange}
          />

          <label htmlFor='last_name'> Last Name </label>
          <input
            id='last_name'
            type='text'
            name='last_name'
            placeholder="Last Name"
            required={true}
            value={formData.last_name}
            onChange={handleChange}
          />

          <label > Birthday </label>

            <input placeholder="Select date"
            type="text"
            name="date_of_birth"
            required={true}
            value={formData.date_of_birth}
            onChange={handleChange} />





          <label > Gender </label>
          <div className='multiple-input-container'>
            <input
              id='man-gender-identity'
              type='radio'
              name='gender'
              value="Man"
              onChange={handleChange}
              checked={formData.gender === 'Man'}
            />
            <label htmlFor='man-gender-identity' > Man </label>
            <input
              id='woman-gender-identity'
              type='radio'
              name='gender'
              value="Woman"
              onChange={handleChange}
              checked={formData.gender === 'Woman'}
            />
            <label htmlFor='woman-gender-identity' >Woman </label>
            <input
              id='pefer-gender-identity'
              type='radio'
              name='gender'
              value="Pefer not to say"
              onChange={handleChange}
              checked={formData.gender === 'Pefer not to say'}
            />
            <label htmlFor='pefer-gender-identity' >Pefer not to say</label>
          </div>


          <label htmlFor="about">Tell us about yourself and why you are looking for a therapist today?</label>
          <input
            id="about"
            type="text"
            name="about"
            required={true}
            placeholder="I am dealing with..."
            value={formData.about}
            onChange={handleChange}
          />

          <input type="submit" />
        </section>
        <section>
          <label htmlFor="about">Profile Picture</label>
          <input
            type="url"
            name="image"
            id="image"
            onChange={handleChange}
            required={true}
          />
          <div className="photo-container">
            <img className="profile-pic" src={formData.image} alt="profile-pic-preview" />
            {/* https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg */}

          </div>


        </section>

      </form>
      {error}

    </div>
  )
}

export default Profile