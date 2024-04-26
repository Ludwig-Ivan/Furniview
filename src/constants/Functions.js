function Vacio(text) {
  if (text.trim() === '') {
    return true;
  }
}

function Long(text, tam) {
  if (text.length > tam) {
    return true;
  }
}

export default {Vacio, Long};
