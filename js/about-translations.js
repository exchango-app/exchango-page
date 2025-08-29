// Enhanced translation system for Exchango about page
(function() {
    'use strict';
    
    console.log('🚀 Enhanced translation system started');
    
    // Complete translation data with updated features
    const translations = {
        ko: {
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
            
            // Feature cards - Updated with new content
            feature1Title: "1. 환율 계산기",
            feature1Desc: "직관적인 인터페이스로 누구나 쉽게 사용할 수 있는 스마트 환율 계산기입니다. 170개 이상의 통화를 지원하며, 환율 정보를 활용해 정확한 계산 결과를 제공합니다. 간단한 터치 몇 번으로 원하는 금액을 다른 통화로 즉시 변환할 수 있습니다.",
            feature1Item1: "환율 데이터 자동 업데이트",
            feature1Item2: "양방향 계산 및 스왑 기능",
            feature1Item3: "소수점 단위 정밀 계산",
            
            feature2Title: "2. 정산 기능",
            feature2Desc: "해외여행이나 국제 비즈니스에서 발생하는 복잡한 다통화 정산을 한 번에 해결하세요. 여러 사람이 각각 다른 통화로 지불한 금액들을 자동으로 계산하여 공평한 정산 결과를 제공합니다.",
            feature2Item1: "참가자별 공정한 비용 분담 계산",
            feature2Item2: "다양한 통화 혼합 정산 지원",
            
            feature3Title: "3. 오늘의 환율",
            feature3Desc: "전 세계 주요 통화들의 실시간 환율 정보와 변동 현황을 한눈에 파악할 수 있습니다. 환율 데이터를 시각적 그래프로 표현하여 직관적으로 확인하며, 자주 확인하는 통화를 즐겨찾기에 등록하여 편리하게 모니터링할 수 있습니다.",
            feature3Item1: "환율 현황 그래프 제공",
            feature3Item2: "일일 변동률 및 추이 표시",
            feature3Item3: "즐겨찾기 기능 관리",
            
            feature4Title: "4. 다중 환율 계산",
            feature4Desc: "한 번의 입력으로 여러 통화를 동시에 비교할 수 있는 강력한 기능입니다. 예를 들어 1000 USD가 한국 원화, 일본 엔화, 유럽 유로로 각각 얼마인지 한 화면에서 동시에 확인할 수 있어 최적의 통화 선택에 도움을 줍니다.",
            feature4Item1: "여러 통화 동시 계산",
            feature4Item2: "통화별 비교 분석",
            
            feature5Title: "5. 게임 (사다리 & 룰렛)",
            feature5Desc: "재미있는 게임 기능으로 친구들과 함께 다양한 결정을 내릴 수 있습니다. 여행 목적지 선택, 점심 메뉴 결정, 팀 나누기 등 일상의 선택 고민을 흥미진진한 게임으로 해결해보세요. 사다리 게임과 룰렛 게임 두 가지 방식을 제공합니다.",
            feature5Item1: "클래식 사다리 게임",
            feature5Item2: "컬러풀한 룰렛 게임",
            feature5Item3: "커스텀 항목 설정",
            
            feature6Title: "6. 기준통화 설정",
            feature6Desc: "개인의 사용 패턴에 맞게 기준이 되는 통화를 설정할 수 있습니다. 자주 사용하는 통화를 기본값으로 설정하면 매번 통화를 선택하는 번거로움 없이 더욱 빠르고 편리하게 환율 계산을 할 수 있습니다.",
            feature6Item1: "개인 맞춤 기준통화 설정",
            feature6Item2: "빠른 통화 전환",
            
            feature7Title: "7. 언어 설정",
            feature7Desc: "전 세계 사용자를 위해 7개 주요 언어를 지원합니다. 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어, 독일어로 제공되며, 각 언어의 문화적 특성을 반영한 숫자 표기법을 적용합니다.",
            feature7Item1: "7개 언어 지원",
            feature7Item2: "지역별 숫자 형식 지원",
            
            feature8Title: "8. 테마 설정",
            feature8Desc: "사용자의 취향과 환경에 맞는 다양한 테마를 제공합니다. 밝은 테마, 어두운 테마 등 다양한 옵션으로 눈의 피로를 줄이고 더욱 편안한 사용 환경을 만들어드립니다.",
            feature8Item1: "라이트/다크 테마 지원",
            feature8Item2: "다양한 컬러 스킴",
            
            // Technology stack
            techReactNative: "크로스 플랫폼 네이티브 성능",
            techTypeScript: "안정적인 타입 시스템",
            techAsyncStorage: "로컬 데이터 영구 저장",
            techI18next: "다국어 지원 시스템",
            techSmartCaching: "지능형 환율 캐싱",
            techOfflineSupport: "오프라인 모드 지원",
            
            // Footer
            footerCopyright: "© 2025 Exchango. All rights reserved."
        },
        en: {
            title: "About Exchango - Smart Currency Converter",
            heroTitle: "Exchango",
            heroTagline: "Smart Currency Conversion Starts Here",
            statCurrencies: "Supported\nCurrencies",
            statLanguages: "Supported\nLanguages",
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
            
            // Feature cards - Updated with new content
            feature1Title: "1. Currency Calculator",
            feature1Desc: "An intuitive smart currency calculator that anyone can easily use. Supports over 170 currencies and provides accurate calculation results using exchange rate information. Convert any amount to another currency instantly with just a few simple touches.",
            feature1Item1: "Automatic exchange rate data updates",
            feature1Item2: "Bidirectional calculation and swap functionality",
            feature1Item3: "Precise decimal point calculations",
            
            feature2Title: "2. Settlement Function",
            feature2Desc: "Resolve complex multi-currency settlements from overseas travel or international business at once. Automatically calculates amounts paid by multiple people in different currencies to provide fair settlement results.",
            feature2Item1: "Fair cost sharing calculation per participant",
            feature2Item2: "Multi-currency mixed settlement support",
            
            feature3Title: "3. Today's Exchange Rates",
            feature3Desc: "Get real-time exchange rate information and fluctuation status of major currencies worldwide at a glance. Exchange rate data is presented through visual charts for intuitive checking, and frequently checked currencies can be registered as favorites for convenient monitoring.",
            feature3Item1: "Exchange rate status chart provided",
            feature3Item2: "Daily volatility and trend display",
            feature3Item3: "Favorites function management",
            
            feature4Title: "4. Multi-Currency Calculator",
            feature4Desc: "A powerful feature that allows you to compare multiple currencies simultaneously with a single input. For example, you can see at once how much 1000 USD is in Korean Won, Japanese Yen, and Euro on one screen, helping you choose the optimal currency.",
            feature4Item1: "Multiple currency simultaneous calculation",
            feature4Item2: "Currency comparison analysis",
            
            feature5Title: "5. Games (Ladder & Roulette)",
            feature5Desc: "Fun game features that let you make various decisions with friends. Solve everyday choice dilemmas like choosing travel destinations, deciding lunch menus, or team divisions through exciting games. Provides both ladder games and roulette games.",
            feature5Item1: "Classic ladder game",
            feature5Item2: "Colorful roulette game",
            feature5Item3: "Custom item settings",
            
            feature6Title: "6. Base Currency Settings",
            feature6Desc: "Set a base currency that matches your personal usage patterns. By setting frequently used currencies as defaults, you can perform exchange rate calculations faster and more conveniently without the hassle of selecting currencies every time.",
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
            
            // Technology stack
            techReactNative: "Cross-platform native performance",
            techTypeScript: "Stable type system",
            techAsyncStorage: "Local data permanent storage",
            techI18next: "Multilingual support system",
            techSmartCaching: "Intelligent exchange rate caching",
            techOfflineSupport: "Offline mode support",
            
            // Footer
            footerCopyright: "© 2025 Exchango. All rights reserved."
        },
        ja: {
            title: "Exchango について - スマート通貨コンバーター",
            heroTitle: "Exchango",
            heroTagline: "スマートな為替計算の始まり",
            statCurrencies: "対応通貨",
            statLanguages: "対応言語",
            statFree: "無料",
            sectionTitle1: "Exchangoとは？",
            sectionSubtitle1: "複雑な為替計算をシンプルで直感的にするスマート為替計算機です",
            smartCalculatorTitle: "スマートで直感的",
            smartCalculatorDesc: "Exchangoは複雑な為替計算をシンプルで直感的な操作に変換します。旅行者、ビジネスプロフェッショナル、複数の通貨を扱うすべての人のために設計されています。",
            sectionTitle2: "対応通貨",
            sectionSubtitle2: "世界170以上の様々な通貨をサポート",
            sectionTitle3: "主な機能",
            sectionSubtitle3: "様々な為替計算と便利機能を提供",
            sectionTitle4: "技術的特徴",
            sectionSubtitle4: "最新技術で実装された安定で高速なパフォーマンス",
            performanceTitle: "高パフォーマンス",
            performanceDesc: "iOSとAndroidプラットフォームで最適なパフォーマンスを実現するためにReact NativeとTypeScriptで構築されています。スマートキャッシュとオフラインサポートにより、あらゆるネットワーク状況でも信頼できる動作を保証します。",
            
            // Currency categories
            categoryMajor: "主要通貨",
            categoryMajorDesc: "世界経済を牽引する主要通貨",
            categoryAsia: "アジア通貨",
            categoryAsiaDesc: "アジア各国の様々な通貨",
            categoryOther: "その他地域通貨",
            categoryOtherDesc: "中南米、アフリカ、オセアニア通貨",
            
            // Feature cards - Updated
            feature1Title: "1. 為替計算機",
            feature1Desc: "誰でも簡単に使える直感的なスマート為替計算機です。170以上の通貨をサポートし、為替レート情報を活用して正確な計算結果を提供します。簡単なタッチ操作で任意の金額を他の通貨に即座に変換できます。",
            feature1Item1: "為替レートデータの自動更新",
            feature1Item2: "双方向計算とスワップ機能",
            feature1Item3: "小数点単位の精密計算",
            
            feature2Title: "2. 精算機能",
            feature2Desc: "海外旅行や国際ビジネスで発生する複雑な多通貨精算を一度に解決します。複数の人がそれぞれ異なる通貨で支払った金額を自動計算し、公平な精算結果を提供します。",
            feature2Item1: "参加者別公平な費用分担計算",
            feature2Item2: "多様な通貨混合精算サポート",
            
            feature3Title: "3. 今日の為替レート",
            feature3Desc: "世界主要通貨のリアルタイム為替レート情報と変動状況を一目で把握できます。為替レートデータを視覚的なグラフで表現し直感的に確認でき、よく確認する通貨をお気に入りに登録して便利にモニタリングできます。",
            feature3Item1: "為替レート状況チャート提供",
            feature3Item2: "日次変動率と推移表示",
            feature3Item3: "お気に入り機能管理",
            
            feature4Title: "4. 多通貨計算機",
            feature4Desc: "一度の入力で複数の通貨を同時に比較できる強力な機能です。例えば1000 USDが韓国ウォン、日本円、欧州ユーロでそれぞれいくらかを一画面で同時に確認でき、最適な通貨選択をサポートします。",
            feature4Item1: "複数通貨同時計算",
            feature4Item2: "通貨別比較分析",
            
            feature5Title: "5. ゲーム（はしご＆ルーレット）",
            feature5Desc: "友達と一緒に楽しめる楽しいゲーム機能です。旅行先選択、昼食メニュー決定、チーム分けなど日常の選択の悩みを興味深いゲームで解決しましょう。はしごゲームとルーレットゲームの2つの方式を提供します。",
            feature5Item1: "クラシックはしごゲーム",
            feature5Item2: "カラフルなルーレットゲーム",
            feature5Item3: "カスタムアイテム設定",
            
            feature6Title: "6. 基準通貨設定",
            feature6Desc: "個人の使用パターンに合わせて基準となる通貨を設定できます。よく使用する通貨をデフォルトに設定することで、毎回通貨を選択する手間なくより速く便利に為替計算ができます。",
            feature6Item1: "個人カスタム基準通貨設定",
            feature6Item2: "迅速な通貨変換",
            
            feature7Title: "7. 言語設定",
            feature7Desc: "世界のユーザーのために7つの主要言語をサポートします。韓国語、英語、日本語、中国語、スペイン語、フランス語、ドイツ語で提供され、各言語の文化的特性を反映した数字表記法を適用します。",
            feature7Item1: "7言語サポート",
            feature7Item2: "地域別数字フォーマットサポート",
            
            feature8Title: "8. テーマ設定",
            feature8Desc: "ユーザーの好みと環境に合った様々なテーマを提供します。明るいテーマ、暗いテーマなど様々なオプションで目の疲労を軽減し、より快適な使用環境を作ります。",
            feature8Item1: "ライト/ダークテーマサポート",
            feature8Item2: "様々なカラースキーム",
            
            // Technology stack
            techReactNative: "クロスプラットフォームネイティブパフォーマンス",
            techTypeScript: "安定したタイプシステム",
            techAsyncStorage: "ローカルデータ永続保存",
            techI18next: "多言語サポートシステム",
            techSmartCaching: "インテリジェント為替レートキャッシング",
            techOfflineSupport: "オフラインモードサポート",
            
            // Footer
            footerCopyright: "© 2025 Exchango. 全著作権所有。<br>世界の旅行者のために❤️で作られました"
        },
        zh: {
            title: "关于 Exchango - 智能货币转换器",
            heroTitle: "Exchango",
            heroTagline: "智能汇率计算的开始",
            statCurrencies: "支持货币",
            statLanguages: "支持语言",
            statFree: "免费",
            sectionTitle1: "什么是 Exchango？",
            sectionSubtitle1: "一个智能汇率计算器，让复杂的汇率计算变得简单直观",
            smartCalculatorTitle: "智能直观",
            smartCalculatorDesc: "Exchango将复杂的汇率计算转化为简单直观的操作。专为旅行者、商务专业人员和任何处理多种货币的人设计。",
            sectionTitle2: "支持货币",
            sectionSubtitle2: "支持全球170多种不同货币",
            sectionTitle3: "主要功能",
            sectionSubtitle3: "提供各种汇率计算和便利功能",
            sectionTitle4: "技术特征",
            sectionSubtitle4: "采用最新技术实现的稳定快速性能",
            performanceTitle: "高性能",
            performanceDesc: "采用React Native和TypeScript构建，在iOS和Android平台上实现最佳性能。智能缓存和离线支持确保在任何网络条件下都能可靠运行。",
            
            // Currency categories
            categoryMajor: "主要货币",
            categoryMajorDesc: "推动全球经济的主要货币",
            categoryAsia: "亚洲货币",
            categoryAsiaDesc: "亚洲各国的各种货币",
            categoryOther: "其他地区货币",
            categoryOtherDesc: "拉丁美洲、非洲和大洋洲货币",
            
            // Feature cards - Updated
            feature1Title: "1. 汇率计算器",
            feature1Desc: "任何人都可以轻松使用的直观智能汇率计算器。支持170多种货币，利用汇率信息提供准确的计算结果。只需简单的几次触摸即可将任意金额立即转换为其他货币。",
            feature1Item1: "汇率数据自动更新",
            feature1Item2: "双向计算和交换功能",
            feature1Item3: "小数点单位精确计算",
            
            feature2Title: "2. 结算功能",
            feature2Desc: "一次性解决海外旅行或国际业务中产生的复杂多货币结算。自动计算多人用不同货币支付的金额，提供公平的结算结果。",
            feature2Item1: "参与者间公平成本分摊计算",
            feature2Item2: "多种货币混合结算支持",
            
            feature3Title: "3. 今日汇率",
            feature3Desc: "一目了然地掌握全球主要货币的实时汇率信息和波动状况。汇率数据通过可视化图表呈现，便于直观查看，经常查看的货币可注册为收藏夹进行便捷监控。",
            feature3Item1: "汇率状况图表提供",
            feature3Item2: "日波动率和趋势显示",
            feature3Item3: "收藏夹功能管理",
            
            feature4Title: "4. 多货币计算器",
            feature4Desc: "一次输入即可同时比较多种货币的强大功能。例如可在一个屏幕上同时查看1000 USD分别相当于韩元、日元、欧元的金额，帮助您选择最优货币。",
            feature4Item1: "多货币同时计算",
            feature4Item2: "货币间比较分析",
            
            feature5Title: "5. 游戏（梯子和轮盘）",
            feature5Desc: "与朋友一起享受的有趣游戏功能。通过有趣的游戏解决日常选择难题，如选择旅行目的地、决定午餐菜单、分组等。提供梯子游戏和轮盘游戏两种方式。",
            feature5Item1: "经典梯子游戏",
            feature5Item2: "多彩轮盘游戏",
            feature5Item3: "自定义项目设置",
            
            feature6Title: "6. 基准货币设置",
            feature6Desc: "可以根据个人使用模式设置基准货币。将常用货币设为默认值，无需每次选择货币的麻烦，可以更快更便捷地进行汇率计算。",
            feature6Item1: "个人定制基准货币设置",
            feature6Item2: "快速货币转换",
            
            feature7Title: "7. 语言设置",
            feature7Desc: "为全球用户支持7种主要语言。提供韩语、英语、日语、中文、西班牙语、法语、德语，应用反映各语言文化特点的数字表示法。",
            feature7Item1: "7种语言支持",
            feature7Item2: "地区数字格式支持",
            
            feature8Title: "8. 主题设置",
            feature8Desc: "提供适合用户喜好和环境的各种主题。明亮主题、暗黑主题等多种选项减少眼部疲劳，创造更舒适的使用环境。",
            feature8Item1: "明亮/暗黑主题支持",
            feature8Item2: "多种配色方案",
            
            // Technology stack
            techReactNative: "跨平台原生性能",
            techTypeScript: "稳定的类型系统",
            techAsyncStorage: "本地数据永久存储",
            techI18next: "多语言支持系统",
            techSmartCaching: "智能汇率缓存",
            techOfflineSupport: "离线模式支持",
            
            // Footer
            footerCopyright: "© 2025 Exchango. 版权所有。<br>用❤️为全球旅行者制作"
        }
    };
    
    let currentLang = 'en'; // Changed default to English
    
    // Helper function for text application with newline support
    function applyText(element, text) {
        if (!element || !text) return;
        
        if (text.includes('\n')) {
            element.innerHTML = text.replace(/\n/g, '<br>');
        } else if (text.includes('<br>')) {
            element.innerHTML = text;
        } else {
            element.textContent = text;
        }
    }
    
    // Language detection from URL
    function detectLanguage() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const lang = urlParams.get('lang');
            if (lang && translations[lang]) {
                currentLang = lang;
                console.log(`🌍 Language detected: ${lang}`);
                return true;
            }
        } catch (error) {
            console.error('URL parsing error:', error);
        }
        return false;
    }
    
    // Apply translations using data-i18n attributes
    function applyTranslations() {
        const t = translations[currentLang];
        console.log(`🔄 Applying translations: ${currentLang}`);
        
        try {
            // Set page title and language
            document.title = t.title;
            document.documentElement.lang = currentLang;
            
            // Apply translations to all elements with data-i18n attribute
            const elementsWithI18n = document.querySelectorAll('[data-i18n]');
            elementsWithI18n.forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (t[key]) {
                    applyText(element, t[key]);
                }
            });
            
            // Update language buttons
            updateLanguageButtons();
            
            console.log('✅ Translation application completed');
            
        } catch (error) {
            console.error('❌ Translation application error:', error);
        }
    }
    
    // Update language button states
    function updateLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            const lang = button.getAttribute('data-lang');
            if (lang === currentLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    // Change language
    function changeLanguage(newLang) {
        if (!translations[newLang]) {
            console.error(`Unsupported language: ${newLang}`);
            return;
        }
        
        console.log(`🔄 Language change: ${currentLang} → ${newLang}`);
        currentLang = newLang;
        
        // Update URL
        try {
            const url = new URL(window.location);
            url.searchParams.set('lang', newLang);
            window.history.pushState({}, '', url);
        } catch (error) {
            console.error('URL update error:', error);
        }
        
        // Apply translations
        applyTranslations();
    }
    
    // Setup language button events
    function setupLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = button.getAttribute('data-lang');
                if (lang && lang !== currentLang) {
                    changeLanguage(lang);
                }
            });
        });
        console.log('🔘 Language button setup completed');
    }
    
    // Initialize
    function init() {
        console.log('🎯 Initialization started');
        
        // Detect language
        detectLanguage();
        
        // Execute when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setupLanguageButtons();
                applyTranslations();
            });
        } else {
            setupLanguageButtons();
            applyTranslations();
        }
        
        // Browser history events
        window.addEventListener('popstate', () => {
            detectLanguage();
            applyTranslations();
        });
    }
    
    // Expose global functions
    window.simpleTranslation = {
        changeLanguage: changeLanguage,
        getCurrentLanguage: () => currentLang,
        getSupportedLanguages: () => Object.keys(translations)
    };
    
    // Execute immediately
    init();
    
})();
