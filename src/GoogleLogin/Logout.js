import { googleLogout } from '@react-oauth/google';


const Logout = () => {
  return (
    <div>
      <button onClick={()=>googleLogout()}>Logout</button>
    </div>
  )
}

export default Logout