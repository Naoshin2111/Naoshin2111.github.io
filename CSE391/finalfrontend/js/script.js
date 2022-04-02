

function addToCart(pid,pname,price){
    let cart = localStorage.getItem("cart");
    let   productList = [];
    if(cart == null) {
        //no cart
        let product = {
            productId: pid,
            productName: pname,
            productQuantity: 1,
            productPrice: price
        }
        productList.push(product);
        localStorage.setItem("cart",JSON.stringify(productList));
        console.log("product added for first time!")
    }
    else{
        //cart is here
        let oldCart = JSON.parse(cart);
        let oldProduct = oldCart.find(item => item.productId == pid);

        if(oldProduct) {
            //increase the quantity of old product
            oldProduct.productQuantity = oldProduct.productQuantity+1;
            oldCart.map(item => {
                if(item.productId == oldProduct.productId){
                    item.productQuantity = oldProduct.productQuantity;
                }
            })
            localStorage.setItem("cart",JSON.stringify(oldCart));
            console.log("product quantity increased")
        }
    else{
        // add new Products to oldcart
            let product = {
                productId: pid,
                productName: pname,
                productQuantity: 1,
                productPrice: price
            }
            oldCart.push(product);
            localStorage.setItem("cart",JSON.stringify(oldCart))
            console.log("New product added to cart!")

        }
    }
    updateCart();
}



function updateCart(){
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart == null || cart.length == 0) {
        console.log("cart is empty!");
        $(".cart-items").html("(0)");
        $(".cart-body").html("<h3>Cart does not have any items</h3>");
        $(".checkout-btn").attr('disabled', true);
    }
    else{
        //cart has products
        console.log(cart);
        $(".cart-items").html(`(${cart.length})`)
        let table = `
        <table class='table'> 
        <thead class='thead-light'>
        <tr>
        <th>Item Name</th>
           <th>Price</th>
             <th>Quantity</th> 
                <th>Total price</th> 
  
        </tr>
        </thead>
       
        `;
        let totalPrice = 0;

        cart.map(item =>{
            table += `<tr> 
                       <td> ${item.productName} </td>
                        <td> ${item.productPrice} </td>
                         <td> ${item.productQuantity} </td>
                          <td> ${item.productQuantity*item.productPrice} </td>
                          <td><button onclick='deleteItemFromCart(${item.productId})' class=" btn btn-danger btn-sm">Remove</button></td>
                      </tr>`
            totalPrice += item.productPrice * item.productQuantity;
            }
        )

        table = table + `
                <tr><td colspan="5" class="text-end fw-bold">Total price : ${totalPrice}</td></tr>
        </table>`;


        $(".cart-body").html(table);
        $(".checkout-btn").attr('disabled', false);
    }
}

function deleteItemFromCart(pid){
    let cart = JSON.parse(localStorage.getItem("cart"));
    let updatedCart = cart.filter(item => item.productId != pid);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart();

}
$(document).ready(function(){
    updateCart();
})