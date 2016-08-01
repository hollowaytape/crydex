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

// From the Crystal disassembly.

// TODO: Grimer (88), Rhydon (112), Kangaskhan (115), Lapras (131), Growlithe (58),  return incorrect results for their own bases.
var cryvalues = [0x0f080081, 0x0f020100, 0x0f000140, 0x040600c0, 0x040200c0, 0x04000100,
                 0x1d0600c0, 0x1d0200c0, 0x13000100, 0x160800a0, 0x1c0cc081, 0x160770c0,
                 0x150ee081, 0x130ff081, 0x13060100, 0x0e0df084, 0x14028140, 0x1401117f,
                 0x22000100, 0x2202017f, 0x10000100, 0x18040120, 0x170120c0, 0x170e0090,
                 0x0f0ee081, 0x090ee088, 0x000200c0, 0x000ff17f, 0x01000100, 0x0102c160,
                 0x0a000100, 0x00000100, 0x0002c140, 0x09000100, 0x190cc081, 0x190aa0a0,
                 0x2404f090, 0x240880e0, 0x0e0ff0b5, 0x0e0680e0, 0x1d0e0100, 0x1d0fa100,
                 0x080dd081, 0x080aa0c0, 0x2302217f, 0x1e020160, 0x1e04217f, 0x1a0440c0,
                 0x1a029100, 0x0b0aa081, 0x0b02a090, 0x19077090, 0x1909917f, 0x210200e0,
                 0x210ff0c0, 0x0a0dd0e0, 0x0a0af0c0, 0xaf0200c0, 0x15000100, 0x0e0ff17f,
                 0x0e0770e0, 0x0e00017f, 0x1c0c0081, 0x1c0a8140, 0x1c09817f, 0x1f0ee081, // Machop
                 0x1f0480e0, 0x1f008140, 0x21055081, 0x250440a0, 0x2506614c, 0x1a000100, // Tentacool
                 0x1a0ee17f, 0x240f0090, 0x24000100, 0x120e00c0, 0x25000100, 0x25020140, // Rapidash
                 0x02000100, 0x1f000100, 0x1c0800e0, 0x1c020140, 0x100dd081, 0x0b0bb081, // Doduo
                 0x0b0990a0, 0x0c088140, 0x0c02317f, 0x0f000100, 0x070ef17f, 0x18000100, // Shellder
                 0x1806f160, 0x1c000100, 0x1c0300c0, 0x0700017f, 0x170ff140, 0x0d0880a0, // Drowzee
                 0x0d0ee0c0, 0x20020160, 0x200ee160, 0x060ed100, 0x0b000100, 0x0d000100, // Exeggutor
                 0x19000100, 0x0804f0e0, 0x12080140, 0x0c0ee140, 0x0c000100, 0x120e615d, // Koffing
                 0x120ff17f, 0x04000100, 0x11000100, 0x1400a140, 0x12000100, 0x03000100, // Kangaskhan
                 0x19099090, 0x1903c081, 0x160800c0, 0x1601017f, 0x1e0020a0, 0x1e000100, // Starmie
                 0x200080c0, 0x16000100, 0x0d0ff17f, 0x0608f17f, 0x040ff0b0, 0x14000100, // Pinsir
                 0x1d0110c0, 0x17080080, 0x17000100, 0x1b000100, 0x0e0ff17f, 0x1a0880e0, // Eevee
                 0x1a0aa17f, 0x1a03d100, 0x1a0100a0, 0x250aa17f, 0x1f0f008a, 0x1f0ff0c0, // Omastar
                 0x160bb0c0, 0x180ee081, 0x23020170, 0x05055081, 0x090800c0, 0x180ff100, // Zapdos
                 0x090f80c0, 0x0f0600c0, 0x0f040100, 0x0f03c140, 0x1e09917f, 0x1e0ee17f] // Mew


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

function baseFromValue(value) {
	var firstTwoDigits = value & 0xff000000;
	return firstTwoDigits >> 24;
}

function getBase(name) {
	var id = pokemonId(name);
	var cryvalue = cryvalues[id-1];
	//console.log(cryvalue);
	console.log(name, id);
	console.log(cryvalue);
	console.log(baseFromValue(cryvalue));
	return baseFromValue(cryvalue);
	//console.log(firstTwoDigits);
	//console.log(firstTwoDigits.toString(16));
	//console.log((firstTwoDigits >> 24).toString(16));  // 6 hexidecimal digits to the right; 16 = 2^4
}

function allWithBase(name) {
	var result = [];
	var targetBase = getBase(name);
	cryvalues.forEach(function(element, index) {
		//console.log(getBase(element));
		if (baseFromValue(element) == targetBase) {
			result.push(pokemon[index]);
		}
	});
	console.log(result);
	return result;
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

			var id = pokemonId(element);
			var base = getBase(element)

			$('#graph').text("#" + id + " " + element + "Base:" + base + " " + bases[base] + allWithBase(bases[base]));
			var audio = new Audio('static/audio/' + pokemonId(element) + '.mp3');
			audio.play();

			return false;
		});
	});
});