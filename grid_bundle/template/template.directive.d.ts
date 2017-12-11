import { DoCheck, ViewContainerRef } from '@angular/core';
import { TemplateLinkService } from './template-link.service';
import { TemplateCacheService } from './template-cache.service';
export declare class TemplateDirective implements DoCheck {
    private templateLink;
    private templateCache;
    private viewContainerRef;
    key: any;
    context: any;
    private template;
    private viewRef;
    constructor(templateLink: TemplateLinkService, templateCache: TemplateCacheService, viewContainerRef: ViewContainerRef);
    ngDoCheck(): void;
    private find(keys);
}
