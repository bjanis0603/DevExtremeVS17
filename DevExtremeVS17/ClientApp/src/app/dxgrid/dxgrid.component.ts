import { Component } from '@angular/core';
import { Message, Service } from './dxgrid.service'

@Component({
  selector: 'app-this-doesnt-actually-matter-because-of-routing',
  templateUrl: './dxgrid.component.html',
  styleUrls: ['./dxgrid.component.css'],
  providers: [Service]
})
export class DxGridComponent {
  messages: Message[];

  constructor(service: Service) {
    this.messages = service.getMessages();
  }
}
