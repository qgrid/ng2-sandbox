import {Helper} from './helpers';

export class Settings {
  title: string;
  modified: string;
  model: any;
  isDefault: boolean;

  constructor(obj?: any) {
    this.title = obj && obj.title || 'no title';
    this.modified = obj && obj.modified || Helper.getDate();
    this.model = obj && obj.model || '';
    this.isDefault = obj && obj.isDefault || false;
  }
}
