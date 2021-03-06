import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    
    private _personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 150000
        },
        {
          nombre: "Vegeta",
          poder: 7500
        }
      ]

      get personajes(): Personaje[] {
          return [...this._personajes]
      }

      constructor(){} 

      AgregarPersonaje(p:Personaje) {
        this._personajes.push( p )
      }
}