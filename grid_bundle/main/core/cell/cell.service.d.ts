import { TemplateRef } from '@angular/core';
import { TemplateCacheService, TemplateLinkService } from '../../../grid_bundle/template';
export declare class CellService {
    private templateCache;
    private templateLink;
    constructor(templateCache: TemplateCacheService, templateLink: TemplateLinkService);
    build(source: string, column: any, mode?: string): any;
    findTemplate(keys: string[]): TemplateRef<any>;
}
