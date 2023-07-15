# image
이미지 삽입.


## 1. img 태그
`<body>` 태그 내에 `image` 입력 후 `Enter`
아래 입력
```html
<img src="./images/samsung.png" alt="삼성로고">
```
> * `src` 속성은 이미지 소스 주소로 `http` 연결도 가능.
> * `alt` 속성은 이미지 파일 손상 되거나 뜨지 않을 때 대체 문구로 항상 쓰는 버릇 있어야 함.

## 2. 빈 태그
태그 중엔 닫지 않는 태그가 존재하고 `<img>`가 대표적. 안 해도 상관 없으나 태그 끝났단 의미로 아래와 같이 마지막에 `/` 넣어주는 걸 권장하기도 함.
```html
<img src="./images/samsung.png" alt="삼성로고" />
```