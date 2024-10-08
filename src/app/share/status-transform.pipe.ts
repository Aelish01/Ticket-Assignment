import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'statusTransform',
  standalone: true,
})
export class StatusTransformPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    // Check the status and return a display-friendly version
    switch (value) {
      case 'To Do':
        return 'Done'
      case 'Open':
        return 'Open'
      case 'In Progress':
        return 'Ongoing'
      case 'Close':
        return 'Closed'
      default:
        return value
    }
  }
}
