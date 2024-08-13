

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCateg = document.getElementById("productCateg");
var productDesc = document.getElementById("productDesc");
var productcount= document.getElementById("productcount");
var switsh = 0 ;
var ai = 0 ;

var productcontainer =[ ];


if (localStorage.getItem("myproduct") == null ){
    productcontainer=[]
}else {
    productcontainer = JSON.parse(localStorage.getItem("myproduct"))
}







function Addproduct() {
    var product = {
        count :productcount.value,
        name : productName.value,
        price : productPrice.value,
        categ : productCateg.value, 
        desc : productDesc.value
    }
    // productcontainer.push(product);

    if (productName.value== " " || productPrice.value=="" || productCateg.value==" " || productDesc.value==" "|| productcount.value== "" || productcount.value<1  ){
        alert("Please Enter The Data")
    }else if (switsh == 1){
        productcontainer[ai].count=productcount.value;
        productcontainer[ai].name=productName.value;
        productcontainer[ai].price=productPrice.value;
        productcontainer[ai].categ=productCateg.value;
        productcontainer[ai].desc=productDesc.value;
    }else {
        productcontainer.push(product)
    }
    displayproduct()
    deleteText()
    switsh=0
    console.log(productcontainer);
    localStorage.setItem("myproduct" , JSON.stringify(productcontainer) )

}


function displayproduct() {
    var cartoona='' ;
    for (var i=0 ; i<productcontainer.length ;i++){
        cartoona+= `<tr>
        <td>${[i+1]}</td>
        <td> ${productcontainer[i].count} </td>
        <td> ${productcontainer[i].name} </td>
        <td> ${productcontainer[i].price} </td>
        <td> ${productcontainer[i].categ} </td>
        <td> ${productcontainer[i].desc} </td>
        <td> <button class="btn btn-danger" onclick="deleteRow(${i})" > Delete </button> </td>
        <td> <button class="btn btn-warning mb-4" onclick="update(${i})" > Update</button> </td>
        </tr>`
    }
    document.getElementById("tBody").innerHTML=cartoona
    
}

// Empaty  
function deleteText(){
    productName.value='';
    productPrice.value='';
    productCateg.value='';
    productDesc.value='';
    productcount.value=" ";
}

function DeleteAll() {
    productcontainer.splice(0);
    displayproduct()
}

function deleteRow(i) {
    if (productcontainer[i].count>1){
        productcontainer[i].count=productcontainer[i].count -1 
    }else{
    productcontainer.splice(i,1)
    switsh=0
    }
    displayproduct()
}

function searchproduct(term){
    var cartoona='' ;
    for (var i=0 ; i<productcontainer.length ;i++){
        if (productcontainer[i].name.includes(term)==true){
        cartoona+= `<tr>
        <td>${[i+1]}</td>
        <td> ${productcontainer[i].count} </td>
        <td> ${productcontainer[i].name} </td>
        <td> ${productcontainer[i].price} </td>
        <td> ${productcontainer[i].categ} </td>
        <td> ${productcontainer[i].desc} </td>
        <td> <button class="btn btn-danger" onclick="deleteRow(${i})" > Delete </button> </td>
        <td> <button class="btn btn-warning mb-4" onclick="update(${i})" > Update</button> </td>
        </tr>`
        }
    }
    document.getElementById("tBody").innerHTML=cartoona
}
function update(i){
    productName.value = productcontainer[i].name;
    productPrice.value =productcontainer[i].price;
    productCateg.value =productcontainer[i].categ;
    productDesc.value = productcontainer[i].desc;
    productcount.value =productcontainer[i].count;
    switsh=1
    ai =i
    displayproduct()
}
















