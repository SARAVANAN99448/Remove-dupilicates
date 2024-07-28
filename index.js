var btn = document.querySelector(".btn")
btn.addEventListener("click",function(){
   var search = document.querySelector(".search").value

var result = document.querySelector(".result")
   var array=search.split(',').map(Number)
   var uniqueValues=[...new Set(array)]
   result.textContent=JSON.stringify(uniqueValues)
})



