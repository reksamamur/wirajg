function changeText() {
    const text = ["Graphic Designer", "UI / UX Designer", "Problem Solver", "Creative Thinker", "Design Thinker", "Product Designer"];
    let randomItem = text[Math.floor(Math.random()*text.length)];
    document.getElementById("title").innerHTML = randomItem

}

document.getElementById('switchTheme').addEventListener('click', function() {
    let htmlClasses = document.querySelector('html').classList;
    if(localStorage.theme == 'dark') {
        htmlClasses.remove('dark');
        localStorage.removeItem('theme')
    } else {
        htmlClasses.add('dark');
        localStorage.theme = 'dark';
    }
});

if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark')
} else if (localStorage.theme === 'dark') {
    document.querySelector('html').classList.add('dark')
}

document.getElementById('langId').addEventListener('click', function() {
    document.querySelector('html').setAttribute('lang','id')
    document.getElementById('langDisplay').textContent = 'ID'
    document.getElementById('mainText').textContent = 'Hai, Saya Wira 👋'
    document.getElementById('mainWho').textContent = 'Seorang'
    document.getElementById('mainWho2').textContent = 'dari Indonesia, bersemangat dalam menciptakan produk yang bermanfaat dan mudah digunakan.'
    document.getElementById('mainBlog').textContent = 'Saya gemar berbagi ide dan pemikiran melalui tulisan saya di'
})

document.getElementById('langEn').addEventListener('click', function() {
    document.querySelector('html').setAttribute('lang','en')
    document.getElementById('langDisplay').textContent = 'EN'
    document.getElementById('mainText').textContent = "Hello, I'm Wira 👋"
    document.getElementById('mainWho').textContent = `I'm a`
    document.getElementById('mainWho2').textContent = `based in Indonesia, passionate in creating products that are meaningful and fun to use.`
    document.getElementById('mainBlog').textContent = 'I occasionally share my thoughts and ideas in my'
})

function openMenu() {
    document.getElementById("moreMenu").style.display = "block";
  }
  
  function closeMenu() {
    document.getElementById("moreMenu").style.display = "none";
  }

function toID() {
    document.querySelector('html').setAttribute('lang','id')
    document.getElementById('idCheck').classList.remove('hidden')
    document.getElementById('enCheck').classList.add('hidden')
    document.getElementById('langLabel').textContent = 'Ganti Bahasa'
    document.getElementById('themeLabel').textContent = 'Ganti Tema'
    document.getElementById('langDisplay').textContent = 'ID'
    document.getElementById('mainText').textContent = 'Hai, Saya Wira 👋'
    document.getElementById('mainWho').textContent = 'Seorang'
    document.getElementById('mainWho2').textContent = 'dari Indonesia, bersemangat dalam menciptakan produk yang bermanfaat dan mudah digunakan.'
    document.getElementById('mainBlog').textContent = 'Saya gemar berbagi ide dan pemikiran melalui tulisan saya di'
}

function toEN() {
    document.querySelector('html').setAttribute('lang','en')
    document.getElementById('enCheck').classList.remove('hidden')
    document.getElementById('idCheck').classList.add('hidden')
    document.getElementById('langLabel').textContent = 'Change Language'
    document.getElementById('themeLabel').textContent = 'Change Theme'
    document.getElementById('langDisplay').textContent = 'EN'
    document.getElementById('mainText').textContent = "Hello, I'm Wira 👋"
    document.getElementById('mainWho').textContent = `I'm a`
    document.getElementById('mainWho2').textContent = `based in Indonesia, passionate in creating products that are meaningful and fun to use.`
    document.getElementById('mainBlog').textContent = 'I occasionally share my thoughts and ideas in my'
}


if (document.documentElement.lang === "en") {
    document.getElementById('enCheck').classList.remove('hidden')
  } else if (document.documentElement.lang === "id") {
    document.getElementById('idCheck').classList.remove('hidden')
  }

function toDark(){
    document.querySelector('html').classList.add('dark')
}

function toLight(){
    document.querySelector('html').classList.remove('dark')
}