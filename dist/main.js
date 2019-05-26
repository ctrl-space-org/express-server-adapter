"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExpressAdapter_1 = require("./Adapter/ExpressAdapter");
exports.ExpressAdapter = ExpressAdapter_1.ExpressAdapter;
var RouterExpressAdapter_1 = require("./Adapter/RouterExpressAdapter");
exports.RouterExpressAdapter = RouterExpressAdapter_1.RouterExpressAdapter;
var PluginAdapter_1 = require("./Adapter/PluginAdapter");
exports.PluginAdapter = PluginAdapter_1.PluginAdapter;
require("reflect-metadata");
var Types_1 = require("./Types");
exports.ServerType = Types_1.ServerType;
exports.PluginsType = Types_1.PluginsType;
exports.RouterType = Types_1.RouterType;
exports.default = (function (container) {
    container.bind(Types_1.ServerType).to(ExpressAdapter_1.ExpressAdapter);
    container.bind(Types_1.PluginsType).to(PluginAdapter_1.PluginAdapter);
    container.bind(Types_1.RouterType).to(RouterExpressAdapter_1.RouterExpressAdapter);
});
