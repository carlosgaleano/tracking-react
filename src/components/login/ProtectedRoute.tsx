import {Navigate, Outlet} from 'react-router-dom'
interface Props {
    isAllowed: boolean,
    children: React.ReactNode
}

export const ProtecteRoute=( {isAllowed,children}:  Props)=>{

    if(!isAllowed) return <Navigate to={"/login"} />
    return children? <>{children}</>:Outlet ;

}