import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
  .fifth {
    color: white;
  }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'serverTest';
  username = "";
  serverCreated = false;
  servers = ['beta', 'test'];
  showDetail = false;
  toggleLog: string[] = [];

  constructor() {
    setTimeout(() =>{this.allowNewServer = true}, 2000)
   }

  ngOnInit(): void {
  }

  toggleDetail() {
    this.showDetail = !this.showDetail;
    const time = new Date();
    this.toggleLog.push(time.toString());
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onClickButton() {
    this.username = '';
  }

  getColor(i: number) {
    if (i >= 4) {
      return 'blue';
    }
    return; 
  }
}
