import { Component } from '@angular/core';
import { ServerService } from './server.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fotos = [];
  constructor(private serverService: ServerService) {}

  loadPics() {
    this.serverService.getFotos()
      .subscribe(
        (fotos) => this.fotos = fotos,
        (error) => console.log(error)
      );
  }
}
