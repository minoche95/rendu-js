let perso1 = { // Définition du perso 1
    name: "Boris",
    hp: 100,
    atk: 40,
    precision: 0.4
}

let perso2 = { // Définition du perso 2
    name: "Bob",
    hp: 70,
    atk: 20,
    precision: 0.7
}

console.log(`${perso1.name} a ${perso1.hp} PV, une attaque de ${perso1.atk} et une précision de ${perso1.precision}`) // Annonce des stats du perso 1
console.log(`${perso2.name} a ${perso2.hp} PV, une attaque de ${perso2.atk} et une précision de ${perso2.precision}`) // Annonce des stats du perso 1

function precision(self) { // Fonction permettant de savoir si le perso peut effectuer son attaque 
    if (Math.random() < self.precision) {
        return true
    } else {
        return false
    }
}

function attack(self, target) { // Fonction permettant d'attaquer qui appelle la fonction 'precision' pour savoir si l'attaque passe
    console.log(`${self.name} attaque ${target.name}`)  
    if (precision(self) == true) {
        target.hp -= self.atk 
        console.log(`${self.name} inflige ${self.atk} dégâts. Il reste ${target.hp} PV à ${target.name}.`)
    } else {
        console.log(`L'attaque a raté`)
    }
}


while (perso1.hp > 0 && perso2.hp > 0) { // Boucle permettant d'effectuer les attaques a la chaine
    attack(perso1, perso2)
    if (perso2.hp <= 0) {
        console.log(`${perso2.name} est KO`)
        console.log(`${perso1.name} remporte la partie`)
        break
    }

    attack(perso2, perso1) 
    if (perso1.hp <= 0) {
        console.log(`${perso1.name} est KO`)
        console.log(`${perso2.name} remporte la partie`)
        break
    }
}