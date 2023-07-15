# Font
CSS 스타일 `Font`에 대해 살펴본다.

## 참고
`reference3.pdf`

## 구글 폰트 적용

구글 폰트 적용해보자.

> https://fonts.google.com/

1. 원하는 글꼴 선택 후 `Select {weight} +`로 사용하고 싶은 굵기 선택하자.
2. 우측 사이드 바에 `Use on the web` 메뉴에서 `<link>` 선택하여 코드 복사.
3. `index.html` 내부 `<head>` 태그에 붙여넣기.
4. 사용하고 싶은 선택자에 폰트 적용.

```css
div {
  font-family: 'Cherry Swash', 'Nanum Gothic', sans-serif;
}
```