import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-slide',
  templateUrl: './intro-slide.page.html',
  styleUrls: ['./intro-slide.page.scss'],
})
export class IntroSlidePage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}

  async onClick(){

    this.router.navigate(['/login'])
  }

}
