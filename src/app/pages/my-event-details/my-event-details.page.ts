import { Component, OnInit } from '@angular/core';
import { MyeventService, MyEvent } from 'src/app/services/myevent.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
  import { from } from 'rxjs';
@Component({
  selector: 'app-my-event-details',
  templateUrl: './my-event-details.page.html',
  styleUrls: ['./my-event-details.page.scss'],
})
export class MyEventDetailsPage implements OnInit {

  myevent: MyEvent = {
    title: 'Music Fest',
    place: 'Sabuga ITB',
    price: 100.000,
    // date: new Date().getTime()
  }

  myeventId = null;

  constructor(
    private myeventService: MyeventService, 
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController
    ) { }

  ngOnInit() {
    this.myeventId = this.route.snapshot.params['id'];
    if(this.myeventId){
      this.loadMyEvent;
    }
  }

  async loadMyEvent(){
    const loading = await this.loadingController.create({
      message: 'Loading MyEvent..'
    });
    await loading.present();

    this.myeventService.getMyEvent(this.myeventId).subscribe( res=>{
      loading.dismiss();
      this.myevent = res;
    });
  }

  async saveMyEvent(){
    const loading = await this.loadingController.create({
      message: 'Saving MyEvent..'
    });
    await loading.present();

    if(this.myeventId){
      this.myeventService.updateMyEvent(this.myevent, this.myeventId).then(()=>{
        loading.dismiss();
        this.nav.navigateBack;
      })
    }else{
      this.myeventService.addMyEvent(this.myevent).then(()=>{
        loading.dismiss();
        this.nav.navigateBack;
      })
    }
  }

}
