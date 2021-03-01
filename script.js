var knopka = document.getElementById("Knopka");
var education = document.getElementById("Education");
var networth = document.getElementById("FamilyNetWorth");
var skills = document.getElementById("Skills");
var age = document.getElementsByName("Age");
var abilities = document.getElementsByClassName("Abilities");
var gossips = document.getElementsByClassName("Gossips");
var checkedAbilities = [], checkedGossips = [];
var Ed, net, ag, sk, answer;
    let price = document.getElementById("startingBil");
let bride = {
    bride_name:     name,
    bride_price: amount,
    letter_to_mybride: love_letter
    }
button.addEventListener("click", solve);
function solve() {
    let name = document.getElementById("name").value;
    let letter = document.getElementById("love_letter").value;
    answer = parseFloat(price.value);
    sk=0;
    console.log(education.value);
    Ed = parseFloat(education.value);
    console.log(networth.value);
    net = parseFloat(networth.value);
    for(var l=0; l<abilities.length;l++){
        if(abilities[l].checked === true){
            checkedAbilities.push(parseFloat(abilities[l].value));
        }
    }
    for(var l =0; l< checkedAbilities.length;l++){
        sk += checkedAbilities[l];
    }
    console.log(sk);
    for(var l=0; l<age.length;l++){
        if(age[l].checked === true){
            age = parseFloat(age[l].value);
            break;
        }
    }
    console.log(ag);
    answer = Math.round(answer*Ed);
    answer = Math.round(answer*net);
    answer = Math.round(answer+sk);
    answer = Math.round(answer*ag);
    for(var l=0; l<gossips.length;l++){
        if(gossips[l].checked === true){
            checkedGossips.push(parseFloat(gossips[l].value));
        }
    }
    for(var l =0; l< checkedGossips.length;l++){
        if(checkedGossips[l]%1==0 || checkedGossips[l]==0){
            answer = answer + checkedGossips[l];
        } else answer *= checkedGossips[l];
    }
    console.log(Math.round(answer));
    if(isNaN(Math.round(answer)) || answer==0 || name.length == 0){
        alert("Incorrect text");
        location.reload();
    } else
    document.getElementById("answer").innerHTML=`The final amount of ${name} is ${sum}$. My Congratulations! "`;
}
