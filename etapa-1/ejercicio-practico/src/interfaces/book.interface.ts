export interface Book {
  id: string
  title: string
  authors: string[]
  categories: string[]
  imageUrl: string
}

export interface BookResponseItem {
  id: string
  volumeInfo: {
    title: string
    authors?: string[]
    categories?: string[]
    imageLinks?: {
      thumbnail: string
    }
  }
}

export interface BookResponse {
  kind: string
  totalItems: number
  items?: BookResponseItem[]
}
