import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterLink } from '@angular/router'

@Component({
  standalone: true,
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [
    RouterLink,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class NavComponent {

}
