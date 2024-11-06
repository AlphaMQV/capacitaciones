interface User {
  names: string
  age: number
}

const users: User[] = [{ names: 'Jack', age: 24 }, { names: 'Jill', age: 23 }]

// Función para agregar usuarios

function addUser ({ names, age }: User): void {
  users.push({
    names,
    age: Number(age)
  })
}

// Función para eliminar usuarios

function deleteUser (index: number): void {
  users.splice(index, 1)
}

// Funcion para mostrar usuarios

const $userList = document.querySelector('#user-list') as HTMLUListElement

function updateUserList (): void {
  // Crear un fragmento
  const fragment = document.createDocumentFragment()
  // crear la lista de usuarios
  users.forEach((value: User, index: number) => {
    // crear un li
    const li = document.createElement('li')

    // crear un span
    const span = document.createElement('span')
    // asignarle el nombre del usuario y su edad
    span.textContent = `${value.names} (${value.age} años)`
    // agregarlo al li como hijo
    li.appendChild(span)

    // crear un button
    const button = document.createElement('button')
    // asignarle el atributo type con el valor 'button'
    button.setAttribute('type', 'button')
    // asignarle el texto 'Eliminar'
    button.textContent = 'Eliminar'
    // agregar un evento de escucha al button
    button.addEventListener('click', () => {
      deleteUser(index)
      updateUserList()
    })
    // agregarlo al li como hijo
    li.appendChild(button)

    fragment.appendChild(li)
  })
  // asignar el fragmento a la lista de usuarios
  $userList.replaceChildren(fragment)
}

// obtener el formulario del DOM
const $formUser = document.querySelector('#form-user') as HTMLFormElement

// function para limpiar el formulario

function resetFormUser (): void {
  $formUser.reset()
}

// function para escuchar los cambios del formulario

function handleFormSubmit (event: Event): void {
  // prevenir el comportamiento por defecto del formulario
  event.preventDefault()
  // obtener los valores del formulario
  const formData = new FormData($formUser)
  const fields: unknown = Object.fromEntries(formData)
  // agregar el usuario a la lista
  addUser(fields as User)
  // limpiar el formulario
  resetFormUser()
  // actualizar la lista del DOM
  updateUserList()
}

// escuchar el evento submit del formulario
$formUser.addEventListener('submit', handleFormSubmit)

// actualizar la lista del DOM al cargar la página
updateUserList()
