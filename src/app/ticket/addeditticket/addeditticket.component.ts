import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { ToastModule } from 'primeng/toast'
import { MessageService, ConfirmationService } from 'primeng/api'
import { ActivatedRoute } from '@angular/router'
import { SharedModule } from '../../share/shared.module'
import { CommonModule } from '@angular/common'
import { PaginatorModule } from 'primeng/paginator'
import { TicketService } from '../ticket.service'
@Component({
  selector: 'app-addeditticket',
  standalone: true,
  templateUrl: './addeditticket.component.html',
  styleUrl: './addeditticket.component.scss',
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
  ],
  providers: [MessageService, ConfirmationService],
})
export class AddeditticketComponent implements OnInit {
  @Input() isEditID: any
  @Input() isVisibleModel: any
  @Output() closeModel = new EventEmitter()
  editData: any
  editIndex: any = ''
  isSaving = false
  editForm!: FormGroup
  priorityList: any = [{ name: 'High' }, { name: 'Medium' }, { name: 'Low' }]
  statusList: any = [{ name: 'Open' }, { name: 'To Do' }, { name: 'Close' }, { name: 'In Progress' }]
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    protected activatedRoute: ActivatedRoute,
    public ticketService: TicketService,
  ) {
    if (this.isEditID) {
      
      console.log('this.isEditID', this.isEditID)
      this.editSetData()
    }
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    })

    if (this.isEditID) {
      console.log('isEditID changed:', this.isEditID)
      this.editSetData()
    }
  }

  editSetData() {
    let data: any
    this.editData = data
    
    data = this.ticketService.TicketList.filter(
      (e: any) => e.id === this.isEditID,
    )
    console.log('data[0]', data[0])

    this.editForm.patchValue(data[0])
  }
  save(): void {
    this.isSaving = true
    if (this.editForm.valid) {
      let data = this.editForm.value

      if (this.isEditID) {
        this.isSaving = false
        this.isVisibleModel = false
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Update Successfully',
        })
        const index = this.ticketService.TicketList.findIndex(
          (element) => element.id === Number(this.isEditID),
        )
        if (index !== -1) {
          this.ticketService.TicketList[index] = data // Replace the object at the found index
        }
        this.addEditcloseModel(data)
      } else {
        let length = this.ticketService.TicketList.length + 5
        data.id = Number(length)
        this.isSaving = false
        this.isVisibleModel = false
        this.ticketService.TicketList.push(data)
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Create Successfully',
        })
        this.addEditcloseModel(data)
      }
    }
  }
  addEditcloseModel(data: any) {
    this.closeModel.emit(data)
    this.editForm.reset()
  }
}
