#installing required packages
rpcurl=$1
contractsol=$2
smart_contract_js=$3
sudo npm install -g solc
sleep 15
sudo npm install ganache-cli web3@0.20.2
sudo npm install solc@0.4.23
sleep 30
sudo wget -O contract.sol $contractsol
sudo wget -O smart_contract.js $smart_contract_js
contractadd=`node smart_contract.js $rpcurl`
echo "contract addredd is $contractadd"