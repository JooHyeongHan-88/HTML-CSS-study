# data 이름 속성
태그 안에 `data-{변수명}={id}`를 넣으면 JavaScript에서 `{변수명}`에 해당하는 각 `{id}`의 `element`를 컨트롤 할 수 있다.

## 1. 구성

▼ `index.html`
```html
...
<head>
  ...
  <script defer src="./main.js"></script> 
</head>
<body>
  <div data-fruit-name="apple">사과</div>
  <div data-fruit-name="banana">바나나</div>
</body>
...
```
> `defer`는 브라우저가 HTML 먼저 읽고 JS 읽으란 명령으로 JS 먼저 실행되면 JS는 `fruit-name`이 무엇인지 모르기 때문에 실행 안됨.


▼ `main.js`
```javascript
const els = document.querySelector('div')

els.forEach(el => {
    console.log(el.dataset.fruitName) // fruit-name -> fruitName
})
```
> JS 변수명 규칙에 `-`를 쓸 수 없게 되어 있으므로 `fruit-name` 대신 `fruitName` 쓴다.

## 2. 확인
개발자 도구에서 로그 확인.