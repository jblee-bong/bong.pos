---
title: "IOS TestFlight -6- Project Archive"
date: 2021-04-30T00:13:00+09:00
categories: 
    - IOS
share: false
---

### 페이지 목차
1. [Certificates 인증서 생성 방법]({% post_url /ios_testFlight/2021-04-30-title-1-Certificates-인증서-생성 %})
2. [AppId 등록]({% post_url /ios_testFlight/2021-04-30-title-2-AppId-등록 %})
3. [Device 등록]({% post_url /ios_testFlight/2021-04-30-title-3-Device-등록 %})
4. [Provisioning Profiles 등록]({% post_url /ios_testFlight/2021-04-30-title-4-Provisioning-Profiles-등록 %})
5. [AppStoreConnect에서 앱 생성]({% post_url /ios_testFlight/2021-04-30-title-5-AppStoreConnect-에서-앱-생성 %})
6. Project Archive
7. [TestFlight를 이용해 테스트]({% post_url /ios_testFlight/2021-04-30-title-7-testFlight를-이용해-테스트 %})

## 6. Project Archive 하기

- Xcode 를 킨 상태에서 바탕화면의 맨 위 상단 메뉴 중 Product > Archive 를 선택한다.

![5-1](/images/ios_testFlight/5-1.png)

> 여기서 Archive가 활성화가 안된다면?

프로젝트의 빌드 디바이스를
![5-3](/images/ios_testFlight/5-3.png)

![5-2](/images/ios_testFlight/5-2.png)

- Any IOS Device로 변경해준다.

---

- 아래 화면이 나오면 본인의 앱을 선택하고 'Distribute App'을 클릭한다.
  ![5-4](/images/ios_testFlight/5-4.png)

- 앱스토어 배포용인 App Store Connect 선택
  ![5-5](/images/ios_testFlight/5-5.png)
- Upload를 선택하면 자동으로 앱스토어커넥트에 해당 빌드가 자동으로 추가되고, Export를 선택하면 따로 파일이 추출되어 빌드버전을 수동으로 넣어줘야 한다.
  ![5-6](/images/ios_testFlight/5-6.png)
  ![5-7](/images/ios_testFlight/5-7.png)
- 자동으로 인증서를 설정
  ![5-8](/images/ios_testFlight/5-8.png)
  ![5-9](/images/ios_testFlight/5-9.jpeg)
  ![5-10](/images/ios_testFlight/5-10.jpeg)
- Upload 를 누르면 앱스토어커넥트에 업로드 된다.
  ![5-11](/images/ios_testFlight/5-11.png)
  ![5-12](/images/ios_testFlight/5-12.jpeg)

- 이 과정이 끝나면 앱 업로드가 성공되며 App Store Connect 에 앱 빌드 버전이 올라와 있을 것입니다. 약 30분 정도가 소요되며 apple에서 확인 메일을 보내줍니다.

---

- references: [https://0urtrees.tistory.com/59](https://0urtrees.tistory.com/59), [https://ios-development.tistory.com/246](https://ios-development.tistory.com/246)
- Written by: 박상길 (fkdl3919@gmail.com)
- reporting date: 2021-04-19