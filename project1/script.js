// length method 

var  str = "I love JavaScript";
 demo1.innerHTML =`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.length <br>Result :<br>${str.length}`

// String[] method 

var  str = "I love JavaScript";
 demo2.innerHTML= `var  str = "I love JavaScript";<br>
 demo1.innerHTML = str[4] <br>Result :<br>${str[4]}`

 // string Slice method 

 var  str = "I love JavaScript";
 demo3.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.slice(4,10)<br> Result :<br>${str.slice(4,10)}`

 var  str = "I love JavaScript";
 demo4.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.slice(4)<br> Result :<br>${str.slice(4)}`


 // if  we use negative value then  negative value is start from -1 and goes  towards till last 
 var  str = "I love JavaScript";
 demo5.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.slice(-1))<br> Result :<br>${str.slice(-1)}` // for this -1 return (t) -2 return (pt) -3 return (ipt)

  
 var  str = "I love JavaScript";
 demo6.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.slice(-16,-7)<br> Result :<br>${str.slice(-16,-7)}`


 // substring () method 

 var  str = "I love JavaScript";
 demo7.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.substring(4)<br> Result :<br>${str.substring(4)}`

 var  str = "I love JavaScript";
 demo8.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.substring(-1)<br> Result :<br>${str.substring(-1)}`

 var  str = "I love JavaScript";
 demo8.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.substring(-16,-7)<br> Result :<br>${str.substring(-16,-7)}`

 // substr method (index  , length  how much charr is  accept ) 
 var  str = "I love JavaScript";
 demo9.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.substr(-16,-7)<br> Result :<br>${str.substr(4,9)}` /// it give strikeout because new javascript version not support it 
 ///  toUpperCase() method 

 var  str = "I love JavaScript";
 demo10.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.toUpperCase()<br> Result :<br>${str.toUpperCase()}`


 // toLowerCase () method 

 var  str = "I love JavaScript";
 demo11.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.toLowerCase()<br> Result :<br>${str.toLowerCase()}`

 /// to concat()  method  

 
 var  str = "I love JavaScript";
 demo12.innerHTML=`var  str = "I love JavaScript";<br>
 demo1.innerHTML = str.concat("and Node.js")<br> Result :<br>${str.concat(" and Node.js")}`



  // trim ()  method  
   
 var  str = "I     love    JavaScript   ";
 demo13.innerHTML=`var  str ="I     love    JavaScript   ";<br>
 demo1.innerHTML = str.trim()<br> Result :<br>${str.trim()}` // it removes extra space between words

