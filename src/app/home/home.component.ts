import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MachineService } from '../shared/services/machine.service';
import { MachineSectionsType } from '../shared/type/machine.type';

@Component({
  selector: 'app-machine-section',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
  machineSectionList$!: Observable<MachineSectionsType[]>;
  errorServerMessage: string | null = null;

  constructor(private _machineService: MachineService) {}

  ngOnInit(): void {
    this.fetchMachineList();
  }

  setBackgroundColor(status: string): string {
    return this._machineService.setBackgroundColor(status)
  }

  fetchMachineList(): void {
    this.machineSectionList$ = this._machineService.fetchMachineList().pipe(
      catchError(({ message }: HttpErrorResponse) => {
        this.errorServerMessage = message;
        return throwError(() => message)
      })
    );
  }
}
