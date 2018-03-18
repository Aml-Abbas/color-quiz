var questions=[
    ['1- Which is your favorite animal?','Panda','Dog','Cat','Birds'],
    ['2- Which is your favorite movie?','The advengers','The hunger games','The maze runner','The lord of the ring'],
    ['3- Which picture do you like?','Sea','Baby','Sky','Ocean'],
    ['4- Which color do you prefer?','purple','green','blue','orange'],
    ['5- What would you do if you meet your Ex?','pretend that everything is ok with you','be very friendly towards him or her','keep a distance','Not care at all'],
    ['6- Which is your favorite instrument?','Drams','Piano','Violin','Gitar']
];
var a=0, b=0, c=0, d=0, color, pos=0;

function _(x){
    return document.getElementById(x);
}

function buildquestion(){

   if(pos>=questions.length){
    if (a> b && a>c && a>d){
        color= 'Blue';
    }
    else if (a< b && b>c && b>d){
        color='Red';
    }
    else if (a< c && b<c && c>d){
        color='Black';
    }
    else if (d>a && d>b && d>c){
        color='White';
    }
    else {
        color='a mix of colors';
    }
    _('question').innerHTML='The game is completed.';
    _('answers').innerHTML='Your color is: '+ color;
    return false;
   }
   var ch1=questions[pos][1];
   var ch2=questions[pos][2];
   var ch3=questions[pos][3];
   var ch4=questions[pos][4];
_('question').innerHTML=questions[pos][0];
_('answers').innerHTML= '<input type="radio" name="choices" value="a">'
+ch1+'<br>'+'<input type="radio" name="choices" value="b">'
+ch2+'<br>'+'<input type="radio" name="choices" value="c">'
+ch3+'<br>'+'<input type="radio" name="choices" value="d">'
+ch4+'<br><br><br>'+'<button onclick="checkanswer()">Next Question</button>';
  
}
function checkanswer(){
   var choices=document.getElementsByName('choices');
    for( var i=0; i<choices.length;i++){
        if (choices[i].checked){
            var choice= choices[i].value;
            console.log(choice);
        }
    }
    if( choice=='a'){
        a++;
    }
    else if (choice='b'){
        b++;
    }
    else if (choice='c'){
        c++;
    }
    else{
        d++;
    }
  console.log(a + b + c+ d);
    pos++;
    buildquestion();
   
}
window.addEventListener('load', buildquestion,false);