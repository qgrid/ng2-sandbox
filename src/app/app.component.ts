import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {PersistenceWindowComponent} from './persistence-window/persistence-window.component';

const MEDIUM_WIDTH = 960;

type Action = 'init' | 'destroy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sidenav') sider: any;
  @ViewChild('navButton') navButton: any;
  @ViewChild('historyButton') historyButton: any;

  //const mql: MediaQueryList = window.matchMedia('(min-width: 600px)');

  constructor(private cdRef: ChangeDetectorRef, private dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.screenWatcher();
    this.resizeListener('init');
    this.cdRef.detectChanges();
  }

  resizeListener(action: Action) {
    const eventHandler = _ => {
      this.screenWatcher();
    };

    switch (action) {
      case 'init':
        window.addEventListener('resize', eventHandler, false);
        break;
      case 'destroy':
        window.removeEventListener('resize', eventHandler);
        break;
    }
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

  openHistoryWindow(): void {
    const dialogRef = this.dialog.open(PersistenceWindowComponent, {
      width: '',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The persistence-window was closed');
    });
  }

  ngOnDestroy() {
    this.resizeListener('destroy');
  }
}


