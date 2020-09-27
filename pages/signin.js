import { useState } from 'react';
import axios from 'axios';
import cookies from 'nookies';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Custominput from '../componants/custominput';
import validateEmail from '../utils/validators/validateEmail';
import validateRequired from '../utils/validators/validateRequired';

const inintialState = {
  email: '',
  password: ''
}

const Signin = () => {
  const [signinInfo, setSigninInfo] = useState(inintialState);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = signinInfo;

    if(!email || !password ) {
      setError("Fill form please.");
      return;
    }

    try {
      const response = await axios.post(
        'https://iwallet-api.herokuapp.com/api/auth/signin',
        { ...signinInfo}
      )
      cookies.set(null, 'token', response.data.token, { path: '/' } )
      
      const { plannedRoute } = cookies.get();

      const parsedPlannedRoute = plannedRoute && JSON.parse(plannedRoute)

      const plannedHrefRoute = (parsedPlannedRoute && parsedPlannedRoute.href ) || '/[country]';
      const plannedAsRoute = (parsedPlannedRoute && parsedPlannedRoute.as ) || '/us';

      router.replace(plannedHrefRoute, plannedAsRoute);
    } catch(error) {
      setError(error.message);
    } 
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target; 

    setSigninInfo({
      ...signinInfo,
      [name]: value,
    })

    // console.log(e.target.value);
  }

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <Custominput 
          type="email"
          name="email" 
          placeholder="Enter your email" 
          value={signinInfo.email}
          onChange={handleInputChange}
          onBlur={validateEmail}
        />
        <Custominput 
          type="password"
          name="password"
          placeholder="Enter your password" 
          value={signinInfo.password}
          onChange={handleInputChange}
          onBlur={validateRequired}
        />
        
        {/* <input 
          name="email" 
          placeholder="Enter your email" 
          value={signinInfo.email}
          onChange={handleInputChange}
        ></input>
        <input 
          name="password"
          type="password" 
          placeholder="Enter your email"
          value={signinInfo.password}
          onChange={handleInputChange}
        ></input> */}

        { error && <div className="error ">{error}</div>}

        <button type="submit">Submit</button>
        <Link href="/signup">
          <a className="link">Join Us</a>
        </Link>
      </form>
    </div>
  )
}

export default Signin;