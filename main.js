
setSize(16);
function setSize(input) {
    for (let n = 0; n < input; n++) {

        const cont = document.querySelector('.container');
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        cont.appendChild(rowDiv)
        for (let n = 0; n < input; n++) {



            const colDiv = document.createElement('div');
            colDiv.classList.add('col');
            rowDiv.appendChild(colDiv);


            // Create a new div element with the class row
        }
    }
}

const box = document.querySelectorAll('.col');

box.forEach((col) => {
    col.addEventListener("mouseover", () => {


        col.style.backgroundColor = 'black';
    })


})

const btn = document.querySelectorAll('button');
let btnClor = ""


// we use the .forEach method to iterate through each button
btn.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        // if (button.id == "black") { 
        //     let btnClor = button.id;
        // }
        // else if(button.id == "eraser"){
        //     col.style.backgroundColor = '#fff';
        // }
        btnClor = button.id;

    })
})