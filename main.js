var modal;
var modalContent;
var lastNumEggs=-1
var lastNumShrimp=-1
var lastSecondsUntilFull=100
lastHatchTime=0
var eggstohatch1=86400;
var lastUpdate = new Date().getTime()

function main(){
    modal = document.getElementById('myModal');
    modalContent = document.getElementById('modal-internal')
    console.log('test');
    controlLoop();
    controlLoopFaster();
}
function controlLoop(){
    refreshData();
    setTimeout(controlLoop,2500);
}
function controlLoopFaster(){
    liveUpdateEggs();
    setTimeout(controlLoopFaster,100);
}

function updateDragonCount() {
    document.getElementById("numdragon").innerHTML = _myNormalDragons; 
}

function updatedProductionCount() {
    var productiondoc=document.getElementById('production');
    productiondoc.textContent=formatEggs(_myNormalDragons*60*60);
}

function updateIceDragonCount() {
    var not = document.getElementById("iceDragonNotBought");
    var bought = document.getElementById("iceDragonBought");
    if (_myIceDragons > 0 ) {
        bought.style.display = "block";
        not.style.display = "none";   
        document.getElementById("numdragonice").innerHTML = _myIceDragons; 
    } else {
        not.style.display = "block";
        bought.style.display = "none";
    }

    if (_myIceDragons >= 5) {
        document.getElementById("buyIceDragon").setAttribute("disabled","disabled");
    }
     
}

function updatedIceProductionCount() {
    var productiondoc=document.getElementById('productionice');
    productiondoc.textContent=_myIceDragons * formatEggs(1*60*60*10);
}

function updateSellForText() {
    var sellsforexampledoc=document.getElementById('sellsforexample');
    eggs = _marketEggs/10;
    calculateEggSell(eggs, function(price) {
        sellsforexampledoc.textContent='('+formatEggs(eggs)+' eggs would sell for '+formatEthValue(price-(price*2)/100)+' Ether)';
    });    
}

function updateEggNumber(eggs){
    var allnumeggs = document.getElementsByClassName('numeggs');

    for(var i=0;i<allnumeggs.length;i++){
        if(allnumeggs[i]){
            allnumeggs[i].textContent=translateQuantity(eggs);
        }
    }
    document.getElementById("hatchdragonquantity").innerHTML = parseInt(translateQuantity(eggs));
}

function updateDragonButton(){
    var gfsdoc = document.getElementById('getfreedragon');
    var premium = document.getElementById("buyPremiumDragon");
    var premiumInput = document.getElementById("buyPremiumDragoninput");
   
    if (_myEggs > 0 ) {
        gfsdoc.style.display="none";
        premium.style.display = "inline-block";
        premiumInput.style.display = "inline-block";
        value = premiumInput.value;
        premium.innerHTML = "Buy " +value+ " eggs for " + parseFloat((value *_dragonPrice).toFixed(6)) + " Eth"; 
        document.getElementById("boughtFireDragons").innerHTML = _premiumDragons;
    } else {
        gfsdoc.style.display="inline-block";
        premium.style.display = "none";
    }
}

function buyDragonInput() {
    value = document.getElementById("buyPremiumDragoninput").value;
    eth = (value * _iceDragonPriceWei) + 40000000;
    buyDragon(eth, displayTransactionMessage);
}

function buyIceDragonInput() {
    value = document.getElementById("buyIceDragonInput").value;
    
    eth = (value * _iceDragonPriceWei * 8 ) + 40000000;
    buyIceDragon(eth, displayTransactionMessage);
}

function updateIceDragonPrice() {
    document.getElementById("boughtIceDragons").innerHTML = _myIceDragons;
    value = document.getElementById("buyIceDragonInput").value;
    document.getElementById("buyIceDragon").innerHTML = "Buy " +value + " eggs for " + parseFloat((value*_iceDragonPrice).toFixed(6)) + " Eth";
}

function refreshData() {
    getMarketEggs();
    getMyNormalDragons();
    getMyIceDragon();
    getMyEggs();
    getDragonPrice();
    getPremiumDragons();

    updateDragonCount();
    updatedProductionCount();
    updateSellPrice();

   
    updateIceDragonCount();
    updatedIceProductionCount();

    updateSellForText();
    updateEggNumber(formatEggs(_myEggs));

    updateDragonButton();
    updateIceDragonPrice();
}

