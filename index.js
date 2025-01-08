const form = document.getElementById("ageCalculator");
const hasilUsia = document.getElementById("ageFinish");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const birthDateString = document.getElementById("birthdayDate").value;
  const birthDate = new Date(birthDateString);
  const today = new Date();
  console.log(birthDate);

  let ageYears = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    ageYears--;
  }

  let ageMonths = today.getMonth() - birthDate.getMonth();
  if (ageMonths < 0) {
    ageMonths += 12;
  }

  console.log(ageYears);
  console.log(ageMonths);

  hasilUsia.textContent = `Usia Anda adalah: ${ageYears} tahun ${ageMonths} bulan`;
});
