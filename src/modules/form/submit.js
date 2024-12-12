import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")


//Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  //Previne o comportamento padrao de carregar a pagina
  event.preventDefault()

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim()

    if (!name){
      return alert("Informe o nome do cliente!")
    }

    //Recupera o horario selecionado
    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Selecione a hora.")
    }
    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    //Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour,"hour")

    //Gera um id 
    const id = new Date().getTime()

    //Faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    
    })
    //Recarrega os agendamentos
    await schedulesDay()
    //Limpa o input do cliente
    clientName.value = ""

  } catch(error) {
    alert("nao foi possivel realizar o agendamento")
    console.log(error)
  }
}