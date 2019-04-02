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

  //When a dxTemplate is used, sorting does not happen automatically; so, we need to specify what to sort on and set allowSorting="true"
  sortIsUrgentColumn(rowData) {
    return rowData.urgent == true? 0: 1;
  }

  sortPatNameColumn(rowData) {
    return rowData.patNum;
  }

  sortDateOfVisitColumn(rowData) {
    return rowData.DateOfVisit;
  }

  sortProviderNameColumn(rowData) {
    return rowData.provider;
  }

  sortMessageColumn(rowData) {
    return rowData.messageText;
  }

  calculateCellNameValue(rowData) {
    return rowData.patNum + ' ' + rowData.patName;
  }

  calculateCellDateOfVisitValue(rowData) {
    return rowData.dateOfVisit;
  }

  calculateCellProviderValue(rowData) {
    return rowData.provider + ' ' + rowData.providerNum;
  }

  calculateCellMessageValue(rowData) {
    return rowData.createdBy + ' ' + rowData.subject + ' ' + rowData.messageText;
  }
}
