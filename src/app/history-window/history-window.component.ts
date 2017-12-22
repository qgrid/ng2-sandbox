import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HistoryService} from '../services/history.service';

@Component({
  selector: 'sb-history-window',
  templateUrl: './history-window.component.html',
  styleUrls: ['./history-window.component.css']
})
export class HistoryWindowComponent implements OnInit {

  settings = {
    action: ['items'],
    body: [],
    columnlist: ['index', 'columns', 'reference'],
    data: ['rows', 'columns'],
    drag: ['isActive'],
    edit: ['mode', 'state'],
    export: [],
    fetch: ['skip'],
    filter: ['by', 'unit'],
    focus: ['rowIndex', 'columnIndex', 'isActive'],
    foot: [],
    grid: ['id', 'status', 'title'],
    group: ['mode', 'by'],
    head: [],
    highlight: ['columns', 'rows'],
    import: [],
    layer: [],
    layout: ['columns'],
    navigation: ['cell'],
    pagination: ['current', 'size', 'sizeList', 'count'],
    persistence: ['id'],
    pivot: ['by'],
    plugin: [],
    progress: ['isBusy', 'queue'],
    row: ['mode', 'unit'],
    scene: ['status', 'round', 'rows'],
    scroll: ['mode', 'top', 'left', 'cursor'],
    selection: ['unit', 'mode', 'items', 'area'],
    sort: ['by', 'mode', 'trigger'],
    style: [],
    template: [],
    toolbar: [],
    validation: ['rules'],
    view: ['rows', 'columns', 'nodes'],
    visibility: ['head', 'foot', 'body']
  };

  constructor(private historyService: HistoryService, public dialogRef: MatDialogRef<HistoryWindowComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.historyService.log();
  }

  onNoClick(): void {
    //this.dialogRef.close();
  }

}
