"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var inversify_1 = require("inversify");
require("reflect-metadata");
var PluginAdapter = /** @class */ (function () {
    function PluginAdapter() {
    }
    PluginAdapter.prototype.json = function () {
        return express_1.default.json();
    };
    PluginAdapter.prototype.multiPart = function () {
        return express_1.default.urlencoded({ extended: true });
    };
    PluginAdapter = __decorate([
        inversify_1.injectable()
    ], PluginAdapter);
    return PluginAdapter;
}());
exports.PluginAdapter = PluginAdapter;
