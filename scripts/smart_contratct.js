var rpcurl = process.argv[2];
Web3 = require('web3')
fs = require('fs')
solc = require('solc')
web3 = new Web3(new Web3.providers.HttpProvider(rpcurl));
code = fs.readFileSync('contract.sol').toString()
compiledCode = solc.compile(code)
abifile = JSON.parse(compiledCode.contracts[':coldchainShipment'].interface)
SmartContract = web3.eth.contract(abifile)
byteCode = compiledCode.contracts[':coldchainShipment'].bytecode

const contractInstance = SmartContract.new({
    data: '0x' + byteCode,
    from: web3.eth.accounts[0],
    gas: 4000000
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    // Log the tx, you can explore status with eth.getTransaction()
    //console.log(res.transactionHash);

    // If we have an address property, the contract was deployed
    if (res.address) {
        console.log('Contract address: ' + res.address);
        // Let's test the deployed contract //testContract(res.address);
    }
});

