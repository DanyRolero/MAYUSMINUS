import { ViewComponentBase } from './ViewComponentBase.js';

export class AppView extends ViewComponentBase {
    constructor() {
        super(document.getElementById('app-view'));
    }
}