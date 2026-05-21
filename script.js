let currentPage = 1;
let score = 0;

function nextPage(){

    document.getElementById(`page${currentPage}`).classList.remove("active");

    currentPage++;

    document.getElementById(`page${currentPage}`).classList.add("active");

    if(currentPage === 8){
        document.getElementById("finalScore").innerText = score;
    }
}

function checkPage3(){

    let points = 0;

    if(document.getElementById("q1").value.toLowerCase() === "brag"){
        points++;
    }

    if(document.getElementById("q2").value.toLowerCase() === "plan"){
        points++;
    }

    if(document.getElementById("q3").value.toLowerCase() === "fence"){
        points++;
    }

    if(document.getElementById("q4").value.toLowerCase() === "voice"){
        points++;
    }

    score += points;

    document.getElementById("result3").innerHTML =
    `<h3>You got ${points}/4 correct!</h3>`;
}

function checkPage4(){

    let points = 0;

    if(document.getElementById("s1").value.toLowerCase() === "hedgehog"){
        points++;
    }

    if(document.getElementById("s2").value.toLowerCase() === "clever"){
        points++;
    }

    if(document.getElementById("s3").value.toLowerCase() === "race"){
        points++;
    }

    score += points;

    document.getElementById("result4").innerHTML =
    `<h3>You got ${points}/3 correct!</h3>`;
}

function checkPage5(){

    let points = 0;

    if(document.getElementById("m1").value === "rabbit"){
        points++;
    }

    if(document.getElementById("m2").value === "smart"){
        points++;
    }

    if(document.getElementById("m3").value === "strict"){
        points++;
    }

    score += points;

    document.getElementById("result5").innerHTML =
    `<h3>You got ${points}/3 correct!</h3>`;
}

function showRecallMessage(){

    score += 3;

    document.getElementById("recallMessage").innerHTML =
    `<h3>🌟 Great thinking and writing!</h3>`;
}

function checkOrder(){

    const answer =
    document.getElementById("order1")
    .value
    .toLowerCase();

    if(answer.includes("hare bragged")){

        score++;

        document.getElementById("orderResult").innerHTML =
        `<h3>✔️ Correct!</h3>`;

    }else{

        document.getElementById("orderResult").innerHTML =
        `<h3>❌ Try again!</h3>`;
    }
}
