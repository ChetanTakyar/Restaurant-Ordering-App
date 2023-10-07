import { menuArray } from '/data.js';
const itemsContainer = document.getElementById("app-container")
const orderSection = document.getElementById("order-section")
const modal = document.getElementById("modal")
const paymentBtn = document.getElementById("complete-payment-btn")
const orderItemArr = [] ;

document.addEventListener("click", function (e) {
    if (e.target.dataset.addItem){
        handleAddClick(e.target.dataset.addItem)
    }

    else if (e.target.dataset.removeItem){
        handleRemoveFromCart(e.target.dataset.removeItem)
        cart()
    }
    
    else if (e.target.id === "complete-order-button"){
        displayPaymentModal()
    }
        
});



function handleAddClick(menuItemId){
 
    const orderItem = menuArray.filter(function(item){
        return item.id === Number(menuItemId);
    })[0];
    orderItemArr.push(orderItem)
    cart()
    }

function cart (){
    let totalOrderPrice = 0;
    let orderItemHTML = "";

    orderItemArr.forEach(function (item){
       orderItemHTML += `
        <div class=order-item>
            <span>${item.name}</span>
            <span id="order-item-remove-btn" data-remove-item = ${item.id}> remove</span>
            <span id="order-item-price">$${item.price}</span>
        </div>
        `
        totalOrderPrice += item.price
    })

    console.log(totalOrderPrice)
    let orderUIHTML = `
                <p class = order-section-title>Your order</p>
                    ${orderItemHTML}
                    <div class = "order-item" id = "total-order">
                        <span> Total price </span> 
                        <span id="order-item-price"> $${totalOrderPrice} </span>
                    </div>
                    
                    <button class="complete-order-button" id="complete-order-button" >Complete order</button>
                </div>`
        orderSection.innerHTML =  orderUIHTML;
}

function handleRemoveFromCart(itemId){
    const removedItem = orderItemArr.filter(item => {
    return item.id === (itemId)
    })
    orderItemArr.pop(removedItem)
    }
function displayPaymentModal(){
    modal.style.display = "block"
}

paymentBtn.addEventListener("click", e =>{
    e.preventDefault()
    const name = document.getElementById("name-input").value
    modal.style.display = "none"
    orderSection.innerHTML = `
    <div class="order-confirmation">
    <p> Thanks ${name}, your order is on the way!</p>
    </div>
    
    `
})


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
            <button id="plus-button" data-add-item = ${id}>+</button>
        </div>

        `
    });
    appHTML
    return appHTML
}

function renderApp(){
    
    itemsContainer.innerHTML = getAppHTML();
}

renderApp()

