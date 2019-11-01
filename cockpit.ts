let obj

import fetch from 'cross-fetch';
    fetch('https://flightdeck.getvoice.agency/api/collections/get/CardStarterDeck/posts?token=427ae196a562ea77d85db712f2a2f2', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        filter: {published:true},
        filterParameters: {"id":1},
        fields: {cardName: 1, cardImage: 1},
        populate: 1,
    })
})
    .then(res => res.json())
    .then(collection => console.log(collection));

console.log(obj);
    

