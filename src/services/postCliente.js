export async function postCliente(username, emailUser){
  try {
    const response = await fetch("https://cafeapi20231114234957.azurewebsites.net/Clientes", {
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