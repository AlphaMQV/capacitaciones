import { Component, inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, NgForm, NonNullableFormBuilder, Validators } from '@angular/forms'

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
    names: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    age: [0, [
      Validators.required,
      Validators.min(18)
    ]]
  })

  ngOnInit (): void {
  }

  handleSubmitReactive (): void {
    if (!this.formReactive.valid) return
    console.log(this.formReactive.value)
  }

  handleSubmitTemplate (form: NgForm): void {
    console.log(form.value)
  }

  get formControls (): FormI {
    return this.formReactive.controls
  }
}
