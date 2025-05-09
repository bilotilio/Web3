
function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const includeLower = document.getElementById("includeLower").checked;
    const includeUpper = document.getElementById("includeUpper").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    let chars = "";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}<>?/|";

    if (chars === "") {
        document.getElementById("passwordOutput").value = "Оберіть хоча б один тип символів!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("passwordOutput").value = password;
}

function copyPassword() {
    const output = document.getElementById("passwordOutput");
    output.select();
    output.setSelectionRange(0, 99999); // для мобільних
    navigator.clipboard.writeText(output.value).then(() => {
        alert("Пароль скопійовано!");
    });
}
