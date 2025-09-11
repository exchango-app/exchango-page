// Comprehensive translation system for Exchango app introduction page (index.html)
(function() {
    'use strict';
    
    console.log('🌐 Exchango index page translation system initialized');
    
    // Complete translation data for index.html
    const translations = {
        ko: {
            // ==== HERO SECTION ====
            pageTitle: "Exchango - 스마트 환율 계산기 앱",
            heroTitle: "Exchango",
            heroTagline: "전 세계를 위한 스마트 환율 계산기",
            heroSubtitle: "150개 이상의 통화를 지원하는 올인원 환율 계산 및 정산 앱",
            
            // Hero Statistics
            statCurrencies: "지원 통화",
            statCurrenciesValue: "150+",
            statLanguages: "지원 언어",
            statLanguagesValue: "7",
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
            settingsFeature1: "다크/라이트 테마",
            settingsFeature2: "7개 언어 지원",
            settingsFeature3: "글꼴 크기 조절",
            
            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "기술적 우수성",
            techSubtitle: "최신 기술로 구현된 안정적이고 빠른 성능",
            
            performanceTitle: "고성능",
            performanceDesc: "React Native와 TypeScript로 구축되어 iOS와 Android에서 네이티브 수준의 성능을 제공합니다.",
            
            offlineTitle: "오프라인 지원",
            offlineDesc: "인터넷 연결 없이도 기본 계산 기능을 사용할 수 있어 언제 어디서나 신뢰할 수 있습니다.",
            
            securityTitle: "안전한 데이터",
            securityDesc: "모든 데이터는 디바이스에 안전하게 저장되며, 개인정보 보호를 최우선으로 합니다.",
            
            updateTitle: "자동 업데이트",
            updateDesc: "환율 데이터와 앱 기능이 자동으로 업데이트되어 항상 최신 정보를 유지합니다.",
            
            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "왜 Exchango를 선택해야 할까요?",
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
            downloadDesc: "150개 이상의 통화를 지원하는 Exchango로 환율 계산을 더 쉽고 정확하게 만들어보세요.",
            
            // ==== FOOTER SECTION ====
            footerAbout: "Exchango 소개",
            footerSupport: "고객 지원",
            footerPrivacy: "개인정보처리방침",
            footerTerms: "이용약관",
            footerAboutPage: "Exchango 소개",
            footerCopyright: "© 2024 Exchango. 모든 권리 보유.",
            
            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "메인 콘텐츠로 건너뛰기",
            backToTop: "맨 위로 돌아가기",
            closeModal: "모달 닫기",
            nextSlide: "다음 슬라이드",
            previousSlide: "이전 슬라이드",
        },
        
        en: {
            // ==== HERO SECTION ====
            pageTitle: "Exchango - Smart Currency Converter App",
            heroTitle: "Exchango",
            heroTagline: "Smart Currency Converter for the World",
            heroSubtitle: "All-in-one currency conversion and settlement app supporting 150+ currencies",
            
            // Hero Statistics
            statCurrencies: "Currencies",
            statCurrenciesValue: "150+",
            statLanguages: "Languages",
            statLanguagesValue: "7",
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
            settingsFeature1: "Dark/Light theme",
            settingsFeature2: "7 language support",
            settingsFeature3: "Font size adjustment",
            
            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "Technical Excellence",
            techSubtitle: "Reliable and fast performance built with cutting-edge technology",
            
            performanceTitle: "High Performance",
            performanceDesc: "Built with React Native and TypeScript to provide native-level performance on both iOS and Android platforms.",
            
            offlineTitle: "Offline Support",
            offlineDesc: "Use basic calculation functions even without internet connection, making it reliable anytime, anywhere.",
            
            securityTitle: "Secure Data",
            securityDesc: "All data is safely stored on your device with privacy protection as our top priority.",
            
            updateTitle: "Automatic Updates",
            updateDesc: "Exchange rate data and app features are automatically updated to maintain the latest information.",
            
            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "Why Choose Exchango?",
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
            downloadDesc: "Make currency calculations easier and more accurate with Exchango supporting 150+ currencies.",
            
            // ==== FOOTER SECTION ====
            footerAbout: "About Exchango",
            footerSupport: "Customer Support",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms of Service",
            footerAboutPage: "About Exchango",
            footerCopyright: "Copyright © 2025 Exchango All rights reserved.",
            
            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "Skip to main content",
            backToTop: "Back to top",
            closeModal: "Close modal",
            nextSlide: "Next slide",
            previousSlide: "Previous slide",
        },
        
        ja: {
            // ==== HERO SECTION ====
            pageTitle: "Exchango - スマート為替計算機アプリ",
            heroTitle: "Exchango",
            heroTagline: "世界のためのスマート為替計算機",
            heroSubtitle: "150以上の通貨をサポートするオールインワン為替計算・精算アプリ",
            
            // Hero Statistics
            statCurrencies: "サポート通貨",
            statCurrenciesValue: "150+",
            statLanguages: "対応言語",
            statLanguagesValue: "7",
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
            settingsFeature1: "ダーク/ライトテーマ",
            settingsFeature2: "7言語サポート",
            settingsFeature3: "フォントサイズ調整",
            
            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "技術的優秀性",
            techSubtitle: "最新技術で実装された安定かつ高速なパフォーマンス",
            
            performanceTitle: "高性能",
            performanceDesc: "React NativeとTypeScriptで構築され、iOSとAndroidでネイティブレベルのパフォーマンスを提供します。",
            
            offlineTitle: "オフラインサポート",
            offlineDesc: "インターネット接続なしでも基本計算機能を使用でき、いつでもどこでも信頼できます。",
            
            securityTitle: "安全なデータ",
            securityDesc: "すべてのデータはデバイスに安全に保存され、プライバシー保護を最優先にします。",
            
            updateTitle: "自動更新",
            updateDesc: "為替データとアプリ機能が自動的に更新され、常に最新情報を維持します。",
            
            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "なぜExchangoを選ぶべきか？",
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
            downloadDesc: "150以上の通貨をサポートするExchangoで為替計算をより簡単で正確にしましょう。",
            
            // ==== FOOTER SECTION ====
            footerAbout: "Exchangoについて",
            footerSupport: "カスタマーサポート",
            footerPrivacy: "プライバシーポリシー",
            footerTerms: "利用規約",
            footerAboutPage: "Exchangoについて",
            footerCopyright: "Copyright © 2025 Exchango All rights reserved.",
            
            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "メインコンテンツにスキップ",
            backToTop: "トップに戻る",
            closeModal: "モーダルを閉じる",
            nextSlide: "次のスライド",
            previousSlide: "前のスライド",
        },
        
        zh: {
            // ==== HERO SECTION ====
            pageTitle: "Exchango - 智能汇率计算器应用",
            heroTitle: "Exchango",
            heroTagline: "全球智能汇率计算器",
            heroSubtitle: "支持150多种货币的一站式汇率计算和结算应用",
            
            // Hero Statistics
            statCurrencies: "支持货币",
            statCurrenciesValue: "150+",
            statLanguages: "支持语言",
            statLanguagesValue: "7",
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
            settingsFeature1: "深色/浅色主题",
            settingsFeature2: "7种语言支持",
            settingsFeature3: "字体大小调节",
            
            // ==== TECHNICAL EXCELLENCE SECTION ====
            techTitle: "技术卓越",
            techSubtitle: "使用尖端技术实现的稳定快速性能",
            
            performanceTitle: "高性能",
            performanceDesc: "采用React Native和TypeScript构建，在iOS和Android平台提供原生级性能。",
            
            offlineTitle: "离线支持",
            offlineDesc: "即使没有互联网连接也能使用基本计算功能，随时随地都可靠。",
            
            securityTitle: "安全数据",
            securityDesc: "所有数据都安全存储在您的设备上，以隐私保护为第一优先。",
            
            updateTitle: "自动更新",
            updateDesc: "汇率数据和应用功能自动更新，始终保持最新信息。",
            
            // ==== USER BENEFITS SECTION ====
            benefitsTitle: "为什么选择Exchango？",
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
            downloadDesc: "使用支持150多种货币的Exchango让汇率计算更简单、更准确。",
            
            // ==== FOOTER SECTION ====
            footerAbout: "关于Exchango",
            footerSupport: "客户支持",
            footerPrivacy: "隐私政策",
            footerTerms: "服务条款",
            footerAboutPage: "关于Exchango",
            footerCopyright: "© 2024 Exchango. 保留所有权利。",
            
            // ==== ACCESSIBILITY & NAVIGATION ====
            skipToContent: "跳转到主要内容",
            backToTop: "返回顶部",
            closeModal: "关闭模态框",
            nextSlide: "下一张幻灯片",
            previousSlide: "上一张幻灯片",
        }
    };
    
    // Supported languages
    const supportedLanguages = ['ko', 'en', 'ja', 'zh'];
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
    
    console.log('🚀 Exchango index translations system ready');
    
})();
