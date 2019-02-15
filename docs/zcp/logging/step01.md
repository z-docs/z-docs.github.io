---
title: Step 01
next: false
---

# Step 01. Logging

## Index Pattern 생성

1. Left menu > Logging 클릭

   ![](./img/2019-01-28-19-07-43.png)

2. Management > Index Patterns 클릭

   ![](./img/2019-01-28-19-09-44.png)

3. Create Index Pattern 

   ![](./img/2019-01-28-19-10-34.png)

4. Index Pattern 명 입력 > Next Step
* Namespace 명 + "-*" 입력
* 아래 Index 목록에 금일 Index 가 선택되는지 확인

   ![](./img/2019-01-28-19-13-26.png)

5. Time Filter 에 time 선택 > Create index pattern 클릭

   ![](./img/2019-01-28-19-15-35.png)

## Log 검색

1. Left menu > Discover 클릭 > Index pattern 선택

   ![](./img/2019-01-28-19-18-44.png)

2. 상세 필드 선택
* log, kubernetes.pod_name add

   ![](./img/2019-01-28-19-22-07.png)

3. keyword 검색
* 검색 창에 keyword 입력 후 검색 버튼 클릭

   ![](./img/2019-01-28-19-24-05.png)

---
[[toc]]