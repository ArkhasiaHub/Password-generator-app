export function getPasswordLength() {
  const length_slider = document.getElementById("length-slider");
  return parseInt(length_slider.value, 10);
}
