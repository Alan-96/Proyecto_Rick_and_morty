
const estados = (estados) => {
    if (estados == "Alive") {
        return `<dd class="col-sm-7"><span class="badge rounded-pill text-bg-success">${estados}</span> </dd>`
    } else {
        if (estados == "Dead") {
            return `<dd class="col-sm-7"><span class="badge rounded-pill text-bg-danger">${estados}</span></dd>`
        } else {
            return `<dd class="col-sm-7"><span class="badge rounded-pill text-bg-secondary">${estados}</span></dd>`
        }
    }
};
const url = 'https://rickandmortyapi.com/api/character?page=1'
fetch(url)
    .then(respuesta => respuesta.json())
    .then(dato => {
        console.log(dato)
        let personajes = document.getElementById('personaje')
        personajes.innerHTML = dato.results.map(
            dato => `
            <div class='card text-center col-12 col-sm-5 col-md-5 mx-auto mb-5 gradiante sombras'>
                <div class='row g-0'>
                    <div class='col-md-4'>
                        <img src='${dato.image}' class='img-fluid rounded-start mt-3'>
                    </div>
                    <div class='col-md-8'>
                        <div class='card-body text-white'>
                            <h5 class='card-title'>${dato.name}</h5>
                            <dl class="row">
                                <dt class="col-sm-5 text-dark">Estado: </dt>
                                ${estados(dato.status)}
                                <dt class="col-sm-5 text-dark">Especie: </dt>
                                <dd class="col-sm-7">${dato.species}</dd>
                                <dt class="col-sm-4 text-dark">Origen:</dt>
                                <dd class="col-sm-8">${dato.origin.name}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>`
        )

    })
    .catch(error => console.log(error))

// Next clicking
let counter = 1;
const next = () =>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${++counter}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let characters = document.getElementById('personaje')
            characters.innerHTML = data.results.map(item => `
            
            <div class='card text-center col-12 col-sm-5 col-md-5 mx-auto mb-5 gradiante sombras'>
            <div class='row g-0'>
                <div class='col-md-4'>
                    <img src='${item.image}' class='img-fluid rounded-start mt-3'>
                </div>
                <div class='col-md-8'>
                    <div class='card-body text-white'>
                        <h5 class='card-title'>${item.name}</h5>
                        <dl class="row">
                            <dt class="col-sm-5 text-dark">Estado: </dt>
                            ${estados(item.status)}
                            <dt class="col-sm-5 text-dark">Especie: </dt>
                            <dd class="col-sm-7">${item.species}</dd>
                            <dt class="col-sm-4 text-dark">Origen:</dt>
                            <dd class="col-sm-8">${item.origin.name}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
            
            `).join('');
        });
}

const prev = () =>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${--counter}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let characters = document.getElementById('personaje')
            characters.innerHTML = data.results.map(item => `
            
            <div class='card text-center col-12 col-sm-5 col-md-5 mx-auto mb-5 gradiante sombras'>
            <div class='row g-0'>
                <div class='col-md-4'>
                    <img src='${item.image}' class='img-fluid rounded-start mt-3'>
                </div>
                <div class='col-md-8'>
                    <div class='card-body text-white'>
                        <h5 class='card-title'>${item.name}</h5>
                        <dl class="row">
                            <dt class="col-sm-5 text-dark">Estado: </dt>
                            ${estados(item.status)}
                            <dt class="col-sm-5 text-dark">Especie: </dt>
                            <dd class="col-sm-7">${item.species}</dd>
                            <dt class="col-sm-4 text-dark">Origen:</dt>
                            <dd class="col-sm-8">${item.origin.name}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
            
            `).join('');
        });
}

