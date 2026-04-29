<claude-mem-context>
# Memory Context

# [exchango-page] recent context, 2026-04-29 6:48pm GMT+9

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 50 obs (19,155t read) | 2,767,821t work | 99% savings

### Apr 29, 2026
1698 4:01p 🔴 Mobile store badges changed to horizontal row layout
1699 4:02p 🔵 CTA section store-row still overrides to column layout on mobile
1700 " 🔴 CTA section store-row also fixed to horizontal layout on mobile
1701 " 🔵 Store badge horizontal layout visually verified across three mobile viewport widths
1702 " 🔴 Logo tagline ("subtitle") was hidden at ≤380px on all pages
1703 " 🔴 About page stat-card text overflow fixed at 320px viewport
1704 4:04p 🔵 Exchango AI UI Missing Subtitles in Header and Other Areas
1705 4:08p 🔴 Fixed mobile feature card bottom clipping by removing negative margin
1706 4:38p 🔴 CTA 하단 주황색 그라데이션 어색함 개선
1707 " 🔴 CTA 섹션 하단 주황색 그라데이션 어색함 개선 — 스크린샷 검증 완료
1708 4:39p ⚖️ 공통 네비게이션 메뉴 구성 결정
1709 4:45p 🔵 네비게이션 5개 항목 HTML 확인 및 브라우저 캐시 이슈 발견
S877 Exchango AI 웹사이트 네비게이션 롤백 + bridge.html CSS 수직 중앙 정렬 수정 완료 최종 검증 (Apr 29 at 4:52 PM)
S874 Apply i18n to index, bridge, about, and privacy pages of exchango-page static site (Apr 29 at 4:53 PM)
1710 4:54p 🔵 exchango-page Project Structure and Existing i18n Infrastructure
1711 " 🔵 i18n Pattern and Coverage Gap Across exchango-page HTML Files
1712 " 🔵 about.html and privacy_policy.html Are Entirely Korean-Only with Zero i18n Markup
1713 " 🔵 common-translations.js Already Contains About Page Translations But about.html Never Loads It
1714 4:55p 🔵 index.html Uses Inline I18N Script (KO/EN Only), Not External Translation Files
S876 Apply full 14-language i18n to index, bridge, about, and privacy pages — architecture design phase (Apr 29 at 4:55 PM)
S878 Hardcoded ticker band exchange rates in exchango-page index.html — user wants to replace with live data (Apr 29 at 4:56 PM)
1715 4:57p 🔵 Complete data-i18n Key Inventory for index.html
1717 " ⚖️ i18n Implementation Kicked Off with Task Tracking — Unified Architecture Confirmed
1716 4:58p 🔵 Complete KO/EN Translation Dictionary Found Inline in index.html
1718 " 🟣 i18n Implementation Plan Formalized with 8-Task Breakdown, Directory Created
1719 " 🟣 js/i18n-core.js Created — Unified i18n Engine for All 4 Pages
1720 4:59p 🟣 css/i18n.css Created — Language Picker Dropdown Styles
1721 5:00p 🟣 js/translations/common.js Created — 14-Language Shared Translation Dictionary
1724 5:01p 🟣 Task 6 Complete: bridge.html migrated to unified i18n system
1725 " ✅ Task 3 (about.html i18n) marked in_progress
1731 " 🟣 about.html + js/translations/about.js — i18n fully applied (Task 3 complete)
1732 " 🟣 js/translations/privacy.js created — 14-language privacy policy translations (Task 4)
1722 5:09p 🔵 Ticker Band Exchange Rates Are Hardcoded in index.html
S879 Replace hardcoded ticker band with live exchange rates using fawazahmed0 currency API (no key, CORS-friendly) (Apr 29 at 5:09 PM)
S882 Exchango AI 웹사이트 전체 페이지 i18n(국제화) 구현 — 14개 언어 지원, 모든 HTML 페이지 대상 (Apr 29 at 5:10 PM)
1723 5:11p 🔵 index.html Script Structure Before Ticker Live-Data Implementation
1727 " 🔵 Footer Has i18n System — Rate Attribution Needs Bilingual Support
1728 " 🟣 Live Exchange Rate Ticker Implemented via fawazahmed0/currency-api
S881 Live exchange rate ticker implementation on exchango-page index.html — user confirmed the result via screenshot (Apr 29 at 5:11 PM)
1726 5:12p 🟣 js/translations/about.js created with full 14-language coverage
1729 5:13p 🔵 fawazahmed0/currency-api Live Rates Verified for All 8 Ticker Pairs
1730 " 🟣 Live Ticker QA Passed — All 8 Pairs Display Real-Time Rates with Correct Direction Classes
S883 Exchango AI 웹사이트 전체 i18n 구현 + 모바일 바텀시트 언어 선택기 추가 — v1.1 캐시버스팅 적용 (Apr 29 at 5:14 PM)
S880 Replace hardcoded ticker band exchange rates with live API data — COMPLETED and verified (Apr 29 at 5:14 PM)
S884 Exchango AI i18n — CSS selector fix for DOM-portaled lang-picker menu + cache version bump to v=1.2 (Apr 29 at 5:39 PM)
1742 5:43p 🔵 Language Bottom Sheet Not Displaying on Language Selection
1743 5:44p 🔵 Exchango Language Picker Architecture: Body-Level Menu + Backdrop Pattern
1744 " 🔵 Language Picker Host Nested Inside Mobile Nav `.nav-links` Container
1745 " 🔵 Root Cause Confirmed: Mobile `.nav-links` Uses CSS `transform`, Creating Stacking Context
1746 5:46p 🔵 ROOT CAUSE FOUND: `body` Animation with `transform` Permanently Breaks `position: fixed` on Lang Picker
1747 " 🔵 Mobile Language Bottom Sheet Not Rendering
1748 " 🔵 Exchango Page: Language Picker Architecture — Body-Level Menu + Mobile Bottom Sheet
1749 5:47p 🔵 Mobile Nav Close Handler Conflicts With Language Picker Bottom Sheet
1750 " 🔵 ROOT CAUSE: `body` CSS Animation with `transform` Permanently Breaks `position: fixed` on Language Picker
1751 " 🔵 Exchango Page Git State: i18n System Files All New/Untracked
1753 " 🔴 Fixed Mobile Language Bottom Sheet: Removed `transform` from `body` Page-Enter Animation
1752 5:48p 🔵 Body `page-enter` Animation Scope: Affects All 3 Pages with Language Picker
1754 " 🔴 Verified: `page-enter` Keyframe Fix Applied — `transform` Removed, Cache Version Bumped to v2.1
1755 5:49p 🔵 Headless Chrome Available via `/Applications/Google Chrome.app` for Automated Testing
1756 " 🔵 Headless Chrome Remote Debugging Blocked by macOS EPERM on Localhost Port 9223

Access 2768k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>