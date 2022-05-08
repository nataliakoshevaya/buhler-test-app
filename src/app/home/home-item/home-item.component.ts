import { Component, Input, OnInit } from '@angular/core';
import { StateIcons } from 'src/app/shared/icons/states-icons';

@Component({
  selector: 'app-machine-section-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss']
})
export class HomeItemComponent implements OnInit {
  @Input() sectionName!: string;
  @Input() sectionImg!: string;
  @Input() status!: string
  
  constructor() { }

  ngOnInit(): void {}
}
