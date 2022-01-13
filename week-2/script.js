const heading = document.querySelector('.headline');
const banner = document.getElementById('about');
const menuBars = document.getElementById('menu-bars');
const overlayMenu = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const navItems = [nav1, nav2, nav3];
const gallery2 = document.getElementById('gallery-2');
const btn = document.getElementById('btn');

// Toggle header wording
let toggleHeading = true;
// Toggle btn wording
let isHidden = true;

const headingChange = () => {
  toggleHeading = !toggleHeading;
  heading.textContent = toggleHeading ? 'You are their whole world.' : 'Hope you have a great day!';
};

const toggleNav = () => {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
  } else {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
  }
};

const showMore = () => {
  gallery2.classList.toggle('secondary');
  isHidden = !isHidden;
  btn.textContent = isHidden ? 'See More' : 'See Less';
}

banner.addEventListener('click', headingChange);
menuBars.addEventListener('click', toggleNav);
navItems.forEach(item => {
  item.addEventListener('click', toggleNav);
})
btn.addEventListener('click', showMore);