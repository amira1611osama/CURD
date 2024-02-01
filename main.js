//get total
//save localstorage
//read
//count
//delete
//update
//search
//clean data
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let category = document.getElementById('category');
let sbmit = document.getElementById('sbmit');
let total = document.getElementById('total');


function gettotal()
{
    if( price.value != ''){
        let result =( +price.value + +taxes.value + +ads.value ) - +discount.value;
        total.innerHTML = result;
        total.style.background='green';

}
    else{
    total.innerHTML = ''
    total.style.background='#a00d02';

}
}
//create product
let dataproduct
if(localStorage.product != null){
    dataproduct= JSON.parse(localStorage.product)
}else{
    dataproduct =[]
}

sbmit.onclick = function()
{
    let newproduct = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads :  ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
    }
    dataproduct.push(newproduct)
    localStorage.setItem('product', JSON.stringify(dataproduct)  )
    console.log(dataproduct)
    ClearData()
}


//clear inputs
function ClearData(){
    title.value ='' 
    price.value =''
    taxes.value =''
    ads.value =''
    discount.value =''
    total.innerHTML =''
    count.value =''
    category.value =''
}

