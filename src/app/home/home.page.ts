import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //Dummy data, delete later.
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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
