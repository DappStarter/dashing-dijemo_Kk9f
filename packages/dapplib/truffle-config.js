require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note museum coil grace hidden slot gift'; 
let testAccounts = [
"0x50af2ff7fea7149f2c6d9d62150d05446857b68fe974dacf79ea471f420c0aa6",
"0xde1c388b30201d6963541ce707b79cee18b20f0ea4549cb1ab9b875929b0f5b7",
"0xdb84b5c4758030d740edbc2a8232b4d04a704df59d368379806f8f157b119e00",
"0x5c0008f25585fe5338b4059918b4f4f00444835e21ad920267d5fd2f017d2820",
"0xa3a4ea22d9e219206cc7e88aaa6b04298515db6203f84a2cf2d4467856fe6529",
"0x900bca5f051ec8c7e7fdf3b31f8e5a6f0a4fd22899b158687c279e20a0b9e675",
"0xcf832e32ce308c58b23dc44165b299d519b2b67ec2d5f3002a0511b9ae705457",
"0xd8f9b91248d12f71dfa6b4d812909852dc0ee059f23952b4ba669e600f9908ff",
"0x1f040a3bcba9dddfcfff42f6007bef4123ce95a0f9f562501f65df8cf95c314b",
"0x0e89fcdfebf025b5985b841921b7020686470bb4cd4c03b35c722965bb900254"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

