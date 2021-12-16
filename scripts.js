
let board = [ [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0] ];




let currentPlayer = 1;

const player1 = 1;

const player2 = 2;






/* 0= empty cell 1=player1 2=player2 */

var turn = 1;


//img.classList.add(red-filled.jpg)



function fillCell(id) {
  let text = id;
  var row = text.substring(1,2);
  var cell = text.substring(3,4);
 
  
  if(board[row-1][cell-1] == 0){
    
    if(currentPlayer==player1){
      
      text= checkDrop(cell);
      row = text.substring(1,2);
      cell = text.substring(3,4);
      
      
        board[row-1][cell-1] = currentPlayer;
        document.getElementById(text).src = "cell-filled-with-red-piece.png";
        currentPlayer=player2;
    }
    else{
      
      
        text= checkDrop(cell);
      row = text.substring(1,2);
      cell = text.substring(3,4);
      
     
        board[row-1][cell-1] = currentPlayer;
         document.getElementById(text).src = "cell-filled-with-black-piece.png";
         currentPlayer=player1;
        } 
    
     let winner = checkWin(board);
        if(winner== 0){
                //do nothing
        }
        else if(winner== 1){
                alert("player one wins");
        }
        else if(winner==2){
                alert("player two wins");
        }
    
}
else{
     alert("You cannot do that!");
}
  /*
  document.getElementById(id).src = "red-filled.jpg";
  if(row == "r1") {
    r1[cell] = turn;
    changeTurn();
  }
  */
  
}


function checkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a ==b) && (a == c) && (a == d));
}

 

function changeTurn() {
  if(turn == 1) {
    turn = 2; 
  } else if(turn == 2) {
    turn = 1;
  }
}





function checkWin(bd){
        // Check down
    for (r = 0; r < 3; r++)
        for (c = 0; c < 7; c++)
            if (checkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]))
                return bd[r][c];

    // Check right
    for (r = 0; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (checkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]))
                return bd[r][c];

    // Check down-right
    for (r = 0; r < 3; r++)
        for (c = 0; c < 4; c++)
            if (checkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3]))
                return bd[r][c];

    // Check down-left
    for (r = 3; r < 6; r++)
        for (c = 0; c < 4; c++)
            if (checkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3]))
                return bd[r][c];

    return 0;
  
  
}

/*
function checkTie() {
  
}
*/

function checkDrop(cell){
        for(let r=0; r<board.length; r++){
                if(board[r][cell-1]== 0){
                        //alert(board[r][cell-1] + "r" + r + "cell" + cell)
                                return "r" + (r+1) + "c" + (cell);
                }
        }
}




function startNewGame() {
  board = [ [0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0],
                 [0, 0, 0, 0, 0, 0, 0] ];
  
  for(let r=0; r<board.length; r++){
                         for(let c=0; c<board[r].length; c++){
                                 document.getElementById("r"+(r+1)+"c"+(c+1)).src= "board-cell.png";
                         }
                 }
                 
                 alert("board reset");
}
  
