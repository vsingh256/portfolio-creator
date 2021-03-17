function handleSubmit() {
    const firstname=document.getElementById('txt').value;
    const middlename=document.getElementById('tx').value;
    const lastname=document.getElementById('txtt').value;
    const education=document.getElementById('hg').value;
    const email=document.getElementById('tg').value;
    const address=document.getElementById('jh').value;
    const selectoption=document.getElementById('mytext').value;
    const month=document.getElementById('myTxt').value;
     const month=document.getElementById('myTxt').value;
   
   
              
           
        
    
    localStorage.setItem("textvalue",firstname);
    localStorage.setItem("textvalues",middlename);
    localStorage.setItem("textvaluess",lastname);
    localStorage.setItem("textvaluesss",education);
    localStorage.setItem("textvaluessd",email);
    localStorage.setItem("textvaluessa",address);
    localStorage.setItem("ddvalue",selectoption);
    localStorage.setItem("vsss",month);

    return false ;
}