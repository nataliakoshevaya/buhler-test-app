import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MachineSectionsType } from '../type/machine.type';



@Injectable()
export class MachineService {
  errorObject: string | null = null;

  constructor(private http: HttpClient) { }

  fetchMachineList(): Observable<MachineSectionsType[]> {
    return this.http.get<MachineSectionsType[]>('http://localhost:3004/machine').pipe(
      catchError(({ message }: HttpErrorResponse) => {
        this.errorObject = message;
        return throwError(() => message)
      })
    )
  }

  fetchSection(id: string): Observable<MachineSectionsType>{
    return this.http.get<MachineSectionsType>(`http://localhost:3004/machine/${id}`)
  }

  setBackgroundColor(status: string): string {
    switch (status) {
      case 'warning':
        return 'warning';
      case 'alarm':
        return 'alarm';
      default:
        return 'running';
    }
  }
}
