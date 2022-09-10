let x=[document.createElement('h1'),document.createElement('h1'),document.createElement('h1'),document.createElement('h1'),document.createElement('h1')];
let o=[document.createElement('h1'),document.createElement('h1'),document.createElement('h1'),document.createElement('h1'),document.createElement('h1')];
let be1=document.getElementById('b1');
let be2=document.getElementById('b2');
let be3=document.getElementById('b3');
let be4=document.getElementById('b4');
let be5=document.getElementById('b5');
let be6=document.getElementById('b6');
let be7=document.getElementById('b7');
let be8=document.getElementById('b8');
let be9=document.getElementById('b9');
let b1='n',b2='n',b3='n',b4='n',b5='n',b6='n',b7='n',b8='n',b9='n';
let t=1,xi=0,oi=0;
let i=0;
let p1=document.getElementById('announcem1'),p2=document.getElementById('announcem2'),pd=document.getElementById('announcem3');
let plac1=document.getElementById('plast1'),plac2=document.getElementById('plast2');
let p1s=false,p2s=false,pds=false;
let xl=[],ol=[];
let xil=[],oil=[];
let bten=document.getElementById("btun");
//console.log(b1);
for(i=0;i<5;i++){
    x[i].textContent="X";
    x[i].classList.add("symblx");
}

for(i=0;i<5;i++){
    o[i].textContent="O";
    o[i].classList.add("symblo");
}

let p1w=function(){
    bten.classList.remove("d-none");
    p1.classList.remove("d-none");
    p1s=true;
    b1='b';
    b2='b';
    b3='b';
    b4='b';
    b5='b';
    b6='b';
    b7='b';
    b8='b';
    b9='b';
};

let p2w=function(){
    p2.classList.remove("d-none");
    bten.classList.remove("d-none");
    p2s=true;
    b1='b';
    b2='b';
    b3='b';
    b4='b';
    b5='b';
    b6='b';
    b7='b';
    b8='b';
    b9='b';
};

let pdw=function(){
    pd.classList.remove("d-none");
    bten.classList.remove("d-none");
    pds=true;
};

let statcall=function(){
    if(t===1){
        plac1.classList.remove('d-none');
        plac2.classList.add('d-none');
    }
    else if(t===2){
        plac2.classList.remove('d-none');
        plac1.classList.add('d-none');
    }
};

let wincheck=function(){
    statcall();
    if(b1===b2 && b2===b3){
        if(b1==='x'){
            p1w();
        }
        else if(b1==='o'){
            p2w();
        }
    }
    else if(b4===b5 && b5===b6){
        if(b4==='x'){
            p1w();
        }
        else if(b4==='o'){
            p2w();
        }
    }
    else if(b7===b8 && b8===b9){
        if(b7==='x'){
            p1w();
        }
        else if(b7==='o'){
            p2w();
        }
    }
    else if(b1===b4 && b4===b7){
        if(b1==='x'){
            p1w();
        }
        else if(b1==='o'){
            p2w();
        }
    }
    else if(b2===b5 && b5===b8){
        if(b2==='x'){
            p1w();
        }
        else if(b2==='o'){
            p2w();
        }
    }
    else if(b3===b6 && b6===b9){
        if(b3==='x'){
            p1w();
        }
        else if(b3==='o'){
            p2w();
        }
    }
    else if(b1===b5 && b5===b9){
        if(b1==='x'){
            p1w();
        }
        else if(b1==='o'){
            p2w();
        }
    }
    else if(b3===b5 && b5===b7){
        if(b3==='x'){
            p1w();
        }
        else if(b3==='o'){
            p2w();
        }
    }
    else if(b1!='n' && b2!='n' && b3!='n' && b4!='n' && b5!='n' && b6!='n' && b7!='n' && b8!='n' && b9!='n'){
        pdw();
    }
};

/*if(b1===b2 && b2===b3 && b3!='c'){
    console.log("yas1");
}*/


function bx1(){
    if(b1==='n'){
        if(t===1){
            t=t+1;
            b1='x';
            be1.appendChild(x[xi]);
            xil.push(x[xi]);
            xi++;
            xl.push(be1);
        }
        else if(t===2){
            t=t-1;
            b1='o';
            be1.appendChild(o[oi]);
            oil.push(o[oi]);
            oi++;
            ol.push(be1);
        }
        wincheck();
    }
}

function bx2(){
    if(b2==='n'){
        if(t===1){
            t=t+1;
            b2='x';
            be2.appendChild(x[xi]);
            xil.push(x[xi]);
            xi++;
            xl.push(be2);
        }
        else if(t===2){
            t=t-1;
            b2='o';
            be2.appendChild(o[oi]);
            oil.push(o[oi]);
            oi++;
            ol.push(be2);
        }
        wincheck();
    }
}

