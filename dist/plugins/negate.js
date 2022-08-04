"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginNegate = {
    name: 'Negate',
    description: '',
    actions: {
        negate: function (instance, image) {
            return new Promise(function (resolve, reject) {
                try {
                    resolve(image.negate());
                }
                catch (e) {
                    reject(e);
                }
            });
        },
    },
};
exports.default = PluginNegate;
//# sourceMappingURL=negate.js.map