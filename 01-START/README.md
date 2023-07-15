# style initialization
`<body>` 태그 내용 다 삭제하고 `<div>` 태그를 넣은 다음
```html
<body>
  <div></div>
</body>
```
`css/main.css` 파일 내 `div` 선택자를 다음과 같이 수정해보자.
```css
div {
  width: 200px;
  height: 100px;
  background-color: orange;
}
```
그러면 개발자 도구에서 확인 가능하지만 오렌지 박스가 마진을 가진 채 위치해 있다.

> * 브라우저마다 기본적으로 default 스타일이 있음.
> * 때문에 브라우저에 따라 웹 페이지 글꼴이나 배열 등이 다를 때가 있어서 통일화 필요.

설정하지 않은 스타일로 고민하지말고 초기화하자.

## CDN 입력
구글에 `reset.css cdn` 검색해보면 여러 개 나오는데 온라인으로 제공하는 코드를 연결해서 사용. 아무 곳에서나 `copy HTML` 같은 걸로 스타일 적용 코드 복사하자. 

```html
<head>
  ...
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
  <link rel="stylesheet" href="./css/main.css">
  ...
</head>
<body>
  <div></div>
</body>
</html>
```
그러면 스타일 초기화 되어 마진 없어진 것 확인 가능.

> `css/main.css` 적용 코드보다 위에 위치해야 함.