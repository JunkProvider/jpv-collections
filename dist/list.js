"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List() {
        this.values = [];
    }
    List.fromArray = function (values) {
        var list = new List();
        list.values = values.slice();
    };
    List.fromObject = function (values) {
        var list = new List();
        for (var key in values) {
            list.add(values[key]);
        }
        return list;
    };
    List.prototype.count = function () {
        return this.values.length;
    };
    List.prototype.contains = function (value) {
        return this.values.indexOf(value) != -1;
    };
    List.prototype.get = function (index) {
        if (index < 0 || index >= this.values.length) {
            throw new Error('Can not get value. Undefined index ' + index + '.');
        }
        return this.values[index];
    };
    List.prototype.add = function (value) {
        this.values.push(value);
    };
    List.prototype.set = function (index, value) {
        if (index < 0 || index >= this.values.length) {
            throw new Error('Can not get value. Undefined index ' + index + '.');
        }
        this.values[index] = value;
    };
    List.prototype.remove = function (index) {
        if (index >= 0 && index < this.values.length) {
            this.values.splice(index, 1);
            return true;
        }
        return false;
    };
    List.prototype.clear = function () {
        this.values.length = 0;
    };
    List.prototype.toArray = function () {
        return this.values.slice();
    };
    List.prototype.forEach = function (callback) {
        for (var i = 0; i < this.values.length; i++) {
            callback(this.values[i], i);
        }
    };
    return List;
}());
exports.List = List;
//# sourceMappingURL=list.js.map