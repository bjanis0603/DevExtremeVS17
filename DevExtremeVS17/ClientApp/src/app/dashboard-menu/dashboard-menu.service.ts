import { Injectable } from "@angular/core";

//Temporary Name
export class Category {  //Temporary Name - See Mock up: My Messages, My Work Queue, All Messages, Ended Conversations, Work Queue
  id: number;
  name: string;
  items: View[];
  urgent: number;
  total: number;
}

//Temporary Name
export class View {  //My Messages: Dashboard, Clinic Admin, Front Desk, Provider, Sent
  id: number;           //My Work Queue: Dashboard, Clinical, Front Desk, Labs Pending Results, Provider, Radiology, Sign Off
  name: string;
  urgent: number;
  total: number;
}

let menu: Category[] = [
  {
    id: 1,
    name: "My Messages",
    urgent: 2,
    total: 3,
    items: [
      { id: 10, name: "Dashboard", urgent: 2, total: 3 },
      { id: 11, name: "Clinic Admin", urgent: 2, total: 3 },
      { id: 12, name: "Front Desk", urgent: 2, total: 3 },
      { id: 13, name: "Provider", urgent: 2, total: 3 },
      { id: 14, name: "Sent", urgent: 2, total: 3 }
    ]
  }, {
    id: 2,
    name: "My Work Queue",
    urgent: 2,
    total: 3,
    items: [
      { id: 20, name: "Dashboard", urgent: 2, total: 3},
      { id: 21, name: "Clinical", urgent: 2, total: 3},
      { id: 22, name: "Front Desk", urgent: 2, total: 3},
      { id: 23, name: "Lab Pending Results", urgent: 2, total: 3},
      { id: 24, name: "Provider", urgent: 2, total: 3},
      { id: 25, name: "Radiology", urgent: 2, total: 3},
      { id: 26, name: "Sign Off", urgent: 2, total: 3 }
    ]
  }, {
    id: 3,
    name: "All Messages",
    urgent: 2,
    total: 3,
    items: [
      { id: 30, name: "Dashboard", urgent: 2, total: 3},
      { id: 31, name: "Clinic Admin", urgent: 2, total: 3},
      { id: 32, name: "Front Desk", urgent: 2, total: 3},
      { id: 33, name: "Provider", urgent: 2, total: 3},
      { id: 34, name: "Sent", urgent: 2, total: 3}
    ]
  }, {
    id: 4,
    name: "Ended Conversations",
    urgent: 0,
    total: 0,
    items: []
  }, {
    id: 5,
    name: "Work QUeue",
    urgent: 2,
    total: 3,
    items: [
      { id: 50, name: "Dashboard", urgent: 2, total: 3},
      { id: 51, name: "Clinic Admin", urgent: 2, total: 3},
      { id: 52, name: "Front Desk", urgent: 2, total: 3},
      { id: 53, name: "Provider", urgent: 2, total: 3},
      { id: 54, name: "Sent", urgent: 2, total: 3}
    ]
  }
];

@Injectable()
export class Service {
  getMenu() {
    return menu;
  }
}
