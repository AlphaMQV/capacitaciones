import { ToDos } from './interfaces/todos.interface'
import { getToDos } from './services/todos.service'

const $tableBody = document.querySelector('#table-body') as HTMLTableSectionElement

// obtener todos los todos
async function getAllToDos (): Promise<void> {
  try {
    const toDos: ToDos[] = await getToDos()
    // crear un fragmento
    const fragment = document.createDocumentFragment()
    // recorrer todos los todos
    toDos.forEach((toDo: ToDos) => {
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
  } catch (error) {
    console.log(error)
  }
}

getAllToDos()
