let sum = 0
function handlerBtn(target) {
    const QuantityInput = document.getElementById('quantity')
    const Quantity = QuantityInput.value

    const itemsUnderCart = document.getElementById('cart')
    const itemsName = target.parentNode.parentNode.childNodes[1].innerText
    const itemsPrice = target.parentNode.parentNode.childNodes[3].innerText.split(' ')[1]
    const itemsPriceSign = target.parentNode.parentNode.childNodes[3].innerText.split(' ')[2]
   const itemsPriceM = itemsPrice * Quantity

    const li = document.createElement('li')
    li.innerText = itemsName+ ' ' + itemsPriceM + ' ' + itemsPriceSign

    itemsUnderCart.appendChild(li)


    const priceString = target.parentNode.parentNode.childNodes[3].innerText.split(' ')[1]
    const price = parseFloat(priceString) * Quantity

    sum = parseFloat(sum) + price
    
    const total = document.getElementById('total')
    total.innerText = sum

}
function Discount(target){
    const totalString = document.getElementById('total').innerText
    const total = parseFloat(totalString)

    const discTotal = (total / 100) * 30


    const grandTotal = document.getElementById('grand-total')

    grandTotal.innerText = (total - discTotal).toFixed(2)

    
     



}