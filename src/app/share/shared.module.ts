import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TableModule } from 'primeng/table'
import { DropdownModule } from 'primeng/dropdown'
import { CheckboxModule } from 'primeng/checkbox'
import { InputTextModule } from 'primeng/inputtext'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { RadioButtonModule } from 'primeng/radiobutton'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { MultiSelectModule } from 'primeng/multiselect'
import { CardModule } from 'primeng/card'
import { ConfirmPopupModule } from 'primeng/confirmpopup'
import { TooltipModule } from 'primeng/tooltip'
import { FileUploadModule } from 'primeng/fileupload'
import { MessagesModule } from 'primeng/messages'
import { ToastModule } from 'primeng/toast'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { PaginatorModule } from 'primeng/paginator'
import { CalendarModule } from 'primeng/calendar'
import { ChartModule } from 'primeng/chart'
import { OverlayPanelModule } from 'primeng/overlaypanel'
import { ConfirmDialogModule } from 'primeng/confirmdialog'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    OverlayPanelModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    ButtonModule,
    DialogModule,
    MultiSelectModule,
    CardModule,
    ConfirmPopupModule,
    TooltipModule,
    MessagesModule,
    ToastModule,
    TableModule,
    FileUploadModule,
    ProgressSpinnerModule,
    PaginatorModule,
    ChartModule,
    ConfirmDialogModule,
  ],
})
export class SharedModule {}
