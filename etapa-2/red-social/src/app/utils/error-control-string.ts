import { FormControl } from '@angular/forms'

export function errorControlString (control: FormControl<string>): string {
  if (control.hasError('required')) return 'Campo requerido'
  if (control.hasError('minlength')) return 'Mínimo de caracteres no alcanzado'
  if (control.hasError('maxlength')) return 'Máximo de caracteres excedido'
  return ''
}
