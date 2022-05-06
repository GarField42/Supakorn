function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function jumpToSkills() {
  const element = document.getElementById("skills");
  element.scrollIntoView();
}

function jumpToPortfolio() {
  const element = document.getElementById("portfolio");
  element.scrollIntoView();
}