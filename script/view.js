updateView();
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <h1>Det var en gang en ${text1} ${text2} som ${text3} og så ${text4}. Snipp, snapp, snute, så var eventyret ${text5}.</h1>
    <div class="frame">
    <div class="word" onclick="pickWord(this)">mann</div>
    <div class="word" onclick="pickWord(this)">mus</div>
    <div class="word" onclick="pickWord(this)">pannekake</div>
    <div class="word" onclick="pickWord(this)">elefant</div>
    <div class="word" onclick="pickWord(this)">liten</div>
    <br/>
    <div class="word" onclick="pickWord(this)">flat</div>
    <div class="word" onclick="pickWord(this)">stor</div>
    <div class="word" onclick="pickWord(this)">død</div>
    <div class="word" onclick="pickWord(this)">knust</div>
    <div class="word" onclick="pickWord(this)">ute</div>
    
    
    
    </div>
    `;
}