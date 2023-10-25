import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const {user,isLoading,isError,isSuccess,message}=useSelector(state => state.auth)

  useEffect(()=>{
    if(user === null){
      navigate("/Register")
    }
  },[user])

  return (
    <>
      <h1 className='text-center' >Home</h1>
    </>
  )
}

export default Home
