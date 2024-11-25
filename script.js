
const button = document.querySelector(".button-add-task")
const input = document.querySelector(".input-task")
const ListaCompleta = document.querySelector(".list-tasks")

let minhalistadeitens = []


function AdicionarNovaTarefa() {
  minhalistadeitens.push({
    tarefa: input.value,
    concluida: false
  })
  MostrarTarefas()
  input.value = ``

}

function MostrarTarefas() {


  let Novali = ``







  minhalistadeitens.forEach((item, posicao) => {
    Novali = Novali + `
 
 
 
   <li class="task ${item.concluida ? "done" : ""}">   
                <img   src="img/checked.png" alt="" onclick="ConcluirTarefa(${posicao})   "   >

               <p>${item.tarefa}</p>
                <img src="img/trash.png" alt="" onclick="DeletarItem(${posicao})"   >



            </li>
 
 
 `


  })

  ListaCompleta.innerHTML = Novali


  localStorage.setItem('lista', JSON.stringify(minhalistadeitens))

}


function ConcluirTarefa(posicao) {
  minhalistadeitens[posicao].concluida = !minhalistadeitens[posicao].concluida


  MostrarTarefas()
}








function DeletarItem(posicao) {
  minhalistadeitens.splice(posicao, 1)

  MostrarTarefas()
}


function RecarregarTarefas() {
  const TarefasdoLocalStorage = localStorage.getItem('lista')
  if (TarefasdoLocalStorage) {
    minhalistadeitens = JSON.parse(TarefasdoLocalStorage);
  }


  MostrarTarefas();


}



RecarregarTarefas();

button.addEventListener("click", AdicionarNovaTarefa)