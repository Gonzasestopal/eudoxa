import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-usuariohome',
  templateUrl: './usuariohome.component.html',
  styleUrls: ['./usuariohome.component.css']
})
export class UsuariohomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

}
