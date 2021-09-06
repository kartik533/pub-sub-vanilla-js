import {stats} from "./stats.js";
import {movieForm} from "./movie-form.js";
import {actorForm} from "./actor-form.js";
import {actors} from "./actors.js";
import {movies} from "./movies.js";

document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector('main')
    let aside = document.querySelector('aside')

    movieForm.render(aside)

    stats.render(aside)

    actorForm.render(aside)

    actors.render(main)

    movies.render(main)
});