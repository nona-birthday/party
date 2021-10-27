$(document).ready(function() {
    $(".title").lettering();

$('#open_curtain').on('click', function() {open_curtain()})

function open_curtain() {
    document.getElementById('image-left').style.transform = 'translateX(-100%)'
    document.getElementById('image-right').style.transform = 'translateX(100%)'
    document.getElementById('open_curtain').style.opacity = '0'
    document.getElementById('open_curtain').style.cursor = 'default'
    document.getElementById("open_curtain").disabled = true;
    setTimeout(function() {
        let curtains = document.getElementsByClassName('open_curtain')
        for(let i = 0; i < curtains.length; i++) {
            curtains[i].style.display = 'none'
        }
        document.getElementById("open_curtain").style.display = "none";
        happy();
    }, 2500)
}

(function() {
    var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;
    if(window.innerWidth > 768) {
        NUM_CONFETTI = 350;
    }else {
        NUM_CONFETTI = 125;
    }
    COLORS = [
        [85, 71, 106],
        [174, 61, 99],
        [219, 56, 83],
        [244, 92, 68],
        [248, 182, 70]
    ];
    PI_2 = 2 * Math.PI;
    canvas = document.getElementById("world");
    context = canvas.getContext("2d");
    window.w = 0;
    window.h = 0;
    resizeWindow = function() {
        window.w = canvas.width = window.innerWidth;
        return window.h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeWindow, false);
    window.onload = function() {
        return setTimeout(resizeWindow, 0);
    };
    range = function(a, b) {
        return (b - a) * Math.random() + a;
    };
    drawCircle = function(x, y, r, style) {
        context.beginPath();
        context.arc(x, y, r, 0, PI_2, false);
        context.fillStyle = style;
        return context.fill();
    };
    xpos = 0.5;
    document.onmousemove = function(e) {
        return xpos = e.pageX / w;
    };
    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    })();
    Confetti = (function() {
        function Confetti() {
            this.style = COLORS[~~range(0, 5)];
            this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
            this.r = ~~range(2, 6);
            this.r2 = 2 * this.r;
            this.replace();
        }
        Confetti.prototype.replace = function() {
            this.opacity = 0;
            this.dop = 0.03 * range(1, 4);
            this.x = range(-this.r2, w - this.r2);
            this.y = range(-20, h - this.r2);
            this.xmax = w - this.r;
            this.ymax = h - this.r;
            this.vx = range(0, 2) + 8 * xpos - 5;
            return this.vy = 0.7 * this.r + range(-1, 1);
        };
        Confetti.prototype.draw = function() {
            var ref;
            this.x += this.vx;
            this.y += this.vy;
            this.opacity += this.dop;
            if (this.opacity > 1) {
                this.opacity = 1;
                this.dop *= -1;
            }
            if (this.opacity < 0 || this.y > this.ymax) {
                this.replace();
            }
            if (!((0 < (ref = this.x) && ref < this.xmax))) {
                this.x = (this.x + this.xmax) % this.xmax;
            }
            return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
        };
        return Confetti;
    })();
    confetti = (function() {
        var j, ref, results;
        results = [];
        for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
            results.push(new Confetti);
        }
        return results;
    })();
    window.step = function() {
        var c, j, len, results;
        requestAnimationFrame(step);
        context.clearRect(0, 0, w, h);
        results = [];
        for (j = 0, len = confetti.length; j < len; j++) {
            c = confetti[j];
            results.push(c.draw());
        }
        return results;
    };
    step();
}).call(this);

