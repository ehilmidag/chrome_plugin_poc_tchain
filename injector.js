// JSON objesi
var jsonData = {
    "email": "example@example.com",
    "password": "examplepassword"
};

// fillCredentials fonksiyonunu çağırırken jsonData kullanıyoruz
fillCredentials(jsonData);

function fillCredentials(data) {
    var emailInput = document.querySelector('input[name="email"]');
    emailInput.value = data.email;
    console.log("hereeee email",data.email);

    var passwordInput = document.querySelector('input[type="password"]');
    passwordInput.value = data.password;
    console.log("here password", data.password);
}
