import { apiConfig } from "./api-config.js"

export async function scheduleNew({ id, name, when }) {
  try {
    // Faz a requisicao p+ara enviar os dados do agendamento
    await fetch (`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id, name, when}),
    })

    alert("Agendamento realizado com sucesso!")

  } catch (error) {
    console.log(error)
    alert("Nao foi possivel agendar.Tente Novamente mais tarde")
  }

}