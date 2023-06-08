function unblock() {
  var url = document.getElementById("url").value;
  document.getElementById("proxy").src = "https://cors-anywhere.herokuapp.com/" + url;
}