function hatchEggs1(){
    ref=getQueryVariable('ref')
    if(!ref || ref==web3.eth.accounts[0]){
        ref=0
    }
    console.log('hatcheggs ref ',ref)
    hatchEggs(ref,displayTransactionMessage())
}
function liveUpdateEggs(){
    if(lastSecondsUntilFull>1 && lastNumEggs>=0 && lastNumShrimp>0 && eggstohatch1>0){
        currentTime=new Date().getTime();
        if(currentTime/1000-lastHatchTime>eggstohatch1){
            return;
        }
        difference=(currentTime-lastUpdate)/1000;
        additionalEggs=Math.floor(difference*lastNumShrimp)
        updateEggNumber(formatEggs(lastNumEggs+additionalEggs))
    }
}
function updateSellPrice(){
    var eggstoselldoc=document.getElementById('sellprice');
    var myEggs = parseInt(translateQuantity(formatEggs(_myEggs)));
    calculateEggSell(myEggs * 86400, function(price) {
        eggstoselldoc.textContent = formatEthValue(price-(price*2)/100);
    });
}

function buyEggs2(){
    var ethtospenddoc=document.getElementById('ethtospend')
    weitospend=web3.toWei(ethtospenddoc.value,'ether')
    buyEggs(weitospend,function(){
        displayTransactionMessage();
    });
}


function formatEggs(eggs){
    return translateQuantity(eggs/eggstohatch1);
}


function translateQuantity(quantity,precision){
    quantity=Number(quantity)
    finalquantity=quantity
    modifier=''
    if(precision == undefined){
        precision=0
        if(quantity<10000){
            precision=1
        }
        if(quantity<1000){
            precision=2
        }
        if(quantity<100){
            precision=3
        }
        if(quantity<10){
            precision=4
        }
    }
    //console.log('??quantity ',typeof quantity)
    if(quantity>1000000){
        modifier='M'
        finalquantity=quantity/1000000
    }
    if(quantity>1000000000){
        modifier='B'
        finalquantity=quantity/1000000000
    }
    if(quantity>1000000000000){
        modifier='T'
        finalquantity=quantity/1000000000000
    }
    if(precision==0){
        finalquantity=Math.floor(finalquantity)
    }
    return finalquantity.toFixed(precision)+modifier;
}

function removeModal(){
        modalContent.innerHTML=""
        modal.style.display = "none";
}

function displayTransactionMessage(){
    displayModalMessage("Transaction Submitted")
}

function displayModalMessage(message){
    // modal.style.display = "block";
    // modalContent.textContent=message;
    // setTimeout(removeModal,3000)

    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function weiToDisplay(ethprice){
    return formatEthValue(web3.fromWei(ethprice,'ether'))
}

function formatEthValue(ethstr){
    return parseFloat(parseFloat(ethstr).toFixed(5));
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function copyRef() {
  var copyText = document.getElementById("copytextthing");
  copyText.style.display="block"
  copyText.select();
  document.execCommand("Copy");
  copyText.style.display="none"
  displayModalMessage("Copied link to clipboard")
}

function secondsToString(seconds)
{
    seconds=Math.max(seconds,0)
    var numdays = Math.floor(seconds / 86400);

    var numhours = Math.floor((seconds % 86400) / 3600);

    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);

    var numseconds = ((seconds % 86400) % 3600) % 60;
    var endstr=""
    //if(numdays>0){
    //    endstr+=numdays + " days "
    //}
    
    return numhours + "h " + numminutes + "m "//+numseconds+"s";
}


function disableButtons(){
    var allnumshrimp=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumshrimp.length;i++){
        if(allnumshrimp[i]){
            allnumshrimp[i].style.display="none"
        }
    }
}


function enableButtons(){
    var allnumshrimp=document.getElementsByClassName('btn-lg')
    for(var i=0;i<allnumshrimp.length;i++){
        if(allnumshrimp[i]){
            allnumshrimp[i].style.display="inline-block"
        }
    }
}


web3.version.getNetwork((err, netId) => {
    if(netId!="1") {
        displayModalMessage("Please switch to Ethereum Mainnet ")
        disableButtons()
    }
});

window.document.onload = function() {
    refreshData();
}
