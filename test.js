var game = {
	init: function(a){
			this.field = a
			game.start()
		}
	};
		
	game.start = function() {
		var j, k;
		matrix = game.getMassive(this.field)
    console.log(matrix.join('\n'));


    for(i=2; i<=10; i++){
      if (i % 2 == 0){
        j = prompt ("Ход крестиков! Введите первую координату: ")
        k = prompt ("Ход крестиков! Введите вторую координату: ")
        matrix[j][k] = "x";
        console.log(matrix.join('\n'));
      }
      else{
        j = prompt ("Ход ноликов! Введите первую координату: ")
        k = prompt ("Ход ноликов! Введите вторую координату: ")
        matrix[j][k] = "o";
        console.log(matrix.join('\n'));
      }

    if (((matrix[0][0]=="x")&&(matrix[0][1]=="x")&&(matrix[0][2]=="x"))||((matrix[1][0]=="x")&&(matrix[1][1]=="x")&&(matrix[1][2]=="x"))||((matrix[2][0]=="x")&&(matrix[2][1]=="x")&&(matrix[2][2]=="x"))||((matrix[0][0]=="x")&&(matrix[1][1]=="x")&&(matrix[2][2]=="x"))||((matrix[0][2]=="x")&&(matrix[1][1]=="x")&&(matrix[2][0]=="x"))||((matrix[0][1]=="x")&&(matrix[1][1]=="x")&&(matrix[2][1]=="x"))||((matrix[0][0]=="x")&&(matrix[1][0]=="x")&&(matrix[2][0]=="x"))){
        alert("Победа крестиков!");
        
        break;}
    if (((matrix[0][0]=="o")&&(matrix[0][1]=="o")&&(matrix[0][2]=="o"))||((matrix[1][0]=="o")&&(matrix[1][1]=="o")&&(matrix[1][2]=="o"))||((matrix[2][0]=="o")&&(matrix[2][1]=="o")&&(matrix[2][2]=="o"))||((matrix[0][0]=="o")&&(matrix[1][1]=="o")&&(matrix[2][2]=="o"))||((matrix[0][2]=="o")&&(matrix[1][1]=="o")&&(matrix[2][0]=="o"))||((matrix[0][1]=="o")&&(matrix[1][1]=="o")&&(matrix[2][1]=="o"))||((matrix[0][0]=="o")&&(matrix[1][0]=="o")&&(matrix[2][0]=="o"))){
        alert("Победа ноликов!");  
        break;}
    }
  };
   
    game.getMassive = function(){
      var matrix = [];
        for(var j = 0; j < this.field; j++) {
              matrix[j] = [];
            for(var k = 0; k < this.field; k ++) 
              matrix[j].push("-"); 
          }
        return matrix;
      };

game.init(10)