const pass = document.getElementById('pword');
const confirm2 = document.getElementById('confirm');
const submitBtn  = document.getElementById('button');

let check = function() {
    if (pass.value != confirm2.value) {
        pass.style.border = "1px solid red";
        confirm2.style.border = "1px solid red";
        submitBtn.disabled = true;
    } else {
        pass.style.border = "1px solid green";
        confirm2.style.border = "1px solid green";
        submitBtn.disabled = false;
    }
}