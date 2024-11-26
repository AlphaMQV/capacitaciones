import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

interface FormI {
  names: FormControl
  age: FormControl
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit (): void {
  }
}
