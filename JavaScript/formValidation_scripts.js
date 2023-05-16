
function validateForm() {
    var errors = [];
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("phoneNumber").value;
    var id = document.getElementById("id").value;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var accommodationDate = document.getElementById("accommodationDate").value;
    var departDate = document.getElementById("departDate").value;
    var roomType = document.getElementById("roomType").value;
    var adult = document.getElementById("adult").value;
    var child = document.getElementById("child").value;

    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    today = yyyy + '-'+ mm +'-'+ dd;

    var fnameErr = true;
    var lnameErr = true;
    var emailErr = true;
    var phoneErr = true;
    var idErr = true;
    var accommodationDateErr = true;
    var departDateErr = true;
    var adultErr = true;
    var childErr = true;
    var roomTypeErr = true;
    
    if(fname == "") {
        errors.push("Моля въведете име!");
    } 
    else{
        var regex = /^[А-Я][а-я]+(-[А-Я])?[а-я]+$/;               
        if(regex.test(fname) === false) {
            errors.push("Моля въведете правилно име!");
        } else {
            fnameErr = false;
        }
    }

    if(lname == "") {
        errors.push("Моля въведете фамилия!");
    } 
    else {
        var regex = /^[А-Я][а-я]+(-[А-Я])?[а-я]+$/;                
        if(regex.test(lname) === false) {
            errors.push("Моля въведете правилна фамилия!");
        } else {
            lnameErr = false;
        }
    }

    if(number == "") {
        errors.push("Моля въведете телефон!");
    } 
    else {
        var regex = /^08[789]\d{7}$/;               
        if(regex.test(number) === false || number.length>10 || number.length<10) {
            errors.push("Моля въведете правилнен телефон!");
        } else {
            phoneErr = false;
        }
    }

    if(id == "") {
        errors.push("Моля въведете ЕГН!");
    } 
    else {
        var regex = /^\d{10}$/;                
        if(regex.test(id) === false || id.length>10 || id.length<10) {
            errors.push("Моля въведете правилно ЕГН!");
        } else {
            idErr = false;
        }
    }
    
    if(email == "")
    {
       errors.push("Моля въведете email!");
    } 
    else 
    {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false)
        {
            errors.push("Моля въведете правилен email!");
        } 
        else
        {
            emailErr = false;
        }
    }

    if(accommodationDate < today || departDate < today){
        errors.push("Моля въведете правилна дата на настаняване/напускане!");
    }
    else if (accommodationDate >= departDate) {
        errors.push("Датата на настаняване трябва да е по-малка от датата на напускане!");
    }
    else{
        departDateErr = false;
        accommodationDateErr = false;
    } 

    if (roomType == "selectRoomType")
    {
        errors.push("Моля изберете вид на стаята!");
    }
    else{
        roomTypeErr = false;
    } 

    if(adult == "selectAdult"){
        errors.push("Моля въведете брой възрастни!");
    } 
    else
    {
        adultErr = false;
    }

    if(child == "selectChild"){
        errors.push("Моля въведете брой деца!");
    } 
    else
    {
        childErr = false;
    }

    if((fnameErr || lnameErr || emailErr || idErr || phoneErr || departDateErr || accommodationDateErr || adultErr || childErr || roomTypeErr) == true) {
        var messages = "";
        for(var i=0; i<errors.length;i++)
        {
            messages += errors[i] + "\n";
        }
        alert(messages);
        return false;
    } else {
        alert("Заявката Ви беше успешна! Ще получите потвърждение за резервацията на посочения от Вас email.");
    }   
};