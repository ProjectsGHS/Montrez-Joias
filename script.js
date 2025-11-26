const config = {
  whatsappNumber: "5546999227969",
  whatsappMessage: "Olá! Gostaria de saber mais sobre os produtos da Montrez Joias.", 
  instagramLink: "https://www.instagram.com/montrezjoias/",
  catalogLink: "https://drive.google.com/file/d/10nBTGsZavnznYS5TUp8oSZexuYYZzJT3/view"
};

function buildWhatsAppLink(number, text){
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encoded}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const ig = document.getElementById("instagramLink");
  if(ig) ig.href = config.instagramLink;

  const catalog = document.getElementById("catalogBtn");
  if(catalog) catalog.href = config.catalogLink;

  const waBtn = document.getElementById("whatsappBtn");
  const waLink = buildWhatsAppLink(config.whatsappNumber, config.whatsappMessage);
  if(waBtn){
    waBtn.href = waLink;
    waBtn.setAttribute("target","_blank");
  }

  console.info("Montrez landing initialized. Instagram:", config.instagramLink, "Catalog:", config.catalogLink);
});
