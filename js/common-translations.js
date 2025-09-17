// Enhanced universal translation system for Exchango FX website
(function() {
    'use strict';
    
    console.log('🚀 Universal Exchango FX translation system started');
    
    // Complete translation data for all pages
    const translations = {
        ko: {
            // ==== ABOUT PAGE ====
            about: {
                title: "About Exchango FX - Smart Currency Converter",
                heroTitle: "Exchango FX",
                heroTagline: "당신의 스마트 환율 파트너!",
                statCurrencies: "지원 통화",
                statLanguages: "지원 언어",
                statFree: "무료",
                sectionTitle1: "Exchango FX란?",
                sectionSubtitle1: "복잡한 환율 계산을 간단하고 직관적으로 만들어주는 스마트 환율 계산기입니다",
                smartCalculatorTitle: "스마트하고 직관적",
                smartCalculatorDesc: "Exchango FX는 복잡한 환율 계산을 간단하고 직관적인 작업으로 변환합니다. 여행자, 비즈니스 전문가, 다양한 통화를 다루는 모든 사람들을 위해 설계되었습니다.",
                sectionTitle2: "지원 통화",
                sectionSubtitle2: "전 세계 150개 이상의 다양한 통화를 지원합니다",
                sectionTitle3: "주요 기능",
                sectionSubtitle3: "다양한 환율 계산과 편의 기능을 제공합니다",
                sectionTitle4: "기술적 특징",
                sectionSubtitle4: "최신 기술로 구현된 안정적이고 빠른 성능",
                performanceTitle: "고성능",
                performanceDesc: "최신 모바일 기술을 활용하여 iOS와 Android에서 안정적이고 빠른 성능을 제공합니다. 스마트 캐싱과 오프라인 지원으로 어떤 네트워크 상황에서도 신뢰할 수 있는 작동을 보장합니다.",
                
                // Currency categories
                categoryMajor: "주요 통화",
                categoryMajorDesc: "세계 경제를 이끄는 주요 통화들",
                categoryAsia: "아시아 통화",
                categoryAsiaDesc: "아시아 각국의 다양한 통화들",
                categoryOther: "기타 지역 통화",
                categoryOtherDesc: "중남미, 아프리카, 오세아니아 통화",
                
                // Feature cards
                feature1Title: "오프라인 모드",
                feature1Desc: "인터넷 연결이 없는 환경에서도 기본 환율 계산 기능을 사용할 수 있습니다. 마지막으로 업데이트된 환율 정보를 기기에 저장하여 언제든지 신뢰할 수 있는 계산 결과를 제공합니다.",
                feature1Item1: "인터넷 연결 없이도 기본 계산 가능",
                feature1Item2: "마지막 환율 데이터 자동 저장",
                feature1Item3: "오프라인 상태 표시 및 안내",
                
                feature2Title: "환율 계산기",
                feature2Desc: "직관적인 인터페이스로 누구나 쉽게 사용할 수 있는 스마트 환율 계산기입니다. 150개 이상의 통화를 지원하며, 환율 정보를 활용해 정확한 계산 결과를 제공합니다.",
                feature2Item1: "환율 데이터 자동 업데이트",
                feature2Item2: "양방향 계산 및 스왑 기능",
                feature2Item3: "환율 계산 이력 기능 제공",
                
                feature3Title: "정산 기능",
                feature3Desc: "해외여행이나 국제 비즈니스에서 발생하는 복잡한 다통화 정산을 한 번에 해결하세요. 여러 사람이 각각 다른 통화로 지불한 금액들을 자동으로 계산하여 공평한 정산 결과를 제공합니다.",
                feature3Item1: "참가자별 공정한 비용 분담 계산",
                feature3Item2: "다통화 혼합 정산 지원",
                feature3Item3: "정산 이력 기능 제공",

                feature4Title: "팁 계산기",
                feature4Desc: "식당, 택시, 서비스업 등에서 필요한 팁을 쉽고 정확하게 계산할 수 있습니다. 다양한 나라의 팁 문화와 비율을 반영하여 적절한 팁을 계산하고, 인원 수에 따른 분할 계산도 지원합니다.",
                feature4Item1: "지역별 팁 문화 반영",
                feature4Item2: "인원별 팁 분할 계산",
                feature4Item3: "팁 계산 이력 기능 제공",
                
                feature5Title: "오늘의 환율",
                feature5Desc: "전 세계 주요 통화들의 실시간 환율 정보와 변동 현황을 한눈에 파악할 수 있습니다. 환율 데이터를 시각적 그래프로 표현하여 직관적으로 확인하며, 자주 확인하는 통화를 즐겨찾기에 등록하여 편리하게 모니터링할 수 있습니다.",
                feature5Item1: "환율 현황 차트 제공",
                feature5Item2: "일간 변동성 및 트렌드 표시",
                feature5Item3: "즐겨찾기 기능 관리",
                
                feature6Title: "다통화 계산기",
                feature6Desc: "하나의 입력으로 여러 통화를 동시에 비교할 수 있는 강력한 기능입니다. 예를 들어, 1000달러가 한국 원화, 일본 엔화, 유로로 얼마인지 한 화면에서 한번에 확인할 수 있어 최적의 통화를 선택하는 데 도움이 됩니다.",
                feature6Item1: "다중 통화 동시 계산",
                feature6Item2: "통화 비교 분석",
                feature6Item3: "즐겨찾기 기능 관리",
                
                feature7Title: "게임 (사다리타기 & 룰렛)",
                feature7Desc: "친구들과 함께 다양한 결정을 내릴 수 있는 재미있는 게임 기능입니다. 여행지 선택, 점심 메뉴 결정, 팀 나누기 등 일상적인 선택 고민들을 흥미진진한 게임을 통해 해결하세요.",
                feature7Item1: "클래식 사다리타기 게임",
                feature7Item2: "다채로운 룰렛 게임",
                feature7Item3: "커스텀 항목 설정",
                
                feature8Title: "각종 설정",
                feature8Desc: "개인의 사용 패턴과 환경에 맞게 앱을 맞춤 설정할 수 있습니다. 기준 통화, 언어, 테마 등 다양한 옵션을 제공하여 최적의 사용자 경험을 제공합니다.",
                feature8Item1: "기준 통화 설정",
                feature8Item2: "언어 설정 (14개 언어 지원)",
                feature8Item3: "테마 설정 (라이트/다크)",
                
                // Technology
                techHighPerformance: "고성능 처리",
                techHighPerformanceDesc: "크로스 플랫폼 네이티브 성능으로 빠른 계산 속도 제공",
                techSecureStorage: "안전한 데이터 저장",
                techSecureStorageDesc: "로컬 데이터 영구 저장으로 개인정보 보호",
                techMultilingual: "다국어 지원",
                techMultilingualDesc: "7개 언어를 지원하는 글로벌 사용자 인터페이스",
                techSmartCaching: "스마트 캐싱",
                techSmartCachingDesc: "지능형 환율 데이터 캐싱으로 빠른 접근 보장",
                techOfflineSupport: "오프라인 지원",
                techOfflineSupportDesc: "네트워크 연결 없이도 기본 기능 사용 가능",
                techAutoUpdate: "자동 업데이트",
                techAutoUpdateDesc: "환율 데이터와 앱 기능 자동 업데이트",
                
                footerCopyright: "Copyright © 2025 Exchango FX All rights reserved.",
                footerAbout: "Exchango FX 소개",
                footerSupport: "고객 지원",
                footerContact: "문의하기",
                footerPrivacy: "개인정보처리방침"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "개인정보처리방침",
            privacySubtitle: "귀하의 개인정보는 안전하게 보호됩니다",
            statSecure: "보안 우선",
            statPrivate: "개인정보 보호",
            statTransparent: "투명한 정책",
            
            // Section 1: Introduction
            privacySection1Title: "소개",
            privacySection1Subtitle: "Exchango FX 서비스 이용을 위한 개인정보 처리 정책",
            privacyIntroTitle: "개인정보처리방침 안내",
            privacyIntroDesc: "Exchango FX는 이용자의 개인정보를 중요시하며, 개인정보보호법 및 관련 법령을 준수합니다. 본 개인정보처리방침은 Exchango FX가 제공하는 환율 계산기 앱 서비스(이하 \"서비스\")와 관련하여 이용자의 개인정보가 어떻게 수집, 이용, 보호되는지를 설명합니다.",
            privacyIntroItem1: "시행일: 2024년 1월 1일",
            privacyIntroItem2: "최종 수정일: 2024년 12월 1일",
            privacyIntroItem3: "문의: exchango.app@gmail.com",
            
            // Section 2: Information We Collect
            privacySection2Title: "수집하는 정보",
            privacySection2Subtitle: "서비스 제공을 위해 최소한의 정보만을 수집합니다",
            privacyCollect1Title: "기기 정보 (버그 제보 시)",
            privacyCollect1Desc: "Exchango FX는 일상적인 사용 중에는 기기 정보를 수집하지 않습니다. 단, 사용자가 버그를 제보할 때 문제 해결을 위해 기기 유형, 운영체제 버전, 앱 버전 등의 기술적 정보가 포함될 수 있습니다.",
            privacyCollect1Item1: "버그 제보 시에만 기기 정보 제공",
            privacyCollect1Item2: "자동 수집이 아닌 사용자 제공 방식",
            privacyCollect1Item3: "문제 해결 목적으로만 사용",
            privacyCollect2Title: "사용자 설정",
            privacyCollect2Desc: "개인화된 서비스 제공을 위해 사용자가 직접 설정한 정보를 기기 내부에 저장합니다. 이 정보는 서버로 전송되지 않으며, 오직 사용자의 기기에만 보관됩니다.",
            privacyCollect2Item1: "선호 언어 설정",
            privacyCollect2Item2: "기준 통화 설정",
            privacyCollect2Item3: "즐겨찾기 통화 목록",
            privacyCollect3Title: "사용 기록",
            privacyCollect3Desc: "환율 계산, 팁 계산, 정산 기록 등의 사용 내역을 기기에 저장하여 편리한 재사용을 가능하게 합니다. 모든 기록은 로컬에만 저장되며 외부로 전송되지 않습니다.",
            privacyCollect3Item1: "환율 계산 히스토리",
            privacyCollect3Item2: "팁 계산 기록",
            privacyCollect3Item3: "정산 내역",
            
            // Section 3: How We Use Information
            privacySection3Title: "정보 사용 방법",
            privacySection3Subtitle: "수집된 정보는 서비스 제공과 개선에만 사용됩니다",
            privacyUseTitle: "정보 활용 목적",
            privacyUseDesc: "Exchango FX는 수집한 정보를 다음과 같은 목적으로만 사용합니다:",
            privacyUseItem1: "실시간 환율 정보 제공 및 정확한 환율 계산",
            privacyUseItem2: "오프라인 모드에서의 서비스 제공",
            privacyUseItem3: "사용자 맞춤형 인터페이스 제공",
            privacyUseItem4: "앱 성능 최적화 및 버그 수정",
            privacyUseItem5: "서비스 품질 개선 및 새로운 기능 개발",
            
            // Section 4: Data Storage & Security
            privacySection4Title: "데이터 저장 및 보안",
            privacySection4Subtitle: "업계 표준 보안 조치로 정보를 안전하게 보호합니다",
            privacySecurity1Title: "로컬 저장",
            privacySecurity1Desc: "모든 개인 설정과 사용 기록은 사용자의 기기에만 저장됩니다. 외부 서버로 전송되지 않으며, 앱을 삭제하면 모든 데이터가 완전히 제거됩니다.",
            privacySecurity1Item1: "기기 내부 안전한 저장소 사용",
            privacySecurity1Item2: "외부 서버 전송 없음",
            privacySecurity1Item3: "앱 삭제 시 완전 삭제",
            privacySecurity2Title: "보안 조치",
            privacySecurity2Desc: "API 통신 시 암호화된 연결(HTTPS)을 사용하며, 시간 기반 토큰 인증으로 무단 접근을 방지합니다. 모든 통신은 보안 프로토콜을 준수합니다.",
            privacySecurity2Item1: "HTTPS 암호화 통신",
            privacySecurity2Item2: "시간 기반 토큰 인증",
            privacySecurity2Item3: "CDN을 통한 안전한 데이터 전송",
            
            // Section 5: Third-Party Services
            privacySection5Title: "제3자 서비스",
            privacySection5Subtitle: "환율 데이터 제공을 위한 최소한의 외부 서비스만 사용합니다",
            privacyThirdPartyTitle: "외부 서비스 사용",
            privacyThirdPartyDesc: "Exchango FX는 정확한 환율 정보 제공을 위해 신뢰할 수 있는 외부 서비스를 통해 환율 데이터를 제공받습니다:",
            privacyThirdPartyItem1: "실시간 환율 데이터 API 활용",
            privacyThirdPartyItem2: "보안 프로토콜을 통한 안전한 데이터 전송",
            privacyThirdPartyItem3: "개인정보는 제3자와 공유되지 않습니다",
            privacyThirdPartyItem4: "오직 환율 데이터 요청만 전송됩니다",
            
            // Section 6: User Rights
            privacySection6Title: "이용자의 권리",
            privacySection6Subtitle: "귀하는 언제든지 자신의 정보를 관리할 수 있습니다",
            privacyRights1Title: "정보 열람권",
            privacyRights1Desc: "앱 설정에서 저장된 모든 개인 설정과 사용 기록을 확인할 수 있습니다. 모든 데이터는 투명하게 표시되며 언제든지 확인 가능합니다.",
            privacyRights2Title: "정보 삭제권",
            privacyRights2Desc: "앱 설정에서 계산 기록, 즐겨찾기, 사용 내역을 선택적으로 삭제하거나 앱을 삭제하여 모든 데이터를 완전히 제거할 수 있습니다.",
            privacyRights3Title: "서비스 중단권",
            privacyRights3Desc: "언제든지 앱 사용을 중단할 수 있으며, 앱 삭제 시 모든 로컬 데이터가 자동으로 삭제됩니다. 별도의 탈퇴 절차가 필요하지 않습니다.",
            privacyRights4Title: "문의 및 신고",
            privacyRights4Desc: "개인정보 관련 문의사항이나 우려사항이 있으시면 언제든지 exchango.app@gmail.com으로 연락주시기 바랍니다.",
            
            // Section 7: Children's Privacy
            privacySection7Title: "아동의 개인정보 보호",
            privacySection7Subtitle: "만 14세 미만 아동의 개인정보를 수집하지 않습니다",
            privacyChildrenTitle: "아동 보호 정책",
            privacyChildrenDesc: "Exchango FX는 모든 연령의 사용자가 안전하게 사용할 수 있도록 설계되었습니다. 앱에서 생성되는 모든 데이터(계산 기록, 설정 등)는 사용자의 기기에만 저장되며, 외부 서버로 전송되지 않습니다. 만 14세 미만 아동이 사용하더라도 개인식별정보는 수집되지 않으며, 모든 데이터는 로컬에만 보관됩니다. 부모님께서는 안심하고 자녀가 앱을 사용하도록 허용하실 수 있습니다.",
            
            // Section 8: Policy Updates
            privacySection8Title: "개인정보처리방침 변경",
            privacySection8Subtitle: "정책 변경 시 사전에 공지합니다",
            privacyUpdateTitle: "변경 사항 안내",
            privacyUpdateDesc: "본 개인정보처리방침은 법령이나 서비스의 변경사항을 반영하기 위해 수정될 수 있습니다. 중요한 변경사항이 있을 경우, 앱 내 공지사항을 통해 최소 7일 전에 사전 고지합니다. 변경된 개인정보처리방침은 고지된 시행일부터 효력이 발생합니다.",
            privacyUpdateItem1: "변경 7일 전 사전 공지",
            privacyUpdateItem2: "앱 내 공지사항 게시",
            privacyUpdateItem3: "중요 변경 시 별도 동의 요청",
            
            // Section 9: Contact
            privacySection9Title: "연락처",
            privacySection9Subtitle: "개인정보 관련 문의사항이 있으시면 연락주세요",
            privacyContactTitle: "문의하기",
            privacyContactDesc: "개인정보처리방침에 대한 문의사항, 개인정보 관련 불만사항, 또는 기타 의견이 있으시면 아래 연락처로 문의해 주시기 바랍니다. 신속하고 성실하게 답변드리겠습니다.",
            privacyContactEmail: "이메일: exchango.app@gmail.com",
            privacyContactWebsite: "웹사이트: https://exchango.app",
            privacyContactResponse: "응답 시간: 영업일 기준 48시간 이내",
            
            // Footer translations for privacy page
            heroTagline: "전 세계를 위한 스마트 환율 계산기",
            footerSupport: "고객 지원",
            footerAbout: "서비스 소개",
            footerCopyright: "Copyright © 2025 Exchango FX All rights reserved."
        },
        
        en: {
            // ==== ABOUT PAGE ====
            about: {
                title: "About Exchango FX - Smart Currency Converter",
                heroTitle: "Exchango FX",
                heroTagline: "Your Global Currency Companion!",
                statCurrencies: "Supported Currencies",
                statLanguages: "Supported Languages",
                statFree: "Free",
                sectionTitle1: "What is Exchango FX?",
                sectionSubtitle1: "A smart currency calculator that makes complex currency calculations simple and intuitive",
                smartCalculatorTitle: "Smart & Intuitive",
                smartCalculatorDesc: "Exchango FX transforms complex currency calculations into simple, intuitive operations. Designed for travelers, business professionals, and anyone dealing with multiple currencies.",
                sectionTitle2: "Supported Currencies",
                sectionSubtitle2: "Support for over 150 different currencies worldwide",
                sectionTitle3: "Main Features",
                sectionSubtitle3: "Provides various currency calculations and convenience features",
                sectionTitle4: "Technical Features",
                sectionSubtitle4: "Stable and fast performance implemented with latest technology",
                performanceTitle: "High Performance",
                performanceDesc: "Built with modern mobile technologies to provide stable and fast performance on iOS and Android platforms. Smart caching and offline support ensure reliable operation in any network condition.",
                
                // Currency categories
                categoryMajor: "Major Currencies",
                categoryMajorDesc: "Leading currencies that drive the global economy",
                categoryAsia: "Asian Currencies",
                categoryAsiaDesc: "Various currencies from Asian countries",
                categoryOther: "Other Regional Currencies",
                categoryOtherDesc: "Latin America, Africa, and Oceania currencies",
                
                // Feature cards
                feature1Title: "Offline Mode",
                feature1Desc: "Use basic currency calculation features even without internet connection. Last updated exchange rate data is stored on the device to provide reliable calculation results anytime.",
                feature1Item1: "Basic calculations available without internet connection",
                feature1Item2: "Automatic storage of latest exchange rate data",
                feature1Item3: "Offline status display and guidance",
                
                feature2Title: "Currency Calculator",
                feature2Desc: "An intuitive smart currency calculator that anyone can easily use. Supports over 150 currencies and provides accurate calculation results using exchange rate information.",
                feature2Item1: "Automatic exchange rate data updates",
                feature2Item2: "Bidirectional calculation and swap functionality",
                feature2Item3: "Currency calculation history feature",

                feature3Title: "Settlement Function",
                feature3Desc: "Resolve complex multi-currency settlements from overseas travel or international business at once. Automatically calculates amounts paid by multiple people in different currencies to provide fair settlement results.",
                feature3Item1: "Fair cost sharing calculation per participant",
                feature3Item2: "Multi-currency mixed settlement support",
                feature3Item3: "Settlement history feature",
                
                feature4Title: "Tip Calculator",
                feature3Desc: "Calculate tips easily and accurately for restaurants, taxis, and service industries. Reflects various countries' tip cultures and ratios to calculate appropriate tips, and also supports split calculations according to the number of people.",
                feature3Item1: "Regional tip culture reflection",
                feature3Item2: "Tip split calculation per person",
                feature3Item3: "Tip calculation history feature",
                
                feature5Title: "Today's Exchange Rates",
                feature4Desc: "Get real-time exchange rate information and fluctuation status of major currencies worldwide at a glance. Exchange rate data is presented through visual charts for intuitive checking.",
                feature4Item1: "Exchange rate status chart provided",
                feature4Item2: "Daily volatility and trend display",
                feature4Item3: "Favorites function management",
                
                feature6Title: "Multi-Currency Calculator",
                feature6Desc: "A powerful feature that allows you to compare multiple currencies simultaneously with a single input. For example, you can see at once how much 1000 USD is in Korean Won, Japanese Yen, and Euro on one screen.",
                feature6Item1: "Multiple currency simultaneous calculation",
                feature6Item2: "Currency comparison analysis",
                feature6Item3: "Favorites function management",
                
                feature7Title: "Games (Ladder & Roulette)",
                feature6Desc: "Fun game features that let you make various decisions with friends. Solve everyday choice dilemmas like choosing travel destinations, deciding lunch menus, or team divisions through exciting games.",
                feature6Item1: "Classic ladder game",
                feature6Item2: "Colorful roulette game",
                feature6Item3: "Custom item settings",
                
                feature8Title: "Various Settings",
                feature8Desc: "Customize the app according to your personal usage patterns and environment. Various options including base currency, language, and theme provide an optimal user experience.",
                feature8Item1: "Base currency settings",
                feature8Item2: "Language settings (14 languages support)",
                feature8Item3: "Theme settings (Light/Dark)",
                
                // Technology
                techHighPerformance: "High Performance",
                techHighPerformanceDesc: "Cross-platform native performance for fast calculation speed",
                techSecureStorage: "Secure Data Storage",
                techSecureStorageDesc: "Local data permanent storage for privacy protection",
                techMultilingual: "Multilingual Support",
                techMultilingualDesc: "Global user interface supporting 7 languages",
                techSmartCaching: "Smart Caching",
                techSmartCachingDesc: "Intelligent exchange rate data caching for quick access",
                techOfflineSupport: "Offline Support",
                techOfflineSupportDesc: "Basic functions available without network connection",
                techAutoUpdate: "Auto Update",
                techAutoUpdateDesc: "Automatic updates for exchange rate data and app features",
                
                footerCopyright: "Copyright © 2025 Exchango FX All rights reserved.",
                footerAbout: "About Exchango FX",
                footerSupport: "Support",
                footerContact: "Contact Us",
                footerPrivacy: "Privacy Policy"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "Privacy Policy",
            privacySubtitle: "Your privacy is safely protected",
            statSecure: "Security First",
            statPrivate: "Privacy Protection",
            statTransparent: "Transparent Policy",
            
            // Section 1: Introduction
            privacySection1Title: "Introduction",
            privacySection1Subtitle: "Privacy Policy for Exchango FX Service",
            privacyIntroTitle: "Privacy Policy Notice",
            privacyIntroDesc: "Exchango FX values user privacy and complies with privacy laws and regulations. This privacy policy explains how user information is collected, used, and protected in connection with the Exchango FX currency calculator app service (the 'Service').",
            privacyIntroItem1: "Effective Date: January 1, 2024",
            privacyIntroItem2: "Last Updated: December 1, 2024",
            privacyIntroItem3: "Contact: exchango.app@gmail.com",
            
            // Section 2: Information We Collect
            privacySection2Title: "Information We Collect",
            privacySection2Subtitle: "We collect only minimal information necessary for service provision",
            privacyCollect1Title: "Device Information (When Reporting Bugs)",
            privacyCollect1Desc: "Exchango FX does not collect device information during normal use. However, when users report bugs, technical information such as device type, OS version, and app version may be included to help resolve issues.",
            privacyCollect1Item1: "Device information provided only when reporting bugs",
            privacyCollect1Item2: "User-provided, not automatically collected",
            privacyCollect1Item3: "Used only for troubleshooting purposes",
            privacyCollect2Title: "User Settings",
            privacyCollect2Desc: "User-configured settings are stored on the device to provide personalized service. This information is not transmitted to servers and is kept only on the user's device.",
            privacyCollect2Item1: "Language preferences",
            privacyCollect2Item2: "Base currency settings",
            privacyCollect2Item3: "Favorite currency list",
            privacyCollect3Title: "Usage History",
            privacyCollect3Desc: "Exchange rate calculations, tip calculations, and settlement records are stored on the device for convenient reuse. All records are stored locally and not transmitted externally.",
            privacyCollect3Item1: "Exchange rate calculation history",
            privacyCollect3Item2: "Tip calculation records",
            privacyCollect3Item3: "Settlement history",
            
            // Section 3: How We Use Information
            privacySection3Title: "How We Use Information",
            privacySection3Subtitle: "Collected information is used only for service provision and improvement",
            privacyUseTitle: "Purpose of Information Use",
            privacyUseDesc: "Exchango FX uses collected information only for the following purposes:",
            privacyUseItem1: "Providing real-time exchange rate information and accurate currency calculations",
            privacyUseItem2: "Providing service in offline mode",
            privacyUseItem3: "Providing customized user interface",
            privacyUseItem4: "App performance optimization and bug fixes",
            privacyUseItem5: "Service quality improvement and new feature development",
            
            // Section 4: Data Storage & Security
            privacySection4Title: "Data Storage & Security",
            privacySection4Subtitle: "We protect information safely with industry-standard security measures",
            privacySecurity1Title: "Local Storage",
            privacySecurity1Desc: "All personal settings and usage records are stored only on the user's device. They are not transmitted to external servers, and all data is completely removed when the app is deleted.",
            privacySecurity1Item1: "Use of secure storage inside device",
            privacySecurity1Item2: "No external server transmission",
            privacySecurity1Item3: "Complete deletion when app is uninstalled",
            privacySecurity2Title: "Security Measures",
            privacySecurity2Desc: "We use encrypted connections (HTTPS) for API communication and prevent unauthorized access with time-based token authentication. All communications comply with security protocols.",
            privacySecurity2Item1: "HTTPS encrypted communication",
            privacySecurity2Item2: "Time-based token authentication",
            privacySecurity2Item3: "Secure data transmission through CDN",
            
            // Section 5: Third-Party Services
            privacySection5Title: "Third-Party Services",
            privacySection5Subtitle: "We use only minimal external services for exchange rate data provision",
            privacyThirdPartyTitle: "Use of External Services",
            privacyThirdPartyDesc: "Exchango FX receives exchange rate data through reliable external services to provide accurate exchange rate information:",
            privacyThirdPartyItem1: "Real-time exchange rate data API utilization",
            privacyThirdPartyItem2: "Secure data transmission through security protocols",
            privacyThirdPartyItem3: "Personal information is not shared with third parties",
            privacyThirdPartyItem4: "Only exchange rate data requests are transmitted",
            
            // Section 6: User Rights
            privacySection6Title: "Your Rights",
            privacySection6Subtitle: "You can manage your information at any time",
            privacyRights1Title: "Right to Access",
            privacyRights1Desc: "You can view all saved personal settings and usage history in the app settings. All data is displayed transparently and can be checked at any time.",
            privacyRights2Title: "Right to Delete",
            privacyRights2Desc: "You can selectively delete calculation history, favorites, and usage history in the app settings, or completely remove all data by deleting the app.",
            privacyRights3Title: "Right to Stop Service",
            privacyRights3Desc: "You can stop using the app at any time, and all local data is automatically deleted when the app is deleted. No separate withdrawal process is required.",
            privacyRights4Title: "Inquiries and Reports",
            privacyRights4Desc: "If you have any questions or concerns about privacy, please contact us at exchango.app@gmail.com.",
            
            // Section 7: Children's Privacy
            privacySection7Title: "Children's Privacy Protection",
            privacySection7Subtitle: "We do not collect personal information from children under 14",
            privacyChildrenTitle: "Child Protection Policy",
            privacyChildrenDesc: "Exchango FX is designed to be safely used by users of all ages. All data generated in the app (calculation records, settings, etc.) is stored only on the user's device and is not transmitted to external servers. Even if children under 14 use the app, no personally identifiable information is collected, and all data is stored locally only. Parents can safely allow their children to use the app.",
            
            // Section 8: Policy Updates
            privacySection8Title: "Privacy Policy Changes",
            privacySection8Subtitle: "We will notify you in advance of policy changes",
            privacyUpdateTitle: "Change Notification",
            privacyUpdateDesc: "This privacy policy may be revised to reflect changes in laws or services. In case of significant changes, we will notify you at least 7 days in advance through in-app notifications. The revised privacy policy will be effective from the announced date.",
            privacyUpdateItem1: "7-day advance notice for changes",
            privacyUpdateItem2: "In-app notification posting",
            privacyUpdateItem3: "Separate consent request for significant changes",
            
            // Section 9: Contact
            privacySection9Title: "Contact",
            privacySection9Subtitle: "Please contact us if you have any privacy-related questions",
            privacyContactTitle: "Contact Us",
            privacyContactDesc: "If you have any questions about this privacy policy, privacy-related complaints, or other feedback, please contact us at the address below. We will respond promptly and sincerely.",
            privacyContactEmail: "Email: exchango.app@gmail.com",
            privacyContactWebsite: "Website: https://exchango.app",
            privacyContactResponse: "Response time: Within 48 business hours",
            
            // Footer translations for privacy page
            heroTagline: "Your Global Currency Companion!",
            footerSupport: "Support",
            footerAbout: "About Service",
            footerCopyright: "Copyright © 2025 Exchango FX All rights reserved."
        },
        
        ja: {
            // ==== ABOUT PAGE ====
            about: {
                title: "Exchango FXについて - スマート通貨変換",
                heroTitle: "Exchango FX",
                heroTagline: "あなたの為替パートナー！",
                statCurrencies: "サポート通貨",
                statLanguages: "サポート言語",
                statFree: "無料",
                sectionTitle1: "Exchango FXとは？",
                sectionSubtitle1: "複雑な通貨計算をシンプルで直感的にするスマート通貨計算機",
                smartCalculatorTitle: "スマート＆直感的",
                smartCalculatorDesc: "Exchango FXは複雑な通貨計算をシンプルで直感的な操作に変換します。旅行者、ビジネス専門家、複数通貨を扱う全ての人のために設計されています。",
                sectionTitle2: "サポート通貨",
                sectionSubtitle2: "世界150以上の様々な通貨をサポート",
                sectionTitle3: "主な機能",
                sectionSubtitle3: "様々な通貨計算と便利機能を提供",
                sectionTitle4: "技術的特徴",
                sectionSubtitle4: "最新技術で実装された安定で高速なパフォーマンス",
                performanceTitle: "高性能",
                performanceDesc: "iOSとAndroidプラットフォームで最適なパフォーマンスを実現するためReact NativeとTypeScriptで構築。スマートキャッシュとオフラインサポートでどんなネットワーク環境でも信頼できる動作を保証。",
                
                // Currency categories
                categoryMajor: "主要通貨",
                categoryMajorDesc: "世界経済を牽引する主要通貨",
                categoryAsia: "アジア通貨",
                categoryAsiaDesc: "アジア各国の様々な通貨",
                categoryOther: "その他地域通貨",
                categoryOtherDesc: "中南米、アフリカ、オセアニア通貨",
                
                // Feature cards
                feature1Title: "1. 為替計算機",
                feature1Desc: "誰でも簡単に使える直感的なスマート為替計算機です。150以上の通貨をサポートし、為替情報を活用して正確な計算結果を提供します。",
                feature1Item1: "為替データ自動アップデート",
                feature1Item2: "双方向計算とスワップ機能",
                feature1Item3: "為替計算履歴機能提供",
                
                feature2Title: "2. 精算機能",
                feature2Desc: "海外旅行や国際ビジネスで発生する複雑な多通貨精算を一度に解決します。複数の人が異なる通貨で支払った金額を自動計算し、公平な精算結果を提供します。",
                feature2Item1: "参加者別公正な費用分担計算",
                feature2Item2: "精算履歴機能提供",
                
                feature3Title: "3. チップ計算機",
                feature3Desc: "レストラン、タクシー、サービス業などで必要なチップを簡単かつ正確に計算できます。様々な国のチップ文化と比率を反映して適切なチップを計算し、人数による分割計算もサポートします。",
                feature3Item1: "地域別チップ文化反映",
                feature3Item2: "人数別チップ分割計算",
                feature3Item3: "チップ計算履歴機能提供",
                
                feature4Title: "4. 今日の為替レート",
                feature4Desc: "世界の主要通貨のリアルタイム為替情報と変動状況を一目で把握できます。為替データを視覚的グラフで表現し直感的に確認でき、よく確認する通貨をお気に入りに登録して便利に監視できます。",
                feature4Item1: "為替状況チャート提供",
                feature4Item2: "日次変動性とトレンド表示",
                feature4Item3: "お気に入り機能管理",
                
                feature5Title: "5. 多通貨計算機",
                feature5Desc: "一つの入力で複数の通貨を同時に比較できる強力な機能です。例えば、1000ドルが韓国ウォン、日本円、ユーロでいくらになるかを一つの画面で一度に確認でき、最適な通貨を選択するのに役立ちます。",
                feature5Item1: "多重通貨同時計算",
                feature5Item2: "通貨比較分析",
                
                feature6Title: "6. ゲーム（あみだくじ＆ルーレット）",
                feature6Desc: "友達と一緒に様々な決定を下せる楽しいゲーム機能です。旅行先選択、昼食メニュー決定、チーム分けなど日常的な選択の悩みをエキサイティングなゲームで解決しましょう。",
                feature6Item1: "クラシックあみだくじゲーム",
                feature6Item2: "カラフルなルーレットゲーム",
                feature6Item3: "カスタム項目設定",
                
                feature7Title: "6. ゲーム（あみだくじ＆ルーレット）",
                feature7Desc: "友達と一緒に様々な決定を下せる楽しいゲーム機能です。旅行先選択、昼食メニュー決定、チーム分けなど日常的な選択の悩みをエキサイティングなゲームで解決しましょう。",
                feature7Item1: "クラシックあみだくじゲーム",
                feature7Item2: "カラフルなルーレットゲーム",
                feature7Item3: "カスタム項目設定",
                
                feature8Title: "7. 各種設定",
                feature8Desc: "個人の使用パターンと環境に合わせてアプリをカスタム設定できます。基準通貨、言語、テーマなど様々なオプションを提供し、最適なユーザー体験を提供します。",
                feature8Item1: "基準通貨設定",
                feature8Item2: "言語設定（14言語サポート）",
                feature8Item3: "テーマ設定（ライト/ダーク）",
                
                // Technology
                techHighPerformance: "高性能",
                techHighPerformanceDesc: "クロスプラットフォームネイティブ性能で高速計算速度",
                techSecureStorage: "安全なデータ保存",
                techSecureStorageDesc: "プライバシー保護のためのローカルデータ永続保存",
                techMultilingual: "多言語サポート",
                techMultilingualDesc: "14言語をサポートするグローバルユーザーインターフェース",
                techSmartCaching: "スマートキャッシング",
                techSmartCachingDesc: "迅速なアクセスのためのインテリジェント為替データキャッシング",
                techOfflineSupport: "オフラインサポート",
                techOfflineSupportDesc: "ネットワーク接続なしで基本機能利用可能",
                techAutoUpdate: "自動更新",
                techAutoUpdateDesc: "為替データとアプリ機能の自動更新",
                
                footerCopyright: "Copyright © 2025 Exchango FX All rights reserved.",
                footerAbout: "Exchango FXについて",
                footerSupport: "サポート",
                footerContact: "お問い合わせ",
                footerPrivacy: "プライバシーポリシー"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "プライバシーポリシー",
            privacySubtitle: "あなたのプライバシーは安全に保護されています",
            statSecure: "セキュリティ優先",
            statPrivate: "プライバシー保護",
            statTransparent: "透明なポリシー",
            
            // Section 1: Introduction
            privacySection1Title: "はじめに",
            privacySection1Subtitle: "Exchango FXサービス利用のためのプライバシーポリシー",
            privacyIntroTitle: "プライバシーポリシーのご案内",
            privacyIntroDesc: "Exchango FXはユーザーのプライバシーを重視し、プライバシー法および関連法令を遵守します。本プライバシーポリシーは、Exchango FX為替計算アプリサービス（以下「サービス」）に関連して、ユーザーのプライバシーがどのように収集、使用、保護されるかを説明します。",
            privacyIntroItem1: "施行日：2024年1月1日",
            privacyIntroItem2: "最終更新日：2024年12月1日",
            privacyIntroItem3: "お問い合わせ：exchango.app@gmail.com",
            
            // Section 2: Information We Collect
            privacySection2Title: "収集する情報",
            privacySection2Subtitle: "サービス提供のため最小限の情報のみを収集します",
            privacyCollect1Title: "デバイス情報（バグ報告時）",
            privacyCollect1Desc: "Exchango FXは通常使用中にデバイス情報を収集しません。ただし、ユーザーがバグを報告する際、問題解決のためにデバイスタイプ、OSバージョン、アプリバージョンなどの技術的情報が含まれることがあります。",
            privacyCollect1Item1: "バグ報告時のみデバイス情報提供",
            privacyCollect1Item2: "自動収集ではなくユーザー提供方式",
            privacyCollect1Item3: "問題解決目的でのみ使用",
            privacyCollect2Title: "ユーザー設定",
            privacyCollect2Desc: "パーソナライズされたサービス提供のため、ユーザーが直接設定した情報をデバイス内部に保存します。この情報はサーバーに送信されず、ユーザーのデバイスにのみ保管されます。",
            privacyCollect2Item1: "言語設定",
            privacyCollect2Item2: "基準通貨設定",
            privacyCollect2Item3: "お気に入り通貨リスト",
            privacyCollect3Title: "使用履歴",
            privacyCollect3Desc: "為替計算、チップ計算、精算記録などの使用履歴をデバイスに保存し、便利な再利用を可能にします。すべての記録はローカルにのみ保存され、外部に送信されません。",
            privacyCollect3Item1: "為替計算履歴",
            privacyCollect3Item2: "チップ計算記録",
            privacyCollect3Item3: "精算履歴",
            
            // Section 3: How We Use Information
            privacySection3Title: "情報の使用方法",
            privacySection3Subtitle: "収集された情報はサービス提供と改善のみに使用されます",
            privacyUseTitle: "情報活用目的",
            privacyUseDesc: "Exchango FXは収集した情報を次の目的でのみ使用します：",
            privacyUseItem1: "リアルタイム為替情報提供と正確な為替計算",
            privacyUseItem2: "オフラインモードでのサービス提供",
            privacyUseItem3: "ユーザーカスタマイズインターフェース提供",
            privacyUseItem4: "アプリパフォーマンス最適化とバグ修正",
            privacyUseItem5: "サービス品質改善と新機能開発",
            
            // Section 4: Data Storage & Security
            privacySection4Title: "データ保存とセキュリティ",
            privacySection4Subtitle: "業界標準のセキュリティ対策で情報を安全に保護します",
            privacySecurity1Title: "ローカル保存",
            privacySecurity1Desc: "すべての個人設定と使用記録はユーザーのデバイスにのみ保存されます。外部サーバーに送信されず、アプリを削除するとすべてのデータが完全に削除されます。",
            privacySecurity1Item1: "デバイス内部の安全な保存領域使用",
            privacySecurity1Item2: "外部サーバー送信なし",
            privacySecurity1Item3: "アプリ削除時に完全削除",
            privacySecurity2Title: "セキュリティ対策",
            privacySecurity2Desc: "API通信時に暗号化された接続（HTTPS）を使用し、時間ベースのトークン認証で不正アクセスを防止します。すべての通信はセキュリティプロトコルに準拠します。",
            privacySecurity2Item1: "HTTPS暗号化通信",
            privacySecurity2Item2: "時間ベーストークン認証",
            privacySecurity2Item3: "CDNを通じた安全なデータ送信",
            
            // Section 5: Third-Party Services
            privacySection5Title: "第三者サービス",
            privacySection5Subtitle: "為替データ提供のための最小限の外部サービスのみ使用します",
            privacyThirdPartyTitle: "外部サービス使用",
            privacyThirdPartyDesc: "Exchango FXは正確な為替情報提供のため、信頼できる外部サービスを通じて為替データの提供を受けています：",
            privacyThirdPartyItem1: "リアルタイム為替データAPI活用",
            privacyThirdPartyItem2: "セキュリティプロトコルを通じた安全なデータ送信",
            privacyThirdPartyItem3: "個人情報は第三者と共有されません",
            privacyThirdPartyItem4: "為替データリクエストのみ送信されます",
            
            // Section 6: User Rights
            privacySection6Title: "ユーザーの権利",
            privacySection6Subtitle: "いつでも自分の情報を管理できます",
            privacyRights1Title: "情報閲覧権",
            privacyRights1Desc: "アプリ設定で保存されたすべての個人設定と使用記録を確認できます。すべてのデータは透明に表示され、いつでも確認可能です。",
            privacyRights2Title: "情報削除権",
            privacyRights2Desc: "アプリ設定で計算履歴、お気に入り、使用履歴を選択的に削除したり、アプリを削除してすべてのデータを完全に削除できます。",
            privacyRights3Title: "サービス中断権",
            privacyRights3Desc: "いつでもアプリの使用を中断でき、アプリ削除時にすべてのローカルデータが自動的に削除されます。別途の退会手続きは必要ありません。",
            privacyRights4Title: "お問い合わせと報告",
            privacyRights4Desc: "プライバシー関連のお問い合わせや懸念事項がございましたら、いつでもexchango.app@gmail.comまでご連絡ください。",
            
            // Section 7: Children's Privacy
            privacySection7Title: "児童のプライバシー保護",
            privacySection7Subtitle: "14歳未満の児童の個人情報は収集しません",
            privacyChildrenTitle: "児童保護ポリシー",
            privacyChildrenDesc: "Exchango FXはすべての年齢のユーザーが安全に使用できるよう設計されています。アプリで生成されるすべてのデータ（計算記録、設定など）はユーザーのデバイスにのみ保存され、外部サーバーに送信されません。14歳未満の児童が使用しても個人識別情報は収集されず、すべてのデータはローカルにのみ保管されます。保護者の方は安心してお子様がアプリを使用することを許可できます。",
            
            // Section 8: Policy Updates
            privacySection8Title: "プライバシーポリシーの変更",
            privacySection8Subtitle: "ポリシー変更時は事前にお知らせします",
            privacyUpdateTitle: "変更事項のご案内",
            privacyUpdateDesc: "本プライバシーポリシーは法令やサービスの変更事項を反映するため修正されることがあります。重要な変更事項がある場合、アプリ内お知らせを通じて最低7日前に事前告知します。変更されたプライバシーポリシーは告知された施行日から効力が発生します。",
            privacyUpdateItem1: "変更7日前の事前告知",
            privacyUpdateItem2: "アプリ内お知らせ掲載",
            privacyUpdateItem3: "重要変更時の別途同意要請",
            
            // Section 9: Contact
            privacySection9Title: "連絡先",
            privacySection9Subtitle: "プライバシー関連のお問い合わせはご連絡ください",
            privacyContactTitle: "お問い合わせ",
            privacyContactDesc: "プライバシーポリシーに関するお問い合わせ、プライバシー関連の苦情、その他のご意見がございましたら、下記連絡先までお問い合わせください。迅速かつ誠実にお答えいたします。",
            privacyContactEmail: "メール：exchango.app@gmail.com",
            privacyContactWebsite: "ウェブサイト：https://exchango.app",
            privacyContactResponse: "応答時間：営業日基準48時間以内",
            
            // Footer translations for privacy page
            heroTagline: "世界のためのスマート通貨計算機",
            footerSupport: "サポート",
            footerAbout: "サービス紹介",
            footerCopyright: "Copyright © 2025 Exchango All rights reserved."
        },
        
        zh: {
            // ==== ABOUT PAGE ====
            about: {
                title: "关于Exchango FX - 智能货币转换器",
                heroTitle: "Exchango FX",
                heroTagline: "您的汇率伙伴！",
                statCurrencies: "支持货币",
                statLanguages: "支持语言",
                statFree: "免费",
                sectionTitle1: "什么是Exchango FX？",
                sectionSubtitle1: "让复杂货币计算变得简单直观的智能货币计算器",
                smartCalculatorTitle: "智能直观",
                smartCalculatorDesc: "Exchango FX将复杂的货币计算转换为简单直观的操作。专为旅行者、商业专家和处理多种货币的任何人设计。",
                sectionTitle2: "支持货币",
                sectionSubtitle2: "支持全球150多种不同货币",
                sectionTitle3: "主要功能",
                sectionSubtitle3: "提供各种货币计算和便利功能",
                sectionTitle4: "技术特征",
                sectionSubtitle4: "采用最新技术实现的稳定快速性能",
                performanceTitle: "高性能",
                performanceDesc: "采用React Native和TypeScript构建，为iOS和Android平台提供最佳性能。智能缓存和离线支持确保在任何网络条件下都能可靠运行。",
                
                // Currency categories
                categoryMajor: "主要货币",
                categoryMajorDesc: "推动全球经济的主要货币",
                categoryAsia: "亚洲货币",
                categoryAsiaDesc: "来自亚洲各国的各种货币",
                categoryOther: "其他地区货币",
                categoryOtherDesc: "拉丁美洲、非洲和大洋洲货币",
                
                // Feature cards
                feature1Title: "1. 汇率计算器",
                feature1Desc: "任何人都可以轻松使用的直观智能汇率计算器。支持150多种货币，利用汇率信息提供准确的计算结果。",
                feature1Item1: "汇率数据自动更新",
                feature1Item2: "双向计算和交换功能",
                feature1Item3: "汇率计算历史功能",
                
                feature2Title: "2. 结算功能",
                feature2Desc: "一次性解决海外旅行或国际商务中产生的复杂多货币结算。自动计算多人用不同货币支付的金额，提供公平的结算结果。",
                feature2Item1: "参与者公平成本分担计算",
                feature2Item2: "结算历史功能",
                
                feature3Title: "3. 小费计算器",
                feature3Desc: "轻松准确地计算餐厅、出租车、服务业等所需的小费。反映各国小费文化和比例计算合适的小费，还支持按人数分割计算。",
                feature3Item1: "反映地区小费文化",
                feature3Item2: "按人数分割小费计算",
                feature3Item3: "小费计算历史功能",
                
                feature4Title: "4. 今日汇率",
                feature4Desc: "一目了然地掌握全球主要货币的实时汇率信息和波动状况。通过可视化图表直观显示汇率数据，常查看的货币可添加到收藏夹方便监控。",
                feature4Item1: "提供汇率状况图表",
                feature4Item2: "显示日间波动性和趋势",
                feature4Item3: "收藏夹功能管理",
                
                feature5Title: "5. 多货币计算器",
                feature5Desc: "一次输入同时比较多种货币的强大功能。例如，可以在一个屏幕上同时查看1000美元折合韩元、日元、欧元的金额，帮助选择最优货币。",
                feature5Item1: "多货币同时计算",
                feature5Item2: "货币比较分析",
                
                feature6Title: "6. 游戏（阶梯游戏和轮盘）",
                feature6Desc: "与朋友一起做各种决定的有趣游戏功能。通过刺激的游戏解决选择旅行目的地、决定午餐菜单、分组等日常选择烦恼。",
                feature6Item1: "经典阶梯游戏",
                feature6Item2: "多彩轮盘游戏",
                feature6Item3: "自定义项目设置",
                
                feature7Title: "6. 游戏（阶梯游戏和轮盘）",
                feature7Desc: "与朋友一起做各种决定的有趣游戏功能。通过刺激的游戏解决选择旅行目的地、决定午餐菜单、分组等日常选择烦恼。",
                feature7Item1: "经典阶梯游戏",
                feature7Item2: "多彩轮盘游戏",
                feature7Item3: "自定义项目设置",
                
                feature8Title: "7. 各种设置",
                feature8Desc: "根据个人使用模式和环境自定义应用。提供基准货币、语言、主题等多种选项，提供最佳用户体验。",
                feature8Item1: "基准货币设置",
                feature8Item2: "语言设置（支持14种语言）",
                feature8Item3: "主题设置（浅色/深色）",
                
                // Technology
                techHighPerformance: "高性能",
                techHighPerformanceDesc: "跨平台原生性能，快速计算速度",
                techSecureStorage: "安全数据存储",
                techSecureStorageDesc: "本地数据永久存储，保护隐私",
                techMultilingual: "多语言支持",
                techMultilingualDesc: "支持14种语言的全球用户界面",
                techSmartCaching: "智能缓存",
                techSmartCachingDesc: "智能汇率数据缓存，快速访问",
                techOfflineSupport: "离线支持",
                techOfflineSupportDesc: "无网络连接时可使用基本功能",
                techAutoUpdate: "自动更新",
                techAutoUpdateDesc: "汇率数据和应用功能自动更新",
                
                footerCopyright: "Copyright © 2025 Exchango FX All rights reserved.",
                footerAbout: "关于Exchango FX",
                footerSupport: "客户支持",
                footerContact: "联系我们",
                footerPrivacy: "隐私政策"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "隐私政策",
            privacySubtitle: "您的隐私受到安全保护",
            statSecure: "安全优先",
            statPrivate: "隐私保护",
            statTransparent: "透明政策",
            
            // Section 1: Introduction
            privacySection1Title: "简介",
            privacySection1Subtitle: "Exchango FX服务使用的隐私政策",
            privacyIntroTitle: "隐私政策说明",
            privacyIntroDesc: "Exchango FX重视用户隐私，遵守隐私法及相关法规。本隐私政策说明了与Exchango FX汇率计算器应用服务（以下简称\"服务\"）相关的用户隐私如何被收集、使用和保护。",
            privacyIntroItem1: "生效日期：2024年1月1日",
            privacyIntroItem2: "最后更新：2024年12月1日",
            privacyIntroItem3: "联系方式：exchango.app@gmail.com",
            
            // Section 2: Information We Collect
            privacySection2Title: "收集的信息",
            privacySection2Subtitle: "仅收集提供服务所需的最少信息",
            privacyCollect1Title: "设备信息（报告错误时）",
            privacyCollect1Desc: "Exchango FX在正常使用期间不收集设备信息。但是，当用户报告错误时，可能包含设备类型、操作系统版本、应用版本等技术信息以帮助解决问题。",
            privacyCollect1Item1: "仅在报告错误时提供设备信息",
            privacyCollect1Item2: "用户提供方式，非自动收集",
            privacyCollect1Item3: "仅用于问题解决目的",
            privacyCollect2Title: "用户设置",
            privacyCollect2Desc: "为提供个性化服务，用户直接设置的信息存储在设备内部。此信息不会传输到服务器，仅保存在用户设备上。",
            privacyCollect2Item1: "语言偏好设置",
            privacyCollect2Item2: "基准货币设置",
            privacyCollect2Item3: "收藏货币列表",
            privacyCollect3Title: "使用记录",
            privacyCollect3Desc: "汇率计算、小费计算、结算记录等使用历史存储在设备上，方便重复使用。所有记录仅存储在本地，不向外部传输。",
            privacyCollect3Item1: "汇率计算历史",
            privacyCollect3Item2: "小费计算记录",
            privacyCollect3Item3: "结算历史",
            
            // Section 3: How We Use Information
            privacySection3Title: "信息使用方式",
            privacySection3Subtitle: "收集的信息仅用于服务提供和改进",
            privacyUseTitle: "信息使用目的",
            privacyUseDesc: "Exchango FX仅将收集的信息用于以下目的：",
            privacyUseItem1: "提供实时汇率信息和准确的汇率计算",
            privacyUseItem2: "在离线模式下提供服务",
            privacyUseItem3: "提供用户定制界面",
            privacyUseItem4: "应用性能优化和错误修复",
            privacyUseItem5: "服务质量改进和新功能开发",
            
            // Section 4: Data Storage & Security
            privacySection4Title: "数据存储与安全",
            privacySection4Subtitle: "通过行业标准安全措施安全保护信息",
            privacySecurity1Title: "本地存储",
            privacySecurity1Desc: "所有个人设置和使用记录仅存储在用户设备上。不会传输到外部服务器，删除应用时所有数据将完全删除。",
            privacySecurity1Item1: "使用设备内部安全存储区",
            privacySecurity1Item2: "无外部服务器传输",
            privacySecurity1Item3: "卸载应用时完全删除",
            privacySecurity2Title: "安全措施",
            privacySecurity2Desc: "API通信时使用加密连接（HTTPS），通过基于时间的令牌认证防止未授权访问。所有通信遵守安全协议。",
            privacySecurity2Item1: "HTTPS加密通信",
            privacySecurity2Item2: "基于时间的令牌认证",
            privacySecurity2Item3: "通过CDN安全传输数据",
            
            // Section 5: Third-Party Services
            privacySection5Title: "第三方服务",
            privacySection5Subtitle: "仅使用提供汇率数据所需的最少外部服务",
            privacyThirdPartyTitle: "外部服务使用",
            privacyThirdPartyDesc: "Exchango FX通过可靠的外部服务获取汇率数据，以提供准确的汇率信息：",
            privacyThirdPartyItem1: "实时汇率数据API利用",
            privacyThirdPartyItem2: "通过安全协议安全传输数据",
            privacyThirdPartyItem3: "个人信息不与第三方共享",
            privacyThirdPartyItem4: "仅传输汇率数据请求",
            
            // Section 6: User Rights
            privacySection6Title: "用户权利",
            privacySection6Subtitle: "您可以随时管理自己的信息",
            privacyRights1Title: "信息查看权",
            privacyRights1Desc: "您可以在应用设置中查看所有保存的个人设置和使用记录。所有数据透明显示，随时可查。",
            privacyRights2Title: "信息删除权",
            privacyRights2Desc: "您可以在应用设置中选择性删除计算历史、收藏、使用记录，或通过删除应用完全删除所有数据。",
            privacyRights3Title: "服务中止权",
            privacyRights3Desc: "您可以随时停止使用应用，删除应用时所有本地数据将自动删除。无需单独的退出程序。",
            privacyRights4Title: "咨询和举报",
            privacyRights4Desc: "如有隐私相关问题或疑虑，请随时联系exchango.app@gmail.com。",
            
            // Section 7: Children's Privacy
            privacySection7Title: "儿童隐私保护",
            privacySection7Subtitle: "不收集14岁以下儿童的个人信息",
            privacyChildrenTitle: "儿童保护政策",
            privacyChildrenDesc: "Exchango FX设计为所有年龄用户都能安全使用。应用中生成的所有数据（计算记录、设置等）仅存储在用户设备上，不会传输到外部服务器。即使14岁以下儿童使用，也不会收集个人识别信息，所有数据仅保存在本地。家长可以放心让孩子使用应用。",
            
            // Section 8: Policy Updates
            privacySection8Title: "隐私政策变更",
            privacySection8Subtitle: "政策变更时会提前通知",
            privacyUpdateTitle: "变更事项通知",
            privacyUpdateDesc: "本隐私政策可能会修改以反映法律或服务的变更。如有重要变更，将通过应用内通知至少提前7天告知。修改后的隐私政策从公告的生效日期开始生效。",
            privacyUpdateItem1: "变更前7天提前通知",
            privacyUpdateItem2: "应用内通知发布",
            privacyUpdateItem3: "重要变更时要求单独同意",
            
            // Section 9: Contact
            privacySection9Title: "联系方式",
            privacySection9Subtitle: "如有隐私相关问题请联系我们",
            privacyContactTitle: "联系我们",
            privacyContactDesc: "如对隐私政策有疑问、隐私相关投诉或其他意见，请通过以下联系方式与我们联系。我们将迅速、诚恳地回复。",
            privacyContactEmail: "邮箱：exchango.app@gmail.com",
            privacyContactWebsite: "网站：https://exchango.app",
            privacyContactResponse: "响应时间：工作日48小时内",
            
            // Footer translations for privacy page
            heroTagline: "全球智能汇率计算器",
            footerSupport: "客户支持",
            footerAbout: "服务介绍",
            footerCopyright: "Copyright © 2025 Exchango All rights reserved."
        },
        
        // Arabic
        ar: {
            // ==== ABOUT PAGE ====
            about: {
                title: "حول Exchango FX - محول العملة الذكي",
                heroTitle: "Exchango FX",
                heroTagline: "شريكك الذكي في أسعار الصرف!",
                statCurrencies: "العملات المدعومة",
                statLanguages: "اللغات المدعومة",
                statFree: "مجاني",
                sectionTitle1: "ما هو Exchango FX؟",
                sectionSubtitle1: "حاسبة عملة ذكية تجعل حسابات العملة المعقدة بسيطة وبديهية",
                smartCalculatorTitle: "ذكي وبديهي",
                smartCalculatorDesc: "يحول Exchango FX حسابات العملة المعقدة إلى عمليات بسيطة وبديهية. مصمم للمسافرين ومحترفي الأعمال وأي شخص يتعامل مع عملات متعددة.",
                sectionTitle2: "العملات المدعومة",
                sectionSubtitle2: "دعم أكثر من 150 عملة مختلفة حول العالم",
                sectionTitle3: "الميزات الرئيسية",
                sectionSubtitle3: "يوفر حسابات عملة متنوعة وميزات الراحة",
                sectionTitle4: "الميزات التقنية",
                sectionSubtitle4: "أداء مستقر وسريع مطبق بأحدث التقنيات",
                performanceTitle: "أداء عالي",
                performanceDesc: "مبني بتقنيات الهاتف المحمول الحديثة لتوفير أداء مستقر وسريع على منصات iOS و Android. التخزين المؤقت الذكي والدعم غير المتصل يضمن التشغيل الموثوق في أي حالة شبكة.",
                
                // Currency categories
                categoryMajor: "العملات الرئيسية",
                categoryMajorDesc: "العملات الرائدة التي تقود الاقتصاد العالمي",
                categoryAsia: "العملات الآسيوية",
                categoryAsiaDesc: "عملات متنوعة من البلدان الآسيوية",
                categoryOther: "عملات إقليمية أخرى",
                categoryOtherDesc: "عملات أمريكا اللاتينية وأفريقيا وأوقيانوسيا",
                
                // Feature cards
                feature1Title: "الوضع غير المتصل",
                feature1Desc: "استخدام ميزات حساب العملة الأساسية حتى بدون اتصال بالإنترنت. يتم تخزين بيانات أسعار الصرف المحدثة مؤخراً على الجهاز لتوفير نتائج حساب موثوقة في أي وقت.",
                feature1Item1: "الحسابات الأساسية متاحة بدون اتصال بالإنترنت",
                feature1Item2: "تخزين تلقائي لأحدث بيانات أسعار الصرف",
                feature1Item3: "عرض حالة عدم الاتصال والإرشاد",
                
                feature2Title: "حاسبة العملة",
                feature2Desc: "حاسبة عملة ذكية بديهية يمكن لأي شخص استخدامها بسهولة. تدعم أكثر من 150 عملة وتوفر نتائج حساب دقيقة باستخدام معلومات أسعار الصرف.",
                feature2Item1: "تحديثات تلقائية لبيانات أسعار الصرف",
                feature2Item2: "حساب ثنائي الاتجاه ووظيفة المبادلة",
                feature2Item3: "ميزة تاريخ حساب العملة",
                
                feature3Title: "وظيفة التسوية",
                feature3Desc: "حل التسويات متعددة العملات المعقدة من السفر الخارجي أو الأعمال الدولية دفعة واحدة. يحسب تلقائياً المبالغ المدفوعة من قبل عدة أشخاص بعملات مختلفة لتوفير نتائج تسوية عادلة.",
                feature3Item1: "حساب تقاسم التكلفة العادل لكل مشارك",
                feature3Item2: "دعم التسوية المختلطة متعددة العملات",
                feature3Item3: "ميزة تاريخ التسوية",
                
                feature4Title: "حاسبة الإكرامية",
                feature4Desc: "احسب الإكراميات بسهولة ودقة للمطاعم وسيارات الأجرة وصناعات الخدمات. يعكس ثقافات ونسب الإكرامية لبلدان مختلفة لحساب الإكراميات المناسبة، ويدعم أيضاً حسابات التقسيم وفقاً لعدد الأشخاص.",
                feature4Item1: "انعكاس ثقافة الإكرامية الإقليمية",
                feature4Item2: "حساب تقسيم الإكرامية لكل شخص",
                feature4Item3: "ميزة تاريخ حساب الإكرامية",
                
                feature5Title: "أسعار الصرف اليوم",
                feature5Desc: "احصل على معلومات أسعار الصرف في الوقت الفعلي وحالة التقلب للعملات الرئيسية في العالم لمحة واحدة. يتم عرض بيانات أسعار الصرف من خلال الرسوم البيانية البصرية للتحقق البديهي.",
                feature5Item1: "مخطط حالة أسعار الصرف المقدم",
                feature5Item2: "عرض التقلب اليومي والاتجاه",
                feature5Item3: "إدارة وظيفة المفضلة",
                
                feature6Title: "حاسبة متعددة العملات",
                feature6Desc: "ميزة قوية تتيح لك مقارنة عملات متعددة في وقت واحد بإدخال واحد. على سبيل المثال، يمكنك رؤية كم يساوي 1000 دولار أمريكي بالوون الكوري والين الياباني واليورو على شاشة واحدة في آن واحد.",
                feature6Item1: "حساب متعدد العملات في وقت واحد",
                feature6Item2: "تحليل مقارنة العملة",
                feature6Item3: "إدارة وظيفة المفضلة",
                
                feature7Title: "الألعاب (السلم والروليت)",
                feature7Desc: "ميزات ألعاب ممتعة تتيح لك اتخاذ قرارات مختلفة مع الأصدقاء. حل معضلات الاختيار اليومية مثل اختيار وجهات السفر وتقرير قوائم الغداء أو تقسيمات الفريق من خلال ألعاب مثيرة.",
                feature7Item1: "لعبة السلم الكلاسيكية",
                feature7Item2: "لعبة روليت ملونة",
                feature7Item3: "إعدادات عنصر مخصص",
                
                feature8Title: "إعدادات متنوعة",
                feature8Desc: "تخصيص التطبيق وفقاً لأنماط الاستخدام الشخصية والبيئة. توفر خيارات متنوعة بما في ذلك العملة الأساسية واللغة والموضوع تجربة مستخدم مثلى.",
                feature8Item1: "إعدادات العملة الأساسية",
                feature8Item2: "إعدادات اللغة (دعم 14 لغة)",
                feature8Item3: "إعدادات الموضوع (فاتح/داكن)",
                
                // Technology
                techHighPerformance: "أداء عالي",
                techHighPerformanceDesc: "أداء أصلي عبر المنصات لسرعة حساب سريعة",
                techSecureStorage: "تخزين البيانات الآمن",
                techSecureStorageDesc: "تخزين البيانات المحلية الدائم لحماية الخصوصية",
                techMultilingual: "دعم متعدد اللغات",
                techMultilingualDesc: "واجهة مستخدم عالمية تدعم 14 لغة",
                techSmartCaching: "التخزين المؤقت الذكي",
                techSmartCachingDesc: "تخزين مؤقت ذكي لبيانات أسعار الصرف للوصول السريع",
                techOfflineSupport: "الدعم غير المتصل",
                techOfflineSupportDesc: "الوظائف الأساسية متاحة بدون اتصال شبكة",
                techAutoUpdate: "التحديث التلقائي",
                techAutoUpdateDesc: "تحديثات تلقائية لبيانات أسعار الصرف وميزات التطبيق",
                
                footerCopyright: "حقوق الطبع والنشر © 2025 Exchango FX. جميع الحقوق محفوظة.",
                footerAbout: "حول Exchango FX",
                footerSupport: "الدعم",
                footerContact: "اتصل بنا",
                footerPrivacy: "سياسة الخصوصية"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "سياسة الخصوصية",
            privacySubtitle: "خصوصيتك محمية بأمان",
            statSecure: "الأمان أولاً",
            statPrivate: "حماية الخصوصية",
            statTransparent: "سياسة شفافة",
            
            // Section 1: Introduction
            privacySection1Title: "مقدمة",
            privacySection1Subtitle: "سياسة الخصوصية لخدمة Exchango FX",
            privacyIntroTitle: "إشعار سياسة الخصوصية",
            privacyIntroDesc: "تقدر Exchango FX خصوصية المستخدم وتمتثل لقوانين ولوائح الخصوصية. تشرح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلومات المستخدم فيما يتعلق بخدمة تطبيق حاسبة العملة Exchango FX (\"الخدمة\").",
            privacyIntroItem1: "تاريخ السريان: 1 يناير 2024",
            privacyIntroItem2: "آخر تحديث: 1 ديسمبر 2024",
            privacyIntroItem3: "الاتصال: exchango.app@gmail.com",
            
            // Footer translations for privacy page
            heroTagline: "رفيقك العالمي للعملة!",
            footerSupport: "الدعم",
            footerAbout: "حول الخدمة",
            footerCopyright: "حقوق الطبع والنشر © 2025 Exchango FX. جميع الحقوق محفوظة."
        },
        
        // German
        de: {
            // ==== ABOUT PAGE ====
            about: {
                title: "Über Exchango FX - Intelligenter Währungskonverter",
                heroTitle: "Exchango FX",
                heroTagline: "Ihr intelligenter Wechselkurs-Partner!",
                statCurrencies: "Unterstützte Währungen",
                statLanguages: "Unterstützte Sprachen",
                statFree: "Kostenlos",
                sectionTitle1: "Was ist Exchango FX?",
                sectionSubtitle1: "Ein intelligenter Währungsrechner, der komplexe Währungsberechnungen einfach und intuitiv macht",
                smartCalculatorTitle: "Intelligent und intuitiv",
                smartCalculatorDesc: "Exchango FX verwandelt komplexe Währungsberechnungen in einfache, intuitive Operationen. Entwickelt für Reisende, Geschäftsprofis und alle, die mit mehreren Währungen arbeiten.",
                sectionTitle2: "Unterstützte Währungen",
                sectionSubtitle2: "Unterstützung für über 150 verschiedene Währungen weltweit",
                sectionTitle3: "Hauptfunktionen",
                sectionSubtitle3: "Bietet verschiedene Währungsberechnungen und Komfortfunktionen",
                sectionTitle4: "Technische Eigenschaften",
                sectionSubtitle4: "Stabile und schnelle Leistung mit modernster Technologie implementiert",
                performanceTitle: "Hohe Leistung",
                performanceDesc: "Mit modernen Mobiltechnologien entwickelt, um stabile und schnelle Leistung auf iOS- und Android-Plattformen zu bieten. Intelligentes Caching und Offline-Unterstützung gewährleisten zuverlässigen Betrieb unter allen Netzwerkbedingungen.",
                
                footerCopyright: "Copyright © 2025 Exchango FX. Alle Rechte vorbehalten.",
                footerAbout: "Über Exchango FX",
                footerSupport: "Support",
                footerContact: "Kontakt",
                footerPrivacy: "Datenschutzrichtlinie"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "Datenschutzrichtlinie",
            privacySubtitle: "Ihre Privatsphäre ist sicher geschützt",
            
            // Footer translations for privacy page
            heroTagline: "Ihr globaler Währungsbegleiter!",
            footerSupport: "Support",
            footerAbout: "Über den Service",
            footerCopyright: "Copyright © 2025 Exchango FX. Alle Rechte vorbehalten."
        },
        
        // Spanish
        es: {
            // ==== ABOUT PAGE ====
            about: {
                title: "Acerca de Exchango FX - Conversor de Moneda Inteligente",
                heroTitle: "Exchango FX",
                heroTagline: "¡Tu compañero inteligente de tipos de cambio!",
                statCurrencies: "Monedas Soportadas",
                statLanguages: "Idiomas Soportados",
                statFree: "Gratis",
                sectionTitle1: "¿Qué es Exchango FX?",
                sectionSubtitle1: "Una calculadora de moneda inteligente que hace que los cálculos de moneda complejos sean simples e intuitivos",
                smartCalculatorTitle: "Inteligente e intuitivo",
                smartCalculatorDesc: "Exchango FX transforma cálculos de moneda complejos en operaciones simples e intuitivas. Diseñado para viajeros, profesionales de negocios y cualquiera que maneje múltiples monedas.",
                
                footerCopyright: "Copyright © 2025 Exchango FX. Todos los derechos reservados.",
                footerAbout: "Acerca de Exchango FX",
                footerSupport: "Soporte",
                footerContact: "Contáctanos",
                footerPrivacy: "Política de Privacidad"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "Política de Privacidad",
            privacySubtitle: "Tu privacidad está protegida de forma segura",
            
            // Footer translations for privacy page
            heroTagline: "¡Tu Compañero Global de Moneda!",
            footerSupport: "Soporte",
            footerAbout: "Acerca del Servicio",
            footerCopyright: "Copyright © 2025 Exchango FX. Todos los derechos reservados."
        },
        
        // French
        fr: {
            // ==== ABOUT PAGE ====
            about: {
                title: "À propos d'Exchango FX - Convertisseur de Devise Intelligent",
                heroTitle: "Exchango FX",
                heroTagline: "Votre partenaire intelligent des taux de change !",
                statCurrencies: "Devises Supportées",
                statLanguages: "Langues Supportées",
                statFree: "Gratuit",
                sectionTitle1: "Qu'est-ce qu'Exchango FX ?",
                sectionSubtitle1: "Une calculatrice de devise intelligente qui rend les calculs de devise complexes simples et intuitifs",
                smartCalculatorTitle: "Intelligent et intuitif",
                smartCalculatorDesc: "Exchango FX transforme les calculs de devise complexes en opérations simples et intuitives. Conçu pour les voyageurs, les professionnels et toute personne traitant plusieurs devises.",
                
                footerCopyright: "Copyright © 2025 Exchango FX. Tous droits réservés.",
                footerAbout: "À propos d'Exchango FX",
                footerSupport: "Support",
                footerContact: "Nous contacter",
                footerPrivacy: "Politique de confidentialité"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "Politique de confidentialité",
            privacySubtitle: "Votre vie privée est protégée en toute sécurité",
            
            // Footer translations for privacy page
            heroTagline: "Votre Compagnon Mondial de Devise !",
            footerSupport: "Support",
            footerAbout: "À propos du Service",
            footerCopyright: "Copyright © 2025 Exchango FX. Tous droits réservés."
        },
        
        // Hindi
        hi: {
            // ==== ABOUT PAGE ====
            about: {
                title: "Exchango FX के बारे में - स्मार्ट करेंसी कन्वर्टर",
                heroTitle: "Exchango FX",
                heroTagline: "आपका स्मार्ट एक्सचेंज रेट पार्टनर!",
                statCurrencies: "समर्थित मुद्राएं",
                statLanguages: "समर्थित भाषाएं",
                statFree: "मुफ्त",
                sectionTitle1: "Exchango FX क्या है?",
                sectionSubtitle1: "एक स्मार्ट करेंसी कैलकुलेटर जो जटिल करेंसी गणना को सरल और सहज बनाता है",
                smartCalculatorTitle: "स्मार्ट और सहज",
                smartCalculatorDesc: "Exchango FX जटिल करेंसी गणना को सरल, सहज संचालन में बदल देता है। यात्रियों, व्यावसायिक पेशेवरों और कई मुद्राओं से निपटने वाले किसी भी व्यक्ति के लिए डिज़ाइन किया गया।",
                
                footerCopyright: "कॉपीराइट © 2025 Exchango FX। सभी अधिकार सुरक्षित।",
                footerAbout: "Exchango FX के बारे में",
                footerSupport: "सहायता",
                footerContact: "संपर्क करें",
                footerPrivacy: "गोपनीयता नीति"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "गोपनीयता नीति",
            privacySubtitle: "आपकी गोपनीयता सुरक्षित रूप से संरक्षित है",
            
            // Footer translations for privacy page
            heroTagline: "आपका वैश्विक करेंसी साथी!",
            footerSupport: "सहायता",
            footerAbout: "सेवा के बारे में",
            footerCopyright: "कॉपीराइट © 2025 Exchango FX। सभी अधिकार सुरक्षित।"
        },
        
        // Italian
        it: {
            // ==== ABOUT PAGE ====
            about: {
                title: "Informazioni su Exchango FX - Convertitore di Valuta Intelligente",
                heroTitle: "Exchango FX",
                heroTagline: "Il tuo partner intelligente per i tassi di cambio!",
                statCurrencies: "Valute Supportate",
                statLanguages: "Lingue Supportate",
                statFree: "Gratuito",
                sectionTitle1: "Cos'è Exchango FX?",
                sectionSubtitle1: "Una calcolatrice di valuta intelligente che rende i calcoli di valuta complessi semplici e intuitivi",
                smartCalculatorTitle: "Intelligente e intuitivo",
                smartCalculatorDesc: "Exchango FX trasforma i calcoli di valuta complessi in operazioni semplici e intuitive. Progettato per viaggiatori, professionisti aziendali e chiunque abbia a che fare con valute multiple.",
                
                footerCopyright: "Copyright © 2025 Exchango FX. Tutti i diritti riservati.",
                footerAbout: "Informazioni su Exchango FX",
                footerSupport: "Supporto",
                footerContact: "Contattaci",
                footerPrivacy: "Informativa sulla privacy"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "Informativa sulla privacy",
            privacySubtitle: "La tua privacy è protetta in modo sicuro",
            
            // Footer translations for privacy page
            heroTagline: "Il Tuo Compagno Globale di Valuta!",
            footerSupport: "Supporto",
            footerAbout: "Informazioni sul Servizio",
            footerCopyright: "Copyright © 2025 Exchango FX. Tutti i diritti riservati."
        },
        
        // Portuguese
        pt: {
            // ==== ABOUT PAGE ====
            about: {
                title: "Sobre Exchango FX - Conversor de Moeda Inteligente",
                heroTitle: "Exchango FX",
                heroTagline: "Seu parceiro inteligente de taxas de câmbio!",
                statCurrencies: "Moedas Suportadas",
                statLanguages: "Idiomas Suportados",
                statFree: "Grátis",
                sectionTitle1: "O que é Exchango FX?",
                sectionSubtitle1: "Uma calculadora de moeda inteligente que torna cálculos de moeda complexos simples e intuitivos",
                smartCalculatorTitle: "Inteligente e intuitivo",
                smartCalculatorDesc: "Exchango FX transforma cálculos de moeda complexos em operações simples e intuitivas. Projetado para viajantes, profissionais de negócios e qualquer pessoa que lide com múltiplas moedas.",
                
                footerCopyright: "Copyright © 2025 Exchango FX. Todos os direitos reservados.",
                footerAbout: "Sobre Exchango FX",
                footerSupport: "Suporte",
                footerContact: "Entre em contato",
                footerPrivacy: "Política de Privacidade"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "Política de Privacidade",
            privacySubtitle: "Sua privacidade está protegida com segurança",
            
            // Footer translations for privacy page
            heroTagline: "Seu Companheiro Global de Moeda!",
            footerSupport: "Suporte",
            footerAbout: "Sobre o Serviço",
            footerCopyright: "Copyright © 2025 Exchango FX. Todos os direitos reservados."
        },
        
        // Russian
        ru: {
            // ==== ABOUT PAGE ====
            about: {
                title: "О Exchango FX - Умный Конвертер Валют",
                heroTitle: "Exchango FX",
                heroTagline: "Ваш умный партнер по обменным курсам!",
                statCurrencies: "Поддерживаемые Валюты",
                statLanguages: "Поддерживаемые Языки",
                statFree: "Бесплатно",
                sectionTitle1: "Что такое Exchango FX?",
                sectionSubtitle1: "Умный калькулятор валют, который делает сложные расчеты валют простыми и интуитивными",
                smartCalculatorTitle: "Умный и интуитивный",
                smartCalculatorDesc: "Exchango FX превращает сложные расчеты валют в простые, интуитивные операции. Разработан для путешественников, бизнес-профессионалов и всех, кто имеет дело с несколькими валютами.",
                
                footerCopyright: "Авторские права © 2025 Exchango FX. Все права защищены.",
                footerAbout: "О Exchango FX",
                footerSupport: "Поддержка",
                footerContact: "Связаться с нами",
                footerPrivacy: "Политика конфиденциальности"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "Политика конфиденциальности",
            privacySubtitle: "Ваша конфиденциальность надежно защищена",
            
            // Footer translations for privacy page
            heroTagline: "Ваш Глобальный Валютный Компаньон!",
            footerSupport: "Поддержка",
            footerAbout: "О Сервисе",
            footerCopyright: "Авторские права © 2025 Exchango FX. Все права защищены."
        },
        
        // Thai
        th: {
            // ==== ABOUT PAGE ====
            about: {
                title: "เกี่ยวกับ Exchango FX - ตัวแปลงสกุลเงินอัจฉริยะ",
                heroTitle: "Exchango FX",
                heroTagline: "พาร์ทเนอร์อัตราแลกเปลี่ยนอัจฉริยะของคุณ!",
                statCurrencies: "สกุลเงินที่รองรับ",
                statLanguages: "ภาษาที่รองรับ",
                statFree: "ฟรี",
                sectionTitle1: "Exchango FX คืออะไร?",
                sectionSubtitle1: "เครื่องคิดเลขสกุลเงินอัจฉริยะที่ทำให้การคำนวณสกุลเงินที่ซับซ้อนเป็นเรื่องง่ายและใช้งานง่าย",
                smartCalculatorTitle: "อัจฉริยะและใช้งานง่าย",
                smartCalculatorDesc: "Exchango FX เปลี่ยนการคำนวณสกุลเงินที่ซับซ้อนให้เป็นการดำเนินการที่ง่ายและใช้งานง่าย ออกแบบมาสำหรับนักเดินทาง ผู้เชี่ยวชาญทางธุรกิจ และทุกคนที่ต้องจัดการกับสกุลเงินหลายสกุล",
                
                footerCopyright: "ลิขสิทธิ์ © 2025 Exchango FX สงวนลิขสิทธิ์",
                footerAbout: "เกี่ยวกับ Exchango FX",
                footerSupport: "การสนับสนุน",
                footerContact: "ติดต่อเรา",
                footerPrivacy: "นโยบายความเป็นส่วนตัว"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "นโยบายความเป็นส่วนตัว",
            privacySubtitle: "ความเป็นส่วนตัวของคุณได้รับการป้องกันอย่างปลอดภัย",
            
            // Footer translations for privacy page
            heroTagline: "เพื่อนร่วมทางสกุลเงินโลกของคุณ!",
            footerSupport: "การสนับสนุน",
            footerAbout: "เกี่ยวกับบริการ",
            footerCopyright: "ลิขสิทธิ์ © 2025 Exchango FX สงวนลิขสิทธิ์"
        },
        
        // Turkish
        tr: {
            // ==== ABOUT PAGE ====
            about: {
                title: "Exchango FX Hakkında - Akıllı Döviz Dönüştürücü",
                heroTitle: "Exchango FX",
                heroTagline: "Akıllı döviz kuru ortağınız!",
                statCurrencies: "Desteklenen Para Birimleri",
                statLanguages: "Desteklenen Diller",
                statFree: "Ücretsiz",
                sectionTitle1: "Exchango FX Nedir?",
                sectionSubtitle1: "Karmaşık döviz hesaplamalarını basit ve sezgisel hale getiren akıllı bir döviz hesaplayıcısı",
                smartCalculatorTitle: "Akıllı ve sezgisel",
                smartCalculatorDesc: "Exchango FX karmaşık döviz hesaplamalarını basit, sezgisel işlemlere dönüştürür. Gezginler, iş profesyonelleri ve birden fazla para birimiyle uğraşan herkes için tasarlanmıştır.",
                
                footerCopyright: "Telif Hakkı © 2025 Exchango FX. Tüm hakları saklıdır.",
                footerAbout: "Exchango FX Hakkında",
                footerSupport: "Destek",
                footerContact: "Bize Ulaşın",
                footerPrivacy: "Gizlilik Politikası"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacyTitle: "Gizlilik Politikası",
            privacySubtitle: "Gizliliğiniz güvenli bir şekilde korunuyor",
            
            // Footer translations for privacy page
            heroTagline: "Küresel Para Birimi Arkadaşınız!",
            footerSupport: "Destek",
            footerAbout: "Hizmet Hakkında",
            footerCopyright: "Telif Hakkı © 2025 Exchango FX. Tüm hakları saklıdır."
        }
    };

    // Privacy policy lists data
    const privacyLists = {
        ko: {
            noCollectList: [
                "개인 식별 정보 (이름, 이메일, 전화번호)",
                "금융 계좌 정보 또는 거래 내역",
                "정확한 위치 데이터 또는 GPS 좌표",
                "개별 기기 식별자 또는 광고 ID",
                "연락처 목록 또는 소셜 미디어 정보",
                "생체 데이터 또는 인증 자격 증명",
                "개인 식별 가능한 정보(PII)의 모든 형태"
            ],
            mayCollectList: [
                "앱 사용 통계: 어떤 기능이 자주 사용되는지, 화면 조회 횟수 등",
                "기기 정보: 기기 유형, 운영체제 버전 (개인 식별 불가)",
                "오류 보고서: 앱 개선을 위한 기술적 오류 정보",
                "일반적인 사용 패턴: 기능별 사용 빈도, 성능 데이터",
                "지역 정보: 기본 통화 설정을 위한 일반적인 국가/지역 정보"
            ],
            localStorageList: [
                "앱 환경설정: 선택한 기준 통화, 언어 설정, 테마 설정",
                "환율 캐시: 오프라인 기능을 위해 임시로 캐시된 환율",
                "통화 이력: 빠른 접근을 위한 최근 사용한 통화 쌍",
                "앱 설정: 표시 설정 및 알림 설정"
            ],
            dataSharingList: [
                "Firebase Analytics: 익명화된 앱 사용 통계 및 성능 데이터",
                "환율 데이터 제공업체: 환율 정보 요청 시 표준 웹 요청 정보",
                "오류 보고 서비스: 앱 안정성 개선을 위한 기술적 오류 정보"
            ],
            userRightsList: [
                "분석 거부 권리: 기기 설정에서 분석 데이터 수집을 거부할 수 있습니다",
                "데이터 삭제 권리: 앱 삭제 시 모든 로컬 데이터가 완전히 제거됩니다",
                "정보 요청 권리: 데이터 처리에 대한 정보를 언제든 요청할 수 있습니다",
                "투명성 권리: 모든 데이터 처리에 대해 명확히 알 권리가 있습니다"
            ]
        },
        en: {
            noCollectList: [
                "Personal identification information (name, email, phone number)",
                "Financial account information or transaction history",
                "Precise location data or GPS coordinates",
                "Individual device identifiers or advertising IDs",
                "Contact lists or social media information",
                "Biometric data or authentication credentials",
                "Any form of personally identifiable information (PII)"
            ],
            mayCollectList: [
                "App usage statistics: Which features are frequently used, screen view counts, etc.",
                "Device information: Device type, operating system version (not personally identifiable)",
                "Error reports: Technical error information for app improvement",
                "General usage patterns: Usage frequency by feature, performance data",
                "Regional information: General country/region information for default currency settings"
            ],
            localStorageList: [
                "App preferences: Selected base currency, language settings, theme settings",
                "Exchange rate cache: Temporarily cached exchange rates for offline functionality",
                "Currency history: Recently used currency pairs for quick access",
                "App settings: Display settings and notification settings"
            ],
            dataSharingList: [
                "Firebase Analytics: Anonymized app usage statistics and performance data",
                "Exchange rate data providers: Standard web request information when requesting exchange rate information",
                "Error reporting services: Technical error information for app stability improvement"
            ],
            userRightsList: [
                "Right to refuse analytics: You can refuse analytics data collection in device settings",
                "Right to data deletion: All local data is completely removed when the app is deleted",
                "Right to request information: You can request information about data processing at any time",
                "Right to transparency: You have the right to clearly know about all data processing"
            ]
        }
    };

    // Supported languages
    const supportedLanguages = ['ar', 'de', 'en', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'pt', 'ru', 'th', 'tr', 'zh'];

    // Get current page type
    function getPageType() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || '';
        
        console.log('🔍 Current path:', path);
        console.log('🔍 Filename:', filename);
        
        if (filename.includes('privacy') || path.includes('privacy')) {
            console.log('📄 Page type: privacy');
            return 'privacy';
        } else if (filename.includes('about') || path.includes('about')) {
            console.log('📄 Page type: about');
            return 'about';
        } else {
            // Default to about for index or other pages
            console.log('📄 Page type: about (default)');
            return 'about';
        }
    }

    // Get current language from URL or default to Korean
    function getCurrentLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const langFromUrl = urlParams.get('lang');
        const langFromStorage = localStorage.getItem('exchango-language');
        const detectedLang = langFromUrl || langFromStorage || 'ko';
        
        // Fallback to supported language
        return supportedLanguages.includes(detectedLang) ? detectedLang : 'ko';
    }

    // Set current language
    function setCurrentLanguage(lang) {
        const currentLang = getCurrentLanguage();
        const newLang = lang || currentLang;
        
        // Validate language
        if (!supportedLanguages.includes(newLang)) {
            return currentLang;
        }
        
        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('lang', newLang);
        window.history.replaceState({}, '', url);
        
        // Save to localStorage
        localStorage.setItem('exchango-language', newLang);
        
        return newLang;
    }

    // Get translation object for current language and page
    function getTranslations(lang, pageType) {
        const langTranslations = translations[lang] || translations.ko;
        
        // For privacy page, return all privacy-related translations directly
        if (pageType === 'privacy') {
            // Return the entire langTranslations object since privacy translations are at the root level
            return langTranslations;
        }
        
        // For about page, check if translations are nested or flat
        if (langTranslations[pageType]) {
            return langTranslations[pageType];
        }
        
        // If not nested, return the entire translation object (for backward compatibility)
        return langTranslations;
    }

    // Apply text considering HTML content
    function applyText(element, text) {
        if (!element || text === undefined) return;
        
        if (Array.isArray(text)) {
            // Handle arrays (like lists)
            element.innerHTML = text.map(item => `<li>${item}</li>`).join('');
        } else if (typeof text === 'string' && text.includes('<') && text.includes('>')) {
            element.innerHTML = text;
        } else {
            element.textContent = text;
        }
    }

    // Apply translations to page
    function applyTranslations() {
        const currentLang = getCurrentLanguage();
        const pageType = getPageType();
        const t = getTranslations(currentLang, pageType);
        
        console.log(`🔄 Applying ${currentLang} translations for ${pageType} page`);
        
        // Update document title
        if (t.title) {
            document.title = t.title;
        }
        
        // Update all elements with data-i18n attributes
        const elementsWithI18n = document.querySelectorAll('[data-i18n]');
        let translatedCount = 0;
        let missingCount = 0;
        
        elementsWithI18n.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                applyText(element, t[key]);
                translatedCount++;
            } else {
                console.warn(`⚠️ Missing translation for key: ${key}`);
                missingCount++;
            }
        });
        
        console.log(`📊 Translation stats: ${translatedCount} applied, ${missingCount} missing`);

        // Handle special cases for privacy policy lists
        if (pageType === 'privacy' && privacyLists[currentLang]) {
            const lists = privacyLists[currentLang];
            
            if (lists.noCollectList) {
                const noCollectListEl = document.getElementById('no-collect-list');
                if (noCollectListEl) {
                    noCollectListEl.innerHTML = lists.noCollectList.map(item => `<li>${item}</li>`).join('');
                }
            }

            if (lists.mayCollectList) {
                const mayCollectListEl = document.getElementById('may-collect-list');
                if (mayCollectListEl) {
                    mayCollectListEl.innerHTML = lists.mayCollectList.map(item => {
                        const parts = item.split(':');
                        if (parts.length > 1) {
                            return `<li><strong>${parts[0]}:</strong> ${parts.slice(1).join(':').trim()}</li>`;
                        }
                        return `<li>${item}</li>`;
                    }).join('');
                }
            }

            if (lists.localStorageList) {
                const localStorageListEl = document.getElementById('local-storage-list');
                if (localStorageListEl) {
                    localStorageListEl.innerHTML = lists.localStorageList.map(item => {
                        const parts = item.split(':');
                        if (parts.length > 1) {
                            return `<li><strong>${parts[0]}:</strong> ${parts.slice(1).join(':').trim()}</li>`;
                        }
                        return `<li>${item}</li>`;
                    }).join('');
                }
            }

            if (lists.dataSharingList) {
                const dataSharingListEl = document.getElementById('data-sharing-list');
                if (dataSharingListEl) {
                    dataSharingListEl.innerHTML = lists.dataSharingList.map(item => {
                        const parts = item.split(':');
                        if (parts.length > 1) {
                            return `<li><strong>${parts[0]}:</strong> ${parts.slice(1).join(':').trim()}</li>`;
                        }
                        return `<li>${item}</li>`;
                    }).join('');
                }
            }

            if (lists.userRightsList) {
                const userRightsListEl = document.getElementById('user-rights-list');
                if (userRightsListEl) {
                    userRightsListEl.innerHTML = lists.userRightsList.map(item => {
                        const parts = item.split(':');
                        if (parts.length > 1) {
                            return `<li><strong>${parts[0]}:</strong> ${parts.slice(1).join(':').trim()}</li>`;
                        }
                        return `<li>${item}</li>`;
                    }).join('');
                }
            }
        }

        // Update language selector active state
        updateLanguageSelector(currentLang);
        
        console.log(`✅ ${pageType} page translations applied successfully`);
    }

    // Update language selector active state
    function updateLanguageSelector(currentLang) {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang') || btn.getAttribute('href')?.split('lang=')[1];
            if (btnLang === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Change language function (global)
    window.changeLanguage = function(lang) {
        if (!supportedLanguages.includes(lang)) {
            console.warn(`Unsupported language: ${lang}`);
            return;
        }
        
        console.log(`🔄 Changing language to: ${lang}`);
        setCurrentLanguage(lang);
        applyTranslations();
    };

    // Initialize on page load
    function init() {
        const currentLang = setCurrentLanguage();
        const pageType = getPageType();
        console.log(`🚀 Universal Exchango FX translation system initialized with language: ${currentLang} for ${pageType} page`);
        applyTranslations();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
