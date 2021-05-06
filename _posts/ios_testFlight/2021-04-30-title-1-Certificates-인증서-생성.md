---
title: "IOS TestFlight -1- Certificates 인증서 생성 방법"
date: 2021-04-30T00:13:00+09:00
categories: 
    - IOS
share: false
---

### 페이지 목차
1. Certificates 인증서 생성 방법
2. [AppId 등록]({% post_url /ios_testFlight/2021-04-30-title-2-AppId-등록 %})
3. [Device 등록]({% post_url /ios_testFlight/2021-04-30-title-3-Device-등록 %})
4. [Provisioning Profiles 등록]({% post_url /ios_testFlight/2021-04-30-title-4-Provisioning-Profiles-등록 %})
5. [AppStoreConnect에서 앱 생성]({% post_url /ios_testFlight/2021-04-30-title-5-AppStoreConnect-에서-앱-생성 %})
6. [Project Archive]({% post_url /ios_testFlight/2021-04-30-title-6-Project-Archive-하기 %})
7. [TestFlight를 이용해 테스트]({% post_url /ios_testFlight/2021-04-30-title-7-testFlight를-이용해-테스트 %})



# ios 앱 배포 순서

1. Certificates 생성 및 실행하여 xcode에 등록
2. AppID 등록
3. Device 등록
4. Provisioning Profiles 등록

먼저 nativescript cli 의 tns 플러그인 으로 앱을 빌드

## CSR(CertificateSigningRequest) 생성

---

- "키체인 접근" 앱 실행
- 인증 기관에서 인증서 요청... 선택

![1-1](/images/ios_testFlight/1-1.png)

- "디스크에 저장됨", "본인이 키 쌍 정보 저장" 체크 후 이메일 주소, 이름 입력

![1-2](/images/ios_testFlight/1-2.png)

- "계속"눌러서 저장

## Key항목에 Public Key와 Private Key생성된 것을 확인

---

![1-3](/images/ios_testFlight/1-3.png)

## 애플 개발자 홈페이지에서 Certificates 생성 및 추가

---

- 위에서 만든 CSR파일을 가지고, 애플에서 certificate(앱 개발시 필요, 앱 배포시 필요)를 만드는데 사용

- 애플 개발자 홈페이지 접속: [developer.apple.com](developer.apple.com)

- Account메뉴를 누른다음, 아래 화면에서 Certificates, Identifiers & Profiles클릭 (안보이면, 개발자 계정 등록)

![1-4](/images/ios_testFlight/1-4.png)

![1-5](/images/ios_testFlight/1-5.png)

- Certificates 의 + 클릭

![1-6](/images/ios_testFlight/1-6.png)

- ios App Development 체크 후 continue

![1-7](/images/ios_testFlight/1-7.png)

- "키체인 접근"에서 만든 Certificates(CSR파일 ) 업로드 후 continue

![1-8](/images/ios_testFlight/1-8.png)

- 다운로드

> IOS Distribution용 certficate도 동일하게 하여 download

- 다운로드한 파일 확인

![1-9](/images/ios_testFlight/1-9.png)

## 다운받은 인증서를 키체인에 등록

---

- "키체인 접근" 앱 실행

"내 인증서" 클릭하여, 다운받았던 인증서를 드래그하여 추가

![1-10](/images/ios_testFlight/1-10.png)

## 인증서와 xcode 프로젝트 연동

- Xcode의 Preference 탭의 Account 에서 Team에 있는 Account Holder 더블 클릭하여 현재 존재하는 인증서 확인하면 완료

![1-11](/images/ios_testFlight/1-11.png)


---

- references: [https://0urtrees.tistory.com/59](https://0urtrees.tistory.com/59), [https://ios-development.tistory.com/246](https://ios-development.tistory.com/246)
- Written by: 박상길 (fkdl3919@gmail.com)
- reporting date: 2021-04-19