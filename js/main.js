const preview = function(){

    // step 1 - save the user input into a variable
    const givenname = document.getElementById("givenname").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const housenumber = document.getElementById("housenumber").value;
    const street = document.getElementById("street").value;
    const suburb = document.getElementById("suburb").value;
    const state = document.getElementById("state").value;
    const postcode = document.getElementById("postcode").value;
    const country = document.getElementById("country").value;

    // step 2 - update the hacrd element using the varibale with the saved input
    document.getElementById("hcard-givenname").innerHTML = givenname;
    document.getElementById("hcard-surname").innerHTML = surname;
    document.getElementById("hcard-email").innerHTML = email;
    document.getElementById("hcard-phone").innerHTML = phone;
    document.getElementById("hcard-housenumber").innerHTML = housenumber;
    document.getElementById("hcard-street").innerHTML = street;
    document.getElementById("hcard-suburb").innerHTML = suburb + ',';
    document.getElementById("hcard-state").innerHTML = state;
    document.getElementById("hcard-postcode").innerHTML = postcode;
    document.getElementById("hcard-country").innerHTML = country;
};