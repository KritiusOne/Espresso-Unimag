import { Avatar } from '../avatar/Avatar'
import { CartButton } from './CartButton'
import { useAuth } from '../../context/authContext/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./profileButton.css"
import { PrivateRoutes } from '../../routes/TypesRoutes'
import { Button } from './Button'


export function ProfileButtons() {
  const { currentUser } = useAuth()
  const navegate = useNavigate()
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
  const handleClick = () => {
    navegate(`/profile/${currentUser.uid}`)
  }
  return (
    <div className='profileButtons'>
      <CartButton />
      <button onClick={handleClick} className='profileButtons__userButton' >
        <strong className='profileButtons__userButton__title'>
          {
            currentUser.displayName ? currentUser.displayName : emailName
          }
        </strong>
        <Avatar />
      </button>
    </div>
  )
}
