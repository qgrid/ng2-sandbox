import {Component, OnInit, Input} from '@angular/core';

class Property {
  constructor(private accessor: any, public key, public type: string) {
  }

  get value() {
    return this.accessor();
  }

  get propertyType() {
    return this.type;
  }

  get propertyKey() {
    return this.key;
  }

  set value(value) {
    this.accessor(value);
  }
}

@Component({
  selector: 'sb-model-property-list',
  templateUrl: './model-property-list.component.html',
  styleUrls: ['./model-property-list.component.css']
})
export class ModelPropertyListComponent implements OnInit {
  @Input() model: any;

  properties: Property[] = [];

  constructor() {
  }

  ngOnInit() {
    const model = this.model;

    const assessor = model.accessor;
    const keys = Object.keys(assessor());
    const values = Object.values(assessor());
    const resolveType = (key: any) => {
      return this.getClass(values[keys.indexOf(key)])
    };

    this.properties = keys.map(key => {

      const type = resolveType(key);
      const accessor = (...args) => {
        if (!args.length) {
          const instance = assessor();
          return instance[key];
        }

        const value = {key: args[0]};
        assessor(value)
      };

      return new Property(accessor, key, type)
    });
  }

  getClass(instance) {
    return {}.toString.call(instance).slice(8, -1);
  }
}
