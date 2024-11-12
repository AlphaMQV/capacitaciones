import { Book } from './interfaces/book.interface'
import { searchBook } from './services/book-finder'

// searchBook('algo')
//   .then(results => console.log(results))
//   .catch(error => console.error(error))

const $bookResults = document.querySelector('#book-results') as HTMLDivElement
const $formSearch = document.querySelector('#form-search') as HTMLFormElement

$formSearch.addEventListener('submit', async (event: SubmitEvent) => {
  event.preventDefault()
  try {
    const books = await searchBook('algo')
    setContentFound(books)
  } catch (error) {
    console.log(error)
  }
})

function setContentFound (books: Book[]) {
  $bookResults.innerHTML = `
    <div class="view-found">
      <ul>
        ${
          books.map(book => `
            <li>
              <img src=${book.imageUrl} alt=${book.title} />
              <h4>${book.title}</h4>
              <p>${book.authors.join(' - ')}</p>
            </li>
          `).join('')
        }
      </ul>
    </div>
  `
}
