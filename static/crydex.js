// (Include Missingno.?? It's not in the cry pack I have but it'd be fun. It's nidoM base.)

/*
Data from the Pokemon Crystal diassembly.
A list of every Gen I-II Pokemon in ID order.
The entry with the same index in pokemonBases, pokemonPitches, and pokemonLengths corresponds
to that Pokemon.
*/

var pokemon = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard',
               'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 
               'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 
               'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 
               'Sandshrew', 'Sandslash', 'NidoranF', 'Nidorina', 'Nidoqueen', 'NidoranM',
               'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 
               'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 
               'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 
               'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 
               'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 
               'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 
               'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 
               'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', 'FarfetchD', 'Doduo', 
               'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 
               'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 
               'Electrode', 'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 
               'Hitmonchan', 'Lickitung', 'Koffing', 'Weezing', 'Rhyhorn', 'Rhydon', 'Chansey', 
               'Tangela', 'Kangaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 
               'Starmie', 'MrMime', 'Scyther', 'Jynx', 'Electabuzz', 'Magmar', 'Pinsir', 
               'Tauros', 'Magikarp', 'Gyarados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 
               'Jolteon', 'Flareon', 'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 
               'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini', 'Dragonair', 
               'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 
               'Quilava', 'Typhlosion', 'Totodile', 'Croconaw', 'Feraligatr', 'Sentret', 'Furret',
               'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 
               'Chinchou', 'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 
               'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill', 'Azumarill', 
               'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 
               'Sunflora', 'Yanma', 'Wooper', 'Quagsire', 'Espeon', 'Umbreon', 'Murkrow', 
               'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 
               'Forretress', 'Dunsparce', 'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 
               'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring', 'Slugma', 
               'Magcargo', 'Swinub', 'Piloswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 
               'Mantine', 'Skarmory', 'Houndour', 'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 
               'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 
               'Magby', 'Miltank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 
               'Tyranitar', 'Lugia', 'Ho-oh', 'Celebi '];

var pokemonBases = [' 15', '15', '15', '4', '4', '4', '29', '29', '19', '22', '28', '22', '21', 
                    '19', '19', '14', '20', '20', '34', '34', '16', '24', '23', '23', '15', '9', 
                    '0', '0', '1', '1', '10', '0', '0', '9', '25', '25', '36', '36', '14', '14', 
                    '29', '29', '8', '8', '35', '30', '30', '26', '26', '11', '11', '25', '25', 
                    '33', '33', '10', '10', '31', '21', '14', '14', '14', '28', '28', '28', '31', 
                    '31', '31', '33', '37', '37', '26', '26', '36', '36', '18', '37', '37', '2', 
                    '31', '28', '28', '16', '11', '11', '12', '12', '5', '7', '24', '24', '28', 
                    '28', '7', '23', '13', '13', '32', '32', '6', '6', '11', '13', '25', '8', '18',
                    '12', '12', '18', '18', '4', '17', '20', '18', '3', '25', '25', '22', '22', 
                    '30', '30', '32', '22', '13', '6', '4', '20', '29', '23', '23', '27', '14', 
                    '26', '26', '26', '26', '37', '31', '31', '22', '24', '35', '5', '9', '24', 
                    '9', '15', '15', '15', '30', '30', '49', '49', '49', '48', '48', '58', '50', 
                    '50', '50', '46', '46', '45', '45', '54', '54', '39', '39', '29', '48', '48', 
                    '64', '52', '49', '40', '44', '59', '59', '43', '43', '62', '52', '38', '38', 
                    '52', '52', '52', '52', '52', '65', '38', '61', '50', '56', '56', '65', '26', 
                    '38', '47', '45', '45', '62', '41', '47', '47', '66', '51', '58', '66', '66', 
                    '47', '62', '66', '62', '56', '60', '60', '53', '63', '48', '63', '63', '61', 
                    '50', '60', '57', '62', '48', '50', '53', '46', '67', '41', '65', '64', '65', 
                    '53', '38', '61', '60', '51', '47', '42', '55', '63', '42', '39', '42', '58', 
                    '65', '55'];

