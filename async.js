async function foo() {
    try {
        let resp = await fetch("https://restcountries.eu/rest/v2/all");
    
        let res = await resp.json();
        detor(res);
    } catch (error) {
        console.log(error);
    }
 
}
foo()
function detor(data){
    let container = document.createElement("div");
    container.setAttribute("class","container");
    
    let row = document.createElement("div");
    row.setAttribute("class","row");
data.forEach((element)=> {
   
    let col = document.createElement("div");
    col.setAttribute("class", "col-3 mb-3");
    

    let card = document.createElement("div");
    card.setAttribute("class", "card h-100");

    let cardImg =document.createElement("img");
    cardImg.setAttribute("class","card-img-top");
    cardImg.setAttribute("src",element.flag);

    let cardBody =document.createElement("div");
    cardBody.setAttribute("class","card-body");

    let cardTitle = document.createElement("h2");
    cardTitle.setAttribute("class", "h2");
    cardTitle.innerHTML = element.name;

    let cardText = document.createElement("p");
    cardText.setAttribute("class","card-text");
    cardText.innerHTML = `Capital : ${element.capital} <br> Region: ${element.region}<br> Population: ${element.population}<br> Area: ${element.area}`;
    
    cardBody.append(cardTitle,cardText);
    card.append(cardImg,cardBody);
    col.append(card);
    row.append(col);

  
}); 
container.append(row);
document.body.append(container);
}