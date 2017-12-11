import { OnDestroy, OnInit } from '@angular/core';
import { RootService } from '../../infrastructure/component/root.service';
import { PluginComponent } from '../plugin.component';
export declare class ActionBarCoreComponent extends PluginComponent implements OnInit, OnDestroy {
    private shortcutOff;
    constructor(root: RootService);
    ngOnInit(): void;
    readonly actions: any;
    ngOnDestroy(): void;
}
