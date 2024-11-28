import { inject, Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // inject
  private readonly _toastr = inject(ToastrService)

  success (message: string): void {
    this._toastr.success(message, 'Completado')
  }

  error (message: string): void {
    this._toastr.error(message, 'Error')
  }

  warning (message: string): void {
    this._toastr.warning(message, 'Advertencia')
  }
}
