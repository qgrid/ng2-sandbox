import {AfterViewInit, Component, ViewChild, ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sider: any;
  @ViewChild('navButton') navButton: any;

  constructor() {};

  ngAfterViewInit() {
    this.screenWatcher();
    this.initResizeListener();
  };

  initResizeListener() {
    let eventHandler = _ => {
      this.screenWatcher();
    };

    window.addEventListener('resize', eventHandler, false);
  };

  screenWatcher() {
    if (window.innerWidth > 960) {
      this.sider.mode = 'side';
      this.sider.open();
      this.navButton.opened = true;
    } else {
      this.sider.mode = 'over';
      this.sider.close();
      this.navButton.opened = false;
    }
    console.log(window.innerWidth);
  }



}


