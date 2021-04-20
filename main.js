var inputs = [];
var inputs2 = [];

function paragraph1() {

    for(var i=1; i<=6; i++){
        inputs.push(document.getElementById("para1_box_"+i).value);
    }

    var remove_commas = inputs.join(". ");

    document.getElementById("para1").innerHTML = remove_commas;
}

function paragraph2() {
    for(var j=1; j<=6; j++){
        inputs2.push(document.getElementById("para2_box_"+j).value);
    }

    var remove_commas2 = inputs2.join(". ");

    document.getElementById("para2").innerHTML = remove_commas2;
}