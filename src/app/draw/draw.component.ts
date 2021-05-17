import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit, AfterViewInit {

  // Hacer referencia a un componente de la parte grafica
  @ViewChild('canvasRef', { static: false }) canvasRef: any

  // Propiedades de Altura y anchura del canvas
  public width = 800;

  public height = 800;

  // Variable para un Contexto Canvas
  private canvasContext!: CanvasRenderingContext2D;

  // Para almacenar las coordenadas de canvas mientras se dibuja
  private points: Array<any> = [];

  // Atributo para hacer que el pincel pare de pintar cuando se le indique
  isAvailable: boolean = false;

  //para capturar los movimientos del mouse
  @HostListener('document:mousemove',['$event'])

  onMouseMove=(e: any) => {
    //console.log(e);
    if(e.target.id === 'canvasId' && (this.isAvailable == true) ){
      //console.log(e);
      this.write(e)
    }

  }

  // @HostListener('click',['$event'])

  // onClick = (e: any) => {
  //   if(e.target.id === 'canvasId'){
  //     //console.log(e);
  //     this.isAvailable = !this.isAvailable;
  //     this.points=[];
  //   }
  // }

  @HostListener('mousedown',['$event'])

  onMouseDown=(e: any) => {
    //console.log(e);
    if(e.target.id === 'canvasId'){
      //console.log(e);
      this.isAvailable = true;
    }

  }

  @HostListener('mouseup',['$event'])

  onMouseUp=(e: any) => {
    //console.log(e);
    if(e.target.id === 'canvasId'){
      //console.log(e);
      this.isAvailable = false;
      this.points=[];
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Preparar el lienzo de la sala
    this.render();
  }

  private render(): any {

    // Referencia Elemento canvas
    const canvasElement = this.canvasRef.nativeElement;
    //console.log(canvasElement);

    // llamado del contexto canvas
    this.canvasContext = canvasElement.getContext('2d');

    // Dimension del lienzo de canvas
    canvasElement.width = this.width;
    canvasElement.height = this.height;

    // Especificaciones del contexto

    // Grosor de la linea
    this.canvasContext.lineWidth = 3;

    // Para que el dibujo tenga más naturalidad
    this.canvasContext.lineCap = 'round';

    // Color de la linea
    this.canvasContext.strokeStyle = '#00000';
  }

  private write(res: any): any{

    const canvasElement: any = this.canvasRef.nativeElement;
    const rect = canvasElement.getBoundingClientRect();
    const previousPos = {
      x: res.clientX - rect.left,
      y: res.clientY - rect.top
    }

    //console.log(prevPos);

    this.writeSingle(previousPos);

  }

  private writeSingle = (previousPos: any) => {
    // Guardar coordenadas en el array points
    this.points.push(previousPos);

    if(this.points.length > 3){
      const previousPos = this.points[this.points.length - 1]
      const currentPos = this.points[this.points.length - 2]

      // Le pasamos como parametros los puntos previos y actuales del lienzo
      this.draw(previousPos, currentPos);
    }
  }

  private draw(previousPos: any, currentPos: any) {
    if(!this.canvasContext){
      //finalizar función
      return;
    }

    // Iniciar ruta del dibujo
    this.canvasContext.beginPath();

    if(previousPos){
      this.canvasContext.moveTo(previousPos.x, previousPos.y);
      this.canvasContext.lineTo(currentPos.x, currentPos.y);
      this.canvasContext.stroke();
    }
  }

  public clearZone() {
    // Limpiar las coordenadas previamente guardadas
    this.points = [];

    this.canvasContext.clearRect(0, 0, this.width, this.height);
  }
}