function happy() {
    let happy1 = document.getElementById("happy_text1");
    let happy2 = document.getElementById("happy_text2");
    let happy3 = document.getElementById("happy_text3");
    let happy4 = document.getElementById("happy_text4");
    let happy5 = document.getElementById("happy_text5");
    let happy6 = document.getElementById("happy_text6");
    let happy7 = document.getElementById("happy_text7");
    let happy8 = document.getElementById("happy_text8");
    let happy9 = document.getElementById("happy_text9");
    let happy10 = document.getElementById("happy_text10");
    let happy11 = document.getElementById("happy_text11");
    let happy12 = document.getElementById("happy_text12");
    let happy13 = document.getElementById("happy_text13");
    let happy14 = document.getElementById("happy_text14");
    let happy = [happy1, happy2, happy3, happy4, happy5, happy6, happy7, happy8, happy9, happy10, happy11, happy12, happy13, happy14];
    let t = 0;
    happy1.style.display = "block";
    for(let i = 0; i < happy.length; i++) {
if(i == 2) { 

setTimeout(function() {
var root = document.querySelector(':root'); root.style.setProperty("--stroke-dashoffset","35%");
root.style.setProperty("--stroke-dasharray","0 87.5%");
}, (i*1500)+t)
setTimeout(function() {
var textcopy = document.getElementsByClassName("text-copy");
for (let i = 0; i < textcopy.length; i++)
{
  textcopy[i].style.fill = "rgb(248, 182, 70)"
}
}, (i+1)*1500+t)

t += 1600;

setTimeout(function() {
            happy[i].style.display = "none"
            if(i+1 < happy.length) {
                happy[i+1].style.display = "block"
            }
        }, ((i+1)*1500 + t))


} else if(i == 4) {
    t += 1000;
    setTimeout(function() { 
        happy[i-1].style.display = "none"
        happy[i].style.display = "block"
}, i*1500 + t)
    setTimeout(function() {
        var title1 = new TimelineMax();
        title1.staggerFromTo(".title span", 2, 
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    }, i*1500 + t)

    t += 2000;

    setTimeout(function() {
        happy[i].style.display = "none"
        if(i+1 < happy.length) {
            happy[i+1].style.display = "block"
        }
    }, ((i+1)*1500 + t))
} else if(i == 6) {
    t += 1000;
    setTimeout(function() { 
        happy[i-1].style.display = "none"
        happy[i].style.display = "block"
}, i*1500 + t)

function kidness() {
    $('.end-right').css('left' , '-10%');
    $('.end-left').css('left', '110%');
    
    if(window.innerWidth < 768) {
        $('.end-right').velocity({left : '57%'}, 'easeOutExpo', 1200);
        $('.end-left').velocity({left : '64%'}, 'easeOutExpo',  1200);
    }else {
        $('.end-right').velocity({left : '51%'}, 'easeOutExpo', 1200);
        $('.end-left').velocity({left : '47%'}, 'easeOutExpo',  1200);
    }
}

    setTimeout(function() {
        kidness()
    }, i*1500 + t)

    t += 3000;

    setTimeout(function() {
        happy[i].style.display = "none"
        if(i+1 < happy.length) {
            happy[i+1].style.display = "block"
        }
    }, ((i+1)*1500 + t))
} else if(i == 8) {
    t += 1000;
    setTimeout(function() { 
        happy[i-1].style.display = "none"
        happy[i].style.display = "block"
}, i*1500 + t)

var $orbs = $('.orbs span');
$orbs.velocity({'top': '-300px', scaleX: '0', scaleY: '0', color: '#990000'},0);
var orb = 0;
var numOrbs = $orbs.length;

function dropOrbs() {
  $orbs.eq(orb).velocity({top: '0'}, 400).velocity({scaleX: 1, scaleY: 1, color: '#fff'}, 1000).css('position', 'relative');
  orb = orb + 1;
  if(orb < numOrbs){5
    setTimeout(dropOrbs, 100);
  }
  else{
    setTimeout(function(){$('.glow').velocity({opacity: 1}, 1200);}, 1200);

  }
  
}

    setTimeout(function() {
        dropOrbs()
    }, i*1500 + t)

    t += 3000;

    setTimeout(function() {
        happy[i].style.display = "none"
        if(i+1 < happy.length) {
            happy[i+1].style.display = "block"
        }
    }, ((i+1)*1500 + t))
} else if(i == 12) {
    t += 2000;
    setTimeout(function() { 
        happy[i-1].style.display = "none"
        happy[i].style.display = "flex"
}, i*1500 + t)

var hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

    setTimeout(function() {
        doStuff()
    }, i*1500 + t)

    t += 2500;

    setTimeout(function() {
        happy[i].style.display = "none"
        if(i+1 < happy.length) {
            happy[i+1].style.display = "block"
        }
    }, ((i+1)*1500 + t))
} else if(i == 13) {
    setTimeout(function() {
    var TxtRotate = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };
      
      TxtRotate.prototype.tick = function() {
        var happy15 = document.getElementById("happy_text15");
        var happy16 = document.getElementById("happy_text16");
        if(this.loopNum < 3) {
            
            happy[i].style.display = "flex";
        }
        
        

        var k = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[k];
      
        if (this.isDeleting) {
        //   this.txt = fullTxt.substring(0, this.txt.length - 1);
          happy[i].style.display = "none";
          this.txt = '';
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
      
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
      
        var that = this;
        var delta = 300 - Math.random() * 100;
      
        if (this.isDeleting) { delta /= 2; }
      
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            if(this.loopNum == 1 ) {
                setTimeout(function() {
                    happy15.style.display = "block";
                    setTimeout(() => happy15.classList.add("happy_text15--active"), 100)
                }, 500)
                setTimeout(function() {
                    happy15.style.opacity = "0";
                    setTimeout(() => happy15.style.display = "none", 1000)
                }, 5000)
            }else if(this.loopNum == 2) {
                setTimeout(function() {
                    happy16.style.display = "block";
                    setTimeout(() => happy16.classList.add("happy_text16--active"), 100)
                }, 500)
                setTimeout(function() {
                    happy16.style.opacity = "0";
                    setTimeout(() => happy16.style.display = "none", 1000)
                }, 5000)
            }
            this.isDeleting = false;
            this.loopNum++;
            if(this.loopNum > 1) {
                delta = 5200;
            }else {
                delta = 500;
            }
        }
      
        setTimeout(function() {
          that.tick();
        }, delta);
      };

    var elements = document.getElementsByClassName('txt-rotate');
    for (let k=0; k<elements.length; k++) {
      var toRotate = elements[k].getAttribute('data-rotate');
      var period = elements[k].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[k], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
}, i*1500 + t)
} else if(i > 2 && i % 2 == 1){
    setTimeout(function() {
        happy[i].style.display = "flex"
        happy[i].style.justifyContent = "center"
    }, i*1500 + t)
    if(i == 5) {
        t -= 100;
    }
  setTimeout(() => happy[i].classList.add("happy_text" + (i + 1) + "--active"), (i * 1500 + 100 + t))
  if(i == 5) {
    t += 100;
    }
  t += 1000; //time photo

  setTimeout(function() {
      if(i == 7) {
        happy[i].classList.remove("happy_text" + (i + 1) + "--active")
      }else {
        happy[i].style.opacity = "0"
      }
    happy[i].style.transition = "all linear 1s"
    // if (i + 1 < happy.length) {
    //   happy[i + 1].style.display = "block"
    // }
  }, ((i + 1) * 1500 + t))
} else if(i > 2 && i % 2 == 0) {
    t += 1000;
    setTimeout(function() { 
        happy[i-1].style.display = "none"
        happy[i].style.display = "block"
    }, i*1500 + t)
    if(i == 10) {
        t -= 100
    }
    setTimeout(() => happy[i].classList.add("happy_text" + (i+1) + "--active"), (i*1500 + 100 + t))
    if(i == 10) {
        t += 2300
    }
    setTimeout(function() {
        happy[i].style.display = "none"
        // if(i+1 < happy.length) {
        //     happy[i+1].style.display = "block"
        // }
    }, ((i+1)*1500 + t))
}
  else {
setTimeout(() => happy[i].classList.add("happy_text" + (i+1) + "--active"), (i*1500 + 100 + t))

setTimeout(function() {
            happy[i].style.display = "none"
            if(i+1 < happy.length) {
                happy[i+1].style.display = "block"
            }
        }, ((i+1)*1500 + t))
}
    }
}

// setTimeout(dropOrbs, 3400);
});

$(window).on('load', function() {
    $(".preloader").delay(3300).fadeOut("slow");
    $("html").removeClass("fixed");
});

