/**
 * Exercice 1 :
 * Créez un tableau
 */
let array = [];
console.log(array);

/**
 * Exercice 2
 * Créez un tableau avec des valeurs initiales : "orange", "red", "pink", "blue"
 */
let array2 = new Array("orange", "red", "pink", "blue");
console.log(array2);
/**
 * Exercice 3
 * Créez un tableau ramplie de false et un maximum de 10 entrées
 */
let array3 = new Array(10).fill(false);
console.log(array3);
/**
 * Exercice 4
 * Créez un tableau et ajoutez-y plusieurs valeurs
 */


let array4=[];
array4.push(1);
console.log(array4);


/**
 * Exercice 5
 * Créez un ntableau et affichez la valeur deuxième valeur
 */
let array5=[1, 2];
array5[1];
array5[array5.lenght -1];
console.log(array5);

/**
 * Exercice 6
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la deuxième valeur
 */
 let array6 = [];
 array6.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j');
 array6.splice([1], 1);
 console.log(array6);


/**
 * Exercice 7 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la première valeur
 */
 let array7 = [];
 array7.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j');
 array7.splice([0], 1);
 // array shift
 console.log(array7);

/**
 * Exercice 8 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la dernière valeur
 */
 let array8 = [];
 array8.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j');
 array8.splice(-1, 1);
 // array.pop
 console.log(array8);

/**
 * Exercice 9 :
 * Créez une matrice (un tableau à deux dimension x et y) et initialisez les valeurs de x et y à 0
 */
let array9 = [
	[0, 0], 
	[0, 0], 
	[0, 0]
];


/**
 * Exercice 10 :
 * Créez une matrice (un tableau à deux dimension x et y) et affichez toute les valeurs
 */

for(let i = 0; i <= array9.lenght -1; i++) {
	console.log('ma position :', array9[i]);

}

array9.forEach(function(o) {
	console.log('ma position 2 :', o);

});

// exercice 11

const arr1 = ['Tab 1'];
const arr2 = arr1;
arr1.splice(0, 1);
console.log('arr 1:', arr1);
console.log('arr 2:', arr2);

const arrr1 = ['Tab1'];
const arrr2 = [...arrr1];
console.log('arrr 1:', arrr1);
console.log('arrr 2:', arrr2);