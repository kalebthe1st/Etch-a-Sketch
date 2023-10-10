
setSize(16);
function setSize(input) {

    for (let n = 0; n < input; n++) {

        window.cont = document.querySelector('.container');
        window.rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        cont.appendChild(rowDiv);
        for (let n = 0; n < input; n++) {



            window.colDiv = document.createElement('div');
            colDiv.classList.add('col');
            rowDiv.appendChild(colDiv);

        }
    }
    const box = document.querySelectorAll('.col');

    // Create a new div element with the class row
    box.forEach((col) => {
        col.addEventListener("mouseover", () => {
            if (btnClor == "black") {
                col.style.backgroundColor = 'black';
            }
            else if (btnClor === "random") {
                col.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
            }
            else {
                col.style.backgroundColor = '#fff';
            }


        })


    })
}
function erase() {
    document.querySelector('input[type="text"]').value = '';
    let divs = cont.querySelectorAll('div');
    divs.forEach((div) => div.remove());
}


const btn = document.querySelectorAll('button');
let btnClor = ""


// we use the .forEach method to iterate through each button
btn.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {

        btnClor = button.id;
        if (btnClor == "clear") {
            erase();
        }

    })
})