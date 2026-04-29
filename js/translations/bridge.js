/**
 * Bridge (download) page translations — 14 languages.
 * Ported from the legacy download-translations.js into the unified system.
 */
(function () {
    'use strict';
    if (!window.ExchangoI18N) return;

    window.ExchangoI18N.register('bridge', {
        ko: {
            bridgeDocTitle: 'Exchango AI - 앱 다운로드',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: '전 세계를 위한 스마트 환율 계산기',
            bridgeAppDescription: '150개 이상의 통화로 환전, 계산, 경비 분할',
            bridgeLoadingText: '앱 스토어로 이동 중...',
            bridgeHelpText: '자동 이동이 안 되나요?<br>스토어 버튼을 눌러주세요'
        },
        en: {
            bridgeDocTitle: 'Exchango AI - Download App',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'Your Global Currency Companion',
            bridgeAppDescription: 'Convert, calculate, and split expenses across 150+ currencies',
            bridgeLoadingText: 'Redirecting to App Store...',
            bridgeHelpText: 'Not redirecting?<br>Tap your store button'
        },
        ja: {
            bridgeDocTitle: 'Exchango AI - アプリダウンロード',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'グローバル通貨コンパニオン',
            bridgeAppDescription: '150以上の通貨で両替、計算、経費分割',
            bridgeLoadingText: 'App Storeへ移動中...',
            bridgeHelpText: '自動で移動しませんか?<br>ストアボタンを押してください'
        },
        zh: {
            bridgeDocTitle: 'Exchango AI - 下载应用',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: '全球货币伴侣',
            bridgeAppDescription: '150多种货币的兑换、计算和费用分摊',
            bridgeLoadingText: '正在跳转到应用商店...',
            bridgeHelpText: '没有自动跳转?<br>点击商店按钮'
        },
        es: {
            bridgeDocTitle: 'Exchango AI - Descargar App',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'Tu Compañero de Divisas Global',
            bridgeAppDescription: 'Convierte, calcula y divide gastos en más de 150 monedas',
            bridgeLoadingText: 'Redirigiendo a la App Store...',
            bridgeHelpText: '¿No se redirige?<br>Toca el botón de tu tienda'
        },
        fr: {
            bridgeDocTitle: "Exchango AI - Télécharger l'App",
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'Votre Compagnon de Devises Mondial',
            bridgeAppDescription: 'Convertissez, calculez et divisez les dépenses dans plus de 150 devises',
            bridgeLoadingText: "Redirection vers l'App Store...",
            bridgeHelpText: 'Pas de redirection?<br>Appuyez sur le bouton de votre magasin'
        },
        de: {
            bridgeDocTitle: 'Exchango AI - App herunterladen',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'Ihr globaler Währungsbegleiter',
            bridgeAppDescription: 'Konvertieren, berechnen und teilen Sie Ausgaben in über 150 Währungen',
            bridgeLoadingText: 'Weiterleitung zum App Store...',
            bridgeHelpText: 'Keine Weiterleitung?<br>Tippen Sie auf Ihre Store-Schaltfläche'
        },
        it: {
            bridgeDocTitle: 'Exchango AI - Scarica App',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'Il Tuo Compagno di Valute Globale',
            bridgeAppDescription: 'Converti, calcola e dividi le spese in oltre 150 valute',
            bridgeLoadingText: "Reindirizzamento all'App Store...",
            bridgeHelpText: 'Non si reindirizza?<br>Tocca il pulsante del tuo store'
        },
        pt: {
            bridgeDocTitle: 'Exchango AI - Baixar App',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'Seu Companheiro de Moedas Global',
            bridgeAppDescription: 'Converta, calcule e divida despesas em mais de 150 moedas',
            bridgeLoadingText: 'Redirecionando para a App Store...',
            bridgeHelpText: 'Não está redirecionando?<br>Toque no botão da sua loja'
        },
        ru: {
            bridgeDocTitle: 'Exchango AI - Скачать приложение',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'Ваш Глобальный Валютный Помощник',
            bridgeAppDescription: 'Конвертируйте, рассчитывайте и делите расходы в более чем 150 валютах',
            bridgeLoadingText: 'Перенаправление в App Store...',
            bridgeHelpText: 'Не перенаправляет?<br>Нажмите кнопку вашего магазина'
        },
        ar: {
            bridgeDocTitle: 'Exchango AI - تحميل التطبيق',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'رفيقك العالمي للعملات',
            bridgeAppDescription: 'تحويل وحساب وتقسيم النفقات عبر أكثر من 150 عملة',
            bridgeLoadingText: 'إعادة التوجيه إلى App Store...',
            bridgeHelpText: 'لا يتم إعادة التوجيه؟<br>انقر على زر المتجر الخاص بك'
        },
        hi: {
            bridgeDocTitle: 'Exchango AI - ऐप डाउनलोड करें',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'आपका वैश्विक मुद्रा साथी',
            bridgeAppDescription: '150+ मुद्राओं में परिवर्तित करें, गणना करें और खर्च विभाजित करें',
            bridgeLoadingText: 'App Store पर रीडायरेक्ट किया जा रहा है...',
            bridgeHelpText: 'रीडायरेक्ट नहीं हो रहा?<br>अपने स्टोर बटन पर टैप करें'
        },
        th: {
            bridgeDocTitle: 'Exchango AI - ดาวน์โหลดแอป',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'ผู้ช่วยสกุลเงินทั่วโลกของคุณ',
            bridgeAppDescription: 'แปลง คำนวณ และแบ่งค่าใช้จ่ายในสกุลเงินกว่า 150 สกุล',
            bridgeLoadingText: 'กำลังเปลี่ยนเส้นทางไปยัง App Store...',
            bridgeHelpText: 'ไม่เปลี่ยนเส้นทางอัตโนมัติ?<br>แตะปุ่มสโตร์ของคุณ'
        },
        tr: {
            bridgeDocTitle: 'Exchango AI - Uygulamayı İndir',
            bridgeAppTitle: 'Exchango AI',
            bridgeAppTagline: 'Küresel Para Birimi Yardımcınız',
            bridgeAppDescription: "150'den fazla para biriminde dönüştürün, hesaplayın ve harcamaları bölün",
            bridgeLoadingText: "App Store'a yönlendiriliyor...",
            bridgeHelpText: 'Yönlendirilmiyor musunuz?<br>Mağaza düğmenize dokunun'
        }
    });
})();
