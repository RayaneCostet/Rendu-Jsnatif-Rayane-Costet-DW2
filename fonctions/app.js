/**
 * Exercice 1 :
 * créer une fonction avec un argument, qui affiche l’argument
 */
function test(argu) {
	console.log(argu);
}
test("argument") ;
console.log(test);
/**
 * Exercice 2 :
 * créer une fonction qui prend un nombre en argument et qui le multiplie par deux et retourne le résultat.
 */
function test2(num) {
	return num * 2;
}
console.log(test2(4));

/**
 * Exercice 3 :
 * créer une fonction qui détermine si le nombre passé en argument est pair ou impaire.
 */
function modulo(nb) {
	if (nb % 2) {
		return "Impaire";
	} else {
		return "pair";
	}
}
console.log(modulo(3));
console.log(modulo(4));

/**
 * Exercice 4 :
 * Créer une fonction qui s’invoque elle-même
 */
 (function bonjour(a) {
 	console.log('bonjour :', a);
 })(1);

/**
 * Exercice 5 :
 * Affichez la liste des arguments dans un tableau, sans directement utilisez les arguments en eux même
 */
function displayArg(a, b, c) {
	console.log(arguments);
}

displayArg(1, 2, 3);
/**
 * Exercice 6 :
 * Reproduire la suite de fibonnachi : 1-1-2-3-5-8-13-21
 */


function fibonacci(nb) {
	if(nb < 2) {
		return nb;
	}
	console.log('fib:', nb);
	return fibonacci(nb -1) + fibonacci(nb -2);
}

console.log(fibonacci(12));

 const arr = [];

 function fibonacci(nb = 0, stop) {
