import { Avatar } from '../avatar/Avatar'
import { CartButton } from './CartButton'
import { useAuth } from '../../context/authContext/AuthContext'
import "./profileButton.css"


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
      <button className='profileButtons__userButton' >
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
