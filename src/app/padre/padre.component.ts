import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  constructor( 
  private _servicioFamiliar : ServicioFamiliarService
  ){}

  nombre?: string;
  fecha?: Date =  new Date()
  dolar?: number = 7.65
  pi?: number = Math.PI
  factor: number = 0.5


  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Tania Esmeralda');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
  
  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeño() || '');

  }

  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo);
  }
 


}
