import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  clicked(email, password) {
      if (email.value == '123' || email.value == 'juanjose@eudoxa.mx' || email.value == 'exponentialdemo@singularityu.org') {
      this.router.navigateByUrl('/usuario');
    } else {
      email.classList.add('invalid');
      var form = document.getElementById("validation-form");
      form.style.visibility = 'visible';
      form.style.opacity = "1";
    }
  } 

}
