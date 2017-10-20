        
            
            function getRandomColor() {
              var hex = ['0', '1', '2', '3', '4', '5', '6', '7',
               '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    		      var color = '#',i;
              for (var i = 0; i < 6; i++ ) {
        	      color = color+hex[Math.floor(Math.random() * 16)];
    		      }
              return color;
            }
            
            function makeShapeAppear() {
              if (Math.random() > 0.5) {
                document.getElementById("shape").style.borderRadius = "50%";} 
              else {
                document.getElementById("shape").style.borderRadius = "0%";}
                
              var top=Math.random(); 
 					    top=top*300;
 					    var left=Math.random(); 
 					    left=left*500;
 					
 					    document.getElementById("shape").style.top=top+"px";
 					    document.getElementById("shape").style.left=left+"px";
 					    document.getElementById("shape").style.backgroundColor = getRandomColor();
 					    document.getElementById("shape").style.display="block";
              start = Date.now();  
 			      } 
            
            
            function appearAfterDelay(){
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
            }
            
            appearAfterDelay();
            
            document.getElementById("shape").onclick = function(){
                
                document.getElementById("shape").style.display = "none";
                
                var end = Date.now();
                
                var timeTaken = (end - start)/1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterDelay();
            }
    
