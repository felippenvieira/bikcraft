const links = document.querySelectorAll("header li a");

function ativarLink(event) {
  if (document.location.href.includes(event.href)) event.classList.add("ativo");
}

links.forEach(ativarLink);
