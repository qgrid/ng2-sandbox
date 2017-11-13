import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-property-table',
  templateUrl: './property-table.component.html',
  styleUrls: ['./property-table.component.css']
})
export class PropertyTableComponent implements OnInit {
  @Input() model: any;

  constructor() { }

  ngOnInit() { }

}
