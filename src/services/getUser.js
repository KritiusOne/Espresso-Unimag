import { getEndpointForRol } from "../utils/endpoints";

export async function getUser(rol){
  const URL_ENDPOINT = getEndpointForRol(rol)
  const response = await fetch(URL_ENDPOINT)
  console.log(response)
  return response
}