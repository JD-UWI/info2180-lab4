window.addEventListener('load',() =>{
    
    document.querySelector("button").addEventListener("click", (event) =>{
        event.preventDefault();

        let result = document.querySelector("div#result");

        fetch(`superheroes.php?query= ${document.querySelector("input#searchbar").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'')}`.replace(/"[^-0-9+&@#/%?=~_|!:,.;\(\)]"/g, ''), { method: 'GET' })
            .then(response => response.text())
            .then(data => {
                let e1 = document.createElement("h2");
                e1.appendChild(document.createTextNode("RESULT"));
                let e2 = document.createElement("hr");
                result.innerHTML = '';
                result.innerHTML = data;
                result.prepend(e1, e2)
            })
    });

});

/*
if(''){
    result.innerHTML = '';
    result.innerHTML = data;
    result.prepend(e1, e2) 
}
if(file_exists(resp)){
 
}
else
{
    "SUPERHERO NOT FOUND";
}
*/
