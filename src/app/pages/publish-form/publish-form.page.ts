import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publish-form',
  templateUrl: './publish-form.page.html',
  styleUrls: ['./publish-form.page.scss'],
})
export class PublishFormPage implements OnInit {

  customPopoverOptions: any = {
    header: 'Event Visibility',
    message: 'Unlisted event will not be shown in user feeds.'
  };

  constructor() { }

  ngOnInit() {
  }

}
