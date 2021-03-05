import { Component } from "@angular/core";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman2','Ironman2','Goku','Thor','hulk']
    heroeBorrado: string = ""

    borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || ""
      console.log('borrado' , this.heroeBorrado)
    }

}
