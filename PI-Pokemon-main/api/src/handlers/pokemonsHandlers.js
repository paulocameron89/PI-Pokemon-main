//handlers --> no debe interactuar con la BDD directamente
// llamar a la funcion que obtiene los datos de la BDD
// llamar a una funcion que obtenga los datos de la API externa
// unir los datos, unificando el formato de BDD y API
// cuando tenga los datos, responder con los datos

const getPokemonsHandler = (req, res) => {
    // Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
    //Query
    //Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por query.
    //Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    // Si no existe el pokemon, debe mostrar un mensaje adecuado.
    //Debe buscar tanto los de la API como los de la base de datos.
    
    const {name} = req.query;
    if (name !== undefined){
        res.send(`Quiero buscar todos los que se llamen ${name}`);
    }else{
        res.send("Quiero enviar todos los usuarios")
    }
} 

const getPokemonsByIdHandler = (req,res)=>{
    // Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon.
    // El pokemon es recibido por parámetro (ID).
    // Tiene que incluir los datos del tipo de pokemon al que está asociado.
    // Debe funcionar tanto para los pokemones de la API como para los de la base de datos.

    const {id} = req.params
    res.send(`Va a enviar el detalle de el pokemon de ID ${id}`);
}

const createPokemonHandler = (req,res)=>{
    // Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados.
    // Toda la información debe ser recibida por body.
    // Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).
    const {name, hp, attack, defense, speed, height, weight, image} = req.body
    res.json(`ESTOY POR CREAR UN POKEMON CON : 
        name:${name},
        hp:${hp},
        attack:${attack},
        defense;${defense},
        speed:${speed},
        height:${height},
        weight:${weight},
        image:${image}
    `);
}

module.exports = {
    getPokemonsHandler,
    getPokemonsByIdHandler,
    createPokemonHandler
};