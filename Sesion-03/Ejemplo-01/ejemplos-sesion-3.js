function calculateAgeByBirthYear(birthYear) {
    currentYear = 2022;
    minAge = currentYear - 13;
    maxAge = currentYear - 80;

    if (!Number.isInteger(birthYear)) {
        return "El valor del input debe ser número."
    }
    if (birthYear > minAge) {
        return "Hola, para usar este sitio tienes que ser mayor a 13 años"
    }
    if (birthYear > currentYear) {
        return "Eres del futuro O.O????"
    }
    if (birthYear < maxAge) {
        return "Hola mi querido señor(a), es usted muy moderno"
    }
    var age = 2022 - birthYear;
    return age;
}
const button = document.getElementById("button");
const input = document.getElementById("birthYear");

button.addEventListener("click", function() {
    const v = parseInt(input.value);
    alert(calculateAgeByBirthYear(v));
});