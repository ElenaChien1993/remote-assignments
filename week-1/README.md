### DEMO page

[Remote Assignments - Week 1](https://elenachien1993.github.io/remote-assignments/week-1/)

## 前言碎念

~~想嘗試不用 template 從頭寫個簡單網頁，所以參照之前上過的課程，採用此架構去呈現~~

後來發現真的是太醜，用 CSS 課程中的 layout 改寫

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

### 消除網頁預設的留邊空白以及設定 border-box

```css
* {
	box-sizing: border-box;
}

body {
	margin: 0;
}
```

### 做 nav bar 小技巧

用 `flex` 結合 `margin: auto;` 

```css
.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
}

.item-1 {
  margin-right: auto; /* 置右對齊 */
} 
```

### 用 mobile first approch

先寫出行動裝置的排版樣式，再用 media query 來寫大螢幕

```css
@media (min-width: 769px) {
	/* 修改內容 */
}
```
## 【補】忽略了上週的作業要求....

### menu bars 和 nav list 的轉換

小螢幕用 menu bars；大螢幕用 nav list 呈現

[How To Create a Menu Icon](https://www.w3schools.com/howto/howto_css_menu_icon.asp)

1. 新增 menu bars 區塊
2. 先將 nav list 設定為 `display: none;`
3. 在 media query 中換把 menu bars 隱藏，並恢復 nav list 設定為 `display: flex;`

### 新增 CTA 按鈕

```css
.btn-container {
	width: 90%;
	margin: 1rem auto;
	display: flex;
	justify-content: center;
}

.btn {
	text-align: center;
	cursor: pointer;
	font-size: 1.2rem;
	height: 2rem;
	border: none;
	border-radius: 10px;
	color: #fff;
	background: #9EB998;
	outline: none;
	padding: 0.5rem 1.8rem;
	box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);
}
	
.btn:hover {
	filter: brightness(90%);
}

.btn:active {
	transform: translate(0, 0.3rem);
	box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
}
```

### 讓欄位在最大螢幕時維持兩欄位，並限制最大寬度不超過 1200px

```css
@media (min-width: 1200px) {
	.main-header,
	.row {
		width: 80%;
		max-width: 1150px;
	}
  
  .main-header {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .col {
		max-width: 600px;
    flex: 1 50%;
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
