window.onload = startGame;

//game idle screen
function startGame() { 
    var runningCharacter = document.getElementById("CharacterRunning");
        runningCharacter.classList.remove("face-right");
    var block = document.getElementById("block");
    var coin = document.getElementById("coin");
    var game = document.getElementById("game");
    var bird = document.getElementById("birdFlying");

    var finalScore = document.getElementById("score");
    var overScore = document.getElementById("scoreOver");
    var gameOver = document.getElementById("gameOver");
    var start = document.getElementById("start_btn")
    var welcomeMsg = document.getElementById("retro__intro")
    start.addEventListener("click", loadGame);

    var score = 0;
    //intro message is displayed
    finalScore.classList.remove("hidden");
    welcomeMsg.classList.remove("hidden");
    
    function loadGame() { 
        

        //Start the game at the beginning
        //Ensure everything is cleared
        
        //dont want to add class twice
        if (welcomeMsg.classList != "hidden") { 
            welcomeMsg.classList.add("hidden");
        }
        if (gameOver.classList != "hidden") { 
            gameOver.classList.add("hidden");
        }
        game.classList.remove("gameOverScreen");
        block.classList.remove("game__stop");
        coin.classList.remove("game__stop");
        
        

        //add bird after 5 seconds 
       
            bird.classList.remove("game__stop");
        


        game.classList.remove("gameOverScreen");

        
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
        
       
        
        
        /*collision detector
        function thats runs every 10 miliseconds to see if the character or block are touching
        we get the robot's and obsticle's position: relative; properties/coordinates
        then run if statement stating if the character and the block are touching, the game is over by
        stopping the animation properties*/

        var checkDead = setInterval(function(){
             //every YOU PRESS THE SPACEBAR - jump function is execuded. Found via stackoverflow.com -Jfiddlejs 
        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                jump();
            }
        }
            var runningCharacter = document.getElementById("CharacterRunning")
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            if(blockLeft<30 && blockLeft >0 && characterTop>=43) {
                block.classList.add("game__stop");
                runningCharacter.classList.remove("face-right")
                coin.classList.add("game__stop");
                bird.classList.add("game__stop");
      
                game.classList.add("gameOverScreen");
                    
                gameOver.classList.remove("hidden");
                        
                runningCharacter.classList.remove("endJump");
                    
            
                finalScore.innerHTML = scoreDisplay;
                
                




                

        
            }
        },10);
        
         /*SCORE DETECTOR
        function thats runs every 10 miliseconds to see if the character or block are touching
        we get the robot's and obsticle's position: relative; properties/coordinates
        then run if statement stating if the character and the block are touching, the game is over by
        stopping the animation properties*/
        var checkScore = setInterval(function(){
            var runningCharacter = document.getElementById("CharacterRunning")
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            var coinLeft = parseInt(window.getComputedStyle(coin).getPropertyValue("left"));
            var coinRight = parseInt(window.getComputedStyle(coin).getPropertyValue("left"));
            var coinTop = parseInt(window.getComputedStyle(coin).getPropertyValue("top"));
            if(coinLeft<=20 && coinTop >=80 && characterTop<=-8) {
                //if character and coin collide: this is what will happen
                score = score + 1;
                scoreDisplay = score.toString();
                scoreOver.innerHTML = scoreDisplay;
                finalScore.innerHTML = scoreDisplay;
                console.log(scoreDisplay);
                coin.classList.add("coinAnimate");
                setTimeout(function(){
                    coin.classList.remove("coinAnimate");
                }, 1000);
                
            }
        },10);

        //Lastly, collision detection for bird
        
        
        //dont want to play again button (refresh the page)
        var refresh_btn = document.getElementById("noBtn");

        //Refresh button
        refresh_btn.onclick = function () { 
            window.location.reload()
        }

        //play again 
        var yesPlay = document.getElementById("yesBtn");

        yesPlay.onclick = function () { 
            window.location.reload()
        }
}

}


