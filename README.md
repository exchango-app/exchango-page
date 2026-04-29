# Exchango AI 웹사이트

Exchango AI 앱의 소개, 다운로드, 개인정보처리방침을 제공하는 정적 웹사이트입니다.

## 사이트 정보

- 운영 도메인: `https://exchango.app`
- 커스텀 도메인 설정: `CNAME`
- 메인 페이지: `index.html`
- 앱 다운로드 브릿지: `bridge.html`
- 소개 페이지: `about.html`
- 개인정보처리방침: `privacy_policy.html`

## 프로젝트 구조

```text
.
├── index.html                 # 랜딩 페이지
├── about.html                 # 앱 소개 페이지
├── privacy_policy.html        # 개인정보처리방침
├── bridge.html                # App Store / Play Store 리다이렉트 페이지
├── assets/                    # 앱 아이콘, 소셜 이미지, 스토어 배지, 스크린샷
├── css/                       # 페이지 스타일 및 공통 언어 선택기 스타일
├── js/
│   ├── i18n-core.js           # 공통 i18n 엔진 및 언어 선택기
│   └── translations/          # 페이지별 14개 언어 번역 사전
├── lib/lucide.js              # 로컬 아이콘 라이브러리 번들
├── robots.txt                 # 검색 엔진 크롤링 설정
├── sitemap.xml                # hreflang 포함 검색 사이트맵
└── rss.xml                    # RSS 피드
```

## 로컬 미리보기

별도 설치 과정이 없는 정적 사이트입니다.

```bash
python3 -m http.server 8000
```

실행 후 브라우저에서 아래 주소를 열면 됩니다.

```text
http://localhost:8000/
```

HTML 파일을 직접 열어도 대부분 확인할 수 있지만, 실제 배포 환경에 가깝게 보려면 로컬 서버로 확인하는 편이 좋습니다.

## 다국어 지원

언어는 URL 파라미터 방식으로 동작합니다.

```text
/?lang=en
/about.html?lang=ko
/privacy_policy.html?lang=ja
```

지원 언어:

```text
ko, en, ja, zh, es, fr, de, it, pt, ru, ar, hi, th, tr
```

핵심 로직은 `js/i18n-core.js`에 있습니다.

- `?lang=` 값, 로컬 스토리지, 브라우저 언어 순서로 현재 언어를 감지합니다.
- `[data-i18n]`, `[data-i18n-attr]` 속성을 기반으로 텍스트와 속성을 번역합니다.
- 내부 링크에 현재 `?lang=` 값을 유지합니다.
- `html[lang]`과 아랍어 RTL 방향을 자동으로 설정합니다.
- 공통 언어 선택기와 모바일 바텀시트를 생성합니다.
- 언어 변경 시 canonical, `og:url`, `og:locale`, hreflang 메타데이터를 동기화합니다.

번역 파일:

- `js/translations/common.js`
- `js/translations/index.js`
- `js/translations/about.js`
- `js/translations/privacy.js`
- `js/translations/bridge.js`

## SEO 관리

색인 대상 페이지에는 다음 항목을 유지해야 합니다.

- 언어별 `<title>`과 meta description
- canonical URL
- 모든 지원 언어에 대한 `hreflang`
- 절대 URL 기반 Open Graph / Twitter 이미지
- 필요한 경우 JSON-LD 구조화 데이터

현재 색인 대상 페이지:

- `/`
- `/about.html`
- `/privacy_policy.html`

`bridge.html`은 스토어 이동용 페이지이므로 `noindex, follow`로 설정되어 있습니다.

SEO 관련 페이지나 언어 URL을 바꾸면 함께 확인할 파일:

- `sitemap.xml`
- `rss.xml`
- `assets/gp_image.png` 크기 변경 시 각 HTML의 Open Graph 이미지 크기 메타

현재 소셜 공유 이미지:

```text
assets/gp_image.png
1200 x 630
```

## 주요 에셋

- `assets/app-icon.png` - 앱 아이콘 원본
- `assets/gp_image.png` - Open Graph / 소셜 공유 이미지
- `assets/app_store.svg` - App Store 배지
- `assets/play_store.svg` - Google Play 배지
- `assets/screenshots/` - 랜딩 페이지에 사용되는 앱 스크린샷

`gp_image.png`를 다시 만들 경우, HTML의 메타 크기도 실제 이미지와 맞춰야 합니다.

```html
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

## 검증 명령

자주 쓰는 로컬 검증 명령입니다.

```bash
node --check js/i18n-core.js
node --check js/translations/about.js
xmllint --noout sitemap.xml rss.xml
```

JSON-LD 구조화 데이터는 배포 후 Google Rich Results Test 또는 Schema Markup Validator에서 확인하는 것을 권장합니다.

## 배포 전 체크리스트

1. 메인 페이지, 소개 페이지, 개인정보처리방침을 모바일/데스크톱에서 확인합니다.
2. 모바일 메뉴와 언어 선택 바텀시트가 정상적으로 열리고 닫히는지 확인합니다.
3. `assets/gp_image.png`가 소셜 미리보기에서 의도대로 보이는지 확인합니다.
4. SEO 변경 후 `https://exchango.app/sitemap.xml`을 검색엔진 도구에 다시 제출합니다.

## 배포

정적 파일만으로 구성되어 있어 GitHub Pages 같은 정적 호스팅에 바로 배포할 수 있습니다.

