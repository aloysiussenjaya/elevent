import { Component, OnInit } from '@angular/core';
import { MyeventService, MyEvent } from 'src/app/services/myevent.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { HTTP } from '@ionic-native/http/ngx';
import { UserService } from 'src/app/user.service';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-my-event-details',
  templateUrl: './my-event-details.page.html',
  styleUrls: ['./my-event-details.page.scss'],
})
export class MyEventDetailsPage implements OnInit {

  // my_e_imageURL: string
  my_e_name : string
  my_e_type : string
  my_e_visi : string
  my_e_add : string
  my_e_city : string
  my_e_state : string
  my_e_s_date : string
  my_e_e_date : string
  my_e_t_name : string
  my_e_t_price : string
  my_e_desc : string

  customPopoverOptions: any = {
    header: 'Event Visibility',
    message: 'Unlisted event will not be shown in user feeds.'
  };

  // myevent: MyEvent = {
  //   e_name : '',
  //   e_type : '',
  //   e_visi : '',
  //   e_add : '',
  //   e_city : '',
  //   e_state : '',
  //   e_s_date : '',
  //   e_e_date : '',
  //   e_t_name : '',
  //   e_t_price : '',
  //   e_desc : '',
    // title: '',
    // place: '',
    // price: 0,
    // date: new Date().getTime()
  // }

  // myeventId = null;
  
  url = "";

  constructor(
    // private myeventService: MyeventService, 
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController,
    public afstore: AngularFirestore,
    public user: UserService
    ) { }

  onSelectFile(event){
    if(event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        console.log(this.url);
      }

    }
  }

  removeImg(){
    this.url= "";
  }

  ngOnInit() {
    // this.myeventId = this.route.snapshot.params['id'];
    // if(this.myeventId){
    //   this.loadMyEvent;
    // }
  }

  // async loadMyEvent(){
  //   const loading = await this.loadingController.create({
  //     message: 'Loading MyEvent..'
  //   });
  //   await loading.present();

  //   this.myeventService.getMyEvent(this.myeventId).subscribe( res=>{
  //     loading.dismiss();
  //     this.myevent = res;
  //   });
  // }

  async saveMyEvent(){
    // const my_eimage = this.my_e_imageURL
    const my_ename = this.my_e_name
    const my_etype = this.my_e_type
    const my_evisi = this.my_e_visi
    const my_eadd = this.my_e_add
    const my_ecity = this.my_e_city
    const my_estate = this.my_e_state
    const my_esdate = this.my_e_s_date
    const my_eedate = this.my_e_e_date
    // const my_etname = this.my_e_t_name
    // const my_etprice = this.my_e_t_price
    const my_edesc = this.my_e_desc

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      events: firestore.FieldValue.arrayUnion({
        my_ename,
        my_etype,
        my_evisi,
        my_eadd,
        my_ecity,
        my_estate,
        my_esdate,
        my_eedate,
        my_edesc
      })
    })


    const loading = await this.loadingController.create({
       message: 'Saving MyEvent..'
    });
    await loading.present();

    // if(this.myeventId){
    //   this.myeventService.updateMyEvent(this.myevent, this.myeventId).then(()=>{
    //     loading.dismiss();
    //     this.nav.navigateBack;
    //   })
    // }else{
    //   this.myeventService.addMyEvent(this.myevent).then(()=>{
    //     loading.dismiss();
    //     this.nav.navigateBack;
    //   })
    // }
  }

}