var pokemonPitches = ['128', '32', '0', '96', '32', '0', '96', '32', '0', '128', '204', '119', 
                      '238', '255', '96', '223', '40', '17', '0', '32', '0', '64', '18', '224', 
                      '238', '238', '32', '255', '0', '44', '0', '0', '44', '0', '204', '170', 
                      '79', '136', '255', '104', '224', '250', '221', '170', '34', '32', '66', 
                      '68', '41', '170', '42', '119', '153', '32', '255', '221', '175', '32', 
                      '0', '255', '119', '0', '192', '168', '152', '238', '72', '8', '85', '68', 
                      '102', '0', '238', '240', '0', '224', '0', '32', '0', '0', '128', '32', 
                      '221', '187', '153', '136', '35', '0', '239', '0', '111', '0', '48', '0', 
                      '255', '136', '238', '32', '238', '237', '168', '0', '0', '0', '79', '128', 
                      '238', '0', '230', '255', '0', '0', '10', '0', '0', '153', '60', '128', 
                      '16', '2', '0', '8', '0', '255', '143', '255', '0', '17', '128', '0', '0', 
                      '255', '136', '170', '61', '16', '170', '240', '255', '187', '238', '32', 
                      '85', '128', '255', '248', '96', '64', '60', '153', '238', '-16', '-34', 
                      '-183', '839', '801', '3840', '1132', '1088', '1020', '138', '107', '145', 
                      '0', '0', '-150', '17', '-174', '-16', '969', '720', '0', '97', '232', '16',
                      '59', '-103', '-167', '34', '-7', '-124', '132', '283', '182', '3904', 
                      '-675', '59', '39', '0', '-81', '299', '-32', '49', '147', '-198', '162', 
                      '-233', '-31', '260', '304', '354', '635', '65', '128', '0', '452', '-258',
                      '239', '274', '0', '352', '0', '656', '53', '83', '1954', '1600', '-472', 
                      '-525', '510', '-265', '161', '13', '0', '2', '-190', '2217', '57', '-266',
                      '763', '72', '0', '115', '-352', '-538', '44', '0', '104', '-728', '374',
                      '-461', '659', '558', '0', '0', '95', '-475', '-256', '0', '0', '330']

//
var pokemonSpeeds = ['129', '256', '320', '192', '192', '256', '192', '192', '256', '160', '129', 
                     '192', '129', '129', '256', '132', '320', '383', '256', '383', '256', '288', 
                     '192', '144', '129', '136', '192', '383', '256', '352', '256', '256', '320', 
                     '256', '129', '160', '144', '224', '181', '224', '256', '256', '129', '192', 
                     '383', '352', '383', '192', '256', '129', '144', '144', '383', '224', '192', 
                     '224', '192', '192', '256', '383', '224', '383', '129', '320', '383', '129', 
                     '224', '320', '129', '160', '332', '256', '383', '144', '256', '192', '256', 
                     '320', '256', '256', '224', '320', '129', '129', '160', '320', '383', '256', 
                     '383', '256', '352', '256', '192', '383', '320', '160', '192', '352', '352', 
                     '256', '272', '256', '256', '256', '224', '320', '320', '256', '349', '383', 
                     '256', '256', '320', '256', '256', '144', '129', '192', '383', '160', '256', 
                     '192', '256', '383', '383', '176', '256', '192', '128', '256', '256', '383', 
                     '224', '383', '256', '160', '383', '129', '192', '192', '129', '368', '129', 
                     '192', '256', '192', '192', '256', '320', '383', '383', '176', '288', '512', 
                     '128', '288', '212', '232', '272', '384', '184', '258', '216', '416', '222', 
                     '312', '512', '482', '320', '320', '272', '320', '145', '232', '256', '56', 
                     '256', '360', '216', '384', '232', '336', '288', '384', '384', '456', '200', 
                     '312', '384', '232', '184', '384', '200', '175', '320', '320', '240', '384', 
                     '512', '232', '256', '324', '512', '256', '384', '256', '256', '247', '232', 
                     '384', '224', '352', '168', '224', '175', '110', '216', '320', '448', '320', 
                     '256', '232', '256', '384', '106', '240', '384', '320', '256', '256', '560', 
                     '416', '576', '384', '496', '264', '256', '256', '180', '58',  '416', '320', 
                     '288', '416', '384', '208', '336', '384', '256', '384', '273'];

