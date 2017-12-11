import { Popup } from './popup';
import { PopupSettings } from './popup.settings';
export declare class PopupService {
    private popups;
    constructor();
    open(popup: Popup): void;
    close(id: string): void;
    closeAll(): void;
    isOpened(id: string): boolean;
    expand(id: string): void;
    collapse(id: string): void;
    focus(id: string): void;
    resize(id: string, settings: PopupSettings): void;
    private targetize(target, settings);
    private position(target, settings);
    get(id: string): any;
}
