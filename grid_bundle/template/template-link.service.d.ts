import { TemplateRef } from '@angular/core';
export declare class TemplateLinkService {
    private cache;
    constructor();
    get(key: any): TemplateRef<any>;
    put(key: any, value: any): void;
}
