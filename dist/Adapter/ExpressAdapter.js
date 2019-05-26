"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
var Types_1 = require("../Types");
var ExpressAdapter = /** @class */ (function () {
    function ExpressAdapter(plugins) {
        this.server = express_1.default();
        this.plugins = plugins;
        // this.server.use(express.json())
        // this.server.use(express.urlencoded({ extended: true }))
    }
    ExpressAdapter.prototype.post = function (path, handler) {
        this.server.post(path, handler);
    };
    ExpressAdapter.prototype.get = function (path, handler) {
        this.server.get(path, handler);
    };
    ExpressAdapter.prototype.path = function (path, handler) {
        this.server.get(path, handler);
    };
    ExpressAdapter.prototype.patch = function (path, handler) {
        this.server.get(path, handler);
    };
    ExpressAdapter.prototype.use = function (handler) {
        this.server.use(handler);
    };
    ExpressAdapter.prototype.listen = function (port, fun) {
        if (port === void 0) { port = '80'; }
        this.server.listen(port, fun);
    };
    ExpressAdapter = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(Types_1.PluginsType)),
        __metadata("design:paramtypes", [Object])
    ], ExpressAdapter);
    return ExpressAdapter;
}());
exports.ExpressAdapter = ExpressAdapter;
