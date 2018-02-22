"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@junkprovider/common");
var ValueWithIndex = /** @class */ (function () {
    function ValueWithIndex(value, index) {
        this.value = value;
        this.index = index;
    }
    return ValueWithIndex;
}());
exports.ValueWithIndex = ValueWithIndex;
var ListManipulationInfo = /** @class */ (function () {
    function ListManipulationInfo(items) {
        this.items = items;
    }
    return ListManipulationInfo;
}());
exports.ListManipulationInfo = ListManipulationInfo;
var ObservableList = /** @class */ (function () {
    function ObservableList() {
        this.addedEvent = new common_1.Event();
        this.removedEvent = new common_1.Event();
        this.values = [];
    }
    ObservableList.fromArray = function (values) {
        var list = new ObservableList();
        list.values = values.slice();
    };
    ObservableList.fromObject = function (values) {
        var list = new ObservableList();
        for (var key in values) {
            list.add(values[key]);
        }
        return list;
    };
    ObservableList.prototype.count = function () {
        return this.values.length;
    };
    ObservableList.prototype.contains = function (value) {
        return this.values.indexOf(value) != -1;
    };
    ObservableList.prototype.get = function (index) {
        if (index < 0 || index >= this.values.length) {
            throw new Error('Can not get value. Undefined index ' + index + '.');
        }
        return this.values[index];
    };
    ObservableList.prototype.add = function (value) {
        var index = this.values.push(value) - 1;
        this.addedEvent.trigger(this, new ListManipulationInfo([new ValueWithIndex(value, index)]));
    };
    ObservableList.prototype.set = function (index, value) {
        if (index < 0 || index >= this.values.length) {
            throw new Error('Can not get value. Undefined index ' + index + '.');
        }
        var prevValue = this.values[index];
        this.values[index] = value;
        this.removedEvent.trigger(this, new ListManipulationInfo([new ValueWithIndex(this.values[index], index)]));
        this.addedEvent.trigger(this, new ListManipulationInfo([new ValueWithIndex(value, index)]));
    };
    ObservableList.prototype.remove = function (index) {
        if (index >= 0 && index < this.values.length) {
            var value = this.values.splice(index, 1)[0];
            this.removedEvent.trigger(this, new ListManipulationInfo([new ValueWithIndex(value, index)]));
            return true;
        }
        return false;
    };
    ObservableList.prototype.clear = function () {
        var items = [];
        for (var i = 0; i < this.values.length; i++) {
            items.push(new ValueWithIndex(this.values[i], i));
        }
        this.values.length = 0;
        this.removedEvent.trigger(this, new ListManipulationInfo(items));
    };
    ObservableList.prototype.toArray = function () {
        return this.values.slice();
    };
    ObservableList.prototype.forEach = function (callback) {
        for (var i = 0; i < this.values.length; i++) {
            callback(this.values[i], i);
        }
    };
    return ObservableList;
}());
exports.ObservableList = ObservableList;
//# sourceMappingURL=observable-list.js.map