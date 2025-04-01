document.addEventListener("DOMContentLoaded", function () {
  const birthDate = new Date("2004-11-19");
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  const birthDateText = `Bonjour, je m'appelle <span class="text-pink-red font-bold">ALMEIDA ALHADA Ruben</span> et j'ai actuellement ${age} ans,`;

  document.getElementById("present").innerHTML = birthDateText;
});
