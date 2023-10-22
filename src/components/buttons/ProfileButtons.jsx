import { useContext } from 'react'
import { BsCart4 } from "react-icons/bs"
import { ProductsContext } from '../../context/productsContext'
import { Button } from "./Button.jsx"
import "./profileButton.css"
import { Avatar } from '../avatar/Avatar'


export function ProfileButtons() {
  const { user } = useContext(ProductsContext)
  // Imagen de ejemplo https://elcomercio.pe/resizer/AB93Kg1JoITGLMLkCgLBnVzg_7g=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/37OWRM2CLBAE7BP5SXKLVMNHZE.jpg

  return (
    <div className='profileButtons'>
      <Button className="profileButtons__icon" Icon={BsCart4} />
      <button className='profileButtons__userButton' >
        <strong className='profileButtons__userButton__title'>
          {
            user.name
          }
        </strong>
        <Avatar />
      </button>
    </div>
  )
}
