import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  @Input() model: any;

  constructor() { }

  ngOnInit() { }

}
