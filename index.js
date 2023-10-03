import { menuArray } from '/data.js';
const itemsContainer = document.getElementById("app-container")
const orderSection = document.getElementById("order-section")

document.addEventListener("click", function (e) {
    handleAddClick(e.target.dataset.addItem)
    
});

function handleAddClick(menuItemId){
 
    const orderItem = menuArray.filter(function(item){
        return item.id === Number(menuItemId);
    })[0];
    console.log(orderItem)
    const orderItemArr = [];
        orderItemArr.push(orderItem)
        console.log("Pushed into array:" + orderItemArr)
        cart()
    return orderItemArr
    }
    


function cart (){
    let orderedItemsArr = handleAddClick()
    console.log("Ordered item arr:" + orderedItemsArr)
    let orderSmmaryHTML = `
                <p class = order-section-title>Your order</p>
                <div class=order-item>
                    <p>${orderedItemsArr[0].name}</p>
                    <button class="complete-order-button">Complete order</button>
                </div>`
        return orderSmmaryHTML
}

function getAppHTML (){
    let appHTML = ""
    

    menuArray.forEach(menuItem => {
        const {name, ingredients, id, price, emoji} = menuItem
        appHTML += `<div class= "menu-item">
       <div class="item-emoji"> ${emoji} </div>
       <div class = menu-item-details>
            <p id= "menuItemTitle">${name}</p>
             <p id= "menuItemIngredients">${ingredients}</p>
             <p id= "menuItemPrice">$${price}</p>
            </div>
            <button id="plus-button" data-add-item = "${id}">+</button>
        </div>

        `
    });
    appHTML
    return appHTML
}


function renderApp(){
    
    itemsContainer.innerHTML = getAppHTML();
    orderSection.innerHTML = cart();
}

renderApp()

