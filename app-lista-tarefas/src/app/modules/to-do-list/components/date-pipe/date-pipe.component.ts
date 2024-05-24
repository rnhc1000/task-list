import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'date-pipe',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div>
    <p class="date-pipe-text"> {{date | date:'fullDate'}} </p>
</div>
  `
})
export class DatePipeComponent {

  date: Date = new Date();
  

}
