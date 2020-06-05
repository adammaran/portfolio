window.onload = function() {
    headerFadeout();
    window.setTimeout(quoteFadeout, 500);
    window.setTimeout(this.raiseUp, 750);
}

window.onscroll = function() {
    minimiseLogo()
}

var prevScrollpos = window.pageYOffset;

function minimiseLogo() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar-nav").style.bottom = "0";
        document.getElementById("navbar").style.top = "0";
        document.getElementById("logo").style.display = "block";
        document.getElementById("logo-mini").style.display = "none";
        document.getElementById("logo-mini").style.bottom = "5px"

    } else {
        document.getElementById("navbar-nav").style.bottom = "-35px";
        document.getElementById("navbar").style.top = "-55px"
        document.getElementById("logo").style.display = "none";
        document.getElementById("logo-mini").style.display = "block";
        document.getElementById("logo-mini").style.bottom = "5px";
        document.getElementById("navbar").style.backgroundColor = "#fff";

    }
    prevScrollpos = currentScrollPos;
}

function headerFadeout() {
    document.getElementById('hero-header').style.opacity = '1';
}

function quoteFadeout() {
    document.getElementById('hero-quote').style.opacity = '1';
}

function raiseUp() {
    document.getElementById('row-3').style.marginTop = '-89px'
}

function openHamburgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function closeHamburger() {
    document.getElementById("myLinks").style.display = "none";
  }