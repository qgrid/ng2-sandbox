import { Action as ActionItem } from '../../../grid_bundle/core/action/action';
import { RootService } from '../../../grid_bundle/infrastructure/component/root.service';
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
