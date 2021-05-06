---
title: "IOS TestFlight -2- AppId 등록"
date: 2021-04-30T00:13:00+09:00
categories: 
    - IOS
share: false
---

### 페이지 목차
1. [Certificates 인증서 생성 방법]({% post_url /ios_testFlight/2021-04-30-title-1-Certificates-인증서-생성 %})
2. AppId 등록
3. [Device 등록]({% post_url /ios_testFlight/2021-04-30-title-3-Device-등록 %})
4. [Provisioning Profiles 등록]({% post_url /ios_testFlight/2021-04-30-title-4-Provisioning-Profiles-등록 %})
5. [AppStoreConnect에서 앱 생성]({% post_url /ios_testFlight/2021-04-30-title-5-AppStoreConnect-에서-앱-생성 %})
6. [Project Archive]({% post_url /ios_testFlight/2021-04-30-title-6-Project-Archive-하기 %})
7. [TestFlight를 이용해 테스트]({% post_url /ios_testFlight/2021-04-30-title-7-testFlight를-이용해-테스트 %})

# 2. AppId 등록

## Xcode에서 Bundle ID 확인

---

![2-1](/images/ios_testFlight/2-1.png)

- Bundle ID형식: com.company.appname

## Apple developer에서 App ID 등록

---

- Identifiers 선택 후 +버튼 선택

![2-2](/images/ios_testFlight/2-2.png)

![2-3](/images/ios_testFlight/2-3.png);

- App IDs 체크 후 continue

![2-4](/images/ios_testFlight/2-4.png)

- App 체크 후 continue

![2-5](/images/ios_testFlight/2-5.png)

- 앱 설명과(Description) Bundle Id(Explicit) 란에 확인해둔 프로젝트 Bundle ID를 기입
- Capabilities 란에서 앱에서 사용될 기능 체크

위 사항을 체크 후 Register 클릭

---

- references: [https://0urtrees.tistory.com/59](https://0urtrees.tistory.com/59), [https://ios-development.tistory.com/246](https://ios-development.tistory.com/246)
- Written by: 박상길 (fkdl3919@gmail.com)
- reporting date: 2021-04-19