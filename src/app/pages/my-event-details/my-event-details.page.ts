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

  customPopoverOptions: any = {
    header: 'Event Visibility',
    message: 'Unlisted event will not be shown in user feeds.'
  };

  myevent: MyEvent = {
    e_name : '',
    e_type : '',
    e_visi : '',
    e_add : '',
    e_city : '',
    e_state : '',
    e_s_date : '',
    e_e_date : '',
    e_t_name : '',
    e_t_price : '',
    e_desc : '',
    // title: '',
    // place: '',
    // price: 0,
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
