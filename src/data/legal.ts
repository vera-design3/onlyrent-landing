export interface LegalSection {
  h: string;
  body: string;
}

export interface LegalDoc {
  title: string;
  effective: string;
  sections: LegalSection[];
}

export interface LegalData {
  zh: { terms: LegalDoc; privacy: LegalDoc };
  en: { terms: LegalDoc; privacy: LegalDoc };
}

// Legal documents — Terms and Privacy, ZH + EN
export const LEGAL: LegalData = {
  zh: {
    terms: {
      title: "Only Rent 服務條款",
      effective: "生效日期：2026年3月1日",
      sections: [
        { h: "第一條　平台資訊與法律性質", body: `Only Rent（以下稱「本平台」）係由 Only Rent Technology (S) Pte. Ltd.（依新加坡法律設立並合法存續之公司）所經營。本平台為線上技術媒合平台，提供服務提供者（以下稱「達人」）與服務需求者（以下稱「客戶」）刊登資訊、建立聯繫、促成交易及整合第三方金流服務之技術服務。

本平台僅提供資訊展示與交易技術架構，不參與任何實際履約行為，亦非達人或客戶之代理人、受僱人、合夥人或共同經營者。達人與客戶之間所成立之任何服務契約，均為雙方直接成立，本平台並非契約當事人。

達人於本平台提供服務之法律地位為獨立承攬人，並非本平台之員工、代理人或代表人。達人與本平台之間不存在僱傭關係、勞動契約關係或合夥關係。本平台不負擔任何勞動法上之義務，包括但不限於工資給付、加班費、勞工保險、職業災害補償、退休金提撥或其他類似責任。

使用本平台即表示您已閱讀、理解並同意本條款全部內容，並同意以電子方式表示同意具有與書面簽署相同之法律效力。` },
        { h: "第二條　使用資格與帳號管理", body: `使用本平台者須年滿十八歲並具完全法律行為能力。未滿十八歲者不得註冊或使用本平台服務。

使用者於註冊時應提供真實、完整且有效之個人資料。平台得要求進行手機驗證、電子郵件驗證或政府核發之身分證明文件上傳。若使用者未完成驗證或提供不實資料，平台得限制、暫停或終止其帳號及相關功能之使用。

使用者應妥善保管帳號與密碼。因帳號遭未授權使用所生之損失，除可歸責於平台之情形外，平台不負責任。` },
        { h: "第三條　服務性質與風險揭露", body: `本平台僅為技術媒合平台，不對任何服務內容之真實性、合法性、品質、適用性或履約能力提供明示或默示之保證。本平台對服務之持續可用性、無錯誤性或符合使用者特定目的之適用性不作任何保證。

達人與客戶應自行評估交易風險並承擔履約結果所生之一切法律責任。凡因服務履行所生之人身傷害、財產損失、履約爭議或侵權責任，均由交易雙方自行承擔。本平台不提供任何保險保障，亦不對使用者是否投保商業責任保險或意外保險負責。

在法律允許之最大範圍內，本平台對任何間接、附帶、懲罰性或衍生性損害不負責任。本平台對單一使用者之總責任，以該使用者於過去十二個月內實際支付予本平台之總金額為上限。

本平台僅提供技術驗證與資訊展示機制，並不保證任何使用者身分之絕對真實性、服務能力或履約誠信。即使使用者已完成實名驗證或第三方支付審核程序，該等程序亦僅為合規驗證措施之一部分，不構成對其行為或資格之保證。使用者應自行判斷交易風險並承擔相應後果。` },
        { h: "第四條　達人資格、金流與稅務責任", body: `凡透過本平台完成交易並取得報酬之達人，應具備完全行為能力，並依法提供真實、完整之身分及相關資料。

交易款項由第三方支付機構 綠界科技股份有限公司（ECPay Co., Ltd.）依其法令遵循機制完成收款及相關金流作業後，依本平台規則辦理款項撥付。

於本平台依法被認定為扣繳義務人或實際給付單位之情形下，本平台得依中華民國相關稅法及全民健康保險法規定，依達人身分、所得性質及法定標準，自達人應得報酬中依法扣繳個人所得稅及二代健保補充保費，並辦理法定申報程序。

前項扣繳比例、適用門檻、計算方式及扣繳順序，均依當時有效法令、本平台公告規則及主管機關實務見解辦理。

本平台之扣繳及申報行為，僅屬依法履行法定義務，不因此與達人間成立僱傭、勞動、合夥、代理或其他從屬關係。達人與客戶間所成立之服務契約，均為雙方直接成立，本平台不為契約當事人。

達人應自行依法辦理年度所得申報。扣繳金額僅為依法暫扣之稅費，最終應納稅額仍應以達人依法辦理年度申報之結果為準。本平台不對達人最終稅負結果負保證責任。

如相關法令、主管機關實務見解或金流結構變動，本平台得依法調整扣繳機制、給付方式或合作金流機構，並依規定公告之。` },
        { h: "第五條　平台服務費與分帳機制", body: `本平台對每筆成功完成並經確認之訂單，依訂單成交總金額向達人收取平台服務費。現行標準費率為百分之二十五（25%）。

前項所稱「訂單成交總金額」，係指客戶就該筆服務所實際支付之全部金額，不包含依法應扣繳之稅費或依法不得計入平台收入之款項（如有）。

平台服務費係按訂單成交總金額計算，並於訂單完成並確認後，優先自交易款項中扣除。該平台服務費屬本平台提供技術媒合、系統架構、資料處理、金流整合、資訊安全、風險控管、信用評價機制、客服支援、行銷推廣及整體平台維運服務之對價，並非達人所得之一部分。

扣除平台服務費後之餘額，始為達人之應得報酬。相關依法應扣繳之個人所得稅及二代健保補充保費，將依第四條規定，自該應得報酬中依法扣除。

本平台得依達人等級、交易量、服務類型、推廣活動、合作方案或其他營運策略，採行差異化或分級費率制度。具體費率標準及適用條件，依本平台公告為準。

交易款項目前透過第三方支付機構 綠界科技股份有限公司（ECPay Co., Ltd.）辦理收付與分帳作業。本平台保留依營運需求更換合作金流機構或調整分帳機制之權利。

達人及客戶不得於透過本平台建立聯繫後私下完成交易或以其他方式規避平台服務費。如經查證屬實，本平台得依違規情節採取警告、限制功能、凍結金流、終止帳號或請求損害賠償等措施。` },
        { h: "第六條　禁止行為", body: `使用者不得利用本平台從事任何違法或不當行為，包括但不限於色情服務、賭博、毒品交易、非法金融活動、未經授權之專業醫療行為、詐騙、傳銷或侵害第三人權益之行為。

平台得於不事先通知之情況下，刪除違規內容、凍結帳號、限制金流或終止服務，並於必要時配合法律機關調查。` },
        { h: "第七條　評價制度與演算法權限", body: `本平台設有雙向評價機制。評分採動態加權平均方式計算。本平台可能基於自動化處理機制進行排序、信用評分或風險評估。平台保留隨時調整評分規則、演算法排序邏輯與權重比例之權利。

若因系統錯誤、技術異常或非可歸責於使用者之原因導致評分異常，平台得依內部審查結果進行修正。` },
        { h: "第八條　違約、取消與帳號處分", body: `達人於接受訂單後，應依約履行服務。如無正當理由未履約、遲到、提前離場或重大違反服務承諾，經平台審查屬實者，平台得依違規情節輕重採取警告、限制接單功能、降低排序權重、暫停帳號或終止帳號等處分。

前項所稱「正當理由」，包括但不限於不可抗力、突發重大疾病、重大交通事故或其他不可歸責於達人之事由。達人應於合理時間內通知平台並提供相關證明。

客戶於達人尚未接受訂單前，得隨時取消訂單且不收取費用。

達人接受訂單後，系統將提供客戶十五（15）分鐘之冷靜取消期間。於該期間內取消者，得全額退款。

逾前述冷靜期間後，訂單即視為確定成立。除因不可歸責於客戶之事由（包括但不限於達人未履約、重大服務瑕疵、或依法應退款之情形）外，客戶不得任意取消訂單，平台原則上不予退款。

如客戶未依約定時間到場、無故失聯或拒絕履行交易，經平台審查屬實者，視為違約，平台得不予退款。

客戶或達人對違約認定或處分結果如有異議，得依本條款第十四條之爭議處理機制提出申訴。

前述違約處理與退款規定之適用，應符合誠信原則及消費者保護法之強制規範。

平台得基於風險管理、法令遵循或營運需求，調整相關履約規則、處分機制或取消政策，並依規定公告之。` },
        { h: "第九條　智慧財產權與內容授權", body: `本平台之程式碼、設計、商標、系統架構及內容均屬本公司或合法授權人所有。未經書面同意，不得擅自使用。

使用者於本平台發佈之公開內容，授權本平台於全球範圍內以非專屬、可轉授權之方式使用於平台營運、展示及行銷推廣用途。` },
        { h: "第十條　不可抗力", body: `因天災、戰爭、政府命令、重大系統攻擊、電力或通訊中斷或其他不可抗力因素導致服務中斷、延遲或無法履行者，本平台不負任何責任。` },
        { h: "第十一條　法律適用與爭議解決", body: `本條款之成立、效力、解釋及履行，原則上以新加坡法律為準據法。

惟如使用者之居住地或服務實際履行地之法律對消費者保護、勞動保護、個人資料保護或其他屬強制性規範事項另有強制適用規定者，該等強制性規範應優先適用。

雙方同意，除依法不得仲裁之事項外，因本條款或本平台服務所生之任何爭議，應提交新加坡國際仲裁中心（Singapore International Arbitration Centre, SIAC）依其當時有效之仲裁規則進行仲裁。仲裁地為新加坡，仲裁語言為英文。

本平台保留於依法有管轄權之法院提起訴訟或申請保全處分之權利。` },
        { h: "第十二條　語言優先、條款可分割性與完整協議", body: `本條款如有中英文版本差異，以英文版本為準。若本條款任何部分被認定為無效或不可執行，其餘部分仍持續有效。本條款構成使用者與本平台之完整協議，並取代雙方先前一切口頭或書面約定。` },
        { h: "第十三條　使用者賠償責任、主管機關配合與條款存續", body: `使用者同意，如因其違反本條款、違反相關法律規定或侵害任何第三人權利，致本平台、Only Rent Technology (S) Pte. Ltd. 或其董事、員工、代理人、合作夥伴或關係企業遭受任何損害、請求、索賠、行政處分或訴訟，使用者應負完全賠償責任，並賠償本平台因此所生之一切損失、費用與支出，包括合理之律師費、訴訟費用與處理費用。

本平台得依法配合司法機關、主管機關或其他依法有權機構之調查、命令或要求，並於法律允許之範圍內提供必要資料或資訊。使用者理解並同意，本平台於符合法律規定之情形下依法配合前述調查或要求者，不因此對使用者負任何違約或侵權責任。

有關責任限制、智慧財產權、內容授權、使用者賠償責任及爭議解決之條款，於帳號終止、服務停止或本條款終止後仍繼續有效。` },
        { h: "第十四條　訂單爭議、客服處理與退款機制", body: `如客戶或達人對服務品質、履約情形、金額計算或其他交易事項存有爭議，應於訂單完成後二十四小時內透過平台客服系統提出申訴，並提供合理相關證據，包括但不限於通訊紀錄、照片、影音資料、交易紀錄或其他佐證文件。

平台得基於風險控管與爭議處理需要，暫時凍結相關款項，並通知雙方於指定期間內提出說明或補充資料。

平台客服將依內部審查流程進行初步審核，包括證據完整性確認、交易紀錄核對及風險評估。必要時，平台得要求雙方補充說明或提供額外證據。

平台僅提供協調與審查機制，並非仲裁人或司法機關。平台之處理結果係基於當時可得資料作成之營運判斷，並不影響雙方依法循司法途徑主張權利。

如達人無故未履約，經審查屬實者，平台得協助辦理退款並對達人帳號採取相應處分。

如客戶提出惡意申訴、提供不實資料或濫用退款機制，平台得依違規情節限制其帳號或終止服務。

除法律另有強制規定外，平台不保證任何爭議處理結果必然符合任一方主張。` },
        { h: "第十五條　款項撥付與風險控管", body: `訂單完成後之款項撥付，應依第三方支付機構之作業規範及銀行作業時間處理。實際入帳時間可能因金融機構、假日或風險審查而有所延遲。

如涉及詐欺疑慮、洗錢防制審查或主管機關調查，平台或第三方支付機構得依法暫停或延遲撥付相關款項。

使用者理解並同意，款項處理受第三方支付機構規範拘束，平台不對銀行處理時間或第三方審查結果負責。

第三方支付機構、銀行或其他金融服務提供者所作之風險控管決定、帳戶凍結、延遲撥付或交易拒絕，屬該等機構依其法令遵循與內部政策所為之獨立決定，不構成本平台之決定或行為。本平台不對該等第三方之審查標準或作業結果負責。` },
        { h: "第十六條　使用者聲明與保證", body: `使用者聲明並保證：

一、其所提供之資料與服務內容真實、合法且不侵害第三人權益；
二、如提供需具備專業資格或執照之服務，已依法取得相關資格；
三、不利用本平台從事任何違法或不當活動；
四、客戶所提出之需求合法且不涉及違法目的。

如違反上述聲明致平台或第三人受損，使用者應負完全賠償責任。` },
        { h: "第十七條　帳號處分機制", body: `平台得視違規情節採取以下措施：

一、警告
二、限制部分功能
三、暫停帳號
四、凍結金流
五、永久停權

涉及詐欺、重大侵權、暴力威脅、黃賭毒或其他重大違法行為者，平台得不經事前通知直接永久停權。` },
        { h: "第十八條　侵權申訴與下架機制", body: `任何權利人認為其智慧財產權或其他合法權益遭侵害，得向平台提出書面通知並提供合理證明文件。

平台得於合理審查後暫時下架相關內容。若使用者提出反通知並提供合理說明，平台得恢復內容或建議雙方循法律途徑解決。` },
        { h: "第十九條　通知與送達", body: `平台對使用者之通知，得以平台內公告、應用程式通知、簡訊或電子郵件方式為之。通知發出後，視為已於合理時間內送達。使用者應確保其聯絡資料為最新且有效。` },
      ],
    },
    privacy: {
      title: "Only Rent 隱私政策",
      effective: "生效日期：2026年3月1日",
      sections: [
        { h: "第一條　政策目的與適用範圍", body: `本隱私政策適用於 Only Rent Technology (S) Pte. Ltd.（以下稱「本公司」）所經營之 Only Rent 平台（以下稱「本平台」）。本政策說明本平台如何蒐集、處理、利用、保存及保護使用者之個人資料。

本公司為本平台之個人資料控制者（Data Controller）。本公司於蒐集與處理個人資料時，將遵循新加坡《Personal Data Protection Act》（PDPA）及適用於使用者所在地之強制性資料保護法規，包括但不限於台灣《個人資料保護法》。

如使用者所在地法律對個人資料保護事項另有強制規定者，該等規定應優先適用。

如您對本隱私政策或個人資料處理事項有任何疑問、請求或申訴，得透過電子郵件 support@onlyrent.sg 聯繫本公司。本公司將於合理期間內回覆相關請求。

使用本平台即表示您已閱讀並同意本隱私政策之內容。` },
        { h: "第二條　蒐集之資料類型", body: `本平台可能蒐集下列類型之資料：

• 身分識別資料，包括姓名、出生日期、身分證字號或護照號碼、居留證號碼及其他依法可識別個人身分之資料；
• 聯絡資料，包括手機號碼、電子郵件地址及通訊地址；
• 帳號與交易資料，包括服務紀錄、訂單內容、付款紀錄、退款紀錄及評價紀錄；
• 裝置與技術資料，包括 IP 位址、裝置識別碼、裝置型號、作業系統版本、瀏覽紀錄、Cookie 資訊及應用程式使用行為紀錄；
• 定位相關資料（如使用者同意授權），包括使用者主動輸入或同意授權之地理位置資訊；
• 客服與通訊資料，包括透過客服系統、電子郵件或平台內訊息往來之內容。

金流相關資料由第三方支付機構處理，本平台不儲存完整信用卡號或銀行卡資訊。

資料來源包括：使用者自行提供之資料、使用過程中自動產生之技術資料，以及第三方支付機構或合作服務商依法回傳之必要驗證資訊。

本平台僅於達成特定處理目的所必要之最小範圍內蒐集與處理個人資料，並避免蒐集與服務無直接關聯之過度資料。` },
        { h: "第二條之一　應用程式權限使用說明", body: `為提供完整功能與良好使用體驗，本平台之應用程式於取得使用者同意後，可能依實際功能需求請求下列裝置權限：

一、相簿／照片存取權限（讀取儲存）
用於使用者於發布貼文、技能、任務或其他內容時，自裝置相簿選取圖片並上傳至本平台展示或作為交易、服務相關資料之附加內容。

二、相機權限（CAMERA）
用於使用者進行身分驗證時拍攝照片，或於服務履行、爭議處理、內容上傳及其他相關功能中拍攝圖片作為紀錄或佐證資料。

三、麥克風權限（RECORD_AUDIO）
用於使用者拍攝影片或使用需錄音之功能時同步錄製音訊，以提供完整影音內容或作為功能操作之一部分。

四、位置權限（LOCATION）
用於取得使用者位置資訊，以推薦附近任務、媒合服務需求、確認服務地址、優化搜尋結果、提供地圖定位功能及協助交易安全管理。使用者得依裝置設定選擇是否授權精確位置或約略位置資訊。

五、本地網路存取權限
用於偵測裝置與應用程式之網路連線狀態、確認服務功能是否可正常運作、協助裝置間或區域網路相關之技術連線需求，並提升連線穩定性與服務品質。

前項各項權限，僅於使用者主動使用相應功能時始會啟用。本平台不會於未經使用者允許之情況下，於背景主動蒐集與前述權限無關之資料。使用者得隨時透過其裝置或作業系統設定管理、關閉或撤回前述權限。惟如使用者拒絕授權、關閉或撤回特定權限，可能導致本平台部分功能無法正常使用、完整提供或達成預期效果。本平台僅於達成特定功能目的之必要範圍內使用透過前述權限取得之資料，並依本隱私政策及適用法令辦理蒐集、處理、利用、保存與保護。` },
        { h: "第三條　資料處理之合法依據", body: `本平台蒐集與處理個人資料之合法依據包括：

一、履行使用者與本平台間之契約；
二、依法應履行之法律義務；
三、使用者之明示或默示同意；
四、本公司為維護平台安全、交易秩序與正常營運所具備之正當商業利益。` },
        { h: "第四條　資料使用目的", body: `本平台蒐集之資料將用於：身分驗證、安全管理、交易處理、金流整合、客服支援、風險控管、詐騙防制、爭議處理、法令遵循、數據分析及營運優化。

本平台可能基於自動化處理機制進行內容排序、信用評分或風險評估，以維護交易安全與服務品質。該等自動化處理可能依據使用者之交易紀錄、評價紀錄、履約情形或使用行為資料進行綜合分析。

該等自動化處理不構成具法律上最終效力之決定。如使用者對相關結果有異議，得向客服申請人工審查。

本平台得依使用者同意發送行銷資訊、推播通知或電子郵件。使用者得隨時於應用程式設定中關閉行銷推播，或依電子郵件退訂機制取消訂閱。但與交易安全、帳戶風險或系統通知相關之必要通知不屬行銷範圍。` },
        { h: "第五條　第三方共享、技術服務與委外處理", body: `為提供完整服務，本平台可能將必要資料提供予第三方合作機構，包括但不限於：

• 第三方支付機構；
• 雲端服務供應商；
• 資料儲存與伺服器託管服務商；
• 地圖服務 API 提供商；
• 數據分析與系統監測服務商；
• 推播通知與通訊服務商；
• 依法有權之主管機關或司法機關。

本平台可能使用第三方技術工具或軟體開發套件（SDK）以優化系統運作與使用者體驗。該等第三方僅於其服務範圍內接觸必要之技術資料，並應遵守保密與資料保護義務。

本平台不出售或出租使用者個人資料予任何商業第三方。` },
        { h: "第六條　跨境資料傳輸", body: `使用者資料可能儲存或處理於新加坡、台灣或其他具備適當資料保護標準之國家或地區。本平台將依相關法律規範採取合理技術與組織措施，確保跨境資料傳輸過程中之安全性與合法性。` },
        { h: "第七條　資料保存期限與帳號刪除", body: `本平台於達成蒐集目的所必要期間內保存個人資料。

依法應保存之交易與財務資料至少保存五年或依相關法規保存更長期間。

當使用者申請刪除帳號時，本平台將停止其帳戶使用權，並於合理期間內刪除或匿名化其個人資料。但為遵守法律義務、處理爭議、預防詐欺、履行財務或稅務保存義務所需之資料，得依相關法令保存至法定期限屆滿。

系統備份資料可能於技術作業週期內延遲刪除，但將於正常備份輪替機制下自動清除。` },
        { h: "第八條　資料安全措施與安全事件處理", body: `本平台採取合理且適當之技術與組織措施保護資料安全，包括但不限於：

• 加密傳輸；
• 權限分級控管；
• 存取監控；
• 資料備份；
• 定期安全審查。

惟網路傳輸並非絕對安全，本平台無法保證資料傳輸之絕對安全性。

如發生可能導致個人資料遭未授權存取、洩露、毀損或滅失之安全事件，本平台將依法進行調查，並於法律規定期限內通知相關主管機關及受影響之使用者，並說明可能影響之資料類型及已採取之補救措施。

惟若資料外洩係因不可抗力因素、無法合理預見或防範之第三方惡意攻擊、或非可歸責於本平台之事由所致，本平台於法律允許範圍內不負損害賠償責任。` },
        { h: "第九條　使用者權利", body: `使用者得依法行使下列權利：

• 查詢或請求閱覽個人資料；
• 請求製給複製本；
• 請求補充或更正；
• 請求停止蒐集、處理或利用；
• 請求刪除；
• 撤回同意。

本平台將於合理期間內處理相關申請，通常不超過三十日。` },
        { h: "第十條　未成年人資料處理", body: `本平台不對未滿十八歲者提供服務。如發現未成年人於未經法定代理人同意下提供個人資料，本平台將立即停止處理並刪除相關資料。` },
        { h: "第十一條　Cookie 與技術識別", body: `本平台可能使用 Cookie、裝置識別碼及類似技術以提升使用體驗、進行數據分析與安全監控。使用者得透過裝置或瀏覽器設定管理 Cookie。但停用部分技術功能可能影響平台部分服務正常運作。` },
        { h: "第十二條　政策修改", body: `本平台得因法令變更或營運需求修改本隱私政策。重大修改將以平台公告、應用程式通知或電子郵件方式通知使用者。修改後之政策將載明生效日期。使用者於政策生效後繼續使用本平台，即視為同意修改後內容。` },
      ],
    },
  },
  en: {
    terms: {
      title: "Only Rent Terms and Conditions",
      effective: "Effective Date: March 1, 2026",
      sections: [
        { h: "Article 1 Platform Information and Legal Nature", body: `Only Rent (the “Platform”) is operated by Only Rent Technology (S) Pte. Ltd., a company duly incorporated and validly existing under the laws of Singapore. The Platform is an online technology-based matching platform that provides technical services enabling service providers (“Service Providers”) and service requesters (“Customers”) to publish information, establish contact, facilitate transactions, and integrate third-party payment services.

The Platform only provides information display and transaction-related technical infrastructure. It does not participate in the actual performance of any services and shall not be deemed the agent, employee, partner, or joint operator of any Service Provider or Customer. Any service contract formed between a Service Provider and a Customer is entered into directly between such parties, and the Platform is not a party to such contract.

The legal status of a Service Provider offering services through the Platform is that of an independent contractor, and not an employee, agent, or representative of the Platform. No employment relationship, labor relationship, or partnership exists between the Platform and any Service Provider. The Platform assumes no obligations under labor laws, including but not limited to wage payment, overtime pay, labor insurance, occupational injury compensation, pension contributions, or any other similar liabilities.

By using the Platform, you acknowledge that you have read, understood, and agreed to all terms of these Terms and Conditions, and you further agree that your electronic acceptance shall have the same legal effect as a handwritten signature.` },
        { h: "Article 2 Eligibility and Account Management", body: `Users of the Platform must be at least eighteen (18) years old and have full legal capacity. Persons under the age of eighteen (18) may not register for or use the Platform’s services.

Users must provide true, complete, and valid personal information upon registration. The Platform may require mobile phone verification, email verification, or the upload of government-issued identification documents.

Users are responsible for properly safeguarding their account credentials and passwords. The Platform shall not be liable for any loss arising from unauthorized use of an account unless such loss is attributable to the Platform.` },
        { h: "Article 3 Nature of Services and Risk Disclosure", body: `The Platform is solely a technology-based matching platform and makes no express or implied representations or warranties regarding the authenticity, legality, quality, suitability, or performance capability of any service content.

Service Providers and Customers shall independently evaluate the risks of any transaction and shall bear all legal liabilities arising from the performance of services. Any personal injury, property damage, performance dispute, or tort liability arising from service performance shall be borne solely by the transacting parties.

To the fullest extent permitted by law, the Platform shall not be liable for any indirect, incidental, punitive, or consequential damages. The Platform’s total liability to any single user shall be limited to the total amount actually paid by such user to the Platform during the preceding twelve (12) months.` },
        { h: "Article 4 Service Provider Qualifications, Payment Processing, and Tax Responsibilities", body: `Any Service Provider who completes transactions and receives compensation through the Platform must have full legal capacity and must lawfully provide true and complete identity information and related documents.

Transaction funds shall be collected and processed by ECPay Co., Ltd. in accordance with its legal and compliance procedures, and disbursed in accordance with the Platform’s rules.

Where the Platform is legally deemed to be a withholding agent or the actual paying entity, the Platform may withhold individual income tax and second-generation National Health Insurance supplementary premiums from the compensation payable to the Service Provider in accordance with the applicable tax laws of the R.O.C (Taiwan) and the National Health Insurance Act.

Service Providers shall be solely responsible for filing their annual income tax returns in accordance with applicable law. Any amount withheld is only a provisional statutory withholding, and the final tax liability shall be determined based on the Service Provider’s annual tax filing.` },
        { h: "Article 5 Platform Service Fees and Revenue Allocation Mechanism", body: `For each successfully completed and confirmed order, the Platform shall charge the Service Provider a platform service fee based on the total transaction amount of the order. The current standard fee rate is twenty-five percent (25%).

The platform service fee shall be calculated based on the total transaction amount of the order and shall be deducted first from the transaction funds after the order has been completed and confirmed.

The Platform may adopt differentiated or tiered fee rates based on Service Provider level, transaction volume, service type, promotional activities, cooperation plans, or other operational strategies.

Service Providers and Customers shall not complete transactions privately or otherwise evade the Platform’s service fees after establishing contact through the Platform. If verified, the Platform may take measures according to the severity of the violation, including warnings, functional restrictions, fund freezing, account termination, or claims for damages.` },
        { h: "Article 6 Prohibited Conduct", body: `Users shall not use the Platform to engage in any unlawful or improper conduct, including but not limited to prostitution or sexual services, gambling, drug transactions, illegal financial activities, unauthorized professional medical practice, fraud, pyramid selling, or any conduct that infringes the rights of third parties.

The Platform may, without prior notice, remove violating content, freeze accounts, restrict fund flows, or terminate services.` },
        { h: "Article 7 Rating System and Algorithmic Authority", body: `The Platform operates a mutual rating system. Ratings are calculated based on a dynamically weighted average method. The Platform may conduct ranking, credit scoring, or risk assessment based on automated processing mechanisms.

If abnormal ratings result from system errors, technical issues, or reasons not attributable to the user, the Platform may make corrections based on its internal review results.` },
        { h: "Article 8 Breach, Cancellation, and Account Sanctions", body: `After accepting an order, a Service Provider shall perform the service as agreed. If, without justified reason, the Service Provider fails to perform, arrives late, leaves early, or materially breaches the service commitment, the Platform may impose sanctions depending on the seriousness of the violation.

A Customer may cancel an order at any time without charge before the Service Provider has accepted the order.

After the Service Provider accepts the order, the system will provide the Customer with a fifteen (15) minute cooling-off cancellation period. If the order is cancelled within such period, the Customer shall be entitled to a full refund.

After the expiration of the aforementioned cooling-off period, the order shall be deemed final and binding.` },
        { h: "Article 9 Intellectual Property and Content License", body: `The Platform’s code, designs, trademarks, system architecture, and content are owned by the Company or its lawful licensors. No person may use them without prior written consent.

Any public content posted by users on the Platform is licensed to the Platform on a worldwide, non-exclusive, sublicensable basis for platform operation, display, and marketing purposes.` },
        { h: "Article 10 Force Majeure", body: `The Platform shall not be liable for any interruption, delay, or inability to perform caused by natural disasters, war, government orders, major system attacks, power outages, communication failures, or any other force majeure events.` },
        { h: "Article 11 Governing Law and Dispute Resolution", body: `The formation, validity, interpretation, and performance of these Terms and Conditions shall, in principle, be governed by the laws of Singapore.

Any dispute arising out of or in connection with these Terms and Conditions or the Platform’s services shall be submitted to the Singapore International Arbitration Centre (SIAC) for arbitration. The seat of arbitration shall be Singapore, and the language of arbitration shall be English.` },
        { h: "Article 12 Language Priority, Severability, and Entire Agreement", body: `In the event of any discrepancy between the Chinese and English versions of these Terms and Conditions, the English version shall prevail. If any provision is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.` },
        { h: "Article 13 User Indemnification, Cooperation with Authorities, and Survival", body: `The user agrees that if the Platform, Only Rent Technology (S) Pte. Ltd., or its directors, employees, agents, partners, or affiliates suffers any loss, claim, demand, administrative penalty, or legal proceeding as a result of the user’s breach, the user shall bear full responsibility and shall indemnify the Platform.

The provisions relating to limitation of liability, intellectual property, content licensing, user indemnification, and dispute resolution shall survive the termination of any account.` },
        { h: "Article 14 Order Disputes, Customer Service Handling, and Refund Mechanism", body: `If a Customer or Service Provider has any dispute, such party shall submit a complaint through the Platform’s customer service system within twenty-four (24) hours after order completion and provide relevant supporting evidence.

The Platform may temporarily freeze the relevant funds for risk control and dispute handling purposes.

The Platform only provides coordination and review mechanisms and is not an arbitrator or judicial authority.` },
        { h: "Article 15 Fund Disbursement and Risk Control", body: `Disbursement of funds after order completion shall be handled in accordance with the operating procedures of the third-party payment institution and the processing time of relevant banks.

Where there are suspicions of fraud, anti-money laundering review requirements, or investigations by competent authorities, the Platform or the third-party payment institution may lawfully suspend or delay the disbursement of relevant funds.` },
        { h: "Article 16 User Representations and Warranties", body: `Users represent and warrant that:

1. the information and service content they provide are true, lawful, and do not infringe the rights of any third party;
2. where the services provided require professional qualifications or licenses, such qualifications or licenses have been lawfully obtained;
3. they will not use the Platform for any unlawful or improper activities; and
4. any request posted by a Customer is lawful.` },
        { h: "Article 17 Account Sanction Mechanism", body: `Depending on the seriousness of the violation, the Platform may impose: warning; restriction of certain functions; account suspension; freezing of funds; or permanent account termination.

Where fraud, serious infringement, violent threats, prostitution, gambling, drugs, or other major unlawful conduct is involved, the Platform may permanently terminate the relevant account immediately without prior notice.` },
        { h: "Article 18 Infringement Complaints and Takedown Mechanism", body: `Any rights holder who believes that their intellectual property rights or other lawful rights have been infringed may submit a written notice to the Platform together with reasonable supporting documentation.

The Platform may temporarily remove the relevant content after reasonable review.` },
        { h: "Article 19 Notices and Service", body: `The Platform may provide notices to users by in-platform announcements, application notifications, SMS messages, or email. Any notice shall be deemed duly delivered within a reasonable period after it is sent.` },
      ],
    },
    privacy: {
      title: "Only Rent Privacy Policy",
      effective: "Effective Date: March 1, 2026",
      sections: [
        { h: "Article 1 Purpose and Scope of This Policy", body: `This Privacy Policy applies to the Only Rent platform (the “Platform”) operated by Only Rent Technology (S) Pte. Ltd. (the “Company”). This Policy explains how the Platform collects, processes, uses, stores, and protects users’ personal data.

The Company is the data controller of the Platform. In collecting and processing personal data, the Company will comply with Singapore’s Personal Data Protection Act (PDPA) and any mandatory data protection laws applicable in the user’s jurisdiction, including but not limited to Taiwan’s Personal Data Protection Act.

If you have any questions, requests, or complaints regarding this Privacy Policy, you may contact the Company at support@onlyrent.sg.` },
        { h: "Article 2 Categories of Data Collected", body: `The Platform may collect:

• Identity data (name, date of birth, national ID/passport number, etc.);
• Contact data (mobile phone, email, mailing address);
• Account and transaction data (service records, orders, payment, refunds, ratings);
• Device and technical data (IP, device ID, OS, cookies, usage records);
• Location data (where authorized);
• Customer service and communication data.

Payment-related data is processed by third-party payment institutions, and the Platform does not store complete credit card or bank card information.

The Platform only collects and processes personal data to the minimum extent necessary.` },
        { h: "Article 3 Legal Basis for Data Processing", body: `The legal bases on which the Platform collects and processes personal data include:

1. performance of the contract between the user and the Platform;
2. compliance with legal obligations;
3. the user’s express or implied consent; and
4. the Company’s legitimate business interests in maintaining platform security, transaction order, and normal operations.` },
        { h: "Article 4 Purposes of Data Use", body: `The data collected by the Platform will be used for: identity verification, security management, transaction processing, payment integration, customer support, risk control, fraud prevention, dispute handling, legal compliance, data analysis, and operational optimization.

The Platform may carry out content ranking, credit scoring, or risk assessment based on automated processing mechanisms.

Subject to the user’s consent, the Platform may send marketing messages, push notifications, or emails. Users may disable marketing push notifications in the application settings.` },
        { h: "Article 5 Third-Party Sharing, Technical Services, and Outsourced Processing", body: `To provide complete services, the Platform may provide necessary data to third-party partners, including:

• third-party payment institutions;
• cloud service providers;
• data storage and server hosting providers;
• map service API providers;
• data analytics and system monitoring service providers;
• push notification and communication service providers;
• competent authorities lawfully entitled to access such data.

The Platform does not sell or lease users’ personal data to any commercial third party.` },
        { h: "Article 6 Cross-Border Data Transfers", body: `User data may be stored or processed in Singapore, Taiwan, or other countries or regions that provide an appropriate standard of data protection.

The Platform will adopt reasonable technical and organizational measures in accordance with applicable law.` },
        { h: "Article 7 Data Retention Period and Account Deletion", body: `The Platform will retain personal data for the period necessary to fulfill the purposes for which it was collected.

Transaction and financial data required to be retained by law shall be kept for at least five (5) years.

When a user requests deletion of an account, the Platform will terminate access and will delete or anonymize the user’s personal data within a reasonable period.` },
        { h: "Article 8 Data Security Measures and Security Incident Handling", body: `The Platform adopts reasonable and appropriate technical and organizational measures to protect data security, including encrypted transmission, tiered access controls, access monitoring, data backup, and regular security reviews.

However, internet transmission is not absolutely secure, and the Platform cannot guarantee absolute security of data transmission.

If a security incident occurs, the Platform will conduct an investigation and notify affected parties within the legally required time.` },
        { h: "Article 9 User Rights", body: `Users may exercise the following rights:

• inquire about or request access to personal data;
• request a copy;
• request supplementation or correction;
• request cessation of collection, processing, or use;
• request deletion;
• withdraw consent.

The Platform will handle such requests within a reasonable period, usually not exceeding thirty (30) days.` },
        { h: "Article 10 Processing of Minors’ Data", body: `The Platform does not provide services to persons under the age of eighteen (18). If the Platform becomes aware that a minor has provided personal data without the consent of a legal guardian, the Platform will immediately cease processing such data and delete it.` },
        { h: "Article 11 Cookies and Technical Identifiers", body: `The Platform may use cookies, device identifiers, and similar technologies to improve user experience, conduct data analysis, and maintain security monitoring. Users may manage cookies through their device or browser settings.` },
        { h: "Article 12 Policy Amendments", body: `The Platform may amend this Privacy Policy due to changes in law or operational needs. Material amendments will be notified to users through platform announcements, application notifications, or email.` },
      ],
    },
  },
};
