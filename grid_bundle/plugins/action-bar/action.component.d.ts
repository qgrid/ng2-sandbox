import { ActionBarService } from './action-bar.service';
import { Command } from 'ng2-qgrid/core/command/command';
import { Model } from 'ng2-qgrid/core/infrastructure/model';
export declare class ActionComponent {
    private actionService;
    id: string;
    title: string;
    icon: string;
    command: Command;
    constructor(actionService: ActionBarService);
    execute(): void;
    canExecute(): boolean;
    onInit(): void;
    readonly model: Model;
}
