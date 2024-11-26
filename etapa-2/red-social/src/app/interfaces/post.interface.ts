interface PostReaction {
  likes: number
  dislikes: number
}

export interface Post {
  id: string
  title: string
  body: string
  reactions: PostReaction,
  views: number
  userid: string
}
