let btn = document.getElementById('submit')

/* This function for Prevent speed reload */
btn.addEventListener("click" , function(e) {
    e.preventDefault();
})

/* This function for add any item in to-do list */
addItem = () => {

    let myItem = document.getElementById('newItem').value

    btn = document.getElementById('submit')

    myListItems = document.getElementById("listItems")

    /* validaion for anyone to know what happend */
    if (myItem === "") {

        myListItems.innerHTML = "you need to add input"

    } else {

        let textBox = document.createElement("input")
            textForItem = document.createElement('p') 

        textBox.type = "checkbox"
        textForItem.className = "textForItem"
        textBox.className = "inputCheck" 

        textForItem.innerHTML= myItem

        textForItem.appendChild(textBox)
        myListItems.appendChild(textForItem)
        
    }
}

/* This function for Remove all items from to-do list */
removeItem = () => {
    myListItems.innerHTML = ""
}