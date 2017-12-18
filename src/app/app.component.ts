import {AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material';
import {HistoryWindowComponent} from './history-window/history-window.component';

const MEDIUM_WIDTH = 960;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sider: any;
  @ViewChild('navButton') navButton: any;
  @ViewChild('historyButton') historyButton: any;

  constructor(private cdRef: ChangeDetectorRef, private dialog: MatDialog) {}

  openHistoryWindow(): void {
    const dialogRef = this.dialog.open(HistoryWindowComponent, {
      width: '',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The history-window was closed');
    });
  }

  ngAfterViewInit() {
    this.screenWatcher();
    this.initResizeListener();
    this.cdRef.detectChanges();
  }

  initResizeListener() {
    const eventHandler = _ => {
      this.screenWatcher();
    };

    window.addEventListener('resize', eventHandler, false);
  }

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


