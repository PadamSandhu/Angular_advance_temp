import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html', // Template  URL is url to the html template, whereas template will let you write template code .
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverNameTwoWayBind = 'Two way data Binding';
  serverCreated = false; // This is only for directive
  servers = ['Testserver', 'Test server 2'];

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true; // This is only for directive
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }
}
