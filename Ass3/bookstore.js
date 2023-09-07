let cartcount=0;
function addToCart(booktitle){
    cartcount++;
    updateCartCount();
    alert(`added "${booktitle}" in to the cart`);
}
function updateCartCount(){
    const cart=document.querySelector('.cartcount');
    cart.textContent=cartcount;
}