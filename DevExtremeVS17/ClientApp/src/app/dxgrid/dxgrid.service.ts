import { Injectable } from '@angular/core';

export class Message {
  id: number;
  clinic: string;
  patName: string;
  patNum: number;
  dateOfVisit: string;
  provider: string;
  providerNum: number;
  createdBy: string;
  subject: string;
  messageText: string;
  dateCreated: string;
  urgent: boolean;
}

let messages: Message[] = [
  {
    id: 1,
    clinic: 'TEST',
    patName: 'Jace Beleren',
    patNum: 8675309,
    dateOfVisit: '3/12/2019',
    provider: 'Dr. Moe Howard',
    providerNum: 41144,
    createdBy: 'BJANIS',
    subject: 'This is a subject',
    messageText: 'This is the actual message',
    dateCreated: '3/26/2019',
    urgent: true
  }, {
    id: 2,
    clinic: 'S. ALPINE',
    patName: 'Chandra Nalaar',
    patNum: 2081453,
    dateOfVisit: '3/14/2019',
    provider: 'Dr. Larry Fine',
    providerNum: 74185,
    createdBy: 'BJANIS',
    subject: 'This is a different subject',
    messageText: 'This is another message',
    dateCreated: '3/26/2019',
    urgent: false
  }, {
    id: 3,
    clinic: 'TEST',
    patName: 'Sorin Markov',
    patNum: 2326661,
    dateOfVisit: '3/14/2019',
    provider: 'Dr. Curly Howard',
    providerNum: 15973,
    createdBy: 'BJANIS',
    subject: 'This is yet another subject',
    messageText: 'This is yet another message',
    dateCreated: '3/27/2019',
    urgent: false
  }, {
    id: 4,
    clinic: 'S. ALPINE',
    patName: 'Phillip J. Fry',
    patNum: 314,
    dateOfVisit: '3/14/3000',
    provider: 'Dr. John Zoidberg',
    providerNum: 35786,
    createdBy: 'BJANIS',
    subject: 'Welcome to the world of tomorrow!',
    messageText: 'Space Wasp attacks are not covered by company insurance',
    dateCreated: '3/27/2019',
    urgent: false
  },
  {
    id: 5,
    clinic: 'TEST',
    patName: 'Liliana Vess',
    patNum: 58747,
    dateOfVisit: '3/12/2019',
    provider: 'Dr. Moe Howard',
    providerNum: 41144,
    createdBy: 'BJANIS',
    subject: 'This is a subject',
    messageText: 'This is the actual message',
    dateCreated: '3/28/2019',
    urgent: true
  }, {
    id: 6,
    clinic: 'S. ALPINE',
    patName: 'Gerrard Capashen',
    patNum: 7915357,
    dateOfVisit: '3/14/2019',
    provider: 'Dr. Moe Howard',
    providerNum: 41144,
    createdBy: 'BJANIS',
    subject: 'This is a different subject',
    messageText: 'This is another message',
    dateCreated: '3/28/2019',
    urgent: false
  }, {
    id: 7,
    clinic: 'TEST',
    patName: 'Cloud Strife',
    patNum: 777,
    dateOfVisit: '3/14/2019',
    provider: 'Dr. Curly Howard',
    providerNum: 15973,
    createdBy: 'BJANIS',
    subject: 'This is yet another subject',
    messageText: 'Patient paid in Gil',
    dateCreated: '3/29/2019',
    urgent: false
  }, {
    id: 8,
    clinic: 'S. ALPINE',
    patName: 'Hermes Conrad',
    patNum: 8461,
    dateOfVisit: '3/14/3000',
    provider: 'Dr. John Zoidberg',
    providerNum: 35786,
    createdBy: 'BJANIS',
    subject: 'Welcome to the world of tomorrow!',
    messageText: 'Patient injured in limbo accident',
    dateCreated: '3/29/2019',
    urgent: false
  }]

@Injectable()
export class Service {
  getMessages() {
    return messages;
  }
}
