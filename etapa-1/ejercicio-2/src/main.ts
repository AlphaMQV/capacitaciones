import { ToDos } from './interfaces/todos.interface'
import { getToDos } from './services/todos.service'

let toDos: ToDos[] = []
let filteredToDos: ToDos[] = []

const $tableBody = document.querySelector('#table-body') as HTMLTableSectionElement

// obtener todos los todos
async function getAllToDos (): Promise<void> {
  try {
    toDos = await getToDos()
    updateDOM(toDos)
  } catch (error) {
    console.log(error)
  }
}

// función para actualizar el DOM

function updateDOM (listToDos: ToDos[]): void {
  // crear un fragmento
  const fragment = document.createDocumentFragment()
  // recorrer todos los todos
  listToDos.forEach((toDo: ToDos) => {
    // crear un tr por cada todo
    const tr = document.createElement('tr')
    // agregar el contenido al tr
    tr.innerHTML = `
      <td>${toDo.id}</td>
      <td>${toDo.title}</td>
      <td>${toDo.completed ? 'Completado' : 'Pendiente'}</td>
    `
    // agregar el tr al fragmento
    fragment.appendChild(tr)
  })
  // agregar el fragmento a la tabla
  $tableBody.replaceChildren(fragment)
}

getAllToDos()

// input

// obtener la referencia al input
const $searchInput = document.querySelector('#input-search') as HTMLInputElement

// escuchar el evento input
$searchInput.addEventListener('input', () => {
  // const value = $searchInput.value
  const { value } = $searchInput
  filteredToDos = filterToDos(value)
  updateDOM(filteredToDos)
})

function filterToDos (value: string): ToDos[] {
  // convertir a minusculas el valor
  const valueLower = value.toLowerCase()
  const completed: boolean = 'completado'.startsWith(valueLower)
  return toDos.filter(
    (toDo) => {
      // return true OR false
      // return toDo.title.toLowerCase().startsWith(valueLower)
      return toDo.title.toLowerCase().includes(valueLower) ||
        toDo.completed === completed
    }
  )
}
