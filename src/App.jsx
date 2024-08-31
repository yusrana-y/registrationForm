import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

import './App.css'
import { useState } from 'react';

function App() {
  const [course, setCourse] = useState('');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [house, setHouse] = useState('')
  const [block, setBlock] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [pincode, setPincode] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDOB] = useState('')

  const [isNameInvalid, setIsNameInvalid] = useState(false)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isNumberInvalid, setIsNumberInvalid] = useState(false)
  const [isHouseInvalid, setIsHouseInvalid] = useState(false)
  const [isBlockInvalid, setIsBlockInvalid] = useState(false)
  const [isCityInvalid, setIsCityInvalid] = useState(false)
  const [isCountryInvalid, setIsCountryInvalid] = useState(false)
  const [isPincodeInvalid, setIsPincodeInvalid] = useState(false)

  const validate = ({ name, value }) => {
    console.log(name, value);

    // validate name
    if (name == 'name') {
      setName(value)
      !!value.match(/^[a-zA-Z]+ [a-zA-Z]+$/) ? setIsNameInvalid(false) : setIsNameInvalid(true)
      // /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
    }

    // validate email
    else if (name == 'email') {
      setEmail(value)
      !!value.match(/^[a-z][a-z0-9_\.\-]*@[a-z0-9\.\-]+\.[a-z]{2,4}$/i) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
    }

    // validate indian mobile number
    else if (name == 'number') {
      setNumber(value)
      !!value.match(/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/) ? setIsNumberInvalid(false) : setIsNumberInvalid(true)
    }

    // validate address - House
    else if (name == 'house') {
      setHouse(value)
      value.match(/^[a-z0-9]+$/i) ? setIsHouseInvalid(false) : setIsHouseInvalid(true)
    }

    //validate Block/Street
    else if (name == 'block') {
      setBlock(value)
      value.match(/^\d{1,3}$/) ? setIsBlockInvalid(false) : setIsBlockInvalid(true)
    }

     //validate City
    else if (name == 'city') {
      setCity(value)
      value.match(/^[a-zA-Z]+$/i) ? setIsCityInvalid(false) : setIsCityInvalid(true)
    }

     //validate Country
    else if (name == 'country') {
      setCountry(value)
      value.match(/^[a-zA-Z]+$/i) ? setIsCountryInvalid(false) : setIsCountryInvalid(true)
    }

     //validate Pincode
    else if (name == 'pincode') {
      setPincode(value)
      value.match(/^\d{6}$/) ? setIsPincodeInvalid(false) : setIsPincodeInvalid(true)
    }

  }

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  // register successfull alert details
  const handleRegister = (e) => {
    e.preventDefault();
    if (course && name && gender && number && email && pincode && house && block && city && country && dob)
      alert(`Thank you for registering! Please confirm your details below.\nName: ${name} \nEmail: ${email} \nNumber: ${number} \nGender: ${gender} \nDate of Birth: ${dob} \nAddress:\n ${house},  ${block}, \n ${city},  ${country}, \n Pincode: ${pincode} \n\n Course Selected : ${course}`);
    else {
     alert('Please fill the form completely')

    }

  }


  //reset function
  const handleReset = () => {
    setCourse('')
    setName('')
    setEmail('')
    setNumber('')
    setHouse('')
    setBlock('')
    setCity('')
    setCountry('')
    setPincode('')

    setIsNameInvalid(false)
    setIsEmailInvalid(false)
    setIsNumberInvalid(false)
    setIsHouseInvalid(false)
    setIsBlockInvalid(false)
    setIsCityInvalid(false)
    setIsCountryInvalid(false)
    setIsPincodeInvalid(false)
  }



  return (
    <div className="container" >
      <div className='d-flex justify-content-center align-items-center flex-column mt-2'>
        <img src="src\assets\gov-logo.png" alt="College Logo" height="100px"/>
        <h2 > XYZ Institute</h2>
        <h3 >IT Education Department </h3>
      </div>
      <h5 className='mb-3'>Admission Form </h5>
      <p>Admission Forms are processed within 48hrs. You will receive an email confirmation when we process your application.</p>
    
      <form className='d-flex flex-column mt-3 border border-dark rounded p-3 '>
        <TextField className='mb-2 w-50' id="outlined-basic" name="name" value={name || ''} label="Full Name" variant="outlined" onChange={(e) => validate(e.target)} />
        {isNameInvalid && <Alert severity="error" className='mb-2 w-50'>Invalid Name</Alert>}
        <TextField className='mb-2 w-50' id="outlined-basic1" name="email" value={email || ''} label="Email" variant="outlined" onChange={(e) => validate(e.target)} />
        {isEmailInvalid && <Alert severity="error" className='mb-2 w-50'>Invalid Email</Alert>}
        <TextField className='mb-2 w-50' id="outlined-basic2" name="number" value={number || ''} label="Mobile Number" variant="outlined" onChange={(e) => validate(e.target)} />
        {isNumberInvalid && <Alert severity="error" className='mb-2 w-50'>Invalid Number</Alert>}
        <p className='mt-2 fs-5'>Address Details:</p>
        <div className="address d-flex flex-column ms-5">
          <TextField className='mb-2 w-50 ' id="outlined-basic3" name="house" value={house || ''} label="House/Apart Name" variant="outlined" onChange={(e) => validate(e.target)} />
          {isHouseInvalid && <Alert severity="error" className='mb-2 w-50'>Invalid House/Apart Name</Alert>}
          <TextField className='mb-2 w-50' id="outlined-basic4" name="block" value={block || ''} label="Block/Street" variant="outlined" onChange={(e) => validate(e.target)} />
          {isBlockInvalid && <Alert severity="error" className='mb-2 w-50'>Invalid Block</Alert>}
          <TextField className='mb-2 w-50' id="outlined-basic5" name="city" value={city || ''} label="City/State" variant="outlined" onChange={(e) => validate(e.target)} />
          {isCityInvalid && <Alert severity="error" className='mb-2 w-50'>Invalid Country</Alert>}
          <TextField className='mb-2 w-50' id="outlined-basic6" name="country" value={country || ''} label="Country" variant="outlined" onChange={(e) => validate(e.target)} />
          {isCountryInvalid && <Alert severity="error" className='mb-2 w-50'>Invalid Country</Alert>}
          <TextField className='mb-2 w-50' id="outlined-basic7" name="pincode" value={pincode || ''} label="Pincode" variant="outlined" onChange={(e) => validate(e.target)} />
          {isPincodeInvalid && <Alert severity="error" className='mb-2 w-50'>Invalid Pincode</Alert>}

        </div>
        <label>Date of Birth:</label>
        <TextField className='mb-2 w-50' id="outlined-basic7" name="dob" value={dob || ''}  variant="outlined" onChange={(e) => setDOB(e.target.value)} type='date' />
  

        <FormLabel id="demo-row-radio-buttons-group-label" className='fs-5 mt-2'>Gender :</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          className='ms-5 D-flex  flex-column flex-md-row'
          onClick={e => setGender(e.target.value)}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <FormControl className='w-50 w-sm-100 mt-3'>
          <InputLabel id="demo-simple-select-label">Course</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={course}
            label="course"
            onChange={handleChange}
          >
            <MenuItem value={'Data Science'}>Data Science</MenuItem>
            <MenuItem value={'Python'}>Python</MenuItem>
            <MenuItem value={'Software Testing'}>Software Testing</MenuItem>
            <MenuItem value={'MEARN Stack Web Development'}>MEARN Stack Web Development</MenuItem>
            <MenuItem value={'ASP NET MVC with Angular'}>ASP NET MVC with Angular</MenuItem>
            <MenuItem value={'Java Spring Boot'}>Java Spring Boot</MenuItem>
          </Select>
        </FormControl>

        <Stack spacing={2} direction="row" className='my-4 justify-content-center'>
          <Button disabled={isNameInvalid || isEmailInvalid || isNumberInvalid || isHouseInvalid || isBlockInvalid || isCityInvalid || isCountryInvalid || isPincodeInvalid}
            variant="contained" style={{  height: '60px' }} className='bg-success' onClick={handleRegister}>Submit Form</Button>
          <Button variant="outlined" style={{  height: '60px' }} onClick={handleReset}>Cancel</Button>
        </Stack>
      </form>
      <p>For admission related enquiries, <br />
      contact : +01231413413
      </p>

  
    </div >
  )
}

export default App
