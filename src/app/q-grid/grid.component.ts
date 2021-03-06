import { Component, OnInit } from '@angular/core';

import {GridModel, Grid} from 'ng2-qgrid';
import { DataService, Human } from '../services/data.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class QGridComponent implements OnInit {
  public gridModel: GridModel;

  constructor(gridService: Grid, private dataService: DataService) {
    this.gridModel = gridService.model();
  }

  ngOnInit(): void {
    this.dataService
      .getPeople(100)
      .map(humans => this.madeIsFeemaleField(humans))
      .map(humans => this.madeEmailSingleField(humans))
      .subscribe(people => {
        this.gridModel
          .data({
            rows: people
          });
      });
  }

  private madeIsFeemaleField(humans: Human[]): Human[] {
    humans.forEach((human: any) => {
      human['isFemail'] = human.gender === 'female';
    });
    return humans;
  }

  private madeEmailSingleField(humans: Human[]): Human[] {
    humans.forEach((human: any) => {
      const emails: any[] = human.contact.email as any[];
      if (emails) {
        human.contact.singleEmail = emails.join(',');
      }
    });
    return humans;
  }
}

