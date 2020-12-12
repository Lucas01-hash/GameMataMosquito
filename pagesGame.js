function iniciarJogo() {
  let nivel = document.getElementById("nivel").value;
  if (nivel === "") {
    return false;
  }

  window.location.href = "/app.html?" + nivel;
}
