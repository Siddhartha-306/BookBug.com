import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser] = useAuth();

    const handleLogout = () => {
        try{
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("LogOut successfully");
            setTimeout(() => {
                window.location.reload();
              }, 3000);
        }
        catch(error){
            toast.error("Error: " + error.message);
            setTimeout(()=>{}, 2000);
        }
    }

  return (
    <div>
      <button className='px-3 py-2.5 hover:bg-red-600 hover:scale-95 ml-1 text-sm bg-red-500 text-white rounded-md' onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Logout
