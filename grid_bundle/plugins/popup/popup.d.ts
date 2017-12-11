import { Model } from 'ng2-qgrid/core/infrastructure/model';
import { PopupSettings } from './popup.settings';
export declare class Popup {
    private state;
    private area;
    model: Model;
    element: HTMLElement;
    body: HTMLElement;
    id: string;
    settings: PopupSettings;
    constructor();
    close(): void;
    expand(): void;
    collapse(): void;
    focus(): void;
    unfocus(): void;
    isFocused(): boolean;
    resize(settings: PopupSettings): void;
}
