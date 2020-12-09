window.onload = startGame;

//game idle screen
function startGame() { 
    var runningCharacter = document.getElementById("CharacterRunning");
        runningCharacter.classList.remove("face-right");
    var block = document.getElementById("block");
    var finalScore = document.getElementById("score");
    var scoreMsg = document.getElementById("retro__score");
    var start = document.getElementById("start_btn")
    var welcomeMsg = document.getElementById("retro__intro")
    start.addEventListener("click", loadGame);

    //intro message is displayed
    finalScore.classList.remove("hidden");
    welcomeMsg.classList.remove("hidden");
    
    function loadGame() { 


        //Start the game at the beginning
        //Ensure everything is cleared
        
        if (finalScore.classList != "hidden") { 
            finalScore.classList.add("hidden");
        }
        //dont want to add class twice
        if (welcomeMsg.classList != "hidden") { 
            welcomeMsg.classList.add("hidden");
        }
        block.classList.remove("game__stop")
        
        //When game starts - Flo starts facing right
        runningCharacter.classList.add("face-right");
    
        //Make character jump 
        function jump() { 
            /*only want to add class if class isnt there*/
            if (character.classList != "animate") { 
                character.classList.add("animate");
            }
            //We add animation that moves character up via pixels
            character.classList.add("animate");
            setTimeout(function(){ 
                character.classList.remove("animate")
            },500);
        }
        
        //every YOU PRESS THE SPACEBAR - jump function is execuded. Found via stackoverflow.com -Jfiddlejs 
        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                jump();
            }
        }
        
        
        /*collision detector
        function thats runs every 10 miliseconds to see if the character or block are touching
        we get the robot's and obsticle's position: relative; properties/coordinates
        then run if statement stating if the character and the block are touching, the game is over by
        stopping the animation properties*/

        var checkDead = setInterval(function(){
            var runningCharacter = document.getElementById("CharacterRunning")
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            if(blockLeft<30 && blockLeft >0 && characterTop>=43) {
                block.classList.add("game__stop");
                runningCharacter.classList.remove("face-right")
                finalScore.classList.remove("hidden");
                scoreMsg.classList.remove("hidden");

                

        
            }
        },10);
        
        
        //play again button (refresh the page)
        var refresh_btn = document.getElementById("refresh_btn");
        

        //Refresh button
        refresh_btn.onclick = function () { 
            window.location.reload()
        }
}

}


