import { FaUserAlt } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { IoIosNuclear } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { FaNewspaper } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
export const OPTIONS_FROM_CLIENTE = [
  {
    Icon: FaUserAlt,
    title: "Mi Perfil"
  },
  {
    Icon: MdUpdate,
    title: "Actualizar datos"
  },
  {
    Icon: CiClock2,
    title: "Historial de pedidos"
  },
  {
    Icon: IoIosNuclear,
    title: "Eliminar cuenta"
  }
]
export const OPTIONS_FROM_VENDEDOR = [
  {
    Icon: MdOutlinePhoneAndroid,
    title: "Pedidos activos"
  },
  {
    Icon: PiCurrencyDollarSimpleFill,
    title: "Facturas"
  },
  {
    Icon: FaNewspaper,
    title: "Reportes de ventas"
  }
]
export const OPTIONS_FROM_ADMIN = [
  {
    Icon: FaUserAlt,
    title: "Personas"
  },
  {
    Icon: IoFastFood,
    title: "Productos"
  },
  {
    Icon: MdOutlinePhoneAndroid,
    title: "Pedidos"
  },
  {
    Icon: FaNewspaper,
    title: "Reportes"
  }
]