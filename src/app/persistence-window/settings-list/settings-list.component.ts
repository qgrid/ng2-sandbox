import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {PersistenceService} from '../../services/persistence.service';

@Component({
  selector: 'sb-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent implements OnInit, AfterContentInit {
  @Input() key: any;
  @Input() value: string;
  @Input() modified;

  constructor(private persistenceService: PersistenceService) {
  }

  ngAfterContentInit() {

  }

  // parse() {
  //   let temp = JSON.parse(this.instance);
  //   this.name = temp[0].title;
  //   this.timeCreated = temp[0].modified;
  //   console.log(temp);
  // }

  ngOnInit() {

  }
}
