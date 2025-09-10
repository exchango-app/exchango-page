// Enhanced universal translation system for Exchango website
(function() {
    'use strict';
    
    console.log('🚀 Universal Exchango translation system started');
    
    // Complete translation data for all pages
    const translations = {
        ko: {
            // ==== ABOUT PAGE ====
            about: {
                title: "About Exchango - Smart Currency Converter",
                heroTitle: "Exchango",
                heroTagline: "당신의 스마트 환율 파트너!",
                statCurrencies: "지원 통화",
                statLanguages: "지원 언어",
                statFree: "무료",
                sectionTitle1: "Exchango란?",
                sectionSubtitle1: "복잡한 환율 계산을 간단하고 직관적으로 만들어주는 스마트 환율 계산기입니다",
                smartCalculatorTitle: "스마트하고 직관적",
                smartCalculatorDesc: "Exchango는 복잡한 환율 계산을 간단하고 직관적인 작업으로 변환합니다. 여행자, 비즈니스 전문가, 다양한 통화를 다루는 모든 사람들을 위해 설계되었습니다.",
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
                feature1Title: "1. 오프라인 모드",
                feature1Desc: "인터넷 연결이 없는 환경에서도 기본 환율 계산 기능을 사용할 수 있습니다. 마지막으로 업데이트된 환율 정보를 기기에 저장하여 언제든지 신뢰할 수 있는 계산 결과를 제공합니다.",
                feature1Item1: "인터넷 연결 없이도 기본 계산 가능",
                feature1Item2: "마지막 환율 데이터 자동 저장",
                feature1Item3: "오프라인 상태 표시 및 안내",
                
                feature2Title: "2. 환율 계산기",
                feature2Desc: "직관적인 인터페이스로 누구나 쉽게 사용할 수 있는 스마트 환율 계산기입니다. 150개 이상의 통화를 지원하며, 환율 정보를 활용해 정확한 계산 결과를 제공합니다.",
                feature2Item1: "환율 데이터 자동 업데이트",
                feature2Item2: "양방향 계산 및 스왑 기능",
                feature2Item3: "환율 계산 이력 기능 제공",
                
                feature3Title: "3. 정산 기능",
                feature3Desc: "해외여행이나 국제 비즈니스에서 발생하는 복잡한 다통화 정산을 한 번에 해결하세요. 여러 사람이 각각 다른 통화로 지불한 금액들을 자동으로 계산하여 공평한 정산 결과를 제공합니다.",
                feature3Item1: "참가자별 공정한 비용 분담 계산",
                feature3Item2: "다통화 혼합 정산 지원",
                feature3Item3: "정산 이력 기능 제공",

                feature4Title: "4. 팁 계산기",
                feature4Desc: "식당, 택시, 서비스업 등에서 필요한 팁을 쉽고 정확하게 계산할 수 있습니다. 다양한 나라의 팁 문화와 비율을 반영하여 적절한 팁을 계산하고, 인원 수에 따른 분할 계산도 지원합니다.",
                feature4Item1: "지역별 팁 문화 반영",
                feature4Item2: "인원별 팁 분할 계산",
                feature4Item3: "팁 계산 이력 기능 제공",
                
                feature5Title: "5. 오늘의 환율",
                feature5Desc: "전 세계 주요 통화들의 실시간 환율 정보와 변동 현황을 한눈에 파악할 수 있습니다. 환율 데이터를 시각적 그래프로 표현하여 직관적으로 확인하며, 자주 확인하는 통화를 즐겨찾기에 등록하여 편리하게 모니터링할 수 있습니다.",
                feature5Item1: "환율 현황 차트 제공",
                feature5Item2: "일간 변동성 및 트렌드 표시",
                feature5Item3: "즐겨찾기 기능 관리",
                
                feature6Title: "6. 다통화 계산기",
                feature6Desc: "하나의 입력으로 여러 통화를 동시에 비교할 수 있는 강력한 기능입니다. 예를 들어, 1000달러가 한국 원화, 일본 엔화, 유로로 얼마인지 한 화면에서 한번에 확인할 수 있어 최적의 통화를 선택하는 데 도움이 됩니다.",
                feature6Item1: "다중 통화 동시 계산",
                feature6Item2: "통화 비교 분석",
                feature6Item3: "즐겨찾기 기능 관리",
                
                feature7Title: "7. 게임 (사다리타기 & 룰렛)",
                feature7Desc: "친구들과 함께 다양한 결정을 내릴 수 있는 재미있는 게임 기능입니다. 여행지 선택, 점심 메뉴 결정, 팀 나누기 등 일상적인 선택 고민들을 흥미진진한 게임을 통해 해결하세요.",
                feature7Item1: "클래식 사다리타기 게임",
                feature7Item2: "다채로운 룰렛 게임",
                feature7Item3: "커스텀 항목 설정",
                
                feature8Title: "8. 각종 설정",
                feature8Desc: "개인의 사용 패턴과 환경에 맞게 앱을 맞춤 설정할 수 있습니다. 기준 통화, 언어, 테마 등 다양한 옵션을 제공하여 최적의 사용자 경험을 제공합니다.",
                feature8Item1: "기준 통화 설정",
                feature8Item2: "언어 설정 (7개 언어 지원)",
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
                
                footerCopyright: "© 2025 Exchango. 모든 권리 보유.",
                footerAbout: "Exchango 소개",
                footerSupport: "고객 지원",
                footerContact: "문의하기",
                footerPrivacy: "개인정보처리방침"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacy: {
                title: "개인정보 처리방침 - Exchango",
                pageTitle: "개인정보 처리방침",
                pageSubtitle: "사용자 개인정보 보호가 우리의 최우선입니다.",
                
                // Section 1: Overview
                overviewTitle: "개요",
                overviewSubtitle: "Exchango의 개인정보 보호 정책 및 데이터 처리 방식에 대한 정보입니다",
                overviewContent: "이 개인정보 처리방침은 Exchango 환율 변환 앱 사용 시 개인정보의 수집, 사용, 보호 방식을 명시합니다. 앱 개선을 위해 Google Firebase Analytics 등 분석 도구를 사용하며, 모든 데이터는 익명으로 처리됩니다.",
                privacyFirstTitle: "개인정보 보호 우선 설계",
                privacyFirstContent: "Exchango는 개인정보 보호를 우선으로 설계되었습니다. 사용자 데이터는 기기에만 저장되며, 개인식별정보는 외부 서버에 수집, 저장, 전송되지 않습니다.",
                
                // Section 2: Privacy Principles
                principlesTitle: "개인정보 보호 원칙",
                principlesSubtitle: "저희가 유지하는 핵심 개인정보 보호 원칙들입니다",
                principle1Title: "로컬 저장만",
                principle1Content: "모든 데이터는 사용자 기기에만 저장됩니다. 외부 저장소나 클라우드 동기화는 지원하지 않습니다.",
                principle2Title: "익명 분석 데이터만",
                principle2Content: "개인식별정보는 수집하지 않으며, 앱 개선을 위한 익명화된 사용 통계만 수집합니다.",
                principle3Title: "보안 설계",
                principle3Content: "사용자 정보 보호를 위해 보안 기술을 적용해 설계되었습니다.",
                principle4Title: "투명성",
                principle4Content: "데이터 처리 방식을 투명하게 공개하여 신뢰성을 유지합니다.",
                
                // Section 3: Data We Don't Collect
                noCollectTitle: "수집하지 않는 정보",
                noCollectSubtitle: "저희가 절대 수집하지 않는 정보들을 명확히 알려드립니다",
                noCollectContent: "Exchango는 다음 정보들을 수집하지 않습니다:",
                
                // Section 4: Data We May Collect
                mayCollectTitle: "수집할 수 있는 익명 데이터",
                mayCollectSubtitle: "앱 개선을 위해 수집할 수 있는 익명화된 데이터에 대해 알려드립니다",
                mayCollectContent: "앱 개선을 위해 다음 익명화된 데이터를 수집할 수 있습니다:",
                analyticsTitle: "Google Analytics 사용",
                analyticsContent: "Google Firebase Analytics를 통해 앱 성능 및 사용자 경험 개선을 위한 익명 데이터를 수집합니다. 기기 설정에서 분석 데이터 수집을 선택적으로 거부할 수 있습니다.",
                
                // Section 5: Local Data Storage
                localStorageTitle: "로컬 데이터 저장",
                localStorageSubtitle: "앱 기능을 위해 기기에만 저장되는 데이터에 대해 알려드립니다",
                localStorageContent: "앱 기능을 위해 다음 데이터를 기기에만 저장합니다:",
                deviceOnlyTitle: "기기 전용 저장",
                deviceOnlyContent: "모든 데이터는 기기의 보안 저장소에 안전하게 보관됩니다. 데이터는 기기를 벗어나지 않으며, 외부 서비스와 동기화되지 않습니다. 앱 삭제 시 저장된 모든 데이터가 영구적으로 제거됩니다.",
                
                // Section 6: Data Sharing
                dataSharingTitle: "데이터 공유 및 제3자 서비스",
                dataSharingSubtitle: "분석 데이터 처리 및 제3자 서비스 사용에 대해 알려드립니다",
                dataSharingContent: "Exchango는 다음과 같은 방식으로 데이터를 공유합니다:",
                noSaleTitle: "절대 판매하지 않아요",
                noSaleContent: "개인정보는 제3자에게 판매하지 않으며, 광고 목적으로 사용하지 않습니다. 수집되는 모든 분석 데이터는 오직 앱 개선 목적으로만 사용됩니다.",
                
                // Section 7: User Rights
                userRightsTitle: "여러분의 권리",
                userRightsSubtitle: "개인정보와 관련된 여러분의 권리를 알려드립니다",
                userRightsContent: "Exchango 사용자는 다음 권리를 갖습니다:",
                analyticsOptOutTitle: "분석 거부 방법",
                analyticsOptOutContent: "기기 설정 → 개인정보 보호 → 분석 및 개선 사항에서 비활성화 가능",
                dataDeleteTitle: "완전한 데이터 삭제",
                dataDeleteContent: "앱을 삭제하면 저장된 모든 데이터가 영구적으로 제거됩니다",
                
                // Contact & Footer
                contactTitle: "문의 사항",
                contactContent: "개인정보 처리방침에 대한 문의 사항이 있으시면 아래 연락처로 연락주시기 바랍니다.",
                contactEmail: "exchango.app@gmail.com",
                footerCopyright: "© 2024 Exchango. 모든 권리 보유.",
                footerMessage: "사용자 개인정보 보호와 보안을 위해 최선을 다하겠습니다.",
                policyChanges: "이 개인정보 처리방침은 필요에 따라 업데이트될 수 있으며, 중요한 변경사항이 있을 경우 앱 업데이트를 통해 알려드립니다."
            }
        },
        
        en: {
            // ==== ABOUT PAGE ====
            about: {
                title: "About Exchango - Smart Currency Converter",
                heroTitle: "Exchango",
                heroTagline: "Your Global Currency Companion!",
                statCurrencies: "Supported Currencies",
                statLanguages: "Supported Languages",
                statFree: "Free",
                sectionTitle1: "What is Exchango?",
                sectionSubtitle1: "A smart currency calculator that makes complex currency calculations simple and intuitive",
                smartCalculatorTitle: "Smart & Intuitive",
                smartCalculatorDesc: "Exchango transforms complex currency calculations into simple, intuitive operations. Designed for travelers, business professionals, and anyone dealing with multiple currencies.",
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
                feature1Title: "1. Offline Mode",
                feature1Desc: "Use basic currency calculation features even without internet connection. Last updated exchange rate data is stored on the device to provide reliable calculation results anytime.",
                feature1Item1: "Basic calculations available without internet connection",
                feature1Item2: "Automatic storage of latest exchange rate data",
                feature1Item3: "Offline status display and guidance",
                
                feature2Title: "2. Currency Calculator",
                feature2Desc: "An intuitive smart currency calculator that anyone can easily use. Supports over 150 currencies and provides accurate calculation results using exchange rate information.",
                feature2Item1: "Automatic exchange rate data updates",
                feature2Item2: "Bidirectional calculation and swap functionality",
                feature2Item3: "Currency calculation history feature",

                feature3Title: "3. Settlement Function",
                feature3Desc: "Resolve complex multi-currency settlements from overseas travel or international business at once. Automatically calculates amounts paid by multiple people in different currencies to provide fair settlement results.",
                feature3Item1: "Fair cost sharing calculation per participant",
                feature3Item2: "Multi-currency mixed settlement support",
                feature3Item3: "Settlement history feature",
                
                feature4Title: "4. Tip Calculator",
                feature3Desc: "Calculate tips easily and accurately for restaurants, taxis, and service industries. Reflects various countries' tip cultures and ratios to calculate appropriate tips, and also supports split calculations according to the number of people.",
                feature3Item1: "Regional tip culture reflection",
                feature3Item2: "Tip split calculation per person",
                feature3Item3: "Tip calculation history feature",
                
                feature5Title: "5. Today's Exchange Rates",
                feature4Desc: "Get real-time exchange rate information and fluctuation status of major currencies worldwide at a glance. Exchange rate data is presented through visual charts for intuitive checking.",
                feature4Item1: "Exchange rate status chart provided",
                feature4Item2: "Daily volatility and trend display",
                feature4Item3: "Favorites function management",
                
                feature6Title: "6. Multi-Currency Calculator",
                feature6Desc: "A powerful feature that allows you to compare multiple currencies simultaneously with a single input. For example, you can see at once how much 1000 USD is in Korean Won, Japanese Yen, and Euro on one screen.",
                feature6Item1: "Multiple currency simultaneous calculation",
                feature6Item2: "Currency comparison analysis",
                feature6Item3: "Favorites function management",
                
                feature7Title: "7. Games (Ladder & Roulette)",
                feature6Desc: "Fun game features that let you make various decisions with friends. Solve everyday choice dilemmas like choosing travel destinations, deciding lunch menus, or team divisions through exciting games.",
                feature6Item1: "Classic ladder game",
                feature6Item2: "Colorful roulette game",
                feature6Item3: "Custom item settings",
                
                feature8Title: "8. Various Settings",
                feature8Desc: "Customize the app according to your personal usage patterns and environment. Various options including base currency, language, and theme provide an optimal user experience.",
                feature8Item1: "Base currency settings",
                feature8Item2: "Language settings (7 languages support)",
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
                
                footerCopyright: "© 2025 Exchango. All rights reserved.",
                footerAbout: "About Exchango",
                footerSupport: "Support",
                footerContact: "Contact Us",
                footerPrivacy: "Privacy Policy"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacy: {
                title: "Privacy Policy - Exchango",
                pageTitle: "Privacy Policy",
                pageSubtitle: "User privacy protection is our top priority.",
                
                // Section 1: Overview
                overviewTitle: "Overview",
                overviewSubtitle: "Information about Exchango's privacy policy and data processing methods",
                overviewContent: "This privacy policy specifies the collection, use, and protection of personal information when using the Exchango currency conversion app. Analytics tools such as Google Firebase Analytics are used for app improvement, and all data is processed anonymously.",
                privacyFirstTitle: "Privacy-First Design",
                privacyFirstContent: "Exchango is designed with privacy protection as a priority. User data is stored only on the device, and personal identification information is not collected, stored, or transmitted to external servers.",
                
                // Section 2: Privacy Principles
                principlesTitle: "Privacy Protection Principles",
                principlesSubtitle: "Core privacy protection principles we maintain",
                principle1Title: "Local Storage Only",
                principle1Content: "All data is stored only on the user's device. External storage or cloud synchronization is not supported.",
                principle2Title: "Anonymous Analytics Only",
                principle2Content: "Personal identification information is not collected, only anonymized usage statistics for app improvement are collected.",
                principle3Title: "Security Design",
                principle3Content: "Designed with security technologies applied to protect user information.",
                principle4Title: "Transparency",
                principle4Content: "Maintains reliability by transparently disclosing data processing methods.",
                
                // Section 3: Data We Don't Collect
                noCollectTitle: "Information We Don't Collect",
                noCollectSubtitle: "Clearly informing you about information we absolutely do not collect",
                noCollectContent: "Exchango does not collect the following information:",
                
                // Section 4: Data We May Collect
                mayCollectTitle: "Anonymous Data We May Collect",
                mayCollectSubtitle: "Information about anonymized data that may be collected for app improvement",
                mayCollectContent: "The following anonymized data may be collected for app improvement:",
                analyticsTitle: "Google Analytics Usage",
                analyticsContent: "Anonymous data is collected through Google Firebase Analytics for app performance and user experience improvement. You can optionally opt out of analytics data collection in device settings.",
                
                // Section 5: Local Data Storage
                localStorageTitle: "Local Data Storage",
                localStorageSubtitle: "Information about data stored only on the device for app functionality",
                localStorageContent: "The following data is stored on the device for app functionality:",
                deviceOnlyTitle: "Device-Only Storage",
                deviceOnlyContent: "All data is securely stored in the device's secure storage. Data does not leave the device and is not synchronized with external services. All stored data is permanently deleted when the app is uninstalled.",
                
                // Section 6: Data Sharing
                dataSharingTitle: "Data Sharing and Third-Party Services",
                dataSharingSubtitle: "Information about analytics data processing and third-party service usage",
                dataSharingContent: "Exchango shares data in the following ways:",
                noSaleTitle: "We Never Sell",
                noSaleContent: "Personal information is not sold to third parties and is not used for advertising purposes. All collected analytics data is used solely for app improvement purposes.",
                
                // Section 7: User Rights
                userRightsTitle: "Your Rights",
                userRightsSubtitle: "Information about your rights related to personal information",
                userRightsContent: "Exchango users have the following rights:",
                analyticsOptOutTitle: "How to Opt Out of Analytics",
                analyticsOptOutContent: "Device Settings → Privacy → Analytics & Improvements can be disabled",
                dataDeleteTitle: "Complete Data Deletion",
                dataDeleteContent: "All stored data is permanently deleted when the app is uninstalled",
                
                // Contact & Footer
                contactTitle: "Contact",
                contactContent: "If you have any questions about this privacy policy, please contact us at the address below.",
                contactEmail: "exchango.app@gmail.com",
                footerCopyright: "© 2024 Exchango. All rights reserved.",
                footerMessage: "We will do our best to protect user privacy and security.",
                policyChanges: "This privacy policy may be updated as necessary, and if there are important changes, we will notify you through app updates."
            }
        },
        
        ja: {
            // ==== ABOUT PAGE ====
            about: {
                title: "Exchangoについて - スマート通貨変換",
                heroTitle: "Exchango",
                heroTagline: "あなたの為替パートナー！",
                statCurrencies: "サポート通貨",
                statLanguages: "サポート言語",
                statFree: "無料",
                sectionTitle1: "Exchangoとは？",
                sectionSubtitle1: "複雑な通貨計算をシンプルで直感的にするスマート通貨計算機",
                smartCalculatorTitle: "スマート＆直感的",
                smartCalculatorDesc: "Exchangoは複雑な通貨計算をシンプルで直感的な操作に変換します。旅行者、ビジネス専門家、複数通貨を扱う全ての人のために設計されています。",
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
                
                feature7Title: "7. 各種設定",
                feature7Desc: "個人の使用パターンと環境に合わせてアプリをカスタム設定できます。基準通貨、言語、テーマ、文字サイズなど様々なオプションを提供し、最適なユーザー体験を提供します。",
                feature7Item1: "基準通貨設定",
                feature7Item2: "言語設定（7言語サポート）",
                feature7Item3: "テーマ設定（ライト/ダーク）",
                feature7Item4: "文字サイズ設定",
                
                // Technology
                techReactNative: "クロスプラットフォームネイティブ性能",
                techTypeScript: "安定したタイプシステム",
                techAsyncStorage: "ローカルデータ永続保存",
                techI18next: "多言語サポートシステム",
                techSmartCaching: "スマート為替キャッシュ",
                techOfflineSupport: "オフラインモードサポート",
                
                footerCopyright: "© 2025 Exchango. すべての権利を保有。",
                footerAbout: "Exchangoについて",
                footerSupport: "サポート",
                footerContact: "お問い合わせ",
                footerPrivacy: "プライバシーポリシー"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacy: {
                title: "プライバシーポリシー - Exchango",
                pageTitle: "プライバシーポリシー",
                pageSubtitle: "ユーザーのプライバシー保護が私たちの最優先事項です。",
                
                overviewTitle: "概要",
                overviewSubtitle: "Exchangoのプライバシーポリシーとデータ処理方法について",
                overviewContent: "このプライバシーポリシーは、Exchango通貨変換アプリの使用時における個人情報の収集、使用、保護の方法を明示しています。アプリ改善のためにGoogle Firebase Analyticsなどの分析ツールを使用し、すべてのデータは匿名で処理されます。",
                privacyFirstTitle: "プライバシー優先設計",
                privacyFirstContent: "Exchangoはプライバシー保護を優先して設計されています。ユーザーデータはデバイスにのみ保存され、個人識別情報は外部サーバーに収集、保存、送信されません。",
                
                contactTitle: "お問い合わせ",
                contactContent: "このプライバシーポリシーについてご質問がございましたら、下記連絡先までお問い合わせください。",
                contactEmail: "exchango.app@gmail.com",
                footerCopyright: "© 2024 Exchango. すべての権利を保有。",
                footerMessage: "ユーザーのプライバシー保護とセキュリティのために最善を尽くします。"
            }
        },
        
        zh: {
            // ==== ABOUT PAGE ====
            about: {
                title: "关于Exchango - 智能货币转换器",
                heroTitle: "Exchango",
                heroTagline: "您的汇率伙伴！",
                statCurrencies: "支持货币",
                statLanguages: "支持语言",
                statFree: "免费",
                sectionTitle1: "什么是Exchango？",
                sectionSubtitle1: "让复杂货币计算变得简单直观的智能货币计算器",
                smartCalculatorTitle: "智能直观",
                smartCalculatorDesc: "Exchango将复杂的货币计算转换为简单直观的操作。专为旅行者、商业专家和处理多种货币的任何人设计。",
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
                
                feature7Title: "7. 各种设置",
                feature7Desc: "根据个人使用模式和环境自定义应用。提供基准货币、语言、主题、字体大小等多种选项，提供最佳用户体验。",
                feature7Item1: "基准货币设置",
                feature7Item2: "语言设置（支持7种语言）",
                feature7Item3: "主题设置（浅色/深色）",
                feature7Item4: "字体大小设置",
                
                // Technology
                techReactNative: "跨平台原生性能",
                techTypeScript: "稳定的类型系统",
                techAsyncStorage: "本地数据永久存储",
                techI18next: "多语言支持系统",
                techSmartCaching: "智能汇率缓存",
                techOfflineSupport: "离线模式支持",
                
                footerCopyright: "© 2025 Exchango. 版权所有。",
                footerAbout: "关于Exchango",
                footerSupport: "客户支持",
                footerContact: "联系我们",
                footerPrivacy: "隐私政策"
            },
            
            // ==== PRIVACY POLICY PAGE ====
            privacy: {
                title: "隐私政策 - Exchango",
                pageTitle: "隐私政策",
                pageSubtitle: "用户隐私保护是我们的最高优先级。",
                
                overviewTitle: "概述",
                overviewSubtitle: "关于Exchango隐私政策和数据处理方式的信息",
                overviewContent: "此隐私政策明确了在使用Exchango货币转换应用时个人信息的收集、使用和保护方式。为了应用改进使用Google Firebase Analytics等分析工具，所有数据都经过匿名化处理。",
                privacyFirstTitle: "隐私优先设计",
                privacyFirstContent: "Exchango采用隐私保护优先设计。用户数据仅存储在设备上，个人识别信息不会被收集、存储或传输到外部服务器。",
                
                contactTitle: "联系我们",
                contactContent: "如果您对此隐私政策有任何问题，请通过以下地址联系我们。",
                contactEmail: "exchango.app@gmail.com",
                footerCopyright: "© 2024 Exchango. 版权所有。",
                footerMessage: "我们将尽最大努力保护用户隐私和安全。"
            }
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
    const supportedLanguages = ['ko', 'en', 'ja', 'zh'];

    // Get current page type
    function getPageType() {
        const path = window.location.pathname;
        if (path.includes('privacy')) {
            return 'privacy';
        } else if (path.includes('about')) {
            return 'about';
        } else {
            // Default to about for index or other pages
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
        return langTranslations[pageType] || langTranslations.about;
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
        elementsWithI18n.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                applyText(element, t[key]);
            }
        });

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
        console.log(`🚀 Universal Exchango translation system initialized with language: ${currentLang} for ${pageType} page`);
        applyTranslations();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
