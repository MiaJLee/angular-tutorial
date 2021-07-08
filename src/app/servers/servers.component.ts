import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  allowNewServer = false;

  constructor() {
    setTimeout(() =>{this.allowNewServer = true}, 2000)
   }

  ngOnInit(): void {
  }

}
