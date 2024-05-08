function validation() {
    console.log('Good')
}

/* function validateForm() {

    const nama = document.forms['message-form']['name-input'].value
    const angka = 11

    if (nama == '') {
        document.getElementById("eror-name").innerHTML = "Tidak boleh kosong!"

        return false
    }

    setName (nama);

    return false;

}

function setName(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById('error-name').innerHTML = "";
}
*/

/* let name = prompt("Halo, siapakah nama anda?", " ");

console.log(name);
*/

/* let name = prompt("Halo, siapakah nama anda?", " ");
document.getElementById("name").innerHTML = name
*/

/* function replacName() {
    let name = prompt("Halo, siapakah nama anda?", " ");
    document.getElementById("name").innerHTML = name   
}

replacName();
*/

/* function replacName() {
    let name = prompt("Halo, siapakah nama anda?", " ");
    document.getElementById("name").innerHTML = name   
}

let submit = document.getElementById('submit')
submit.addEventListener("click", function() {
    replacName();
})
*/

/* function replacName() {
    let name = prompt("Halo, siapakah nama anda?", " ");
    document.getElementById("name").innerHTML = name   
}

document.getElementById('submit').addEventListener("click", function() {
    replacName();
})
*/

let nameInput = document.getElementById('name-input')

document.getElementById('submit').addEventListener("click", function() {
    const nama = nameInput.value

    if (name == "") {
        document.getElementById('error-name').innerHTML = 'Nama tidak boleh kosong!'  
    } else {
        document.getElementById('name').innerHTML = nama
    }

})
