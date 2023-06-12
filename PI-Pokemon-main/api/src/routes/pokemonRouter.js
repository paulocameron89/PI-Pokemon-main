const { Router } = require('express');
const {
    getPokemonsHandler,
    getPokemonsByIdHandler,
    createPokemonHandler,
} = require("../handlers/pokemonsHandlers");

const pokemonRouter = Router();


pokemonRouter.get("/", getPokemonsHandler);

pokemonRouter.get("/:id", getPokemonsByIdHandler);

pokemonRouter.post("/", createPokemonHandler);


module.exports = pokemonRouter;







