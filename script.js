function submitCallback() {
  const countryCode = document.getElementById("countryCode").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  alert(
    "Callback Requested\nCountry Code: " +
      countryCode +
      "\nPhone Number: " +
      phoneNumber
  );
}

function scrollToSection(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href").substring(1); // Remove the '#' symbol
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}

const aboutMeLink = document.querySelector('a[href="#aboutMeSection"]');
if (aboutMeLink) {
  aboutMeLink.addEventListener("click", scrollToSection);
}
