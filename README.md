# winterdevcamp-personalproject
[smilegate] 2022 윈터데브캠프 
개인프로젝트 URL Shortner
강원 toPangyo 선원종
## 프로젝트 기간
  * 12.2 ~12.26
## 프로젝트 내용
  [ Bitly ](https://bitly.com)과 유사한 URL단축기 만들어보기

## what is the URL Shortener
  URL 단축 서비스는 긴 URL에 대한 별칭 또는 단축 URL을 생성합니다. 사용자가 이러한 짧은 링크를 방문하면 원래 URL로 리디렉션됩니다.
  예를 들어 다음과 같은 긴 URL을 더 짧은 URL로 변경할 수 있습니다.

**긴 URL** : [ https://www.youtube.com/watch?v=qM0vhAI6k0s&ab_channel=%EC%9B%90%ED%94%8C%EB%A6%ACOneplaylist ](https://www.youtube.com/watch?v=qM0vhAI6k0s&ab_channel=%EC%9B%90%ED%94%8C%EB%A6%ACOneplaylist)

**짧은 URL** : [ http://localhost:5000/LdT7ddtbL ](http://localhost:5000/LdT7ddtbL) <- 도메인은 localhost로 처리

##  URL Shortener가 필요한 이유
URL 단축기는 일반적으로 URL을 공유할 때 공간을 절약할 수 있고 여러 장치에서 링크를 최적화하여 개별링크를 추적할 수 있습니다.

## 요구사항
 다음 요구사항을 충족해보자

### 기능적 요구사항
- URL 입력 폼 제공
- 단축 후 결과 출력
- 동일한 URL을 입력 할 경우 항상 동일한 shortening 결과 값이 나와야 함
- shortening 의 결과 값은 8문자 이내로 생성
- 브라우저에서 shortening URL을 입력하면 원래 URL로 리다이렉트
- 도메인은 localhost 로 처리

### 비기능적 요구사항
- 많은 입출력시 최적화
- 시스템이 확장가능하고 효율적

## 기술스택 
- JavaScript
- EJS
- express
- mongoDB

## 데이터모델 설계
본래 긴 URL과 단축된 짧은 URL만을 사용

###  NoSQL사용의 이유
데이터가 강력한 관계형이 아니고 너무나 간단한구조를 가지고 있으며 처리가 빠른 [ MongoDB ](https://www.mongodb.com)를 사용
[참고자료](https://www.karanpratapsingh.com/courses/system-design/sql-vs-nosql-databases)

## 추후 처리해보고 싶은 작업
- 지표분석: 데이터베이스의 URL 항목과 함께 방문자의 국가, 플랫폼, 조회수 등과 같은 메타데이터를 저장하고 업데이트해보고 싶습니다.
- 보안: 비공개 URL 및 인증을 도입하여 특정 URL에 액세스할 수 있는 권한이 있는 사용자 ID를 저장하고 사용자에게 적절한 권한이 없으면 HTTP 401(권한 없음) 오류가 반환되게끔

### 개발관련 과정에서 궁금했던 부분
- 이번 프로젝트에서 NoSQL을 사용한 이유를 말씀드렸는데 해당하는 내용이 정말로 해당하는지 알고싶습니다.
- 캐시를 통해서 해당 프로젝트의 성능을 더 개선할 수 있을지 궁금합니다. 어떻게 접근해야하는지.

## 구현
![URL Shortener_screenshot](https://user-images.githubusercontent.com/80678280/209718402-e7fa6d1b-99cb-4f72-b7b4-890ea4fb06d1.png)