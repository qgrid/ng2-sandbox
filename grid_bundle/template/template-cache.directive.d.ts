import { OnInit, TemplateRef } from '@angular/core';
import { TemplateCacheService } from './template-cache.service';
import { TemplateHostService } from 'ng2-qgrid/template/template-host.service';
export declare class TemplateCacheDirective implements OnInit {
    private templateCache;
    private templateRef;
    private templateHost;
    key: string;
    constructor(templateCache: TemplateCacheService, templateRef: TemplateRef<any>, templateHost: TemplateHostService);
    ngOnInit(): void;
}
