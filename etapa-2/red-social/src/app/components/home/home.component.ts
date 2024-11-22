import { Component, inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms'

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
  private readonly _formBuilder = inject(NonNullableFormBuilder)

  formReactive: FormGroup<FormI> = this._formBuilder.group({
    names: [''],
    age: ['']
  })

  ngOnInit (): void {
  }

  handleSubmitReactive (): void {
    console.log(this.formReactive.value)
  }

  handleSubmitTemplate (): void {
    console.log('Form submitted template')
  }

  get formControls (): FormI {
    return this.formReactive.controls
  }
}
