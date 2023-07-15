# position
CSS 스타일 `position`에 대해 살펴본다.

## 참고
`reference3.pdf`

> `position`은 요소를 위치시킬 **기준**을 지정하는 요소로
> 1. 기본적으로 `<body>`를 기준으로 하고,
> 2. 모든 요소는 `static` 값( 기준 없음 )이 default임.
> 3. `relative`는 요소 자기 **자신**을 기준으로 설정하는 값으로,
> 4. 이를 적용하면 구조적 자손들이 자신을 `poistion`상의 부모로 받아들임.
> 5. `absolute`는 `position` 상의 **부모**를 기준으로 설정하는 값.
> 6. `fixed`는 `viewport`를 기준으로 설정하는 값.
> 7. `absolute` 및 `fixed`를 적용하면 `display` 속성이 `block`으로 변경됨.
