# Doctype

## 1. 시작하기
VSCODE에서 프로젝트 생성

> 폴더 생성 후 `ctrl` + `k` + `o`로 폴더 연다

## 2. HTML 파일 생성
`index.html` 생성 한다.

## 3. 입력
`index.html` 내에 `i` 입력하면 자동 완성 뜨는데 그대로 `Enter`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## 4. 용어
* `<...>` ~ `</...>`를 태그라고 하고 `요소` ( `element` )의 시작과 끝을 표시한다.
* 태그는 문서의 구조를 나타내며 요소 내부 내용의 `구조적 의미`를 부여한다.
* 태그 내부에 `=`로 `값` ( `value` )을 입력하는 것들을 `속성` ( `attribute` )라 한다.

## 5. HTML 코드 구성

### HTML 버전
```html
<!DOCTYPE html>
```

* HTML5 버전 나타냄
* 예를 들어 이전 버전인 XHTML의 경우 `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Trans ...`와 같이 나오는데 알 필요 없음

### 문서 범위
```html
<html lang="en">
...
</html>
```
* `lang="en"`은 기본 언어로 한번씩 번역 추천 같은 거 뜨는 것처럼 언어 인식함

### 문서 정보
```html
<head>
    <meta charset="UTF-8"> <!-- 문자 인코딩 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- 시작 사이즈: viewport 기준으로 width가 디바이스 폭의 1.0배 -->
    <title>Document</title> <!-- 브라우저 최상단 웹 페이지 제목 -->
</head>
```
* 보이지는 않으나 웹 브라우저가 해석해야할 각종 정보를 넣음

### 문서 구조
```html
<body>
...
</body>
```
* 실제 보여질 문서의 구조
