const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-goerli.g.alchemy.com/v2/gIVUrMjtybFqZ3M79GO7d0EiCSjZBQgX";

axios.post(ALCHEMY_URL, {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBalance",
    params: [
        "0xe2d1d869087dada8c709a544e6dd24821a4390dd", // block 46147
        'latest'  // retrieve the full transaction object in transactions array
    ]
}).then((response) => {
    console.log(response.data.result);
});