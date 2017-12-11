import { Action as ActionItem } from 'ng2-qgrid/core/action/action';
import { RootService } from 'ng2-qgrid/infrastructure/component/root.service';
import { PluginComponent } from '../plugin.component';
export declare class ActionCoreComponent extends PluginComponent {
    action: ActionItem;
    constructor(root: RootService);
    execute(): void;
    canExecute(): boolean;
    readonly shortcut: string;
    readonly title: string;
    readonly icon: string;
}
