abi= [
	{
		"constant": true,
		"inputs": [],
		"name": "ceoAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initialized",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withDrawMoney",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "enableSuperDragon",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buyDrangon",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "percentage",
				"type": "uint256"
			}
		],
		"name": "calculatePercentage",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "hatchingSpeed",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "rt",
				"type": "uint256"
			},
			{
				"name": "rs",
				"type": "uint256"
			},
			{
				"name": "bs",
				"type": "uint256"
			}
		],
		"name": "calculateTrade",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "userReferralEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eth",
				"type": "uint256"
			},
			{
				"name": "contractBalance",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "iceDragons",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "marketEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "contractStarted",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "normalDragon",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sellEggs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "eggs",
				"type": "uint256"
			}
		],
		"name": "seedMarket",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ref",
				"type": "address"
			}
		],
		"name": "hatchEggs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ceoEtherBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lastHatch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "maxPremiumDragonsCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isEnabled",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "STARTING_Dragon",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getEggsToHatchDragon",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDragonPriceNo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuySimple",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buyIceDrangon",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eggs",
				"type": "uint256"
			}
		],
		"name": "calculateEggSell",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getFreeDragon",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "maxIceDragonsCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "snatchedOn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "superPowerFulDragonOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "premiumDragons",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "referrals",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "userHatchRate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eggs",
				"type": "uint256"
			},
			{
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "calculateEggSell",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyIceDragon",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "claimSuperDragonEggs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "EGGS_TO_HATCH_1Dragon",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getEggsSinceLastHatch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buySuperDragon",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyNormalDragons",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]

var _currentHatchRate = 0;
var _userHatchRate = 0;
var _marketEggs = 0;
var _myNormalDragons = 0;
var _myIceDragons = 0;
var _myEggs = 0;
var _normalDragonPrice = 0;
var _iceDragonPrice = 0;
var _iceDragonPriceWei = 0;
var _premiumDragons = 0;

contractAddress="0x344bd3872f67d37757b48155ba4666e780fc47b5"//"0x53e0B5790b67BFE4218b48D8DA14a5D47D8daeF8"//"0xd1B9D4f28A4F782Ea66C449A667135266Bccb1Bc"//"0x0a11657E4341DC2CB11282F3782E418B63F673F6"//"0x00E904aB49c0417a60Cd674d2B2628a3FD5be57d"//"0x4d990acf40aec18478849dfbb58119e55a182166"//"0xe00d440e22b3f4e8dc9672223f6e683eba8b5f06"//"0x42e33f20aced16114e53c3b236426384a5eca7f6"//"0x4b9a47db592e0a49ea913f70800bd1272c757103"//"0xf50493dd5931a35ddf4ce9c347c3de0a554f4de4"//"0x27fe61ed7f0b113fae9697219b4bfd3a80011512"
var contractAbi = web3.eth.contract(abi);
var myContract = contractAbi.at(contractAddress);

function getUserAddress() {
	return web3.eth.accounts[0];
}

function getCurrentHatchRate() {
    myContract.getEggsToHatchDragon(function(err, result) {
		if(!err){
			console.log("current hatch rate", web3.toDecimal(result) + 86400);
			_currentHatchRate = web3.toDecimal(result) + 86400;
        }
	});	
}

function getUserHatchRate() {
    myContract.userHatchRate(getUserAddress(), function(err, result) {
		if(!err){
			console.log("user hatch rate", web3.toDecimal(result));
			_userHatchRate = web3.toDecimal(result);
        }
	});	
}

function getMarketEggs() {
    myContract.marketEggs(function(err, result) {
		if(!err){
			console.log("Market total eggs ", web3.toDecimal(result));
            _marketEggs = web3.toDecimal(result);
        }
	});	
}

function getMyIceDragon() {
    myContract.getMyIceDragon(function(err, result) {
		if(!err){
            console.log("My Ice Dragon ", web3.toDecimal(result));
            _myIceDragons = web3.toDecimal(result);
        }
	});	
}

function getPremiumDragons() {
    myContract.premiumDragons(getUserAddress(), function(err, result) {
		if(!err){
            console.log("My premium Dragon ", web3.toDecimal(result));
            _premiumDragons = web3.toDecimal(result);
        }
	});	
}

function getMyNormalDragons() {
    myContract.getMyNormalDragons(function(err, result) {
		if(!err){
            console.log("My normal Dragon ", web3.toDecimal(result));
            _myNormalDragons = web3.toDecimal(result);
        }
	});	
}

function getMyEggs() {
    myContract.getMyEggs(function(err, result) {
		if(!err){
            console.log("My eggs ", web3.toDecimal(result));
            _myEggs = web3.toDecimal(result);
        }
	});	
}

function getDragonPrice(callback) {
    myContract.getDragonPriceNo(function(err, result) {
		if(!err){
			_iceDragonPriceWei = result;
			var price = web3.fromWei(result, "ether");
			console.log("Dragon Price ",price);
			_dragonPrice = price;
			_iceDragonPrice = price * 5; 
        }
	});	
}

function calculateEggSell(eggs, callback){
    myContract.calculateEggSell(eggs, function(err, result) {
		if(!err){
			console.log("sell price ", web3.fromWei(result, "ether"));
			callback(web3.toDecimal(web3.fromWei(result, "ether")));
        }
	});
}



/////////////////////////////

function throwError() {
	var x = document.getElementById("snackbar");
    x.innerHTML = "Unable to complete operation.";
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function isUndefined(obj) {
	if (typeof obj == 'undefined') {
		throwError();
		return true;
	}
	return false;
}


function getFreeDragon(callback) {
    myContract.getFreeDragon(function(err, result) {
		if(!err){
            console.log('Got Free Dragon');
            callback();
        } else throwError();
	});
}

function buyDragon(eth,callback) {
    myContract.buyDrangon({value: eth}, function(err, result) {
		if(!err){
            console.log('Got paid Dragon');
            callback();
        } else throwError();
	});
}

function buyIceDragon(eth,callback) {
    myContract.buyIceDrangon({value: eth}, function(err, result) {
		if(!err){
            console.log('Got Ice Dragon ', eth);
            callback();
        } else throwError();
	});
}

function hatchEggs(ref,callback){
    myContract.hatchEggs(ref, function(err, result) {
		if(!err){
            callback();
        } else throwError();
	});
}

function sellEggs(callback){
	myContract.sellEggs(function(err, result) {
		if(!err){
            callback();
        } else throwError();
	});
}




function calculateEggSimple(eth,contractBalance,callback){
    myContract.calculateEggBuySimple(eth, function(err, result) {
		if(!err){
            
            callback(web3.toDecimal(result));
        } else throwError();
	});	
}
