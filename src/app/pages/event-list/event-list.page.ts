import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {

  public events = [
    {
      'title': 'A Head Full Of Dreams', 
      'type': 'Concert',
      'imgUrl': 'https://www.kfcyumcenter.com/assets/img/Coldplay_620x385L-0ccf92d822.jpg'
    },
    {
      'title': 'Formula 1 Singapore Grand Prix', 
      'type': 'Sport', 
      'imgUrl':'https://static.tiket.photos/image/upload/v1568262352/eventConvertedImages/2019/09/12/1e957d6f-10ff-463a-b043-0328ab674e66-1568262351931-1a8b77c6e4c6963febfb721809661ae0.jpg'},
    {
      'title': 'The International 2019', 
      'type': 'Esport',
      'imgUrl': 'https://metaco.gg/wp-content/uploads/2019/05/the-international-2019-capai-prizepool-usd-7-juta-featured.jpg'
    },
    {
      'title': 'MotoGP Sepang Malaysia 2019',
      'type': 'Sport',
      'imgUrl': 'https://static.tiket.photos/image/upload/v1547463881/eventConvertedImages/2019/01/14/d858b748-5fbd-4b1b-97c9-5fe3f35277c386cedffb98bcde61af8878ff1e8c965a.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
