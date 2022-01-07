## DEMO page

[Remote Assignments - Week 1](https://elenachien1993.github.io/remote-assignments/week-1/)

## 前言碎念

想嘗試不用 template 從頭寫個簡單網頁，所以參照之前上過的課程，採用此架構去呈現

## 學習筆記

### HTML 空白 template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
		<script src="index.js"></script>
  </body>
</html>
```

### HTML 架構

先直接寫出 4 個 div 區塊，再詳細修改該區塊應該是什麼樣子

### 消除網頁預設的留邊空白

```css
body {
  margin: auto 0;
}
```

### 設定 cover 背景圖片

```css
.cover {
  background-image: url("img/cover.jpg");
  background-size: cover;
  background-position: center;
  height: 65vh;
}
```

### 設定 grid

```css
.grid-wrapper {
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

.box > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.box {
  padding: 50px;
  margin: 20px;
}
```

### 修改一下 RWD 樣式

因為覺得當螢幕變窄後，grid 圖片間距過大，所以略加調整

```css
@media only screen and (max-width: 600px) {
  .box {
    padding: 20px 30px;
    margin: 10px;
  }
}
```
