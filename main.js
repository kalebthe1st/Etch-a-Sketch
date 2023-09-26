const box = document.querySelectorAll('.col');

box.forEach((col) => {
    col.addEventListener("dragover", () => {
        col.style.backgroundColor = 'black';

        col.addEventListener("contextmenu", () => {
            col.style.backgroundColor = '';
        })
    
    })
   

})


