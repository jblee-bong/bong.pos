---
title: "IOS TestFlight -4- Provisioning Profiles 등록"
date: 2021-04-30T00:13:00+09:00
categories: 
    - IOS
share: false
---

# 페이지 목차
- 1. [Certificates 인증서 생성 방법]({% post_url /ios_testFlight/2021-04-30-title-1-Certificates-인증서-생성 %})
- 2. [AppId 등록]({% post_url /ios_testFlight/2021-04-30-title-2-AppId-등록 %})
- 3. [Device 등록]({% post_url /ios_testFlight/2021-04-30-title-3-Device-등록 %})
- 4. Provisioning Profiles 등록
- 5. [AppStoreConnect에서 앱 생성]({% post_url /ios_testFlight/2021-04-30-title-5-AppStoreConnect-에서-앱-생성 %})
- 6. [Project Archive]({% post_url /ios_testFlight/2021-04-30-title-6-Project-Archive-하기 %})
- 7. [TestFlight를 이용해 테스트]({% post_url /ios_testFlight/2021-04-30-title-7-testFlight를-이용해-테스트 %})


# 4. Provisioning Profiles 등록

![4-1](/images/ios_testFlight/4-1.png)

- 애플 개발자 홈페이지 -> Profiles 메뉴에서 +버튼 클릭

![4-2](/images/ios_testFlight/4-2.png)

- iOS App Destribution (xcode에서 debug용)과 Ad Hoc (내부 테스터에게 배포용) 각각 체크하여 생성
  > 두 번 진행해야 합니다.

![4-3](/images/ios_testFlight/4-3.png)

- AppID에서 적용할 앱 선택

![4-4](/images/ios_testFlight/4-4.png)

- Certificate 선택

![4-5](/images/ios_testFlight/4-5.png)

- Device 선택

![4-6](/images/ios_testFlight/4-6.png)

- Name입력 후 Generate

![4-7](/images/ios_testFlight/4-7.png)

- Download 저장

![4-8](/images/ios_testFlight/4-8.png)

## Xcode에 위에서 받은 Provisioning Profile 등록

---

- Automatically manage signing 해제

![4-9](/images/ios_testFlight/4-9.png)

- Debug, Release 각각 import Profile하여 위에서 받은 Provisioning Profile 등록 (debug - Development, Release - Ad hoc)

![4-10](/images/ios_testFlight/4-10.png)

![4-11](/images/ios_testFlight/4-11.png)

- Warning메세지가 나오는 경우

  - Bundle ID를 위 "Bundle Identifier"를 제대로 바꾸지 않은 경우 (Xcode에서 앱 생성 할 때의 BundleID로 하는게 안전 - info.plist등의 파일에서 Bundle ID를 다같이 바꾸어 줘야 제대로 반영)
  - "doesn't include signing certificate"... 라고 아래와 같이 뜨는 경우

Provisioning Profile 만들 때, 아래 select all하여 다시 만들어, xcode에 포함시키면 해결 완료

![4-12](/images/ios_testFlight/4-12.png)

> Provisioning Profile 등록 시 오류

- provisioning profile doesn't include the com.apple.developer.applesignin entitlement. 오류

  - 해당 프로젝트 폴더의 platforms/ios/projectName 폴더에서
  - .entitlements 파일안의 해당 오류를 제거

---

- references: [https://0urtrees.tistory.com/59](https://0urtrees.tistory.com/59), [https://ios-development.tistory.com/246](https://ios-development.tistory.com/246)
- Written by: 박상길 (fkdl3919@gmail.com)
- reporting date: 2021-04-19