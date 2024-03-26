// Selectores

const barratexto = document.querySelector('.barra-texto');
const Enter = document.querySelector('.boton1');
const botonCheck = document.querySelector('.boton-2');
const botonEliminar = document.querySelector('.boton2');
const Lista = document.querySelector('.lista-tareas');
const form = document.querySelector('.form-contaner');
const text = document.querySelector('#texto');







let listas = []; //array que almacena la lista que creamos 

// Funcion agregar tarea 
const renderTareas = () => {
    Lista.innerHTML = '';
    listas.forEach(tarea=> {
        // Crear elemnto
        const li = document.createElement('li');
        li.classList.add('tareas');
        li.id = tarea.id;

        li.innerHTML = `<button class="boton2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-btn" >
                         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                         </svg>
                        </button>
                        <div class="task-list">
                         <p id="texto">${tarea.list}</p>
                         </div>
                         <button class="boton-2" class="tachado"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="check-btn">
                         <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                         </svg>
                         </button>
                                      `;
                                      Lista.append(li);
    });
}





form.addEventListener('submit', e => {
    
    e.preventDefault();

    // obtengo el ultimo elemento del array 
    const lastElemnt = listas[listas.length - 1];

    // crear objeto con las tareas
    const newLista = {
        id: lastElemnt ? lastElemnt.id + 1 : 1, // compruebo que existe
        list: barratexto.value,
        checked: false,
    
    }
    if (barratexto.value == '') {
        return;
        
    }
    // agrego al array
    listas = listas.concat(newLista);

    // Guardar en el navegador
    localStorage.setItem('listas', JSON.stringify(listas));

    // Mostrar en el html 
    renderTareas();
        
});

Lista.addEventListener('click', e => {
    const botonEliminar = e.target.closest('.boton2');
    

    if (botonEliminar) {
        const id = Number(botonEliminar.parentElement.id);
        listas = listas.filter(tarea => tarea.id !== id);
        localStorage.setItem('listas', JSON.stringify(listas));
        renderTareas();
    } 

    
});




Lista.addEventListener('click', List)
function List(event) {
    const list = event.target.closest('.boton-2');
    Lista.classList.toggle('tachado');
    renderTareas();
}



(() => {
    const listaStringArray = localStorage.getItem('listas');
    if (listaStringArray) {
      listas = JSON.parse(listaStringArray);
      renderTareas();
    }
  })(); 







    









    


 
    