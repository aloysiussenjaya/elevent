import { Component, OnInit } from '@angular/core';
import { MyEvent, MyeventService } from 'src/app/services/myevent.service';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.page.html',
  styleUrls: ['./myevent.page.scss'],
})
export class MyeventPage implements OnInit {
  myevents: MyEvent[];

  constructor(private myeventService: MyeventService) { }

  ngOnInit() {
    this.myeventService.getMyEvents().subscribe(res=>{
      this.myevents = res;
    });
  }

  remove(item){
    this.myeventService.removeMyEvent(item.id);
  }

}
