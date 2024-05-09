// Validate Function
function validation() {
    let username = document.getElementById('name-input').value; 
    let email = document.getElementById('email-input').value;
    let level = document.getElementById('level-input').value;
    if (username == '' || username == null, email == '' || email == null) {
        document.getElementById('name-input').style.border = '2px solid red'
        document.getElementById('email-input').style.border = '2px solid red'
        document.getElementById('level-input').style.border = '2px solid red'
        alert('Inputan Anda Kosong, Coba Periksa Kembali');
    } else {
        document.getElementById('name-input').style.border = 'none'
        document.getElementById('email-input').style.border = 'none'
        document.getElementById('level-input').style.border = 'none'
        alert('Welcome ' + username);
        console.log(username, email, level);
    }

    document.getElementById("name").innerHTML = username 
}

// Section Slide
let indexSlide = 1; // [0, 1, 2]
showSlide(1);

// Trigger Slide 
function nextSlide(n) {
    console.log('nextSlide: ' + n);
    showSlide(indexSlide += n);
}

// Slide logic
function showSlide(index) {
    let listImage = document.getElementsByClassName('banner-item');
    console.log(listImage);
    console.log('Banyaknya image: ' + listImage.length);

    // Reset SlideIndex
    if (index > listImage.length) indexSlide = 1;
    
    // Hide all Images  
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    // Show only one image
    listImage[indexSlide - 1].style.display = 'block';  
    console.log('showSlide: ' + index);
}

// Auto Slide
setInterval(() => nextSlide(1), 2000);


document.getElementById('submit').addEventListener('click', () => validation(1))


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

/* let nameInput = document.getElementById('name-input')

document.getElementById('submit').addEventListener("click", function() {
    const nama = nameInput.value

    if (name == "") {
        document.getElementById('error-name').innerHTML = 'Nama tidak boleh kosong!'  
    } else {
        document.getElementById('name').innerHTML = nama
    }

})
*/
