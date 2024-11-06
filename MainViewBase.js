import { ViewComponentBase } from './ViewComponentBase.js';

export class MainViewBase extends ViewComponentBase {
    constructor() {
        super(document.getElementById('app'));
    }
}