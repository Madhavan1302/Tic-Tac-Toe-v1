var btn=document.getElementsByClassName("btn-secondary");
var con=0 ;
var count=0;
function change(event){
    var space=event.target.textContent;
    console.log(event.target.id);
    if(con==0 && space==""){
        var element=document.getElementById(event.target.id);
        event.target.textContent="X";
        element.style.color="red";
        con=1;
    }
    else if(con==1 && space==""){
        var element=document.getElementById(event.target.id);
        element.style.color="yellow";
        event.target.textContent="O";
        con=0;
    }
    resultchecker();
}
function display(win){
    var res=document.getElementsByClassName("result")[0];
    var res1=document.getElementsByClassName("resalign")[0];
    var res2=document.getElementsByClassName("resscreen")[0];
    var user=document.getElementsByClassName("Userdet")[0];
    var wish=document.getElementById("wish");
    res2.style.display="block";
    res1.style.display="flex";
    user.textContent="User "+win+" has Won !";
    res.style.display="block";
    if(win==''){
    res2.style.display="block";
    res1.style.display="flex";
    user.textContent="No User has Won!";
    wish.textContent="Well Played"
    res.style.display="block";
    }
}
function resultchecker(){
    // selecting all the nine buttons for checking result
    var b0=document.getElementById("b-0");
    var b1=document.getElementById("b-1");
    var b2=document.getElementById("b-2");
    var b3=document.getElementById("b-3");
    var b4=document.getElementById("b-4");
    var b5=document.getElementById("b-5");
    var b6=document.getElementById("b-6");
    var b7=document.getElementById("b-7");
    var b8=document.getElementById("b-8");
    var win='';
    // getting text in all the nine buttons for checking result
    var bt0=b0.textContent;
    var bt1=b1.textContent;
    var bt2=b2.textContent;
    var bt3=b3.textContent;
    var bt4=b4.textContent;
    var bt5=b5.textContent;
    var bt6=b6.textContent;
    var bt7=b7.textContent;
    var bt8=b8.textContent;
    if(bt0==bt1 && bt1==bt2){
        win=bt0;
    }
    else if(bt0==bt3 && bt3==bt6){
        win=bt0;
    }
    else if(bt1==bt4 && bt4==bt7){
        win=bt1;
    }
    else if(bt2==bt5 && bt5==bt8){
        win=bt2;
    }
    else if(bt3==bt4 && bt4==bt5){
        win=bt3;
    }
    else if(bt6==bt7 && bt7==bt8){
        win=bt6;
    }
    else if(bt0==bt4 && bt4==bt8){
        win=bt0;
    }
    else if(bt2==bt4 && bt4==bt6){
        win=bt2;
    }
    count++;
    // calling display function for displaying the result
    if(win!=''){
        display(win);
    }
    else if(count==9 && win==''){
        display(win);
    }
}