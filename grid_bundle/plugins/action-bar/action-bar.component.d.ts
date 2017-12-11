import { RootService } from '../../infrastructure/component/index';
import { PluginComponent } from '../plugin.component';
import { ActionBarService } from './action-bar.service';
export declare class ActionBarComponent extends PluginComponent {
    constructor(root: RootService, actionService: ActionBarService);
}