function bx3(){
    if(b3==='n'){
        if(t===1){
            t=t+1;
            b3='x';
            be3.appendChild(x[xi]);
            xil.push(x[xi]);
            xi++;
            xl.push(be3);
        }
        else if(t===2){
            t=t-1;
            b3='o';
            be3.appendChild(o[oi]);
            oil.push(o[oi]);
            oi++;
            ol.push(be3);
        }
        wincheck();
    }
}

function bx4(){
    if(b4==='n'){
        if(t===1){
            t=t+1;
            b4='x';
            be4.appendChild(x[xi]);
            xil.push(x[xi]);
            xi++;
            xl.push(be4);
        }
        else if(t===2){
            t=t-1;
            b4='o';
            be4.appendChild(o[oi]);
            oil.push(o[oi]);
            oi++;
            ol.push(be4);
        }
        wincheck();
    }
}

function bx5(){
    if(b5==='n'){
        if(t===1){
            t=t+1;
            b5='x';
            be5.appendChild(x[xi]);
            xil.push(x[xi]);
            xi++;
            xl.push(be5);
        }
        else if(t===2){
            t=t-1;
            b5='o';
            be5.appendChild(o[oi]);
            oil.push(o[oi]);
            oi++;
            ol.push(be5);
        }
        wincheck();
    }
}

function bx6(){
    if(b6==='n'){
        if(t===1){
            t=t+1;
            b6='x';
            be6.appendChild(x[xi]);
            xil.push(x[xi]);
            xi++;
            xl.push(be6);
        }
        else if(t===2){
            t=t-1;
            b6='o';
            be6.appendChild(o[oi]);
            oil.push(o[oi]);
            oi++;
            ol.push(be6);
        }
        wincheck();
    }
}

function bx7(){
    if(b7==='n'){
        if(t===1){
            t=t+1;
            b7='x';
            be7.appendChild(x[xi]);
            xil.push(x[xi]);
            xi++;
            xl.push(be7);
        }
        else if(t===2){
            t=t-1;
            b7='o';
            be7.appendChild(o[oi]);
            oil.push(o[oi]);
            oi++;
            ol.push(be7);
        }
        wincheck();
    }
}

function bx8(){
    if(b8==='n'){
        if(t===1){
            t=t+1;
            b8='x';
            be8.appendChild(x[xi]);
            xil.push(x[xi]);
            xi++;
            xl.push(be8);
        }
        else if(t===2){
            t=t-1;
            b8='o';
            be8.appendChild(o[oi]);
            oil.push(o[oi]);
            oi++;
            ol.push(be8);
        }
        wincheck();
    }
}

function bx9(){
    if(b9==='n'){
        if(t===1){
            t=t+1;
            b9='x';
            be9.appendChild(x[xi]);
            xil.push(x[xi]);
            xi++;
            xl.push(be9);
        }
        else if(t===2){
            t=t-1;
            b9='o';
            be9.appendChild(o[oi]);
            oil.push(o[oi]);
            oi++;
            ol.push(be9);
        }
        wincheck();
    }
}

function res(){
    if(p1s){
        p1.classList.add("d-none");
        p1s=false;
    }
    else if(p2s){
        p2.classList.add("d-none");
        p2s=false;
    }
    else if(pds){
        pd.classList.add("d-none");
        pds=false;
    }
    let m,j,tem,ti;
    m=xl.length;
    //console.log(xl[0]);
    //console.log(xil[0]);
    //xl[0].removeChild(xil[0]);
    for(j=0;j<m;j++){
        tem=xl.pop();
        ti=xil.pop()
        tem.removeChild(ti);
    }
    m=ol.length;
    for(j=0;j<m;j++){
        tem=ol.pop();
        ti=oil.pop()
        tem.removeChild(ti);
    }
    b1='n';
    b2='n';
    b3='n';
    b4='n';
    b5='n';
    b6='n';
    b7='n';
    b8='n';
    b9='n';
    /*console.log(xl);
    console.log(xil);
    console.log(ol);
    console.log(oil);*/
    t=1;
    /*let tempx=[document.createElement('h1'),document.createElement('h1'),document.createElement('h1'),document.createElement('h1'),document.createElement('h1')];
    let tempo=[document.createElement('h1'),document.createElement('h1'),document.createElement('h1'),document.createElement('h1'),document.createElement('h1')];
    for(i=0;i<5;i++){
        tempx[i].textContent="X";
        tempx[i].classList.add("symblx");
    }
    
    for(i=0;i<5;i++){
        tempo[i].textContent="O";
        tempo[i].classList.add("symblo");
    }
    for(i=0;i<5;i++){
        x[i]=tempx[i];
        o[i]=tempo[i];
    }
    console.log(x);
    console.log(o);*/
    xi=0;
    oi=0;
    bten.classList.add("d-none");
    statcall();
}


