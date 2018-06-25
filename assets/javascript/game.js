$(document).ready(function () {


    // declare 4 character vars and their hp
    var rey = {
        name: "Rey",
        hp: 130,
        damage: 8,
    };
    var yoda = {
        name: "Yoda",
        hp: 160,
        damage: 20,
    };
    var kyloRen = {
        name: "Kylo Ren",
        hp: 110,
        damage: 5,
    };
    var darthVader = {
        name: "Darth Vader",
        power: 180,
        damage: 25,
    };
    var characterChosen = false;
    var round = 0;

    // functions
    // pick 1 character, move other 3 down a div under enemies div
    function chooseHero() {


        // move all divs to the right

        // div box for "choose your battle" in box-2

        // move
        characterChosen = true;
    }

    // click on 1 of the 3 enemies, move that down to defender div

    // fight by clicking on attack button
    // hp of enemy goes down, your hp goes down per click
    // "You attacked ENEMY for # damage"
    // "ENEMY attacked you back # damage"
    // as you keep clicking your attack damage increments 
    // when your hp is negative, you lose
    // "You have been defeated. GAME OVER!"

    // restart button after you lose
    function newGame() {
        characterChosen = false;
        round = 0;

    }


    // when you reduce your defender's hp to negative, "You have defeated ENEMY, you can choose to fight another enemy."
    // when you click on attack after you kill one enemy, "No enemy here."
    // click on remaining enemies, move down to defender div
    // click attack, your attack damage remembers from last enemy and continues to increase by increments
    // "You won! GAME OVER!"

    // on click functions
    $(".character").on("click", function () {
        if (characterChosen == false && round == 0) {
            $(".box-1").replaceWith($(this));
        }
    })


})