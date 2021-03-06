import { Component } from '@angular/core';
import { A2tFormService } from './a2t-form.service';
var A2tFormComponent = /** @class */ (function () {
    function A2tFormComponent(_formService) {
        this._formService = _formService;
    }
    A2tFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'a2t-form',
                    template: "\n        <form class=\"a2t-form\"\n            (ngSubmit)=\"_formService.submit()\"\n            [formGroup]=\"_formService.formGroup\">\n\n            <a2t-form-field\n                *ngFor=\"let field of this._formService.fields\"\n                [question]=\"field\"\n                [form]=\"_formService.formGroup\">\n            </a2t-form-field>\n\n            <button type=\"submit\" [disabled]=\"!_formService.formGroup.valid || _formService.formGroup.pristine || _formService.submitLock\">\n                <ng-content *ngIf=\"!_formService.submitLock\"></ng-content>\n                <span *ngIf=\"_formService.submitLock\">Submitting ...</span>\n            </button>\n        </form>\n    ",
                    styles: ["\n        .a2t-form {\n            background-color: white;\n            border-radius: 3px;\n            box-shadow: 0px 1px 5px 0 rgba(0,0,0,0.3);\n            padding-top: 20px;\n            font-family: \"Segoe UI\", \"Helvetica Neue\", Arial, sans-serif;\n        }\n\n        .a2t-form button {\n            width: 100%;\n\n            transition: .3s;\n            background-color: #72c380;\n\n            border-bottom-right-radius: 3px;\n            border-bottom-left-radius: 3px;\n\n            outline: none;\n            text-align: center;\n            font-weight: 400;\n            border: none;\n            font-size: 16px;\n            line-height: 30px;\n\n            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);\n            color: white;\n            border-bottom: 3px solid transparent;\n        }\n\n        .a2t-form button:disabled {\n            background-color: #eee !important;\n            cursor: not-allowed;\n            color: #999;\n            text-shadow: none;\n        }\n\n        .a2t-form button:hover {\n            background-color: #a6d9ae;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    A2tFormComponent.ctorParameters = function () { return [
        { type: A2tFormService, },
    ]; };
    return A2tFormComponent;
}());
export { A2tFormComponent };
//# sourceMappingURL=a2t-form.component.js.map