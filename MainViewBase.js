export class MainViewBase {
    constructor(appView) {
        this.appView = appView;
        this.views = [];
    }
        //---------------------------------------------------------------------------------
        addView(name, view) {
            this.views[name] = view;
        }

        //---------------------------------------------------------------------------------
        showOnlyView(name) {
            for (let view in this.views) this.views[view].hide();
            this.views[name].show();        
        }
    }