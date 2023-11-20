import { Avatar } from '../avatar/Avatar'
import { CartButton } from './CartButton'
import { useAuth } from '../../context/authContext/AuthContext'
import { Link } from 'react-router-dom'
import "./profileButton.css"
import { PrivateRoutes } from '../../routes/TypesRoutes'


export function ProfileButtons() {
  const { currentUser } = useAuth()
  const emailArr = [...currentUser.email]
  let position = 10000000
  const emailName = emailArr.filter((letra, i) => {
    if (letra != "@" && i < position) {
      return letra
    }
    if (letra == "@") {
      position = i
      return
    }
  }).join("").trim()
  return (
    <div className='profileButtons'>
      <CartButton />
      <Link to={PrivateRoutes.PROFILE} className='profileButtons__userButton' >
        <strong className='profileButtons__userButton__title'>
          {
            currentUser.displayName ? currentUser.displayName : emailName
          }
        </strong>
        <Avatar />
      </Link>
    </div>
  )
}
