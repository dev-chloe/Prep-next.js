import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cookies from 'nookies';

const countries =  [{
  label:'us',
  name:'United state'
},{
  label:'kr',
  name:'Korea'
}]

const Header = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(router.query.country);

  const handlechange = e => {
    setSelectedCountry(e.target.value)

    // /country
    router.push(`/[country]`,`/${e.target.value}`);
  }

  const renderCountries = () => {
    return countries.map(country => {
    return <option key={country.label} value={country.label}>{country.name}</option>
    })
  }

  useEffect(() => {
    cookies.set(null, 'defaultCountry', selectedCountry, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    } )
  }, [selectedCountry])

  return (
    <div className="header">
      <select 
        value={selectedCountry}
        onChange={handlechange}>
        { renderCountries() }
      </select>
      <style jsx>{`
        .header {
          padding: 20px;
          background-color: #111;
          color: #fff;
          text-align: center;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Header;