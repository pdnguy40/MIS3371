function isEmpty(field) {
  let feildvalue = document.forms["patientinfoForm"][field].value;
  let errorField = field + "error";

  if (feildvalue.length < 1) {
    document.getElementById(field).style.backgroundColor = "red";
    document.getElementById(errorField).innerHTML =
      '<p class="error">This field can not be empty!</p>';
    return false;
  } else {
    document.getElementById(field).style.backgroundColor = "";
    document.getElementById(errorField).innerHTML = "";
    return true;
  }
}

function checkDate() {
  let today = new Date();
  let dateSelected = new Date(
    document.forms["patientinfoForm"]["birthdate"].value
  );

  if (dateSelected.length < 1) {
    document.getElementById(birthdateerror).innerHTML =
      '<p class="error">This field can not be empty!</p>';
    document.getElementById(birthdate).style.backgroundColor = "red";
    return false;
  } else if (today.getFullYear() - dateSelected.getFullYear() > 120) {
    document.getElementById(birthdateerror).innerHTML =
      '<p class="error">You can not select a date 120 years past today.</p>';
    document.forms["patientinfoForm"]["birthdate"].value = "";
    return false;
  } else if (dateSelected > today) {
    document.getElementById(birthdateerror).innerHTML =
      '<p class="error">You can not select a date in the future!</p>';
    document.forms["patientinfoForm"]["birthdate"].value = "";
    return false;
  } else {
    document.getElementById(birthdate).style.backgroundColor = "";
    document.getElementById(birthdateerror).innerHTML = "";
    return true;
  }
}

function checkUsername(field) {
  let feildvalue = document.forms["patientinfoForm"][field].value;

  if (feildvalue.length < 1) {
    document.getElementById(field).style.backgroundColor = "red";
    document.getElementById(field + "error").innerHTML =
      '<p class="error">This field can not be empty!</p>';
    return false;
  } else if (!isNaN(feildvalue[0])) {
    document.getElementById(field).style.backgroundColor = "red";
    document.getElementById(field + "error").innerHTML =
      '<p class="error">Username must not start with a number!</p>';
    return false;
  } else if (feildvalue.includes(" ")) {
    document.getElementById(field).style.backgroundColor = "red";
    document.getElementById(field + "error").innerHTML =
      '<p class="error">Username must not contain spaces!</p>';
    return false;
  } else {
    document.getElementById(field).style.backgroundColor = "";
    document.getElementById(field + "error").innerHTML = "";
    return true;
  }
}

function checkPassword(field) {
  let feildvalue = document.forms["patientinfoForm"][field].value;

  if (feildvalue.length < 1) {
    document.getElementById(field).style.backgroundColor = "red";
    document.getElementById(field + "error").innerHTML =
      '<p class="error">This field can not be empty!</p>';
    return false;
  } else if (
    fieldvalue.includes(document.forms["patientinfoForm"][username].value)
  ) {
    document.getElementById(field).style.backgroundColor = "red";
    document.getElementById(field + "error").innerHTML =
      '<p class="error">Your password can not contain your username!</p>';
    return false;
  } else if (
    fieldvalue.includes(document.forms["patientinfoForm"][firstname].value)
  ) {
    document.getElementById(field).style.backgroundColor = "red";
    document.getElementById(field + "error").innerHTML =
      '<p class="error">Your password can not contain your first name!</p>';
    return false;
  } else {
    document.getElementById(fieldvalue).style.backgroundColor = "";
    document.getElementById(field + "error").innerHTML = "";
    return true;
  }
}

function checkConfirmPassword(field) {
  let feildvalue = document.forms["patientinfoForm"][field].value;

  if (feildvalue.length < 1) {
    document.getElementById(field).style.backgroundColor = "red";
    document.getElementById(field + "error").innerHTML =
      '<p class="error">This field can not be empty!</p>';
    return false;
  } else if (fieldvalue != document.forms["patientinfoForm"][password].value) {
    document.getElementById(field).style.backgroundColor = "red";
    document.getElementById(field + "error").innerHTML =
      '<p class="error">Your passwords must be the same!</p>';
    return false;
  } else {
    document.getElementById(fieldvalue).style.backgroundColor = "";
    document.getElementById(field + "error").innerHTML = "";
    return true;
  }
}

function reviewData() {
  let content = document.getElementById("patientinfoForm");
  const element = content.elements;

  let table = "<table class='secondtable'>";

  for (i = 0; i < element.length; i++) {
    const type = element[i].type;

    switch (type) {
      case "radio":
        if (element[i].checked) {
          output += "<tr> <td>" + element[i].name + ":" + "</td>";
          output += "<td>" + element[i].value + "</td> </tr>";
        }
        break;
      case "checkbox":
        if (element[i].checked) {
          table += "<tr> <td>" + element[i].name + ":" + " </td>";
          table += "<td> Yes </td> </tr>";
        } else {
          table += "<tr> <td>" + element[i].name + ":" + " </td>";
          table += "<td> No </td> </tr>";
        }
      case "button":
        break;
      case "submit":
        break;
        F;
      case "reset":
        break;
      default:
        table += "<tr> <td>" + element[i].name + ":" + "</td>";
        table += "<td>" + element[i].value + "</td> </tr>";
    }
  }

  table += "</table>";

  document.getElementById("reviewtable").innerHTML = table;
}

function show() {
  let slider = document.getElementById("healthSlider").value;
  document.getElementById("sliderOutput").innerHTML = slider;
}

function submitForm() {
  if (
    isEmpty("firstName") &&
    isEmpty("lastname") &&
    isEmpty("email") &&
    isEmpty("ssn") &&
    isEmpty("phone") &&
    checkDate("birthdate") &&
    checkUsername("username") &&
    checkPassword("password") &&
    checkConfirmPassword("confirm_password") &&
    isEmpty("city") &&
    isEmpty("zip") &&
    isEmpty("address")
  ) {
    window.location.href = "thankyou.html";
  } else {
    alert("Please fix the data in the form");
  }
}
