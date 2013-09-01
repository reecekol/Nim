$(document).ready(function(){
	        
	var numStones=15;
	var playerTurn=1;
	 		
        var numSelectedStones;
			
			
	var delay=200;
			
			
       //handle selecting stones
			
       $(".stone").click(function(){
		       
		   numSelectedStones=$(".selected").length;
			   
		   numStones=numStones-1;

		   if (checkValidMove()){

		         $(this).addClass("selected");

		      }
		   })
			
		   $("button").click(function(){
		      
			  
		      hideStones();
			   
	            //updatePlayerTurn();
		      checkForWin();
			   
		      getComputerMove();      		  
		      // updatePlayerTurn();
		      checkForWin();
		 });
			
			
			
		 function checkValidMove(){
			
			  if(numSelectedStones>=3)
			  {
			    return false;
			  }
			 
			  return true;
			}
				
			
		 function hideStones(){
			  
                         $("div.selected").removeClass("selected").hide(200);

			 numStones= numStones-$("div.selected").length;

		 }
			
		function checkForWin(){

			 if(numStones===0)
			 {
			   alert(PlayerTurn+ " Won ");
			 }
			
		}
			
			

		 
		 function getComputerMove(){		 
			
		     console.log(numStones);
			 
			if(numStones>4)
			{
			  selectedStones=numStones%4;
			}
			else{
			  selectedStones=numStones;
			}
			 
			numStones-=selectedStones;
			 
			 
			
			$(".stone:not(:hidden)").each(function(i,element){
			  
			   
			   if(i===4)
			   {
			     return false;
			   }
			   
                  window.setTimeout(function(){
			  
			   $(element).addClass("selected");
			   
			  },1000);
			
			
			 window.setTimeout(function(){
			  
			    hideStones();
			   
			  },3000);
			  
			});
			 
			
		 }
		  
		  
		  
		   function updatePlayerTurn(){
			   
			   if(playerTurn===1){
			      
				  playerTurn=2;

                }

              else if(playerTurn===2){
                
		   playerTurn=1;
 
               }			   
			 
 	  }
     });