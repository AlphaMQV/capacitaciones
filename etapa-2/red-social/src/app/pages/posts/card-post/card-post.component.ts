import { Component, Input, OnInit } from '@angular/core'
import { ResponsePost } from 'src/app/interfaces/post.interface'

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {
  // input
  @Input() post: ResponsePost

  ngOnInit (): void {
  }
}
