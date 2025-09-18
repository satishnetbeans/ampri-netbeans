// function to change language
export default function handleTranslate(lang) {
  const select = document.querySelector(".goog-te-combo");
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  }
}