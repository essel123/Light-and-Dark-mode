


var body = document.body;



var mode = document.getElementById("mode");


mode.addEventListener('click',()=>{
  
   body.classList.toggle("dark");

if (body.classList.contains("dark")) {
    mode.src = "icons8_sun_50px.png";
    
}
else{
    mode.src = "icons8_moon_symbol_50px_1.png";
}

   
})

var list = [
    "A",
    "B",
    "C",
    "D"
];

var es = list.map((obj)=>{
    return obj;
})


// alert(es.concat);



