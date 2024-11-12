import { Book, BookResponse } from '../interfaces/book.interface'
import withResults from '../mocks/with-results.json'

export const searchBook = async (title: string): Promise<Book[]> => {
  try {
    const json = withResults
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
