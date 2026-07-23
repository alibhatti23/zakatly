import type { Language } from "../types/language"

export const TRANSLATIONS = {
  en: {
    appTitle: "Zakatly",
    appSubtitle: "Free, accurate Zakat calculator",

    navHome: "Calculator",
    navAbout: "About",
    navGuide: "Zakat Guide",
    navPrivacy: "Privacy",
    footerTagline: "Free and open source, with nothing sent to a server.",
    footerGithub: "View source on GitHub",
    footerRights: "Zakatly. Built to help, free for everyone.",

    guideTitle: "Zakat Guide",
    guideIntro: "Plain-language answers to the questions people ask most about Zakat.",
    guideQ1: "What is Zakat?",
    guideA1:
      "Zakat is an obligatory annual payment of 2.5% on wealth that has stayed above the Nisab threshold for a full lunar year, given to those entitled to receive it.",
    guideQ2: "What is Nisab?",
    guideA2:
      "Nisab is the minimum amount of wealth someone must have before Zakat becomes due. It is set as the value of 87.48g of gold or 612.36g of silver; you can pick either basis in the calculator.",
    guideQ3: "Which assets are zakatable?",
    guideA3:
      "Cash and bank balances, gold and silver, investments like stocks and crypto, business inventory and receivables, and property held for investment or resale. Short-term debts are deducted from the total first.",
    guideQ4: "What is not zakatable?",
    guideA4:
      "Your primary home, personal-use vehicles, and everyday household items are not zakatable. They are excluded from every category in this calculator.",
    guideQ5: "Should I use the gold or silver Nisab?",
    guideA5:
      "Both are classical, accepted standards. The silver Nisab is a lower amount, so some scholars prefer it as more precautionary since it makes more wealth zakatable, which benefits the poor. The choice is yours in the Fiqh standard toggle.",
    guideQ6: "Is this a substitute for asking a scholar?",
    guideA6:
      "No. This calculator is a tool to help with the arithmetic. For your specific situation, especially anything unusual, please confirm with a qualified scholar.",

    nisabTitle: "Nisab setup",
    nisabDescription: "Enter today's gold and silver rate to work out your Nisab threshold.",
    nisabCurrency: "Currency",
    nisabGoldRate: "Gold price per gram",
    nisabSilverRate: "Silver price per gram",
    nisabGoldNisabLabel: "Gold Nisab (87.48g)",
    nisabSilverNisabLabel: "Silver Nisab (612.36g)",
    nisabEnterGold: "Enter gold rate",
    nisabEnterSilver: "Enter silver rate",
    nisabFetchLive: "Fetch live rate (USD)",
    nisabFetching: "Fetching live rate...",
    nisabLiveUsdOnly: "Live rate fetch is only available when currency is set to USD.",
    nisabFetchError: "Could not fetch live rates right now. Enter the rate manually instead.",

    fiqhTitle: "Fiqh standard toggle",
    fiqhDescription:
      "Choose whether your Nisab threshold is based on gold or silver. Both are classical standards; the silver Nisab is a lower amount, so scholars who prefer it consider it more precautionary since more wealth becomes zakatable.",
    fiqhGoldOption: "Gold Nisab",
    fiqhSilverOption: "Silver Nisab",
    fiqhApplicableNisab: "Applicable Nisab",

    cashTitle: "Cash and bank",
    cashDescription: "Add your savings, bank balances, wallets, and cash in hand.",
    cashPlaceholder: "e.g. Savings account",
    cashAddButton: "Add cash or bank entry",
    cashTooltip:
      "Cash, savings, and bank balances are fully zakatable each year since they are held wealth, not fixed assets.",

    investmentsTitle: "Investments",
    investmentsDescription: "Add the current market value of stocks, crypto, and sukuk you hold.",
    investmentsPlaceholder: "e.g. Stock portfolio",
    investmentsAddButton: "Add investment",
    investmentsTooltip:
      "Stocks, crypto, and sukuk held for growth or trading are zakatable at their current market value.",

    businessAssetsTitle: "Business assets",
    businessAssetsDescription:
      "Add the value of trade inventory and money owed to you by customers.",
    businessAssetsPlaceholder: "e.g. Stock inventory",
    businessAssetsAddButton: "Add business asset",
    businessAssetsTooltip:
      "Trade inventory and receivables are zakatable since they are held for sale or expected to convert to cash.",

    realEstateTitle: "Real estate",
    realEstateDescription: "Add property held for investment or resale. Your own home is not zakatable.",
    realEstatePlaceholder: "e.g. Rental plot",
    realEstateAddButton: "Add property",
    realEstateTooltip:
      "Property held for investment or resale is zakatable at its market value. A primary residence is not.",

    goldSilverTitle: "Gold and silver",
    goldSilverDescription:
      "Add jewelry, coins, and bars by weight. Value is worked out using the rate you set in Nisab setup.",
    goldSilverTooltip:
      "Gold and silver are zakatable regardless of use, based on the classical evidence specific to these two metals.",
    goldSilverRatePrompt: "Set a gold or silver rate in Nisab setup above to see values here.",
    goldSilverAddButton: "Add gold or silver item",
    goldOption: "Gold",
    silverOption: "Silver",

    liabilitiesTitle: "Liabilities",
    liabilitiesDescription:
      "Add short-term debts due now, such as loans or bills, to deduct from your total.",
    liabilitiesPlaceholder: "e.g. Personal loan",
    liabilitiesAddButton: "Add liability",

    total: "Total",

    resultTitle: "Result and summary",
    resultDescription: "A breakdown of your zakatable wealth against your chosen Nisab.",
    resultGoldSilver: "Gold and silver",
    resultLiabilities: "Liabilities",
    resultTotalWealth: "Total zakatable wealth",
    resultApplicableNisab: "Applicable Nisab",
    resultSetRate: "Set a rate in Nisab setup",
    resultZakatDue: "Zakat due (2.5%)",
    resultNotDue: "Your total wealth is below the Nisab threshold, so Zakat is not due this year.",
    resultEnterRate: "Enter a gold or silver rate above to find out if Zakat is due.",
  },
  ur: {
    appTitle: "زکاتلی",
    appSubtitle: "مفت اور درست زکوٰۃ کیلکولیٹر",

    navHome: "کیلکولیٹر",
    navAbout: "تعارف",
    navGuide: "زکوٰۃ گائیڈ",
    navPrivacy: "پرائیویسی",
    footerTagline: "مکمل طور پر مفت اور اوپن سورس، کوئی ڈیٹا سرور پر نہیں جاتا۔",
    footerGithub: "GitHub پر سورس دیکھیں",
    footerRights: "زکاتلی۔ مدد کے لیے بنایا گیا، سب کے لیے مفت۔",

    guideTitle: "زکوٰۃ گائیڈ",
    guideIntro: "زکوٰۃ کے بارے میں سب سے زیادہ پوچھے جانے والے سوالات کے آسان جوابات۔",
    guideQ1: "زکوٰۃ کیا ہے؟",
    guideA1:
      "زکوٰۃ اس دولت پر 2.5% کی سالانہ لازمی ادائیگی ہے جو ایک مکمل قمری سال تک نصاب سے زیادہ رہی ہو، اور یہ حقداروں کو دی جاتی ہے۔",
    guideQ2: "نصاب کیا ہے؟",
    guideA2:
      "نصاب وہ کم از کم دولت ہے جس کے بعد زکوٰۃ واجب ہوتی ہے۔ یہ 87.48 گرام سونے یا 612.36 گرام چاندی کی مالیت کے برابر مقرر ہے؛ آپ کیلکولیٹر میں کوئی بھی بنیاد منتخب کر سکتے ہیں۔",
    guideQ3: "کن اثاثوں پر زکوٰۃ واجب ہے؟",
    guideA3:
      "نقدی اور بینک بیلنس، سونا اور چاندی، حصص اور کرپٹو جیسی سرمایہ کاری، کاروباری سٹاک اور واجبات، اور سرمایہ کاری یا فروخت کے لیے رکھی گئی جائیداد۔ قلیل مدتی قرض پہلے کل رقم سے منہا کیے جاتے ہیں۔",
    guideQ4: "کن چیزوں پر زکوٰۃ واجب نہیں؟",
    guideA4:
      "آپ کا ذاتی گھر، ذاتی استعمال کی گاڑیاں، اور روزمرہ گھریلو اشیاء زکوٰۃ کے قابل نہیں۔ انہیں اس کیلکولیٹر کی ہر کیٹگری سے خارج رکھا گیا ہے۔",
    guideQ5: "سونے یا چاندی کا نصاب استعمال کروں؟",
    guideA5:
      "دونوں مستند اور معتبر معیار ہیں۔ چاندی کا نصاب کم ہوتا ہے، اس لیے کچھ علماء اسے زیادہ احتیاطی سمجھتے ہیں کیونکہ اس سے زیادہ دولت زکوٰۃ کے قابل ہوتی ہے، جو غریبوں کے لیے فائدہ مند ہے۔ انتخاب فقہی معیار ٹوگل میں آپ کا اپنا ہے۔",
    guideQ6: "کیا یہ عالم سے پوچھنے کا متبادل ہے؟",
    guideA6:
      "نہیں۔ یہ کیلکولیٹر صرف حساب کتاب میں مدد کے لیے ایک آلہ ہے۔ اپنی مخصوص صورتحال کے لیے، خاص طور پر کسی غیر معمولی معاملے میں، کسی مستند عالم سے ضرور تصدیق کریں۔",

    nisabTitle: "نصاب کی ترتیب",
    nisabDescription: "اپنا نصاب معلوم کرنے کے لیے آج کی سونے اور چاندی کی قیمت درج کریں۔",
    nisabCurrency: "کرنسی",
    nisabGoldRate: "سونے کی قیمت فی گرام",
    nisabSilverRate: "چاندی کی قیمت فی گرام",
    nisabGoldNisabLabel: "سونے کا نصاب (87.48 گرام)",
    nisabSilverNisabLabel: "چاندی کا نصاب (612.36 گرام)",
    nisabEnterGold: "سونے کی قیمت درج کریں",
    nisabEnterSilver: "چاندی کی قیمت درج کریں",
    nisabFetchLive: "لائیو قیمت حاصل کریں (USD)",
    nisabFetching: "لائیو قیمت حاصل کی جا رہی ہے...",
    nisabLiveUsdOnly: "لائیو قیمت صرف USD کرنسی پر دستیاب ہے۔",
    nisabFetchError: "ابھی لائیو قیمت حاصل نہیں ہو سکی۔ براہ کرم قیمت خود درج کریں۔",

    fiqhTitle: "فقہی معیار",
    fiqhDescription:
      "منتخب کریں کہ آپ کا نصاب سونے پر مبنی ہو یا چاندی پر۔ دونوں معتبر معیار ہیں؛ چاندی کا نصاب کم ہوتا ہے، اس لیے کچھ علماء اسے زیادہ احتیاطی سمجھتے ہیں۔",
    fiqhGoldOption: "سونے کا نصاب",
    fiqhSilverOption: "چاندی کا نصاب",
    fiqhApplicableNisab: "قابلِ اطلاق نصاب",

    cashTitle: "نقدی اور بینک",
    cashDescription: "اپنی بچت، بینک بیلنس، اور نقد رقم شامل کریں۔",
    cashPlaceholder: "مثلاً بچت اکاؤنٹ",
    cashAddButton: "نقدی یا بینک اندراج شامل کریں",
    cashTooltip: "نقدی اور بینک بیلنس ہر سال مکمل طور پر زکوٰۃ کے قابل ہیں۔",

    investmentsTitle: "سرمایہ کاری",
    investmentsDescription: "اپنے حصص، کرپٹو، اور صکوک کی موجودہ مالیت شامل کریں۔",
    investmentsPlaceholder: "مثلاً حصص کا پورٹ فولیو",
    investmentsAddButton: "سرمایہ کاری شامل کریں",
    investmentsTooltip: "سرمایہ کاری کی موجودہ مارکیٹ ویلیو پر زکوٰۃ واجب ہے۔",

    businessAssetsTitle: "کاروباری اثاثے",
    businessAssetsDescription: "تجارتی سٹاک اور گاہکوں کے ذمے واجب رقم شامل کریں۔",
    businessAssetsPlaceholder: "مثلاً سٹاک انوینٹری",
    businessAssetsAddButton: "کاروباری اثاثہ شامل کریں",
    businessAssetsTooltip: "تجارتی سامان اور واجبات فروخت کے لیے رکھے جانے کی وجہ سے زکوٰۃ کے قابل ہیں۔",

    realEstateTitle: "جائیداد",
    realEstateDescription: "سرمایہ کاری یا فروخت کے لیے رکھی گئی جائیداد شامل کریں۔ ذاتی گھر زکوٰۃ کے قابل نہیں۔",
    realEstatePlaceholder: "مثلاً کرایہ کا پلاٹ",
    realEstateAddButton: "جائیداد شامل کریں",
    realEstateTooltip: "سرمایہ کاری یا فروخت کے لیے جائیداد اس کی مارکیٹ ویلیو پر زکوٰۃ کے قابل ہے۔",

    goldSilverTitle: "سونا اور چاندی",
    goldSilverDescription: "زیورات، سکے، اور بارز وزن کے حساب سے شامل کریں۔",
    goldSilverTooltip: "سونا اور چاندی استعمال سے قطع نظر زکوٰۃ کے قابل ہیں۔",
    goldSilverRatePrompt: "قیمتیں دیکھنے کے لیے اوپر نصاب کی ترتیب میں شرح درج کریں۔",
    goldSilverAddButton: "سونا یا چاندی شامل کریں",
    goldOption: "سونا",
    silverOption: "چاندی",

    liabilitiesTitle: "واجبات",
    liabilitiesDescription: "قرض یا بل جیسے واجبات شامل کریں جو کل رقم سے منہا ہوں گے۔",
    liabilitiesPlaceholder: "مثلاً ذاتی قرض",
    liabilitiesAddButton: "واجب شامل کریں",

    total: "کل رقم",

    resultTitle: "نتیجہ اور خلاصہ",
    resultDescription: "آپ کی زکوٰۃ کے قابل دولت کا نصاب کے مقابلے میں خلاصہ۔",
    resultGoldSilver: "سونا اور چاندی",
    resultLiabilities: "واجبات",
    resultTotalWealth: "کل زکوٰۃ کے قابل دولت",
    resultApplicableNisab: "قابلِ اطلاق نصاب",
    resultSetRate: "نصاب کی ترتیب میں شرح درج کریں",
    resultZakatDue: "واجب الادا زکوٰۃ (2.5%)",
    resultNotDue: "آپ کی دولت نصاب سے کم ہے، اس لیے اس سال زکوٰۃ واجب نہیں۔",
    resultEnterRate: "زکوٰۃ کا حساب معلوم کرنے کے لیے اوپر شرح درج کریں۔",
  },
} as const satisfies Record<Language, Record<string, string>>

export type TranslationKey = keyof (typeof TRANSLATIONS)["en"]
