import { hoursLoad } from "../modules/form/hours-load"

// Seleciona o input de data
const selectedDate = document.getElementById("date")
export function schedulesDay(){
  //Obtem a data do input
  const date = selectedDate.value

  // Renderiza as horas disponiveis.
  hoursLoad({date})

}