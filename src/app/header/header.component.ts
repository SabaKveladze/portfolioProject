import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [DatePipe],
})
export class HeaderComponent implements OnInit {
  currentDateTime: string;

  constructor(private datePipe: DatePipe) {
    this.currentDateTime = this.getCurrentDateTime();
  }
  ngOnInit(): void {
    setInterval(() => {
      this.currentDateTime = this.getCurrentDateTime();
    }, 1000);
  }
  getCurrentDateTime(): string {
    const now = new Date();
    return this.datePipe.transform(now, 'MMMM d, y, h:mm:ss a') || '';
  }
}
