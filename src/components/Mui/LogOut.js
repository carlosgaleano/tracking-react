import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthStore } from "../../store/auth.ts";
import { useNavigate } from "react-router-dom";

export const LogOut2 =()=>{

    const logOut=useAuthStore((store)=>store.logOut);
    const navigate=useNavigate();
  const  close=() => {
        navigate("/");
        logOut();
      }

   return(

    <LogoutIcon className="right2"  onClick={close}  color="warning" sx={{ fontSize: 80}}   />

   ); 
 
}