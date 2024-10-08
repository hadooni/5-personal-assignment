# 리그 오브 레전드 정보 앱

![](https://www.infobae.com/resizer/v2/YABJ7CAXOZDVHAXSDRSQQ7NJR4.jpg?auth=59414e30e8ecdd7748c9ef3b5dc07f4a9dae657baf25de1b34edf73145b89ef9&smart=true&width=992&height=558&quality=85)
Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.

<br/>

## 👉 배포 링크

https://5-personal-assignment.vercel.app/

<br/>

## 💻 작업 기간

2024.09.26.(목) ~ 2024.10.08.(화)

<br/>

## ⚒️ 개발 환경

![](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

## 📦 폴더 구조

<details>
<summary>폴더구조</summary>

```
📦my-lol-app
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂champions
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┣ 📜GeistMonoVF.woff
 ┃ ┃ ┃ ┗ 📜GeistVF.woff
 ┃ ┃ ┣ 📂items
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂rotation
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┣ 📜riotApi.ts
 ┃ ┃ ┃ ┗ 📜serverApi.ts
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜globals.css
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜ChampionDetail.tsx
 ┃ ┣ 📂public
 ┃ ┃ ┗ 📂image
 ┃ ┃ ┃ ┣ 📜lol.jpg
 ┃ ┃ ┃ ┣ 📜lol2.jpg
 ┃ ┃ ┃ ┗ 📜lol3.png
 ┃ ┗ 📂types
 ┃ ┃ ┣ 📜Champion.ts
 ┃ ┃ ┣ 📜ChampionRotation.ts
 ┃ ┃ ┣ 📜Items.ts
 ┃ ┃ ┗ 📜Props.ts
 ┣ 📜.env.local
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.mjs
 ┣ 📜package.json
 ┣ 📜postcss.config.mjs
 ┣ 📜tailwind.config.ts
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```

</details>

<br/>

## 💡 주요 기능

### 1. Home 페이지
![image](https://github.com/user-attachments/assets/33f17ac2-5b36-4d64-934a-a0c35947071d)
- 앱 소개 및 챔피언 목록, 아이템 목록, 로테이션 정보 페이지로 이동할 수 있는 링크를 제공하고 네비게이션 메뉴로도 이동할 수 있습니다.
<br/>

### 2. 챔피언 목록 페이지
![jpg](https://github.com/user-attachments/assets/831baf12-78d1-4edb-a840-f61b062825cb)
- 모든 롤 챔피언의 목록을 확인할 수 있으며 각 챔피언 클릭 시 챔피언의 정보, 스탯 등을 조회할 수 있습니다.
<br/>

### 3. 아이템 목록 페이지
![image](https://github.com/user-attachments/assets/8d08de6e-e9d8-4018-87bc-7f37ad6e5d35)
- 모든 아이템의 목록을 확인할 수 있습니다.
<br/>

### 4. 챔피언 로테이션 페이지
![image](https://github.com/user-attachments/assets/b131cecd-e24d-4931-99b6-87084bb07046)
- 현재 무료로 플레이 가능한 챔피언 목록을 확인할 수 있으며 클릭 시 각 챔피언의 정보, 스탯 등을 조회할 수 있습니다.

<br />

## 🏹 트러블 슈팅

### 1. 데이터 페칭 중 headers의 X-Riot-Token 환경변수 타입을 string | undefined 로 인식해서 데이터를 불러오지 못하는 문제
![image](https://github.com/user-attachments/assets/76df9a5d-f818-4b99-90f3-11ffa7d66a9a)

```
process.env.RIOT_API_KEY!
환경변수 끝에 느낌표를 추가해 typescript 컴파일러가 해당 변수는 undefined 또는 null이 될 수 없음을 알려주었습니다.
```

<br />

### 2. fetch json() 메서드 적용이 안되는 문제
![image](https://github.com/user-attachments/assets/749f2497-b25d-4296-ba96-bb6793bc4c4c)

```
응닶값을 await res.text() 바꿔준 뒤, 바꾼값에 JSON.parse()로 파싱하여 해결하였습니다.
```
