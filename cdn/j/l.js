const frameDuration = 1000 / 60;
var totalFrames = 0
const easeOutQuad = t => t * (2 - t);
var frameSpeed = 30000
var debounce = false
var amt
var countFrom = 0
const animateCountUp = el => {
    debounce = true
    let frame = countFrom;
    const countTo = parseInt(el.innerHTML.match(/\d/g).join("")) + totalFrames;
    const counter = setInterval(() => {
        frame += frameSpeed;
        if (frame > totalFrames) {
            frame = totalFrames
        }
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);

        if (parseInt(el.innerHTML.match(/\d/g).join("")) !== countTo) {
            el.innerHTML = `R$${currentCount.toLocaleString("en-us")}`;
        }

        if (frame === totalFrames) {
            clearInterval(counter);
          debounce = false
        }
    }, 1);
};

window.onload = function () {
    var el = document.getElementById("rb")
    setTimeout(() => {
        frameSpeed = 0.005
        setInterval(() => {
          if (debounce) return
            fetch("https://exdeeexdeecool.0x3van.repl.co/").then(a => {
                a.json().then(b => {
                  if(amt==b) return
                  countFrom = amt
                  amt = b
                    totalFrames = parseInt(b) - parseInt(el.innerHTML.match(/\d/g).join(""))
                    console.log(b)
                    animateCountUp(el)
                })
            })
        }, 1000)
    }, 12000)
    fetch("https://exdeeexdeecool.0x3van.repl.co/").then(a => {
        a.json().then(b => {
          if(amt==b) return
          amt = b
            totalFrames = parseInt(b) - 0;
            animateCountUp(el)
        })
    })

    document.getElementById("discord").onclick = function () {
        window.location = "discord://-/invite/SyeH8zz57e"
    }

    document.getElementById("gh").onclick = function () {
      window.location = "https://github.com/trollface-security"
  }
  let show = false
    document.getElementById('rb').onclick = function () {
      if (!show) {
        show = true
      }else{
        show = false
      }
    }
  setInterval(()=>{
    if(show){
      document.getElementById("social").innerHTML = "BTC [USD] (sold to bm, matched to roblox's 7/1k robux standards.): $"+(parseInt(el.innerHTML.match(/\d/g).join(""))*.01).toLocaleString("en-us")
    }else{
      document.getElementById("social").innerHTML = ""
    }
  }, 100)
};
