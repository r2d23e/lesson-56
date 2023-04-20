// let doc = document//получение объекта body

// let body = doc.body//обращение к body
// let html = doc.documentElement//обращение к самому домену

//  let id  =doc.getElementById('uydi')
//  let classes= doc.getElementsByClassName('wrap4')[0]
//  let  wrap2= doc.getElementsByName('roma')
//  let get =  doc.getElementsByTagName('p')

//  console.log(id);
//  console.log(classes);
//  console.log(wrap2);
//  console.log(get);

//  let url = "https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397"
//  let img = doc.querySelector('img')

// img.setAttribute('src', url)

// img.alt = 'картинка кода'

// console.log(img.getAttribute('src'));

let doc = document;

//функция поиска элемента
let btn_grey = doc.querySelector(".but2");
let btn_white = doc.querySelector(".but1");
let img = doc.querySelector(".img1");
let mac_text = doc.querySelector(".p1");
let total_money = doc.querySelector(".h22");
let but3 = doc.querySelector(".but3");
let but4 = doc.querySelector(".but4");
let but5 = doc.querySelector(".but5");
let but6 = doc.querySelector(".but6");

//переменные
let img1 = "./img/macgrey.png";
let img2 = "./img/macwhite.png";

// функция клика
let background = (btn1, btn2) => {
  btn1.classlist.remove("but2");
  btn1.classlist.add("but1");
  btn2.classlist.remove("but1");
  btn2.classlist.add("but2");
};

let but = (btn3, btn4, btn5, btn6) => {
  btn3.classList.remove("but4", "but5", "but6");
  btn3.classList.add("but3");
  btn4.classList.remove("but3", "but5", "but6");
  btn4.classList.add("but4");
  btn5.classList.remove("but3", "but4", "but6");
  btn5.classList.add("but5");
  btn6.classList.remove("but3", "but4", "but5");
  btn6.classList.add("but6");
};

// btn_grey.addEventListener('click', () => {
//     mac_text.innerHTML = "Space Grey"
//     img.setAttribute('src', img1)
//     background(btn_grey, btn_white)
// })
// btn_white.addEventListener('click', () => {
//     img.src = img2
//     mac_text.textContent = 'White'
//     background(btn_white, btn_grey)
// })

// let bc = () => {
//     let b = doc.body
//     b.style.backgroundColor = 'red'
// }

// btn_grey.addEventListener('clcik', bc)
// btn_grey.removeEventListener('click', bc)

btn_grey.onclick =
  ("click",
  () => {
    mac_text.innerHTML = "Space grey";
    img.setAttribute("src", img1);
    background(btn_grey, btn_white);
  });
btn_white.onclick =
  ("click",
  () => {
    img.src = img2;
    mac_text.textContent = "White";
    background(btn_white, btn_grey);
  });

but3.onclick =
  ("click",
  () => {
    total_money.innerHTML = "$1,999";
    but(but3, but4, but5, but6);
  });

but4.onclick =
  ("click",
  () => {
    total_money.innerHTML = "$2,199";
    but(but4, but3, but5, but6);
  });

but5.onclick =
  ("click",
  () => {
    total_money.innerHTML = "$2,599";
    but(but5, but4, but3, but6);
  });
but6.onclick =
  ("click",
  () => {
    total_money.innerHTML = "$3,199";
    but(but6, but5, but4, but3);
  });
