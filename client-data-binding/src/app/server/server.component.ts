import { Component } from '@angular/core';

// For Angular to know that this is not a regular
// typeScript class but instead it's an angular class add decorator @

@Component({
  selector: 'app-server', // Should be a string and this is where html should go
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
}) // We have to pass javascript object to configure it.
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
