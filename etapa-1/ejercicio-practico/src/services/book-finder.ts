import { Book, BookResponse } from '../interfaces/book.interface'

const API_URL = 'https://www.googleapis.com/books/v1/volumes'

export const searchBook = async (title: string): Promise<Book[]> => {
  try {
    const response = await fetch(`${API_URL}?q=${title}`)
    if (!response.ok) {
      throw new Error('Error en la petición')
    }
    const json = await response.json()
    return mapResponseToBook(json)
  } catch {
    throw new Error('Error con el servidor')
  }
}

function mapResponseToBook (response: BookResponse): Book[] {
  return response.items?.map((item) => ({
    id: item.id,
    title: item.volumeInfo.title,
    authors: item.volumeInfo.authors ?? ['Anónimo'],
    categories: item.volumeInfo.categories ?? [],
    imageUrl: item.volumeInfo.imageLinks?.thumbnail ?? 'src/assets/img/not_found.png'
  })) ?? []
}
