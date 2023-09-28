var sentence = "";

var opers = []
var vals = []

function updateTable(s){
    sentence += s;
    document.getElementById("table").innerHTML = sentence
}

function onClickNum(num){
    if(num != "0" || sentence.length > 0){
        updateTable(num);
        
    } 

}


function onClickInp(o){

    if(sentence != "") {
        if(sentence != "") save(sentence)
        sentence = ""
        opers.push(o)
        document.getElementById("table").innerHTML = o
    }

}

function result(){

    save(sentence)

    r = vals[0]

    for(i = 1; i < vals.length; i++){
        
        op = opers[i-1]

        switch(op){
            case '+':
                console.log('+')
                r += vals[i];
                break;

            case '-': 
                r -= vals[i];
                break;

            case '*': 
                r *= vals[i];
                break;

            case '/': 
                r /= vals[i];
                break;

            
        }
        console.log(r)
    }
        document.getElementById("table").innerHTML = r

        //reset
        sentence = "";
        opers = []
        vals = []

    // console.log(math.evaluate('123 + 23 / 2'));
}


function save(v){
    vals.push(parseInt(v))
}