
function set_names() {
    console.log("player1_storage");
    player1_storage = localStorage.getItem("player1");
    player2_storage = localStorage.getItem("player2");
    //console.log("player1_storage :" + player1_storage);
    //console.log("player2_storage :" + player2_storage);
    player1_score=0;
    player2_score=0;

    document.getElementById("player1_name").innerHTML= player1_storage + " : ";
    document.getElementById("player2_name").innerHTML= player2_storage + " : ";

    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;

    document.getElementById("player_question").innerHTML = "Question turn - " + player1_storage;
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_storage;
}

function addUser(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);

    window.location = "game.html"

    hide();
}
var actual_answer;

function Send(){
    console.log("this function is working");
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    actual_answer= parseInt(number_1) * parseInt(number_2);

    question_number = "<h4>" + number_1 + " x " + number_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='Answer'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";

    localStorage.setItem("number_1", number_1);
    localStorage.setItem("number_2", number_2);

}


question_turn = "player1_name";
answer_turn = "player2_name";

function check(){
    get_answer = document.getElementById("Answer").value;
    //console.log("get_answer : " + get_answer);
    //console.log("actual_answer : " + actual_answer);
    if (get_answer == actual_answer) {
        if (answer_turn == "player2_name") 
        {
            
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
            answer_turn = "player1_name";
        }
        else
        {
            
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;  
            answer_turn = "player2_name";
        }
    }
    if (question_turn == "player1_name") 
    {
        question_turn == "player2_name";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_storage;
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_storage;
    }
    else
    {
        question_turn == "player1_name";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_storage;
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_storage;
    }
}