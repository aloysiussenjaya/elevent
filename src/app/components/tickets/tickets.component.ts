import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {

  tickets = [
    
  ];
  
  hideEmptyString=false;

  temp_id=0;

  constructor(public alertController:AlertController) { }

  ngOnInit() {}

  async showAddTicketPrompt(){
    const addTicketAlert = await this.alertController.create({
      header: 'Add a ticket',
      inputs: [
        {
          name: 'ticketname',
          type: 'text',
          placeholder: 'Ticket Name'
        },
        {
          name: 'ticketprice',
          type: 'text',
          placeholder: 'Ticket Price'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (item) => {
            if(item.ticketname.length < 2 || item.ticketprice.length <1){
              addTicketAlert.message = 'Data is not valid';
              return false;
            }else{
              this.addTicket(item.ticketname, item.ticketprice);
              console.log('Add ticket ' + item.ticketname);
            }

          }
        }
      ]
    });

    await addTicketAlert.present();
  }

  addTicket(name, price){
    const price_rendered = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.tickets.push({'id': this.temp_id, 'title': name, 'price': 'Rp'+price_rendered});
    this.temp_id++;
    this.hideEmptyString=true;
  }

  removeTicket(item){
    const targetIndex = this.tickets.indexOf(item);
    this.tickets.splice(targetIndex,1);
    if(this.tickets.length==0){
      this.hideEmptyString=false;
    }
  }

}
