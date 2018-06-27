$(document).ready(function () {

    // declare 4 character vars and their hp
    var characters = {
        "rey": {
            name: "Rey",
            hp: 130,
            damage: 8
        },
        "yoda": {
            name: "Yoda",
            hp: 160,
            damage: 20
        },
        "kylo": {
            name: "Kylo Ren",
            hp: 110,
            damage: 5,
        },
        "vader": {
            name: "Darth Vader",
            power: 180,
            damage: 25,
        }
    }
    var characterChosen = false;
    var enemyChosen = false;
    var user;
    var enemy;
    var turnCounter = 0;
    var killCount = 0;

    // "You attacked ENEMY for # damage"
    // "ENEMY attacked you back # damage"
    // as you keep clicking your attack damage increments 
    // when your hp is negative, you lose
    // "You have been defeated. GAME OVER!"
    // restart button after you lose
    // when you reduce your defender's hp to negative, "You have defeated ENEMY, you can choose to fight another enemy."
    // when you click on attack after you kill one enemy, "No enemy here."
    // click on remaining enemies, move down to defender div
    // click attack, your attack damage remembers from last enemy and continues to increase by increments
    // "You won! GAME OVER!"

    // on click functions

    $(".character").on("click", function () {

        // TO DO: turn this into a function?      
        // pick 1 character
        if (characterChosen == false && enemyChosen == false && turnCounter == 0) {
            $(".choose-character").replaceWith($(this));
            $(this).children().last().css("background-color", "green");

            // move all divs to the right
            if ($(this).attr("id") == "yoda") {
                $("#rey").appendTo($(".box-3"));
            } else if ($(this).attr("id") == "kylo") {
                $("#yoda").appendTo($(".box-4"));
                $("#rey").appendTo($(".box-3"));
            } else if ($(this).attr("id") == "vader") {
                $("#kylo").appendTo($(".box-5"));
                $("#yoda").appendTo($(".box-4"));
                $("#rey").appendTo($(".box-3"));
            }

            // div box for "choose your battle" in box-2
            $("<div class='choose-battle'>Choose your battle</div>").appendTo($(".box-2"));
            $(".box-1").css("pointer-events", "none");
            characterChosen = true;
            return;
        }

        // pick villain
        if (characterChosen == true && enemyChosen == false && turnCounter == 0) {
            $(".choose-battle").replaceWith($(this));
            $(this).children().last().css("background", "red");

            if ($(".box-5").children().length == 0) {
                $(".box-4").children().appendTo($(".box-5"));
                $(".box-3").children().appendTo($(".box-4"));
            } else if ($(".box-4").children().length == 0) {
                $(".box-3").children().appendTo($(".box-4"));
            }

            $(".box-3").append("<img id='attack' src='assets/images/attack.png'>");
        }
        enemyChosen = true;
    })

    // fight by clicking on attack button
    $(".box-3").on("click", "#attack", function () {
        user = $(".box-1").children("div").eq(0).attr("id");
        enemy = $(".box-2").children("div").eq(0).attr("id");
        // access objects of obj array with [int]
        var userObj = characters[user];
        var enemyObj = characters[enemy];

        console.log(userObj[1]);

        if (userObj.hp > 0) {
            enemyObj = enemyObj.hp - userObj.damage * turnCounter;
            userObj = userObj.hp - enemyObj.damage;
            $("footer").html("<div>You attacked " + userObj.name + " for " + enemyObj.hp + " damage!</div>");
        } else {

        }

        turnCounter++;

        // attack enemy, deduct hp from enemy and user
        //  if userObj.hp > 0
        // your hp goes down per click
        // hp of enemy goes down


    })
})