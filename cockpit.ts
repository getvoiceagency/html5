import fetch from 'cross-fetch';
    fetch('https://flightdeck.getvoice.agency/api/collections/get/CardStarterDeck/posts?token=427ae196a562ea77d85db712f2a2f2', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        filter: {published:true},
        fields: {fieldA: 1, fieldB: 1},
        limit: 10,
        skip: 5,
        sort: {_created:-1},
        populate: 1, // resolve linked collection items

        lang: 'de' // return normalized language fields (fieldA_de => fieldA)
    })
})
.then(res=>res.json())
.then(res => console.log(res));