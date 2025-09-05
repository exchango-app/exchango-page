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
                heroTagline: "똑똑한 환율 계산의 시작",
                statCurrencies: "지원 통화",
                statLanguages: "지원 언어",
                statFree: "무료",
                sectionTitle1: "Exchango란?",
                sectionSubtitle1: "복잡한 환율 계산을 간단하고 직관적으로 만들어주는 스마트 환율 계산기입니다",
                smartCalculatorTitle: "스마트하고 직관적",
                smartCalculatorDesc: "Exchango는 복잡한 환율 계산을 간단하고 직관적인 작업으로 변환합니다. 여행자, 비즈니스 전문가, 다양한 통화를 다루는 모든 사람들을 위해 설계되었습니다.",
                sectionTitle2: "지원 통화",
                sectionSubtitle2: "전 세계 170개 이상의 다양한 통화를 지원합니다",
                sectionTitle3: "주요 기능",
                sectionSubtitle3: "다양한 환율 계산과 편의 기능을 제공합니다",
                sectionTitle4: "기술적 특징",
                sectionSubtitle4: "최신 기술로 구현된 안정적이고 빠른 성능",
                performanceTitle: "고성능",
                performanceDesc: "iOS와 Android 플랫폼에서 최적의 성능을 위해 React Native와 TypeScript로 구축되었습니다. 스마트 캐싱과 오프라인 지원으로 어떤 네트워크 상황에서도 신뢰할 수 있는 작동을 보장합니다.",
                
                // Currency categories
                categoryMajor: "주요 통화",
                categoryMajorDesc: "세계 경제를 이끄는 주요 통화들",
                categoryAsia: "아시아 통화",
                categoryAsiaDesc: "아시아 각국의 다양한 통화들",
                categoryOther: "기타 지역 통화",
                categoryOtherDesc: "중남미, 아프리카, 오세아니아 통화",
                
                // Feature cards
                feature1Title: "1. 환율 계산기",
                feature1Desc: "직관적인 인터페이스로 누구나 쉽게 사용할 수 있는 스마트 환율 계산기입니다. 170개 이상의 통화를 지원하며, 환율 정보를 활용해 정확한 계산 결과를 제공합니다.",
                feature1Item1: "환율 데이터 자동 업데이트",
                feature1Item2: "양방향 계산 및 스왑 기능",
                feature1Item3: "소수점 단위 정밀 계산",
                
                feature2Title: "2. 정산 기능",
                feature2Desc: "해외여행이나 국제 비즈니스에서 발생하는 복잡한 다통화 정산을 한 번에 해결하세요. 여러 사람이 각각 다른 통화로 지불한 금액들을 자동으로 계산하여 공평한 정산 결과를 제공합니다.",
                feature2Item1: "참가자별 공정한 비용 분담 계산",
                feature2Item2: "다양한 통화 혼합 정산 지원",
                
                feature3Title: "3. 오늘의 환율",
                feature3Desc: "전 세계 주요 통화들의 실시간 환율 정보와 변동 현황을 한눈에 파악할 수 있습니다. 환율 데이터를 시각적 그래프로 표현하여 직관적으로 확인하며, 자주 확인하는 통화를 즐겨찾기에 등록하여 편리하게 모니터링할 수 있습니다.",
                feature3Item1: "환율 현황 차트 제공",
                feature3Item2: "일간 변동성 및 트렌드 표시",
                feature3Item3: "즐겨찾기 기능 관리",
                
                feature4Title: "4. 다통화 계산기",
                feature4Desc: "하나의 입력으로 여러 통화를 동시에 비교할 수 있는 강력한 기능입니다. 예를 들어, 1000달러가 한국 원화, 일본 엔화, 유로로 얼마인지 한 화면에서 한번에 확인할 수 있어 최적의 통화를 선택하는 데 도움이 됩니다.",
                feature4Item1: "다중 통화 동시 계산",
                feature4Item2: "통화 비교 분석",
                
                feature5Title: "5. 게임 (사다리타기 & 룰렛)",
                feature5Desc: "친구들과 함께 다양한 결정을 내릴 수 있는 재미있는 게임 기능입니다. 여행지 선택, 점심 메뉴 결정, 팀 나누기 등 일상적인 선택 고민들을 흥미진진한 게임을 통해 해결하세요.",
                feature5Item1: "클래식 사다리타기 게임",
                feature5Item2: "다채로운 룰렛 게임",
                feature5Item3: "커스텀 항목 설정",
                
                feature6Title: "6. 기준 통화 설정",
                feature6Desc: "개인의 사용 패턴에 맞는 기준 통화를 설정하세요. 자주 사용하는 통화를 기본값으로 설정하여 매번 통화를 선택하는 번거로움 없이 더 빠르고 편리하게 환율 계산을 수행할 수 있습니다.",
                feature6Item1: "개인 맞춤형 기준 통화 설정",
                feature6Item2: "빠른 통화 변환",
                
                feature7Title: "7. 언어 설정",
                feature7Desc: "전 세계 사용자를 위한 7개 주요 언어를 지원합니다. 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어, 독일어로 제공되며, 각 언어의 문화적 특성을 반영한 숫자 형식을 제공합니다.",
                feature7Item1: "7개 언어 지원",
                feature7Item2: "지역별 숫자 형식 지원",
                
                feature8Title: "8. 테마 설정",
                feature8Desc: "사용자의 취향과 환경에 맞는 다양한 테마를 제공합니다. 라이트 테마와 다크 테마를 포함한 다양한 옵션으로 눈의 피로를 줄이고 더욱 편안한 사용자 환경을 조성합니다.",
                feature8Item1: "라이트/다크 테마 지원",
                feature8Item2: "다양한 색상 구성",
                
                // Technology
                techReactNative: "크로스 플랫폼 네이티브 성능",
                techTypeScript: "안정적인 타입 시스템",
                techAsyncStorage: "로컬 데이터 영구 저장",
                techI18next: "다국어 지원 시스템",
                techSmartCaching: "스마트 환율 캐싱",
                techOfflineSupport: "오프라인 모드 지원",
                
                footerCopyright: "© 2025 Exchango. 모든 권리 보유.<br>전 세계 여행자들을 위해 ❤️로 제작"
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
                contactEmail: "kr.knkim@kakao.com",
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
                heroTagline: "Smart Currency Conversion Starts Here",
                statCurrencies: "Supported Currencies",
                statLanguages: "Supported Languages",
                statFree: "Free",
                sectionTitle1: "What is Exchango?",
                sectionSubtitle1: "A smart currency calculator that makes complex currency calculations simple and intuitive",
                smartCalculatorTitle: "Smart & Intuitive",
                smartCalculatorDesc: "Exchango transforms complex currency calculations into simple, intuitive operations. Designed for travelers, business professionals, and anyone dealing with multiple currencies.",
                sectionTitle2: "Supported Currencies",
                sectionSubtitle2: "Support for over 170 different currencies worldwide",
                sectionTitle3: "Main Features",
                sectionSubtitle3: "Provides various currency calculations and convenience features",
                sectionTitle4: "Technical Features",
                sectionSubtitle4: "Stable and fast performance implemented with latest technology",
                performanceTitle: "High Performance",
                performanceDesc: "Built with React Native and TypeScript for optimal performance across iOS and Android platforms. Smart caching and offline support ensure reliable operation in any network condition.",
                
                // Currency categories
                categoryMajor: "Major Currencies",
                categoryMajorDesc: "Leading currencies that drive the global economy",
                categoryAsia: "Asian Currencies",
                categoryAsiaDesc: "Various currencies from Asian countries",
                categoryOther: "Other Regional Currencies",
                categoryOtherDesc: "Latin America, Africa, and Oceania currencies",
                
                // Feature cards
                feature1Title: "1. Currency Calculator",
                feature1Desc: "An intuitive smart currency calculator that anyone can easily use. Supports over 170 currencies and provides accurate calculation results using exchange rate information.",
                feature1Item1: "Automatic exchange rate data updates",
                feature1Item2: "Bidirectional calculation and swap functionality",
                feature1Item3: "Precise decimal point calculations",
                
                feature2Title: "2. Settlement Function",
                feature2Desc: "Resolve complex multi-currency settlements from overseas travel or international business at once. Automatically calculates amounts paid by multiple people in different currencies to provide fair settlement results.",
                feature2Item1: "Fair cost sharing calculation per participant",
                feature2Item2: "Multi-currency mixed settlement support",
                
                feature3Title: "3. Today's Exchange Rates",
                feature3Desc: "Get real-time exchange rate information and fluctuation status of major currencies worldwide at a glance. Exchange rate data is presented through visual charts for intuitive checking.",
                feature3Item1: "Exchange rate status chart provided",
                feature3Item2: "Daily volatility and trend display",
                feature3Item3: "Favorites function management",
                
                feature4Title: "4. Multi-Currency Calculator",
                feature4Desc: "A powerful feature that allows you to compare multiple currencies simultaneously with a single input. For example, you can see at once how much 1000 USD is in Korean Won, Japanese Yen, and Euro on one screen.",
                feature4Item1: "Multiple currency simultaneous calculation",
                feature4Item2: "Currency comparison analysis",
                
                feature5Title: "5. Games (Ladder & Roulette)",
                feature5Desc: "Fun game features that let you make various decisions with friends. Solve everyday choice dilemmas like choosing travel destinations, deciding lunch menus, or team divisions through exciting games.",
                feature5Item1: "Classic ladder game",
                feature5Item2: "Colorful roulette game",
                feature5Item3: "Custom item settings",
                
                feature6Title: "6. Base Currency Settings",
                feature6Desc: "Set a base currency that matches your personal usage patterns. By setting frequently used currencies as defaults, you can perform exchange rate calculations faster and more conveniently.",
                feature6Item1: "Personal customized base currency settings",
                feature6Item2: "Quick currency conversion",
                
                feature7Title: "7. Language Settings",
                feature7Desc: "Supports 7 major languages for users worldwide. Available in Korean, English, Japanese, Chinese, Spanish, French, and German, with number formatting that reflects the cultural characteristics of each language.",
                feature7Item1: "7 language support",
                feature7Item2: "Regional number format support",
                
                feature8Title: "8. Theme Settings",
                feature8Desc: "Provides various themes to suit user preferences and environments. Various options including light and dark themes reduce eye fatigue and create a more comfortable user environment.",
                feature8Item1: "Light/Dark theme support",
                feature8Item2: "Various color schemes",
                
                // Technology
                techReactNative: "Cross-platform native performance",
                techTypeScript: "Stable type system",
                techAsyncStorage: "Local data permanent storage",
                techI18next: "Multilingual support system",
                techSmartCaching: "Intelligent exchange rate caching",
                techOfflineSupport: "Offline mode support",
                
                footerCopyright: "© 2025 Exchango. All rights reserved.<br>Made with ❤️ for global travelers"
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
                contactEmail: "kr.knkim@kakao.com",
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
                heroTagline: "スマートな通貨変換の始まり",
                statCurrencies: "サポート通貨",
                statLanguages: "サポート言語",
                statFree: "無料",
                sectionTitle1: "Exchangoとは？",
                sectionSubtitle1: "複雑な通貨計算をシンプルで直感的にするスマート通貨計算機",
                smartCalculatorTitle: "スマート＆直感的",
                smartCalculatorDesc: "Exchangoは複雑な通貨計算をシンプルで直感的な操作に変換します。旅行者、ビジネス専門家、複数通貨を扱う全ての人のために設計されています。",
                sectionTitle2: "サポート通貨",
                sectionSubtitle2: "世界170以上の様々な通貨をサポート",
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
                
                footerCopyright: "© 2025 Exchango. すべての権利を保有。<br>世界の旅行者のために❤️で制作"
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
                contactEmail: "kr.knkim@kakao.com",
                footerCopyright: "© 2024 Exchango. すべての権利を保有。",
                footerMessage: "ユーザーのプライバシー保護とセキュリティのために最善を尽くします。"
            }
        },
        
        zh: {
            // ==== ABOUT PAGE ====
            about: {
                title: "关于Exchango - 智能货币转换器",
                heroTitle: "Exchango",
                heroTagline: "智能货币转换从这里开始",
                statCurrencies: "支持货币",
                statLanguages: "支持语言",
                statFree: "免费",
                sectionTitle1: "什么是Exchango？",
                sectionSubtitle1: "让复杂货币计算变得简单直观的智能货币计算器",
                smartCalculatorTitle: "智能直观",
                smartCalculatorDesc: "Exchango将复杂的货币计算转换为简单直观的操作。专为旅行者、商业专家和处理多种货币的任何人设计。",
                sectionTitle2: "支持货币",
                sectionSubtitle2: "支持全球170多种不同货币",
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
                
                footerCopyright: "© 2025 Exchango. 版权所有。<br>为全球旅行者用❤️制作"
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
                contactEmail: "kr.knkim@kakao.com",
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