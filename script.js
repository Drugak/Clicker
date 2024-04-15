// Score object
let gemObject = document.querySelector('.score-value'); 
let gem = parseFloat(gemObject.innerHTML);

// gemObjects per click
let gpcObject = document.querySelector('.gems-per-click'); 
let gpc = parseFloat(gpcObject.innerHTML);

// Upgrades
let upgradeCostObject = document.querySelector('.upgrade-price-value');
let upgradeCost = parseFloat(upgradeCostObject.innerHTML);

let upgradeLevelObject = document.querySelector('.upgrade-lvl-value');
let upgradeLevel = parseFloat(upgradeLevelObject.innerHTML);

function incrementGem() {
    gemObject.innerHTML = Math.round(gem += gpc);
}

function buyUpgrade() {
    if(gem >= upgradeCost) {
        gem -= upgradeCost;
        gemObject.innerHTML = Math.round(gem);

        upgradeLevelObject.innerHTML ++;
        gpc++;
        gpcObject.innerHTML = Math.round(gpc);

        upgradeCost *= 1.2;
        upgradeCostObject.innerHTML = Math.round(upgradeCost);
    }
}