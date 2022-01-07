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
## 全域忽略 .DS_Store 文件

[[筆記] Git 忽略 .DS_Store 等排除檔案 @地瓜大的飛翔旅程](https://smlpoints.com/notes-git-ignore-ds_store-files-and-so-on-gitignore.html)

[[Day6] Git版本控制 - 基本操作篇 （MacOS） - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10263959?sc=hot)

1. 終端機回到根目錄（使用者），新增 ~/.gitignore_global 檔案
    
    `$ touch ~/.gitignore_global`
    
2. 用文字編輯器編輯該檔案，新增 .DS_Store 至檔案中
    
    `$ vi ~/.gitignore_global`
    
    點擊 `i` 開始編輯，編輯完後按 esc 再輸入 `:wq` 儲存並離開
    
3. 在終端機輸入以下指令
    
    `git config --global core.excludesfile ~/.gitignore_global`
    
4. 因為之前已有 DS_Store 檔案，故回到資料夾中刪除
    
    `git rm --cached .DS_Store`
    
5. commit 修改並推上 github，完成！
