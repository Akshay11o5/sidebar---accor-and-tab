const cl = console.log;

const Iconbar = document.getElementById("Iconbar");
const Sidebar = document.getElementById("Sidebar");
const xmarkIcon = document.getElementById("xmarkIcon");
const Blackdrop = document.getElementById("Blackdrop");

const OnClickIcon = () => {
  Sidebar.classList.remove("d-none");
  Blackdrop.classList.remove("d-none");
};

const OnClickClose = () => {
  Sidebar.classList.add("d-none");
  Blackdrop.classList.add("d-none");
};

Iconbar.addEventListener("click", OnClickIcon);
xmarkIcon.addEventListener("click", OnClickClose);
Blackdrop.addEventListener("click", OnClickClose);

// --------------------------------accor----------------

const accorpHeaing = [...document.querySelectorAll(".accopheading")];

const onclickHeading = (eve) => {
  const ActiveHeading = document.querySelector(".accopheading.active");

  const ClickonHeading = eve.currentTarget;

  if (ActiveHeading) {
    ActiveHeading.classList.remove("active");
    ActiveHeading.children[1].classList.add("fa-caret-down");
    ActiveHeading.children[1].classList.remove("fa-caret-up");
  } else if (ClickonHeading !== ActiveHeading) {
    ClickonHeading.classList.add("active");
    ClickonHeading.children[1].classList.remove("fa-caret-down");
    ClickonHeading.children[1].classList.add("fa-caret-up");
  }
};

accorpHeaing.forEach((heade) => {
  heade.addEventListener("click", onclickHeading);
});

// ---------------------------------------tab--------------

const TableHeadingLi = document.querySelectorAll(".tabheading li");
const Activepannel = document.querySelector(".tabpanel .active");

const onClickTableContaint = (eve) => {
  if (eve.target.tagName == "LI") {
    let getId = eve.target.getAttribute("data-id");
    document.querySelector(".tabpanel.active").classList.remove("active");
    document.querySelector(".tabheading li.active").classList.remove("active");
    eve.target.classList.add("active");
    document.getElementById(getId).classList.add("active");
  }
};

TableHeadingLi.forEach((heading) => {
  heading.addEventListener("click", onClickTableContaint);
});
