require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember protect just private bottom talent'; 
let testAccounts = [
"0x03e4ff83c203baf0b2d63e18859444520addff666aa2d1a164fb08b6c567b4cb",
"0x5dd0c7e264a96c89b8e92802f313bedb76bee15ada90b6678ffebdcbb9a9b01a",
"0x2366d4318a234a539912856a902ac1dcdb99e6d0f6717ff100eaedbb3f9f296d",
"0xe4d639d4c6236d03ec4c4cd96f263ffc078d17e8addd9bfeb0bb43130cd3a56a",
"0x5c204ae4d3ec30680c522ffc773b1c33e25a56afbc4052e989a625b803cde6ce",
"0xdacb9d1de9f8d57427eaeddce3231dfd95a0f45cebbe48faff4e9c9640587806",
"0x8e0e7eb5d94a217815a58b922cbdc10e8799c6b35fe5aae5417975ddb7ac055a",
"0x5c206de8d783d76f9eaabe41e58622fbd20d5b7e82946098b9a9e10a8cc72644",
"0x46c06cb40430de70c90bae278e843a3aafd08d9395ee25a2defc276c77fff676",
"0xc61b4d959adfd90b963fa9fa2f097243a737fdc9311c7640b4c020b9413fa663"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

