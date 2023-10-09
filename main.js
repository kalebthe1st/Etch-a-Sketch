for (let n = 0; n < 10; n++) {
    
    const cont = document.querySelector('.container');
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    cont.appendChild(rowDiv)
    for (let n = 0; n < 10; n++) {
    
    
    
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        rowDiv.appendChild(colDiv);
        
    
        // Create a new div element with the class row
    }
}

const box = document.querySelectorAll('.col');
box.forEach((col) => {
    col.addEventListener("mouseover", () => {
        col.style.backgroundColor = 'black';
    })


})

