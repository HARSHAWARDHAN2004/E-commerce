import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthicationCon } from "../Context/Authication"

export default function PrivateRoute({ children }) {

  const { isAuth } = useContext(AuthicationCon)

  return isAuth ? children : <Navigate to="/" />
}