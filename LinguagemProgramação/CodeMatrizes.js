var animais = [];

animais.push(["Cachorro", "Mamífero", 1]);
animais.push(["Gato", "Felino", 5]);
animais.push(["Onça", "Felino", 7]);
animais.push(["Arara", "Ave", 3]);
animais.push(["Jacaré", "Réptil", 50]);

console.log("Matriz Animais");
for (var i = 0; i < animais.length; i++) {
    var animal = animais[i];
    var nome = animal[0];
    var especie = animal[1];
    var idade = animal[2];

    console.log("Animal: " + nome + ", Espécie: " + especie + ", Idade: " + idade + " anos");
}

    console.log("Animal: " + nome + ", Espécie: " + especie + ", Idade: " + idade + " anos");

