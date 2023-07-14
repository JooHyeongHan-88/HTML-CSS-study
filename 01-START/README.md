# link
CSS 및 JS 연결해보자.

## 1. div 태그
`<body>` 태그 내 아래 작성하여 `Go Live`로 확인해보자.
```html
<body>
  <div>Hello world!</div>
</body>
```

## 2. CSS 작성
> 프로젝트 디렉토리 내 `main.css` 생성.

아래 입력.
```css
div {
  color: red;
  font-size:  100px;
}
```
하지만 아무 변환 없음.

## 3. CSS 연결
> `<head>` 태그 내에 `link` 입력 후 `Enter`

아래 입력.
```html
<link rel="stylesheet" href="./main.css">
```
`Go Live` 확인 시 CSS 속성 변한다.

## 4. JS 연결
> 프로젝트 디렉토리 내 `main.js` 생성.

아래 입력.
```javascript
console.log('삼성 파운드리!');
```

`<head>` 태그 내에 아래 입력.
```html
<link rel="stylesheet" href="./main.css">
```

`Go Live` 웹 페이지에서 `개발자 도구` 들어 간다.

> `ctrl + i` 혹은 `F12`

`콘솔`에 들어가면 `삼성 파운드리!` 적혀있음.
