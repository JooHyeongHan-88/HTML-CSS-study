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
프로젝트 디렉토리 내 `main.css` 생성 후 아래 입력 및 저장.
```css
div {
  color: red;
  font-size:  100px;
}
```
하지만 아무 변환 없음.

## 3. CSS 연결
`<head>` 태그 내에 `link` 입력 후 `Enter`하고 아래 입력 및 저장.
```html
<link rel="stylesheet" href="./main.css">
```
`Go Live` 확인 시 CSS 속성 변한다.

> 외부 파일 연결하지 않고 `<head>` 태그 내에 `<style>` 태그 작성하여 CSS 스타일 코드 적용 가능.

## 4. JS 연결
프로젝트 디렉토리 내 `main.js` 생성 후 아래 입력 및 저장.
```javascript
console.log('삼성 파운드리!');
```

`<head>` 태그 내에 아래 입력.
```html
<script src="./main.js"></script>
```

`Go Live` 웹 페이지에서 `개발자 도구` 들어 간다.

> `ctrl + i` 혹은 `F12`

`콘솔`에 들어가면 `삼성 파운드리!` 적혀있음.

> * 외부 파일 연결하지 않고 `<head>` 태그 내에 `<script>` 태그 작성하여 JavaScript 코딩 가능.
> * `</body>` 태그 아래에도 `<script>` 태그 작성 가능.
> * 브라우저 파싱 및 해석이 코드 Top Down이라 아래에 보통 작성.
