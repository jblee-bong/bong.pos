---
title: "IOS TestFlight -7- TestFlight를 이용해 테스트"
date: 2021-04-30T00:13:00+09:00
categories: 
    - IOS
share: false
---

# 페이지 목차
1. [Certificates 인증서 생성 방법]({% post_url /ios_testFlight/2021-04-30-title-1-Certificates-인증서-생성 %})
2. [AppId 등록]({% post_url /ios_testFlight/2021-04-30-title-2-AppId-등록 %})
3. [Device 등록]({% post_url /ios_testFlight/2021-04-30-title-3-Device-등록 %})
4. [Provisioning Profiles 등록]({% post_url /ios_testFlight/2021-04-30-title-4-Provisioning-Profiles-등록 %})
5. [AppStoreConnect에서 앱 생성]({% post_url /ios_testFlight/2021-04-30-title-5-AppStoreConnect-에서-앱-생성 %})
6. [Project Archive]({% post_url /ios_testFlight/2021-04-30-title-6-Project-Archive-하기 %})
7. TestFlight를 이용해 테스트

# TestFlight 란?

iOS 에서 공식적으로 지원해주는 Beta Testing 도구입니다.

앱스토어에 앱을 출시하는 과정은 동일합니다.

그러나 일반적인 공식 출시(모든 사용자가 제한없이 앱을 검색해서 다운받을 수 있는)와 다르게 허용된 사용자들만 앱을 다운받을 수 있어요. 

**test-flight는 회사 내부 배포용, 특정 사용자만 이용하게끔 하는 앱, 베타 테스트용으로 앱을 배포할 때 사용하는 프로그램입니다.**

앱을 이용하고자 하는 아이폰 사용자들의 Apple Id(이메일주소)를 입력하여 test-flight로 앱을 출시하구요. 

앱이 정상 출시가 되면 해당 사용자들의 이메일로 앱 다운 초대 메일이 발송이 됩니다. 

해당 메일을 확인하여 아이폰 사용자들이 앱을 다운받을 수 있습니다. 

따라서 회사 내부에서 사용하거나, 승인된 아이폰 사용자만 앱을 이용하게 할 경우 활용할 수 있습니다. 

## 사용법

사용하기에 앞서 앱스토어에 자신의 프로젝트를 Archive하여 업로드 한 상태여야 합니다.

업로드를 마친 상황이라면 테스트를 위해
[AppStore Connect](https://appstoreconnect.apple.com/) 페이지에 접속합니다.

## 내부테스터 등록

[AppStore Connect](https://appstoreconnect.apple.com/) 페이지에 접속합니다.

![7-1](/images/ios_testFlight/7-1.png)
위 화면에서 '사용자 및 액세스' 를 클릭합니다.

![7-3](/images/ios_testFlight/7-3.png)
위 화면에서 + 를 통하여 신규 사용자를 등록해 줍니다.

### 신규 사용자 추가
![7-4](/images/ios_testFlight/7-4.png)

위 화면에서 테스터 정보와 역할을 입력해준 뒤 초대를 해줍니다

![7-1](/images/ios_testFlight/7-1.png)
위 화면에서 '나의 앱' 을 클릭합니다.

그 후 앱스토어에 배포된 앱을 클릭하여 상세정보를 확인하고 TestFlight 탭으로 이동합니다.
![7-2](/images/ios_testFlight/7-2.png)

테스트를위한 테스터 추가는 위 사진에 보이는 것처럼 테스터 탭의 + 아이콘을 눌러 추가해주면 됩니다.

하지만 내부테스터를 모집해 테스트하기 위함이라면 내부테스터를 추가해줘야 합니다.


