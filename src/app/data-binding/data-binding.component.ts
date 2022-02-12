import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',

  // Tambem é possivel fazer in-line, tal como o template
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string= "http://loiane.com";
  cursoAngular: boolean = true;
  urlImagem: string = "https://picsum.photos/id/237/200/300";

  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver:boolean = false;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return this.cursoAngular;
  }

  botaoClicado(){
    alert("Botao clicado!");
  }

  onKeyUp(evento: KeyboardEvent){
    console.log();
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
