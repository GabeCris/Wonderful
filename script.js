window.onload = parallaxEffect();
window.onload = slider(1, 2, 3);

function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  }
}

window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
window.addEventListener("orientationchange", hideAddressBar );

function parallaxEffect() {
  let rellax = new Rellax(".rellax");
}

// VOTE

function vote() {
  showPopupModal();
  setTimeout(closeModal, 2000);
  setTimeout(msgVote, 3000);
  setTimeout(hidePopupModal, 3000);
}

function msgVote() {
  let vote = document.querySelector('input[name="vote"]:checked').value;

  document.getElementById("button-vote").style.display = "none";
  document.getElementById("msg-vote-id").style.display = "inline-block";
  document.getElementById("msg-vote-id").innerHTML = "Você votou: " + vote;
}

function blockVote() {
  let votes = document.getElementsByName("vote");

  for (let i = 0; i < votes.length; i++) {
    votes[i].disabled = true;
  }
}
// MODALS

function showPopupModal() {
  document.getElementById("popup-modal").classList.remove("hide-popup");
  document.getElementById("popup-modal").classList.add("show-popup");
  blockVote();
}

function hidePopupModal() {
  document.getElementById("popup-modal").classList.remove("show-popup");
  document.getElementById("popup-modal").classList.add("hide-popup");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show-modal");
  document.getElementById("modal").classList.add("hide-modal");
}

function openModal() {
  document.getElementById("modal").classList.remove("hide-modal");
  document.getElementById("modal").classList.add("show-modal");
}

function closeMobileModal() {
  document.getElementById("mobile-modal").classList.remove("show-modal");
  document.getElementById("mobile-modal").classList.add("hide-modal");
}

function openMobileModal() {
  document.getElementById("mobile-modal").classList.add("show-modal");
  document.getElementById("mobile-modal").classList.remove("hide-modal");
}

// SLIDER

let imgLeft = 1;
let imgCenter = 2;
let imgRight = 3;

function slider(left, center, right) {
  let places = [
    "Chichen Itza",
    "Coliseu",
    "Cristo Redentor",
    "Machu Picchu",
    "Muralha da China",
    "Taj Mahal",
  ];

  document.getElementById(
    "card-img-left"
  ).style.backgroundImage = `url(./images/cards/${left}.jpg)`;
  document.getElementById(
    "card-img-center"
  ).style.backgroundImage = `url("./images/cards/${center}.jpg")`;
  document.getElementById(
    "card-img-right"
  ).style.backgroundImage = `url("./images/cards/${right}.jpg")`;
  document.getElementById("card-name-center").innerText = places[center - 1];
  slideButton(center, 6);
}

function previousSlide() {
  if (imgCenter > 1) {
    imgRight = imgCenter;
    imgCenter--;
    imgLeft = imgCenter - 1;

    if (imgCenter == 1) {
      imgLeft = 6;
    }
    slider(imgLeft, imgCenter, imgRight);
  } else if (imgCenter == 1) {
    imgCenter = 6;
    imgLeft = imgCenter - 1;
    imgRight = 1;
    slider(imgLeft, imgCenter, imgRight);
  }
}

function nextSlide() {
  if (imgCenter < 6) {
    imgCenter++;
    imgRight = imgCenter + 1;

    if (imgCenter == 6) {
      imgRight = 1;
    }

    imgLeft = imgCenter - 1;
    slider(imgLeft, imgCenter, imgRight);
  } else if (imgCenter == 6) {
    imgCenter = 1;
    imgLeft = 6;
    imgRight = imgCenter + 1;
    slider(imgLeft, imgCenter, imgRight);
  }
}

function slideButton(cur, len) {
  document.getElementById("slide-button").innerHTML = "";
  for (let i = 1; i <= len; i++) {
    if (i == cur) {
      document.getElementById("slide-button").innerHTML +=
        "<li class='selected'></li>";
    } else {
      document.getElementById("slide-button").innerHTML += "<li></li>";
    }
  }
}

function hideAddressBar(){
  if(document.documentElement.scrollHeight<window.outerHeight/window.devicePixelRatio)
    document.documentElement.style.height=(window.outerHeight/window.devicePixelRatio)+'px';
  setTimeout(window.scrollTo(1,1),0);
}
