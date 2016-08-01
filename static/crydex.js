// Gen 1 bases only at this point.


var bases = ['NidoranM', 'NidoranF', 'Slowpoke', 'Kangaskhan', 'Charmander', 'Grimer', 'Voltorb',
             'Muk', 'Oddish', 'Raichu', 'Nidoqueen', 'Diglett', 'Seel', 'Drowzee', 'Pidgey',
             'Bulbasaur', 'Spearow', 'Rhydon', 'Golem', 'Blastoise', 'Pidgeotto', 'Weedle',
             'Caterpie', 'Ekans', 'Fearow', 'Clefairy', 'Venonat', 'Lapras', 'Metapod', 'Squirtle',
             'Paras', 'Growlithe', 'Krabby', 'Psyduck', 'Rattata', 'Vileplume', 'Vulpix', 
             'Weepinbell'];


// Interesting stats to take: Most/least unique cries, largest difference of two cries in a family

// POKEAPI seems like a massive API to use just to get the ID. Is there a smaller one I can use?
var POKEAPI_BASE = "http://pokeapi.co/api/v2";

// Whoops, can't test this AJAX call until I setup WAMPserver cuz of CORS.
function getPokemonId(name) {
	var result = "";
	$.get(POKEAPI_BASE + "/pokemon-species/" + name.toLowerCase(), function(data) {
		console.log(data);
		console.log(data['id']);
		result = data['id'];
	});
	return result;
};


$(document).ready(function() {
	bases.forEach(function(element) {
		console.log(element);
		$('.baseholder').append("<a href='' id='" + element + "'>" + element + "</a> ");
		$('#' + element).click(function() {
			var id = getPokemonId(element);
			// so, it takes a while for id to be gotten since it's ajax.
			// so this alert will be empty.
			// and it seems like I'll be making a lot of these requests, which is a pain.
			// maybe it's better just to have a js list with 252 pokemon names in it??
			alert(id);
			return false;
		});
	});
});