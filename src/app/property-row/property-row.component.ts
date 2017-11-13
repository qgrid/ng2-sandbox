import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-property-row',
  templateUrl: './property-row.component.html',
  styleUrls: ['./property-row.component.css']
})
export class PropertyRowComponent implements OnInit {
  @Input() model: any;

  propertiesType: string[] = [];
  keys: string[] = [];
  values: any[] = [];

  constructor() { }

  ngOnInit() {
    this.keys = Object.keys(this.model);
    this.values = Object.values(this.model);

    for (let i = 0, max = this.values.length; i < max; i++) {
      this.propertiesType.push(typeof this.values[i]);
    }

    console.log(this.model);
    console.log(this.keys);
    console.log(this.values);
    console.log(this.propertiesType);
    console.log('---------------------------------------------------------------------');
  }
}
