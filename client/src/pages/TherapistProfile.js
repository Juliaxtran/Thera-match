import { useState } from "react"
import '../Profile.css';
import axios from "axios";
import HomeNav from "../components/HomeNav";
import { useNavigate } from "react-router-dom";


const TherapistProfile = () => {

  const navigate = useNavigate()
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    gender: '',
    about: '',
    image: '',
    location: '',
    title: '',
    cost_per_session: '',
    years_of_practice: '',
    session_type: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`/therapists/profile`, { formData }, { withCredentials: true })
      const success = response.status === 200
      if (success) navigate('/');

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

      <h1>Your Profile </h1>



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

          <label > Date of Birth </label>

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
            <label htmlFor='man-gender-identity' > Man</label>
            <input
              id='woman-gender-identity'
              type='radio'
              name='gender'
              value="Woman"
              onChange={handleChange}
              checked={formData.gender === 'Woman'}
            />
            <label htmlFor='woman-gender-identity' >Woman</label>
            <input
              id='pefer-gender-identity'
              type='radio'
              name='gender'
              value="Prefer not to say"
              onChange={handleChange}
              checked={formData.gender === 'Prefer not to say'}
            />
            <label htmlFor='pefer-gender-identity' >Prefer not to say</label>
          </div>

          <br></br>
          <label htmlFor="about">Tell us about your experience</label>
          <input
            id="about"
            type="text"
            name="about"
            required={true}
            placeholder="I am a registered therapist..."
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
            placeholder=">Enter image URL here<"
            id="image"
            onChange={handleChange}
            required={true}
          />
          <div className="photo-container">
            {/* <img className="profile-pic" src={formData.image} alt="profile-pic-preview" /> */}
            {/* https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg */}

          </div>

          <label htmlFor="about">Location</label>
          <input
            id='location'
            type='text'
            name='location'
            placeholder="e.g. Toronto, ON..."
            required={true}
            value={formData.location}
            onChange={handleChange}
          />

          <label htmlFor="about">Title</label>
          <input
            id='title'
            type='text'
            name='title'
            placeholder="e.g. Registered Therapist / Social Worker"
            required={true}
            value={formData.title}
            onChange={handleChange}
          />

          <label htmlFor="about">Cost per Session</label>
          <input
            id='cost_per_session'
            type='number'
            name='cost_per_session'
            placeholder="e.g. $50"
            required={true}
            value={formData.cost_per_session}
            onChange={handleChange}
          />

          <label htmlFor="about">Years of Practice</label>
          <input
            id='years_of_practice'
            type='number'
            name='years_of_practice'
            placeholder="e.g. 8"
            required={true}
            value={formData.years_of_practice}
            onChange={handleChange}
          />

          <label > Session Type </label>
          <div className='multiple-input-container'>
            <input
              id='inperson_session_type'
              type='radio'
              name='session_type'
              value="In Person"
              onChange={handleChange}
              checked={formData.session_type === 'In Person'}
            />
            <label htmlFor='inperson_session_type' > In Person</label>
            <input
              id='online_session_type'
              type='radio'
              name='session_type'
              value="Online"
              onChange={handleChange}
              checked={formData.session_type === 'Online'}
            />
            <label htmlFor='online_session_type' >Online</label>
            <input
              id='both_session_type'
              type='radio'
              name='session_type'
              value="In Person & Online"
              onChange={handleChange}
              checked={formData.session_type === 'In Person & Online'}
            />
            <label htmlFor='both_session_type' >In Person & Online</label>
          </div>



        </section>

      </form>
      {error}

    </div>
  )
}

export default TherapistProfile