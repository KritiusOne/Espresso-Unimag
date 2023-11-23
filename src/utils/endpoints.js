import { RolesTypes } from "./RolesTypes";

export function getEndpointForRol(rol){
  if(rol == RolesTypes.ADMINISTRADOR){
    return "https://cafeapi20231114234957.azurewebsites.net/Cafeterias"
  }
  if(rol == RolesTypes.CLIENTE) return "https://cafeapi20231114234957.azurewebsites.net/Clientes"
  if(rol == RolesTypes.VENDEDOR) return "https://cafeapi20231114234957.azurewebsites.net/Vendedores"
}
export const PRODUCTS_URL = "https://cafeapi20231114234957.azurewebsites.net/Productos/"