// Comprehensive translation system for Exchango AI app introduction page (index.html)
(function() {
    'use strict';
    
    console.log('🌐 Exchango AI index page translation system initialized');
    
    // Complete translation data for index.html
    const translations = {
        ko: {
            // ==== HERO SECTION ====
            pageTitle: "Exchango AI - 스마트 환율 계산기 앱",
            heroTitle: "Exchango AI",
            heroTagline: "전 세계를 위한 스마트 환율 계산기",
            heroSubtitle: "150개 이상의 통화를 지원하는 올인원 환율 계산 및 정산 앱",
            
            // Hero Statistics
            statCurrencies: "지원 통화",
            statCurrenciesValue: "150+",
            statLanguages: "지원 언어",
            statLanguagesValue: "14",
            statPrice: "가격",
            statPriceValue: "무료",
            
            // Hero CTAs
            downloadiOS: "iOS 다운로드",
            downloadAndroid: "Android 다운로드",
            learnMore: "더 알아보기",
            
            // ==== FEATURE SHOWCASE SECTION ====
            featuresTitle: "스마트한 환율 도구",
            featuresSubtitle: "여행과 비즈니스를 위한 완벽한 환율 계산 솔루션",
            
            // Calculator Feature
            calculatorTitle: "스마트 환율 계산기",
            calculatorDesc: "직관적인 계산기로 150개 이상의 통화 간 환율을 실시간으로 계산합니다. 수학 연산과 환율 변환이 하나로 통합되어 있어 복잡한 계산도 쉽게 해결할 수 있습니다.",
            calculatorFeature1: "실시간 환율 데이터",
            calculatorFeature2: "양방향 계산 및 스왑",
            calculatorFeature3: "계산 히스토리 저장",
            
            // Today's Rates Feature  
            ratesTitle: "오늘의 환율",
            ratesDesc: "전 세계 통화의 실시간 환율 정보를 한눈에 확인하세요. 즐겨찾기 기능으로 자주 사용하는 통화를 빠르게 접근할 수 있습니다.",
            ratesFeature1: "실시간 환율 업데이트",
            ratesFeature2: "즐겨찾기 통화 관리",
            ratesFeature3: "환율 변동 추이 표시",
            
            // Settlement Feature
            settlementTitle: "정산 계산기",
            settlementDesc: "해외여행이나 국제 비즈니스에서 발생하는 다통화 정산을 간단하게 해결하세요. 여러 사람이 각각 다른 통화로 지불한 금액을 공정하게 분할합니다.",
            settlementFeature1: "다통화 동시 계산",
            settlementFeature2: "공정한 비용 분담",
            settlementFeature3: "참가자 유연 관리",
            
            // Tip Calculator Feature
            tipTitle: "팁 계산기",
            tipDesc: "적절한 팁 비율을 계산하고 인원수별로 분할하세요. 다양한 국가의 팁 문화를 고려한 스마트한 계산 기능을 제공합니다.",
            tipFeature1: "국가별 팁 비율 가이드",
            tipFeature2: "인원별 분할 계산",
            tipFeature3: "팁 계산 히스토리",
            
            // History Feature
            historyTitle: "계산 히스토리",
            historyDesc: "모든 계산 기록을 체계적으로 관리하세요. 캘린더 뷰와 상세 검색 기능으로 과거 계산 내역을 쉽게 찾아볼 수 있습니다.",
            historyFeature1: "캘린더 뷰 지원",
            historyFeature2: "상세 검색 및 필터",
            historyFeature3: "데이터 내보내기",
            
            // Multi-Currency Calculator Feature
            multiCurrencyTitle: "다중 환율 계산기",
            multiCurrencyDesc: "한 번에 여러 통화의 환율을 동시에 확인하고 비교할 수 있습니다. 복잡한 다국가 거래나 여행 계획에 유용한 기능입니다.",
            multiCurrencyFeature1: "동시 다중 통화 변환",
            multiCurrencyFeature2: "통화별 비교 분석",
            multiCurrencyFeature3: "즐겨찾기 통화 그룹",
            
            // Settings Feature
            settingsTitle: "설정",
            settingsDesc: "개인 취향에 맞게 앱을 설정하세요. 다크/라이트 테마, 언어 설정, 글꼴 크기 조절 등 다양한 커스터마이징 옵션을 제공합니다.",
            settingsFeature1: "기본 통화 선택",
            settingsFeature2: "14개 언어 지원",
            settingsFeature3: "다크/라이트 테마",

            // Menu Feature
            menuTitle: "직관적인 메뉴",
            menuDesc: "모든 기능에 쉽게 접근할 수 있는 깔끔하고 직관적인 메뉴 인터페이스를 제공합니다. 원하는 기능을 빠르게 찾아 사용하세요.",
            menuFeature1: "원터치 빠른 접근",
            menuFeature2: "체계적인 기능 분류",
            menuFeature3: "사용자 친화적 디자인",

            // History Management Feature
            historyManagementTitle: "히스토리 관리",
            historyManagementDesc: "계산 기록을 체계적으로 관리하고 정리하세요. 중요한 기록은 즐겨찾기로, 불필요한 기록은 간편하게 삭제할 수 있습니다.",
            historyManagementFeature1: "스와이프로 간편 삭제",
            historyManagementFeature2: "중요 기록 즐겨찾기",
            historyManagementFeature3: "일괄 선택 및 관리",

            // Widget Feature
            widgetTitle: "홈 화면 위젯",
            widgetDesc: "홈 화면에서 바로 환율을 확인하세요. 앱을 열지 않고도 주요 통화의 실시간 환율을 한눈에 볼 수 있습니다.",
            widgetFeature1: "실시간 환율 표시",
            widgetFeature2: "다양한 위젯 크기",
            widgetFeature3: "자동 업데이트",

            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "기술적 우수성",
            techSubtitle: "최신 기술로 구현된 안정적이고 빠른 성능",
            
            performanceTitle: "고성능",
            performanceDesc: "최신 모바일 기술로 구축되어 iOS와 Android에서 네이티브 수준의 빠른 성능을 제공합니다.",
            
            offlineTitle: "오프라인 지원",
            offlineDesc: "인터넷 연결 없이도 기본 계산 기능을 사용할 수 있어 언제 어디서나 신뢰할 수 있습니다.",
            
            securityTitle: "안전한 데이터",
            securityDesc: "모든 데이터는 디바이스에 안전하게 저장되며, 개인정보 보호를 최우선으로 합니다.",
            
            updateTitle: "자동 업데이트",
            updateDesc: "환율 데이터와 앱 기능이 자동으로 업데이트되어 항상 최신 정보를 유지합니다.",
            
            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "왜 Exchango AI를 선택해야 할까요?",
            benefitsSubtitle: "여행자와 비즈니스 전문가들이 선택하는 이유",
            
            travelersTitle: "여행자를 위한 필수 앱",
            travelersDesc: "해외여행 중 환율 계산, 팁 계산, 그룹 정산까지 한 번에 해결하세요.",
            
            businessTitle: "비즈니스 전문가의 도구",
            businessDesc: "국제 거래와 다통화 회계 업무를 효율적으로 처리할 수 있습니다.",
            
            reliableTitle: "신뢰할 수 있는 정확성",
            reliableDesc: "실시간 환율 데이터와 정확한 계산 알고리즘으로 신뢰할 수 있는 결과를 제공합니다.",
            
            // ==== DOWNLOAD SECTION ====
            downloadTitle: "지금 바로 다운로드하세요",
            downloadSubtitle: "무료로 제공되는 스마트한 환율 계산 솔루션",
            downloadDesc: "150개 이상의 통화를 지원하는 Exchango AI로 환율 계산을 더 쉽고 정확하게 만들어보세요.",
            comingSoon: "출시 예정",
            
            // ==== FOOTER SECTION ====
            footerAbout: "Exchango AI 소개",
            footerSupport: "고객 지원",
            footerPrivacy: "개인정보처리방침",
            footerTerms: "이용약관",
            footerAboutPage: "Exchango AI 소개",
            footerCopyright: "Copyright © 2025 Exchango AI All rights reserved.",
            
            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "메인 콘텐츠로 건너뛰기",
            backToTop: "맨 위로 돌아가기",
            closeModal: "모달 닫기",
            nextSlide: "다음 슬라이드",
            previousSlide: "이전 슬라이드",
        },
        
        en: {
            // ==== HERO SECTION ====
            pageTitle: "Exchango AI - Smart Currency Converter App",
            heroTitle: "Exchango AI",
            heroTagline: "Smart Currency Converter for the World",
            heroSubtitle: "All-in-one currency conversion and settlement app supporting 150+ currencies",
            
            // Hero Statistics
            statCurrencies: "Currencies",
            statCurrenciesValue: "150+",
            statLanguages: "Languages",
            statLanguagesValue: "14",
            statPrice: "Price",
            statPriceValue: "Free",
            
            // Hero CTAs
            downloadiOS: "Download for iOS",
            downloadAndroid: "Download for Android",
            learnMore: "Learn More",
            
            // ==== FEATURE SHOWCASE SECTION ====
            featuresTitle: "Smart Currency Tools",
            featuresSubtitle: "Complete currency calculation solution for travel and business",
            
            // Calculator Feature
            calculatorTitle: "Smart Currency Calculator",
            calculatorDesc: "Calculate exchange rates between 150+ currencies in real-time with an intuitive calculator. Math operations and currency conversion are integrated into one seamless experience.",
            calculatorFeature1: "Real-time exchange data",
            calculatorFeature2: "Bidirectional calculation & swap",
            calculatorFeature3: "Calculation history storage",
            
            // Today's Rates Feature
            ratesTitle: "Today's Exchange Rates",
            ratesDesc: "Check real-time exchange rate information for currencies worldwide at a glance. Quickly access frequently used currencies with the favorites feature.",
            ratesFeature1: "Real-time rate updates",
            ratesFeature2: "Favorite currency management",
            ratesFeature3: "Exchange rate trend display",
            
            // Settlement Feature
            settlementTitle: "Settlement Calculator",
            settlementDesc: "Easily resolve multi-currency settlements from international travel or business. Fairly split amounts paid by multiple people in different currencies.",
            settlementFeature1: "Multi-currency simultaneous calculation",
            settlementFeature2: "Fair cost sharing",
            settlementFeature3: "Flexible participant management",
            
            // Tip Calculator Feature
            tipTitle: "Tip Calculator",
            tipDesc: "Calculate appropriate tip percentages and split by number of people. Smart calculation features that consider tipping cultures of various countries.",
            tipFeature1: "Country-specific tip rate guide",
            tipFeature2: "Per-person split calculation",
            tipFeature3: "Tip calculation history",
            
            // History Feature
            historyTitle: "Calculation History",
            historyDesc: "Systematically manage all calculation records. Easily find past calculation details with calendar view and detailed search functionality.",
            historyFeature1: "Calendar view support",
            historyFeature2: "Detailed search & filters",
            historyFeature3: "Data export",
            
            // Multi-Currency Calculator Feature
            multiCurrencyTitle: "Multi-Currency Calculator",
            multiCurrencyDesc: "View and compare exchange rates for multiple currencies simultaneously. Useful for complex multi-country transactions or travel planning.",
            multiCurrencyFeature1: "Simultaneous multi-currency conversion",
            multiCurrencyFeature2: "Currency comparison analysis",
            multiCurrencyFeature3: "Favorite currency groups",
            
            // Settings Feature
            settingsTitle: "Settings",
            settingsDesc: "Customize the app to your personal preferences. Various customization options including dark/light theme, language settings, and font size adjustment.",
            settingsFeature1: "Default currency selection",
            settingsFeature2: "14 language support",
            settingsFeature3: "Dark/Light theme",

            // Menu Feature
            menuTitle: "Intuitive Menu",
            menuDesc: "Access all features easily with a clean and intuitive menu interface. Quickly find and use the features you need.",
            menuFeature1: "One-touch quick access",
            menuFeature2: "Organized feature categorization",
            menuFeature3: "User-friendly design",

            // History Management Feature
            historyManagementTitle: "History Management",
            historyManagementDesc: "Systematically manage and organize your calculation history. Bookmark important records and easily delete unnecessary ones.",
            historyManagementFeature1: "Swipe to delete easily",
            historyManagementFeature2: "Bookmark important records",
            historyManagementFeature3: "Bulk selection and management",

            // Widget Feature
            widgetTitle: "Home Screen Widget",
            widgetDesc: "Check exchange rates directly from your home screen. View real-time rates for major currencies at a glance without opening the app.",
            widgetFeature1: "Real-time rate display",
            widgetFeature2: "Various widget sizes",
            widgetFeature3: "Auto-update",

            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "Technical Excellence",
            techSubtitle: "Reliable and fast performance built with cutting-edge technology",
            
            performanceTitle: "High Performance",
            performanceDesc: "Built with modern mobile technology to provide native-level performance on both iOS and Android platforms.",
            
            offlineTitle: "Offline Support",
            offlineDesc: "Use basic calculation functions even without internet connection, making it reliable anytime, anywhere.",
            
            securityTitle: "Secure Data",
            securityDesc: "All data is safely stored on your device with privacy protection as our top priority.",
            
            updateTitle: "Automatic Updates",
            updateDesc: "Exchange rate data and app features are automatically updated to maintain the latest information.",
            
            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "Why Choose Exchango AI?",
            benefitsSubtitle: "Reasons why travelers and business professionals choose us",
            
            travelersTitle: "Essential App for Travelers",
            travelersDesc: "Solve currency conversion, tip calculation, and group settlements all at once during international travel.",
            
            businessTitle: "Tool for Business Professionals",
            businessDesc: "Efficiently handle international transactions and multi-currency accounting tasks.",
            
            reliableTitle: "Trustworthy Accuracy",
            reliableDesc: "Provides reliable results with real-time exchange rate data and accurate calculation algorithms.",
            
            // ==== DOWNLOAD SECTION ====
            downloadTitle: "Download Now",
            downloadSubtitle: "Smart currency calculation solution provided free of charge",
            downloadDesc: "Make currency calculations easier and more accurate with Exchango AI supporting 150+ currencies.",
            comingSoon: "Coming Soon",
            
            // ==== FOOTER SECTION ====
            footerAbout: "About Exchango AI",
            footerSupport: "Customer Support",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms of Service",
            footerAboutPage: "About Exchango AI",
            footerCopyright: "Copyright © 2025 Exchango AI All rights reserved.",
            
            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "Skip to main content",
            backToTop: "Back to top",
            closeModal: "Close modal",
            nextSlide: "Next slide",
            previousSlide: "Previous slide",
        },
        
        ja: {
            // ==== HERO SECTION ====
            pageTitle: "Exchango AI - スマート為替計算機アプリ",
            heroTitle: "Exchango AI",
            heroTagline: "世界のためのスマート為替計算機",
            heroSubtitle: "150以上の通貨をサポートするオールインワン為替計算・精算アプリ",
            
            // Hero Statistics
            statCurrencies: "サポート通貨",
            statCurrenciesValue: "150+",
            statLanguages: "対応言語",
            statLanguagesValue: "14",
            statPrice: "価格",
            statPriceValue: "無料",
            
            // Hero CTAs
            downloadiOS: "iOS版ダウンロード",
            downloadAndroid: "Android版ダウンロード", 
            learnMore: "詳細を見る",
            
            // ==== FEATURE SHOWCASE SECTION ====
            featuresTitle: "スマートな為替ツール",
            featuresSubtitle: "旅行とビジネスのための完全な為替計算ソリューション",
            
            // Calculator Feature
            calculatorTitle: "スマート為替計算機",
            calculatorDesc: "直感的な計算機で150以上の通貨間の為替レートをリアルタイムで計算します。数学演算と為替変換が一つに統合され、複雑な計算も簡単に解決できます。",
            calculatorFeature1: "リアルタイム為替データ",
            calculatorFeature2: "双方向計算とスワップ",
            calculatorFeature3: "計算履歴の保存",
            
            // Today's Rates Feature
            ratesTitle: "今日の為替レート",
            ratesDesc: "世界中の通貨のリアルタイム為替情報を一目で確認できます。お気に入り機能でよく使用する通貨に素早くアクセスできます。",
            ratesFeature1: "リアルタイムレート更新",
            ratesFeature2: "お気に入り通貨管理",
            ratesFeature3: "為替レート推移表示",
            
            // Settlement Feature
            settlementTitle: "精算計算機",
            settlementDesc: "海外旅行や国際ビジネスで発生する多通貨精算を簡単に解決します。複数の人がそれぞれ異なる通貨で支払った金額を公正に分割します。",
            settlementFeature1: "多通貨同時計算",
            settlementFeature2: "公正な費用分担",
            settlementFeature3: "参加者柔軟管理",
            
            // Tip Calculator Feature
            tipTitle: "チップ計算機",
            tipDesc: "適切なチップ率を計算し、人数別に分割します。様々な国のチップ文化を考慮したスマートな計算機能を提供します。",
            tipFeature1: "国別チップ率ガイド",
            tipFeature2: "人数別分割計算",
            tipFeature3: "チップ計算履歴",
            
            // History Feature
            historyTitle: "計算履歴",
            historyDesc: "すべての計算記録を体系的に管理します。カレンダービューと詳細検索機能で過去の計算内容を簡単に見つけることができます。",
            historyFeature1: "カレンダービューサポート",
            historyFeature2: "詳細検索とフィルター",
            historyFeature3: "データエクスポート",
            
            // Multi-Currency Calculator Feature
            multiCurrencyTitle: "多通貨計算機",
            multiCurrencyDesc: "複数の通貨の為替レートを同時に表示・比較できます。複雑な多国間取引や旅行計画に便利な機能です。",
            multiCurrencyFeature1: "同時多通貨変換",
            multiCurrencyFeature2: "通貨別比較分析",
            multiCurrencyFeature3: "お気に入り通貨グループ",
            
            // Settings Feature
            settingsTitle: "設定",
            settingsDesc: "お好みに合わせてアプリをカスタマイズしてください。ダーク/ライトテーマ、言語設定、フォントサイズ調整など様々なカスタマイズオプションを提供します。",
            settingsFeature1: "基本通貨選択",
            settingsFeature2: "14言語サポート",
            settingsFeature3: "ダーク/ライトテーマ",

            // Menu Feature
            menuTitle: "直感的なメニュー",
            menuDesc: "清潔で直感的なメニューインターフェースで全機能に簡単にアクセスできます。必要な機能をすばやく見つけて使用してください。",
            menuFeature1: "ワンタッチクイックアクセス",
            menuFeature2: "体系的な機能分類",
            menuFeature3: "ユーザーフレンドリーなデザイン",

            // History Management Feature
            historyManagementTitle: "履歴管理",
            historyManagementDesc: "計算履歴を体系的に管理・整理します。重要な記録はブックマークし、不要な記録は簡単に削除できます。",
            historyManagementFeature1: "スワイプで簡単削除",
            historyManagementFeature2: "重要記録のブックマーク",
            historyManagementFeature3: "一括選択と管理",

            // Widget Feature
            widgetTitle: "ホーム画面ウィジェット",
            widgetDesc: "ホーム画面から直接為替レートを確認できます。アプリを開かなくても主要通貨のリアルタイムレートを一目で確認できます。",
            widgetFeature1: "リアルタイムレート表示",
            widgetFeature2: "様々なウィジェットサイズ",
            widgetFeature3: "自動更新",

            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "技術的優秀性",
            techSubtitle: "最新技術で実装された安定かつ高速なパフォーマンス",
            
            performanceTitle: "高性能",
            performanceDesc: "最新のモバイル技術で構築され、iOSとAndroidでネイティブレベルのパフォーマンスを提供します。",
            
            offlineTitle: "オフラインサポート",
            offlineDesc: "インターネット接続なしでも基本計算機能を使用でき、いつでもどこでも信頼できます。",
            
            securityTitle: "安全なデータ",
            securityDesc: "すべてのデータはデバイスに安全に保存され、プライバシー保護を最優先にします。",
            
            updateTitle: "自動更新",
            updateDesc: "為替データとアプリ機能が自動的に更新され、常に最新情報を維持します。",
            
            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "なぜExchango AIを選ぶべきか？",
            benefitsSubtitle: "旅行者とビジネス専門家が選ぶ理由",
            
            travelersTitle: "旅行者のための必須アプリ",
            travelersDesc: "海外旅行中の為替計算、チップ計算、グループ精算を一度に解決します。",
            
            businessTitle: "ビジネス専門家のためのツール",
            businessDesc: "国際取引と多通貨会計業務を効率的に処理できます。",
            
            reliableTitle: "信頼できる正確性",
            reliableDesc: "リアルタイム為替データと正確な計算アルゴリズムで信頼できる結果を提供します。",
            
            // ==== DOWNLOAD SECTION ====
            downloadTitle: "今すぐダウンロード",
            downloadSubtitle: "無料で提供されるスマートな為替計算ソリューション",
            downloadDesc: "150以上の通貨をサポートするExchango AIで為替計算をより簡単で正確にしましょう。",
            comingSoon: "近日公開",
            
            // ==== FOOTER SECTION ====
            footerAbout: "Exchango AIについて",
            footerSupport: "カスタマーサポート",
            footerPrivacy: "プライバシーポリシー",
            footerTerms: "利用規約",
            footerAboutPage: "Exchango AIについて",
            footerCopyright: "Copyright © 2025 Exchango AI All rights reserved.",
            
            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "メインコンテンツにスキップ",
            backToTop: "トップに戻る",
            closeModal: "モーダルを閉じる",
            nextSlide: "次のスライド",
            previousSlide: "前のスライド",
        },
        
        zh: {
            // ==== HERO SECTION ====
            pageTitle: "Exchango AI - 智能汇率计算器应用",
            heroTitle: "Exchango AI",
            heroTagline: "全球智能汇率计算器",
            heroSubtitle: "支持150多种货币的一站式汇率计算和结算应用",
            
            // Hero Statistics
            statCurrencies: "支持货币",
            statCurrenciesValue: "150+",
            statLanguages: "支持语言",
            statLanguagesValue: "14",
            statPrice: "价格",
            statPriceValue: "免费",
            
            // Hero CTAs
            downloadiOS: "iOS下载",
            downloadAndroid: "Android下载",
            learnMore: "了解更多",
            
            // ==== FEATURE SHOWCASE SECTION ====
            featuresTitle: "智能汇率工具",
            featuresSubtitle: "为旅行和商务提供完整的汇率计算解决方案",
            
            // Calculator Feature
            calculatorTitle: "智能汇率计算器",
            calculatorDesc: "使用直观的计算器实时计算150多种货币之间的汇率。数学运算和汇率转换集成在一起，复杂计算也能轻松解决。",
            calculatorFeature1: "实时汇率数据",
            calculatorFeature2: "双向计算和互换",
            calculatorFeature3: "计算历史记录",
            
            // Today's Rates Feature
            ratesTitle: "今日汇率",
            ratesDesc: "一目了然地查看全球货币的实时汇率信息。收藏功能让您快速访问常用货币。",
            ratesFeature1: "实时汇率更新",
            ratesFeature2: "收藏货币管理",
            ratesFeature3: "汇率趋势显示",
            
            // Settlement Feature
            settlementTitle: "结算计算器",
            settlementDesc: "轻松解决国际旅行或商务中产生的多货币结算。公平分摊多人用不同货币支付的金额。",
            settlementFeature1: "多货币同时计算",
            settlementFeature2: "公平费用分摊",
            settlementFeature3: "参与者灵活管理",
            
            // Tip Calculator Feature
            tipTitle: "小费计算器",
            tipDesc: "计算合适的小费比例并按人数分摊。提供考虑各国小费文化的智能计算功能。",
            tipFeature1: "各国小费比例指南",
            tipFeature2: "按人数分摊计算",
            tipFeature3: "小费计算历史",
            
            // History Feature
            historyTitle: "计算历史",
            historyDesc: "系统管理所有计算记录。使用日历视图和详细搜索功能轻松查找过往计算内容。",
            historyFeature1: "日历视图支持",
            historyFeature2: "详细搜索和筛选",
            historyFeature3: "数据导出",
            
            // Multi-Currency Calculator Feature
            multiCurrencyTitle: "多货币计算器",
            multiCurrencyDesc: "同时查看和比较多种货币的汇率。适用于复杂的多国交易或旅行规划。",
            multiCurrencyFeature1: "同步多货币转换",
            multiCurrencyFeature2: "货币比较分析",
            multiCurrencyFeature3: "收藏货币组",
            
            // Settings Feature
            settingsTitle: "设置",
            settingsDesc: "根据个人喜好自定义应用。提供包括深色/浅色主题、语言设置、字体大小调节等各种自定义选项。",
            settingsFeature1: "默认货币选择",
            settingsFeature2: "14种语言支持",
            settingsFeature3: "深色/浅色主题",

            // Menu Feature
            menuTitle: "直观菜单",
            menuDesc: "通过干净直观的菜单界面轻松访问所有功能。快速找到并使用您需要的功能。",
            menuFeature1: "一键快速访问",
            menuFeature2: "系统化功能分类",
            menuFeature3: "用户友好设计",

            // History Management Feature
            historyManagementTitle: "历史记录管理",
            historyManagementDesc: "系统地管理和整理计算历史。收藏重要记录，轻松删除不需要的记录。",
            historyManagementFeature1: "滑动轻松删除",
            historyManagementFeature2: "收藏重要记录",
            historyManagementFeature3: "批量选择和管理",

            // Widget Feature
            widgetTitle: "主屏幕小工具",
            widgetDesc: "直接从主屏幕查看汇率。无需打开应用即可一眼查看主要货币的实时汇率。",
            widgetFeature1: "实时汇率显示",
            widgetFeature2: "多种小工具尺寸",
            widgetFeature3: "自动更新",

            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "技术卓越",
            techSubtitle: "使用尖端技术实现的稳定快速性能",
            
            performanceTitle: "高性能",
            performanceDesc: "采用最新移动技术构建，在iOS和Android平台提供原生级性能。",
            
            offlineTitle: "离线支持",
            offlineDesc: "即使没有互联网连接也能使用基本计算功能，随时随地都可靠。",
            
            securityTitle: "安全数据",
            securityDesc: "所有数据都安全存储在您的设备上，以隐私保护为第一优先。",
            
            updateTitle: "自动更新",
            updateDesc: "汇率数据和应用功能自动更新，始终保持最新信息。",
            
            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "为什么选择Exchango AI？",
            benefitsSubtitle: "旅行者和商务专业人士选择我们的理由",
            
            travelersTitle: "旅行者的必备应用",
            travelersDesc: "国际旅行中一次性解决汇率计算、小费计算和团体结算。",
            
            businessTitle: "商务专业人士的工具",
            businessDesc: "高效处理国际交易和多货币会计业务。",
            
            reliableTitle: "可靠的准确性",
            reliableDesc: "使用实时汇率数据和精确计算算法提供可信赖的结果。",
            
            // ==== DOWNLOAD SECTION ====
            downloadTitle: "立即下载",
            downloadSubtitle: "免费提供的智能汇率计算解决方案",
            downloadDesc: "使用支持150多种货币的Exchango AI让汇率计算更简单、更准确。",
            comingSoon: "即将推出",
            
            // ==== FOOTER SECTION ====
            footerAbout: "关于Exchango AI",
            footerSupport: "客户支持",
            footerPrivacy: "隐私政策",
            footerTerms: "服务条款",
            footerAboutPage: "关于Exchango AI",
            footerCopyright: "© 2024 Exchango AI. 保留所有权利。",
            
            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "跳转到主要内容",
            backToTop: "返回顶部",
            closeModal: "关闭模态框",
            nextSlide: "下一张幻灯片",
            previousSlide: "上一张幻灯片",
        },
        
        // Arabic
        ar: {
            pageTitle: "Exchango AI - تطبيق محول العملات الذكي",
            metaDescription: "تطبيق محول العملات الذكي يدعم أكثر من 150 عملة عالمياً. حل تحويل العملات والحسابات والبقشيش مرة واحدة.",
            heroTitle: "Exchango AI",
            heroTagline: "محول العملات الذكي للعالم",
            heroSubtitle: "تطبيق شامل لتحويل وتسوية العملات يدعم أكثر من 150 عملة",
            
            statCurrencies: "العملات المدعومة",
            statCurrenciesValue: "150+",
            statLanguages: "اللغات المدعومة", 
            statLanguagesValue: "14",
            statPrice: "السعر",
            statPriceValue: "مجاني",

            // Language Selector
            currentLanguage: "العربية",
            selectLanguage: "اختر اللغة",

            // Gallery Controls
            previousImage: "الصورة السابقة",
            nextImage: "الصورة التالية",

            downloadiOS: "تحميل لنظام iOS",
            downloadAndroid: "تحميل لنظام Android",
            learnMore: "اعرف المزيد",
            
            featuresTitle: "أدوات العملات الذكية",
            featuresSubtitle: "حل شامل لحساب العملات للسفر والأعمال",
            
            calculatorTitle: "حاسبة العملات الذكية",
            calculatorDesc: "احسب أسعار الصرف بين أكثر من 150 عملة في الوقت الفعلي باستخدام حاسبة بديهية.",
            calculatorFeature1: "بيانات أسعار الصرف المباشرة",
            calculatorFeature2: "حساب ثنائي الاتجاه والتبديل",
            calculatorFeature3: "حفظ تاريخ الحسابات",
            
            ratesTitle: "أسعار اليوم",
            ratesDesc: "تحقق من معلومات أسعار الصرف المباشرة للعملات العالمية في لمحة.",
            ratesFeature1: "تحديث أسعار الصرف المباشر",
            ratesFeature2: "إدارة العملات المفضلة",
            ratesFeature3: "عرض اتجاه أسعار الصرف",
            
            settlementTitle: "حاسبة التسوية",
            settlementDesc: "حل تسويات العملات المتعددة من السفر الدولي أو الأعمال بسهولة.",
            settlementFeature1: "حساب عملات متعددة متزامن",
            settlementFeature2: "مشاركة عادلة للتكاليف",
            settlementFeature3: "إدارة مرنة للمشاركين",
            
            tipTitle: "حاسبة الإكرامية",
            tipDesc: "احسب نسب الإكرامية المناسبة وقسمها حسب عدد الأشخاص.",
            tipFeature1: "دليل معدلات الإكرامية حسب البلد",
            tipFeature2: "حساب التقسيم لكل شخص",
            tipFeature3: "تاريخ حساب الإكرامية",
            
            historyTitle: "تاريخ الحسابات",
            historyDesc: "إدارة جميع سجلات الحسابات بشكل منهجي.",
            historyFeature1: "دعم عرض التقويم",
            historyFeature2: "بحث مفصل ومرشحات",
            historyFeature3: "تصدير البيانات",
            
            multiCurrencyTitle: "حاسبة العملات المتعددة",
            multiCurrencyDesc: "عرض ومقارنة أسعار الصرف لعملات متعددة في نفس الوقت.",
            multiCurrencyFeature1: "تحويل عملات متعددة متزامن",
            multiCurrencyFeature2: "تحليل مقارنة العملات",
            multiCurrencyFeature3: "مجموعات العملات المفضلة",
            
            settingsTitle: "الإعدادات",
            settingsDesc: "خصص التطبيق حسب تفضيلاتك الشخصية.",
            settingsFeature1: "السمة الداكنة/الفاتحة",
            settingsFeature2: "دعم 14 لغة",
            settingsFeature3: "تعديل حجم الخط",

            // Menu Feature
            menuTitle: "قائمة بديهية",
            menuDesc: "الوصول إلى جميع الميزات بسهولة من خلال واجهة قائمة نظيفة وبديهية. ابحث عن الميزات التي تحتاجها واستخدمها بسرعة.",
            menuFeature1: "وصول سريع بلمسة واحدة",
            menuFeature2: "تصنيف منظم للميزات",
            menuFeature3: "تصميم سهل الاستخدام",

            // History Management Feature
            historyManagementTitle: "إدارة السجل",
            historyManagementDesc: "قم بإدارة وتنظيم سجل الحسابات بشكل منهجي. ضع إشارة مرجعية على السجلات المهمة واحذف غير الضرورية بسهولة.",
            historyManagementFeature1: "اسحب للحذف بسهولة",
            historyManagementFeature2: "وضع إشارة على السجلات المهمة",
            historyManagementFeature3: "اختيار وإدارة مجمعة",

            // Widget Feature
            widgetTitle: "أداة الشاشة الرئيسية",
            widgetDesc: "تحقق من أسعار الصرف مباشرة من شاشتك الرئيسية. شاهد الأسعار الفورية للعملات الرئيسية بنظرة واحدة دون فتح التطبيق.",
            widgetFeature1: "عرض الأسعار الفورية",
            widgetFeature2: "أحجام أدوات متنوعة",
            widgetFeature3: "تحديث تلقائي",

            techTitle: "التميز التقني",
            techSubtitle: "أداء موثوق وسريع مبني بأحدث التقنيات",
            
            performanceTitle: "أداء عالي",
            performanceDesc: "مبني باستخدام أحدث تقنيات الهاتف المحمول لتوفير أداء بمستوى الأصلي على منصتي iOS و Android.",
            
            offlineTitle: "دعم غير متصل",
            offlineDesc: "استخدم وظائف الحساب الأساسية حتى بدون اتصال بالإنترنت.",
            
            securityTitle: "بيانات آمنة",
            securityDesc: "جميع البيانات مخزنة بأمان على جهازك مع حماية الخصوصية كأولوية قصوى.",
            
            updateTitle: "تحديثات تلقائية",
            updateDesc: "بيانات أسعار الصرف وميزات التطبيق تُحدث تلقائياً للحفاظ على أحدث المعلومات.",
            
            benefitsTitle: "لماذا تختار Exchango AI؟",
            benefitsSubtitle: "الأسباب التي تجعل المسافرين ومحترفي الأعمال يختاروننا",
            
            travelersTitle: "تطبيق أساسي للمسافرين",
            travelersDesc: "حل تحويل العملات وحساب الإكراميات وتسويات المجموعات في مرة واحدة أثناء السفر الدولي.",
            
            businessTitle: "أداة لمحترفي الأعمال",
            businessDesc: "التعامل بكفاءة مع المعاملات الدولية ومهام المحاسبة متعددة العملات.",
            
            reliableTitle: "دقة موثوقة",
            reliableDesc: "يوفر نتائج موثوقة ببيانات أسعار الصرف المباشرة وخوارزميات حساب دقيقة.",
            
            downloadTitle: "حمل الآن",
            downloadSubtitle: "حل حساب العملات الذكي المقدم مجاناً",
            downloadDesc: "اجعل حسابات العملات أسهل وأكثر دقة مع Exchango AI الذي يدعم أكثر من 150 عملة.",
            comingSoon: "قريباً",
            
            footerAbout: "حول Exchango AI",
            footerSupport: "دعم العملاء",
            footerPrivacy: "سياسة الخصوصية",
            footerTerms: "شروط الخدمة",
            footerAboutPage: "حول Exchango AI",
            footerCopyright: "© 2025 Exchango AI. جميع الحقوق محفوظة.",

            // Accessibility & Navigation
            skipToContent: "انتقل إلى المحتوى الرئيسي",
            backToTop: "العودة إلى الأعلى",
            closeModal: "إغلاق النافذة المنبثقة",
            nextSlide: "الشريحة التالية",
            previousSlide: "الشريحة السابقة",
        },
        
        // German
        de: {
            pageTitle: "Exchango AI - Intelligente Währungsrechner-App",
            metaDescription: "Intelligente Währungsrechner-App mit Unterstützung für über 150 Währungen weltweit. Lösung für Währungsumrechnung, Abrechnung und Trinkgeldberechnung in einem.",
            heroTitle: "Exchango AI",
            heroTagline: "Intelligenter Währungsrechner für die Welt",
            heroSubtitle: "All-in-One Währungsumrechnung und Abrechnungs-App mit Unterstützung für 150+ Währungen",
            
            statCurrencies: "Unterstützte Währungen",
            statCurrenciesValue: "150+",
            statLanguages: "Unterstützte Sprachen",
            statLanguagesValue: "14",
            statPrice: "Preis",
            statPriceValue: "Kostenlos",

            // Language Selector
            currentLanguage: "Deutsch",
            selectLanguage: "Sprache wählen",

            // Gallery Controls
            previousImage: "Vorheriges Bild",
            nextImage: "Nächstes Bild",

            downloadiOS: "Für iOS herunterladen",
            downloadAndroid: "Für Android herunterladen",
            learnMore: "Mehr erfahren",
            
            featuresTitle: "Intelligente Währungstools",
            featuresSubtitle: "Komplette Währungsberechnungslösung für Reisen und Geschäfte",
            
            calculatorTitle: "Intelligenter Währungsrechner",
            calculatorDesc: "Berechnen Sie Wechselkurse zwischen 150+ Währungen in Echtzeit mit einem intuitiven Rechner.",
            calculatorFeature1: "Echtzeit-Wechselkursdaten",
            calculatorFeature2: "Bidirektionale Berechnung & Tausch",
            calculatorFeature3: "Berechnungsverlauf speichern",
            
            ratesTitle: "Heutige Kurse",
            ratesDesc: "Überprüfen Sie Echtzeit-Wechselkursinformationen für Währungen weltweit auf einen Blick.",
            ratesFeature1: "Echtzeit-Kursupdate",
            ratesFeature2: "Favoritenwährungsverwaltung",
            ratesFeature3: "Wechselkurstrendanzeige",
            
            settlementTitle: "Abrechnungsrechner",
            settlementDesc: "Lösen Sie Mehrwährungsabrechnungen von internationalen Reisen oder Geschäften einfach.",
            settlementFeature1: "Gleichzeitige Mehrwährungsberechnung",
            settlementFeature2: "Faire Kostenteilung",
            settlementFeature3: "Flexible Teilnehmerverwaltung",
            
            tipTitle: "Trinkgeldrechner",
            tipDesc: "Berechnen Sie angemessene Trinkgeldsätze und teilen Sie sie nach Personenanzahl auf.",
            tipFeature1: "Länderspezifischer Trinkgeldsatz-Leitfaden",
            tipFeature2: "Pro-Person-Aufteilungsberechnung",
            tipFeature3: "Trinkgeldberechnungsverlauf",
            
            historyTitle: "Berechnungsverlauf",
            historyDesc: "Verwalten Sie alle Berechnungsaufzeichnungen systematisch.",
            historyFeature1: "Kalenderansicht-Unterstützung",
            historyFeature2: "Detaillierte Suche & Filter",
            historyFeature3: "Datenexport",
            
            multiCurrencyTitle: "Mehrwährungsrechner",
            multiCurrencyDesc: "Anzeigen und Vergleichen von Wechselkursen für mehrere Währungen gleichzeitig.",
            multiCurrencyFeature1: "Gleichzeitige Mehrwährungsumrechnung",
            multiCurrencyFeature2: "Währungsvergleichsanalyse",
            multiCurrencyFeature3: "Favoritenwährungsgruppen",
            
            settingsTitle: "Einstellungen",
            settingsDesc: "Passen Sie die App an Ihre persönlichen Vorlieben an.",
            settingsFeature1: "Dunkles/Helles Theme",
            settingsFeature2: "14 Sprachen Unterstützung",
            settingsFeature3: "Schriftgrößenanpassung",

            // Menu Feature
            menuTitle: "Intuitives Menü",
            menuDesc: "Greifen Sie einfach auf alle Funktionen mit einer übersichtlichen und intuitiven Menüoberfläche zu. Finden und nutzen Sie schnell die gewünschten Funktionen.",
            menuFeature1: "Schnellzugriff mit einem Klick",
            menuFeature2: "Organisierte Funktionskategorisierung",
            menuFeature3: "Benutzerfreundliches Design",

            // History Management Feature
            historyManagementTitle: "Verlaufsverwaltung",
            historyManagementDesc: "Verwalten und organisieren Sie Ihren Berechnungsverlauf systematisch. Markieren Sie wichtige Einträge als Favoriten und löschen Sie unnötige einfach.",
            historyManagementFeature1: "Einfaches Löschen durch Wischen",
            historyManagementFeature2: "Wichtige Einträge als Favoriten markieren",
            historyManagementFeature3: "Massenauswahl und -verwaltung",

            // Widget Feature
            widgetTitle: "Startbildschirm-Widget",
            widgetDesc: "Überprüfen Sie Wechselkurse direkt von Ihrem Startbildschirm. Sehen Sie Echtzeitkurse für wichtige Währungen auf einen Blick, ohne die App zu öffnen.",
            widgetFeature1: "Echtzeit-Kursanzeige",
            widgetFeature2: "Verschiedene Widget-Größen",
            widgetFeature3: "Automatische Aktualisierung",

            techTitle: "Technische Exzellenz",
            techSubtitle: "Zuverlässige und schnelle Leistung mit modernster Technologie",
            
            performanceTitle: "Hohe Leistung",
            performanceDesc: "Erstellt mit modernster Mobiltechnologie für native Leistung auf iOS und Android Plattformen.",
            
            offlineTitle: "Offline-Unterstützung",
            offlineDesc: "Nutzen Sie grundlegende Berechnungsfunktionen auch ohne Internetverbindung.",
            
            securityTitle: "Sichere Daten",
            securityDesc: "Alle Daten werden sicher auf Ihrem Gerät gespeichert mit Datenschutz als oberste Priorität.",
            
            updateTitle: "Automatische Updates",
            updateDesc: "Wechselkursdaten und App-Features werden automatisch aktualisiert um die neuesten Informationen zu erhalten.",
            
            benefitsTitle: "Warum Exchango AI wählen?",
            benefitsSubtitle: "Gründe, warum Reisende und Geschäftsprofis uns wählen",
            
            travelersTitle: "Unverzichtbare App für Reisende",
            travelersDesc: "Lösen Sie Währungsumrechnung, Trinkgeldberechnung und Gruppenabrechnungen auf einmal während internationaler Reisen.",
            
            businessTitle: "Tool für Geschäftsprofis",
            businessDesc: "Effiziente Abwicklung internationaler Transaktionen und Mehrwährungs-Buchhaltungsaufgaben.",
            
            reliableTitle: "Vertrauenswürdige Genauigkeit",
            reliableDesc: "Bietet zuverlässige Ergebnisse mit Echtzeit-Wechselkursdaten und präzisen Berechnungsalgorithmen.",
            
            downloadTitle: "Jetzt herunterladen",
            downloadSubtitle: "Intelligente Währungsberechnungslösung kostenlos bereitgestellt",
            downloadDesc: "Machen Sie Währungsberechnungen einfacher und genauer mit Exchango AI, das 150+ Währungen unterstützt.",
            comingSoon: "Demnächst verfügbar",
            
            footerAbout: "Über Exchango AI",
            footerSupport: "Kundensupport",
            footerPrivacy: "Datenschutzrichtlinie",
            footerTerms: "Nutzungsbedingungen",
            footerAboutPage: "Über Exchango AI",
            footerCopyright: "© 2025 Exchango AI. Alle Rechte vorbehalten.",

            // Accessibility & Navigation
            skipToContent: "Zum Hauptinhalt springen",
            backToTop: "Nach oben",
            closeModal: "Modal schließen",
            nextSlide: "Nächste Folie",
            previousSlide: "Vorherige Folie",
        },
        
        // Spanish
        es: {
            pageTitle: "Exchango AI - Aplicación Inteligente de Conversión de Monedas",
            metaDescription: "Aplicación inteligente de conversión de monedas que soporta más de 150 monedas mundialmente. Resuelve conversión de monedas, cálculo de propinas y liquidaciones de una vez.",
            heroTitle: "Exchango AI",
            heroTagline: "Conversor de Monedas Inteligente para el Mundo",
            heroSubtitle: "Aplicación todo en uno de conversión y liquidación de monedas compatible con más de 150 monedas",
            
            statCurrencies: "Monedas Compatibles",
            statCurrenciesValue: "150+",
            statLanguages: "Idiomas Compatibles",
            statLanguagesValue: "14",
            statPrice: "Precio",
            statPriceValue: "Gratis",

            // Language Selector
            currentLanguage: "Español",
            selectLanguage: "Seleccionar Idioma",

            // Gallery Controls
            previousImage: "Imagen anterior",
            nextImage: "Imagen siguiente",

            downloadiOS: "Descargar para iOS",
            downloadAndroid: "Descargar para Android",
            learnMore: "Saber Más",
            
            featuresTitle: "Herramientas de Moneda Inteligentes",
            featuresSubtitle: "Solución completa de cálculo de monedas para viajes y negocios",
            
            calculatorTitle: "Calculadora de Monedas Inteligente",
            calculatorDesc: "Calcule tipos de cambio entre más de 150 monedas en tiempo real con una calculadora intuitiva.",
            calculatorFeature1: "Datos de tipo de cambio en tiempo real",
            calculatorFeature2: "Cálculo bidireccional e intercambio",
            calculatorFeature3: "Almacenamiento del historial de cálculos",
            
            ratesTitle: "Tipos de Hoy",
            ratesDesc: "Verifique la información de tipos de cambio en tiempo real para monedas mundiales de un vistazo.",
            ratesFeature1: "Actualización de tipos en tiempo real",
            ratesFeature2: "Gestión de monedas favoritas",
            ratesFeature3: "Visualización de tendencias de tipos de cambio",
            
            settlementTitle: "Calculadora de Liquidación",
            settlementDesc: "Resuelva fácilmente liquidaciones multi-moneda de viajes internacionales o negocios.",
            settlementFeature1: "Cálculo simultáneo de múltiples monedas",
            settlementFeature2: "Reparto justo de costos",
            settlementFeature3: "Gestión flexible de participantes",
            
            tipTitle: "Calculadora de Propinas",
            tipDesc: "Calcule porcentajes de propina apropiados y divídalos por número de personas.",
            tipFeature1: "Guía de tasas de propina por país",
            tipFeature2: "Cálculo de división por persona",
            tipFeature3: "Historial de cálculo de propinas",
            
            historyTitle: "Historial de Cálculos",
            historyDesc: "Gestione todos los registros de cálculos sistemáticamente.",
            historyFeature1: "Soporte de vista de calendario",
            historyFeature2: "Búsqueda detallada y filtros",
            historyFeature3: "Exportación de datos",
            
            multiCurrencyTitle: "Calculadora Multi-Moneda",
            multiCurrencyDesc: "Vea y compare tipos de cambio para múltiples monedas simultáneamente.",
            multiCurrencyFeature1: "Conversión simultánea de múltiples monedas",
            multiCurrencyFeature2: "Análisis de comparación de monedas",
            multiCurrencyFeature3: "Grupos de monedas favoritas",
            
            settingsTitle: "Configuración",
            settingsDesc: "Personalice la aplicación según sus preferencias personales.",
            settingsFeature1: "Tema Oscuro/Claro",
            settingsFeature2: "Soporte para 14 idiomas",
            settingsFeature3: "Ajuste del tamaño de fuente",

            // Menu Feature
            menuTitle: "Menú Intuitivo",
            menuDesc: "Acceda a todas las funciones fácilmente con una interfaz de menú limpia e intuitiva. Encuentre y use rápidamente las funciones que necesita.",
            menuFeature1: "Acceso rápido con un toque",
            menuFeature2: "Categorización organizada de funciones",
            menuFeature3: "Diseño fácil de usar",

            // History Management Feature
            historyManagementTitle: "Gestión de Historial",
            historyManagementDesc: "Gestione y organice sistemáticamente su historial de cálculos. Marque registros importantes como favoritos y elimine fácilmente los innecesarios.",
            historyManagementFeature1: "Deslice para eliminar fácilmente",
            historyManagementFeature2: "Marcar registros importantes",
            historyManagementFeature3: "Selección y gestión masiva",

            // Widget Feature
            widgetTitle: "Widget de Pantalla de Inicio",
            widgetDesc: "Consulte los tipos de cambio directamente desde su pantalla de inicio. Vea las tasas en tiempo real de las principales monedas de un vistazo sin abrir la aplicación.",
            widgetFeature1: "Visualización de tasas en tiempo real",
            widgetFeature2: "Varios tamaños de widget",
            widgetFeature3: "Actualización automática",

            techTitle: "Excelencia Técnica",
            techSubtitle: "Rendimiento confiable y rápido construido con tecnología de vanguardia",
            
            performanceTitle: "Alto Rendimiento",
            performanceDesc: "Construido con tecnología móvil moderna para proporcionar rendimiento nativo en plataformas iOS y Android.",
            
            offlineTitle: "Soporte Sin Conexión",
            offlineDesc: "Use funciones básicas de cálculo incluso sin conexión a internet.",
            
            securityTitle: "Datos Seguros",
            securityDesc: "Todos los datos se almacenan de forma segura en su dispositivo con la protección de privacidad como máxima prioridad.",
            
            updateTitle: "Actualizaciones Automáticas",
            updateDesc: "Los datos de tipos de cambio y las características de la aplicación se actualizan automáticamente para mantener la información más reciente.",
            
            benefitsTitle: "¿Por qué elegir Exchango AI?",
            benefitsSubtitle: "Razones por las que viajeros y profesionales de negocios nos eligen",
            
            travelersTitle: "Aplicación Esencial para Viajeros",
            travelersDesc: "Resuelva conversión de monedas, cálculo de propinas y liquidaciones de grupo de una vez durante viajes internacionales.",
            
            businessTitle: "Herramienta para Profesionales de Negocios",
            businessDesc: "Manejo eficiente de transacciones internacionales y tareas de contabilidad multi-moneda.",
            
            reliableTitle: "Precisión Confiable",
            reliableDesc: "Proporciona resultados confiables con datos de tipos de cambio en tiempo real y algoritmos de cálculo precisos.",
            
            downloadTitle: "Descargar Ahora",
            downloadSubtitle: "Solución inteligente de cálculo de monedas proporcionada gratuitamente",
            downloadDesc: "Haga los cálculos de monedas más fáciles y precisos con Exchango AI que soporta más de 150 monedas.",
            comingSoon: "Próximamente",
            
            footerAbout: "Acerca de Exchango AI",
            footerSupport: "Soporte al Cliente",
            footerPrivacy: "Política de Privacidad",
            footerTerms: "Términos de Servicio",
            footerAboutPage: "Acerca de Exchango AI",
            footerCopyright: "© 2025 Exchango AI. Todos los derechos reservados.",

            // Accessibility & Navigation
            skipToContent: "Saltar al contenido principal",
            backToTop: "Volver arriba",
            closeModal: "Cerrar modal",
            nextSlide: "Siguiente diapositiva",
            previousSlide: "Diapositiva anterior",
        },
        
        // French
        fr: {
            pageTitle: "Exchango AI - Application Intelligente de Conversion de Devises",
            metaDescription: "Application intelligente de conversion de devises supportant plus de 150 devises mondiales. Résolvez conversion de devises, calcul de pourboires et règlements en une fois.",
            heroTitle: "Exchango AI",
            heroTagline: "Convertisseur de Devises Intelligent pour le Monde",
            heroSubtitle: "Application tout-en-un de conversion et de règlement de devises prenant en charge plus de 150 devises",
            
            statCurrencies: "Devises Prises en Charge",
            statCurrenciesValue: "150+",
            statLanguages: "Langues Prises en Charge",
            statLanguagesValue: "14",
            statPrice: "Prix",
            statPriceValue: "Gratuit",

            // Language Selector
            currentLanguage: "Français",
            selectLanguage: "Sélectionner la Langue",

            // Gallery Controls
            previousImage: "Image précédente",
            nextImage: "Image suivante",

            downloadiOS: "Télécharger pour iOS",
            downloadAndroid: "Télécharger pour Android",
            learnMore: "En Savoir Plus",
            
            featuresTitle: "Outils de Devises Intelligents",
            featuresSubtitle: "Solution complète de calcul de devises pour les voyages et les affaires",
            
            calculatorTitle: "Calculatrice de Devises Intelligente",
            calculatorDesc: "Calculez les taux de change entre plus de 150 devises en temps réel avec une calculatrice intuitive.",
            calculatorFeature1: "Données de taux de change en temps réel",
            calculatorFeature2: "Calcul bidirectionnel et échange",
            calculatorFeature3: "Stockage de l'historique des calculs",
            
            ratesTitle: "Taux d'Aujourd'hui",
            ratesDesc: "Vérifiez les informations de taux de change en temps réel pour les devises mondiales en un coup d'œil.",
            ratesFeature1: "Mise à jour des taux en temps réel",
            ratesFeature2: "Gestion des devises favorites",
            ratesFeature3: "Affichage des tendances des taux de change",
            
            settlementTitle: "Calculatrice de Règlement",
            settlementDesc: "Résolvez facilement les règlements multi-devises des voyages internationaux ou des affaires.",
            settlementFeature1: "Calcul simultané de plusieurs devises",
            settlementFeature2: "Partage équitable des coûts",
            settlementFeature3: "Gestion flexible des participants",
            
            tipTitle: "Calculatrice de Pourboires",
            tipDesc: "Calculez les pourcentages de pourboire appropriés et divisez-les par nombre de personnes.",
            tipFeature1: "Guide des taux de pourboire par pays",
            tipFeature2: "Calcul de division par personne",
            tipFeature3: "Historique de calcul des pourboires",
            
            historyTitle: "Historique des Calculs",
            historyDesc: "Gérez tous les enregistrements de calculs de manière systématique.",
            historyFeature1: "Support de vue calendrier",
            historyFeature2: "Recherche détaillée et filtres",
            historyFeature3: "Exportation de données",
            
            multiCurrencyTitle: "Calculatrice Multi-Devises",
            multiCurrencyDesc: "Affichez et comparez les taux de change pour plusieurs devises simultanément.",
            multiCurrencyFeature1: "Conversion simultanée de plusieurs devises",
            multiCurrencyFeature2: "Analyse de comparaison de devises",
            multiCurrencyFeature3: "Groupes de devises favorites",
            
            settingsTitle: "Paramètres",
            settingsDesc: "Personnalisez l'application selon vos préférences personnelles.",
            settingsFeature1: "Thème Sombre/Clair",
            settingsFeature2: "Support de 14 langues",
            settingsFeature3: "Ajustement de la taille de police",

            // Menu Feature
            menuTitle: "Menu Intuitif",
            menuDesc: "Accédez facilement à toutes les fonctionnalités avec une interface de menu claire et intuitive. Trouvez et utilisez rapidement les fonctions dont vous avez besoin.",
            menuFeature1: "Accès rapide en un clic",
            menuFeature2: "Catégorisation organisée des fonctions",
            menuFeature3: "Design convivial",

            // History Management Feature
            historyManagementTitle: "Gestion de l'Historique",
            historyManagementDesc: "Gérez et organisez systématiquement votre historique de calculs. Mettez en favoris les enregistrements importants et supprimez facilement les inutiles.",
            historyManagementFeature1: "Glissez pour supprimer facilement",
            historyManagementFeature2: "Mettre en favoris les enregistrements importants",
            historyManagementFeature3: "Sélection et gestion en masse",

            // Widget Feature
            widgetTitle: "Widget d'Écran d'Accueil",
            widgetDesc: "Consultez les taux de change directement depuis votre écran d'accueil. Visualisez les taux en temps réel des principales devises d'un coup d'œil sans ouvrir l'application.",
            widgetFeature1: "Affichage des taux en temps réel",
            widgetFeature2: "Différentes tailles de widget",
            widgetFeature3: "Mise à jour automatique",

            techTitle: "Excellence Technique",
            techSubtitle: "Performance fiable et rapide construite avec une technologie de pointe",
            
            performanceTitle: "Haute Performance",
            performanceDesc: "Construit avec la technologie mobile moderne pour fournir une performance native sur les plateformes iOS et Android.",
            
            offlineTitle: "Support Hors Ligne",
            offlineDesc: "Utilisez les fonctions de calcul de base même sans connexion internet.",
            
            securityTitle: "Données Sécurisées",
            securityDesc: "Toutes les données sont stockées en sécurité sur votre appareil avec la protection de la vie privée comme priorité absolue.",
            
            updateTitle: "Mises à Jour Automatiques",
            updateDesc: "Les données de taux de change et les fonctionnalités de l'application sont automatiquement mises à jour pour maintenir les informations les plus récentes.",
            
            benefitsTitle: "Pourquoi choisir Exchango AI ?",
            benefitsSubtitle: "Raisons pour lesquelles les voyageurs et professionnels d'affaires nous choisissent",
            
            travelersTitle: "Application Essentielle pour les Voyageurs",
            travelersDesc: "Résolvez la conversion de devises, le calcul de pourboires et les règlements de groupe en une fois pendant les voyages internationaux.",
            
            businessTitle: "Outil pour les Professionnels d'Affaires",
            businessDesc: "Gestion efficace des transactions internationales et des tâches de comptabilité multi-devises.",
            
            reliableTitle: "Précision Fiable",
            reliableDesc: "Fournit des résultats fiables avec des données de taux de change en temps réel et des algorithmes de calcul précis.",
            
            downloadTitle: "Télécharger Maintenant",
            downloadSubtitle: "Solution intelligente de calcul de devises fournie gratuitement",
            downloadDesc: "Rendez les calculs de devises plus faciles et plus précis avec Exchango AI qui prend en charge plus de 150 devises.",
            comingSoon: "Bientôt disponible",
            
            footerAbout: "À Propos d'Exchango AI",
            footerSupport: "Support Client",
            footerPrivacy: "Politique de Confidentialité",
            footerTerms: "Conditions de Service",
            footerAboutPage: "À Propos d'Exchango AI",
            footerCopyright: "© 2025 Exchango AI. Tous droits réservés.",

            // Accessibility & Navigation
            skipToContent: "Aller au contenu principal",
            backToTop: "Retour en haut",
            closeModal: "Fermer la modal",
            nextSlide: "Diapositive suivante",
            previousSlide: "Diapositive précédente",
        },
        
        // Hindi
        hi: {
            pageTitle: "Exchango AI - स्मार्ट करेंसी कन्वर्टर ऐप",
            metaDescription: "विश्व में 150+ मुद्राओं का समर्थन करने वाला स्मार्ट करेंसी कन्वर्टर ऐप। मुद्रा परिवर्तन, लेखांकन और टिप गणना एक साथ हल करें।",
            heroTitle: "Exchango AI",
            heroTagline: "दुनिया के लिए स्मार्ट करेंसी कन्वर्टर",
            heroSubtitle: "150+ मुद्राओं का समर्थन करने वाला ऑल-इन-वन करेंसी कन्वर्जन और सेटलमेंट ऐप",
            
            statCurrencies: "समर्थित मुद्राएं",
            statCurrenciesValue: "150+",
            statLanguages: "समर्थित भाषाएं",
            statLanguagesValue: "14",
            statPrice: "मूल्य",
            statPriceValue: "मुफ्त",

            // Language Selector
            currentLanguage: "हिन्दी",
            selectLanguage: "भाषा चुनें",

            // Gallery Controls
            previousImage: "पिछली छवि",
            nextImage: "अगली छवि",

            downloadiOS: "iOS के लिए डाउनलोड करें",
            downloadAndroid: "Android के लिए डाウनलोड करें",
            learnMore: "और जानें",
            
            featuresTitle: "स्मार्ट करेंसी टूल्स",
            featuresSubtitle: "यात्रा और व्यापार के लिए पूर्ण करेंसी गणना समाधान",
            
            calculatorTitle: "स्मार्ट करेंसी कैलकुलेटर",
            calculatorDesc: "सहज कैलकुलेटर के साथ 150+ मुद्राओं के बीच रियल-टाइम एक्सचेंज दरों की गणना करें।",
            calculatorFeature1: "रियल-टाइम एक्सचेंज दर डेटा",
            calculatorFeature2: "द्विदिशीय गणना और अदला-बदली",
            calculatorFeature3: "गणना इतिहास संग्रहण",

            ratesTitle: "आज की दरें",
            ratesDesc: "विश्वभर की मुद्राओं की रियल-टाइम एक्सचेंज दर जानकारी एक नज़र में देखें।",
            ratesFeature1: "रियल-टाइम दर अपडेट",
            ratesFeature2: "पसंदीदा मुद्रा प्रबंधन",
            ratesFeature3: "एक्सचेंज दर ट्रेंड प्रदर्शन",

            settlementTitle: "निपटान कैलकुलेटर",
            settlementDesc: "अंतर्राष्ट्रीय यात्रा या व्यापार से बहु-मुद्रा निपटान आसानी से हल करें।",
            settlementFeature1: "एकसाथ मल्टी-करेंसी गणना",
            settlementFeature2: "निष्पक्ष लागत साझाकरण",
            settlementFeature3: "लचीला प्रतिभागी प्रबंधन",

            tipTitle: "टिप कैलकुलेटर",
            tipDesc: "उचित टिप प्रतिशत की गणना करें और लोगों की संख्या के अनुसार बांटें।",
            tipFeature1: "देश-वार टिप दर गाइड",
            tipFeature2: "व्यक्ति-वार विभाजन गणना",
            tipFeature3: "टिप गणना इतिहास",

            historyTitle: "गणना इतिहास",
            historyDesc: "सभी गणना रिकॉर्ड को व्यवस्थित रूप से प्रबंधित करें।",
            historyFeature1: "कैलेंडर व्यू समर्थन",
            historyFeature2: "विस्तृत खोज और फ़िल्टर",
            historyFeature3: "डेटा निर्यात",

            multiCurrencyTitle: "मल्टी-करेंसी कैलकुलेटर",
            multiCurrencyDesc: "एक साथ कई मुद्राओं की एक्सचेंज दरों को देखें और तुलना करें।",
            multiCurrencyFeature1: "एकसाथ मल्टी-करेंसी रूपांतरण",
            multiCurrencyFeature2: "मुद्रा तुलना विश्लेषण",
            multiCurrencyFeature3: "पसंदीदा मुद्रा समूह",

            settingsTitle: "सेटिंग्स",
            settingsDesc: "अपनी व्यक्तिगत प्राथमिकताओं के अनुसार ऐप को कस्टमाइज़ करें।",
            settingsFeature1: "डार्क/लाइट थीम",
            settingsFeature2: "14 भाषाओं का समर्थन",
            settingsFeature3: "फॉन्ट साइज़ समायोजन",

            // Menu Feature
            menuTitle: "सहज मेनू",
            menuDesc: "स्वच्छ और सहज मेनू इंटरफ़ेस के साथ सभी सुविधाओं तक आसानी से पहुंचें। अपनी आवश्यक सुविधाओं को शीघ्रता से खोजें और उपयोग करें।",
            menuFeature1: "एक-स्पर्श त्वरित पहुंच",
            menuFeature2: "व्यवस्थित सुविधा वर्गीकरण",
            menuFeature3: "उपयोगकर्ता के अनुकूल डिज़ाइन",

            // History Management Feature
            historyManagementTitle: "इतिहास प्रबंधन",
            historyManagementDesc: "अपने गणना इतिहास को व्यवस्थित रूप से प्रबंधित और व्यवस्थित करें। महत्वपूर्ण रिकॉर्ड को बुकमार्क करें और अनावश्यक को आसानी से हटाएं।",
            historyManagementFeature1: "स्वाइप करके आसानी से हटाएं",
            historyManagementFeature2: "महत्वपूर्ण रिकॉर्ड बुकमार्क करें",
            historyManagementFeature3: "थोक चयन और प्रबंधन",

            // Widget Feature
            widgetTitle: "होम स्क्रीन विजेट",
            widgetDesc: "अपनी होम स्क्रीन से सीधे विनिमय दरें देखें। ऐप खोले बिना एक नज़र में प्रमुख मुद्राओं के लिए वास्तविक समय की दरें देखें।",
            widgetFeature1: "वास्तविक समय दर प्रदर्शन",
            widgetFeature2: "विभिन्न विजेट आकार",
            widgetFeature3: "स्वचालित अपडेट",

            techTitle: "तकनीकी उत्कृष्टता",
            techSubtitle: "अत्याधुनिक तकनीक के साथ बना विश्वसनीय और तेज़ प्रदर्शन",

            performanceTitle: "उच्च प्रदर्शन",
            performanceDesc: "iOS और Android प्लेटफॉर्म पर नेटिव प्रदर्शन प्रदान करने के लिए आधुनिक मोबाइल तकनीक के साथ निर्मित।",

            offlineTitle: "ऑफलाइन समर्थन",
            offlineDesc: "इंटरनेट कनेक्शन के बिना भी बुनियादी गणना कार्य का उपयोग करें।",

            securityTitle: "सुरक्षित डेटा",
            securityDesc: "सभी डेटा आपके डिवाइस पर सुरक्षित रूप से संग्रहीत है गोपनीयता सुरक्षा को सर्वोच्च प्राथमिकता के साथ।",

            updateTitle: "स्वचालित अपडेट",
            updateDesc: "एक्सचेंज दर डेटा और ऐप सुविधाएं नवीनतम जानकारी बनाए रखने के लिए स्वचालित रूप से अपडेट होती हैं।",

            benefitsTitle: "Exchango AI क्यों चुनें?",
            benefitsSubtitle: "यात्री और व्यापारिक पेशेवर हमें क्यों चुनते हैं इसके कारण",

            travelersTitle: "यात्रियों के लिए आवश्यक ऐप",
            travelersDesc: "अंतर्राष्ट्रीय यात्रा के दौरान मुद्रा रूपांतरण, टिप गणना और समूह निपटान एक साथ हल करें।",

            businessTitle: "व्यापारिक पेशेवरों के लिए उपकरण",
            businessDesc: "अंतर्राष्ट्रीय लेनदेन और मल्टी-करेंसी लेखांकन कार्यों को कुशलतापूर्वक संभालें।",

            reliableTitle: "भरोसेमंद सटीकता",
            reliableDesc: "रियल-टाइम एक्सचेंज दर डेटा और सटीक गणना एल्गोरिदम के साथ विश्वसनीय परिणाम प्रदान करता है।",

            // ==== DOWNLOAD SECTION ====
            downloadTitle: "अभी डाउनलोड करें",
            downloadSubtitle: "मुफ्त में प्रदान किया गया स्मार्ट करेंसी गणना समाधान",
            downloadDesc: "150+ मुद्राओं का समर्थन करने वाले Exchango AI के साथ मुद्रा गणना को आसान और सटीक बनाएं।",
            comingSoon: "जल्द आ रहा है",

            footerAbout: "Exchango AI के बारे में",
            footerSupport: "ग्राहक सहायता",
            footerPrivacy: "गोपनीयता नीति",
            footerTerms: "सेवा की शर्तें",
            footerAboutPage: "Exchango AI के बारे में",
            footerCopyright: "© 2025 Exchango AI. सभी अधिकार सुरक्षित।",

            // Accessibility & Navigation
            skipToContent: "मुख्य सामग्री पर जाएं",
            backToTop: "वापस ऊपर जाएं",
            closeModal: "मोडल बंद करें",
            nextSlide: "अगली स्लाइड",
            previousSlide: "पिछली स्लाइड",
        },
        
        // Italian
        it: {
            pageTitle: "Exchango AI - App Intelligente di Conversione Valute",
            metaDescription: "App intelligente di conversione valute che supporta oltre 150 valute mondiali. Risolve conversione valute, calcolo mance e regolamenti in una volta.",
            heroTitle: "Exchango AI",
            heroTagline: "Convertitore di Valute Intelligente per il Mondo",
            heroSubtitle: "App tutto-in-uno di conversione e regolamento valute che supporta oltre 150 valute",
            
            statCurrencies: "Valute Supportate",
            statCurrenciesValue: "150+",
            statLanguages: "Lingue Supportate",
            statLanguagesValue: "14",
            statPrice: "Prezzo",
            statPriceValue: "Gratuito",

            // Language Selector
            currentLanguage: "Italiano",
            selectLanguage: "Seleziona Lingua",

            // Gallery Controls
            previousImage: "Immagine precedente",
            nextImage: "Immagine successiva",

            downloadiOS: "Scarica per iOS",
            downloadAndroid: "Scarica per Android",
            learnMore: "Scopri di Più",
            
            featuresTitle: "Strumenti di Valuta Intelligenti",
            featuresSubtitle: "Soluzione completa di calcolo valute per viaggi e affari",
            
            calculatorTitle: "Calcolatrice di Valute Intelligente",
            calculatorDesc: "Calcola i tassi di cambio tra oltre 150 valute in tempo reale con una calcolatrice intuitiva. Operazioni matematiche e conversione valutaria integrate in un'esperienza fluida.",
            calculatorFeature1: "Dati di tasso di cambio in tempo reale",
            calculatorFeature2: "Calcolo bidirezionale e scambio",
            calculatorFeature3: "Archiviazione cronologia calcoli",

            // Today's Rates Feature
            ratesTitle: "Tassi di Oggi",
            ratesDesc: "Controlla le informazioni sui tassi di cambio in tempo reale per le valute di tutto il mondo in un colpo d'occhio. Accesso rapido alle valute utilizzate frequentemente con la funzione preferiti.",
            ratesFeature1: "Aggiornamenti dei tassi in tempo reale",
            ratesFeature2: "Gestione valute preferite",
            ratesFeature3: "Visualizzazione trend tassi di cambio",

            // Settlement Feature
            settlementTitle: "Calcolatrice di Liquidazione",
            settlementDesc: "Risolvi facilmente le liquidazioni multi-valuta da viaggi internazionali o affari. Dividi equamente gli importi pagati da più persone in valute diverse.",
            settlementFeature1: "Calcolo simultaneo multi-valuta",
            settlementFeature2: "Condivisione equa dei costi",
            settlementFeature3: "Gestione flessibile dei partecipanti",

            // Tip Calculator Feature
            tipTitle: "Calcolatrice Mance",
            tipDesc: "Calcola percentuali di mancia appropriate e dividile per numero di persone. Funzioni di calcolo intelligenti che considerano le culture della mancia di vari paesi.",
            tipFeature1: "Guida tassi mancia per paese",
            tipFeature2: "Calcolo divisione per persona",
            tipFeature3: "Cronologia calcolo mance",

            // History Feature
            historyTitle: "Cronologia Calcoli",
            historyDesc: "Gestisci sistematicamente tutti i record di calcolo. Trova facilmente i dettagli dei calcoli passati con vista calendario e funzionalità di ricerca dettagliata.",
            historyFeature1: "Supporto vista calendario",
            historyFeature2: "Ricerca dettagliata e filtri",
            historyFeature3: "Esportazione dati",

            // Multi-Currency Calculator Feature
            multiCurrencyTitle: "Calcolatrice Multi-Valuta",
            multiCurrencyDesc: "Visualizza e confronta i tassi di cambio per più valute simultaneamente. Utile per transazioni multi-paese complesse o pianificazione viaggi.",
            multiCurrencyFeature1: "Conversione multi-valuta simultanea",
            multiCurrencyFeature2: "Analisi confronto valute",
            multiCurrencyFeature3: "Gruppi valute preferite",

            // Settings Feature
            settingsTitle: "Impostazioni",
            settingsDesc: "Personalizza l'app secondo le tue preferenze personali. Varie opzioni di personalizzazione inclusi tema scuro/chiaro, impostazioni lingua e regolazione dimensione font.",
            settingsFeature1: "Selezione valuta predefinita",
            settingsFeature2: "Supporto 14 lingue",
            settingsFeature3: "Tema scuro/chiaro",

            // Menu Feature
            menuTitle: "Menu Intuitivo",
            menuDesc: "Accedi a tutte le funzionalità facilmente con un'interfaccia di menu pulita e intuitiva. Trova e usa rapidamente le funzioni di cui hai bisogno.",
            menuFeature1: "Accesso rapido con un tocco",
            menuFeature2: "Categorizzazione organizzata delle funzioni",
            menuFeature3: "Design user-friendly",

            // History Management Feature
            historyManagementTitle: "Gestione della Cronologia",
            historyManagementDesc: "Gestisci e organizza sistematicamente la cronologia dei calcoli. Aggiungi ai segnalibri i record importanti ed elimina facilmente quelli non necessari.",
            historyManagementFeature1: "Scorri per eliminare facilmente",
            historyManagementFeature2: "Aggiungi ai segnalibri i record importanti",
            historyManagementFeature3: "Selezione e gestione in blocco",

            // Widget Feature
            widgetTitle: "Widget Schermata Home",
            widgetDesc: "Controlla i tassi di cambio direttamente dalla schermata home. Visualizza i tassi in tempo reale delle principali valute a colpo d'occhio senza aprire l'app.",
            widgetFeature1: "Visualizzazione tassi in tempo reale",
            widgetFeature2: "Varie dimensioni widget",
            widgetFeature3: "Aggiornamento automatico",

            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "Eccellenza Tecnica",
            techSubtitle: "Prestazioni affidabili e veloci costruite con tecnologia all'avanguardia",

            performanceTitle: "Alte Prestazioni",
            performanceDesc: "Costruito con moderna tecnologia mobile per fornire prestazioni native su piattaforme iOS e Android.",

            offlineTitle: "Supporto Offline",
            offlineDesc: "Utilizza le funzioni di calcolo di base anche senza connessione internet, rendendolo affidabile sempre e ovunque.",

            securityTitle: "Dati Sicuri",
            securityDesc: "Tutti i dati sono archiviati in modo sicuro sul tuo dispositivo con la protezione della privacy come massima priorità.",

            updateTitle: "Aggiornamenti Automatici",
            updateDesc: "I dati dei tassi di cambio e le funzionalità dell'app si aggiornano automaticamente per mantenere le informazioni più recenti.",

            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "Perché Scegliere Exchango AI?",
            benefitsSubtitle: "Motivi per cui viaggiatori e professionisti del business ci scelgono",

            travelersTitle: "App Essenziale per Viaggiatori",
            travelersDesc: "Risolvi conversione valute, calcolo mance e liquidazioni di gruppo tutto in una volta durante i viaggi internazionali.",

            businessTitle: "Strumento per Professionisti del Business",
            businessDesc: "Gestisci efficientemente transazioni internazionali e compiti di contabilità multi-valuta.",

            reliableTitle: "Accuratezza Affidabile",
            reliableDesc: "Fornisce risultati affidabili con dati di tassi di cambio in tempo reale e algoritmi di calcolo accurati.",

            // ==== DOWNLOAD SECTION ====
            downloadTitle: "Scarica Ora",
            downloadSubtitle: "Soluzione intelligente per il calcolo delle valute fornita gratuitamente",
            downloadDesc: "Rendi i calcoli valutari più facili e precisi con Exchango AI che supporta oltre 150 valute.",
            comingSoon: "Prossimamente",

            // ==== FOOTER SECTION ====
            footerAbout: "Informazioni su Exchango AI",
            footerSupport: "Supporto Clienti",
            footerPrivacy: "Politica Privacy",
            footerTerms: "Termini di Servizio",
            footerAboutPage: "Informazioni su Exchango AI",
            footerCopyright: "© 2025 Exchango AI. Tutti i diritti riservati.",

            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "Vai al contenuto principale",
            backToTop: "Torna in alto",
            closeModal: "Chiudi modale",
            nextSlide: "Slide successiva",
            previousSlide: "Slide precedente"
        },
        
        // Portuguese
        pt: {
            pageTitle: "Exchango AI - App Inteligente de Conversão de Moedas",
            metaDescription: "App inteligente de conversão de moedas que suporta mais de 150 moedas mundiais. Resolva conversão de moedas, cálculo de gorjetas e liquidações de uma vez.",
            heroTitle: "Exchango AI",
            heroTagline: "Conversor de Moedas Inteligente para o Mundo",
            heroSubtitle: "App tudo-em-um de conversão e liquidação de moedas com suporte para mais de 150 moedas",
            
            statCurrencies: "Moedas Suportadas",
            statCurrenciesValue: "150+",
            statLanguages: "Idiomas Suportados",
            statLanguagesValue: "14",
            statPrice: "Preço",
            statPriceValue: "Grátis",

            // Language Selector
            currentLanguage: "Português",
            selectLanguage: "Selecionar Idioma",

            // Gallery Controls
            previousImage: "Imagem anterior",
            nextImage: "Próxima imagem",

            downloadiOS: "Baixar para iOS",
            downloadAndroid: "Baixar para Android",
            learnMore: "Saiba Mais",
            
            featuresTitle: "Ferramentas de Moeda Inteligentes",
            featuresSubtitle: "Solução completa de cálculo de moedas para viagens e negócios",
            
            calculatorTitle: "Calculadora de Moedas Inteligente",
            calculatorDesc: "Calcule taxas de câmbio entre mais de 150 moedas em tempo real com uma calculadora intuitiva. Operações matemáticas e conversão de moedas integradas em uma experiência fluida.",
            calculatorFeature1: "Dados de taxa de câmbio em tempo real",
            calculatorFeature2: "Cálculo bidirecional e troca",
            calculatorFeature3: "Armazenamento do histórico de cálculos",

            // Today's Rates Feature
            ratesTitle: "Taxas de Hoje",
            ratesDesc: "Verifique informações de taxas de câmbio em tempo real para moedas mundiais de relance. Acesso rápido às moedas usadas frequentemente com o recurso favoritos.",
            ratesFeature1: "Atualizações de taxas em tempo real",
            ratesFeature2: "Gerenciamento de moedas favoritas",
            ratesFeature3: "Exibição de tendências de taxas de câmbio",

            // Settlement Feature
            settlementTitle: "Calculadora de Liquidação",
            settlementDesc: "Resolva facilmente liquidações multi-moeda de viagens internacionais ou negócios. Divida equitativamente valores pagos por várias pessoas em moedas diferentes.",
            settlementFeature1: "Cálculo simultâneo de múltiplas moedas",
            settlementFeature2: "Compartilhamento justo de custos",
            settlementFeature3: "Gerenciamento flexível de participantes",

            // Tip Calculator Feature
            tipTitle: "Calculadora de Gorjetas",
            tipDesc: "Calcule percentuais de gorjeta apropriados e divida por número de pessoas. Recursos de cálculo inteligentes que consideram culturas de gorjeta de vários países.",
            tipFeature1: "Guia de taxas de gorjeta por país",
            tipFeature2: "Cálculo de divisão por pessoa",
            tipFeature3: "Histórico de cálculo de gorjetas",

            // History Feature
            historyTitle: "Histórico de Cálculos",
            historyDesc: "Gerencie sistematicamente todos os registros de cálculos. Encontre facilmente detalhes de cálculos passados com visualização de calendário e funcionalidade de busca detalhada.",
            historyFeature1: "Suporte à visualização de calendário",
            historyFeature2: "Busca detalhada e filtros",
            historyFeature3: "Exportação de dados",

            // Multi-Currency Calculator Feature
            multiCurrencyTitle: "Calculadora Multi-Moeda",
            multiCurrencyDesc: "Visualize e compare taxas de câmbio para múltiplas moedas simultaneamente. Útil para transações multi-país complexas ou planejamento de viagens.",
            multiCurrencyFeature1: "Conversão simultânea de múltiplas moedas",
            multiCurrencyFeature2: "Análise de comparação de moedas",
            multiCurrencyFeature3: "Grupos de moedas favoritas",

            // Settings Feature
            settingsTitle: "Configurações",
            settingsDesc: "Personalize o app de acordo com suas preferências pessoais. Várias opções de personalização incluindo tema escuro/claro, configurações de idioma e ajuste de tamanho da fonte.",
            settingsFeature1: "Seleção de moeda padrão",
            settingsFeature2: "Suporte a 14 idiomas",
            settingsFeature3: "Tema escuro/claro",

            // Menu Feature
            menuTitle: "Menu Intuitivo",
            menuDesc: "Acesse todas as funcionalidades facilmente com uma interface de menu limpa e intuitiva. Encontre e use rapidamente as funções de que precisa.",
            menuFeature1: "Acesso rápido com um toque",
            menuFeature2: "Categorização organizada de funções",
            menuFeature3: "Design amigável ao usuário",

            // History Management Feature
            historyManagementTitle: "Gerenciamento de Histórico",
            historyManagementDesc: "Gerencie e organize sistematicamente seu histórico de cálculos. Adicione registros importantes aos favoritos e exclua facilmente os desnecessários.",
            historyManagementFeature1: "Deslize para excluir facilmente",
            historyManagementFeature2: "Adicionar registros importantes aos favoritos",
            historyManagementFeature3: "Seleção e gerenciamento em massa",

            // Widget Feature
            widgetTitle: "Widget de Tela Inicial",
            widgetDesc: "Verifique as taxas de câmbio diretamente da sua tela inicial. Visualize taxas em tempo real das principais moedas num relance sem abrir o aplicativo.",
            widgetFeature1: "Exibição de taxas em tempo real",
            widgetFeature2: "Vários tamanhos de widget",
            widgetFeature3: "Atualização automática",

            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "Excelência Técnica",
            techSubtitle: "Desempenho confiável e rápido construído com tecnologia de ponta",

            performanceTitle: "Alto Desempenho",
            performanceDesc: "Construído com tecnologia móvel moderna para fornecer desempenho nativo em plataformas iOS e Android.",

            offlineTitle: "Suporte Offline",
            offlineDesc: "Use funções básicas de cálculo mesmo sem conexão com a internet, tornando-o confiável a qualquer hora e lugar.",

            securityTitle: "Dados Seguros",
            securityDesc: "Todos os dados são armazenados com segurança em seu dispositivo com proteção de privacidade como prioridade máxima.",

            updateTitle: "Atualizações Automáticas",
            updateDesc: "Dados de taxas de câmbio e recursos do app são atualizados automaticamente para manter as informações mais recentes.",

            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "Por Que Escolher o Exchango AI?",
            benefitsSubtitle: "Razões pelas quais viajantes e profissionais de negócios nos escolhem",

            travelersTitle: "App Essencial para Viajantes",
            travelersDesc: "Resolva conversão de moedas, cálculo de gorjetas e liquidações de grupo tudo de uma vez durante viagens internacionais.",

            businessTitle: "Ferramenta para Profissionais de Negócios",
            businessDesc: "Gerencie eficientemente transações internacionais e tarefas de contabilidade multi-moeda.",

            reliableTitle: "Precisão Confiável",
            reliableDesc: "Fornece resultados confiáveis com dados de taxas de câmbio em tempo real e algoritmos de cálculo precisos.",

            // ==== DOWNLOAD SECTION ====
            downloadTitle: "Baixar Agora",
            downloadSubtitle: "Solução inteligente de cálculo de moedas fornecida gratuitamente",
            downloadDesc: "Torne os cálculos de moeda mais fáceis e precisos com o Exchango AI que suporta mais de 150 moedas.",
            comingSoon: "Em Breve",

            // ==== FOOTER SECTION ====
            footerAbout: "Sobre o Exchango AI",
            footerSupport: "Suporte ao Cliente",
            footerPrivacy: "Política de Privacidade",
            footerTerms: "Termos de Serviço",
            footerAboutPage: "Sobre o Exchango AI",
            footerCopyright: "© 2025 Exchango AI. Todos os direitos reservados.",

            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "Pular para o conteúdo principal",
            backToTop: "Voltar ao topo",
            closeModal: "Fechar modal",
            nextSlide: "Próximo slide",
            previousSlide: "Slide anterior"
        },
        
        // Russian
        ru: {
            pageTitle: "Exchango AI - Умное Приложение Конвертера Валют",
            metaDescription: "Умное приложение конвертации валют, поддерживающее более 150 мировых валют. Решите конвертацию валют, расчет чаевых и расчеты одновременно.",
            heroTitle: "Exchango AI",
            heroTagline: "Умный Конвертер Валют для Мира",
            heroSubtitle: "Универсальное приложение конверсии и расчета валют с поддержкой более 150 валют",
            
            statCurrencies: "Поддерживаемые Валюты",
            statCurrenciesValue: "150+",
            statLanguages: "Поддерживаемые Языки",
            statLanguagesValue: "14",
            statPrice: "Цена",
            statPriceValue: "Бесплатно",

            // Language Selector
            currentLanguage: "Русский",
            selectLanguage: "Выбрать язык",

            // Gallery Controls
            previousImage: "Предыдущее изображение",
            nextImage: "Следующее изображение",

            downloadiOS: "Скачать для iOS",
            downloadAndroid: "Скачать для Android",
            learnMore: "Узнать Больше",
            
            featuresTitle: "Умные Валютные Инструменты",
            featuresSubtitle: "Полное решение для расчета валют для путешествий и бизнеса",
            
            calculatorTitle: "Умный Валютный Калькулятор",
            calculatorDesc: "Рассчитывайте обменные курсы между более чем 150 валютами в реальном времени с интуитивным калькулятором. Математические операции и конвертация валют интегрированы в единый опыт.",
            calculatorFeature1: "Данные обменного курса в реальном времени",
            calculatorFeature2: "Двунаправленный расчет и обмен",
            calculatorFeature3: "Хранение истории расчетов",

            // Today's Rates Feature
            ratesTitle: "Сегодняшние Курсы",
            ratesDesc: "Проверяйте информацию о обменных курсах в реальном времени для мировых валют с первого взгляда. Быстрый доступ к часто используемым валютам с функцией избранного.",
            ratesFeature1: "Обновления курсов в реальном времени",
            ratesFeature2: "Управление избранными валютами",
            ratesFeature3: "Отображение тенденций обменного курса",

            // Settlement Feature
            settlementTitle: "Калькулятор Расчетов",
            settlementDesc: "Легко решайте многовалютные расчеты от международных путешествий или бизнеса. Справедливо разделяйте суммы, уплаченные несколькими людьми в разных валютах.",
            settlementFeature1: "Одновременный многовалютный расчет",
            settlementFeature2: "Справедливое разделение затрат",
            settlementFeature3: "Гибкое управление участниками",

            // Tip Calculator Feature
            tipTitle: "Калькулятор Чаевых",
            tipDesc: "Рассчитывайте подходящие проценты чаевых и делите их по количеству человек. Умные функции расчета, учитывающие культуры чаевых различных стран.",
            tipFeature1: "Руководство по размеру чаевых по странам",
            tipFeature2: "Расчет разделения на человека",
            tipFeature3: "История расчета чаевых",

            // History Feature
            historyTitle: "История Расчетов",
            historyDesc: "Систематически управляйте всеми записями расчетов. Легко находите детали прошлых расчетов с представлением календаря и подробной функцией поиска.",
            historyFeature1: "Поддержка представления календаря",
            historyFeature2: "Подробный поиск и фильтры",
            historyFeature3: "Экспорт данных",

            // Multi-Currency Calculator Feature
            multiCurrencyTitle: "Многовалютный Калькулятор",
            multiCurrencyDesc: "Просматривайте и сравнивайте обменные курсы для нескольких валют одновременно. Полезно для сложных многострановых транзакций или планирования путешествий.",
            multiCurrencyFeature1: "Одновременная многовалютная конвертация",
            multiCurrencyFeature2: "Анализ сравнения валют",
            multiCurrencyFeature3: "Группы избранных валют",

            // Settings Feature
            settingsTitle: "Настройки",
            settingsDesc: "Настройте приложение согласно своим личным предпочтениям. Различные варианты настройки, включая темную/светлую тему, настройки языка и регулировку размера шрифта.",
            settingsFeature1: "Выбор валюты по умолчанию",
            settingsFeature2: "Поддержка 14 языков",
            settingsFeature3: "Темная/светлая тема",

            // Menu Feature
            menuTitle: "Интуитивное Меню",
            menuDesc: "Легко получайте доступ ко всем функциям с помощью чистого и интуитивного интерфейса меню. Быстро находите и используйте нужные функции.",
            menuFeature1: "Быстрый доступ одним касанием",
            menuFeature2: "Организованная категоризация функций",
            menuFeature3: "Удобный дизайн",

            // History Management Feature
            historyManagementTitle: "Управление Историей",
            historyManagementDesc: "Систематически управляйте и организуйте историю расчетов. Добавляйте важные записи в закладки и легко удаляйте ненужные.",
            historyManagementFeature1: "Проведите пальцем для удаления",
            historyManagementFeature2: "Закладки для важных записей",
            historyManagementFeature3: "Массовый выбор и управление",

            // Widget Feature
            widgetTitle: "Виджет Домашнего Экрана",
            widgetDesc: "Проверяйте обменные курсы прямо с домашнего экрана. Просматривайте курсы в реальном времени для основных валют одним взглядом без открытия приложения.",
            widgetFeature1: "Отображение курсов в реальном времени",
            widgetFeature2: "Различные размеры виджетов",
            widgetFeature3: "Автоматическое обновление",

            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "Техническое Совершенство",
            techSubtitle: "Надежная и быстрая производительность, построенная на передовых технологиях",

            performanceTitle: "Высокая Производительность",
            performanceDesc: "Построено с современными мобильными технологиями для обеспечения нативной производительности на платформах iOS и Android.",

            offlineTitle: "Поддержка Оффлайн",
            offlineDesc: "Используйте базовые функции расчета даже без интернет-соединения, делая его надежным в любое время и в любом месте.",

            securityTitle: "Безопасные Данные",
            securityDesc: "Все данные безопасно хранятся на вашем устройстве с защитой конфиденциальности как максимальный приоритет.",

            updateTitle: "Автоматические Обновления",
            updateDesc: "Данные обменных курсов и функции приложения автоматически обновляются для поддержания самой последней информации.",

            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "Почему Выбрать Exchango AI?",
            benefitsSubtitle: "Причины, по которым путешественники и бизнес-профессионалы выбирают нас",

            travelersTitle: "Незаменимое Приложение для Путешественников",
            travelersDesc: "Решите конвертацию валют, расчет чаевых и групповые расчеты все одновременно во время международных путешествий.",

            businessTitle: "Инструмент для Бизнес-Профессионалов",
            businessDesc: "Эффективно обрабатывайте международные транзакции и задачи многовалютной бухгалтерии.",

            reliableTitle: "Надежная Точность",
            reliableDesc: "Предоставляет надежные результаты с данными обменных курсов в реальном времени и точными алгоритмами расчета.",

            // ==== DOWNLOAD SECTION ====
            downloadTitle: "Скачать сейчас",
            downloadSubtitle: "Умное решение для расчета валют, предоставляемое бесплатно",
            downloadDesc: "Сделайте валютные расчеты проще и точнее с Exchango AI, поддерживающим более 150 валют.",
            comingSoon: "Скоро",

            // ==== FOOTER SECTION ====
            footerAbout: "О Exchango AI",
            footerSupport: "Поддержка Клиентов",
            footerPrivacy: "Политика Конфиденциальности",
            footerTerms: "Условия Обслуживания",
            footerAboutPage: "О Exchango AI",
            footerCopyright: "© 2025 Exchango AI. Все права защищены.",

            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "Перейти к основному содержимому",
            backToTop: "Вернуться наверх",
            closeModal: "Закрыть модальное окно",
            nextSlide: "Следующий слайд",
            previousSlide: "Предыдущий слайд"
        },
        
        // Thai
        th: {
            pageTitle: "Exchango AI - แอปแปลงสกุลเงินอัจฉริยะ",
            metaDescription: "แอปตัวแปลงสกุลเงินอัจฉริยะที่รองรับสกุลเงินมากกว่า 150 สกุลทั่วโลก แก้ไขการแปลงสกุลเงิน คำนวณทิป และการเคลียร์ในครั้งเดียว",
            heroTitle: "Exchango AI",
            heroTagline: "ตัวแปลงสกุลเงินอัจฉริยะสำหรับโลก",
            heroSubtitle: "แอปแปลงและชำระเงินสกุลเงินครบวงจรที่รองรับสกุลเงินกว่า 150 สกุล",
            
            statCurrencies: "สกุลเงินที่รองรับ",
            statCurrenciesValue: "150+",
            statLanguages: "ภาษาที่รองรับ",
            statLanguagesValue: "14",
            statPrice: "ราคา",
            statPriceValue: "ฟรี",

            // Language Selector
            currentLanguage: "ไทย",
            selectLanguage: "เลือกภาษา",

            // Gallery Controls
            previousImage: "ภาพก่อนหน้า",
            nextImage: "ภาพถัดไป",

            downloadiOS: "ดาวน์โหลดสำหรับ iOS",
            downloadAndroid: "ดาวน์โหลดสำหรับ Android",
            learnMore: "เรียนรู้เพิ่มเติม",
            
            featuresTitle: "เครื่องมือสกุลเงินอัจฉริยะ",
            featuresSubtitle: "โซลูชันการคำนวณสกุลเงินที่สมบูรณ์สำหรับการเดินทางและธุรกิจ",
            
            calculatorTitle: "เครื่องคิดเลขสกุลเงินอัจฉริยะ",
            calculatorDesc: "คำนวณอัตราแลกเปลี่ยนระหว่างสกุลเงินกว่า 150 สกุลแบบเรียลไทม์ด้วยเครื่องคิดเลขที่ใช้งานง่าย การดำเนินการทางคณิตศาสตร์และการแปลงสกุลเงินรวมเป็นประสบการณ์เดียว",
            calculatorFeature1: "ข้อมูลอัตราแลกเปลี่ยนแบบเรียลไทม์",
            calculatorFeature2: "การคำนวณแบบสองทิศทางและการสลับ",
            calculatorFeature3: "การจัดเก็บประวัติการคำนวณ",

            // Today's Rates Feature
            ratesTitle: "อัตราวันนี้",
            ratesDesc: "ตรวจสอบข้อมูลอัตราแลกเปลี่ยนแบบเรียลไทม์สำหรับสกุลเงินทั่วโลกได้ในพริบตา เข้าถึงสกุลเงินที่ใช้บ่อยได้อย่างรวดเร็วด้วยฟีเจอร์รายการโปรด",
            ratesFeature1: "อัปเดตอัตราแบบเรียลไทม์",
            ratesFeature2: "การจัดการสกุลเงินโปรด",
            ratesFeature3: "การแสดงแนวโน้มอัตราแลกเปลี่ยน",

            // Settlement Feature
            settlementTitle: "เครื่องคิดเลขการชำระหนี้",
            settlementDesc: "แก้ปัญหาการชำระหนี้หลายสกุลเงินจากการเดินทางระหว่างประเทศหรือธุรกิจได้อย่างง่ายดาย แบ่งจำนวนเงินที่หลายคนชำระในสกุลเงินต่างกันอย่างยุติธรรม",
            settlementFeature1: "การคำนวณหลายสกุลเงินพร้อมกัน",
            settlementFeature2: "การแบ่งปันค่าใช้จ่ายอย่างยุติธรรม",
            settlementFeature3: "การจัดการผู้เข้าร่วมอย่างยืดหยุ่น",

            // Tip Calculator Feature
            tipTitle: "เครื่องคิดเลขทิป",
            tipDesc: "คำนวณเปอร์เซ็นต์ทิปที่เหมาะสมและแบ่งตามจำนวนคน ฟีเจอร์การคำนวณอัจฉริยะที่พิจารณาวัฒนธรรมการให้ทิปของประเทศต่างๆ",
            tipFeature1: "คู่มืออัตราทิปตามประเทศ",
            tipFeature2: "การคำนวณแบ่งต่อคน",
            tipFeature3: "ประวัติการคำนวณทิป",

            // History Feature
            historyTitle: "ประวัติการคำนวณ",
            historyDesc: "จัดการบันทึกการคำนวณทั้งหมดอย่างเป็นระบบ ค้นหารายละเอียดการคำนวณในอดีตได้อย่างง่ายดายด้วยมุมมองปฏิทินและฟังก์ชันการค้นหาแบบละเอียด",
            historyFeature1: "รองรับมุมมองปฏิทิน",
            historyFeature2: "การค้นหาละเอียดและตัวกรอง",
            historyFeature3: "การส่งออกข้อมูล",

            // Multi-Currency Calculator Feature
            multiCurrencyTitle: "เครื่องคิดเลขหลายสกุลเงิน",
            multiCurrencyDesc: "ดูและเปรียบเทียบอัตราแลกเปลี่ยนสำหรับหลายสกุลเงินพร้อมกัน มีประโยชน์สำหรับธุรกรรมหลายประเทศที่ซับซ้อนหรือการวางแผนการเดินทาง",
            multiCurrencyFeature1: "การแปลงหลายสกุลเงินพร้อมกัน",
            multiCurrencyFeature2: "การวิเคราะห์เปรียบเทียบสกุลเงิน",
            multiCurrencyFeature3: "กลุ่มสกุลเงินโปรด",

            // Settings Feature
            settingsTitle: "การตั้งค่า",
            settingsDesc: "ปรับแต่งแอปตามความชอบส่วนตัวของคุณ ตัวเลือกการปรับแต่งต่างๆ รวมถึงธีมมืด/สว่าง การตั้งค่าภาษา และการปรับขนาดฟอนต์",
            settingsFeature1: "การเลือกสกุลเงินเริ่มต้น",
            settingsFeature2: "รองรับ 14 ภาษา",
            settingsFeature3: "ธีมมืด/สว่าง",

            // Menu Feature
            menuTitle: "เมนูที่ใช้งานง่าย",
            menuDesc: "เข้าถึงฟีเจอร์ทั้งหมดได้อย่างง่ายดายด้วยอินเทอร์เฟซเมนูที่สะอาดและใช้งานง่าย ค้นหาและใช้ฟีเจอร์ที่คุณต้องการได้อย่างรวดเร็ว",
            menuFeature1: "เข้าถึงได้อย่างรวดเร็วด้วยการแตะครั้งเดียว",
            menuFeature2: "การจัดหมวดหมู่ฟีเจอร์อย่างเป็นระบบ",
            menuFeature3: "ออกแบบให้ใช้งานง่าย",

            // History Management Feature
            historyManagementTitle: "การจัดการประวัติ",
            historyManagementDesc: "จัดการและจัดระเบียบประวัติการคำนวณของคุณอย่างเป็นระบบ บุ๊กมาร์กบันทึกที่สำคัญและลบบันทึกที่ไม่จำเป็นได้อย่างง่ายดาย",
            historyManagementFeature1: "ปัดเพื่อลบได้อย่างง่ายดาย",
            historyManagementFeature2: "บุ๊กมาร์กบันทึกที่สำคัญ",
            historyManagementFeature3: "เลือกและจัดการแบบกลุ่ม",

            // Widget Feature
            widgetTitle: "วิดเจ็ตหน้าจอหลัก",
            widgetDesc: "ตรวจสอบอัตราแลกเปลี่ยนได้โดยตรงจากหน้าจอหลัก ดูอัตราเรียลไทม์สำหรับสกุลเงินหลักได้อย่างรวดเร็วโดยไม่ต้องเปิดแอป",
            widgetFeature1: "แสดงอัตราเรียลไทม์",
            widgetFeature2: "ขนาดวิดเจ็ตหลากหลาย",
            widgetFeature3: "อัปเดตอัตโนมัติ",

            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "ความเป็นเลิศทางเทคนิค",
            techSubtitle: "ประสิทธิภาพที่เชื่อถือได้และรวดเร็วที่สร้างด้วยเทคโนโลยีที่ทันสมัย",

            performanceTitle: "ประสิทธิภาพสูง",
            performanceDesc: "สร้างด้วยเทคโนโลยีมือถือสมัยใหม่เพื่อให้ประสิทธิภาพระดับเนทีฟบนแพลตฟอร์ม iOS และ Android",

            offlineTitle: "รองรับออฟไลน์",
            offlineDesc: "ใช้ฟังก์ชันการคำนวณพื้นฐานได้แม้ไม่มีการเชื่อมต่ออินเทอร์เน็ต ทำให้เชื่อถือได้ทุกเวลาทุกที่",

            securityTitle: "ข้อมูลปลอดภัย",
            securityDesc: "ข้อมูลทั้งหมดจัดเก็บอย่างปลอดภัยในอุปกรณ์ของคุณโดยให้ความสำคัญกับการป้องกันความเป็นส่วนตัวเป็นอันดับแรก",

            updateTitle: "อัปเดตอัตโนมัติ",
            updateDesc: "ข้อมูลอัตราแลกเปลี่ยนและฟีเจอร์ของแอปอัปเดตโดยอัตโนมัติเพื่อรักษาข้อมูลล่าสุด",

            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "ทำไมถึงเลือก Exchango AI?",
            benefitsSubtitle: "เหตุผลที่นักเดินทางและผู้เชี่ยวชาญด้านธุรกิจเลือกเรา",

            travelersTitle: "แอปจำเป็นสำหรับนักเดินทาง",
            travelersDesc: "แก้ปัญหาการแปลงสกุลเงิน การคำนวณทิป และการชำระหนี้กลุ่มทั้งหมดในครั้งเดียวระหว่างการเดินทางระหว่างประเทศ",

            businessTitle: "เครื่องมือสำหรับผู้เชี่ยวชาญด้านธุรกิจ",
            businessDesc: "จัดการธุรกรรมระหว่างประเทศและงานบัญชีหลายสกุลเงินได้อย่างมีประสิทธิภาพ",

            reliableTitle: "ความแม่นยำที่เชื่อถือได้",
            reliableDesc: "ให้ผลลัพธ์ที่เชื่อถือได้ด้วยข้อมูลอัตราแลกเปลี่ยนแบบเรียลไทม์และอัลกอริทึมการคำนวณที่แม่นยำ",

            // ==== DOWNLOAD SECTION ====
            downloadTitle: "ดาวน์โหลดเดี๋ยวนี้",
            downloadSubtitle: "โซลูชันคำนวณสกุลเงินอัจฉริยะที่ให้บริการฟรี",
            downloadDesc: "ทำให้การคำนวณสกุลเงินง่ายและแม่นยำมากขึ้นด้วย Exchango AI ที่รองรับมากกว่า 150 สกุลเงิน",
            comingSoon: "เร็ว ๆ นี้",

            // ==== FOOTER SECTION ====
            footerAbout: "เกี่ยวกับ Exchango AI",
            footerSupport: "การสนับสนุนลูกค้า",
            footerPrivacy: "นโยบายความเป็นส่วนตัว",
            footerTerms: "เงื่อนไขการให้บริการ",
            footerAboutPage: "เกี่ยวกับ Exchango AI",
            footerCopyright: "© 2025 Exchango AI สงวนลิขสิทธิ์",

            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "ข้ามไปยังเนื้อหาหลัก",
            backToTop: "กลับไปด้านบน",
            closeModal: "ปิดโมดอล",
            nextSlide: "สไลด์ถัดไป",
            previousSlide: "สไลด์ก่อนหน้า"
        },
        
        // Turkish
        tr: {
            pageTitle: "Exchango AI - Akıllı Döviz Dönüştürücü Uygulaması",
            metaDescription: "Dünya çapında 150+ para birimini destekleyen akıllı döviz dönüştürücü uygulaması. Döviz dönüşümü, bahşiş hesaplama ve hesaplaşmaları tek seferde çözün.",
            heroTitle: "Exchango AI",
            heroTagline: "Dünya için Akıllı Döviz Dönüştürücü",
            heroSubtitle: "150+ para birimini destekleyen hepsi-bir-arada döviz dönüştürme ve ödeme uygulaması",
            
            statCurrencies: "Desteklenen Para Birimleri",
            statCurrenciesValue: "150+",
            statLanguages: "Desteklenen Diller",
            statLanguagesValue: "14",
            statPrice: "Fiyat",
            statPriceValue: "Ücretsiz",

            // Language Selector
            currentLanguage: "Türkçe",
            selectLanguage: "Dil Seçin",

            // Gallery Controls
            previousImage: "Önceki görsel",
            nextImage: "Sonraki görsel",

            downloadiOS: "iOS için İndir",
            downloadAndroid: "Android için İndir",
            learnMore: "Daha Fazla Öğren",
            
            featuresTitle: "Akıllı Döviz Araçları",
            featuresSubtitle: "Seyahat ve iş için eksiksiz döviz hesaplama çözümü",
            
            calculatorTitle: "Akıllı Döviz Hesaplayıcısı",
            calculatorDesc: "Sezgisel hesaplayıcı ile 150+ para birimi arasında gerçek zamanlı döviz kurlarını hesaplayın. Matematik işlemleri ve döviz dönüşümü tek deneyimde entegre edilmiştir.",
            calculatorFeature1: "Gerçek zamanlı döviz kuru verileri",
            calculatorFeature2: "Çift yönlü hesaplama ve değişim",
            calculatorFeature3: "Hesaplama geçmişi depolama",

            // Today's Rates Feature
            ratesTitle: "Günün Kurları",
            ratesDesc: "Dünya çapındaki para birimlerinin gerçek zamanlı döviz kuru bilgilerini tek bakışta kontrol edin. Favoriler özelliği ile sık kullanılan para birimlerine hızlı erişim sağlayın.",
            ratesFeature1: "Gerçek zamanlı kur güncellemeleri",
            ratesFeature2: "Favori para birimi yönetimi",
            ratesFeature3: "Döviz kuru trend görüntüleme",

            // Settlement Feature
            settlementTitle: "Hesaplaşma Hesaplayıcısı",
            settlementDesc: "Uluslararası seyahat veya iş hayatından kaynaklanan çoklu para birimi hesaplaşmalarını kolayca çözün. Farklı para birimlerinde ödeme yapan birden fazla kişinin tutarlarını adil şekilde bölün.",
            settlementFeature1: "Eşzamanlı çoklu para birimi hesaplama",
            settlementFeature2: "Adil maliyet paylaşımı",
            settlementFeature3: "Esnek katılımcı yönetimi",

            // Tip Calculator Feature
            tipTitle: "Bahşiş Hesaplayıcısı",
            tipDesc: "Uygun bahşiş yüzdelerini hesaplayın ve kişi sayısına göre bölün. Çeşitli ülkelerin bahşiş kültürlerini dikkate alan akıllı hesaplama özellikleri.",
            tipFeature1: "Ülkeye özel bahşiş oranı rehberi",
            tipFeature2: "Kişi başı bölme hesaplaması",
            tipFeature3: "Bahşiş hesaplama geçmişi",

            // History Feature
            historyTitle: "Hesaplama Geçmişi",
            historyDesc: "Tüm hesaplama kayıtlarını sistematik olarak yönetin. Takvim görünümü ve detaylı arama işlevselliği ile geçmiş hesaplama detaylarını kolayca bulun.",
            historyFeature1: "Takvim görünümü desteği",
            historyFeature2: "Detaylı arama ve filtreler",
            historyFeature3: "Veri dışa aktarma",

            // Multi-Currency Calculator Feature
            multiCurrencyTitle: "Çoklu Para Birimi Hesaplayıcısı",
            multiCurrencyDesc: "Birden fazla para biriminin döviz kurlarını aynı anda görüntüleyin ve karşılaştırın. Karmaşık çok ülkeli işlemler veya seyahat planlaması için faydalıdır.",
            multiCurrencyFeature1: "Eşzamanlı çoklu para birimi dönüştürme",
            multiCurrencyFeature2: "Para birimi karşılaştırma analizi",
            multiCurrencyFeature3: "Favori para birimi grupları",

            // Settings Feature
            settingsTitle: "Ayarlar",
            settingsDesc: "Uygulamayı kişisel tercihlerinize göre özelleştirin. Koyu/açık tema, dil ayarları ve yazı tipi boyutu ayarı gibi çeşitli özelleştirme seçenekleri.",
            settingsFeature1: "Varsayılan para birimi seçimi",
            settingsFeature2: "14 dil desteği",
            settingsFeature3: "Koyu/açık tema",

            // Menu Feature
            menuTitle: "Sezgisel Menü",
            menuDesc: "Temiz ve sezgisel menü arayüzü ile tüm özelliklere kolayca erişin. İhtiyacınız olan özellikleri hızlıca bulun ve kullanın.",
            menuFeature1: "Tek dokunuşla hızlı erişim",
            menuFeature2: "Organize edilmiş özellik kategorileri",
            menuFeature3: "Kullanıcı dostu tasarım",

            // History Management Feature
            historyManagementTitle: "Geçmiş Yönetimi",
            historyManagementDesc: "Hesaplama geçmişinizi sistematik olarak yönetin ve düzenleyin. Önemli kayıtları yer imlerine ekleyin ve gereksiz olanları kolayca silin.",
            historyManagementFeature1: "Kaydırarak kolayca silin",
            historyManagementFeature2: "Önemli kayıtları yer imlerine ekleyin",
            historyManagementFeature3: "Toplu seçim ve yönetim",

            // Widget Feature
            widgetTitle: "Ana Ekran Widget'ı",
            widgetDesc: "Döviz kurlarını doğrudan ana ekranınızdan kontrol edin. Uygulamayı açmadan ana para birimlerinin gerçek zamanlı kurlarını bir bakışta görüntüleyin.",
            widgetFeature1: "Gerçek zamanlı kur gösterimi",
            widgetFeature2: "Çeşitli widget boyutları",
            widgetFeature3: "Otomatik güncelleme",

            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "Teknik Mükemmellik",
            techSubtitle: "En son teknoloji ile inşa edilmiş güvenilir ve hızlı performans",

            performanceTitle: "Yüksek Performans",
            performanceDesc: "iOS ve Android platformlarında yerli seviye performans sağlamak için modern mobil teknoloji ile inşa edilmiştir.",

            offlineTitle: "Çevrimdışı Destek",
            offlineDesc: "İnternet bağlantısı olmadan bile temel hesaplama işlevlerini kullanın, her zaman her yerde güvenilirdir.",

            securityTitle: "Güvenli Veriler",
            securityDesc: "Tüm veriler cihazınızda güvenli şekilde saklanır, gizlilik koruması önceliğimizdir.",

            updateTitle: "Otomatik Güncellemeler",
            updateDesc: "Döviz kuru verileri ve uygulama özellikleri en son bilgileri korumak için otomatik olarak güncellenir.",

            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "Neden Exchango AI'i Seçmelisiniz?",
            benefitsSubtitle: "Gezginler ve iş profesyonellerinin bizi seçme nedenleri",

            travelersTitle: "Gezginler İçin Vazgeçilmez Uygulama",
            travelersDesc: "Uluslararası seyahatler sırasında döviz dönüştürme, bahşiş hesaplama ve grup hesaplaşmalarını tek seferde çözün.",

            businessTitle: "İş Profesyonelleri İçin Araç",
            businessDesc: "Uluslararası işlemleri ve çoklu para birimi muhasebe görevlerini verimli şekilde yönetin.",

            reliableTitle: "Güvenilir Doğruluk",
            reliableDesc: "Gerçek zamanlı döviz kuru verileri ve doğru hesaplama algoritmaları ile güvenilir sonuçlar sağlar.",

            // ==== DOWNLOAD SECTION ====
            downloadTitle: "Şimdi İndir",
            downloadSubtitle: "Ücretsiz olarak sağlanan akıllı döviz hesaplama çözümü",
            downloadDesc: "150'den fazla para birimini destekleyen Exchango AI ile döviz hesaplamalarını daha kolay ve doğru hale getirin.",
            comingSoon: "Yakında",

            // ==== FOOTER SECTION ====
            footerAbout: "Exchango AI Hakkında",
            footerSupport: "Müşteri Desteği",
            footerPrivacy: "Gizlilik Politikası",
            footerTerms: "Hizmet Koşulları",
            footerAboutPage: "Exchango AI Hakkında",
            footerCopyright: "© 2025 Exchango AI. Tüm hakları saklıdır.",

            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "Ana içeriğe atla",
            backToTop: "Başa dön",
            closeModal: "Modalı kapat",
            nextSlide: "Sonraki slayt",
            previousSlide: "Önceki slayt"
        }
    };
    
    // Supported languages  
    const supportedLanguages = ['ar', 'de', 'en', 'es', 'fr', 'hi', 'it', 'ja', 'ko', 'pt', 'ru', 'th', 'tr', 'zh'];
    const defaultLanguage = 'ko';
    
    // Get current language from URL parameter or default
    function getCurrentLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');
        return supportedLanguages.includes(lang) ? lang : defaultLanguage;
    }
    
    // Update all translatable elements
    function updateTranslations() {
        const currentLang = getCurrentLanguage();
        const currentTranslations = translations[currentLang];
        
        console.log(`🌐 Updating translations to: ${currentLang}`);
        
        // Update all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                element.textContent = currentTranslations[key];
            }
        });
        
        // Update title
        if (currentTranslations.pageTitle) {
            document.title = currentTranslations.pageTitle;
        }
        
        // Update language selector active state
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('href').includes(`lang=${currentLang}`)) {
                btn.classList.add('active');
            }
        });
        
        console.log('✅ Translation update completed');
    }
    
    // Initialize translation system
    function initializeTranslations() {
        // Update translations when page loads
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateTranslations);
        } else {
            updateTranslations();
        }
        
        // Update translations when language changes
        window.addEventListener('popstate', updateTranslations);
    }
    
    // Export for use in HTML
    window.ExchangoIndexTranslations = {
        translations,
        supportedLanguages,
        defaultLanguage,
        getCurrentLanguage,
        updateTranslations,
        initializeTranslations
    };
    
    // Auto-initialize
    initializeTranslations();
    
    console.log('🚀 Exchango AI index translations system ready');
    
})();
