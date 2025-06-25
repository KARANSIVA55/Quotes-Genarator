Quotes = {
    0 : "You don’t need more time, you need more focus.",
    1 : "Small steps every day are bigger than big dreams once a year.",
    2 : "You weren’t born ready—you become ready by trying.",
    3 : "Confidence isn’t loud. It’s quiet and consistent.",
    4 : "When you can’t find the light, become one.",
    5 : "You grow the most when nobody’s clapping.",
    6 : "You grow the most when nobody’s clapping.",
    7 : "Success isn’t found. It’s built, brick by boring brick.",
    8 : "Healing isn’t linear—but neither is progress.",
    9 : "Start before you’re fully prepared—most people never are.",
}
function Genration(){
    let qid;
    qid = Math.floor(Math.random() * 10);
    console.log(qid)
    document.getElementById("txt").value = Quotes[qid];
}