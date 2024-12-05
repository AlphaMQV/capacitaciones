export interface Interaction {
  like: boolean
  dislike: boolean
}

export interface ResponseInteraction extends Interaction {
  id: string
}
