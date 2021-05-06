---
title: "IOS TestFlight -3- Device 등록"
date: 2021-04-30T00:13:00+09:00
categories: 
    - IOS
share: false
---

### 페이지 목차
1. [Certificates 인증서 생성 방법]({% post_url /ios_testFlight/2021-04-30-title-1-Certificates-인증서-생성 %})
2. [AppId 등록]({% post_url /ios_testFlight/2021-04-30-title-2-AppId-등록 %})
3. Device 등록
4. [Provisioning Profiles 등록]({% post_url /ios_testFlight/2021-04-30-title-4-Provisioning-Profiles-등록 %})
5. [AppStoreConnect에서 앱 생성]({% post_url /ios_testFlight/2021-04-30-title-5-AppStoreConnect-에서-앱-생성 %})
6. [Project Archive]({% post_url /ios_testFlight/2021-04-30-title-6-Project-Archive-하기 %})
7. [TestFlight를 이용해 테스트]({% post_url /ios_testFlight/2021-04-30-title-7-testFlight를-이용해-테스트 %})


# 3. Device 등록

## UDID 복사

---

![3-1](/images/ios_testFlight/3-1.png)

- 테스트 할 device를 맥북에 연결 -> Xcode -> Window -> Devices and Simulators 선택
- Identifier가 UDID이므로 복사

## UDID 등록

---

![3-2](/images/ios_testFlight/3-2.png)

- 애플 개발자 홈페이지 -> Devices 메뉴에서 +버튼 클릭

![3-3](/images/ios_testFlight/3-3.png)

- platform, Device Name, Device ID 입력 후 continue

---

- references: [https://0urtrees.tistory.com/59](https://0urtrees.tistory.com/59), [https://ios-development.tistory.com/246](https://ios-development.tistory.com/246)
- Written by: 박상길 (fkdl3919@gmail.com)
- reporting date: 2021-04-19