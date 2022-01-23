## 作業項目
- 完成 4 個步驟來架設一個簡單的 server

### Assignment 2: Build Backend API for Front-End
#### 學習筆記

- 如何判斷正整數
    
    用正規表達式檢查，使用以下的正規表達式規則
    
    ```jsx
    const expresstion = /^[0-9]*[1-9][0-9]*$/;
    const regex = new RegExp(expression);
    if (number.match(regex)) {
    	
    }
    ```
    
- 若 query string 為非正整數，則顯示 error message
    
    一開始如下面這樣寫完，發生一個問題：
    當 errMessage 只要出現過，就算 query string 為正整數，那一行 errMessage 還是會存在
    
    ```jsx
    app.get('/getData', (req, res) => {
      const { number } = req.query;
      const template = { number };
      
    	// 判斷是否為正整數
      const expres = /^[0-9]*[1-9][0-9]*$/;
      const regex = new RegExp(expres);
      if (number.match(regex)) {
        let sum = 0;
        for (let i = 1; i <= number ; i++) {
          sum += i;
        }
        template.sum = sum;
      } else {
        errMessage = 'Sorry, Wrong Parameter.';
        template.errMessage = errMessage;
      }
    
      res.render('getData', template);
    })
    ```
    
    <aside>
    💡 在 true 的條件式一開始把 errMessage 清空即可解決此問題
    
    </aside>
    
    ```jsx
    app.get('/getData', (req, res) => {
      const { number } = req.query;
      const template = { number };
      
    	// 判斷是否為正整數
      const expres = /^[0-9]*[1-9][0-9]*$/;
      const regex = new RegExp(expres);
      if (number.match(regex)) {
    		errMessage = '';
        let sum = 0;
        for (let i = 1; i <= number ; i++) {
          sum += i;
        }
        template.sum = sum;
      } else {
        errMessage = 'Sorry, Wrong Parameter.';
        template.errMessage = errMessage;
      }
    
      res.render('getData', template);
    })
    ```
### Assignment 3: Connect to Backend API by AJAX
#### 學習筆記

一開始對於這一題蠻困惑，不確定 render static HTML 檔案跟前面在 server 寫的 pug 差在哪裡，後來發現問題應該要這樣問：Static vs Dynamic Websites - What's the Difference?

[Dynamic Websites vs Static Pages vs Single Page Apps (SPAs)](https://www.youtube.com/watch?v=Kg0Q_YaQ3Gk)

[Dynamic vs SPA vs Static Websites](https://academind.com/tutorials/dynamic-vs-static-vs-spa)

### **Static Websites**

所有的 HTML / CSS / JS 檔案都已經寫好放在 server，但不是指 user 不能跟網頁互動，這類型的網站是透過瀏覽器的 JS 來改變 user 會看到的畫面

source code 不會根據不同 request 而改變

### Dynamic **Websites**

Source code 會根據 user 發出的 request 不同，每次都動態產生不同的 HTML code

這種方式的缺點是，每一個 request 每一頁都需要從 server 重新產生，user 會一直需要等待新的頁面被傳回來，所以第三種方法誕生了 >> SPA

### SPA (Single Page Application)

The server only returns one basic HTML page for **all incoming requests** (no matter the URL).

But that single HTML page contains a lot of JavaScript code (typically outsourced into separate files) which is responsible for changing the HTML code (technically, the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)).

The server returns one single, pre-generated HTML page which in turn contains JavaScript code that changes the page dynamically in the browser. Data usually fetched via web APIs.

#### 遇到的問題

1. 同一個 route 的同一個 request 不能同時使用 `res.render()` 和 `res.json()`
    
    目前先把 API get request 發送至 `/getData.json?number=10`
    
    同學的建議回覆：
    
    寫 route 的時候 會把 path 跟想要回傳的東西分開去思考，把 path 當作希望別人接觸的入口，而這個入口可以做的事情有 CRUD (create>post, read>get, update>patch put, delete > delete)， 也就是可以接受不同的 http request 進而再去寫要給什麼 response （可能是純粹回饋data 的 json 也可能是一個要 render 的 pug）
    
2. 在用 async await 的時候卡很久，才發現我的邏輯順序錯誤
    
    一開始我把 API request 的 fn 另外寫，然後在 showResult function 中呼叫他（用一個變數存他的 return），結果一直無法正常執行 showResult function 的後續行為，因為回傳的是 promise 而且還 pending 中
    
    ```jsx
    async function getData (num) {
      const url = `http://localhost:3000/getData.json?number=${num}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log('this is fetch return:', data.sum);
      return data.sum;
    }
    
    const getResult = (e) => {
      e.preventDefault();
      inputNumber = e.srcElement[0].valueAsNumber;
      console.log('this is input:', inputNumber);
      if (inputNumber > 0) {
        resultNumber = getData(inputNumber);
        console.log(resultNumber);   // 回傳 Promise pending
        textResultEl.textContent = `Your input is: ${inputNumber}, Your sum value is: ${resultNumber}`;
        inputContainer.hidden = true;
        resultContainer.hidden = false;
      } else {
        alert('Your number must be bigger than zero.')
      }
      
    }
    ```
    
    <aside>
    💡 應該是要把 showResult function 在 API request 中呼叫
    
    </aside>
    
    後來把三個動作的 fn 都分開來寫：submitNumber / Fetch API / showResult
    
    ```jsx
    const submitNumber = (e) => {
      e.preventDefault();
      inputNumber = e.srcElement[0].valueAsNumber;
      if (inputNumber > 0) {
        getData(inputNumber);
      } else {
        alert('Your number must be bigger than zero.')
      }
    };
    
    const showResult = (data) => {
      textResultEl.textContent = `Your input is: ${inputNumber}, Your sum value is: ${data}`;
      inputContainer.classList.toggle('hidden');
      resultContainer.classList.toggle('hidden');
    };
    
    const resetCalculator = () => {
      inputField.value = '';
      inputContainer.classList.toggle('hidden');
      resultContainer.classList.toggle('hidden');
    };
    
    // API request
    async function getData (num) {
      const url = `http://localhost:3000/getData.json?number=${num}`;
      const res = await fetch(url);
      const data = await res.json();
      
      showResult(data.sum);
    }
    
    inputForm.addEventListener('submit', submitNumber);
    resetBtn.addEventListener('click', resetCalculator);
    ```
### Assignment 4: HTTP Cookie (Advanced Optional)
#### 學習筆記

1. 原本 form 元素的 method 是 `post`，但因為題目是要從 HTTP parameter 來拿取資料並存在 cookie 中，並不是從 `req.body`，所以要將 method 改為 `get`
    
    使用 GET 的時候我們直接將要傳送的資料以 Query String（一種Key/Vaule的編碼方式）加在我們要寄送的地址 URL 後面