let soe_d=document.getElementById("soe")
let count=0
function domore(){count= count+1; 
    soe_d.innerText=count};


let nameChange=document.getElementById("NC");
let changeTo = " hey yo !";
function changeTheName(){nameChange.innerText=changeTo; 
    }

let magone=document.getElementById('newtest')
let ppp= "this is photo now"
let pppp= " mingalar bar"
function newtext(){magone.innerText= ppp; 
    ppp=pppp;pppp=magone.innerText}

let saver=document.getElementById('save-el')
let typed= 0
function typec(){saver.innerText+=count;
soe_d.innerText=0; count=0
}