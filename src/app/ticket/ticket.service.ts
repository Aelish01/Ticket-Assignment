import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  TicketList: any[] = [
    {
      id: 1,
      title: 'Ticket 1',
      description: 'description',
      priority: 'High',
      status: 'To Do',
    },
    {
      id: 2,
      title: 'Ticket 2',
      description: 'description',
      priority: 'Medium',
      status: 'Close',
    },
    {
      id: 3,
      title: 'Ticket 3',
      description: 'description',
      priority: 'Low',
      status: 'In Progress',
    },
  ]

  constructor() {}
}
