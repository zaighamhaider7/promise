let url= "https://fakestoreapi.com/products"
let promise = new Promise((resolve,reject)=>{
    let a = prompt("enter a number")

    if(url != null && a==3){
        resolve("correct value in prompt")
    }
    else{
        reject("incorrect value in prompt")
    }
});

promise.then((msg)=>{
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        document.getElementById("container").innerHTML = `<h1>${data[0].title}</h1>`
    })
    console.log("correct value");
})
.catch((msg)=>{
    console.log("incorrect value");
})