const phone = document.getElementById("phone");
const link1 = document.getElementById("link-1");
const link2 = document.getElementById("link-2");
const link3 = document.getElementById("link-3");
const link4 = document.getElementById("link-4");
const link5 = document.getElementById("link-5");
const tel = "+5545998261963";
const wppUrl = "https://pastebin.com/raw/gePYD360";
let storedText;

phone.onclick = () => openUrl(`tel:${tel}`);
link1.onclick = () => openUrl("https://www.linkedin.com/in/welerson-ferreira/");
link2.onclick = () => openUrl("https://welersonfrr.github.io/curriculo/");
link3.onclick = () => openUrl(`https://wa.me/${tel}?text=${wppUrl}`);
link4.onclick = () => openUrl("https://www.tiktok.com/@welwrsonfrr");
link5.onclick = () => openUrl("mailto:contato.welerson@gmail.com");

function openUrl(wppUrl) {
  window.open(wppUrl, "_blank");
}