/*
** A list of all base cries, by Pokemon name and in order in the ROM.
*/

// TODO: Nidorina showing up both NidoranF and Golem bases?

var bases = ['NidoranM', 'NidoranF', 'Slowpoke', 'Kangaskhan', 'Charmander', 'Grimer', 'Voltorb',
             'Muk', 'Oddish', 'Raichu', 'Nidoqueen', 'Diglett', 'Seel', 'Drowzee', 'Pidgey',
             'Bulbasaur', 'Spearow', 'Rhydon', 'Golem', 'Blastoise', 'Pidgeotto', 'Weedle',
             'Caterpie', 'Ekans', 'Fearow', 'Clefairy', 'Venonat', 'Lapras', 'Metapod', 'Squirtle',
             'Paras', 'Growlithe', 'Krabby', 'Psyduck', 'Rattata', 'Vileplume', 'Vulpix', 
             'Weepinbell', 'Marill', 'Spinarak', 'Togepi', 'Girafarig', 'Raikou', 'Mareep',
             'Togetic', 'Hoothoot', 'Sentret', 'Slowking', 'Cyndaquil', 'Chikorita', 'Totodile',
             'Gligar', 'Cleffa', 'Slugma', 'Ledyba', 'Entei', 'Wooper', 'Mantine', 'Typhlosion',
             'Natu', 'Teddiursa', 'Sunflora', 'Ampharos', 'Magcargo', 'Pichu', 'Aipom',
             'Dunsparce', 'Donphan'];

// Caterpie: descending p4 F-D
// Slowpoke: ascending min6 D-B
// Growlithe: descending min2 F-E

// Interesting stats to take: Most/least unique cries, largest difference of two cries in a family

function pokemonId(name) {
	return pokemon.indexOf(name)+1;
}

function getBase(name) {
  return pokemonBases[pokemonId(name)-1];
}

function getPitch(name) {
  return parseInt(pokemonPitches[pokemonId(name)-1]);
}

function getSpeed(name) {
  return parseInt(pokemonSpeeds[pokemonId(name)-1]);
}

function allWithBase(name) {
	var result = [];
	var targetBase = getBase(name);
	pokemonBases.forEach(function(element, index) {
		if (element == targetBase) {
			result.push(pokemon[index]);
		}
	});
	console.log(result);
	return result;
}

$(document).ready(function() {
	bases.forEach(function(cryParent) {
		$('.baseHolder').append("<button type='button' class='btn btn-outline-primary' id='" + cryParent + "'>" + cryParent + "</button> ");
		$('#'+ cryParent).click(function() {
			var id = pokemonId(cryParent);
			var base = getBase(cryParent)

      var cryChildren = allWithBase(cryParent);

			$('#graph-title').html("<h2>#" + id + " " + cryParent + "</h2>");
      $('#graph').text('');
      cryChildren.forEach(function(cryChild) {

        // (x) speeds: all between 0-560
        // (y) pitches: between -728-3904

        var speed = getSpeed(cryChild);
        var pitch = getPitch(cryChild);
        
        var xPos = (speed/560)*100;
        var yPos = ((pitch+728)/4632)*100;

        console.log(cryChild);
        console.log("speed:", speed, "pitch", pitch);
        console.log("x:", xPos, "y:", yPos);

        var style = "position: absolute; left: " + xPos + "%; bottom: " + yPos + "%;";
        $('#graph').append("<a href='' id='" + cryChild + "' style='" + style + "'>" + cryChild + "</a>");
        $('#' + cryChild).click(function() {
          var childCry = new Audio('static/audio/' + pokemonId(cryChild) + '.mp3');
          childCry.play();
          return false;
        });
      });

			var audio = new Audio('static/audio/' + pokemonId(cryParent) + '.mp3');
			audio.play();

			return false;
		});
	});
});