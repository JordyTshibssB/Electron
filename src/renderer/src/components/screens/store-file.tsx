import { Link } from 'react-router-dom'
import Grid from '../ui/atoms/grid'
import { useEffect, useState } from 'react'
import Input from '../ui/atoms/input'
import Button from '../ui/atoms/button'

const StorePage = () => {
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhoneNumber] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')

  useEffect(() => {
    const fetchStoredData = () => {
      try {
        const emailStored = window.localStorage.getItem('email') || ''
        const firstnameStored = window.localStorage.getItem('firstname') || ''
        const lastnameStored = window.localStorage.getItem('lastname') || ''
        const phoneNumberStored = window.localStorage.getItem('phone') || ''
        const addressStored = window.localStorage.getItem('address') || ''
        const cityStored = window.localStorage.getItem('city') || ''
        const zipCodeStored = window.localStorage.getItem('zipcode') || ''
        const dateOfBirthStored = window.localStorage.getItem('dateOfBirth') || ''

        setEmail(emailStored)
        setFirstname(firstnameStored)
        setLastname(lastnameStored)
        setPhoneNumber(phoneNumberStored)
        setAddress(addressStored)
        setCity(cityStored)
        setZipCode(zipCodeStored)
        setDateOfBirth(dateOfBirthStored)
      } catch (error) {
        console.error('Error fetching stored data:', error)
      }
    }

    fetchStoredData()
  }, [])

  const handleStoreData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email || !firstname || !lastname) {
      alert("Please ensure you've entered all data")
      return
    }

    try {
      window.localStorage.setItem('email', email)
      window.localStorage.setItem('firstname', firstname)
      window.localStorage.setItem('lastname', lastname)
      window.localStorage.setItem('dateOfBirth', dateOfBirth)
      window.localStorage.setItem('phone', phone)
      window.localStorage.setItem('address', address)
      window.localStorage.setItem('city', city)
      window.localStorage.setItem('zipcode', zipCode)

      alert('Your details were updated')
    } catch (error) {
      console.error('Error storing data:', error)
      alert('An error occurred while updating your details. Please try again.')
    }
  }

  return (
    <div className="w-full relative flex flex-col gap-10">
      <nav className="fixed h-20  top-0 left-0 right-0 flex justify-between items-center px-10 shado">
        <Link
          to="/home-page"
          className="cursor-pointer w-36 rounded-full flex items-center justify-center py-2 shadow-md bg-gradient-to-r from-[#F4716D] to-[#F8C054] no-underline"
        >
          ⏪ Return home
        </Link>
        <div>
          <p>Welcome back, {firstname}</p>
        </div>
      </nav>
      <Grid className="min-w-[450px]  flex flex-col gap-10 mt-10">
        <h1 className="text-4xl">Store your data</h1>
        <form onSubmit={(event) => handleStoreData(event)} className="flex flex-col gap-5">
          <div className="w-full flex items-center justify-between gap-5">
            <Input
              variant="normal"
              placeholder="Enter your firstname"
              type="text"
              name="firstname"
              value={firstname}
              id="firstname"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFirstname(event.target.value)
              }
            />
            <Input
              variant="normal"
              placeholder="Enter your lastname"
              type="text"
              name="lastname"
              value={lastname}
              id="lastname"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setLastname(event.target.value)
              }
            />
          </div>
          <div className="w-full flex items-center justify-between gap-5">
            <Input
              variant="normal"
              placeholder="Enter your email"
              type="text"
              name="email"
              value={email}
              id="email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
            <Input
              variant="normal"
              placeholder="Enter your phone number"
              type="tel"
              name="phone"
              value={phone}
              id="phone"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPhoneNumber(event.target.value)
              }
            />
          </div>
          <Input
            variant="normal"
            placeholder="Enter your address"
            type="text"
            name="address"
            value={address}
            id="address"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAddress(event.target.value)
            }
          />
          <Input
            variant="normal"
            placeholder="Enter your city"
            type="text"
            name="city"
            value={city}
            id="city"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCity(event.target.value)}
          />
          <Input
            variant="normal"
            placeholder="Enter your zip code"
            type="text"
            name="zipCode"
            value={zipCode}
            id="zipCode"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setZipCode(event.target.value)
            }
          />
          <Button variant="primary" size="lg" type="submit" className="mt-5">
            Update my details
          </Button>
        </form>
      </Grid>
    </div>
  )
}

export default StorePage
