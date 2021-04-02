

function insertionSort(arr) {
    var aux;
    var clave;
    
    for(let i = 1; i < arr.length; i++) {

        clave = i;
        let mainElement = document.getElementById(clave);

        for(let j = i-1; j >= 0; j--) {
            if(parseInt(arr[clave].getElement()) <= parseInt(arr[j].getElement())) {

                let secondaryElement = document.getElementById(j);

                aux = arr[clave].getElement();
                aux_order = mainElement.style.order;
                

                arr[clave].setElement(arr[j].getElement());
                changeOrder(mainElement, secondaryElement.style.order);
                
                arr[j].setElement(aux);
                changeOrder(secondaryElement, aux_order);


                clave--;
            }
        }
    }
}

function addElementToContainer(number, arr){

    let new_element = document.createElement("div");

    new_element.setAttribute("class", "flex-item");        
    new_element.innerHTML = number.toString();

    setOrder(new_element, arr);
    new_element.setAttribute("id", new_element.style.order);

    document.querySelector(".flex-container").append(new_element);
}

function clearContainer(parent){
    
    $('.flex-item').fadeOut('fast');
    setTimeout(function(){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    },1000);
}

function setOrder(element, arr){
    $(element).css('order', arr.length-1);
}


function changeOrder(element, newOrder){

    let order_prom = new Promise(function(resolve, reject){
        resolve();
        reject();
    })

    order_prom.then(function(){

        element.style.order = newOrder;
        element.setAttribute('id', element.style.order);

    }).catch(function(err){
        console.error(err);
    });

}