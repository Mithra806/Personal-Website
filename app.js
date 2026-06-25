const artworkLink = document.getElementById("artwork-link");
if (artworkLink) {
  artworkLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./artworkPage.html";
  });
}

const photographyLink = document.getElementById("photography-link");
if (photographyLink) {
  photographyLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./photographyPage.html";
  });
}

const mainpageLink = document.getElementById("mainpage-link");
if (mainpageLink) {
  mainpageLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./mainPage.html";
  });
}

const journalsLink = document.getElementById("journals-link");
if (journalsLink) {
  journalsLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./journalsPage.html";
  });
}

const mediaLink = document.getElementById("media-link");
if (mediaLink) {
  mediaLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./mediaPage.html";
  });
}

const inspirationsLink = document.getElementById("inspirations-link");
if (inspirationsLink) {
  inspirationsLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./inspirationsPage.html";
  });
}

const projectsLink = document.getElementById("projects-link");
if (projectsLink) {
  projectsLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "./projectsPage.html";
  });
}