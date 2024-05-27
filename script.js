let tab =[];
while(true){
    let element = prompt("Entrez un element");

    if(element===""){
        break;
    }else{
        tab.push(element);
        console.log("Les elements disponibles",tab)
    }
}