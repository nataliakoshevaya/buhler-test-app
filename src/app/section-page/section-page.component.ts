import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { MachineService } from '../shared/services/machine.service';
import { MachineSectionsType } from '../shared/type/machine.type';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.scss']
})
export class SectionPageComponent implements OnInit {
  id!: string;
  machineSectionData$!: Observable<MachineSectionsType>;
  errorServerMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private _machineService: MachineService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => this.fetchSection(id))
  }

  fetchSection(id: string): void {
    this.machineSectionData$ = this._machineService.fetchSection(id).pipe(
      catchError(({ message }: HttpErrorResponse) => {
        this.errorServerMessage = message;
        return throwError(() => message)
      })
    );
  }
}
