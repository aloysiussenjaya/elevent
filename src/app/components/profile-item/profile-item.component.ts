import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonTabs } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit() {}
  
  editProfile(){
    this.router.navigate(['/edit-profile']);  
  }
  
  


}
