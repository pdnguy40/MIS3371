function isEmpty (field) {
    let feildvalue = document.forms["patientinfoForm"][field].value;

    if (feildvalue.length < 1) {
        document.getElementById(field).style.backgroundColor = 'red';
        alert("The " + field +  " field can not be blank!");
        return false
    } else {
        document.getElementById(field).style.backgroundColor = '';
        return true;
    }
}

function checkDate () {
    let today = new Date();
    let dateSelected = new Date(document.forms["patientinfoForm"]["birthdate"].value);

    if (dateSelected.length < 1) {
        alert("The " + field +  " field can not be blank!");
        document.getElementById(birthdate).style.backgroundColor = 'red';
        return false
    } else if (today.getFullYear() - dateSelected.getFullYear() > 120) {
        alert("You can not select a date 120 years past today!")
        document.forms["patientinfoForm"]["birthdate"].value = '';
        return false;
    } else if (dateSelected > today) {
        alert("You can not select a date in the future!")
        document.forms["patientinfoForm"]["birthdate"].value = '';
        return false;
    } else {
        document.getElementById(birthdate).style.backgroundColor = '';
        return true;
    }
}

function checkPassword (field) {
    let feildvalue = document.forms["patientinfoForm"][field].value;

    if (feildvalue.length < 1) {
        document.getElementById(field).style.backgroundColor = 'red';
        alert("The " + field +  " field can not be blank!");
        return false;
    } else if (fieldvalue.includes(document.forms["patientinfoForm"][username].value)) {
        document.getElementById(field).style.backgroundColor = 'red';
        alert("Your password can not contain your username!");
        return false;
    } else if (fieldvalue.includes(document.forms["patientinfoForm"][firstname].value)) {
        document.getElementById(field).style.backgroundColor = 'red';
        alert("Your password can not contain your first name!");
        return false;
    } else {
        document.getElementById(fieldvalue).style.backgroundColor = '';
        return true;
    }
}

function checkConfirmPassword (field) {
    let feildvalue = document.forms["patientinfoForm"][field].value;

    if (feildvalue.length < 1) {
        document.getElementById(field).style.backgroundColor = 'red';
        alert("The " + field +  " field can not be blank!");
        return false;
    } else if (fieldvalue != document.forms["patientinfoForm"][password].value) {
        document.getElementById(field).style.backgroundColor = 'red';
        alert("Your passwords must be the same!");
        return false;
    } else {
        document.getElementById(fieldvalue).style.backgroundColor = '';
        return true;
    }
}

function reviewData () {
    let content = document.getElementById("patientinfoForm");
    const element = content.elements;

    let table = "<table class='secondtable'>";

    for (i = 0; i < element.length; i++) {
        const type = element[i].type;

        switch (type) {
            case "radio":
                if (element[i].checked) {
                    output += "<tr> <td>" + element[i].name + ":" + "</td>";
                    output += "<td>" + element[i].value + "</td> </tr>"
                }
                break;
            case "checkbox":
                if (element[i].checked) {
                    table += "<tr> <td>" + element[i].name + ":" + " </td>";
                    table += "<td> Yes </td> </tr>"
                } else {
                    table += "<tr> <td>" + element[i].name + ":" + " </td>";
                        table += "<td> No </td> </tr>"
                }
            case "button":
                break;
            case "submit":
                break;F
            case "reset":
                break;
            default:
                table += "<tr> <td>" + element[i].name + ":" + "</td>";
                table += "<td>" + element[i].value + "</td> </tr>"
        }
    }

    table += "</table>";

    document.getElementById("reviewtable").innerHTML = table;
}

function show () {
    let slider = document.getElementById("healthSlider").value;
    document.getElementById("sliderOutput").innerHTML = slider;
}