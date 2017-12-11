import { OnInit, TemplateRef } from '@angular/core';
import { TemplateLinkService } from './template-link.service';
export declare class TemplateLinkDirective implements OnInit {
    private templateLink;
    private templateRef;
    key: string;
    constructor(templateLink: TemplateLinkService, templateRef: TemplateRef<any>);
    ngOnInit(): void;
}
