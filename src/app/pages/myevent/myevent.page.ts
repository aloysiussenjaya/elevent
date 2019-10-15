import { Component, OnInit } from '@angular/core';
import { MyEvent, MyeventService } from 'src/app/services/myevent.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.page.html',
  styleUrls: ['./myevent.page.scss'],
})
export class MyeventPage implements OnInit {
  myevents: MyEvent[];
  userEvents
  
  constructor(
    private afs: AngularFirestore,
    private user: UserService
    ) { 
      const events = afs.doc(`users/${user.getUID()}`)
      this.userEvents = events.valueChanges()
    }

  ngOnInit() {
    // this.myeventService.getMyEvents().subscribe(res=>{
    //   this.myevents = res;
    // });
  }

  // remove(item){
  //   this.myeventService.removeMyEvent(item.id);
  // }

}
