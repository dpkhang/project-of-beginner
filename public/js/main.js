

//conten about
const about = document.querySelector(".btn_info_about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});



// quantity

let count = 1;
setInterval(function () {
  document.getElementById('radio'+count).checked = true;
  count++;
  if (count >4) {
    count = 1;
  }

},3000)


function uploadimg(nameimg){
let newimg = nameimg.replace(/^.*\\/,"")

}
