import {AfterViewInit, Component, ViewChild } from '@angular/core';

const MEDIUM_WIDTH = 960;

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
    const eventHandler = _ => {
      this.screenWatcher();
    };

    window.addEventListener('resize', eventHandler, false);
  };

  screenWatcher() {
    if (window.innerWidth > MEDIUM_WIDTH) {
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


