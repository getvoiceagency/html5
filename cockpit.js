"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var obj;
var cross_fetch_1 = __importDefault(require("cross-fetch"));
cross_fetch_1.default('https://flightdeck.getvoice.agency/api/collections/get/CardStarterDeck/posts?token=427ae196a562ea77d85db712f2a2f2', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        filter: { published: true },
        filterParameters: { "id": 1 },
        fields: { cardName: 1, cardImage: 1 },
        populate: 1,
    })
})
    .then(function (res) { return res.json(); })
    .then(function (collection) { return console.log(collection); });
console.log(obj);
