import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MachineService } from '../shared/services/machine.service';
import { MachineSectionsType } from '../shared/type/machine.type';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  machineSectionList$!: Observable<MachineSectionsType[]>;

  constructor(private _machineService: MachineService) { }

  ngOnInit(): void {
    this.fetchMachineList();
  }
  
  fetchMachineList(): void {
    this.machineSectionList$ = this._machineService.fetchMachineList()
  }

  setBackgroundColor(status: string): string {
    return this._machineService.setBackgroundColor(status)
  }
}
