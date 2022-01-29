var i=0; 
function myFunction() {    
    
    let x = document.getElementById("myText").value;  
    let t=document.getElementsByClassName("demo");
    t[i].innerHTML=x;

}
function del(){
    var th=this.parentNode;
    th.parentNode.remove();
    i-=1;
}
function cut(){ 
    
    if(this.style.textDecoration!="line-through"){
        this.style.textDecoration="line-through";
        console.log("hhhi");
    }
    else{
        this.style.textDecoration="none" ;
    }
}
function edit(){
    let x = document.getElementById("myText");  
    var th=this.parentNode;
    var tt=th.parentNode.firstElementChild;
    var s=tt.innerHTML;
    x.value=s;
    th.parentNode.remove();
    i-=1;
}

function addCode() {
    let x = document.getElementById("myText").value;  
    if(x==""){
        window.alert("Empty list can't be added");
        return;
    }
    var sec=document.getElementsByClassName("section")[0];
    var element=document.createElement("div");
    var elem=document.createElement("span");
    elem.classList.add("demo");
    elem.onclick=cut;
   var btn=document.createElement("div");
   btn.id="icons";
   var i1=document.createElement("span");
   i1.innerHTML='<i class="fa fa-edit"></i>';
   i1.id="edit";
   var i2=document.createElement("span");
   i2.innerHTML='<i class="fa fa-trash"></i>';
   i2.id="dlt"
    btn.appendChild(i1); 
    btn.appendChild(i2); 
    i2.onclick=del;
    i1.onclick=edit;
    element.appendChild(elem);
   element.appendChild(btn);
    sec.appendChild(element);
    element.classList.add("task");
    myFunction();
    console.log(i);
    document.getElementById("myText").value="";
    i+=1;

}