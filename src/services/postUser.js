import { getEndpointForRol } from "../utils/endpoints"
export async function postUser(username, emailUser, rol){
  const URLENDPOINT = getEndpointForRol(rol)
  try {
    const response = await fetch(URLENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset: UTF-8"
      },
      body: JSON.stringify({
        name: username,
        correo: emailUser,
      })
    })
    return response
  } catch (error) {
    console.log(error.message)
  }
}