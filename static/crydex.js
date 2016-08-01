// Gen 1 only so far.

var pokemon = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
               'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree',
               'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata',
               'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 
               'Sandshrew', 'Sandslash', 'NidoranF', 'Nidorina', 'Nidoqueen', 'NidoranM',
               'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff',
               'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras',
               'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian',
               'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag',
               'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke',
               'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel',
               'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro',
               'Magnemite', 'Magneton', "Farfetch'd", 'Doduo', 'Dodrio', 'Seel', 'Dewgong',
               'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix',
               'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Exeggcute',
               'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Lickitung',
               'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 'Tangela', 'Kangaskhan',
               'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime',
               'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 'Tauros', 'Magikarp',
               'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon',
               'POrygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax',
               'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 'Dragonite', 'Mewtwo',
               'Mew'];


var bases = ['NidoranM', 'NidoranF', 'Slowpoke', 'Kangaskhan', 'Charmander', 'Grimer', 'Voltorb',
             'Muk', 'Oddish', 'Raichu', 'Nidoqueen', 'Diglett', 'Seel', 'Drowzee', 'Pidgey',
             'Bulbasaur', 'Spearow', 'Rhydon', 'Golem', 'Blastoise', 'Pidgeotto', 'Weedle',
             'Caterpie', 'Ekans', 'Fearow', 'Clefairy', 'Venonat', 'Lapras', 'Metapod', 'Squirtle',
             'Paras', 'Growlithe', 'Krabby', 'Psyduck', 'Rattata', 'Vileplume', 'Vulpix', 
             'Weepinbell'];

// Caterpie: descending p4 F-D
// Slowpoke: ascending min6 D-B
// Growlithe: descending min2 F-E

// Interesting stats to take: Most/least unique cries, largest difference of two cries in a family

// POKEAPI seems like a massive API to use just to get the ID. Is there a smaller one I can use?
/*var POKEAPI_BASE = "http://pokeapi.co/api/v2";

function getPokemonId(name) {
	var result = "";
	$.get(POKEAPI_BASE + "/pokemon-species/" + name.toLowerCase(), function(data) {
		console.log(data);
		console.log(data['id']);
		result = data['id'];
	});
	return result;
};
*/

function pokemonId(name) {
	return pokemon.indexOf(name)+1;
}

$(document).ready(function() {
	bases.forEach(function(element) {
		$('.baseholder').append("<a href='' id='" + element + "'>" + element + "</a> ");
		$('#' + element).click(function() {
			//var id = getPokemonId(element);
			// so, it takes a while for id to be gotten since it's ajax.
			// so this alert will be empty.
			// and it seems like I'll be making a lot of these requests, which is a pain.
			// maybe it's better just to have a js list with 252 pokemon names in it??
			//alert(id);
			//return false;

			$('#graph').text("#" + pokemonId(element) + " " + element);
			var audio = new Audio('static/audio/' + pokemonId(element) + '.mp3');
			audio.play();

			return false;
		});
	});
});