/**
 * Exercice 1 :
 * Écrire un code qui affiche en fonction de l’âge, majeur ou mineur.
 */
const age=prompt(message: 'ton age ?');

if (age >=18) {
	alert('majeur');
} else if(age< 18) {
	alert('mineur');
}

/**
 * Exercice 2 :
 * Ecrire un code qui affiche en fonction de l’heure (entre 0 et 24) : Bon réveil (entre 0 et 8), Bonjour (entre 8 et 17),
 * Bonsoir (entre 17 et 22) et Bonne nuit (entre 22 et 8) et par défaut il affichera  Heuu.
 */

const hour=prompt( message: 'ton heure ?');

if (hour >=0 && hour hour <= 8) {
	alert('Bon réveil');

} else if(hour > 8 && hour <= 17) {
	alert('Bonjour');
} 

switch(hour) {
	case (hour >= 13);
	case (hour >= 0 && hour <= 17);
		alert('Bon réveil');
	break;

	default:
		alert('Bonne nuit');
	break;
}


/**
 * Exercice 3 :
 * Même que exercice 1, mais utilisé les conditions ternaires
 */

const age=prompt( message: 'ton age ?') >= 18 ? alert('majeur') : alert('mineur');



