// Assignment 1: Callback Function
function delayedResult(n1, n2, delayTime, callback){
	const func = (arg1, arg2) => {
    callback(arg1 + arg2);
  }
  setTimeout(func, delayTime, n1, n2);
}

delayedResult(4, 5, 3000, function(result){
	console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds 

delayedResult(-5, 10, 2000, function(result){
	window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

// Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback){
	async function getData (url) {
	  const resp = await fetch(url);
	  const data = await resp.json();
	  callback(data);
	  // console.log(data);  // 一個 array 包含 3 個 obj
	}
  
  getData(src);
}

function render(data){
	const body = document.querySelector('body');
  const container = document.createElement('div');
  const listContainer = document.createElement('ul');
  
  const createItem = (item) => {
    const listItem = document.createElement('li');
    const name = document.createElement('h2');
    name.textContent = item.name;
    listItem.appendChild(name);
    const description = document.createElement('p');
    description.textContent = item.description
    listItem.appendChild(description);
    const price = document.createElement('p');
    price.textContent = `優惠價：$${item.price} 元`
    listItem.appendChild(price); 
    listContainer.appendChild(listItem);
  }
  
  data.forEach( item => createItem(item) );
  
  container.appendChild(listContainer);
  body.appendChild(container);	
} 

ajax("https://appworks-school.github.io/Remote-Aassigiment-Data/products", function(response){ 
	render(response); 
});

// you should get product information in JSON format and render data in the page