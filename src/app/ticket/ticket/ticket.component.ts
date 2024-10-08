import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { Table } from 'primeng/table'
import { ToastModule } from 'primeng/toast'
import { MessageService, ConfirmationService } from 'primeng/api'
import { ActivatedRoute } from '@angular/router'
import { SharedModule } from '../../share/shared.module'
import { CommonModule } from '@angular/common'
import { PaginatorModule } from 'primeng/paginator'
import { AddeditticketComponent } from '../addeditticket/addeditticket.component'
import { TicketService } from '../ticket.service'
import { StatusTransformPipe } from '../../share/status-transform.pipe'

@Component({
  standalone: true,
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    AddeditticketComponent,
    StatusTransformPipe,
  ],
  providers: [MessageService, ConfirmationService],
})
export default class TicketComponent implements OnInit {
  @ViewChild('dt') table: Table | undefined

  loading = false

  pageLimitOptions = [
    { value: 5 },
    { value: 10 },
    { value: 20 },
    { value: 50 },
    { value: 100 },
  ]

  ifCreateUpdateDialog = false
  isEditIDSend = ''
  isVisibleModel = false
  ifAddEdit = false
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    protected activatedRoute: ActivatedRoute,
    public ticketService: TicketService,
  ) {}

  ngOnInit(): void {}

  createEditApplication(id: any) {
    this.ifAddEdit = true
    this.ifCreateUpdateDialog = true
    this.isVisibleModel = true
    this.isEditIDSend = id
  }

  addEditmodelClose(e: any) {
    this.ifAddEdit = false
    this.ifCreateUpdateDialog = false
    this.isVisibleModel = false
    this.isEditIDSend = ''
  }

  deleteTicket(data: any) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this Ticket?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',
      accept: () => {
        const index = this.ticketService.TicketList.findIndex(
          (e: any) => e === data,
        )
        if (index !== -1) {
          this.ticketService.TicketList.splice(index, 1) // Remove the item at the found index
        }
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Delete Sucess',
        })
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
        })
      },
    })
  }
  
}
