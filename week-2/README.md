### DEMO page

[Remote Assignments - Week 2](https://elenachien1993.github.io/remote-assignments/week-2/)

## 作業項目

- 完成 4 題 JS 題目
- 延續 Week 1 作業，新增三項要求功能

## 延續 Week 1 網頁

### **Request 1: Click to Change Text.**

將 heading 製作成點擊便可來回切換文字的區塊

```jsx
const heading = document.querySelector('.headline');

let toggleHeading = false;

const headingChange = () => {
  heading.textContent = toggleHeading ? 'You are their whole world.' : 'Hope you have a great day!';
  toggleHeading = !toggleHeading;
};

heading.addEventListener('click', headingChange);
```

### **Request 2: Click to Show/Close Menu.**

1. menuBars 點擊後變叉叉（動畫呈現）
    
    先設定好 CSS 樣式，再用 eventListener toggle classList
    
    ```css
    /* Rotate first bar */
    .change .bar1 {
      transform: rotate(-45deg) translate(-7px, 8px);
    }
    
    /* Fade out the second bar */
    .change .bar2 {
      opacity: 0;
    }
    
    /* Rotate last bar */
    .change .bar3 {
      transform: rotate(45deg) translate(-6px, -8px);
    }
    ```
    
    ```jsx
    const menuBars = document.getElementById('menu-bars');
    
    const toggleNav = () => {
      // Toggle: Menu Bars Open/Closed
      menuBars.classList.toggle('change');
    };
    
    menuBars.addEventListener('click', toggleNav);
    ```
    
2. 做 Menu 的側邊欄，一樣用 eventListener toggle classList
    
    製作側邊欄，並用 overlay 讓他蓋在網頁之上，並先將位置設定為視窗外，
    再設定滑進來和滑出去的 CSS 樣式
    
    ```css
    .overlay {
      position: fixed;
      z-index: 9;
      top: 0;
      right: 0;
      width: 50vw;
      height: 100vh;
      background-color: rgba(255, 255, 255, 0.8);
    	**transform: translateX(50vw);**
    }
    
    .overlay-slide-left {
      transition: all 0.8s ease-in-out;
      transform: translateX(0);
    }
    
    .overlay-slide-right {
      transition: all 0.4s ease-in-out;
      transform: translateX(50vw);
    }
    ```
    
    ```jsx
    const overlayMenu = document.getElementById('overlay');
    const nav1 = document.getElementById('nav-1');
    const nav2 = document.getElementById('nav-2');
    const nav3 = document.getElementById('nav-3');
    const navItems = [nav1, nav2, nav3];
    
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
    
    navItems.forEach(item => {
      item.addEventListener('click', toggleNav);
    })
    ```
    

### **Request 3: Click to Show More Content Boxes.**

將按鈕串接 eventListener 控制第二內容的顯示 / 隱藏

先將第二內容用 CSS `display: none;` 隱藏，在 toggle 該 CSS

```jsx
const gallery2 = document.getElementById('gallery-2');
const btn = document.getElementById('btn');

// Toggle btn wording
let isHidden = true;

const showMore = () => {
  gallery2.classList.toggle('secondary');
  isHidden = !isHidden;
  btn.textContent = isHidden ? 'See More' : 'See Less';
}

btn.addEventListener('click', showMore);
```

## 學習筆記

- `textContent` vs `innerText`
    
    [Node.textContent - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext)
    
    [Difference between textContent vs innerText](https://stackoverflow.com/questions/35213147/difference-between-textcontent-vs-innertext/50406907#50406907)
    
    1. When you are trying to alter the text, `textContent` is usually the property you are looking for.
    2. When you are trying to grab text from some element, `innerText` approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied to the clipboard. And `textContent` gives you everything, visible or hidden, including `<script>` and `<style>` elements.
    3. Since `innerText` takes CSS styles into account, reading the value of `innerText` triggers a [reflow](https://developer.mozilla.org/en-US/docs/Glossary/Reflow) to ensure up-to-date computed styles. (Reflows can be computationally expensive, and thus should be avoided when possible.)

