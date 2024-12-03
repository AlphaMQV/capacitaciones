export interface PostReaction {
  likes: number
  dislikes: number
}

export interface Post {
  title: string
  body: string
  reactions: PostReaction,
  views: number
  userid: string
}

export interface ResponsePost extends Post {
  id: string
}
