import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logo: string = '../assets/images/Logo_Bühler_AG.svg.png'
  public time!: number;
  public timeImg: string = '../assets/images/schedule_FILL0_wght400_GRAD0_opsz48.svg'
  public userName: string = 'Operator'

  constructor() { }

  ngOnInit(): void {
    this.getCurrentDate();
  }

  getCurrentDate(): void {
    setInterval(() => this.time = Date.now(), 1000)
  }
}
