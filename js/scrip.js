$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        var entrenadoresHtml = '';

        data.forEach(function(entrenador) {
            entrenadoresHtml += '<div class="entrenador">';
            entrenadoresHtml += '<h2>' + entrenador.entrenador + '</h2>';

            entrenador.pokemons.forEach(function(pokemon) {
                entrenadoresHtml += '<div class="pokemon ' + pokemon.tipo + '">';
                entrenadoresHtml += '<h3>' + pokemon.nombre + '</h3>';
                entrenadoresHtml += '<img src="' + pokemon.foto + '" alt="' + pokemon.nombre + '">';
                entrenadoresHtml += '</div>';
            });

            entrenadoresHtml += '</div>';
        });

        $('#entrenadores').html(entrenadoresHtml);
    });
});
