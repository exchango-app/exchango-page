// Enhanced translation system for Exchango privacy policy page
(function() {
    'use strict';
    
    console.log('🚀 Privacy Policy translation system started');
    
    // Complete translation data for privacy policy
    const translations = {
        ko: {
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
            noCollectList: [
                "개인 식별 정보 (이름, 이메일, 전화번호)",
                "금융 계좌 정보 또는 거래 내역",
                "정확한 위치 데이터 또는 GPS 좌표",
                "개별 기기 식별자 또는 광고 ID",
                "연락처 목록 또는 소셜 미디어 정보",
                "생체 데이터 또는 인증 자격 증명",
                "개인 식별 가능한 정보(PII)의 모든 형태"
            ],
            
            // Section 4: Data We May Collect
            mayCollectTitle: "수집할 수 있는 익명 데이터",
            mayCollectSubtitle: "앱 개선을 위해 수집할 수 있는 익명화된 데이터에 대해 알려드립니다",
            mayCollectContent: "앱 개선을 위해 다음 익명화된 데이터를 수집할 수 있습니다:",
            mayCollectList: [
                "앱 사용 통계: 어떤 기능이 자주 사용되는지, 화면 조회 횟수 등",
                "기기 정보: 기기 유형, 운영체제 버전 (개인 식별 불가)",
                "오류 보고서: 앱 개선을 위한 기술적 오류 정보",
                "일반적인 사용 패턴: 기능별 사용 빈도, 성능 데이터",
                "지역 정보: 기본 통화 설정을 위한 일반적인 국가/지역 정보"
            ],
            analyticsTitle: "Google Analytics 사용",
            analyticsContent: "Google Firebase Analytics를 통해 앱 성능 및 사용자 경험 개선을 위한 익명 데이터를 수집합니다. 기기 설정에서 분석 데이터 수집을 선택적으로 거부할 수 있습니다.",
            
            // Section 5: Local Data Storage
            localStorageTitle: "로컬 데이터 저장",
            localStorageSubtitle: "앱 기능을 위해 기기에만 저장되는 데이터에 대해 알려드립니다",
            localStorageContent: "앱 기능을 위해 다음 데이터를 기기에만 저장합니다:",
            localStorageList: [
                "앱 환경설정: 선택한 기준 통화, 언어 설정, 테마 설정",
                "환율 캐시: 오프라인 기능을 위해 임시로 캐시된 환율",
                "통화 이력: 빠른 접근을 위한 최근 사용한 통화 쌍",
                "앱 설정: 표시 설정 및 알림 설정"
            ],
            deviceOnlyTitle: "기기 전용 저장",
            deviceOnlyContent: "모든 데이터는 기기의 보안 저장소에 안전하게 보관됩니다. 데이터는 기기를 벗어나지 않으며, 외부 서비스와 동기화되지 않습니다. 앱 삭제 시 저장된 모든 데이터가 영구적으로 제거됩니다.",
            
            // Section 6: Data Sharing
            dataSharingTitle: "데이터 공유 및 제3자 서비스",
            dataSharingSubtitle: "분석 데이터 처리 및 제3자 서비스 사용에 대해 알려드립니다",
            dataSharingContent: "Exchango는 다음과 같은 방식으로 데이터를 공유합니다:",
            dataSharingList: [
                "Firebase Analytics: 익명화된 앱 사용 통계 및 성능 데이터",
                "환율 데이터 제공업체: 환율 정보 요청 시 표준 웹 요청 정보",
                "오류 보고 서비스: 앱 안정성 개선을 위한 기술적 오류 정보"
            ],
            noSaleTitle: "절대 판매하지 않아요",
            noSaleContent: "개인정보는 제3자에게 판매하지 않으며, 광고 목적으로 사용하지 않습니다. 수집되는 모든 분석 데이터는 오직 앱 개선 목적으로만 사용됩니다.",
            
            // Section 7: User Rights
            userRightsTitle: "여러분의 권리",
            userRightsSubtitle: "개인정보와 관련된 여러분의 권리를 알려드립니다",
            userRightsContent: "Exchango 사용자는 다음 권리를 갖습니다:",
            userRightsList: [
                "분석 거부 권리: 기기 설정에서 분석 데이터 수집을 거부할 수 있습니다",
                "데이터 삭제 권리: 앱 삭제 시 모든 로컬 데이터가 완전히 제거됩니다",
                "정보 요청 권리: 데이터 처리에 대한 정보를 언제든 요청할 수 있습니다",
                "투명성 권리: 모든 데이터 처리에 대해 명확히 알 권리가 있습니다"
            ],
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
        },
        
        en: {
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
            noCollectList: [
                "Personal identification information (name, email, phone number)",
                "Financial account information or transaction history",
                "Precise location data or GPS coordinates",
                "Individual device identifiers or advertising IDs",
                "Contact lists or social media information",
                "Biometric data or authentication credentials",
                "Any form of personally identifiable information (PII)"
            ],
            
            // Section 4: Data We May Collect
            mayCollectTitle: "Anonymous Data We May Collect",
            mayCollectSubtitle: "Information about anonymized data that may be collected for app improvement",
            mayCollectContent: "The following anonymized data may be collected for app improvement:",
            mayCollectList: [
                "App usage statistics: Which features are frequently used, screen view counts, etc.",
                "Device information: Device type, operating system version (not personally identifiable)",
                "Error reports: Technical error information for app improvement",
                "General usage patterns: Usage frequency by feature, performance data",
                "Regional information: General country/region information for default currency settings"
            ],
            analyticsTitle: "Google Analytics Usage",
            analyticsContent: "Anonymous data is collected through Google Firebase Analytics for app performance and user experience improvement. You can optionally opt out of analytics data collection in device settings.",
            
            // Section 5: Local Data Storage
            localStorageTitle: "Local Data Storage",
            localStorageSubtitle: "Information about data stored only on the device for app functionality",
            localStorageContent: "The following data is stored on the device for app functionality:",
            localStorageList: [
                "App preferences: Selected base currency, language settings, theme settings",
                "Exchange rate cache: Temporarily cached exchange rates for offline functionality",
                "Currency history: Recently used currency pairs for quick access",
                "App settings: Display settings and notification settings"
            ],
            deviceOnlyTitle: "Device-Only Storage",
            deviceOnlyContent: "All data is securely stored in the device's secure storage. Data does not leave the device and is not synchronized with external services. All stored data is permanently deleted when the app is uninstalled.",
            
            // Section 6: Data Sharing
            dataSharingTitle: "Data Sharing and Third-Party Services",
            dataSharingSubtitle: "Information about analytics data processing and third-party service usage",
            dataSharingContent: "Exchango shares data in the following ways:",
            dataSharingList: [
                "Firebase Analytics: Anonymized app usage statistics and performance data",
                "Exchange rate data providers: Standard web request information when requesting exchange rate information",
                "Error reporting services: Technical error information for app stability improvement"
            ],
            noSaleTitle: "We Never Sell",
            noSaleContent: "Personal information is not sold to third parties and is not used for advertising purposes. All collected analytics data is used solely for app improvement purposes.",
            
            // Section 7: User Rights
            userRightsTitle: "Your Rights",
            userRightsSubtitle: "Information about your rights related to personal information",
            userRightsContent: "Exchango users have the following rights:",
            userRightsList: [
                "Right to refuse analytics: You can refuse analytics data collection in device settings",
                "Right to data deletion: All local data is completely removed when the app is deleted",
                "Right to request information: You can request information about data processing at any time",
                "Right to transparency: You have the right to clearly know about all data processing"
            ],
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
        },
        
        ja: {
            title: "プライバシーポリシー - Exchango",
            pageTitle: "プライバシーポリシー",
            pageSubtitle: "ユーザーのプライバシー保護が私たちの最優先事項です。",
            
            // Section 1: Overview
            overviewTitle: "概要",
            overviewSubtitle: "Exchangoのプライバシーポリシーとデータ処理方法について",
            overviewContent: "このプライバシーポリシーは、Exchango通貨変換アプリの使用時における個人情報の収集、使用、保護の方法を明示しています。アプリ改善のためにGoogle Firebase Analyticsなどの分析ツールを使用し、すべてのデータは匿名で処理されます。",
            privacyFirstTitle: "プライバシー優先設計",
            privacyFirstContent: "Exchangoはプライバシー保護を優先して設計されています。ユーザーデータはデバイスにのみ保存され、個人識別情報は外部サーバーに収集、保存、送信されません。",
            
            // Section 2: Privacy Principles
            principlesTitle: "プライバシー保護の原則",
            principlesSubtitle: "私たちが維持するコアプライバシー保護原則",
            principle1Title: "ローカル保存のみ",
            principle1Content: "すべてのデータはユーザーのデバイスにのみ保存されます。外部ストレージやクラウド同期はサポートしていません。",
            principle2Title: "匿名分析データのみ",
            principle2Content: "個人識別情報は収集せず、アプリ改善のための匿名化された使用統計のみ収集します。",
            principle3Title: "セキュリティ設計",
            principle3Content: "ユーザー情報保護のためにセキュリティ技術を適用して設計されています。",
            principle4Title: "透明性",
            principle4Content: "データ処理方法を透明に公開して信頼性を維持します。",
            
            // Section 3: Data We Don't Collect
            noCollectTitle: "収集しない情報",
            noCollectSubtitle: "私たちが絶対に収集しない情報を明確にお伝えします",
            noCollectContent: "Exchangoは以下の情報を収集しません：",
            noCollectList: [
                "個人識別情報（名前、メール、電話番号）",
                "金融口座情報や取引履歴",
                "正確な位置データやGPS座標",
                "個別デバイス識別子や広告ID",
                "連絡先リストやソーシャルメディア情報",
                "生体データや認証資格情報",
                "個人識別可能情報（PII）のあらゆる形式"
            ],
            
            // Section 4: Data We May Collect
            mayCollectTitle: "収集する可能性のある匿名データ",
            mayCollectSubtitle: "アプリ改善のために収集する可能性のある匿名化データについて",
            mayCollectContent: "アプリ改善のために以下の匿名化データを収集する可能性があります：",
            mayCollectList: [
                "アプリ使用統計：どの機能が頻繁に使用されるか、画面表示回数など",
                "デバイス情報：デバイスタイプ、オペレーティングシステムバージョン（個人識別不可）",
                "エラーレポート：アプリ改善のための技術的エラー情報",
                "一般的な使用パターン：機能別使用頻度、パフォーマンスデータ",
                "地域情報：デフォルト通貨設定のための一般的な国/地域情報"
            ],
            analyticsTitle: "Google Analytics使用",
            analyticsContent: "Google Firebase Analyticsを通じてアプリパフォーマンスとユーザー体験改善のための匿名データを収集します。デバイス設定で分析データ収集を選択的に拒否できます。",
            
            // Section 5: Local Data Storage
            localStorageTitle: "ローカルデータ保存",
            localStorageSubtitle: "アプリ機能のためにデバイスのみに保存されるデータについて",
            localStorageContent: "アプリ機能のために以下のデータをデバイスに保存します：",
            localStorageList: [
                "アプリ環境設定：選択した基準通貨、言語設定、テーマ設定",
                "為替レートキャッシュ：オフライン機能のために一時的にキャッシュされた為替レート",
                "通貨履歴：クイックアクセスのための最近使用した通貨ペア",
                "アプリ設定：表示設定と通知設定"
            ],
            deviceOnlyTitle: "デバイス専用保存",
            deviceOnlyContent: "すべてのデータはデバイスのセキュア保存領域に安全に保管されます。データはデバイスを離れることはなく、外部サービスと同期されません。アプリ削除時にすべての保存データが永久的に削除されます。",
            
            // Section 6: Data Sharing
            dataSharingTitle: "データ共有とサードパーティサービス",
            dataSharingSubtitle: "分析データ処理とサードパーティサービス使用について",
            dataSharingContent: "Exchangoは以下の方法でデータを共有します：",
            dataSharingList: [
                "Firebase Analytics：匿名化されたアプリ使用統計とパフォーマンスデータ",
                "為替レートデータプロバイダー：為替レート情報要求時の標準ウェブ要求情報",
                "エラー報告サービス：アプリ安定性改善のための技術的エラー情報"
            ],
            noSaleTitle: "絶対に販売しません",
            noSaleContent: "個人情報はサードパーティに販売せず、広告目的で使用しません。収集されるすべての分析データは、アプリ改善目的のみに使用されます。",
            
            // Section 7: User Rights
            userRightsTitle: "あなたの権利",
            userRightsSubtitle: "個人情報に関連するあなたの権利について",
            userRightsContent: "Exchangoユーザーは以下の権利を有します：",
            userRightsList: [
                "分析拒否の権利：デバイス設定で分析データ収集を拒否できます",
                "データ削除の権利：アプリ削除時にすべてのローカルデータが完全に削除されます",
                "情報要求の権利：データ処理についての情報をいつでも要求できます",
                "透明性の権利：すべてのデータ処理について明確に知る権利があります"
            ],
            analyticsOptOutTitle: "分析オプトアウト方法",
            analyticsOptOutContent: "デバイス設定 → プライバシー → 分析と改善で無効化可能",
            dataDeleteTitle: "完全なデータ削除",
            dataDeleteContent: "アプリを削除すると保存されたすべてのデータが永久的に削除されます",
            
            // Contact & Footer
            contactTitle: "お問い合わせ",
            contactContent: "このプライバシーポリシーについてご質問がございましたら、下記連絡先までお問い合わせください。",
            contactEmail: "kr.knkim@kakao.com",
            footerCopyright: "© 2024 Exchango. すべての権利を保有。",
            footerMessage: "ユーザーのプライバシー保護とセキュリティのために最善を尽くします。"
        },
        
        zh: {
            title: "隐私政策 - Exchango",
            pageTitle: "隐私政策",
            pageSubtitle: "用户隐私保护是我们的最高优先级。",
            
            // Section 1: Overview
            overviewTitle: "概述",
            overviewSubtitle: "关于Exchango隐私政策和数据处理方式的信息",
            overviewContent: "此隐私政策明确了在使用Exchango货币转换应用时个人信息的收集、使用和保护方式。为了应用改进使用Google Firebase Analytics等分析工具，所有数据都经过匿名化处理。",
            privacyFirstTitle: "隐私优先设计",
            privacyFirstContent: "Exchango采用隐私保护优先设计。用户数据仅存储在设备上，个人识别信息不会被收集、存储或传输到外部服务器。",
            
            // Section 2: Privacy Principles
            principlesTitle: "隐私保护原则",
            principlesSubtitle: "我们维持的核心隐私保护原则",
            principle1Title: "仅本地存储",
            principle1Content: "所有数据仅存储在用户设备上。不支持外部存储或云同步。",
            principle2Title: "仅匿名分析数据",
            principle2Content: "不收集个人识别信息，仅收集用于应用改进的匿名化使用统计。",
            principle3Title: "安全设计",
            principle3Content: "为保护用户信息应用安全技术进行设计。",
            principle4Title: "透明度",
            principle4Content: "透明公开数据处理方式以维持可信度。",
            
            // Section 3: Data We Don't Collect
            noCollectTitle: "我们不收集的信息",
            noCollectSubtitle: "明确告知您我们绝对不收集的信息",
            noCollectContent: "Exchango不收集以下信息：",
            noCollectList: [
                "个人识别信息（姓名、邮箱、电话号码）",
                "金融账户信息或交易历史",
                "精确位置数据或GPS坐标",
                "个别设备标识符或广告ID",
                "联系人列表或社交媒体信息",
                "生物识别数据或认证凭据",
                "任何形式的个人可识别信息（PII）"
            ],
            
            // Section 4: Data We May Collect
            mayCollectTitle: "我们可能收集的匿名数据",
            mayCollectSubtitle: "关于为应用改进可能收集的匿名化数据信息",
            mayCollectContent: "为应用改进可能收集以下匿名化数据：",
            mayCollectList: [
                "应用使用统计：哪些功能被频繁使用、屏幕查看次数等",
                "设备信息：设备类型、操作系统版本（无法个人识别）",
                "错误报告：用于应用改进的技术错误信息",
                "一般使用模式：按功能使用频率、性能数据",
                "地区信息：用于默认货币设置的一般国家/地区信息"
            ],
            analyticsTitle: "Google Analytics使用",
            analyticsContent: "通过Google Firebase Analytics收集匿名数据以改善应用性能和用户体验。您可以在设备设置中选择性地拒绝分析数据收集。",
            
            // Section 5: Local Data Storage
            localStorageTitle: "本地数据存储",
            localStorageSubtitle: "关于仅在设备上存储的应用功能数据信息",
            localStorageContent: "为应用功能在设备上存储以下数据：",
            localStorageList: [
                "应用偏好设置：选择的基准货币、语言设置、主题设置",
                "汇率缓存：为离线功能临时缓存的汇率",
                "货币历史：为快速访问最近使用的货币对",
                "应用设置：显示设置和通知设置"
            ],
            deviceOnlyTitle: "仅设备存储",
            deviceOnlyContent: "所有数据都安全存储在设备的安全存储区域。数据不会离开设备，不会与外部服务同步。卸载应用时所有存储的数据将被永久删除。",
            
            // Section 6: Data Sharing
            dataSharingTitle: "数据共享和第三方服务",
            dataSharingSubtitle: "关于分析数据处理和第三方服务使用的信息",
            dataSharingContent: "Exchango通过以下方式共享数据：",
            dataSharingList: [
                "Firebase Analytics：匿名化的应用使用统计和性能数据",
                "汇率数据提供商：请求汇率信息时的标准网络请求信息",
                "错误报告服务：为应用稳定性改进的技术错误信息"
            ],
            noSaleTitle: "我们绝不销售",
            noSaleContent: "个人信息不会销售给第三方，不用于广告目的。所有收集的分析数据仅用于应用改进目的。",
            
            // Section 7: User Rights
            userRightsTitle: "您的权利",
            userRightsSubtitle: "关于您与个人信息相关的权利信息",
            userRightsContent: "Exchango用户拥有以下权利：",
            userRightsList: [
                "拒绝分析的权利：您可以在设备设置中拒绝分析数据收集",
                "数据删除权利：删除应用时所有本地数据将被完全删除",
                "信息请求权利：您可以随时请求关于数据处理的信息",
                "透明度权利：您有权明确了解所有数据处理"
            ],
            analyticsOptOutTitle: "如何选择退出分析",
            analyticsOptOutContent: "设备设置 → 隐私 → 分析与改进 可以被禁用",
            dataDeleteTitle: "完全数据删除",
            dataDeleteContent: "卸载应用时所有存储的数据将被永久删除",
            
            // Contact & Footer
            contactTitle: "联系我们",
            contactContent: "如果您对此隐私政策有任何问题，请通过以下地址联系我们。",
            contactEmail: "kr.knkim@kakao.com",
            footerCopyright: "© 2024 Exchango. 版权所有。",
            footerMessage: "我们将尽最大努力保护用户隐私和安全。"
        }
    };

    // Get current language from URL or default to English
    function getCurrentLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const langFromUrl = urlParams.get('lang');
        const langFromStorage = localStorage.getItem('exchango-language');
        return langFromUrl || langFromStorage || 'en';
    }

    // Set current language
    function setCurrentLanguage(lang) {
        const currentLang = getCurrentLanguage();
        const newLang = lang || currentLang;
        
        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('lang', newLang);
        window.history.replaceState({}, '', url);
        
        // Save to localStorage
        localStorage.setItem('exchango-language', newLang);
        
        return newLang;
    }

    // Get translation object for current language
    function getTranslations(lang) {
        return translations[lang] || translations.en;
    }

    // Apply text considering HTML content
    function applyText(element, text) {
        if (Array.isArray(text)) {
            // Handle arrays (like lists)
            element.innerHTML = text.map(item => `<li>${item}</li>`).join('');
        } else if (text.includes('<') && text.includes('>')) {
            element.innerHTML = text;
        } else {
            element.textContent = text;
        }
    }

    // Apply translations to page
    function applyTranslations() {
        const currentLang = getCurrentLanguage();
        const t = getTranslations(currentLang);
        
        console.log(`🔄 Applying ${currentLang} translations`);
        
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

        // Handle special cases for lists
        if (t.noCollectList) {
            const noCollectListEl = document.getElementById('no-collect-list');
            if (noCollectListEl) {
                noCollectListEl.innerHTML = t.noCollectList.map(item => `<li>${item}</li>`).join('');
            }
        }

        if (t.mayCollectList) {
            const mayCollectListEl = document.getElementById('may-collect-list');
            if (mayCollectListEl) {
                mayCollectListEl.innerHTML = t.mayCollectList.map(item => `<li><strong>${item.split(':')[0]}:</strong> ${item.split(':')[1] || item}</li>`).join('');
            }
        }

        if (t.localStorageList) {
            const localStorageListEl = document.getElementById('local-storage-list');
            if (localStorageListEl) {
                localStorageListEl.innerHTML = t.localStorageList.map(item => `<li><strong>${item.split(':')[0]}:</strong> ${item.split(':')[1] || item}</li>`).join('');
            }
        }

        if (t.dataSharingList) {
            const dataSharingListEl = document.getElementById('data-sharing-list');
            if (dataSharingListEl) {
                dataSharingListEl.innerHTML = t.dataSharingList.map(item => `<li><strong>${item.split(':')[0]}:</strong> ${item.split(':')[1] || item}</li>`).join('');
            }
        }

        if (t.userRightsList) {
            const userRightsListEl = document.getElementById('user-rights-list');
            if (userRightsListEl) {
                userRightsListEl.innerHTML = t.userRightsList.map(item => `<li><strong>${item.split(':')[0]}:</strong> ${item.split(':')[1] || item}</li>`).join('');
            }
        }

        // Update language selector active state
        updateLanguageSelector(currentLang);
        
        console.log('✅ Privacy Policy translations applied successfully');
    }

    // Update language selector active state
    function updateLanguageSelector(currentLang) {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang') || btn.getAttribute('href').split('lang=')[1];
            if (btnLang === currentLang) {
                btn.style.background = 'rgba(255, 255, 255, 0.2)';
                btn.style.color = 'white';
            } else {
                btn.style.background = 'transparent';
                btn.style.color = 'rgba(255, 255, 255, 0.8)';
            }
        });
    }

    // Change language function
    window.changeLanguage = function(lang) {
        console.log(`🔄 Changing language to: ${lang}`);
        setCurrentLanguage(lang);
        applyTranslations();
    };

    // Initialize on page load
    function init() {
        const currentLang = setCurrentLanguage();
        console.log(`🚀 Privacy Policy initialized with language: ${currentLang}`);
        applyTranslations();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();