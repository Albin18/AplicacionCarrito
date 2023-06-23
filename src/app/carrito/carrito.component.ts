import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent {

}

const Clickbutton = document.querySelectorAll('.body-button')
Clickbutton.forEach(btn => btn.addEventListener('click', () => console.log('button')))
