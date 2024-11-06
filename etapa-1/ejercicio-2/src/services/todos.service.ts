import { DatoAPI } from '../interfaces/dato-api.interface'
import { ToDos } from '../interfaces/todos.interface'

const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export async function getToDos (): Promise<ToDos[]> {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Error al obtener los todos')
    }
    const json = await response.json()
    return mappedToDos(json)
  } catch {
    throw new Error('Error al obtener los todos')
  }
}

// Versión anterior sin API
// export async function getToDos (): Promise<ToDos[]> {
//   const apiResults: DatoAPI[] = withResults
//   return mappedToDos(apiResults)
// }

function mappedToDos (results: DatoAPI[]): ToDos[] {
  return results.map((result: DatoAPI) => {
    return {
      user_id: result.userId,
      id: result.id,
      title: result.title,
      completed: result.completed
    }
  })
}
