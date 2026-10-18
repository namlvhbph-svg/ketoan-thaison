/* ============================================
   NGÂN HÀNG CÂU HỎI BỔ SUNG - KẾ TOÁN THÁI SƠN
   (Tự sinh từ ai_ketoan/data/questions/*.json)
   ============================================ */

QUESTIONS_DB.push(...[
  {
    "id": 1001,
    "code": "ACCA001",
    "category": "acca_f3",
    "question": "According to the IASB Conceptual Framework, which qualitative characteristic ensures financial information faithfully represents what it purports to represent?",
    "options": [
      "Relevance",
      "Faithful Representation (Completeness, Neutrality, Freedom from Error)",
      "Comparability",
      "Timeliness"
    ],
    "correct": 1,
    "explanation": "IASB Conceptual Framework 2018: Two fundamental characteristics: (1) Relevance (makes a difference to decisions — materiality); (2) Faithful Representation (complete, neutral, free from material error). Enhancing characteristics: Comparability, Verifiability, Timeliness, Understandability."
  },
  {
    "id": 1002,
    "code": "ACCA002",
    "category": "acca_f3",
    "question": "Under IAS 2 Inventories, the cost of inventory should NOT include:",
    "options": [
      "Purchase price",
      "Import duties and freight costs",
      "Selling costs and distribution overheads",
      "Conversion costs"
    ],
    "correct": 2,
    "explanation": "IAS 2: Cost of Inventories = Purchase price + Costs of purchase (freight, duties) + Conversion costs (direct labor, overheads). Excluded: Selling costs, storage costs (after production), abnormal waste, administrative overheads NOT related to bringing inventory to present location/condition. FIFO and Weighted Average are permitted; LIFO is NOT permitted under IFRS."
  },
  {
    "id": 1003,
    "code": "ACCA003",
    "category": "acca_f3",
    "question": "IAS 16 Property, Plant and Equipment: Which method is NOT an acceptable depreciation method?",
    "options": [
      "Straight-line method",
      "Reducing balance method",
      "Units of production method",
      "Replacement cost method"
    ],
    "correct": 3,
    "explanation": "IAS 16 acceptable depreciation methods: (1) Straight-line; (2) Reducing/Diminishing balance; (3) Units of production. The method should reflect the pattern of expected consumption of future economic benefits. 'Replacement cost' is not a depreciation method — it's a valuation approach for some assets. Depreciation starts when available for use and ceases when derecognised."
  },
  {
    "id": 1004,
    "code": "ACCA004",
    "category": "acca_f3",
    "question": "Under IAS 37 Provisions, Contingent Liabilities and Contingent Assets, a provision should be recognised when:",
    "options": [
      "Management decides to make a provision",
      "There is a present obligation (legal or constructive) from a past event, probable outflow of resources, and reliable estimate can be made",
      "There is a possible obligation from a past event",
      "A potential liability is disclosed in the notes"
    ],
    "correct": 1,
    "explanation": "IAS 37 Recognition Criteria (all 3 must be met): (1) Present obligation (legal or constructive) as a result of a past event; (2) Probable outflow of economic resources (>50%); (3) Reliable estimate of the obligation. If only possible (not probable) → Contingent Liability → disclose only. If remote → no disclosure needed."
  },
  {
    "id": 1005,
    "code": "ACCA005",
    "category": "acca_f3",
    "question": "The statement of cash flows under IAS 7 has three sections. Which is NOT one of them?",
    "options": [
      "Operating activities",
      "Investing activities",
      "Financing activities",
      "Administrative activities"
    ],
    "correct": 3,
    "explanation": "IAS 7 Statement of Cash Flows: Three sections: (1) Operating Activities (cash from core business); (2) Investing Activities (purchase/sale of non-current assets, investments); (3) Financing Activities (loans, share issues, dividends paid). Two methods for Operating: Direct (show gross cash receipts/payments) or Indirect (start from profit, adjust non-cash items). Under IFRS, dividends received can be Operating or Investing; dividends paid can be Operating or Financing."
  },
  {
    "id": 1006,
    "code": "ACCA006",
    "category": "acca_f3",
    "question": "Under IFRS 15 Revenue from Contracts with Customers, the 5-step model Step 3 is:",
    "options": [
      "Identify the contract",
      "Determine the transaction price",
      "Determine the transaction price allocated to each performance obligation",
      "Identify performance obligations"
    ],
    "correct": 2,
    "explanation": "IFRS 15 Five-step model: Step 1: Identify the contract; Step 2: Identify performance obligations; Step 3: Determine the transaction price; Step 4: Allocate the transaction price to performance obligations; Step 5: Recognize revenue when/as performance obligation is satisfied. Revenue recognized = when (or as) control transfers to customer."
  },
  {
    "id": 1007,
    "code": "ACCA007",
    "category": "acca_f3",
    "question": "IAS 38 Intangible Assets: Research costs should be:",
    "options": [
      "Capitalised as intangible assets",
      "Expensed as incurred",
      "Capitalised if they meet the recognition criteria",
      "Deferred until the project is complete"
    ],
    "correct": 1,
    "explanation": "IAS 38 distinguishes Research phase from Development phase: Research → ALWAYS expense (no future benefit certainty). Development → capitalise IF all 6 criteria met (PIRATE: Probable future economic benefits, Intention to complete, Resources available, Ability to sell/use, Technical feasibility, Expenditure can be measured reliably). Internally generated goodwill, brands → NOT recognised."
  },
  {
    "id": 1008,
    "code": "ACCA008",
    "category": "acca_f3",
    "question": "A company has non-current assets with cost $500,000, accumulated depreciation $150,000. They are revalued to $400,000. The revaluation surplus is:",
    "options": [
      "$50,000 credit to P&L",
      "$50,000 credit to Other Comprehensive Income (OCI)",
      "$100,000 credit to OCI",
      "$50,000 debit to retained earnings"
    ],
    "correct": 1,
    "explanation": "Revaluation under IAS 16: Carrying amount before revaluation = 500,000 − 150,000 = $350,000. Revalued amount = $400,000. Surplus = 400,000 − 350,000 = $50,000. Dr Asset (gross) + Cr Accumulated Depreciation + Cr Revaluation Reserve (OCI). Surplus goes to Other Comprehensive Income (equity), NOT to P&L. Reversal of previous revaluation loss → P&L gain."
  },
  {
    "id": 1009,
    "code": "ACCA009",
    "category": "acca_f3",
    "question": "The accounting equation after recording a $10,000 bank loan is:",
    "options": [
      "Assets decrease, Liabilities increase",
      "Assets increase by $10,000, Liabilities increase by $10,000",
      "Equity increases by $10,000",
      "Assets increase, Equity increases"
    ],
    "correct": 1,
    "explanation": "Recording a bank loan: Dr Bank $10,000 / Cr Loan payable $10,000. Effect: Assets (bank) +$10,000, Liabilities (loan) +$10,000. The accounting equation remains balanced: Assets = Liabilities + Equity. This is a financing transaction, not revenue, so equity is unaffected."
  },
  {
    "id": 1010,
    "code": "ACCA010",
    "category": "acca_f3",
    "question": "Under IAS 10 Events After the Reporting Period, which is an ADJUSTING event?",
    "options": [
      "A major acquisition announced after year-end",
      "Discovery after year-end that inventory was held at a value above its net realisable value at year-end",
      "A large fire destroying a factory in January (year-end December 31)",
      "Announcement of dividends after year-end"
    ],
    "correct": 1,
    "explanation": "IAS 10 Adjusting events: Provide evidence of conditions that existed AT the reporting date. Example: Inventory NRV issue existed at 31/12 → adjust inventory downward. Non-adjusting: Conditions arise AFTER year-end (fire in January, major acquisition, dividends declared after year-end). If non-adjusting but material → disclose in notes."
  },
  {
    "id": 1011,
    "code": "ACCA011",
    "category": "acca_f3",
    "question": "Earnings Per Share (EPS) basic calculation uses:",
    "options": [
      "Total profit / Total shares issued",
      "Profit after tax attributable to ordinary shareholders / Weighted average number of ordinary shares",
      "Total revenue / Total shares outstanding",
      "Profit before tax / Total shares"
    ],
    "correct": 1,
    "explanation": "Basic EPS (IAS 33): Numerator = Profit after tax − Preference dividends (profit available to ordinary shareholders). Denominator = Weighted average number of ordinary shares during the period (time-apportioned for issues/buybacks). Diluted EPS: Also includes effect of dilutive potential ordinary shares (share options, convertible bonds)."
  },
  {
    "id": 1012,
    "code": "ACCA012",
    "category": "acca_f3",
    "question": "IAS 17/IFRS 16 Leases: Under IFRS 16 (effective 2019), a lessee with a 5-year lease should:",
    "options": [
      "Expense all lease payments as operating costs",
      "Recognise a right-of-use asset and a lease liability on the balance sheet",
      "Only disclose the lease in the notes",
      "Recognise as a finance lease only if ownership transfers"
    ],
    "correct": 1,
    "explanation": "IFRS 16 (replacing IAS 17 for lessees): ALL leases (except short-term ≤12 months and low-value assets) → lessee recognises: (1) Right-of-use (ROU) asset; (2) Lease liability (PV of future lease payments). Income statement: Depreciation on ROU asset + Interest on lease liability (front-loaded). Lessor accounting unchanged from IAS 17."
  },
  {
    "id": 1013,
    "code": "ACCA013",
    "category": "acca_f3",
    "question": "Which ratio measures a company's ability to pay short-term obligations with its most liquid assets?",
    "options": [
      "Current ratio = Current Assets / Current Liabilities",
      "Quick ratio = (Current Assets − Inventories) / Current Liabilities",
      "Gearing ratio = Debt / (Debt + Equity)",
      "Asset turnover = Revenue / Total Assets"
    ],
    "correct": 1,
    "explanation": "Quick Ratio (Acid Test) = (Current Assets − Inventories − Prepayments) / Current Liabilities. Measures ability to meet short-term obligations WITHOUT selling inventory (most illiquid current asset). Quick ratio > 1 is generally healthy. Current ratio includes all current assets (>1 is typical benchmark). Quick ratio is more conservative."
  },
  {
    "id": 1014,
    "code": "ACCA014",
    "category": "acca_f3",
    "question": "The purpose of the trial balance in the accounting process is to:",
    "options": [
      "Confirm no errors have occurred in the accounting records",
      "Check that total debits equal total credits and provide a starting point for preparing financial statements",
      "Replace the need for a general ledger",
      "Show profit and loss for the period"
    ],
    "correct": 1,
    "explanation": "Trial Balance: A list of all general ledger account balances showing debit and credit columns. Purpose: (1) Check mathematical accuracy (debits = credits); (2) Starting point for preparing income statement and balance sheet. It does NOT reveal: Errors of omission, commission, principle, original entry, or compensating errors. Adjusted trial balance includes period-end adjustments."
  },
  {
    "id": 1015,
    "code": "ACCA015",
    "category": "acca_f3",
    "question": "Under the going concern assumption in the Conceptual Framework, if a company is expected to be liquidated within 12 months, financial statements should be:",
    "options": [
      "Prepared on normal historical cost basis",
      "Prepared on a break-up/liquidation basis and the reason disclosed",
      "Not prepared at all",
      "Prepared on current value basis"
    ],
    "correct": 1,
    "explanation": "Going Concern (IAS 1 / Conceptual Framework): Financial statements are normally prepared assuming the entity will continue for the foreseeable future (≥12 months). If management concludes the entity is NOT a going concern (e.g., liquidation planned): (1) Prepare FS on break-up/liquidation basis (NRV for assets, all liabilities as current); (2) Disclose reason prominently. Auditor issues emphasis of matter or modified opinion."
  },
  {
    "id": 1016,
    "code": "CPA001",
    "category": "cpa_viet_nam",
    "question": "Kiểm toán viên hành nghề (CPA VN) phải có tối thiểu bao nhiêu giờ cập nhật kiến thức bắt buộc (CPE) mỗi năm?",
    "options": [
      "20 giờ",
      "40 giờ",
      "80 giờ",
      "120 giờ"
    ],
    "correct": 1,
    "explanation": "Theo Luật Kiểm toán độc lập 2011 và Thông tư hướng dẫn của VACPA: KTV hành nghề phải hoàn thành tối thiểu 40 giờ CPE (Continuing Professional Education) mỗi năm, trong đó ít nhất 20 giờ phải là các môn học theo yêu cầu của VACPA. Không đủ CPE → không được cấp chứng chỉ hành nghề năm sau."
  },
  {
    "id": 1017,
    "code": "CPA002",
    "category": "cpa_viet_nam",
    "question": "Hạn chế độc lập (Independence threat) của kiểm toán viên xảy ra khi nào?",
    "options": [
      "Khi KTV không quen biết khách hàng",
      "Khi KTV có lợi ích tài chính, quan hệ gia đình, quan hệ kinh doanh với khách hàng được kiểm toán",
      "Khi KTV làm việc cho công ty kiểm toán lớn",
      "Khi KTV không có kinh nghiệm về ngành của khách"
    ],
    "correct": 1,
    "explanation": "Các loại threat (mối đe dọa độc lập) theo ISA 200 / VSA 200: (1) Self-interest: KTV sở hữu cổ phiếu khách hàng; (2) Self-review: KTV kiểm toán công việc mình làm; (3) Familiarity: Quan hệ thân thiết lâu dài; (4) Intimidation: Bị khách hàng đe dọa; (5) Advocacy: KTV bào chữa cho khách hàng. → Phải từ chối hợp đồng hoặc áp dụng biện pháp bảo vệ."
  },
  {
    "id": 1018,
    "code": "CPA003",
    "category": "cpa_viet_nam",
    "question": "Ý kiến kiểm toán 'chấp nhận toàn phần' (Unqualified/Unmodified Opinion) có nghĩa là:",
    "options": [
      "BCTC hoàn toàn không có sai sót",
      "BCTC trình bày trung thực và hợp lý trên tất cả các khía cạnh trọng yếu theo chuẩn mực kế toán áp dụng",
      "KTV đảm bảo không có gian lận",
      "BCTC đã được CQT xác nhận"
    ],
    "correct": 1,
    "explanation": "Ý kiến chấp nhận toàn phần: BCTC trình bày trung thực và hợp lý (presents fairly in all material respects) theo VAS/IFRS áp dụng. KHÔNG có nghĩa là không có sai sót — chỉ là sai sót không vượt mức trọng yếu. KTV cũng không đảm bảo 100% không có gian lận (reasonable assurance, not absolute)."
  },
  {
    "id": 1019,
    "code": "CPA004",
    "category": "cpa_viet_nam",
    "question": "Mức trọng yếu tổng thể (Overall Materiality) trong kiểm toán thường được xác định dựa trên:",
    "options": [
      "Quy định cố định của Bộ Tài chính",
      "Phán xét chuyên môn của KTV dựa trên benchmark (ví dụ: 5% lợi nhuận trước thuế, 0.5-1% tổng doanh thu, 1-2% tổng tài sản)",
      "Mức 10% tổng tài sản",
      "Mức mà BGĐ yêu cầu"
    ],
    "correct": 1,
    "explanation": "Trọng yếu (ISA 320): KTV xác định dựa trên phán xét chuyên môn về benchmark phù hợp với loại hình DN: Lợi nhuận ổn định → 5% LN trước thuế; DN thua lỗ → 0.5-1% DT; Ngân hàng, bảo hiểm → 0.5-1% tổng TS. Performance materiality thường 50-75% overall materiality. Có thể thấp hơn nếu có rủi ro đặc biệt."
  },
  {
    "id": 1020,
    "code": "CPA005",
    "category": "cpa_viet_nam",
    "question": "Thủ tục kiểm toán 'Gửi thư xác nhận' (Confirmation) trong kiểm toán phải thu khách hàng nhằm mục đích:",
    "options": [
      "Xác nhận khách hàng còn kinh doanh",
      "Xác nhận số dư phải thu trên sổ kế toán của DN với thông tin từ bên thứ ba (khách hàng)",
      "Thu hồi công nợ",
      "Kiểm tra chất lượng hàng hóa"
    ],
    "correct": 1,
    "explanation": "Xác nhận (ISA 505): KTV gửi thư trực tiếp đến khách hàng của DN được kiểm toán, yêu cầu xác nhận số dư nợ phải thu tại ngày nhất định. Mục tiêu: Xác nhận sự hiện hữu (existence) và đúng số tiền. Tích cực (Positive): Yêu cầu trả lời dù có hay không khác biệt. Tiêu cực (Negative): Chỉ trả lời nếu có khác biệt."
  },
  {
    "id": 1021,
    "code": "CPA006",
    "category": "cpa_viet_nam",
    "question": "Rủi ro kiểm toán (Audit Risk) được tính theo công thức:",
    "options": [
      "Audit Risk = Inherent Risk + Control Risk + Detection Risk",
      "Audit Risk = Inherent Risk × Control Risk × Detection Risk",
      "Audit Risk = Detection Risk / (Inherent Risk × Control Risk)",
      "Audit Risk = Inherent Risk × Control Risk"
    ],
    "correct": 1,
    "explanation": "Mô hình rủi ro kiểm toán (ISA 200): AR = IR × CR × DR. Trong đó: IR = Rủi ro tiềm tàng (bản chất khoản mục); CR = Rủi ro kiểm soát (HTKSNB kém); DR = Rủi ro phát hiện (thủ tục KTV không phát hiện). KTV kiểm soát DR bằng cách điều chỉnh phạm vi và số lượng thủ tục. AR mục tiêu thường = 5% (95% assurance)."
  },
  {
    "id": 1022,
    "code": "CPA007",
    "category": "cpa_viet_nam",
    "question": "Cuộc kiểm toán BCTC theo ISA tuân theo quy trình nào?",
    "options": [
      "Chỉ kiểm tra số liệu cuối năm",
      "Chấp nhận hợp đồng → Lập kế hoạch → Thực hiện (Tìm hiểu môi trường, Đánh giá rủi ro, Thủ tục kiểm toán) → Hoàn thành → Báo cáo",
      "Kiểm tra ngẫu nhiên các giao dịch",
      "Chỉ kiểm tra phần kiểm soát nội bộ"
    ],
    "correct": 1,
    "explanation": "Quy trình kiểm toán BCTC (ISA): (1) Client Acceptance/Continuance; (2) Planning: Tìm hiểu DN và môi trường, đánh giá rủi ro, xác định trọng yếu, lập kế hoạch; (3) Risk Assessment Procedures: Phỏng vấn, quan sát, phân tích; (4) Further Audit Procedures: Test of Controls + Substantive Procedures; (5) Completion: Analytical review, contingencies, subsequent events; (6) Reporting: Lập báo cáo kiểm toán."
  },
  {
    "id": 1023,
    "code": "CPA008",
    "category": "cpa_viet_nam",
    "question": "Sampling trong kiểm toán: KTV chọn mẫu 50 hóa đơn từ 500 hóa đơn để kiểm tra. Nếu phát hiện 3 sai sót, KTV phải làm gì?",
    "options": [
      "Kết luận chỉ có 3 sai sót trong toàn bộ",
      "Ngoại suy (extrapolate) tỷ lệ sai sót sang tổng thể (3/50 = 6% → ước tính 30 sai sót trong 500), đánh giá xem có vượt trọng yếu không",
      "Kết luận BCTC có sai sót trọng yếu ngay",
      "Bỏ qua vì sai sót ít"
    ],
    "correct": 1,
    "explanation": "ISA 530 (Audit Sampling): Kết quả mẫu phải ngoại suy sang tổng thể. Tỷ lệ sai sót mẫu = 3/50 = 6%. Ước tính sai sót tổng thể = 6% × 500 = 30 hóa đơn có sai sót. Xác định giá trị sai sót → so sánh với trọng yếu. Nếu vượt → mở rộng mẫu hoặc tác động đến ý kiến kiểm toán."
  },
  {
    "id": 1024,
    "code": "CPA009",
    "category": "cpa_viet_nam",
    "question": "Kiểm toán gian lận (ISA 240) yêu cầu KTV đặt giả định bắt buộc về rủi ro gian lận trong lĩnh vực nào?",
    "options": [
      "Gian lận trong mua NVL",
      "Gian lận trong ghi nhận doanh thu (Revenue recognition) và gian lận của BGĐ",
      "Chỉ gian lận của nhân viên thấp cấp",
      "Không có giả định bắt buộc"
    ],
    "correct": 1,
    "explanation": "ISA 240: KTV phải luôn giả định có rủi ro gian lận trọng yếu trong 2 lĩnh vực: (1) Ghi nhận doanh thu sai (sớm, muộn, giả tạo) — được coi là rủi ro có thể xảy ra theo giả định; (2) Vô hiệu hóa kiểm soát nội bộ bởi BGĐ (Management Override of Controls). Nếu KTV bác bỏ giả định này → phải tài liệu hóa lý do rất thuyết phục."
  },
  {
    "id": 1025,
    "code": "CPA010",
    "category": "cpa_viet_nam",
    "question": "Going Concern (khả năng hoạt động liên tục) — KTV phải đánh giá trong bao nhiêu tháng?",
    "options": [
      "6 tháng",
      "12 tháng",
      "18 tháng",
      "24 tháng"
    ],
    "correct": 1,
    "explanation": "ISA 570 (Going Concern): KTV phải đánh giá khả năng hoạt động liên tục ít nhất 12 tháng kể từ ngày BCTC. Nếu BGĐ đã đánh giá thời gian ngắn hơn → KTV yêu cầu mở rộng ra 12 tháng. Dấu hiệu đáng lo: Lỗ liên tiếp, âm dòng tiền, vi phạm điều khoản vay, mất hợp đồng chính, kiện tụng lớn. Kết luận ảnh hưởng đến ý kiến kiểm toán."
  },
  {
    "id": 1026,
    "code": "CPA011",
    "category": "cpa_viet_nam",
    "question": "Thư quản lý (Management Letter) trong kiểm toán là gì?",
    "options": [
      "Thư của Ban giám đốc gửi cho KTV",
      "Tài liệu KTV gửi BGĐ để thông báo các điểm yếu KSNB và khuyến nghị cải thiện (không ảnh hưởng đến ý kiến kiểm toán)",
      "Báo cáo kiểm toán chính thức",
      "Biên bản kiểm kê HTK"
    ],
    "correct": 1,
    "explanation": "Management Letter (Thư quản lý / Thư kiến nghị): Là tài liệu KTV gửi BGĐ sau kiểm toán, thông báo về: Điểm yếu KSNB phát hiện trong quá trình kiểm toán; Khuyến nghị cải thiện. Không phải yêu cầu bắt buộc theo ISA nhưng là thực hành tốt. Khác với báo cáo kiểm toán (audit report): Đây không phải ý kiến về BCTC."
  },
  {
    "id": 1027,
    "code": "CPA012",
    "category": "cpa_viet_nam",
    "question": "Kiểm toán viên phát hiện BCTC có sai sót trọng yếu và BGĐ từ chối điều chỉnh. KTV phải:",
    "options": [
      "Chấp nhận quan điểm của BGĐ",
      "Phát hành ý kiến kiểm toán có ngoại trừ (Qualified Opinion) hoặc ý kiến trái ngược (Adverse Opinion)",
      "Ngừng kiểm toán ngay",
      "Báo cáo cho CQT thuế"
    ],
    "correct": 1,
    "explanation": "ISA 705 (Modified Opinions): Nếu BCTC có sai sót trọng yếu: (1) Nếu trọng yếu nhưng không lan rộng toàn bộ → Qualified Opinion (ngoại trừ); (2) Nếu trọng yếu VÀ lan rộng (pervasive) → Adverse Opinion (trái ngược). Nếu không thể thu thập đủ bằng chứng: (1) Không lan rộng → Qualified; (2) Lan rộng → Disclaimer of Opinion. BGĐ từ chối sửa → KTV không được bỏ qua."
  },
  {
    "id": 1028,
    "code": "CPA013",
    "category": "cpa_viet_nam",
    "question": "Kiểm tra thực chất (Substantive Testing) trong kiểm toán bao gồm:",
    "options": [
      "Chỉ test of controls",
      "Thủ tục phân tích (Analytical Procedures) + Kiểm tra chi tiết (Tests of Details)",
      "Phỏng vấn BGĐ và nhân viên",
      "Chỉ xác nhận từ bên thứ ba"
    ],
    "correct": 1,
    "explanation": "Substantive Procedures (ISA 330): (1) Analytical Procedures: So sánh số liệu năm nay vs năm trước, vs ngân sách, vs ngành → phát hiện biến động bất thường; (2) Tests of Details: Kiểm tra chứng từ, đối chiếu, kiểm kê vật chất, xác nhận từ bên thứ ba. Kết hợp cả hai để tăng bằng chứng. Nếu HTKSNB mạnh → có thể giảm Tests of Details."
  },
  {
    "id": 1029,
    "code": "CPA014",
    "category": "cpa_viet_nam",
    "question": "Luân chuyển kiểm toán viên ký báo cáo (Key Audit Partner rotation) tại VN yêu cầu sau bao nhiêu năm?",
    "options": [
      "3 năm",
      "5 năm",
      "7 năm",
      "10 năm"
    ],
    "correct": 1,
    "explanation": "Theo Luật Kiểm toán độc lập 2011 và các quy định liên quan: KTV ký báo cáo kiểm toán cho cùng một khách hàng tối đa 3 năm liên tiếp (đối với đơn vị lợi ích công cộng — PIE như ngân hàng, công ty niêm yết), sau đó phải luân chuyển. Công ty kiểm toán: 5 năm đối với PIE. Mục đích: Đảm bảo độc lập, tránh familiarity threat."
  },
  {
    "id": 1030,
    "code": "CPA015",
    "category": "cpa_viet_nam",
    "question": "Hồ sơ kiểm toán (Audit Documentation/Working Papers) phải được lưu giữ tối thiểu bao nhiêu năm?",
    "options": [
      "3 năm",
      "5 năm",
      "10 năm",
      "Vĩnh viễn"
    ],
    "correct": 2,
    "explanation": "Theo Luật Kiểm toán độc lập 2011 và ISA 230: Hồ sơ kiểm toán phải được lưu giữ tối thiểu 10 năm kể từ ngày phát hành báo cáo kiểm toán. Bao gồm: Working papers, bằng chứng kiểm toán, thư xác nhận, bảng phân tích. Mục đích: Cho phép kiểm tra chất lượng kiểm toán và giải quyết tranh chấp pháp lý."
  },
  {
    "id": 1031,
    "code": "CPA016",
    "category": "cpa_viet_nam",
    "question": "Phân tích rủi ro tại cấp độ cơ sở dẫn liệu (Assertion Level), cơ sở dẫn liệu nào quan trọng nhất cho khoản mục 'Doanh thu'?",
    "options": [
      "Completeness (Đầy đủ) và Rights & Obligations",
      "Occurrence (Phát sinh thực) và Accuracy (Chính xác) và Cut-off (Đúng kỳ)",
      "Chỉ Valuation (Định giá)",
      "Presentation & Disclosure"
    ],
    "correct": 1,
    "explanation": "Với doanh thu, rủi ro gian lận chủ yếu là ghi nhận doanh thu giả (Occurrence) hoặc sớm (Cut-off) hoặc sai số tiền (Accuracy). Cơ sở dẫn liệu: Occurrence: Giao dịch có thực? Cut-off: Đúng kỳ kế toán? Accuracy: Số tiền đúng? Completeness quan trọng hơn với phải trả (để tìm nợ che giấu). Đây là lý do ISA 240 xem doanh thu là rủi ro gian lận mặc định."
  },
  {
    "id": 1032,
    "code": "CPA017",
    "category": "cpa_viet_nam",
    "question": "Điều kiện để trở thành KTV hành nghề độc lập (CPA) tại Việt Nam:",
    "options": [
      "Có bằng kế toán và 5 năm kinh nghiệm",
      "Có chứng chỉ CPA + Đăng ký hành nghề tại công ty kiểm toán được VACPA cấp phép + Đủ CPE hàng năm",
      "Chỉ cần thi đậu kỳ thi KTV",
      "Có thể hành nghề độc lập không cần công ty kiểm toán"
    ],
    "correct": 1,
    "explanation": "Điều kiện hành nghề KTV độc lập: (1) Có chứng chỉ KTV (CPA VN) do BTC cấp; (2) Đăng ký hành nghề tại công ty kiểm toán được cấp Giấy phép; (3) Hoàn thành CPE hàng năm. KTV không được hành nghề độc lập cá nhân — phải thông qua công ty kiểm toán (Điều 16 Luật KTĐL). Nếu tự ý hành nghề → vi phạm pháp luật."
  },
  {
    "id": 1033,
    "code": "CPA018",
    "category": "cpa_viet_nam",
    "question": "Kiểm toán viên phát hiện gian lận trọng yếu trong kiểm toán. Nghĩa vụ báo cáo theo ISA 240:",
    "options": [
      "Giữ bí mật, không thông báo cho ai",
      "Báo cáo ngay cho Hội đồng quản trị/Ban kiểm soát của khách hàng; cân nhắc rút khỏi hợp đồng; trong một số TH đặc biệt có thể báo cơ quan nhà nước",
      "Chỉ cần thể hiện trong ý kiến kiểm toán",
      "Bắt buộc báo ngay cho CQT"
    ],
    "correct": 1,
    "explanation": "ISA 240 về gian lận: (1) Báo cáo cho HĐQT/BKS (cấp cao nhất của DN); (2) Cân nhắc rút khỏi hợp đồng nếu gian lận do chính BGĐ gây ra; (3) Tại VN và nhiều quốc gia: KTV có nghĩa vụ báo cơ quan nhà nước (CQT, cảnh sát) trong một số trường hợp nhất định (gian lận đặc biệt nghiêm trọng). Nghĩa vụ bảo mật được ghi đè bởi lợi ích công cộng."
  },
  {
    "id": 1034,
    "code": "CPA019",
    "category": "cpa_viet_nam",
    "question": "Phương pháp kiểm toán dựa trên rủi ro (Risk-Based Audit) ưu điểm so với kiểm toán theo khoản mục truyền thống:",
    "options": [
      "Kiểm tra tất cả giao dịch → đảm bảo hơn",
      "Tập trung nguồn lực vào khu vực rủi ro cao → hiệu quả hơn, không cần kiểm tra 100%",
      "Ít tốn thời gian hơn vì không cần tìm hiểu khách hàng",
      "Phù hợp hơn cho DN nhỏ"
    ],
    "correct": 1,
    "explanation": "Risk-Based Audit: (1) Tìm hiểu DN → (2) Đánh giá rủi ro → (3) Phân bổ thủ tục nhiều hơn cho khu vực rủi ro cao, ít hơn cho khu vực thấp → (4) Hiệu quả và hiệu lực hơn. VD: Phải thu khách hàng lớn → nhiều thủ tục; Chi phí văn phòng nhỏ → ít thủ tục. So với truyền thống: Kiểm tra đều tất cả khoản mục → lãng phí nguồn lực."
  },
  {
    "id": 1035,
    "code": "CPA020",
    "category": "cpa_viet_nam",
    "question": "Trong kiểm toán, 'Sự kiện sau ngày kết thúc kỳ kế toán' (Subsequent Events — ISA 560) được xử lý như thế nào?",
    "options": [
      "Không quan trọng sau ngày BCTC",
      "Sự kiện điều chỉnh → điều chỉnh BCTC; Sự kiện không điều chỉnh nhưng trọng yếu → thuyết minh BCTC",
      "Tất cả phải điều chỉnh BCTC",
      "Chỉ theo dõi đến ngày ký báo cáo KT"
    ],
    "correct": 1,
    "explanation": "ISA 560: (1) Adjusting Events: Cung cấp bằng chứng về điều kiện TỒN TẠI TẠI ngày BCTC (KH phá sản do điều kiện trước 31/12) → Phải điều chỉnh số liệu BCTC; (2) Non-adjusting Events: Điều kiện PHÁT SINH SAU ngày BCTC (thiên tai tháng 1) → Không điều chỉnh số liệu nhưng nếu trọng yếu phải thuyết minh. KTV theo dõi đến ngày ký báo cáo kiểm toán."
  },
  {
    "id": 1036,
    "code": "GT001",
    "category": "gia_thanh",
    "question": "Tổng chi phí sản xuất tháng 12: NVL trực tiếp 500tr, NC trực tiếp 200tr, SXC 120tr. WIP đầu kỳ 80tr, WIP cuối kỳ 60tr. Giá thành thành phẩm nhập kho là:",
    "options": [
      "820 triệu",
      "840 triệu",
      "800 triệu",
      "860 triệu"
    ],
    "correct": 1,
    "explanation": "Tổng CP phát sinh = 500 + 200 + 120 = 820tr. Giá thành TP = WIP đầu + CP phát sinh − WIP cuối = 80 + 820 − 60 = 840 triệu. Đây là công thức cơ bản nhất của tính giá thành: Đầu kỳ + Phát sinh − Cuối kỳ."
  },
  {
    "id": 1037,
    "code": "GT002",
    "category": "gia_thanh",
    "question": "Phương pháp tính giá thành nào phù hợp nhất với nhà máy chế biến điều theo nhiều giai đoạn liên tiếp?",
    "options": [
      "Phương pháp giản đơn",
      "Phương pháp hệ số",
      "Phương pháp giai đoạn (process costing)",
      "Phương pháp đơn đặt hàng"
    ],
    "correct": 2,
    "explanation": "Ngành điều: hấp → bóc vỏ → tách nhân → phân loại → rang muối → đóng gói = nhiều giai đoạn liên tiếp. Phương pháp giai đoạn: Tính giá thành từng giai đoạn, BTP giai đoạn trước là NVL đầu vào của giai đoạn sau. Phù hợp với thủy sản, dệt nhuộm, hóa chất, xi măng."
  },
  {
    "id": 1038,
    "code": "GT003",
    "category": "gia_thanh",
    "question": "Chi phí sản xuất chung (TK 627) 120 triệu, phân bổ cho SP A và SP B theo giờ máy. A: 800h, B: 400h. CP SXC phân bổ cho SP A là:",
    "options": [
      "40 triệu",
      "80 triệu",
      "60 triệu",
      "100 triệu"
    ],
    "correct": 1,
    "explanation": "Tổng giờ máy = 800 + 400 = 1,200h. Tỷ lệ phân bổ A = 800/1,200 = 2/3. CP SXC cho A = 120 × 2/3 = 80 triệu. CP SXC cho B = 120 × 1/3 = 40 triệu. Tiêu thức giờ máy phù hợp khi SXC chủ yếu là khấu hao máy móc và điện sản xuất."
  },
  {
    "id": 1039,
    "code": "GT004",
    "category": "gia_thanh",
    "question": "Cuối kỳ có 200 sản phẩm dở dang, hoàn thành 60%. Thành phẩm hoàn thành: 800 sp. Tổng CP: 1,000 triệu. Giá thành từng SP là:",
    "options": [
      "1.25 triệu/sp",
      "1.087 triệu/sp",
      "1 triệu/sp",
      "1.5 triệu/sp"
    ],
    "correct": 1,
    "explanation": "WIP quy đổi = 200 × 60% = 120 SP tương đương. Tổng SP quy đổi = 800 + 120 = 920 SP. Giá thành/SP = 1,000tr / 920 = 1.087 triệu/SP. Giá trị WIP cuối kỳ = 120 × 1.087 = 130.4tr. Giá thành TP nhập kho = 800 × 1.087 = 869.6tr."
  },
  {
    "id": 1040,
    "code": "GT005",
    "category": "gia_thanh",
    "question": "DN sản xuất gạo xay (hệ số 1) và cám (hệ số 0.3). Tháng sản xuất 100 tấn gạo, 20 tấn cám. CP: 800 triệu. Giá thành gạo xay là:",
    "options": [
      "8 triệu/tấn",
      "7.547 triệu/tấn",
      "6.667 triệu/tấn",
      "9 triệu/tấn"
    ],
    "correct": 1,
    "explanation": "SP quy đổi = 100×1 + 20×0.3 = 106 tấn SP chuẩn. Giá thành/tấn SP chuẩn = 800/106 = 7.547 triệu/tấn. Giá thành gạo xay = 7.547 × 1 = 7.547tr/tấn. Giá thành cám = 7.547 × 0.3 = 2.264tr/tấn. Đây là phương pháp hệ số."
  },
  {
    "id": 1041,
    "code": "GT006",
    "category": "gia_thanh",
    "question": "BOM định mức: 1 SP cần 100kg NVL, giá 50,000đ/kg. Thực tế: sản xuất 100 SP, tiêu hao 10,200kg, giá mua 51,000đ/kg. Chênh lệch giá thành NVL là:",
    "options": [
      "+510 triệu (vượt định mức)",
      "+20.2 triệu (vượt định mức)",
      "Chênh lệch giá: +10.2tr, Chênh lệch lượng: +10tr, Tổng: +20.2tr",
      "Không có chênh lệch"
    ],
    "correct": 2,
    "explanation": "Định mức: 100sp × 100kg × 50,000 = 500 triệu. Thực tế: 10,200kg × 51,000 = 520.2 triệu. Chênh lệch tổng: +20.2tr. Phân tích: CL giá = (51,000 − 50,000) × 10,200 = +10.2tr. CL lượng = (10,200 − 10,000) × 50,000 = +10tr. Tổng = 20.2tr vượt định mức."
  },
  {
    "id": 1042,
    "code": "GT007",
    "category": "gia_thanh",
    "question": "DN chế biến điều có tỷ lệ hao hụt thực tế 57% (cần 2.33kg điều thô → 1kg nhân). Định mức cho phép 55% (cần 2.22kg). Hao hụt ngoài định mức được xử lý:",
    "options": [
      "Gộp vào giá thành sản phẩm",
      "Ghi vào TK 811 (chi phí khác) sau khi lập biên bản kiểm kê",
      "Ghi vào TK 632 (giá vốn)",
      "Không ghi nhận vì nằm trong biên độ cho phép"
    ],
    "correct": 1,
    "explanation": "Hao hụt trong định mức (55%): Gộp vào giá thành bình thường. Hao hụt ngoài định mức (57% − 55% = 2%): Ghi vào chi phí khác (TK 811) hoặc tổn thất bất thường → không gộp vào giá thành → không được tính vào chi phí hợp lý TNDN nếu không có biên bản kiểm kê rõ ràng."
  },
  {
    "id": 1043,
    "code": "GT008",
    "category": "gia_thanh",
    "question": "FIFO xuất kho: Đầu kỳ 100 sp × 1tr. Nhập kỳ 200 sp × 1.2tr. Xuất trong kỳ 150 sp. Giá xuất FIFO là:",
    "options": [
      "150 triệu (BQ: 1.133tr × 150)",
      "100tr × 1tr + 50 × 1.2tr = 160 triệu",
      "150 × 1.2tr = 180 triệu",
      "150 × 1tr = 150 triệu"
    ],
    "correct": 1,
    "explanation": "FIFO (nhập trước xuất trước): Xuất hết hàng đầu kỳ trước (100 sp × 1tr = 100tr), rồi mới xuất hàng nhập mới (50 sp × 1.2tr = 60tr). Tổng giá trị xuất = 100 + 60 = 160 triệu. Tồn cuối kỳ = 150 sp × 1.2tr = 180tr."
  },
  {
    "id": 1044,
    "code": "GT009",
    "category": "gia_thanh",
    "question": "Phương pháp bình quân gia quyền: Đầu kỳ 100 sp × 1tr. Nhập kỳ 200 sp × 1.2tr. Xuất 150 sp. Đơn giá xuất BQ là:",
    "options": [
      "1.1 triệu/sp",
      "1.133 triệu/sp",
      "1.2 triệu/sp",
      "1.05 triệu/sp"
    ],
    "correct": 1,
    "explanation": "Giá BQ gia quyền = Tổng trị giá / Tổng số lượng = (100×1 + 200×1.2) / (100+200) = (100+240) / 300 = 340/300 = 1.133 triệu/sp. Giá trị xuất = 150 × 1.133 = 170tr. Tồn cuối = 150 × 1.133 = 170tr."
  },
  {
    "id": 1045,
    "code": "GT010",
    "category": "gia_thanh",
    "question": "Chi phí phân bổ theo phương pháp Activity-Based Costing (ABC) khác với phân bổ truyền thống ở điểm:",
    "options": [
      "ABC phức tạp hơn nhưng kết quả giống nhau",
      "ABC dùng nhiều tiêu thức phân bổ (drivers) phản ánh đúng hoạt động gây ra chi phí, còn phân bổ truyền thống dùng 1 tiêu thức chung (giờ máy/lao động)",
      "ABC chỉ dùng cho DN lớn có nhiều bộ phận",
      "Phân bổ truyền thống chính xác hơn ABC"
    ],
    "correct": 1,
    "explanation": "ABC (Activity-Based Costing): Xác định các hoạt động (setup máy, kiểm tra QC, xử lý đơn hàng...) → Xác định chi phí từng hoạt động → Phân bổ cho SP theo mức tiêu thụ hoạt động. Chính xác hơn phân bổ truyền thống khi DN có nhiều loại SP phức tạp. Phân bổ truyền thống: Phân bổ tất cả chi phí chung theo 1 tiêu thức (giờ máy) → có thể gây sai lệch giá thành SP."
  },
  {
    "id": 1046,
    "code": "GT011",
    "category": "gia_thanh",
    "question": "TK 154 (Chi phí SXKD dở dang) có số dư Nợ cuối năm 200 triệu. Ý nghĩa:",
    "options": [
      "DN đang lỗ 200 triệu từ sản xuất",
      "Sản phẩm đang sản xuất dở dang, chưa hoàn thành tại thời điểm 31/12, trị giá chi phí đã tích lũy = 200 triệu",
      "NVL còn trong kho chưa xuất sản xuất",
      "Thành phẩm chưa bán được"
    ],
    "correct": 1,
    "explanation": "TK 154 số dư Nợ = Giá trị WIP (Work In Progress — sản phẩm dở dang) tại thời điểm báo cáo. Đây là chi phí đã tập hợp (621+622+627) cho sản phẩm chưa hoàn thành cuối kỳ. Số dư TK 154 lớn bất thường → CQT có thể nghi ngờ DN 'giấu' chi phí trong WIP để giảm giá thành thành phẩm."
  },
  {
    "id": 1047,
    "code": "GT012",
    "category": "gia_thanh",
    "question": "Nhà máy sản xuất 1,000 SP/tháng, trong đó 100 SP phế phẩm (phải tái chế lại). Chi phí tái chế 5 triệu. Xử lý kế toán:",
    "options": [
      "5 triệu vào TK 632",
      "5 triệu vào giá thành sản xuất (TK 154/155)",
      "5 triệu vào TK 811",
      "5 triệu vào chi phí nguyên liệu (TK 621)"
    ],
    "correct": 1,
    "explanation": "Chi phí tái chế phế phẩm trong mức cho phép: Gộp vào giá thành sản xuất (TK 154). Nếu phế phẩm có thể bán được: Ghi nhận thu nhập bán phế phẩm trừ vào giá thành. Phế phẩm bất thường (do lỗi quy trình, máy hỏng...): Xử lý theo kết quả kiểm tra và ghi vào TK 811 nếu được xác định là bất thường."
  },
  {
    "id": 1048,
    "code": "GT013",
    "category": "gia_thanh",
    "question": "Tổng chi phí sản xuất cố định (fixed manufacturing cost) 500 triệu. Sản lượng thực tế 800 SP (công suất thiết kế 1,000 SP). Theo IAS 2, chi phí cố định phân bổ vào giá thành là:",
    "options": [
      "500 triệu (toàn bộ)",
      "400 triệu (theo công suất bình thường = 1,000 SP)",
      "400 triệu (500 × 800/1,000), còn 100 triệu vào chi phí kỳ",
      "0 triệu (chi phí cố định không vào giá thành)"
    ],
    "correct": 2,
    "explanation": "Theo IAS 2 / VAS 02: Chi phí cố định SXC phân bổ vào giá thành theo công suất bình thường. Nếu thực tế < bình thường: Phân bổ = CP cố định × (Thực tế/Bình thường) = 500 × 800/1,000 = 400tr. Phần không phân bổ (100tr) → ghi vào chi phí kỳ (chi phí của hoạt động dưới mức bình thường). Tránh làm giá thành đơn vị quá cao khi SX thấp."
  },
  {
    "id": 1049,
    "code": "GT014",
    "category": "gia_thanh",
    "question": "Break-even point (điểm hòa vốn) được tính theo công thức:",
    "options": [
      "Doanh thu / Chi phí cố định",
      "Chi phí cố định / (Giá bán − Biến phí đơn vị)",
      "Chi phí cố định / Doanh thu",
      "Doanh thu / (Giá bán − Biến phí)"
    ],
    "correct": 1,
    "explanation": "BEP (số lượng) = Tổng chi phí cố định / Contribution Margin (Giá bán − Biến phí đơn vị). VD: FC = 1,000tr, Giá bán = 500,000đ/sp, Biến phí = 300,000đ/sp. CM = 200,000đ. BEP = 1,000,000,000 / 200,000 = 5,000 SP. BEP (doanh thu) = FC / CM ratio = FC / (CM/Giá bán)."
  },
  {
    "id": 1050,
    "code": "GT015",
    "category": "gia_thanh",
    "question": "Công ty có giá thành kế hoạch (định mức) 400,000đ/sp, giá thành thực tế 420,000đ/sp. Sản lượng 1,000 sp. Nhận xét nào đúng?",
    "options": [
      "Không có vấn đề gì",
      "Vượt chi phí 20tr (5% so với kế hoạch) → cần phân tích nguyên nhân: giá NVL tăng, lãng phí lao động, hay SXC tăng",
      "Phải hủy bỏ lô hàng này",
      "Giảm giá bán để bù lỗ"
    ],
    "correct": 1,
    "explanation": "Chênh lệch = (420,000 − 400,000) × 1,000 = 20 triệu (5% vượt). Cần phân tích variance: NVL (giá + lượng), NC (giờ + lương), SXC (cố định + biến đổi). Nếu do giá thị trường tăng → điều chỉnh kế hoạch. Nếu do lãng phí → cải thiện quy trình. Không tự động giảm giá bán hay hủy hàng."
  },
  {
    "id": 1051,
    "code": "GT016",
    "category": "gia_thanh",
    "question": "Giá thành toàn bộ và giá thành sản xuất khác nhau ở điểm nào?",
    "options": [
      "Giá thành toàn bộ bao gồm cả chi phí bán hàng và QLDN",
      "Giá thành sản xuất bao gồm cả CPBH và QLDN",
      "Không có sự khác biệt",
      "Giá thành toàn bộ chỉ bao gồm NVL và NC"
    ],
    "correct": 0,
    "explanation": "Giá thành sản xuất = NVL (621) + NC (622) + SXC (627) = CP để tạo ra SP. Giá thành toàn bộ = Giá thành SX + CPBH (641) + CPQLDN (642) = Tổng CP để đưa SP đến tay khách hàng. Giá bán > Giá thành toàn bộ → mới có lợi nhuận. Quản trị thường dùng giá thành SX."
  },
  {
    "id": 1052,
    "code": "GT017",
    "category": "gia_thanh",
    "question": "Tỷ suất lợi nhuận gộp trên giá thành (Mark-up) = 25%. Giá thành sản xuất 800,000đ/sp. Giá bán là:",
    "options": [
      "1,000,000đ",
      "1,025,000đ",
      "1,050,000đ",
      "900,000đ"
    ],
    "correct": 0,
    "explanation": "Mark-up = (Giá bán − Giá thành) / Giá thành = 25%. Giá bán = Giá thành × (1 + 25%) = 800,000 × 1.25 = 1,000,000đ. Khác với Gross Margin: GM = (Giá bán − Giá thành) / Giá bán = 20% (khi Mark-up = 25%). Nhà sản xuất thường dùng Mark-up, nhà bán lẻ thường dùng Margin."
  },
  {
    "id": 1053,
    "code": "GT018",
    "category": "gia_thanh",
    "question": "Tại sao TK 621, 622, 627 phải kết chuyển về TK 154 cuối kỳ?",
    "options": [
      "Vì 621, 622, 627 là tài khoản tạm thời, cuối kỳ phải bằng 0",
      "Để phân bổ chi phí vào kỳ sau",
      "Vì quy định của MISA bắt buộc",
      "Để tính khấu hao TSCĐ"
    ],
    "correct": 0,
    "explanation": "TK 621 (CFNVL TT), 622 (CFNC TT), 627 (SXC) là tài khoản tập hợp chi phí theo loại — đây là tài khoản tạm thời. Cuối kỳ, tổng hợp chi phí theo SP bằng cách kết chuyển về TK 154 (theo SP/lô sản xuất) để theo dõi WIP và tính giá thành. TK 154 mới là tài khoản tổng hợp giá thành."
  },
  {
    "id": 1054,
    "code": "GT019",
    "category": "gia_thanh",
    "question": "Chi phí bảo hành sản phẩm dự phòng (trích trước) được hạch toán vào:",
    "options": [
      "TK 352 (Dự phòng phải trả) và chi phí 641/642",
      "TK 155 (Thành phẩm)",
      "TK 154 (WIP)",
      "TK 811"
    ],
    "correct": 0,
    "explanation": "Trích dự phòng bảo hành: Nợ 641 (CPBH) / Có 352 (Dự phòng phải trả). Khi phát sinh chi phí bảo hành thực tế: Nợ 352 / Có 111/152/334... Cuối năm đánh giá lại mức dự phòng, hoàn nhập nếu thừa: Nợ 352 / Có 641. Đây là ứng dụng nguyên tắc phù hợp: chi phí bảo hành ghi nhận cùng kỳ với doanh thu."
  },
  {
    "id": 1055,
    "code": "GT020",
    "category": "gia_thanh",
    "question": "Sản phẩm A có giá thành SX 1 triệu/sp, chi phí bán hàng bình quân 100,000đ/sp, giá bán 1.5 triệu. Contribution Margin (CM) là:",
    "options": [
      "400,000đ/sp",
      "500,000đ/sp",
      "600,000đ/sp",
      "Không tính được nếu không có chi phí cố định"
    ],
    "correct": 1,
    "explanation": "Contribution Margin = Giá bán − Tổng biến phí. Nếu coi giá thành SX + CPBH là biến phí = 1,000,000 + 100,000 = 1,100,000. CM = 1,500,000 − 1,100,000 = 400,000đ/sp. Tuy nhiên, nếu giá thành SX có chi phí cố định: CM = Giá bán − Biến phí thuần. Giả sử toàn bộ là biến phí → CM = 400,000đ. Câu này có thể có hai cách hiểu."
  },
  {
    "id": 1056,
    "code": "GT021",
    "category": "gia_thanh",
    "question": "Trong phương pháp tính giá thành theo đơn đặt hàng, giá thành được tính khi nào?",
    "options": [
      "Cuối mỗi tháng",
      "Khi đơn hàng hoàn thành (không phụ thuộc vào kỳ kế toán)",
      "Khi 50% đơn hàng hoàn thành",
      "Khi thu được tiền từ khách hàng"
    ],
    "correct": 1,
    "explanation": "Phương pháp đơn đặt hàng (Job-order costing): Chi phí tập hợp theo từng đơn hàng riêng biệt. Giá thành chỉ tính được khi đơn hàng hoàn thành (có thể giữa kỳ hoặc cuối kỳ). Áp dụng: Xưởng cơ khí, in ấn theo đơn, may mặc theo thiết kế riêng, xây dựng, tư vấn theo dự án."
  },
  {
    "id": 1057,
    "code": "GT022",
    "category": "gia_thanh",
    "question": "ROI (Return on Investment) trong quản trị chi phí được tính:",
    "options": [
      "Lợi nhuận / Tổng tài sản",
      "Lợi nhuận sau thuế / Vốn đầu tư × 100%",
      "Doanh thu / Tổng chi phí",
      "LN gộp / Doanh thu"
    ],
    "correct": 1,
    "explanation": "ROI = LN sau thuế / Tổng vốn đầu tư × 100%. Trong quản trị: ROI thường tính theo đơn vị kinh doanh hoặc dự án cụ thể. VD: Đầu tư 10 tỷ vào dây chuyền SX, lợi nhuận năm = 2 tỷ → ROI = 20%. Payback period = 10/2 = 5 năm. ROI > chi phí vốn (WACC) → đầu tư tạo giá trị."
  },
  {
    "id": 1058,
    "code": "GT023",
    "category": "gia_thanh",
    "question": "Phế liệu thu hồi trong quá trình sản xuất (vụn thép, vụn gỗ...) được xử lý như thế nào?",
    "options": [
      "Bỏ đi, không hạch toán",
      "Ghi vào TK 152 theo giá ước tính và trừ vào giá thành sản xuất",
      "Ghi vào TK 711 (thu nhập khác)",
      "Không ảnh hưởng đến giá thành"
    ],
    "correct": 1,
    "explanation": "Phế liệu thu hồi: Nợ 152 (nhập kho phế liệu, giá ước tính theo giá thị trường) / Có 154 (giảm giá thành) hoặc Có 621. Điều này làm giảm chi phí sản phẩm. Khi bán phế liệu: Nợ 111 / Có 152 + Có 3331 (VAT). Cần theo dõi chặt chẽ để tránh thất thoát và gian lận."
  },
  {
    "id": 1059,
    "code": "GT024",
    "category": "gia_thanh",
    "question": "Kiểm soát chi phí theo trách nhiệm (Responsibility Accounting) phân chia tổ chức thành các trung tâm nào?",
    "options": [
      "Chỉ trung tâm chi phí",
      "Trung tâm chi phí, trung tâm doanh thu, trung tâm lợi nhuận, trung tâm đầu tư",
      "Bộ phận SX và bộ phận kinh doanh",
      "Theo phòng ban hành chính"
    ],
    "correct": 1,
    "explanation": "Responsibility Accounting: (1) Cost Center: Chỉ kiểm soát chi phí (phân xưởng SX); (2) Revenue Center: Chỉ kiểm soát DT (đội kinh doanh); (3) Profit Center: Kiểm soát cả DT và chi phí (chi nhánh); (4) Investment Center: Kiểm soát DT, CP và tài sản sử dụng (công ty con, BU). ROI/Residual Income áp dụng cho Investment Center."
  },
  {
    "id": 1060,
    "code": "GT025",
    "category": "gia_thanh",
    "question": "Doanh nghiệp ngành sản xuất sử dụng phương pháp tính giá thành giản đơn. Điều kiện cần thiết để áp dụng:",
    "options": [
      "DN nhỏ với ít nhân viên",
      "Sản xuất 1 loại SP duy nhất hoặc ít loại tương đồng, chu kỳ SX ngắn",
      "Chỉ cần phần mềm kế toán hiện đại",
      "DN không cần theo dõi WIP"
    ],
    "correct": 1,
    "explanation": "Phương pháp giản đơn: Giá thành/đơn vị = Tổng chi phí / Sản lượng. Điều kiện: (1) Chỉ SX 1 loại SP hoặc 1 nhóm SP tương đồng; (2) Chu kỳ SX ngắn; (3) WIP không đáng kể hoặc ổn định qua các kỳ. VD: Nhà máy gạch, nhà máy muối, khai thác đá. Không phù hợp với DN SX đa dạng sản phẩm."
  },
  {
    "id": 1061,
    "code": "GT026",
    "category": "gia_thanh",
    "question": "Một SP có giá bán 1,200,000đ. Biến phí 720,000đ. Chi phí cố định tổng cộng 600 triệu/tháng. Để đạt lợi nhuận mục tiêu 200 triệu/tháng, cần sản xuất bao nhiêu SP?",
    "options": [
      "1,000 SP",
      "1,667 SP",
      "2,000 SP",
      "1,333 SP"
    ],
    "correct": 2,
    "explanation": "CM/sp = 1,200,000 − 720,000 = 480,000đ. Để đạt LN mục tiêu: (FC + LN mục tiêu) / CM = Số lượng. = (600,000,000 + 200,000,000) / 480,000 = 800,000,000 / 480,000 ≈ 1,667 SP. Kiểm tra: 1,667 × 480,000 = 800.16 triệu ≈ 600 + 200 = 800 triệu. ✓"
  },
  {
    "id": 1062,
    "code": "GT027",
    "category": "gia_thanh",
    "question": "WIP (Work In Progress) cuối năm tăng đột biến so với năm trước. Rủi ro kế toán/thuế chính là:",
    "options": [
      "Không có rủi ro gì",
      "CQT nghi ngờ DN đưa chi phí vào WIP để làm giảm giá thành SP đã bán → giảm thuế TNDN",
      "BCTC sẽ bị kiểm toán từ chối",
      "WIP tăng làm tăng doanh thu"
    ],
    "correct": 1,
    "explanation": "WIP tăng bất thường: Rủi ro CQT cho rằng DN 'ôm' chi phí vào WIP thay vì đưa vào giá thành TP đã bán → giảm giá vốn → giảm TNDN phải nộp thuế. Biện pháp: Kiểm kê WIP thực tế cuối năm, lập bảng đánh giá có chữ ký kỹ thuật, giải thích rõ nguyên nhân WIP tăng (đơn hàng lớn, mở rộng SX...)."
  },
  {
    "id": 1063,
    "code": "GT028",
    "category": "gia_thanh",
    "question": "Standard Costing (giá thành định mức) hữu ích cho quản trị vì:",
    "options": [
      "Đơn giản hóa kế toán, không cần theo dõi chi phí thực tế",
      "Phân tích chênh lệch (variance) giữa định mức và thực tế → xác định nguyên nhân kém hiệu quả",
      "Cho phép DN không cần lập ngân sách",
      "Giúp giảm thuế TNDN"
    ],
    "correct": 1,
    "explanation": "Standard Costing: Đặt định mức cho NVL (lượng + giá), NC (giờ + lương), SXC. So sánh thực tế vs định mức → Variance Analysis: Price Variance, Quantity/Efficiency Variance. Ứng dụng: Phát hiện lãng phí, đàm phán mua NVL tốt hơn, cải tiến quy trình SX. Nền tảng của hệ thống lập ngân sách linh hoạt (flexible budget)."
  },
  {
    "id": 1064,
    "code": "GT029",
    "category": "gia_thanh",
    "question": "Tính giá nhập kho thành phẩm theo phương pháp bình quân cuối kỳ (period-end weighted average) khác phương pháp BQ liên hoàn (moving average) ở điểm:",
    "options": [
      "Không khác nhau",
      "BQ cuối kỳ: Tính đơn giá BQ sau khi biết toàn bộ nhập trong kỳ; BQ liên hoàn: Tính lại BQ sau mỗi lần nhập",
      "BQ liên hoàn cho giá thành cao hơn",
      "Chỉ BQ cuối kỳ được phép dùng theo TT200"
    ],
    "correct": 1,
    "explanation": "BQ cuối kỳ (periodic): Đợi hết kỳ, tính đơn giá = (ĐK + Nhập kỳ) / (SL ĐK + SL nhập). Đơn giản, nhưng không biết giá xuất trong kỳ cho đến cuối kỳ. BQ liên hoàn (moving average): Tính lại đơn giá BQ sau mỗi lần nhập → theo dõi giá xuất real-time. Phù hợp phần mềm ERP. Cả 2 đều được TT200 cho phép."
  },
  {
    "id": 1065,
    "code": "GT030",
    "category": "gia_thanh",
    "question": "Chi phí khấu hao văn phòng trụ sở (dùng chung cho SX và bán hàng) được phân bổ cho bộ phận nào?",
    "options": [
      "Toàn bộ vào TK 6274 (SXC)",
      "Toàn bộ vào TK 642 (QLDN)",
      "Phân bổ theo tiêu thức hợp lý (diện tích, nhân sự...) cho TK 6274, TK 641, TK 642",
      "Không trích KH nếu dùng chung"
    ],
    "correct": 2,
    "explanation": "Chi phí chung dùng cho nhiều bộ phận phải phân bổ theo tiêu thức hợp lý: Diện tích sử dụng, số nhân viên, doanh thu... Thực tế: Nhiều DN gộp tất cả vào TK 642 (QLDN) cho đơn giản → không sai về pháp lý nhưng giá thành SX không chính xác. Doanh nghiệp SX lớn nên phân bổ đúng để kiểm soát chi phí chính xác."
  },
  {
    "id": 1066,
    "code": "KCB001",
    "category": "ke_toan_co_ban",
    "question": "Phương trình kế toán cơ bản là:",
    "options": [
      "Tài sản = Nợ phải trả + Vốn chủ sở hữu",
      "Tài sản = Doanh thu − Chi phí",
      "Nợ phải trả = Tài sản + Vốn chủ sở hữu",
      "Vốn chủ sở hữu = Tài sản − Doanh thu"
    ],
    "correct": 0,
    "explanation": "Phương trình kế toán cơ bản: TS = NTR + VCSH. Đây là nền tảng của kế toán kép (double-entry), mọi giao dịch phải giữ cân bằng phương trình này."
  },
  {
    "id": 1067,
    "code": "KCB002",
    "category": "ke_toan_co_ban",
    "question": "Theo TT200/2014, tài khoản nào dùng để theo dõi tiền mặt tại quỹ bằng ngoại tệ?",
    "options": [
      "TK 1111",
      "TK 1112",
      "TK 1121",
      "TK 1122"
    ],
    "correct": 1,
    "explanation": "TK 1111: Tiền VNĐ tại quỹ. TK 1112: Ngoại tệ tại quỹ. TK 1121: Tiền VNĐ gửi ngân hàng. TK 1122: Ngoại tệ gửi ngân hàng."
  },
  {
    "id": 1068,
    "code": "KCB003",
    "category": "ke_toan_co_ban",
    "question": "Doanh nghiệp mua hàng hóa nhập kho, giá 100 triệu chưa VAT, VAT 10%, chưa thanh toán. Định khoản đúng là:",
    "options": [
      "Nợ 156: 110tr / Có 331: 110tr",
      "Nợ 156: 100tr, Nợ 133: 10tr / Có 331: 110tr",
      "Nợ 156: 100tr / Có 331: 100tr",
      "Nợ 156: 110tr, Nợ 133: 10tr / Có 331: 120tr"
    ],
    "correct": 1,
    "explanation": "Mua hàng: TK 156 = giá chưa VAT (100tr). TK 133 = VAT đầu vào (10tr). TK 331 = tổng phải trả (110tr). Không gộp VAT vào giá hàng hóa vì DN đủ điều kiện khấu trừ."
  },
  {
    "id": 1069,
    "code": "KCB004",
    "category": "ke_toan_co_ban",
    "question": "Khi bán hàng hóa thu tiền mặt, giá bán 50 triệu chưa VAT, VAT 10%, giá vốn 35 triệu. Cần mấy bút toán?",
    "options": [
      "1 bút toán",
      "2 bút toán",
      "3 bút toán",
      "4 bút toán"
    ],
    "correct": 1,
    "explanation": "BT1: Ghi nhận doanh thu: Nợ 111: 55tr / Có 511: 50tr, Có 3331: 5tr. BT2: Ghi nhận giá vốn: Nợ 632: 35tr / Có 156: 35tr. Tổng 2 bút toán."
  },
  {
    "id": 1070,
    "code": "KCB005",
    "category": "ke_toan_co_ban",
    "question": "TK 214 — Hao mòn TSCĐ có số dư bên nào?",
    "options": [
      "Bên Nợ",
      "Bên Có",
      "Cả hai",
      "Không có số dư"
    ],
    "correct": 1,
    "explanation": "TK 214 là tài khoản điều chỉnh, luôn có số dư Có. Số dư Có TK 214 = Tổng hao mòn lũy kế của TSCĐ. Trên BCTC: Giá trị còn lại TSCĐ = Nguyên giá (TK211) − Hao mòn (TK214)."
  },
  {
    "id": 1071,
    "code": "KCB006",
    "category": "ke_toan_co_ban",
    "question": "Nguyên tắc kế toán nào yêu cầu ghi nhận chi phí trong cùng kỳ với doanh thu liên quan?",
    "options": [
      "Nguyên tắc giá gốc",
      "Nguyên tắc phù hợp",
      "Nguyên tắc nhất quán",
      "Nguyên tắc thận trọng"
    ],
    "correct": 1,
    "explanation": "Nguyên tắc phù hợp (Matching Principle): Chi phí phải được ghi nhận trong kỳ phát sinh doanh thu liên quan. VD: Hoa hồng bán hàng tháng 12 phải ghi nhận tháng 12 dù trả tháng 1."
  },
  {
    "id": 1072,
    "code": "KCB007",
    "category": "ke_toan_co_ban",
    "question": "Công ty xuất kho NVL sản xuất trị giá 200 triệu. Định khoản đúng theo TT200:",
    "options": [
      "Nợ 154: 200tr / Có 152: 200tr",
      "Nợ 621: 200tr / Có 152: 200tr",
      "Nợ 632: 200tr / Có 152: 200tr",
      "Nợ 622: 200tr / Có 152: 200tr"
    ],
    "correct": 1,
    "explanation": "Xuất NVL vào sản xuất: Nợ TK 621 (Chi phí NVL trực tiếp) / Có TK 152. Cuối kỳ mới kết chuyển TK 621 → TK 154. TK 632 là giá vốn khi bán hàng, TK 622 là nhân công."
  },
  {
    "id": 1073,
    "code": "KCB008",
    "category": "ke_toan_co_ban",
    "question": "Tài khoản nào KHÔNG thuộc loại tài khoản tài sản?",
    "options": [
      "TK 131",
      "TK 156",
      "TK 331",
      "TK 211"
    ],
    "correct": 2,
    "explanation": "TK 331 (Phải trả người bán) là tài khoản Nợ phải trả (loại 3). TK 131 (Phải thu KH), TK 156 (Hàng hóa), TK 211 (TSCĐ) đều là tài khoản tài sản."
  },
  {
    "id": 1074,
    "code": "KCB009",
    "category": "ke_toan_co_ban",
    "question": "Thời hạn lưu trữ chứng từ kế toán theo TT200 là:",
    "options": [
      "5 năm",
      "7 năm",
      "10 năm",
      "Vô thời hạn"
    ],
    "correct": 2,
    "explanation": "Theo Điều 40 Luật Kế toán 2015 và TT200: Chứng từ kế toán, sổ kế toán, BCTC phải lưu trữ tối thiểu 10 năm. Tài liệu kế toán có giá trị lịch sử: lưu vĩnh viễn."
  },
  {
    "id": 1075,
    "code": "KCB010",
    "category": "ke_toan_co_ban",
    "question": "Phương pháp FIFO (nhập trước xuất trước) trong kế toán HTK có ưu điểm gì khi giá đầu vào tăng?",
    "options": [
      "Giá vốn thấp hơn → lợi nhuận cao hơn → thuế TNDN cao hơn",
      "Giá vốn cao hơn → lợi nhuận thấp hơn → thuế TNDN thấp hơn",
      "Tồn kho cuối kỳ phản ánh giá cũ → BCTC chính xác hơn",
      "Đơn giản, không cần theo dõi từng lô hàng"
    ],
    "correct": 0,
    "explanation": "Khi giá tăng: FIFO xuất hàng cũ giá thấp trước → Giá vốn thấp → LN cao → thuế TNDN cao. Tồn kho cuối kỳ theo giá mới (gần thực tế thị trường hơn). Phương pháp BQ thường cho kết quả trung gian."
  },
  {
    "id": 1076,
    "code": "KCB011",
    "category": "ke_toan_co_ban",
    "question": "Kết chuyển cuối kỳ, TK nào sau đây có số dư bằng 0 sau khi kết chuyển?",
    "options": [
      "TK 511",
      "TK 131",
      "TK 421",
      "TK 214"
    ],
    "correct": 0,
    "explanation": "Các TK doanh thu (511, 515, 711) và chi phí (632, 635, 641, 642, 811, 821) đều là TK tạm thời, được kết chuyển vào TK 911 cuối kỳ → số dư = 0. TK 131, 421, 214 là TK thường trực, có số dư chuyển sang kỳ sau."
  },
  {
    "id": 1077,
    "code": "KCB012",
    "category": "ke_toan_co_ban",
    "question": "Công ty nhận tạm ứng của khách hàng 50 triệu. Sau đó giao hàng đủ và xuất hóa đơn 80 triệu (chưa VAT). Định khoản giao hàng đúng:",
    "options": [
      "Nợ 111: 30tr / Có 511: 80tr (thiếu)",
      "Nợ 131: 80tr / Có 511: 80tr (toàn bộ ghi phải thu)",
      "Nợ 3387: 50tr, Nợ 131: 30tr / Có 511: 80tr",
      "Nợ 131: 30tr, Nợ 111: 50tr / Có 511: 80tr"
    ],
    "correct": 2,
    "explanation": "Khi nhận tạm ứng: Nợ 111 / Có 3387: 50tr (DT chưa thực hiện). Khi giao hàng: Nợ 3387: 50tr (kết chuyển), Nợ 131: 30tr (phần còn thiếu phải thu) / Có 511: 80tr. Đây là điểm hay gây nhầm lẫn."
  },
  {
    "id": 1078,
    "code": "KCB013",
    "category": "ke_toan_co_ban",
    "question": "Tài sản tương đương tiền (Cash Equivalents) theo TT200 là khoản đầu tư có kỳ hạn tối đa:",
    "options": [
      "1 tháng",
      "3 tháng",
      "6 tháng",
      "12 tháng"
    ],
    "correct": 1,
    "explanation": "Tiền và tương đương tiền bao gồm: tiền mặt, tiền gửi NH không kỳ hạn, tiền gửi có kỳ hạn ≤ 3 tháng kể từ ngày đầu tư. Kỳ hạn > 3 tháng → phân loại vào đầu tư tài chính ngắn hạn (TK 128)."
  },
  {
    "id": 1079,
    "code": "KCB014",
    "category": "ke_toan_co_ban",
    "question": "Chi phí thuê nhà trả trước 1 năm = 120 triệu đồng (ký ngày 01/7). Cuối năm (31/12), giá trị phân bổ vào chi phí là:",
    "options": [
      "120 triệu",
      "60 triệu",
      "10 triệu",
      "0 triệu"
    ],
    "correct": 1,
    "explanation": "Tháng 7 đến tháng 12 = 6 tháng. Phân bổ = 120tr / 12 tháng × 6 tháng = 60 triệu. Ghi nhận: Nợ 641/642 / Có 242: 60tr. Số dư TK 242 cuối năm = 120 − 60 = 60tr (chi phí trả trước còn lại)."
  },
  {
    "id": 1080,
    "code": "KCB015",
    "category": "ke_toan_co_ban",
    "question": "Theo TT200, sự kiện nào sau đây là 'sự kiện điều chỉnh' (adjusting event) sau ngày kết thúc kỳ kế toán năm?",
    "options": [
      "Giám đốc quyết định mở thêm chi nhánh mới",
      "Khách hàng lớn tuyên bố phá sản ngày 20/1, có khoản nợ phát sinh trước 31/12",
      "Giá nguyên liệu tăng mạnh trong tháng 1",
      "Nhà máy bị hỏa hoạn ngày 15/1"
    ],
    "correct": 1,
    "explanation": "Sự kiện điều chỉnh: Phát sinh sau 31/12 nhưng cung cấp bằng chứng về điều kiện đã tồn tại trước 31/12. KH phá sản tháng 1 xác nhận khoản nợ trước 31/12 khó thu → phải lập/bổ sung dự phòng nợ khó đòi."
  },
  {
    "id": 1081,
    "code": "KCB016",
    "category": "ke_toan_co_ban",
    "question": "Phương pháp kế toán hàng tồn kho nào yêu cầu phải kiểm kê định kỳ để xác định trị giá xuất kho?",
    "options": [
      "Kê khai thường xuyên (Perpetual)",
      "Kiểm kê định kỳ (Periodic)",
      "FIFO",
      "Bình quân gia quyền"
    ],
    "correct": 1,
    "explanation": "Kiểm kê định kỳ: Không theo dõi từng xuất nhập, chỉ xác định Trị giá xuất = Đầu kỳ + Nhập − Cuối kỳ (phải kiểm kê). Kê khai thường xuyên: Ghi nhận từng lần xuất nhập → biết số dư bất kỳ lúc nào (TT200 ưu tiên phương pháp này)."
  },
  {
    "id": 1082,
    "code": "KCB017",
    "category": "ke_toan_co_ban",
    "question": "Doanh nghiệp có lỗ lũy kế 500 triệu và lợi nhuận năm nay 800 triệu. Vậy LNST chưa phân phối (TK 421) cuối năm là:",
    "options": [
      "800 triệu",
      "500 triệu",
      "300 triệu",
      "1.300 triệu"
    ],
    "correct": 2,
    "explanation": "TK 421.1 đầu năm = −500tr (lỗ lũy kế, số dư Nợ). TK 421.2 = +800tr (LN năm nay). Cuối năm kết chuyển 421.2 → 421.1: Số dư TK 421 = −500 + 800 = +300tr (số dư Có = có lãi tích lũy)."
  },
  {
    "id": 1083,
    "code": "KCB018",
    "category": "ke_toan_co_ban",
    "question": "TK 335 'Chi phí phải trả' được dùng trong trường hợp nào?",
    "options": [
      "Chi phí đã thanh toán nhưng chưa phát sinh",
      "Chi phí đã phát sinh nhưng chưa có đủ chứng từ hoặc chưa đến hạn thanh toán",
      "Chi phí đã có hóa đơn nhưng chưa nhận được hàng",
      "Chi phí trả trước nhiều năm"
    ],
    "correct": 1,
    "explanation": "TK 335 (Chi phí phải trả = Chi phí trích trước): Dùng khi chi phí đã thực sự phát sinh trong kỳ nhưng chưa có chứng từ hoặc chưa đến kỳ thanh toán. VD: Lãi vay phát sinh tháng 12 chưa đến kỳ trả. Tiền điện tháng 12 chưa có hóa đơn. Lương tháng 12 chưa thanh toán."
  },
  {
    "id": 1084,
    "code": "KCB019",
    "category": "ke_toan_co_ban",
    "question": "Theo VAS 01, thông tin trên BCTC được coi là trọng yếu khi:",
    "options": [
      "Giá trị tuyệt đối vượt 50 triệu đồng",
      "Chiếm hơn 5% tổng tài sản",
      "Nếu bỏ qua hoặc trình bày sai có thể ảnh hưởng đến quyết định của người dùng BCTC",
      "Do kiểm toán viên xác định"
    ],
    "correct": 2,
    "explanation": "Theo VAS 01 và IAS 8: Thông tin trọng yếu là thông tin mà nếu bỏ sót hoặc trình bày sai lệch sẽ ảnh hưởng đến quyết định kinh tế của người sử dụng. Không có ngưỡng cố định — phụ thuộc vào bản chất và quy mô của khoản mục trong bối cảnh cụ thể."
  },
  {
    "id": 1085,
    "code": "KCB020",
    "category": "ke_toan_co_ban",
    "question": "Công ty phát hành 1.000 cổ phiếu mệnh giá 10.000đ/cp, bán ra với giá 15.000đ/cp. Hạch toán đúng:",
    "options": [
      "Nợ 111: 15tr / Có 411: 15tr",
      "Nợ 111: 15tr / Có 4111: 10tr, Có 4112: 5tr",
      "Nợ 111: 10tr, Nợ 4112: 5tr / Có 4111: 15tr",
      "Nợ 111: 15tr / Có 411: 10tr, Có 711: 5tr"
    ],
    "correct": 1,
    "explanation": "Phát hành CP: TK 4111 = Mệnh giá (1,000 × 10,000đ = 10 triệu). TK 4112 = Thặng dư vốn cổ phần = giá phát hành − mệnh giá (1,000 × 5,000đ = 5 triệu). Tổng thu = 15 triệu. Thặng dư không ghi vào doanh thu (TK 711)."
  },
  {
    "id": 1086,
    "code": "KCB021",
    "category": "ke_toan_co_ban",
    "question": "Khấu hao TSCĐ theo phương pháp đường thẳng, nguyên giá 600 triệu, thời gian KH 10 năm. Mức KH tháng là:",
    "options": [
      "60 triệu",
      "6 triệu",
      "5 triệu",
      "50 triệu"
    ],
    "correct": 2,
    "explanation": "KH năm = 600tr / 10 = 60tr/năm. KH tháng = 60tr / 12 = 5tr/tháng. Hạch toán: Nợ 6274 (KH tại phân xưởng) hoặc 642 (KH tại VP) / Có 214: 5tr."
  },
  {
    "id": 1087,
    "code": "KCB022",
    "category": "ke_toan_co_ban",
    "question": "Theo TT200, khi kiểm kê phát hiện hàng hóa thiếu chưa rõ nguyên nhân, hạch toán ban đầu:",
    "options": [
      "Nợ 632 / Có 156",
      "Nợ 1381 / Có 156",
      "Nợ 811 / Có 156",
      "Nợ 138 / Có 156"
    ],
    "correct": 1,
    "explanation": "TK 1381: Tài sản thiếu chờ xử lý. Khi kiểm kê thiếu chưa rõ nguyên nhân: Nợ 1381 / Có 156 (theo giá xuất kho). Sau khi xác định nguyên nhân: Nợ 138/334/632/811 / Có 1381. Không ghi thẳng vào chi phí khi chưa có biên bản xử lý."
  },
  {
    "id": 1088,
    "code": "KCB023",
    "category": "ke_toan_co_ban",
    "question": "TK 157 'Hàng gửi đi bán' được dùng khi:",
    "options": [
      "Giao hàng cho khách và đã thu tiền",
      "Giao hàng cho đại lý ký gửi, chưa xác nhận bán",
      "Hàng đang vận chuyển đến kho",
      "Hàng xuất khẩu đang trên tàu"
    ],
    "correct": 1,
    "explanation": "TK 157: Hàng đã giao cho bên nhận bán hộ (đại lý ký gửi) nhưng chưa có xác nhận đã bán cho người mua cuối cùng → hàng vẫn thuộc sở hữu của DN. Khi đại lý xác nhận bán: Nợ 632 / Có 157 + Ghi nhận doanh thu."
  },
  {
    "id": 1089,
    "code": "KCB024",
    "category": "ke_toan_co_ban",
    "question": "Tỷ số thanh khoản hiện hành (Current Ratio) được tính như thế nào?",
    "options": [
      "Tài sản ngắn hạn / Tổng nợ phải trả",
      "Tài sản ngắn hạn / Nợ ngắn hạn",
      "(Tiền + Phải thu) / Nợ ngắn hạn",
      "Tổng tài sản / Tổng nợ phải trả"
    ],
    "correct": 1,
    "explanation": "Current Ratio (CR) = Tài sản ngắn hạn / Nợ ngắn hạn. CR ≥ 2: Tốt. CR = 1–2: Bình thường. CR < 1: Nguy hiểm (không đủ TS ngắn hạn trả nợ ngắn hạn). Quick Ratio = (TSNH − HTK) / Nợ ngắn hạn."
  },
  {
    "id": 1090,
    "code": "KCB025",
    "category": "ke_toan_co_ban",
    "question": "Theo TT200, báo cáo lưu chuyển tiền tệ (BCLCTT) theo phương pháp gián tiếp bắt đầu từ:",
    "options": [
      "Tiền thu từ bán hàng",
      "Lợi nhuận sau thuế TNDN",
      "Lợi nhuận trước thuế TNDN",
      "Doanh thu thuần"
    ],
    "correct": 2,
    "explanation": "BCLCTT phương pháp gián tiếp bắt đầu từ LN TRƯỚC THUẾ (không phải sau thuế), sau đó điều chỉnh: + Khấu hao, + Dự phòng, ± Thay đổi vốn lưu động, − Thuế TNDN đã nộp. Cuối cùng = Tiền thuần từ HĐKD."
  },
  {
    "id": 1091,
    "code": "KCB026",
    "category": "ke_toan_co_ban",
    "question": "Chứng từ nào là bắt buộc khi mua hàng hóa trị giá 25 triệu đồng để được khấu trừ VAT và tính vào chi phí hợp lý?",
    "options": [
      "Hóa đơn GTGT",
      "Hóa đơn GTGT + Thanh toán qua ngân hàng",
      "Hợp đồng mua bán + Hóa đơn GTGT",
      "Hóa đơn GTGT + Phiếu xuất kho của người bán"
    ],
    "correct": 1,
    "explanation": "Giao dịch ≥ 20 triệu đồng: BẮT BUỘC thanh toán qua ngân hàng để: (1) Được khấu trừ VAT đầu vào; (2) Chi phí được tính vào TNDN. Chỉ có HĐ GTGT mà không có chứng từ thanh toán NH → mất quyền khấu trừ VAT + bị loại chi phí."
  },
  {
    "id": 1092,
    "code": "KCB027",
    "category": "ke_toan_co_ban",
    "question": "Phương pháp khấu hao theo sản lượng phù hợp nhất với:",
    "options": [
      "Nhà xưởng, văn phòng",
      "Máy móc sản xuất, xe tải phụ thuộc vào mức độ sử dụng",
      "Phần mềm máy tính",
      "Bằng sáng chế, thương hiệu"
    ],
    "correct": 1,
    "explanation": "KH theo sản lượng: KH/đơn vị = Nguyên giá / Tổng sản lượng dự kiến. KH kỳ = KH/đơn vị × Sản lượng thực tế kỳ đó. Phù hợp khi tài sản hao mòn tỷ lệ với mức sử dụng (xe tải theo km, máy theo giờ chạy). Nhà xưởng/phần mềm dùng đường thẳng."
  },
  {
    "id": 1093,
    "code": "KCB028",
    "category": "ke_toan_co_ban",
    "question": "ROE (Return on Equity) được tính như thế nào?",
    "options": [
      "LN sau thuế / Tổng tài sản",
      "LN sau thuế / Vốn chủ sở hữu bình quân",
      "LN trước thuế / Vốn chủ sở hữu",
      "Doanh thu thuần / Vốn chủ sở hữu"
    ],
    "correct": 1,
    "explanation": "ROE = LN sau thuế / VCSH bình quân × 100%. VCSH bình quân = (Đầu kỳ + Cuối kỳ) / 2. ROE > 15%: Tốt. ROA = LN sau thuế / Tổng TS bình quân. Chỉ số Dupont: ROE = Net Margin × Asset Turnover × Financial Leverage."
  },
  {
    "id": 1094,
    "code": "KCB029",
    "category": "ke_toan_co_ban",
    "question": "Khi phát sinh chi phí sửa chữa lớn TSCĐ không đủ điều kiện nâng cấp, hạch toán vào:",
    "options": [
      "TK 211 (tăng nguyên giá TSCĐ)",
      "TK 241 (XDCB dở dang)",
      "TK 642 hoặc TK 241 phân bổ dần",
      "TK 214 (hao mòn TSCĐ)"
    ],
    "correct": 2,
    "explanation": "Sửa chữa thường xuyên: Vào chi phí ngay (641/642). Sửa chữa lớn, có kế hoạch: Tập hợp vào TK 241, sau khi hoàn thành phân bổ vào chi phí theo thời gian (qua TK 242). KHÔNG tăng nguyên giá TSCĐ trừ khi sửa chữa mang tính nâng cấp (tăng công suất, kéo dài tuổi thọ)."
  },
  {
    "id": 1095,
    "code": "KCB030",
    "category": "ke_toan_co_ban",
    "question": "Biên lợi nhuận gộp (Gross Margin) = 30% có nghĩa là:",
    "options": [
      "Cứ 100đ doanh thu thì lợi nhuận sau thuế là 30đ",
      "Cứ 100đ doanh thu thì lợi nhuận gộp (sau giá vốn, trước các chi phí khác) là 30đ",
      "Chi phí bán hàng chiếm 30% doanh thu",
      "Giá vốn chiếm 30% doanh thu"
    ],
    "correct": 1,
    "explanation": "Gross Margin = (DT thuần − Giá vốn) / DT thuần × 100%. GM = 30% → Giá vốn = 70% DT. Sau GM còn phải trừ CP bán hàng, QLDN, tài chính mới ra LN hoạt động. GM thấp → ngành cạnh tranh cao hoặc bị bơm giá vốn."
  },
  {
    "id": 1096,
    "code": "KCB031",
    "category": "ke_toan_co_ban",
    "question": "Theo nguyên tắc thận trọng, khi không chắc chắn về một kết quả, kế toán nên:",
    "options": [
      "Không ghi nhận vào sổ kế toán",
      "Chọn phương án cho thấy tài sản/doanh thu cao hơn",
      "Chọn phương án cho thấy tài sản/doanh thu thấp hơn và nợ/chi phí cao hơn",
      "Hỏi ý kiến kiểm toán trước khi ghi nhận"
    ],
    "correct": 2,
    "explanation": "Nguyên tắc thận trọng (Prudence/Conservatism): Không đánh giá cao tài sản và doanh thu; không đánh giá thấp nợ và chi phí. Ghi nhận ngay khi có khả năng tổn thất; chỉ ghi nhận lợi ích khi chắc chắn. Phòng tránh việc công bố BCTC quá lạc quan."
  },
  {
    "id": 1097,
    "code": "KCB032",
    "category": "ke_toan_co_ban",
    "question": "Số ngày thu tiền bình quân (DSO — Days Sales Outstanding) được tính:",
    "options": [
      "Doanh thu / Phải thu bình quân",
      "Phải thu bình quân / Doanh thu × 365",
      "Phải thu cuối kỳ / Doanh thu ngày",
      "365 / Vòng quay phải thu"
    ],
    "correct": 1,
    "explanation": "DSO = Phải thu bình quân / Doanh thu × 365 ngày (hoặc 360). Phải thu bình quân = (Đầu kỳ + Cuối kỳ) / 2. DSO = 45 ngày nghĩa là trung bình 45 ngày sau bán hàng mới thu được tiền. DSO thấp → thu tiền nhanh → tốt. Đáp án D là cách khác nhưng đáp án B trực tiếp hơn."
  },
  {
    "id": 1098,
    "code": "KCB033",
    "category": "ke_toan_co_ban",
    "question": "Chứng từ kế toán phải có yếu tố nào sau đây theo Điều 16 Luật Kế toán 2015?",
    "options": [
      "Tên, số hiệu chứng từ; Ngày, tháng, năm; Nội dung nghiệp vụ; Số lượng, đơn giá, số tiền; Chữ ký người có thẩm quyền",
      "Chỉ cần có chữ ký kế toán trưởng",
      "Tên, ngày tháng, số tiền và con dấu công ty",
      "Chứng từ điện tử không cần chữ ký"
    ],
    "correct": 0,
    "explanation": "Điều 16 Luật KT 2015: Chứng từ phải có đầy đủ: (1) Tên, số hiệu CT; (2) Ngày, tháng, năm lập; (3) Tên, địa chỉ đơn vị/cá nhân lập và nhận; (4) Nội dung NV kinh tế; (5) Số lượng, đơn giá, số tiền; (6) Chữ ký người có trách nhiệm. Thiếu một trong các yếu tố → chứng từ không hợp lệ."
  },
  {
    "id": 1099,
    "code": "KCB034",
    "category": "ke_toan_co_ban",
    "question": "Doanh nghiệp A mua 70% cổ phần của DN B. Quan hệ giữa A và B là:",
    "options": [
      "Công ty liên kết (Associate)",
      "Công ty liên doanh (Joint Venture)",
      "Công ty con (Subsidiary)",
      "Đầu tư thụ động"
    ],
    "correct": 2,
    "explanation": "Nắm > 50% quyền bỏ phiếu → A kiểm soát B → B là công ty con của A. TK 221. Nắm 20–50% → công ty liên kết, TK 222. < 20% → đầu tư thụ động, TK 228. Công ty liên doanh → kiểm soát chung theo thỏa thuận hợp đồng."
  },
  {
    "id": 1100,
    "code": "KCB035",
    "category": "ke_toan_co_ban",
    "question": "Kế toán thu hồi khoản nợ phải thu đã xóa sổ (bad debt recovery), ghi nhận:",
    "options": [
      "Nợ 111 / Có 711 (Thu nhập khác)",
      "Nợ 111 / Có 131 (Phải thu KH)",
      "Nợ 111 / Có 2293 → Nợ 2293 / Có 642",
      "Phục hồi bút toán xóa sổ: Nợ 131 / Có 2293, sau đó Nợ 111 / Có 131"
    ],
    "correct": 3,
    "explanation": "Quy trình: (1) Phục hồi khoản xóa sổ: Nợ 131 / Có 2293 (lập lại dự phòng đã dùng để xóa). (2) Thu tiền: Nợ 111 / Có 131. Nếu đã theo dõi ngoại bảng (TK 004): Xuất TK 004. Cách này đảm bảo lịch sử kế toán chính xác."
  },
  {
    "id": 1101,
    "code": "KCB036",
    "category": "ke_toan_co_ban",
    "question": "Vòng quay hàng tồn kho (Inventory Turnover) cao cho thấy:",
    "options": [
      "DN dự trữ hàng nhiều, an toàn sản xuất cao",
      "DN bán hàng nhanh, HTK không bị ứ đọng",
      "DN có lợi nhuận cao",
      "DN có nợ phải trả lớn"
    ],
    "correct": 1,
    "explanation": "Inventory Turnover = Giá vốn / HTK bình quân. Turnover cao → bán nhanh, quản lý HTK hiệu quả. DIO (Days Inventory Outstanding) = 365 / Turnover. DIO thấp → hàng bán nhanh. Cần cân bằng: turnover quá cao có thể dẫn đến thiếu hàng (stockout)."
  },
  {
    "id": 1102,
    "code": "KCB037",
    "category": "ke_toan_co_ban",
    "question": "Theo TT200, số dư bên Nợ của TK 421 'Lợi nhuận sau thuế chưa phân phối' có nghĩa là:",
    "options": [
      "DN có lợi nhuận tích lũy chưa chia cổ tức",
      "DN đang có lỗ lũy kế",
      "DN đã phân phối hết lợi nhuận",
      "DN chưa kết chuyển TK 911"
    ],
    "correct": 1,
    "explanation": "TK 421 thường có số dư Có (lợi nhuận tích lũy). Nếu có số dư Nợ → DN bị lỗ lũy kế (accumulated deficit). Điều này ảnh hưởng đến khả năng chia cổ tức, vay vốn, và là dấu hiệu tài chính tiêu cực."
  },
  {
    "id": 1103,
    "code": "KCB038",
    "category": "ke_toan_co_ban",
    "question": "Chi phí nào sau đây KHÔNG được tính vào nguyên giá hàng tồn kho?",
    "options": [
      "Chi phí vận chuyển hàng về kho",
      "Chi phí bốc xếp hàng hóa khi nhập kho",
      "Chi phí bán hàng và quảng cáo",
      "Thuế nhập khẩu và phí hải quan"
    ],
    "correct": 2,
    "explanation": "Nguyên giá HTK (VAS 02) = Giá mua + Chi phí mua (vận chuyển, bốc xếp, thuế NK, phí HQ) + Chi phí chế biến. KHÔNG bao gồm: CPBH, QLDN, chi phí bảo quản ngoài chu kỳ sản xuất bình thường, lãi vay (trừ trường hợp đặc biệt). Đáp án C là chi phí thời kỳ, không vào nguyên giá HTK."
  },
  {
    "id": 1104,
    "code": "KCB039",
    "category": "ke_toan_co_ban",
    "question": "Năm tài chính của hầu hết doanh nghiệp Việt Nam theo quy định là:",
    "options": [
      "01/04 đến 31/03",
      "01/07 đến 30/06",
      "01/01 đến 31/12",
      "Tùy doanh nghiệp quyết định"
    ],
    "correct": 2,
    "explanation": "Theo Điều 13 Luật KT 2015: Năm tài chính là 12 tháng, bắt đầu từ ngày 01/01 đến 31/12 dương lịch. DN có thể đăng ký năm tài chính khác (01/04 hoặc 01/07) nhưng phải thông báo cho CQT và áp dụng nhất quán. Tuy nhiên đa số DN VN dùng 01/01–31/12."
  },
  {
    "id": 1105,
    "code": "KCB040",
    "category": "ke_toan_co_ban",
    "question": "Khi thanh lý TSCĐ, giá trị còn lại 50 triệu, thu tiền thanh lý 30 triệu, chi phí tháo dỡ 5 triệu. Kết quả thanh lý:",
    "options": [
      "Lãi 30 triệu − 50 triệu = Lỗ 20 triệu",
      "Lãi 30 triệu − 50 triệu − 5 triệu = Lỗ 25 triệu",
      "Lỗ 50 − 30 = 20 triệu",
      "Không có lãi/lỗ vì thanh lý ghi vào TK 214"
    ],
    "correct": 1,
    "explanation": "Thanh lý TSCĐ: Thu = 30tr. Chi: Giá trị còn lại (50tr) + CP tháo dỡ (5tr) = 55tr. Lỗ thanh lý = 55 − 30 = 25tr. Hạch toán: Nợ 214 (hao mòn), Nợ 811 (lỗ thanh lý 25tr), Nợ 111 (thu 30tr) / Có 211 (nguyên giá TSCĐ). Và: Nợ 811 / Có 111 (chi phí tháo dỡ 5tr)."
  },
  {
    "id": 1106,
    "code": "KTT001",
    "category": "ktt_chung_chi",
    "question": "Theo Quyết định 1505/QĐ-BTC, chứng chỉ kế toán trưởng yêu cầu kinh nghiệm thực tế kế toán tối thiểu:",
    "options": [
      "1 năm",
      "2 năm",
      "3 năm",
      "5 năm"
    ],
    "correct": 1,
    "explanation": "Điều kiện cấp chứng chỉ KTT: (1) Tốt nghiệp CĐ/ĐH kế toán, kiểm toán hoặc tài chính; (2) Thực hành nghề kế toán tối thiểu 2 năm với người có bằng ĐH, 3 năm với CĐ; (3) Qua kỳ thi cấp chứng chỉ của Bộ Tài chính. Chứng chỉ KTT là điều kiện bổ nhiệm kế toán trưởng trong DN vừa và lớn."
  },
  {
    "id": 1107,
    "code": "KTT002",
    "category": "ktt_chung_chi",
    "question": "Kế toán trưởng có quyền từ chối thực hiện lệnh của giám đốc nếu lệnh đó vi phạm luật kế toán. Căn cứ pháp lý:",
    "options": [
      "Không có quyền từ chối lệnh giám đốc",
      "Điều 54 Luật Kế toán 2015: KTT có quyền từ chối thực hiện công việc trái pháp luật",
      "Chỉ được từ chối nếu có văn bản bằng chứng",
      "Chỉ đúng với KTT tại DNNN"
    ],
    "correct": 1,
    "explanation": "Điều 54 Luật KT 2015: KTT có quyền và nghĩa vụ từ chối thực hiện các yêu cầu trái pháp luật về kế toán. Nếu bị ép buộc → có quyền báo cáo với cơ quan có thẩm quyền. Không thực hiện quyền từ chối mà làm sai → KTT cùng chịu trách nhiệm với người ra lệnh."
  },
  {
    "id": 1108,
    "code": "KTT003",
    "category": "ktt_chung_chi",
    "question": "Đơn vị kế toán nào BẮT BUỘC phải bố trí kế toán trưởng theo Luật Kế toán 2015?",
    "options": [
      "Tất cả doanh nghiệp",
      "Cơ quan nhà nước, đơn vị sự nghiệp công lập; DN Nhà nước; DN, tổ chức tín dụng có quy mô lớn",
      "Chỉ công ty niêm yết",
      "Chỉ DN có vốn FDI"
    ],
    "correct": 1,
    "explanation": "Điều 50 Luật KT 2015 quy định các đơn vị phải có KTT: Cơ quan NN, đơn vị sự nghiệp công lập; DN Nhà nước; Hợp tác xã; DN, tổ chức kinh tế có quy mô lớn. DN nhỏ và siêu nhỏ có thể dùng phụ trách kế toán (người đại diện pháp luật hoặc nhân viên kế toán) thay KTT."
  },
  {
    "id": 1109,
    "code": "KTT004",
    "category": "ktt_chung_chi",
    "question": "Trong bộ máy kế toán doanh nghiệp sản xuất vừa, kế toán trưởng thường kiêm nhiệm chức năng nào?",
    "options": [
      "Thủ quỹ",
      "Giám đốc điều hành",
      "CFO (Giám đốc tài chính) kiêm KTT nếu DN chưa có CFO riêng",
      "Kiểm toán nội bộ"
    ],
    "correct": 2,
    "explanation": "Thực tế tại DN vừa VN: KTT thường đảm nhận cả chức năng CFO: Lập kế hoạch tài chính, phân tích kinh doanh, quản lý dòng tiền, quan hệ ngân hàng. Tuy nhiên Luật KT quy định KTT không được kiêm thủ quỹ (Điều 51). Nhiệm vụ KTT: Phụ trách bộ máy kế toán, giám sát chứng từ, lập BCTC."
  },
  {
    "id": 1110,
    "code": "KTT005",
    "category": "ktt_chung_chi",
    "question": "Phần mềm kế toán được sử dụng tại DN phải đáp ứng yêu cầu gì về mặt pháp lý?",
    "options": [
      "Phải được Bộ Tài chính chứng nhận",
      "Phải đáp ứng các chuẩn mực và chế độ kế toán hiện hành, không bắt buộc chứng nhận BTC nhưng phải được kiểm tra",
      "Phải là phần mềm trong nước (MISA, Fast, Bravo)",
      "Không có yêu cầu pháp lý đặc biệt"
    ],
    "correct": 1,
    "explanation": "Theo Thông tư 39/2011/TT-BTC (đã được cập nhật): PM kế toán phải đảm bảo: (1) Đáp ứng yêu cầu VAS và chế độ kế toán; (2) Tạo ra được đầy đủ báo cáo, chứng từ theo quy định; (3) Bảo mật dữ liệu, phòng chống giả mạo. Không bắt buộc phải có chứng nhận BTC nhưng DN chịu trách nhiệm về tính hợp lệ của dữ liệu đầu ra."
  },
  {
    "id": 1111,
    "code": "KTT006",
    "category": "ktt_chung_chi",
    "question": "Nội dung Biên bản bàn giao kế toán khi thay kế toán trưởng phải bao gồm:",
    "options": [
      "Chỉ cần bàn giao con dấu và sổ sách",
      "Số dư tất cả các tài khoản, tình trạng chứng từ, sổ sách kế toán, công nợ, thuế còn phải nộp và các vấn đề tồn đọng",
      "Chỉ cần bàn giao BCTC năm gần nhất",
      "Không cần lập biên bản"
    ],
    "correct": 1,
    "explanation": "Biên bản bàn giao kế toán phải đầy đủ: (1) Số dư các TK theo sổ; (2) Tình trạng sổ kế toán (đã chốt đến ngày nào); (3) Danh sách chứng từ chưa hạch toán; (4) Tình trạng khai nộp thuế; (5) Các khoản nợ tồn đọng, tranh chấp; (6) Tình trạng công nợ phải thu/trả; (7) Các vấn đề kế toán chưa giải quyết. Có chữ ký cả hai bên và ban giám đốc."
  },
  {
    "id": 1112,
    "code": "KTT007",
    "category": "ktt_chung_chi",
    "question": "Kiểm soát nội bộ trong lĩnh vực kế toán tài chính bao gồm nguyên tắc nào là cơ bản nhất?",
    "options": [
      "Giám đốc là người duy nhất kiểm soát tất cả",
      "Phân tách nhiệm vụ (Segregation of Duties): Người lập chứng từ ≠ Người phê duyệt ≠ Người hạch toán ≠ Người kiểm tra",
      "Tất cả giao dịch phải có chữ ký kế toán trưởng",
      "Chỉ kiểm soát các giao dịch lớn trên 100 triệu"
    ],
    "correct": 1,
    "explanation": "Phân tách nhiệm vụ là nguyên tắc kiểm soát nội bộ cơ bản nhất (COSO Framework): Ngăn ngừa gian lận bằng cách không cho một người kiểm soát toàn bộ chu trình. VD: Bộ phận mua hàng ≠ Kế toán thanh toán ≠ Thủ quỹ. Bộ phận bán hàng ≠ Thu tiền ≠ Đối chiếu công nợ. KTT ≠ Thủ quỹ (Luật KT 2015 cũng quy định)."
  },
  {
    "id": 1113,
    "code": "KTT008",
    "category": "ktt_chung_chi",
    "question": "Khi phát hiện sai sót trong BCTC đã nộp CQT năm trước, kế toán trưởng phải xử lý thế nào?",
    "options": [
      "Sửa lại luôn trong sổ năm nay, không cần báo CQT",
      "Lập tờ khai bổ sung điều chỉnh và nộp cho CQT, điều chỉnh số liệu tương ứng trong BCTC năm nay",
      "Bỏ qua nếu sai sót nhỏ dưới 10 triệu",
      "Chỉ cần thuyết minh trong BCTC năm nay"
    ],
    "correct": 1,
    "explanation": "Sai sót BCTC/tờ khai đã nộp: (1) Nộp tờ khai bổ sung điều chỉnh cho CQT (thuế + VAT nếu có ảnh hưởng); (2) Điều chỉnh số liệu so sánh trong BCTC năm hiện tại theo VAS 29 (Thay đổi chính sách kế toán, ước tính và sai sót); (3) Thuyết minh BCTC giải thích rõ ảnh hưởng. Sai sót trọng yếu → hồi tố (restate)."
  },
  {
    "id": 1114,
    "code": "KTT009",
    "category": "ktt_chung_chi",
    "question": "Trong quản lý rủi ro tài chính, KTT cần giám sát chỉ số nào để phát hiện sớm nguy cơ mất khả năng thanh toán?",
    "options": [
      "Chỉ theo dõi lợi nhuận hàng tháng",
      "Current Ratio, Quick Ratio, Days Cash on Hand, dòng tiền từ HĐKD (Operating Cash Flow)",
      "Chỉ theo dõi doanh thu",
      "ROE và ROA"
    ],
    "correct": 1,
    "explanation": "KTT cần theo dõi chủ động: (1) Current Ratio < 1: Không đủ TS ngắn hạn trả nợ; (2) Quick Ratio (trừ HTK) < 0.5: Nguy hiểm; (3) Days Cash on Hand: Số ngày có thể hoạt động với tiền mặt hiện có; (4) Operating Cash Flow âm liên tục: DN thu ít hơn chi dù có lợi nhuận kế toán; (5) Working Capital < 0. Phát hiện sớm → có phương án trước khi khủng hoảng."
  },
  {
    "id": 1115,
    "code": "KTT010",
    "category": "ktt_chung_chi",
    "question": "Hệ thống kiểm soát nội bộ theo COSO 2013 có bao nhiêu cấu phần chính?",
    "options": [
      "3",
      "5",
      "7",
      "9"
    ],
    "correct": 1,
    "explanation": "COSO 2013 Framework có 5 cấu phần: (1) Control Environment — Môi trường kiểm soát; (2) Risk Assessment — Đánh giá rủi ro; (3) Control Activities — Hoạt động kiểm soát; (4) Information & Communication — Thông tin và giao tiếp; (5) Monitoring Activities — Giám sát. Áp dụng rộng rãi trong kiểm toán nội bộ và SOX compliance."
  },
  {
    "id": 1116,
    "code": "KTT011",
    "category": "ktt_chung_chi",
    "question": "KTT nhận thấy giám đốc chi nhánh hợp thức hóa chi phí qua hóa đơn giả. KTT phải làm gì?",
    "options": [
      "Im lặng để không mất việc",
      "Từ chối hạch toán, báo cáo lên hội đồng quản trị hoặc kiểm toán nội bộ; nếu không được giải quyết → có thể báo cơ quan nhà nước có thẩm quyền",
      "Hạch toán rồi thuyết minh trong BCTC",
      "Chỉ từ chối hạch toán, không cần báo cáo ai"
    ],
    "correct": 1,
    "explanation": "Theo Điều 19 Luật KT 2015 và đạo đức nghề nghiệp: KTT có nhiệm vụ phát hiện và ngăn chặn hành vi vi phạm. Quy trình: (1) Từ chối hạch toán chứng từ không hợp lệ; (2) Báo cáo Hội đồng quản trị/Ban kiểm soát; (3) Nếu không được giải quyết → báo cơ quan có thẩm quyền. KTT không có hành động → cùng chịu trách nhiệm pháp lý về gian lận."
  },
  {
    "id": 1117,
    "code": "KTT012",
    "category": "ktt_chung_chi",
    "question": "Deadline nộp BCTC năm cho Cục Thống kê và Sở Kế hoạch Đầu tư đối với DN thông thường:",
    "options": [
      "31/01 năm sau",
      "31/03 năm sau",
      "30/04 năm sau",
      "30/06 năm sau"
    ],
    "correct": 1,
    "explanation": "Theo TT200/2014 và Nghị định về chế độ kế toán: DN phải nộp BCTC năm chậm nhất 90 ngày sau khi kết thúc năm tài chính. Với năm TC 31/12 → hạn nộp: 31/03 năm sau. Công ty mẹ nộp BCTC hợp nhất: 90 ngày sau kết thúc năm. DN niêm yết: Có quy định riêng của UBCK."
  },
  {
    "id": 1118,
    "code": "KTT013",
    "category": "ktt_chung_chi",
    "question": "Trong đánh giá hiệu quả hoạt động (Performance Management), KTT cần xây dựng hệ thống KPI như thế nào?",
    "options": [
      "Chỉ theo dõi doanh thu và lợi nhuận",
      "KPI đa chiều: Tài chính + Khách hàng + Quy trình nội bộ + Học hỏi-phát triển (Balanced Scorecard)",
      "Chỉ dùng chỉ số tài chính vì KTT là người tài chính",
      "KPI do ban giám đốc tự thiết lập, KTT không tham gia"
    ],
    "correct": 1,
    "explanation": "KTT hiện đại cần vận hành Balanced Scorecard (BSC — Kaplan & Norton): (1) Financial: ROE, EBITDA, dòng tiền; (2) Customer: Tỷ lệ giữ chân KH, NPS; (3) Internal Process: Thời gian đóng sổ, tỷ lệ lỗi; (4) Learning & Growth: Đào tạo, hệ thống IT. BSC kết nối chiến lược với chỉ số đo lường, KTT đóng vai trò cầu nối."
  },
  {
    "id": 1119,
    "code": "KTT014",
    "category": "ktt_chung_chi",
    "question": "Theo Thông tư 200, kế toán trưởng phải ký tên trên báo cáo tài chính tại vị trí nào?",
    "options": [
      "Không cần ký, chỉ cần đóng dấu",
      "Ký tên tại chỗ 'Kế toán trưởng' cùng với người đại diện pháp luật (Giám đốc/Tổng GĐ)",
      "Chỉ ký ở trang cuối BCTC",
      "Ký tên thay cho Giám đốc nếu Giám đốc vắng mặt"
    ],
    "correct": 1,
    "explanation": "BCTC hợp lệ phải có đầy đủ: (1) Chữ ký + họ tên người lập BCTC; (2) Chữ ký + họ tên Kế toán trưởng; (3) Chữ ký + họ tên + đóng dấu của Người đại diện pháp luật (GĐ). Thiếu bất kỳ chữ ký nào → BCTC không hợp lệ. Nếu không có KTT: người phụ trách kế toán ký thay."
  },
  {
    "id": 1120,
    "code": "KTT015",
    "category": "ktt_chung_chi",
    "question": "Phân tích tài chính dự báo (Financial Forecasting) là nhiệm vụ quan trọng của KTT hiện đại. Công cụ nào không phù hợp?",
    "options": [
      "Excel với mô hình tài chính 3 câu (3-statement model)",
      "Phân tích tỷ số tài chính lịch sử",
      "Xem lịch tử vi để đoán thị trường",
      "Rolling forecast (dự báo cuốn chiếu 12 tháng)"
    ],
    "correct": 2,
    "explanation": "KTT dùng các công cụ dựa trên dữ liệu và mô hình kinh tế: (1) 3-statement model: P&L + Balance Sheet + Cash Flow gắn kết nhau; (2) Phân tích tỷ số lịch sử + ngành để dự báo; (3) Rolling forecast: Cập nhật dự báo 12 tháng liên tục mỗi tháng; (4) Scenario analysis: Tốt/xấu/cơ sở. Không dùng phương pháp không có cơ sở khoa học."
  },
  {
    "id": 1121,
    "code": "KTT016",
    "category": "ktt_chung_chi",
    "question": "Khi DN có dấu hiệu mất khả năng thanh toán (insolvent), KTT có trách nhiệm đặc biệt gì?",
    "options": [
      "Tiếp tục làm việc bình thường",
      "Ngừng ký chứng từ ngay lập tức",
      "Báo cáo ngay với Hội đồng quản trị và đề xuất phương án xử lý; tuân thủ ưu tiên thanh toán theo Luật Phá sản nếu DN tiến hành thủ tục phá sản",
      "Chuyển tài sản cho cổ đông"
    ],
    "correct": 2,
    "explanation": "Khi DN có dấu hiệu mất khả năng thanh toán: KTT phải: (1) Báo cáo ngay HĐQT/BKS; (2) Theo dõi chặt dòng tiền; (3) Ưu tiên trả nợ lương NLĐ trước; (4) Không che giấu hoặc chuyển tài sản trái pháp luật (đây là hành vi gian lận và có thể bị truy cứu hình sự); (5) Theo Luật Phá sản 2014: Nợ có bảo đảm → Chi phí phá sản → Lương NLĐ → Thuế → Nợ không có bảo đảm."
  },
  {
    "id": 1122,
    "code": "KTT017",
    "category": "ktt_chung_chi",
    "question": "Tổ chức hội nghị kế toán hàng năm trong DN mục đích chính là:",
    "options": [
      "Đây chỉ là hoạt động hành chính không có giá trị",
      "Đánh giá toàn bộ hoạt động kế toán, tài chính năm qua; xác định tồn đọng; phổ biến thay đổi pháp luật; lập kế hoạch năm tới; nâng cao năng lực bộ máy kế toán",
      "Chỉ để báo cáo thành tích",
      "Để ký kết hợp đồng với kiểm toán"
    ],
    "correct": 1,
    "explanation": "Hội nghị kế toán hàng năm là hoạt động quản trị quan trọng: (1) Tổng kết năm tài chính; (2) Phân tích nguyên nhân chênh lệch kế hoạch-thực tế; (3) Cập nhật thay đổi pháp luật thuế-kế toán; (4) Phân công, phân quyền bộ máy kế toán; (5) Đào tạo, nâng cao năng lực; (6) Lập kế hoạch quyết toán thuế và kiểm toán. KTT chủ trì."
  },
  {
    "id": 1123,
    "code": "KTT018",
    "category": "ktt_chung_chi",
    "question": "Năm tiêu chuẩn đạo đức nghề nghiệp kế toán theo IFAC (Liên đoàn Kế toán quốc tế) là:",
    "options": [
      "Tính thành thật, trung thực, khách quan, bảo mật, năng lực chuyên môn",
      "Chỉ cần trung thực và bảo mật",
      "Tuân thủ pháp luật là đủ",
      "Theo quy định của từng quốc gia"
    ],
    "correct": 0,
    "explanation": "5 nguyên tắc đạo đức nghề kế toán (IFAC Code of Ethics): (1) Integrity — Tính thành thật; (2) Objectivity — Khách quan; (3) Professional Competence & Due Care — Năng lực chuyên môn; (4) Confidentiality — Bảo mật; (5) Professional Behavior — Hành vi nghề nghiệp. Đây cũng là cơ sở cho Chuẩn mực đạo đức nghề nghiệp kế toán VN (VSAC)."
  },
  {
    "id": 1124,
    "code": "KTT019",
    "category": "ktt_chung_chi",
    "question": "Lập ngân sách linh hoạt (Flexible Budget) khác ngân sách tĩnh (Static Budget) như thế nào?",
    "options": [
      "Ngân sách linh hoạt thay đổi theo thời gian còn tĩnh thì không",
      "Ngân sách linh hoạt điều chỉnh theo mức hoạt động thực tế, cho phép so sánh công bằng hơn với thực tế",
      "Ngân sách tĩnh chính xác hơn",
      "Không có sự khác biệt đáng kể"
    ],
    "correct": 1,
    "explanation": "Static Budget: Lập 1 lần đầu năm theo sản lượng kế hoạch → So sánh với thực tế → Variance do cả sản lượng lẫn chi phí đơn vị gây ra. Flexible Budget: Tính lại ngân sách theo sản lượng THỰC TẾ → So sánh với thực tế → Variance chỉ do chi phí đơn vị. KTT dùng flexible budget để phân tích hiệu quả kiểm soát chi phí chính xác hơn."
  },
  {
    "id": 1125,
    "code": "KTT020",
    "category": "ktt_chung_chi",
    "question": "KTT cần chuẩn bị gì trước kỳ kiểm toán bên ngoài (external audit)?",
    "options": [
      "Chỉ cần chuẩn bị BCTC",
      "Hoàn chỉnh sổ sách; chuẩn bị hồ sơ chứng từ theo yêu cầu của KTV; đối chiếu số dư; giải thích các khoản bất thường; chuẩn bị giải trình các vấn đề phức tạp",
      "Chỉ cần có giám đốc phối hợp",
      "Không cần chuẩn bị gì đặc biệt"
    ],
    "correct": 1,
    "explanation": "Chuẩn bị kiểm toán ngoài: (1) Chốt sổ và đối chiếu số dư tất cả TK; (2) Kiểm tra đối chiếu công nợ phải thu/phải trả; (3) Kiểm kê HTK, TSCĐ; (4) Chuẩn bị hồ sơ dự phòng (phải thu khó đòi, HTK); (5) Đảm bảo chứng từ đầy đủ, phân loại theo yêu cầu; (6) Chuẩn bị nhân sự phối hợp (không để KTV chờ); (7) Giải thích trước các khoản mục bất thường để tránh ý kiến ngoại trừ."
  },
  {
    "id": 1126,
    "code": "VAT001",
    "category": "thue_gtgt",
    "question": "Thuế suất VAT phổ thông hiện hành tại Việt Nam là:",
    "options": [
      "5%",
      "8%",
      "10%",
      "12%"
    ],
    "correct": 2,
    "explanation": "Theo Luật Thuế GTGT hiện hành: Thuế suất 10% là mức phổ thông áp dụng cho đa số hàng hóa, dịch vụ. Thuế suất 5% cho nhóm thiết yếu (nước sạch, thuốc chữa bệnh, phân bón...). Thuế suất 0% cho hàng xuất khẩu."
  },
  {
    "id": 1127,
    "code": "VAT002",
    "category": "thue_gtgt",
    "question": "Hàng hóa nào sau đây áp dụng thuế suất VAT 5%?",
    "options": [
      "Quần áo may sẵn bán trong nước",
      "Nước sạch phục vụ sinh hoạt",
      "Dịch vụ du lịch lữ hành",
      "Thiết bị văn phòng"
    ],
    "correct": 1,
    "explanation": "Theo Điều 10 Luật GTGT: Thuế suất 5% áp dụng cho nước sạch phục vụ sản xuất và sinh hoạt, phân bón, thuốc phòng trừ sâu bệnh, thiết bị dụng cụ y tế, giáo dục, nhà ở xã hội. Quần áo, DV du lịch, thiết bị VP áp dụng 10%."
  },
  {
    "id": 1128,
    "code": "VAT003",
    "category": "thue_gtgt",
    "question": "Dịch vụ nào sau đây KHÔNG thuộc đối tượng chịu thuế GTGT?",
    "options": [
      "Dịch vụ tư vấn pháp lý",
      "Dịch vụ vận tải hàng hóa",
      "Dịch vụ tài chính, ngân hàng",
      "Dịch vụ xây dựng"
    ],
    "correct": 2,
    "explanation": "Theo Điều 5 Luật GTGT: Dịch vụ tài chính, tín dụng, ngân hàng (cho vay, bảo lãnh, phát hành thẻ...) thuộc đối tượng không chịu thuế GTGT. DV tư vấn, vận tải, xây dựng đều chịu VAT 10%."
  },
  {
    "id": 1129,
    "code": "VAT004",
    "category": "thue_gtgt",
    "question": "Điều kiện bắt buộc để được khấu trừ VAT đầu vào với giao dịch 25 triệu đồng là:",
    "options": [
      "Chỉ cần hóa đơn GTGT hợp lệ",
      "Hóa đơn GTGT + Thanh toán qua ngân hàng",
      "Hóa đơn GTGT + Hợp đồng kinh tế",
      "Hóa đơn GTGT + Phiếu nhập kho"
    ],
    "correct": 1,
    "explanation": "Điều 15 TT219/2013: Với giao dịch ≥ 20 triệu đồng (theo hóa đơn), bắt buộc phải thanh toán qua ngân hàng mới được khấu trừ VAT và tính chi phí TNDN. Thiếu chứng từ thanh toán NH → mất toàn bộ quyền khấu trừ VAT đầu vào."
  },
  {
    "id": 1130,
    "code": "VAT005",
    "category": "thue_gtgt",
    "question": "DN bán hàng chịu VAT 10%, doanh thu bán hàng (gồm VAT) là 110 triệu. VAT đầu ra phải nộp là:",
    "options": [
      "11 triệu",
      "10 triệu",
      "10.9 triệu",
      "9.09 triệu"
    ],
    "correct": 1,
    "explanation": "Giá thanh toán = Giá chưa VAT × (1 + 10%). Giá chưa VAT = 110tr / 1.1 = 100tr. VAT đầu ra = 100tr × 10% = 10tr. Hoặc: VAT = 110tr × 10/110 = 10tr. Đây là phương pháp khấu trừ (deductive method) áp dụng cho DN có doanh thu ≥ 1 tỷ/năm."
  },
  {
    "id": 1131,
    "code": "VAT006",
    "category": "thue_gtgt",
    "question": "Phương pháp tính thuế GTGT trực tiếp áp dụng cho đối tượng nào?",
    "options": [
      "Tất cả doanh nghiệp",
      "DN có doanh thu dưới 1 tỷ đồng/năm và hộ kinh doanh",
      "Chỉ hộ kinh doanh cá thể",
      "DN mới thành lập trong năm đầu"
    ],
    "correct": 1,
    "explanation": "Phương pháp trực tiếp: Áp dụng cho DN có doanh thu < 1 tỷ/năm, hộ/cá nhân kinh doanh. VAT = Doanh thu × Tỷ lệ % (1–5% tùy ngành). Phương pháp khấu trừ (10%): Áp dụng bắt buộc với DN doanh thu ≥ 1 tỷ/năm."
  },
  {
    "id": 1132,
    "code": "VAT007",
    "category": "thue_gtgt",
    "question": "Thời hạn kê khai và nộp thuế GTGT theo tháng là:",
    "options": [
      "Ngày 10 tháng sau",
      "Ngày 20 tháng sau",
      "Ngày 25 tháng sau",
      "Ngày cuối tháng sau"
    ],
    "correct": 1,
    "explanation": "Theo TT80/2021 và Điều 44 Luật Quản lý thuế 2019: Kê khai VAT tháng: Hạn nộp tờ khai + nộp thuế = ngày 20 của tháng tiếp theo. Kê khai VAT quý: Ngày 30 của tháng đầu quý sau. Nộp trễ → phạt chậm nộp 0.03%/ngày."
  },
  {
    "id": 1133,
    "code": "VAT008",
    "category": "thue_gtgt",
    "question": "DN sản xuất xuất khẩu trực tiếp hàng hóa. Thuế suất VAT đầu ra là:",
    "options": [
      "10%",
      "5%",
      "0%",
      "Không phải nộp VAT"
    ],
    "correct": 2,
    "explanation": "Hàng xuất khẩu áp dụng thuế suất 0% (không phải miễn thuế). Điều này nghĩa là: (1) VAT đầu ra = 0; (2) Vẫn được khấu trừ toàn bộ VAT đầu vào liên quan; (3) Phần đầu vào chưa khấu trừ hết có thể được hoàn thuế. Cần chứng từ xuất khẩu đầy đủ."
  },
  {
    "id": 1134,
    "code": "VAT009",
    "category": "thue_gtgt",
    "question": "VAT phải nộp theo phương pháp khấu trừ được tính như thế nào?",
    "options": [
      "VAT đầu ra × 10%",
      "Doanh thu × 10%",
      "VAT đầu ra − VAT đầu vào được khấu trừ",
      "Doanh thu − Chi phí × 10%"
    ],
    "correct": 2,
    "explanation": "Thuế GTGT phải nộp = VAT đầu ra − VAT đầu vào được khấu trừ. Nếu đầu vào > đầu ra → số âm = được khấu trừ sang kỳ sau hoặc hoàn thuế (nếu đủ điều kiện). Đây là bản chất phương pháp khấu trừ: người tiêu dùng cuối cùng chịu thuế."
  },
  {
    "id": 1135,
    "code": "VAT010",
    "category": "thue_gtgt",
    "question": "Hóa đơn VAT đầu vào bị ghi sai địa chỉ công ty người mua. Khi đó:",
    "options": [
      "Không được khấu trừ VAT",
      "Vẫn được khấu trừ vì sai địa chỉ không trọng yếu",
      "Yêu cầu người bán lập hóa đơn điều chỉnh, sau đó mới được khấu trừ",
      "Lập biên bản đính chính và vẫn khấu trừ được"
    ],
    "correct": 2,
    "explanation": "Hóa đơn sai thông tin người mua (tên, địa chỉ, MST): Phải lập hóa đơn điều chỉnh (hoặc thay thế theo NĐ123/2020). Chỉ sau khi có hóa đơn điều chỉnh mới kê khai khấu trừ VAT. Biên bản đính chính chỉ áp dụng cho HĐ giấy cũ (trước khi có HĐĐT bắt buộc)."
  },
  {
    "id": 1136,
    "code": "VAT011",
    "category": "thue_gtgt",
    "question": "DN có VAT đầu vào tích lũy 12 tháng liên tiếp > 300 triệu. Được phép:",
    "options": [
      "Hoàn thuế ngay mà không cần điều kiện gì thêm",
      "Xin hoàn thuế và CQT kiểm tra trong 60 ngày",
      "Yêu cầu hoàn thuế, CQT hoàn trong 15 ngày nếu DN chưa vi phạm 2 năm gần đây",
      "Chỉ được khấu trừ sang kỳ sau, không được hoàn"
    ],
    "correct": 2,
    "explanation": "Điều 18 TT219: Hoàn thuế theo kỳ: Âm 12 tháng liên tục > 300tr → được hoàn. Thời hạn: 15 ngày (hoàn trước kiểm tra sau, nếu DN chưa vi phạm thuế trong 2 năm) hoặc 60 ngày (kiểm tra trước hoàn sau). Hồ sơ: Mẫu 01/ĐNHT + bảng kê HĐ."
  },
  {
    "id": 1137,
    "code": "VAT012",
    "category": "thue_gtgt",
    "question": "Dịch vụ giáo dục, đào tạo nghề áp dụng thuế suất VAT:",
    "options": [
      "10%",
      "5%",
      "0%",
      "Không chịu thuế GTGT"
    ],
    "correct": 3,
    "explanation": "Theo Điều 5 Luật GTGT: Dạy học, dạy nghề theo chương trình giáo dục nhà nước là đối tượng không chịu thuế GTGT. Lưu ý: Không phải thuế suất 0% mà là đối tượng không chịu thuế → không được khấu trừ VAT đầu vào liên quan."
  },
  {
    "id": 1138,
    "code": "VAT013",
    "category": "thue_gtgt",
    "question": "Thời điểm xác định thuế GTGT đối với hàng hóa bán qua đại lý ký gửi là:",
    "options": [
      "Khi giao hàng cho đại lý",
      "Khi đại lý xác nhận đã bán cho người mua cuối cùng",
      "Khi thu tiền từ đại lý",
      "Khi xuất hóa đơn cho đại lý"
    ],
    "correct": 1,
    "explanation": "Theo TT219/2013: Đối với hàng gửi đại lý ký gửi, thời điểm xác định VAT là khi đại lý bán hàng cho người mua. Trước đó, hàng vẫn thuộc sở hữu DN (TK 157), chưa phát sinh doanh thu, chưa có nghĩa vụ VAT đầu ra."
  },
  {
    "id": 1139,
    "code": "VAT014",
    "category": "thue_gtgt",
    "question": "DN mua hàng hóa 50 triệu (gồm VAT 10%), chưa thanh toán. VAT đầu vào được khấu trừ tháng này là:",
    "options": [
      "5 triệu",
      "4.55 triệu",
      "0 triệu (chưa thanh toán)",
      "5 triệu (đủ điều kiện vì > 20tr cần TTKNH)"
    ],
    "correct": 3,
    "explanation": "Điều kiện khấu trừ VAT đầu vào: (1) Có HĐ GTGT hợp lệ; (2) Hàng dùng cho SXKD chịu thuế; (3) Thanh toán qua NH nếu ≥ 20 triệu (nhưng chỉ cần có cam kết/kế hoạch thanh toán hoặc phần chưa TT được tạm khấu trừ). Thực tế: Nhiều DN khấu trừ ngay khi có HĐ dù chưa thanh toán — rủi ro nếu CQT kiểm tra và hóa đơn từ DN bỏ trốn."
  },
  {
    "id": 1140,
    "code": "VAT015",
    "category": "thue_gtgt",
    "question": "VAT đầu vào của tài sản cố định mua để phục vụ sản xuất kinh doanh trị giá 2 tỷ được khấu trừ:",
    "options": [
      "Một lần toàn bộ trong kỳ mua",
      "Phân bổ dần theo thời gian khấu hao",
      "Không được khấu trừ vì giá trị lớn",
      "Khấu trừ 50% ngay, 50% năm sau"
    ],
    "correct": 0,
    "explanation": "VAT đầu vào của TSCĐ được khấu trừ TOÀN BỘ ngay trong kỳ phát sinh (không phân bổ như khấu hao). Điều kiện: TSCĐ dùng cho hoạt động kinh doanh chịu thuế. Khác với kế toán: KH TSCĐ phân bổ dần, nhưng VAT khấu trừ một lần."
  },
  {
    "id": 1141,
    "code": "VAT016",
    "category": "thue_gtgt",
    "question": "Đối tượng nào phải kê khai VAT theo quý (thay vì tháng)?",
    "options": [
      "DN có doanh thu năm trước dưới 50 tỷ",
      "DN có doanh thu năm trước dưới 20 tỷ và tự nguyện kê khai theo quý",
      "DN mới thành lập 2 năm đầu",
      "Hộ kinh doanh có doanh thu dưới 100 triệu/năm"
    ],
    "correct": 1,
    "explanation": "Theo Điều 9 NĐ126/2020: Kê khai VAT theo quý (bắt buộc) khi doanh thu năm trước dưới 50 tỷ. Tuy nhiên, DN dưới 50 tỷ có thể tự chọn kê khai tháng. DN dưới 20 tỷ được tự động kê khai quý. Hạn nộp theo quý: ngày 30 của tháng đầu quý sau."
  },
  {
    "id": 1142,
    "code": "VAT017",
    "category": "thue_gtgt",
    "question": "Thuế suất VAT của dịch vụ vận tải quốc tế (hàng hóa xuất/nhập khẩu ra/vào VN) là:",
    "options": [
      "10%",
      "5%",
      "0%",
      "Không chịu VAT"
    ],
    "correct": 2,
    "explanation": "Dịch vụ vận tải quốc tế (chặng ra nước ngoài hoặc từ nước ngoài vào VN) áp dụng thuế suất 0%. Dịch vụ vận tải nội địa: 10%. Lưu ý: Tuyến vận tải từ cảng VN ra cảng nước ngoài = 0%. Tuyến nội địa nối với tuyến quốc tế: phân bổ theo km."
  },
  {
    "id": 1143,
    "code": "VAT018",
    "category": "thue_gtgt",
    "question": "Kê khai bổ sung VAT do khai thiếu 100 triệu, phát hiện và tự kê khai sau 4 tháng. Hình thức xử phạt:",
    "options": [
      "Phạt 20% × 100tr + tiền chậm nộp",
      "Chỉ tiền chậm nộp 0.03%/ngày × 100tr × số ngày, không bị phạt 20%",
      "Phạt 10% × 100tr + tiền chậm nộp",
      "Không bị phạt nếu tự kê khai bổ sung"
    ],
    "correct": 1,
    "explanation": "Điều 13 NĐ125/2020: Tự kê khai bổ sung TRƯỚC KHI CQT công bố quyết định kiểm tra → không bị phạt 20% (khai sai), chỉ tính tiền chậm nộp 0.03%/ngày × số thuế × số ngày chậm. Phạt 20% chỉ áp dụng khi CQT phát hiện trong quá trình kiểm tra/thanh tra."
  },
  {
    "id": 1144,
    "code": "VAT019",
    "category": "thue_gtgt",
    "question": "Hàng hóa dùng để khuyến mãi, tặng quà cho khách hàng có phải kê khai VAT đầu ra không?",
    "options": [
      "Không, vì không có thu tiền",
      "Có, phải kê khai VAT đầu ra theo giá bán thông thường trên thị trường",
      "Có, nhưng chỉ kê khai nếu giá trị quà > 200,000đ/người",
      "Không, nếu đã kê khai là chi phí quảng cáo"
    ],
    "correct": 1,
    "explanation": "Theo Điều 7 TT219: Hàng hóa dùng để cho, biếu, tặng, trả thay lương phải khai VAT đầu ra theo giá bán thông thường của cùng loại HH trên thị trường. Tuy nhiên, VAT đầu vào của hàng tặng KHÔNG được khấu trừ. Đây là điểm DN hay bỏ sót."
  },
  {
    "id": 1145,
    "code": "VAT020",
    "category": "thue_gtgt",
    "question": "DN nhập khẩu hàng hóa. VAT nhập khẩu nộp cho ai và được khấu trừ thế nào?",
    "options": [
      "Nộp cho Cục Hải quan; không được khấu trừ với DN nhập khẩu để bán",
      "Nộp cho Cục Hải quan; được khấu trừ như VAT đầu vào thông thường dựa trên chứng từ nộp thuế",
      "Nộp cho Cục Thuế; được khấu trừ trong tờ khai VAT tháng",
      "Không cần nộp VAT nhập khẩu nếu hàng để tái xuất"
    ],
    "correct": 1,
    "explanation": "VAT hàng nhập khẩu: Nộp tại khâu nhập khẩu cho Hải quan (cùng với thuế NK). Chứng từ nộp thuế do Hải quan cấp (Biên lai nộp thuế) → đây là VAT đầu vào, được khấu trừ trong tờ khai VAT định kỳ. Hàng tái xuất: Được hoàn thuế NK và VAT NK đã nộp."
  },
  {
    "id": 1146,
    "code": "VAT021",
    "category": "thue_gtgt",
    "question": "Theo NĐ123/2020, hóa đơn điện tử có mã CQT và không có mã khác nhau ở điểm nào cơ bản?",
    "options": [
      "Giá trị pháp lý khác nhau",
      "Hóa đơn có mã: CQT cấp mã xác thực trước khi gửi người mua; HĐ không mã: DN tự chịu trách nhiệm, truyền dữ liệu CQT ngay",
      "HĐ có mã chỉ dùng cho DN lớn; HĐ không mã cho DN nhỏ",
      "HĐ không mã không được khấu trừ VAT"
    ],
    "correct": 1,
    "explanation": "NĐ123/2020: (1) HĐĐT có mã CQT: DN gửi lên hệ thống CQT → CQT cấp mã → DN gửi cho người mua. Áp dụng bắt buộc với DN rủi ro cao, mới thành lập, hộ KD. (2) HĐĐT không mã: DN lập, gửi người mua và đồng thời truyền dữ liệu cho CQT (hệ thống kết nối trực tiếp). Cả hai đều có giá trị pháp lý như nhau."
  },
  {
    "id": 1147,
    "code": "VAT022",
    "category": "thue_gtgt",
    "question": "Doanh thu để xác định ngưỡng đăng ký VAT bắt buộc là:",
    "options": [
      "500 triệu/năm",
      "1 tỷ/năm",
      "2 tỷ/năm",
      "3 tỷ/năm"
    ],
    "correct": 1,
    "explanation": "DN có doanh thu từ hoạt động SXKD ≥ 1 tỷ đồng/năm → bắt buộc áp dụng phương pháp khấu trừ (kê khai, nộp VAT theo phương pháp này). < 1 tỷ: có thể lựa chọn phương pháp trực tiếp. Hộ kinh doanh DT ≤ 100 triệu/năm: không phải nộp VAT."
  },
  {
    "id": 1148,
    "code": "VAT023",
    "category": "thue_gtgt",
    "question": "Phần VAT đầu vào không được khấu trừ do hàng dùng cho hoạt động không chịu VAT, hạch toán vào:",
    "options": [
      "TK 133 (để theo dõi ngoại bảng)",
      "TK 632 (giá vốn hàng bán)",
      "Chi phí sản xuất kinh doanh (641/642) hoặc nguyên giá TS liên quan",
      "TK 811 (chi phí khác)"
    ],
    "correct": 2,
    "explanation": "VAT đầu vào không được khấu trừ (do dùng cho hàng không chịu thuế, tặng biếu...): Ghi tăng vào chi phí liên quan hoặc nguyên giá tài sản (nếu là TSCĐ). Nợ 641/642 hoặc Nợ 211 / Có 133. Không được ghi vào TK 811 tùy tiện nếu không phải chi phí khác."
  },
  {
    "id": 1149,
    "code": "VAT024",
    "category": "thue_gtgt",
    "question": "Cơ sở kinh doanh bán hàng hóa theo phương thức trả góp nhiều lần. VAT được tính trên:",
    "options": [
      "Từng lần trả góp khi thu tiền",
      "Giá bán trả tiền ngay của hàng đó (không bao gồm lãi trả góp), tính một lần khi giao hàng",
      "Tổng số tiền bao gồm cả lãi trả góp",
      "Giá trị cuối cùng khi trả hết nợ"
    ],
    "correct": 1,
    "explanation": "Theo TT219: Bán hàng trả góp: VAT đầu ra tính trên giá bán trả tiền ngay (không gồm lãi trả góp), tính một lần khi giao hàng. Lãi trả góp là dịch vụ tài chính → không chịu VAT. Hóa đơn lập ngay khi giao hàng, ghi rõ giá trả ngay và lịch trả góp."
  },
  {
    "id": 1150,
    "code": "VAT025",
    "category": "thue_gtgt",
    "question": "Trong tháng: VAT đầu ra 200tr, VAT đầu vào 250tr. Tháng trước có số âm lũy kế 50tr. VAT phải nộp tháng này:",
    "options": [
      "Âm 100tr (được hoàn)",
      "Âm 100tr (khấu trừ sang tháng sau)",
      "0 đồng (bù trừ hết)",
      "Nộp 200 − 250 = âm 50tr"
    ],
    "correct": 1,
    "explanation": "VAT tháng này: Đầu ra 200 − Đầu vào 250 = âm 50tr. Cộng số âm lũy kế tháng trước: âm 50tr. Tổng âm lũy kế: âm 100tr. Chưa đủ điều kiện hoàn (cần 12 tháng liên tiếp > 300tr) → chuyển sang tháng sau. Ghi âm 100tr vào chỉ tiêu 43 trên tờ khai 01/GTGT."
  },
  {
    "id": 1151,
    "code": "VAT026",
    "category": "thue_gtgt",
    "question": "DN xuất khẩu phần mềm (phần mềm số giao qua internet) ra nước ngoài. Thuế suất VAT:",
    "options": [
      "10%",
      "5%",
      "0%",
      "Không chịu VAT"
    ],
    "correct": 2,
    "explanation": "Xuất khẩu dịch vụ (trong đó có xuất khẩu phần mềm, dịch vụ số) áp dụng thuế suất 0% nếu người mua là tổ chức/cá nhân nước ngoài, tiêu dùng ngoài VN, có chứng từ thanh toán qua ngân hàng. Phần mềm bán trong nước: 10%."
  },
  {
    "id": 1152,
    "code": "VAT027",
    "category": "thue_gtgt",
    "question": "Nhà hàng, khách sạn áp dụng thuế suất VAT bao nhiêu?",
    "options": [
      "5%",
      "8%",
      "10%",
      "0%"
    ],
    "correct": 2,
    "explanation": "Dịch vụ ăn uống (nhà hàng), lưu trú (khách sạn) áp dụng thuế suất VAT 10%. Trước đây (giai đoạn COVID và phục hồi kinh tế), Chính phủ có giảm thuế GTGT xuống 8% một số ngành, nhưng mức cơ bản vẫn là 10%."
  },
  {
    "id": 1153,
    "code": "VAT028",
    "category": "thue_gtgt",
    "question": "Hóa đơn đầu vào bị xác định là hóa đơn của DN 'bỏ trốn'. Hướng xử lý đúng nhất:",
    "options": [
      "Vẫn giữ nguyên khấu trừ vì DN mua không biết người bán bỏ trốn",
      "Loại toàn bộ VAT đầu vào và truy nộp + phạt",
      "Kiểm tra chứng từ thực tế giao dịch: nếu có hàng thật, thanh toán NH đầy đủ → giải trình với CQT, khả năng được giữ khấu trừ",
      "Hoàn nhập VAT đầu vào và ghi vào thu nhập khác"
    ],
    "correct": 2,
    "explanation": "Thực tế: Nếu DN mua có đủ chứng minh giao dịch thực tế (hợp đồng, biên bản giao nhận, chứng từ thanh toán NH, hàng thực tế nhập kho) → CQT xem xét từng trường hợp cụ thể. Nếu không đủ chứng minh → bị loại VAT đầu vào + truy thu. Đây là rủi ro lớn của DN không kiểm tra tư cách pháp lý nhà cung cấp."
  },
  {
    "id": 1154,
    "code": "VAT029",
    "category": "thue_gtgt",
    "question": "Tỷ lệ hoàn thuế VAT nhanh (15 ngày) áp dụng khi DN:",
    "options": [
      "Đã khai thác lỗ liên tiếp 3 năm",
      "Không vi phạm pháp luật thuế trong 2 năm liên tục và đã xuất khẩu liên tục",
      "Là DN nhà nước hoặc DN FDI",
      "Có doanh thu xuất khẩu > 50% tổng doanh thu"
    ],
    "correct": 1,
    "explanation": "Hoàn thuế trước kiểm tra sau (15 ngày): Áp dụng khi DN không vi phạm pháp luật về thuế trong 2 năm liền trước (không bị xử phạt, không truy thu). Ngoài ra, thường là DN đã qua kiểm tra thuế trước đó và không có vấn đề. Nếu CQT có nghi ngờ → chuyển sang kiểm tra trước hoàn sau (60 ngày)."
  },
  {
    "id": 1155,
    "code": "VAT030",
    "category": "thue_gtgt",
    "question": "Hàng hóa, dịch vụ không phân biệt được giữa phục vụ hoạt động chịu VAT và không chịu VAT. Cách xử lý VAT đầu vào:",
    "options": [
      "Không được khấu trừ VAT nào",
      "Khấu trừ 100% VAT đầu vào",
      "Khấu trừ theo tỷ lệ doanh thu chịu VAT / tổng doanh thu, cuối năm điều chỉnh theo tỷ lệ thực tế",
      "Khấu trừ 50% VAT đầu vào cố định"
    ],
    "correct": 2,
    "explanation": "Điều 12 TT219/2013: Phân bổ VAT đầu vào theo tỷ lệ: VAT khấu trừ = VAT đầu vào × (DT chịu VAT / Tổng DT). Đầu năm dùng tỷ lệ ước tính. Cuối năm tính lại tỷ lệ thực tế và điều chỉnh trong tờ khai tháng 12 hoặc tháng 1 năm sau."
  },
  {
    "id": 1156,
    "code": "VAT031",
    "category": "thue_gtgt",
    "question": "Dịch vụ bảo hiểm nhân thọ có phải chịu thuế GTGT không?",
    "options": [
      "Có, thuế suất 10%",
      "Có, thuế suất 5%",
      "Không, đây là đối tượng không chịu thuế GTGT",
      "Có nhưng chỉ phần phí quản lý"
    ],
    "correct": 2,
    "explanation": "Bảo hiểm nhân thọ, sức khỏe, nông nghiệp là đối tượng không chịu thuế GTGT theo Điều 5 Luật GTGT. Lưu ý: Bảo hiểm tài sản (xe cộ, hàng hóa, cháy nổ) lại chịu VAT 10%. Công ty bảo hiểm nhân thọ không được khấu trừ VAT đầu vào liên quan đến doanh thu không chịu thuế."
  },
  {
    "id": 1157,
    "code": "VAT032",
    "category": "thue_gtgt",
    "question": "Thời hạn nộp tờ khai VAT quý I (tháng 1, 2, 3) là:",
    "options": [
      "Ngày 20/3",
      "Ngày 30/3",
      "Ngày 30/4",
      "Ngày 20/4"
    ],
    "correct": 2,
    "explanation": "Tờ khai VAT theo quý: Hạn nộp = ngày 30 của tháng đầu tiên của quý tiếp theo. Quý I (T1-T3) → hạn nộp ngày 30/4. Quý II (T4-T6) → hạn 30/7. Quý III → 30/10. Quý IV → 30/1 năm sau. Nếu ngày 30 là ngày nghỉ → lùi sang ngày làm việc tiếp theo."
  },
  {
    "id": 1158,
    "code": "VAT033",
    "category": "thue_gtgt",
    "question": "Phần mềm đóng gói bán trong nước, không phải dịch vụ. Thuế suất VAT:",
    "options": [
      "0%",
      "5%",
      "10%",
      "Không chịu VAT"
    ],
    "correct": 2,
    "explanation": "Phần mềm bán dưới dạng sản phẩm đóng gói hoặc bản quyền trong nước: Thuế suất 10%. Xuất khẩu phần mềm/dịch vụ CNTT ra nước ngoài: 0%. Không nhầm lẫn: Chỉ có xuất khẩu dịch vụ/phần mềm mới 0%, còn bán trong nước đều 10%."
  },
  {
    "id": 1159,
    "code": "VAT034",
    "category": "thue_gtgt",
    "question": "DN A bán hàng cho DN B, xuất hóa đơn tháng 12/2024 nhưng giao hàng tháng 1/2025. Thời điểm kê khai VAT đầu ra của DN A:",
    "options": [
      "Tháng 12/2024 (khi xuất hóa đơn)",
      "Tháng 1/2025 (khi giao hàng)",
      "Khi thu được tiền",
      "Tùy DN lựa chọn"
    ],
    "correct": 0,
    "explanation": "Theo TT219: Thời điểm xác định thuế GTGT đối với bán hàng hóa = thời điểm chuyển giao quyền sở hữu HOẶC khi lập hóa đơn (tùy cái nào đến trước). Nếu đã lập hóa đơn tháng 12 thì phải kê khai VAT tháng 12. Giao hàng sau khi xuất HĐ không ảnh hưởng thời điểm kê khai."
  },
  {
    "id": 1160,
    "code": "VAT035",
    "category": "thue_gtgt",
    "question": "DN A và DN B có quan hệ liên kết, DN A bán hàng cho DN B với giá thấp hơn giá thị trường 30%. CQT có quyền:",
    "options": [
      "Chấp nhận mức giá DN A khai",
      "Ấn định lại giá theo giá thị trường, điều chỉnh tăng VAT đầu ra của DN A",
      "Chỉ được điều chỉnh thuế TNDN, không điều chỉnh VAT",
      "Phạt DN A vì không đúng với bên không liên kết nhưng không điều chỉnh thuế"
    ],
    "correct": 1,
    "explanation": "Theo Điều 14 Luật Quản lý thuế + NĐ132/2020: CQT có quyền ấn định lại giá giao dịch liên kết theo giá thị trường (nguyên tắc arm's length). Điều chỉnh tăng doanh thu DN A → tăng VAT đầu ra + tăng TNDN. DN A phải kê khai bổ sung hoặc CQT ra quyết định truy thu."
  },
  {
    "id": 1161,
    "code": "PIT001",
    "category": "thue_tncn",
    "question": "Biểu thuế TNCN lũy tiến từng phần áp dụng cho thu nhập từ tiền lương. Bậc 1 (đến 5 triệu/tháng) có thuế suất:",
    "options": [
      "0%",
      "5%",
      "10%",
      "15%"
    ],
    "correct": 1,
    "explanation": "Biểu thuế lũy tiến TNCN (Phụ lục I Luật TNCN): Bậc 1: 0–5 triệu → 5%. Bậc 2: 5–10 triệu → 10%. Bậc 3: 10–18 triệu → 15%. Bậc 4: 18–32 triệu → 20%. Bậc 5: 32–52 triệu → 25%. Bậc 6: 52–80 triệu → 30%. Bậc 7: > 80 triệu → 35%."
  },
  {
    "id": 1162,
    "code": "PIT002",
    "category": "thue_tncn",
    "question": "Giảm trừ gia cảnh cho bản thân người nộp thuế năm 2024 là bao nhiêu/tháng?",
    "options": [
      "9 triệu",
      "11 triệu",
      "13 triệu",
      "15 triệu"
    ],
    "correct": 1,
    "explanation": "Theo Nghị quyết 954/2020/UBTVQH14 (hiệu lực từ 01/01/2020): Giảm trừ gia cảnh bản thân: 11 triệu đồng/tháng (132 triệu/năm). Giảm trừ người phụ thuộc: 4.4 triệu/người/tháng. Ngưỡng nộp thuế = 11 triệu + (số NPT × 4.4 triệu)."
  },
  {
    "id": 1163,
    "code": "PIT003",
    "category": "thue_tncn",
    "question": "Nhân viên có lương gross 20 triệu/tháng, 1 người phụ thuộc. Thu nhập chịu thuế TNCN là:",
    "options": [
      "20 triệu",
      "15.6 triệu",
      "4.6 triệu",
      "20 triệu trừ BHXH-BHYT-BHTN"
    ],
    "correct": 2,
    "explanation": "BHXH-BHYT-BHTN người lao động = (8%+1.5%+1%) × 20tr = 10.5% × 20tr = 2.1tr. Thu nhập sau BH = 20 − 2.1 = 17.9tr. Giảm trừ bản thân: 11tr. Giảm trừ NPT: 4.4tr × 1 = 4.4tr. TNCT = 17.9 − 11 − 4.4 = 2.5tr. Thuế = 2.5tr × 5% = 125,000đ."
  },
  {
    "id": 1164,
    "code": "PIT004",
    "category": "thue_tncn",
    "question": "Thu nhập từ trúng thưởng xổ số trị giá 50 triệu đồng. Thuế TNCN phải nộp:",
    "options": [
      "0 đồng (miễn thuế)",
      "50 triệu × 10% = 5 triệu",
      "(50 − 10 triệu) × 10% = 4 triệu",
      "50 triệu × 5% = 2.5 triệu"
    ],
    "correct": 2,
    "explanation": "Thu nhập từ trúng thưởng (xổ số, casino, trò chơi...) áp dụng thuế TNCN 10% trên phần vượt 10 triệu đồng cho mỗi lần trúng. Thuế = (50 − 10) × 10% = 4 triệu. Nếu tổng giải thưởng ≤ 10 triệu: miễn thuế."
  },
  {
    "id": 1165,
    "code": "PIT005",
    "category": "thue_tncn",
    "question": "Cá nhân bán căn nhà duy nhất đã sở hữu và cư trú trên 183 ngày trong năm. Thuế TNCN:",
    "options": [
      "2% trên giá bán",
      "25% trên thu nhập (Giá bán − Giá mua)",
      "Miễn thuế TNCN",
      "0.5% trên giá bán nếu chưa xác định được giá mua"
    ],
    "correct": 2,
    "explanation": "Miễn thuế TNCN chuyển nhượng BĐS: (1) Chuyển nhượng nhà ở, đất ở duy nhất và đã cư trú tại đó liên tục ≥ 183 ngày trong năm dương lịch. (2) Chuyển nhượng cho người thân trong gia đình (cha mẹ, vợ chồng, con...). Nếu không đủ điều kiện: Nộp 2% trên giá bán hoặc 25% trên thu nhập."
  },
  {
    "id": 1166,
    "code": "PIT006",
    "category": "thue_tncn",
    "question": "Nhân viên được thưởng cổ phiếu ưu đãi (ESOP) trị giá 100 triệu. Khi nộp thuế TNCN:",
    "options": [
      "Nộp thuế ngay khi nhận cổ phiếu, mức 10%",
      "Nộp thuế khi chuyển nhượng cổ phiếu, mức 0.1% trên giá bán",
      "Miễn thuế vì ESOP là phúc lợi",
      "Nộp 5% trên giá trị cổ phiếu khi nhận"
    ],
    "correct": 1,
    "explanation": "Cổ phiếu ESOP (ưu đãi cho NLĐ): Theo TT92/2015: Không tính thuế TNCN khi nhận cổ phiếu. Chỉ nộp thuế TNCN khi NLĐ chuyển nhượng (bán) cổ phiếu: 0.1% trên giá bán. Điều này khuyến khích giữ cổ phiếu dài hạn. Cần phân biệt với cổ phiếu thưởng thông thường (phải nộp thu nhập từ tiền lương)."
  },
  {
    "id": 1167,
    "code": "PIT007",
    "category": "thue_tncn",
    "question": "Cá nhân có thu nhập từ cho thuê nhà 30 triệu/tháng. Cách tính thuế TNCN:",
    "options": [
      "30 triệu × 5% = 1.5 triệu/tháng (thuế suất đặc biệt)",
      "30 triệu × 20% − Các khoản được trừ",
      "Tổng thu nhập năm từ cho thuê nhà, nếu ≥ 100 triệu/năm: (Doanh thu × 30%) × 5% = VAT và TNCN",
      "30 triệu × 10% × 5% (tỷ lệ theo lĩnh vực)"
    ],
    "correct": 2,
    "explanation": "Cá nhân cho thuê nhà có DT ≥ 100 triệu/năm: Nộp 2 loại thuế: (1) VAT = DT × 5% (tỷ lệ DT chịu VAT 30% × thuế suất 5%? Không — tỷ lệ DT chịu VAT cho thuê nhà = 100% × 5%) → VAT = 30tr × 5% = 1.5tr; (2) TNCN = 30tr × 5% = 1.5tr. Tổng = 3tr/tháng. Thực tế: VAT 5% + TNCN 5% trên DT cho thuê."
  },
  {
    "id": 1168,
    "code": "PIT008",
    "category": "thue_tncn",
    "question": "Thời hạn khấu trừ và nộp thuế TNCN từ tiền lương của DN chi trả:",
    "options": [
      "Khấu trừ và nộp chậm nhất ngày 10 tháng sau",
      "Khấu trừ và nộp chậm nhất ngày 20 tháng sau",
      "Nộp một lần vào cuối năm khi quyết toán",
      "Khấu trừ ngay và nộp trong vòng 10 ngày làm việc"
    ],
    "correct": 1,
    "explanation": "DN khấu trừ TNCN từ lương hàng tháng của NLĐ, sau đó nộp cho CQT chậm nhất ngày 20 của tháng tiếp theo. Tương tự VAT. Nếu kê khai theo quý (DT < 50 tỷ): Nộp chậm nhất ngày 30 của tháng đầu quý sau. Kê khai quyết toán TNCN: Ngày 30/3 năm sau (DN quyết toán thay NLĐ)."
  },
  {
    "id": 1169,
    "code": "PIT009",
    "category": "thue_tncn",
    "question": "Thu nhập từ nhận thừa kế bất động sản trị giá 5 tỷ đồng. Thuế TNCN:",
    "options": [
      "Miễn thuế (thừa kế trong gia đình)",
      "10% trên phần vượt 10 triệu đồng",
      "2% trên giá trị tài sản nhận thừa kế",
      "25% trên thu nhập"
    ],
    "correct": 1,
    "explanation": "Thu nhập từ thừa kế BĐS: Thuế TNCN 10% trên phần giá trị vượt 10 triệu đồng. Thuế = (5,000 − 10) triệu × 10% = 499 triệu. Tuy nhiên: Thừa kế giữa vợ-chồng, cha-mẹ-con, anh-chị-em ruột được MIỄN thuế TNCN. Nếu thừa kế từ người không thuộc diện trên → phải nộp thuế."
  },
  {
    "id": 1170,
    "code": "PIT010",
    "category": "thue_tncn",
    "question": "Cá nhân kinh doanh có doanh thu 150 triệu/năm. Thuế TNCN áp dụng:",
    "options": [
      "Miễn thuế hoàn toàn",
      "Lũy tiến từng phần như tiền lương",
      "Thuế khoán: DT × Tỷ lệ TNCN (0.5–5% tùy ngành) nếu DT ≥ 100 triệu/năm",
      "Chỉ nộp VAT, không nộp TNCN"
    ],
    "correct": 2,
    "explanation": "Cá nhân kinh doanh DT ≥ 100 triệu/năm: Nộp cả VAT và TNCN theo tỷ lệ trên DT (phương pháp khoán). DT < 100 triệu: miễn VAT và TNCN. Tỷ lệ TNCN: Phân phối 0.5%, DV 2%, SX 1.5%, xây dựng 2%, cho thuê TS 5%. Cộng thêm VAT cùng tỷ lệ (nhân với % DT chịu VAT)."
  },
  {
    "id": 1171,
    "code": "PIT011",
    "category": "thue_tncn",
    "question": "Người lao động nước ngoài cư trú tại VN (>183 ngày/năm). Thu nhập từ VN và nước ngoài đều:",
    "options": [
      "Chỉ chịu thuế TNCN với thu nhập phát sinh tại VN",
      "Chịu thuế TNCN với toàn bộ thu nhập từ mọi nguồn (trong và ngoài VN)",
      "Chỉ nộp thuế theo DTA (hiệp định tránh thuế 2 lần)",
      "Miễn thuế TNCN vì là người nước ngoài"
    ],
    "correct": 1,
    "explanation": "Cá nhân cư trú (ở VN ≥ 183 ngày/năm): Chịu thuế TNCN trên TOÀN BỘ thu nhập từ mọi nguồn, kể cả từ nước ngoài. Cá nhân không cư trú: Chỉ chịu thuế trên thu nhập phát sinh tại VN, thuế suất 20% cố định (không lũy tiến). Người nước ngoài cũng được giảm trừ gia cảnh nếu cư trú tại VN."
  },
  {
    "id": 1172,
    "code": "PIT012",
    "category": "thue_tncn",
    "question": "Phụ cấp nào sau đây được miễn thuế TNCN?",
    "options": [
      "Phụ cấp chức vụ, chức danh",
      "Phụ cấp thâm niên",
      "Phụ cấp độc hại, nguy hiểm; tiền ăn ca (không quá 730,000đ/tháng); phụ cấp xăng xe đi công tác",
      "Tất cả các loại phụ cấp đều chịu thuế"
    ],
    "correct": 2,
    "explanation": "Theo Điều 2 TT111/2013: Các khoản MIỄN TNCN: Phụ cấp độc hại/nguy hiểm; Tiền ăn ca/bữa giữa ca (≤ 730,000đ/tháng — mức cập nhật theo TT26/2016); Phụ cấp điện thoại, đi lại (theo thực tế); Trang phục (bằng hiện vật); Nhà ở tập thể DN lo. Phụ cấp chức vụ, thâm niên: chịu thuế."
  },
  {
    "id": 1173,
    "code": "PIT013",
    "category": "thue_tncn",
    "question": "Cá nhân chuyển nhượng cổ phiếu niêm yết. Thuế TNCN:",
    "options": [
      "0.1% trên giá bán mỗi lần chuyển nhượng",
      "20% trên lợi nhuận (giá bán − giá mua − phí giao dịch)",
      "25% trên thu nhập",
      "Miễn thuế nếu giữ cổ phiếu trên 12 tháng"
    ],
    "correct": 0,
    "explanation": "Thuế TNCN chuyển nhượng chứng khoán: 0.1% × Giá bán (không tính lãi/lỗ). Thuế = 0.1% × Giá bán × Số lượng CK. Nộp qua công ty chứng khoán (trích từ tiền bán). Không phân biệt giữ ngắn/dài hạn. Không áp dụng 20% lợi nhuận như thuế TNDN."
  },
  {
    "id": 1174,
    "code": "PIT014",
    "category": "thue_tncn",
    "question": "Điều kiện để đăng ký người phụ thuộc (NPT) được giảm trừ gia cảnh 4.4 triệu/tháng:",
    "options": [
      "Chỉ cần là con cái của người nộp thuế",
      "Trẻ em dưới 18 tuổi; hoặc người học ≤ 25 tuổi không có thu nhập; hoặc người không có khả năng lao động (tàn tật, già) không có thu nhập ổn định",
      "Cha mẹ, ông bà cùng sống chung",
      "Bất kỳ thành viên gia đình không có thu nhập"
    ],
    "correct": 1,
    "explanation": "NPT được giảm trừ: (1) Con < 18 tuổi; (2) Con ≥ 18 tuổi đang học đại học, dạy nghề không có thu nhập hoặc < 1 triệu/tháng (≤ 25 tuổi); (3) Vợ/chồng, cha mẹ, ông bà không có khả năng lao động, không có thu nhập ổn định (≤ 1 triệu/tháng). Mỗi NPT chỉ được 1 người đăng ký."
  },
  {
    "id": 1175,
    "code": "PIT015",
    "category": "thue_tncn",
    "question": "Cá nhân nhận lương gross 50 triệu/tháng, không có NPT. Công ty còn chịu BHXH 17.5% cho họ. Số tiền về tay (net) xấp xỉ bao nhiêu?",
    "options": [
      "50 triệu",
      "42 triệu",
      "38 triệu",
      "35 triệu"
    ],
    "correct": 2,
    "explanation": "Khấu trừ từ gross 50tr: BH NLĐ = 10.5% × 50tr = 5.25tr. Thu nhập sau BH = 44.75tr. TNCT = 44.75 − 11 (bản thân) = 33.75tr. Thuế TNCN (lũy tiến): 5tr×5% + 5tr×10% + 8tr×15% + 14tr×20% + 1.75tr×25% = 0.25+0.5+1.2+2.8+0.44 = 5.19tr. Net ≈ 44.75 − 5.19 ≈ 39.56tr ≈ ~38-40tr (tùy làm tròn)."
  },
  {
    "id": 1176,
    "code": "PIT016",
    "category": "thue_tncn",
    "question": "Tổ chức chi trả không khấu trừ thuế TNCN từ thu nhập của cá nhân, trách nhiệm thuộc về ai?",
    "options": [
      "Hoàn toàn thuộc về cá nhân nhận thu nhập",
      "Tổ chức chi trả bị phạt hành chính và vẫn phải nộp thay số thuế thiếu",
      "Chia đôi trách nhiệm giữa tổ chức và cá nhân",
      "Tổ chức không có trách nhiệm vì đã chi trả đủ gross"
    ],
    "correct": 1,
    "explanation": "Theo Điều 31 Luật QLTH và NĐ125/2020: Tổ chức chi trả có nghĩa vụ khấu trừ và nộp thay TNCN cho cá nhân. Nếu không khấu trừ: Bị phạt hành chính + bị truy thu số thuế không khấu trừ (nộp thay) + tiền chậm nộp. Tổ chức có thể truy hoàn từ cá nhân sau đó, nhưng trách nhiệm pháp lý với CQT thuộc về tổ chức."
  },
  {
    "id": 1177,
    "code": "PIT017",
    "category": "thue_tncn",
    "question": "Thu nhập từ tiền bản quyền (tác giả sách, phần mềm, nhạc...) áp dụng thuế TNCN:",
    "options": [
      "Lũy tiến 5–35%",
      "5% trên phần vượt 10 triệu đồng",
      "10% trên toàn bộ thu nhập",
      "Miễn thuế"
    ],
    "correct": 1,
    "explanation": "Thu nhập từ chuyển nhượng bản quyền, nhượng quyền thương mại: Thuế TNCN 5% × (Thu nhập − 10 triệu). Áp dụng cho từng lần nhận. VD: Nhận tiền bản quyền 50 triệu → Thuế = (50 − 10) × 5% = 2 triệu. Nếu ≤ 10 triệu/lần: không tính thuế."
  },
  {
    "id": 1178,
    "code": "PIT018",
    "category": "thue_tncn",
    "question": "DN A trả lương cho giám đốc 200 triệu/tháng. Giám đốc này kiêm nhiệm cả hai công ty A và B. Quyết toán TNCN thực hiện ở đâu?",
    "options": [
      "Tại từng công ty độc lập nhau",
      "Giám đốc tự quyết toán tại CQT quản lý trực tiếp, tổng hợp tất cả thu nhập từ A và B",
      "Chỉ quyết toán tại nơi có thu nhập cao nhất",
      "CQT tự tổng hợp không cần cá nhân làm gì"
    ],
    "correct": 1,
    "explanation": "Cá nhân có thu nhập từ nhiều nơi (A + B): Phải tự quyết toán TNCN (không ủy quyền cho DN nào). Tổng hợp toàn bộ thu nhập từ tất cả nơi chi trả trong năm → áp dụng biểu thuế lũy tiến → tính thuế cả năm → trừ số đã tạm khấu trừ. Hạn tự quyết toán: 30/4 năm sau. Nơi quyết toán: Cục/Chi cục thuế nơi cư trú."
  },
  {
    "id": 1179,
    "code": "PIT019",
    "category": "thue_tncn",
    "question": "Khoản hỗ trợ tiền thuê nhà cho nhân viên nước ngoài (expatriate). Thuế TNCN:",
    "options": [
      "Miễn hoàn toàn",
      "Chịu thuế toàn bộ như tiền lương",
      "Không tính vào thu nhập tính thuế nếu <= 15% tổng thu nhập chịu thuế từ lương",
      "Khấu trừ tối đa 5 triệu/tháng"
    ],
    "correct": 2,
    "explanation": "Theo Điều 2 TT111/2013: Tiền thuê nhà do người sử dụng lao động chi trả cho NLĐ nước ngoài: Không tính vào TNCT nếu ≤ 15% tổng thu nhập chịu thuế từ tiền lương, tiền công (không kể tiền thuê nhà). Phần vượt 15% → tính vào TNCT. NLĐ VN: Nhà ở tập thể → miễn thuế; tiền thuê nhà trả bằng tiền → chịu thuế."
  },
  {
    "id": 1180,
    "code": "PIT020",
    "category": "thue_tncn",
    "question": "Cá nhân nhận cổ tức bằng tiền từ công ty cổ phần. Thuế TNCN phải nộp:",
    "options": [
      "Miễn thuế",
      "5% trên cổ tức nhận được",
      "10% trên cổ tức nhận được (khấu trừ tại nguồn)",
      "Lũy tiến 5–35%"
    ],
    "correct": 2,
    "explanation": "Cổ tức, lợi nhuận được chia từ việc góp vốn/mua cổ phần: Thuế TNCN 5% (không phải 10%). Công ty chi trả cổ tức khấu trừ tại nguồn và nộp thay. Cá nhân không cần quyết toán khoản này. Lưu ý: TT111 nêu 5%, không phải 10%. Không áp dụng biểu lũy tiến."
  },
  {
    "id": 1181,
    "code": "PIT021",
    "category": "thue_tncn",
    "question": "Tiền thưởng Tết (thưởng âm lịch) bằng tiền mặt 50 triệu cho nhân viên có thu nhập. Thuế TNCN xử lý:",
    "options": [
      "Miễn thuế vì là tiền thưởng dịp lễ",
      "10% trên phần vượt 10 triệu đồng",
      "Cộng vào thu nhập từ tiền lương tháng đó và áp dụng biểu lũy tiến",
      "Miễn nếu < 5 triệu/tháng"
    ],
    "correct": 2,
    "explanation": "Tiền thưởng (bao gồm thưởng Tết, thưởng tháng 13...) là thu nhập từ tiền lương, tiền công → cộng vào thu nhập tháng nhận thưởng và áp dụng biểu lũy tiến. Không được áp dụng thuế suất riêng 10% như thu nhập khác (trúng thưởng, quà tặng). Doanh nghiệp phải khấu trừ TNCN tháng đó."
  },
  {
    "id": 1182,
    "code": "PIT022",
    "category": "thue_tncn",
    "question": "Người nước ngoài làm việc tại VN dưới 90 ngày. Thuế TNCN áp dụng:",
    "options": [
      "Không phải nộp thuế tại VN",
      "Nộp 20% cố định trên tổng thu nhập tại VN (không áp dụng biểu lũy tiến)",
      "Áp dụng biểu lũy tiến như người cư trú",
      "Nộp 10% trên tổng thu nhập"
    ],
    "correct": 1,
    "explanation": "Cá nhân không cư trú (ở VN < 183 ngày/năm): Nộp TNCN 20% cố định trên toàn bộ thu nhập phát sinh tại VN. Không áp dụng biểu lũy tiến, không giảm trừ gia cảnh. DN chi trả phải khấu trừ 20% tại nguồn. Áp dụng DTA (hiệp định tránh đánh thuế) nếu có để giảm thuế."
  },
  {
    "id": 1183,
    "code": "PIT023",
    "category": "thue_tncn",
    "question": "Quyết toán thuế TNCN ủy quyền cho tổ chức trả thu nhập thực hiện khi:",
    "options": [
      "Cá nhân muốn đơn giản",
      "Chỉ có 1 nơi thu nhập từ tiền lương trong năm và thuế được khấu trừ đầy đủ (hoặc phát sinh hoàn thuế ≤ 50,000đ)",
      "Thu nhập dưới 100 triệu/năm",
      "Không làm việc vào tháng 12"
    ],
    "correct": 1,
    "explanation": "Ủy quyền quyết toán cho DN: Chỉ khi có đủ 3 điều kiện: (1) Thu nhập chỉ từ 1 nguồn duy nhất (1 chủ lao động); (2) Không phát sinh hoàn thuế HOẶC phát sinh hoàn thuế ≤ 50,000đ nhưng vẫn muốn ủy quyền (chấp nhận không lấy lại số chênh lệch nhỏ); (3) Thời gian làm việc ≥ 12 tháng trong năm. Nếu có 2 nguồn thu → phải tự quyết toán."
  },
  {
    "id": 1184,
    "code": "PIT024",
    "category": "thue_tncn",
    "question": "Thu nhập từ đầu tư vốn (cho vay) nhận lãi 10 triệu/tháng. Thuế TNCN:",
    "options": [
      "0 (không thuộc đối tượng chịu thuế)",
      "5% trên tổng lãi nhận được",
      "10% trên tổng lãi nhận được",
      "Lũy tiến 5–35%"
    ],
    "correct": 1,
    "explanation": "Thu nhập từ đầu tư vốn (lãi tiền gửi ngân hàng, lãi cho vay, lãi trái phiếu): Thuế TNCN 5% trên tổng thu nhập. Ngân hàng khấu trừ tại nguồn 5% lãi tiền gửi. Lãi tiền gửi tiết kiệm: cũng 5%. Không áp dụng giảm trừ gia cảnh cho thu nhập từ đầu tư vốn."
  },
  {
    "id": 1185,
    "code": "PIT025",
    "category": "thue_tncn",
    "question": "Hạn chót để cá nhân tự quyết toán thuế TNCN năm 2024 là:",
    "options": [
      "31/01/2025",
      "31/03/2025",
      "30/04/2025",
      "31/05/2025"
    ],
    "correct": 2,
    "explanation": "Theo Điều 44 Luật QLTH 2019: Hạn quyết toán thuế TNCN của cá nhân = ngày cuối tháng thứ 4 sau khi kết thúc năm tài chính (ngày 30/4 năm sau). Tổ chức chi trả quyết toán thay: Ngày 31/3. Cá nhân tự quyết toán: Ngày 30/4. Nếu ngày 30/4 là ngày nghỉ → lùi sang ngày làm việc tiếp theo."
  },
  {
    "id": 1186,
    "code": "CIT001",
    "category": "thue_tndn",
    "question": "Thuế suất thuế TNDN phổ thông hiện hành tại Việt Nam là:",
    "options": [
      "15%",
      "20%",
      "22%",
      "25%"
    ],
    "correct": 1,
    "explanation": "Thuế suất TNDN phổ thông là 20% theo Luật Thuế TNDN (sửa đổi 2013). Ưu đãi: DN nhỏ và vừa có thể được 15-17% theo điều kiện. Lĩnh vực dầu khí: 32-50%. Dự án đặc biệt ưu đãi: 10%."
  },
  {
    "id": 1187,
    "code": "CIT002",
    "category": "thue_tndn",
    "question": "Chi phí nào sau đây KHÔNG được trừ khi tính thu nhập chịu thuế TNDN?",
    "options": [
      "Lương nhân viên đã ký hợp đồng và thanh toán qua ngân hàng",
      "Khấu hao TSCĐ theo quy định của Bộ Tài chính",
      "Chi phí tiếp khách không có hóa đơn chứng từ hợp lệ",
      "Lãi vay ngân hàng để đầu tư sản xuất kinh doanh"
    ],
    "correct": 2,
    "explanation": "Chi phí không có chứng từ hợp lệ (hóa đơn, biên lai, hợp đồng...) bị loại khỏi chi phí được trừ. Điều 4 TT96/2015: Chi phí được trừ phải có đủ 3 điều kiện: (1) Liên quan đến HĐKD; (2) Có đủ chứng từ; (3) Không thuộc khoản không được trừ."
  },
  {
    "id": 1188,
    "code": "CIT003",
    "category": "thue_tndn",
    "question": "Chi phí tiếp khách, hội nghị, quảng cáo... (chi phí 'khống chế') được trừ tối đa bao nhiêu?",
    "options": [
      "5% tổng chi phí",
      "10% tổng chi phí",
      "15% tổng chi phí",
      "Không bị khống chế nếu có hóa đơn"
    ],
    "correct": 2,
    "explanation": "Theo Điều 4 TT96/2015: Chi phí quảng cáo, khuyến mãi, tiếp khách, hội nghị... được trừ tối đa 15% tổng chi phí được trừ (không tính chi phí này). Phần vượt 15% → bị loại chi phí, phải cộng vào TNCT."
  },
  {
    "id": 1189,
    "code": "CIT004",
    "category": "thue_tndn",
    "question": "Thu nhập chịu thuế TNDN được tính như thế nào?",
    "options": [
      "Doanh thu − Chi phí được trừ + Thu nhập khác − Lỗ kết chuyển",
      "Lợi nhuận kế toán × 20%",
      "Doanh thu × 20%",
      "Lợi nhuận trước thuế − Các khoản miễn thuế"
    ],
    "correct": 0,
    "explanation": "TNCT = Doanh thu − Chi phí được trừ + Thu nhập khác − Thu nhập miễn thuế − Lỗ kết chuyển từ năm trước. Sau đó tính thuế: Thuế TNDN = TNCT × Thuế suất. Khác với lợi nhuận kế toán vì có sự điều chỉnh tăng/giảm theo luật thuế."
  },
  {
    "id": 1190,
    "code": "CIT005",
    "category": "thue_tndn",
    "question": "DN có lỗ tính thuế năm 2024 = 500 triệu. Năm 2025 có lợi nhuận tính thuế 800 triệu. Thuế TNDN năm 2025 là:",
    "options": [
      "800 × 20% = 160 triệu",
      "(800 − 500) × 20% = 60 triệu",
      "800 × 20% − 500 × 20% = 60 triệu",
      "Không được kết chuyển lỗ"
    ],
    "correct": 1,
    "explanation": "Lỗ từ năm trước được kết chuyển tối đa 5 năm. TNCT 2025 = 800 − 500 (lỗ kết chuyển) = 300 triệu. Thuế TNDN = 300 × 20% = 60 triệu. Điều kiện: Phải kê khai rõ lỗ tại từng năm trong tờ khai quyết toán thuế."
  },
  {
    "id": 1191,
    "code": "CIT006",
    "category": "thue_tndn",
    "question": "Thời hạn nộp tờ khai quyết toán thuế TNDN năm là:",
    "options": [
      "Ngày 31/01 năm sau",
      "Ngày 31/03 năm sau",
      "Ngày 30/04 năm sau",
      "Ngày 31/05 năm sau"
    ],
    "correct": 2,
    "explanation": "Theo Điều 44 Luật Quản lý thuế 2019: Quyết toán thuế TNDN: Hạn nộp = ngày cuối tháng thứ 3 sau khi kết thúc năm tài chính. Với năm tài chính 01/01-31/12 → hạn 31/03. Với năm tài chính 01/01-31/12 theo NĐ126/2020 kỳ mới hạn là 30/04. (Lưu ý: một số nguồn ghi 31/3, hệ thống eTax hiện là 30/4 cho năm 2024 trở đi)."
  },
  {
    "id": 1192,
    "code": "CIT007",
    "category": "thue_tndn",
    "question": "Chi phí lãi vay trong năm 300 triệu, EBITDA (thu nhập trước lãi vay, khấu hao, thuế) = 800 triệu. Theo NĐ132/2020, phần lãi vay được trừ tối đa:",
    "options": [
      "300 triệu (toàn bộ)",
      "240 triệu (30% × 800)",
      "200 triệu (25% × 800)",
      "80 triệu (10% × 800)"
    ],
    "correct": 1,
    "explanation": "NĐ132/2020 (giá giao dịch liên kết): Chi phí lãi vay thuần (sau khi trừ lãi tiền gửi/cho vay) được trừ tối đa 30% EBITDA. 30% × 800 = 240 triệu. Lãi vay 300tr > 240tr → phần vượt 60 triệu không được trừ. Phần không trừ được chuyển tiếp 5 năm."
  },
  {
    "id": 1193,
    "code": "CIT008",
    "category": "thue_tndn",
    "question": "Thu nhập từ chuyển nhượng bất động sản bị áp thuế suất riêng bao nhiêu?",
    "options": [
      "20%",
      "25%",
      "10%",
      "2% trên giá bán"
    ],
    "correct": 0,
    "explanation": "Thu nhập từ chuyển nhượng BĐS của DN chịu thuế TNDN 20% trên phần thu nhập (Giá bán − Giá mua − Chi phí liên quan). Phải kê khai riêng, không được bù đắp lỗ từ hoạt động SXKD khác. Cá nhân chuyển nhượng BĐS: 2% trên giá bán (thuế TNCN)."
  },
  {
    "id": 1194,
    "code": "CIT009",
    "category": "thue_tndn",
    "question": "DN có ưu đãi thuế TNDN miễn 2 năm, giảm 50% trong 4 năm tiếp theo, thuế suất ưu đãi 10%. Tính từ năm nào?",
    "options": [
      "Từ năm đăng ký kinh doanh",
      "Từ năm đầu tiên có thu nhập chịu thuế",
      "Từ năm đầu tiên có doanh thu",
      "Từ năm thứ 3 hoạt động"
    ],
    "correct": 1,
    "explanation": "Ưu đãi miễn/giảm thuế TNDN được tính liên tục từ năm đầu tiên có thu nhập chịu thuế dương (không phải từ năm có DT hay năm đăng ký KD). Nếu năm đầu tiên lỗ, chuyển sang năm kế tiếp có lãi. Tuy nhiên nếu vẫn lỗ quá 3 năm sau khi dự án đi vào SXKD → bắt đầu tính ưu đãi từ năm thứ 4."
  },
  {
    "id": 1195,
    "code": "CIT010",
    "category": "thue_tndn",
    "question": "DN tặng quà, biếu hiện vật cho khách hàng trị giá 100 triệu. Xử lý thuế TNDN:",
    "options": [
      "Được trừ 100% như chi phí quảng cáo",
      "Không được trừ vì không có chứng từ thanh toán qua NH",
      "Được trừ nếu thuộc nhóm chi phí khuyến mãi, quảng cáo (trong mức 15%)",
      "Được trừ nếu có đơn đặt hàng từ khách hàng"
    ],
    "correct": 2,
    "explanation": "Chi phí tặng quà khách hàng thuộc nhóm chi phí xúc tiến thương mại, được trừ khi: (1) Có hóa đơn chứng từ hợp lệ; (2) Nằm trong mức 15% tổng chi phí được trừ; (3) Không thanh toán bằng tiền mặt nếu ≥ 20tr. Phần vượt 15% → không được trừ."
  },
  {
    "id": 1196,
    "code": "CIT011",
    "category": "thue_tndn",
    "question": "Chi phí khấu hao TSCĐ không được trừ trong trường hợp nào?",
    "options": [
      "Khấu hao theo phương pháp đường thẳng",
      "Khấu hao TSCĐ đã khấu hao hết (còn đang sử dụng)",
      "Khấu hao TSCĐ chưa hoàn thành đăng ký quyền sở hữu",
      "Khấu hao TSCĐ vô hình (thương hiệu)"
    ],
    "correct": 1,
    "explanation": "TSCĐ đã khấu hao hết giá trị sổ sách nhưng vẫn còn sử dụng: Không được trích KH thêm (không còn giá trị sổ sách để phân bổ). Các TH không được trừ: KH TSCĐ không dùng cho SXKD, KH vượt mức quy định BTC, TSCĐ không có chứng từ mua, KH nhà xe mua nhưng không đăng ký QSH đúng tên DN."
  },
  {
    "id": 1197,
    "code": "CIT012",
    "category": "thue_tndn",
    "question": "Thu nhập từ chuyển nhượng cổ phần tại DN khác. Thuế suất TNDN:",
    "options": [
      "10%",
      "20%",
      "25%",
      "Miễn thuế nếu giữ trên 1 năm"
    ],
    "correct": 1,
    "explanation": "Thu nhập từ chuyển nhượng vốn góp/cổ phần của DN chịu thuế TNDN 20% trên phần thu nhập (Giá bán − Giá vốn − Chi phí). Đây là thu nhập khác trong tờ khai TNDN, không phải kê khai riêng như BĐS. Cá nhân chuyển nhượng CK: 0.1% trên giá bán (TNCN)."
  },
  {
    "id": 1198,
    "code": "CIT013",
    "category": "thue_tndn",
    "question": "DN phân chia cổ tức cho cổ đông là tổ chức VN (không phải cá nhân). Cổ tức nhận được có phải nộp TNDN không?",
    "options": [
      "Có, nộp thuế TNDN 20% trên số cổ tức nhận được",
      "Không, vì đã được DN chia cổ tức nộp thuế rồi",
      "Có, nhưng chỉ phần vượt 10 triệu",
      "Có, nhưng thuế suất chỉ 5%"
    ],
    "correct": 1,
    "explanation": "Theo Điều 8 Luật TNDN: Cổ tức, lợi nhuận được chia từ DN nội địa (đã nộp TNDN) được nhận miễn thuế TNDN ở tầng nhận (để tránh đánh thuế hai lần). Chỉ khi tổ chức VN nhận cổ tức từ DN nước ngoài mới phải nộp TNDN theo thuế suất 20%."
  },
  {
    "id": 1199,
    "code": "CIT014",
    "category": "thue_tndn",
    "question": "Lỗ từ hoạt động chuyển nhượng BĐS có được bù đắp với lợi nhuận từ HĐKD thông thường không?",
    "options": [
      "Có, bù đắp tự do giữa các hoạt động",
      "Không, lỗ BĐS chỉ bù với lãi BĐS",
      "Có, nhưng chỉ bù trừ tối đa 50%",
      "Có, nhưng phải được CQT chấp thuận"
    ],
    "correct": 1,
    "explanation": "Theo quy định: Thu nhập từ chuyển nhượng BĐS phải hạch toán riêng, lỗ từ BĐS không được bù đắp với lãi từ HĐKD thông thường. Tuy nhiên, lãi từ BĐS bù được với lỗ từ HĐKD thông thường. Lỗ BĐS chỉ được kết chuyển sang năm sau từ hoạt động BĐS."
  },
  {
    "id": 1200,
    "code": "CIT015",
    "category": "thue_tndn",
    "question": "Chi phí trích trước (TK 335) nhưng chưa có hóa đơn cuối năm, xử lý thuế TNDN:",
    "options": [
      "Được trừ 100% vì đã ghi nhận vào chi phí kế toán",
      "Không được trừ tuyệt đối",
      "Được trừ nếu có chứng từ xác nhận nghĩa vụ và đủ điều kiện, hóa đơn có thể bổ sung sau",
      "Được trừ tối đa 10% tổng chi phí"
    ],
    "correct": 2,
    "explanation": "Chi phí trích trước hợp lý (tiền điện tháng 12 chưa có HĐ, lãi vay phát sinh, lương tháng 12 chưa thanh toán): Được trừ nếu có căn cứ xác định (hợp đồng, bảng tính lãi, bảng lương). HĐ bổ sung sau phải trong năm quyết toán. Chi phí trích trước không có căn cứ, tùy tiện → không được trừ."
  },
  {
    "id": 1201,
    "code": "CIT016",
    "category": "thue_tndn",
    "question": "DN đầu tư vào Khu kinh tế ven biển được ưu đãi thuế TNDN. Thuế suất ưu đãi là:",
    "options": [
      "5%",
      "10%",
      "15%",
      "17%"
    ],
    "correct": 1,
    "explanation": "Theo Điều 15 Luật TNDN và Nghị định hướng dẫn: Dự án đầu tư vào Khu kinh tế ven biển, khu công nghệ cao, địa bàn KT-XH đặc biệt khó khăn: Thuế suất 10% trong suốt vòng đời dự án + Miễn 4 năm, giảm 50% trong 9 năm tiếp. Khu công nghiệp thông thường: 17% + miễn 2 năm, giảm 50% trong 4 năm."
  },
  {
    "id": 1202,
    "code": "CIT017",
    "category": "thue_tndn",
    "question": "Thời gian kết chuyển lỗ sang năm sau tối đa là:",
    "options": [
      "3 năm",
      "5 năm",
      "7 năm",
      "10 năm"
    ],
    "correct": 1,
    "explanation": "Theo Điều 9 Luật TNDN: Lỗ từ năm này được kết chuyển liên tục, tối đa 5 năm kể từ năm phát sinh lỗ. VD: Lỗ năm 2020 → kết chuyển vào các năm 2021, 2022, 2023, 2024, 2025 (hết hạn). Sau 5 năm không dùng hết → mất. Phải kê khai chi tiết lỗ từng năm trong tờ khai quyết toán."
  },
  {
    "id": 1203,
    "code": "CIT018",
    "category": "thue_tndn",
    "question": "Chi phí lương của chủ DNTN (doanh nghiệp tư nhân) có được trừ khi tính thuế TNDN không?",
    "options": [
      "Được trừ bình thường như lương nhân viên khác",
      "Không được trừ — chủ DNTN tự hưởng lợi nhuận, không phải quan hệ lao động",
      "Được trừ tối đa 10 triệu/tháng",
      "Được trừ nếu có hợp đồng lao động"
    ],
    "correct": 1,
    "explanation": "Theo TT96/2015: Tiền lương của chủ DNTN, thành viên hợp danh của công ty hợp danh: KHÔNG được trừ khi tính TNDN. Lý do: Chủ DNTN và thu nhập chịu thuế TNDN là một, không có quan hệ chủ thể-người lao động. Lợi nhuận sau thuế TNDN = thu nhập của chủ DNTN."
  },
  {
    "id": 1204,
    "code": "CIT019",
    "category": "thue_tndn",
    "question": "DN nộp thuế TNDN tạm tính theo quý. Khoản tạm nộp tối thiểu theo quy định mới nhất:",
    "options": [
      "75% quyết toán cả năm",
      "80% quyết toán cả năm",
      "85% quyết toán cả năm",
      "Không có quy định tạm nộp tối thiểu"
    ],
    "correct": 2,
    "explanation": "Theo Điều 55 Luật Quản lý thuế 2019 và NĐ126/2020: Tổng số thuế TNDN tạm nộp 4 quý phải ≥ 80% số phải nộp theo quyết toán (cũ là 75%). Từ ngày 01/01/2021 theo NĐ126: ≥ 80%. Nếu tạm nộp < 80% → phạt chậm nộp phần thiếu từ ngày hết hạn Q4 đến ngày nộp thực tế."
  },
  {
    "id": 1205,
    "code": "CIT020",
    "category": "thue_tndn",
    "question": "Chi phí tài trợ cho hoạt động thể dục thể thao (VD: tài trợ giải bóng đá) được xử lý thuế TNDN:",
    "options": [
      "Được trừ toàn bộ nếu có hợp đồng tài trợ",
      "Không được trừ — đây là chi phí không liên quan đến SXKD",
      "Được trừ nếu có hóa đơn và nằm trong mức 15% chi phí quảng cáo",
      "Được trừ theo Điều 3 TT78/2014 về tài trợ giáo dục"
    ],
    "correct": 2,
    "explanation": "Chi phí tài trợ TDTT, văn hóa văn nghệ: Nếu có mục đích quảng bá thương hiệu, có hợp đồng tài trợ, hóa đơn → thuộc chi phí xúc tiến thương mại (trong mức 15%). Chi phí tài trợ chương trình nhà nước (giáo dục, thiên tai, nhà tình nghĩa): được trừ toàn bộ nếu có xác nhận cơ quan thụ hưởng."
  },
  {
    "id": 1206,
    "code": "CIT021",
    "category": "thue_tndn",
    "question": "DN Việt Nam nhận cổ tức từ công ty con tại nước ngoài. Thuế TNDN tại VN:",
    "options": [
      "Miễn thuế hoàn toàn",
      "Nộp 20% trên cổ tức nhận được (trừ thuế đã nộp ở nước ngoài theo hiệp định tránh đánh thuế hai lần)",
      "Nộp 5% trên cổ tức nhận được",
      "Nộp 10% trên cổ tức nhận được"
    ],
    "correct": 1,
    "explanation": "Cổ tức từ công ty nước ngoài: DN VN phải kê khai và nộp TNDN 20% tại VN. Tuy nhiên, thuế đã nộp ở nước ngoài được khấu trừ (không vượt mức thuế TNDN VN phải nộp). Khác với cổ tức từ DN VN khác (miễn thuế). Áp dụng Hiệp định tránh đánh thuế hai lần (DTA) nếu có."
  },
  {
    "id": 1207,
    "code": "CIT022",
    "category": "thue_tndn",
    "question": "Khoản tiền phạt hành chính bị CQT xử phạt, xử lý thuế TNDN:",
    "options": [
      "Được trừ vì là chi phí thực tế phát sinh",
      "Không được trừ — nằm trong danh mục chi phí không được trừ",
      "Được trừ 50%",
      "Được trừ nếu dưới 5 triệu đồng"
    ],
    "correct": 1,
    "explanation": "Theo Điều 4 TT96/2015: Các khoản phạt về vi phạm hành chính (thuế, giao thông, môi trường...) KHÔNG được trừ khi tính TNDN. Bao gồm: Phạt chậm nộp thuế, phạt khai sai, phạt vi phạm hợp đồng (trường hợp phạt vi phạm hợp đồng kinh tế giữa hai bên được trừ — cần phân biệt)."
  },
  {
    "id": 1208,
    "code": "CIT023",
    "category": "thue_tndn",
    "question": "Mua xe ô tô sedan trị giá 3 tỷ đồng để phục vụ SXKD. Chi phí khấu hao được trừ TNDN tối đa:",
    "options": [
      "Toàn bộ khấu hao 3 tỷ theo thời gian KH",
      "Khấu hao tối đa nguyên giá 1.6 tỷ (phần vượt 1.6 tỷ không được trừ)",
      "Khấu hao tối đa nguyên giá 2.4 tỷ",
      "Khấu hao 100% nếu xe đứng tên công ty"
    ],
    "correct": 0,
    "explanation": "Theo TT45/2013 và TT96/2015: Không còn khống chế nguyên giá ô tô 1.6 tỷ (quy định cũ). Từ 2014: Xe ô tô mua để SXKD được khấu hao toàn bộ nguyên giá nếu dùng đúng mục đích SXKD. Phần chi phí không được trừ chỉ áp dụng với xe không phục vụ SXKD hoặc mua không theo nhu cầu kinh doanh."
  },
  {
    "id": 1209,
    "code": "CIT024",
    "category": "thue_tndn",
    "question": "DN A có vốn góp 100 tỷ nhưng thực góp mới 40 tỷ. Lãi vay 20 tỷ phát sinh trong năm. Chi phí lãi vay được trừ TNDN:",
    "options": [
      "20 tỷ đồng",
      "8 tỷ (tương ứng phần vốn thực góp 40%)",
      "0 (không được trừ nếu vốn góp chưa đủ)",
      "Tùy theo thỏa thuận với ngân hàng"
    ],
    "correct": 2,
    "explanation": "Theo Điều 16 NĐ218/2013: Chi phí lãi vay phần vốn thiếu (vốn điều lệ đăng ký nhưng chưa góp đủ) không được trừ. Vốn thiếu = 100 − 40 = 60 tỷ. Lãi vay không được trừ = Lãi vay × 60/100 = 12 tỷ. Lãi vay được trừ = 20 − 12 = 8 tỷ. Giải pháp: Hoàn thành góp đủ vốn điều lệ."
  },
  {
    "id": 1210,
    "code": "CIT025",
    "category": "thue_tndn",
    "question": "Dự án đầu tư vào lĩnh vực R&D (nghiên cứu phát triển) có thể được ưu đãi gì?",
    "options": [
      "Không có ưu đãi đặc biệt",
      "Được trừ thêm 150% chi phí R&D khi tính TNDN (super deduction)",
      "Thuế suất 10% và miễn giảm như dự án đặc biệt",
      "Miễn thuế TNDN 5 năm đầu"
    ],
    "correct": 2,
    "explanation": "Theo Luật TNDN: Dự án đầu tư trong lĩnh vực công nghệ cao, R&D được xếp vào dự án đặc biệt ưu đãi: Thuế suất 10% trong 15 năm + Miễn 4 năm, giảm 50% trong 9 năm. Không có super deduction 150% như một số quốc gia khác. VN đang nghiên cứu bổ sung cơ chế này để khuyến khích R&D."
  },
  {
    "id": 1211,
    "code": "CIT026",
    "category": "thue_tndn",
    "question": "Khi DN có giao dịch liên kết phải lập hồ sơ gì để tuân thủ NĐ132/2020?",
    "options": [
      "Chỉ cần kê khai giao dịch liên kết trong tờ khai TNDN",
      "Hồ sơ 3 tầng: Master File + Local File + CbCR (nếu đủ ngưỡng)",
      "Hợp đồng giao dịch liên kết có công chứng",
      "Chỉ cần thuyết minh BCTC"
    ],
    "correct": 1,
    "explanation": "NĐ132/2020 yêu cầu hồ sơ 3 tầng (BEPS Action 13): (1) Hồ sơ toàn cầu (Master File): Tập đoàn có DT ≥ 18,000 tỷ; (2) Hồ sơ quốc gia (Local File): DN có GD LK ≥ 30 tỷ hoặc DT ≥ 50 tỷ; (3) Báo cáo lợi nhuận liên quốc gia (CbCR): Tập đoàn có DT ≥ 18,000 tỷ. Hạn nộp: Cùng với tờ khai TNDN."
  },
  {
    "id": 1212,
    "code": "CIT027",
    "category": "thue_tndn",
    "question": "Thuế GTGT đầu vào không được khấu trừ (bị loại) được xử lý như thế nào trong tờ khai TNDN?",
    "options": [
      "Không ảnh hưởng đến TNDN",
      "Được tính vào chi phí và trừ khi tính TNDN",
      "Phải loại khỏi chi phí TNDN luôn",
      "Được hoàn trả từ TNDN"
    ],
    "correct": 1,
    "explanation": "VAT đầu vào không được khấu trừ (do hàng dùng cho miễn thuế, biếu tặng, không đủ điều kiện): Được ghi vào chi phí kế toán và được trừ khi tính TNDN (vì đây là chi phí thực tế phát sinh liên quan đến SXKD). Không bị loại kép — chỉ loại khấu trừ VAT, không loại chi phí TNDN."
  },
  {
    "id": 1213,
    "code": "CIT028",
    "category": "thue_tndn",
    "question": "Chi phí trích lập quỹ dự phòng tiền lương (để trả lương tháng 13, thưởng...) được xử lý TNDN:",
    "options": [
      "Không được trừ — chờ đến khi thực chi mới được trừ",
      "Được trừ tối đa 17% quỹ lương thực tế đã trả trong năm",
      "Được trừ tối đa 10% doanh thu",
      "Được trừ toàn bộ nếu có kế hoạch chi rõ ràng"
    ],
    "correct": 1,
    "explanation": "Theo TT96/2015: Chi phí trích quỹ dự phòng tiền lương được trừ tối đa 17% quỹ lương thực tế (lương đã thực chi, đã có chứng từ). Năm sau phải sử dụng hết hoặc nộp ngược lại TNDN. Điều kiện: Có quy chế tài chính/lao động rõ ràng. Vượt 17% → không được trừ."
  },
  {
    "id": 1214,
    "code": "CIT029",
    "category": "thue_tndn",
    "question": "Khoản thu nhập khác nào phải kê khai vào thu nhập chịu thuế TNDN?",
    "options": [
      "Chỉ thu nhập từ hoạt động SXKD chính",
      "Lãi tiền gửi ngân hàng, thu từ thanh lý TSCĐ, hoàn nhập dự phòng, tiền bồi thường bảo hiểm, lãi chênh lệch tỷ giá",
      "Chỉ khoản có hóa đơn chứng từ đầy đủ",
      "Cổ tức từ DN VN khác nhận được"
    ],
    "correct": 1,
    "explanation": "Thu nhập khác phải tính vào TNCT: Lãi tiền gửi, tiền cho vay; Thanh lý, nhượng bán TSCĐ lãi; Hoàn nhập dự phòng; Tiền phạt hợp đồng từ đối tác; Thu nhập từ quà biếu tặng; Lãi CL tỷ giá; Thu từ nợ khó đòi đã xóa sổ. Cổ tức từ DN VN khác: miễn thuế."
  },
  {
    "id": 1215,
    "code": "CIT030",
    "category": "thue_tndn",
    "question": "Để xác định giá thị trường trong giao dịch liên kết, phương pháp nào được ưu tiên theo NĐ132/2020?",
    "options": [
      "TNMM (Transactional Net Margin Method)",
      "CUP (Comparable Uncontrolled Price) — Giá giao dịch độc lập so sánh",
      "PSM (Profit Split Method)",
      "CPM (Cost Plus Method)"
    ],
    "correct": 1,
    "explanation": "Theo NĐ132/2020 (OECD Guidelines): Ưu tiên sử dụng phương pháp CUP (giá thị trường so sánh) vì phản ánh trực tiếp nhất giá giao dịch thực tế. Thứ tự ưu tiên: CUP → RSP/CPM → TNMM → PSM. Chọn phương pháp phù hợp nhất với đặc điểm giao dịch và độ tin cậy của dữ liệu so sánh."
  },
  {
    "id": 1216,
    "code": "CIT031",
    "category": "thue_tndn",
    "question": "DN áp dụng nguyên tắc kế toán dồn tích (accrual), nhưng một khoản chi phí đã ghi nhận kế toán tháng 12/2024 mà hóa đơn mới nhận tháng 3/2025. Xử lý TNDN:",
    "options": [
      "Được trừ trong năm 2024 nếu có đủ căn cứ xác định chi phí",
      "Chỉ được trừ trong năm 2025 khi có hóa đơn",
      "Không được trừ nếu không có hóa đơn trong cùng năm",
      "Được trừ năm 2024 nhưng phải kê khai bổ sung"
    ],
    "correct": 0,
    "explanation": "Nguyên tắc: Chi phí được trừ theo nguyên tắc phù hợp kỳ phát sinh, không bắt buộc phải có HĐ trong cùng năm. Nếu HĐ nhận sau ngày lập tờ khai TNDN (31/3/2025) → vẫn được bổ sung vào chi phí 2024 nếu kê khai bổ sung hoặc ghi nhận đúng năm. Điều kiện: Có căn cứ rõ ràng (hợp đồng, biên bản nghiệm thu dịch vụ)."
  },
  {
    "id": 1217,
    "code": "CIT032",
    "category": "thue_tndn",
    "question": "DN mua bảo hiểm nhân thọ cho người lao động, phí bảo hiểm 10 triệu/người/năm. Xử lý TNDN:",
    "options": [
      "Không được trừ vì là phúc lợi ngoài lương",
      "Được trừ toàn bộ nếu ghi trong hợp đồng lao động hoặc thỏa ước lao động",
      "Được trừ tối đa 3 triệu/người/năm",
      "Chỉ được trừ nếu có Cục thuế chấp thuận"
    ],
    "correct": 1,
    "explanation": "Theo TT96/2015: Chi phí mua bảo hiểm nhân thọ cho người lao động được trừ nếu: (1) Ghi rõ trong HĐLĐ hoặc thỏa ước lao động tập thể; (2) Có hóa đơn từ công ty bảo hiểm. Người lao động phải nộp TNCN trên khoản phúc lợi này (theo mục khoản phúc lợi). Không có giới hạn 3 triệu/người."
  },
  {
    "id": 1218,
    "code": "CIT033",
    "category": "thue_tndn",
    "question": "Doanh nghiệp quyết toán thuế TNDN năm: phát hiện phần lỗ 2019 chưa kết chuyển. Năm hiện tại là 2025. Có thể kết chuyển không?",
    "options": [
      "Có, lỗ 2019 vẫn được kết chuyển vào 2025",
      "Không, lỗ 2019 đã quá 5 năm (2020, 2021, 2022, 2023, 2024 = 5 năm) → hết hạn",
      "Có, nếu nộp tờ khai bổ sung",
      "Có, nếu DN chứng minh lý do chưa kết chuyển"
    ],
    "correct": 1,
    "explanation": "Lỗ năm 2019 kết chuyển được vào: 2020, 2021, 2022, 2023, 2024 (tối đa 5 năm). Đến năm 2025 là hết hạn → không còn được kết chuyển. Lỗ phát sinh năm 2020 → hết hạn năm 2025. Phải theo dõi từng năm và kết chuyển đúng hạn."
  },
  {
    "id": 1219,
    "code": "CIT034",
    "category": "thue_tndn",
    "question": "Doanh nghiệp nhỏ và vừa (SME) theo NĐ39/2018 có thể được thuế suất TNDN ưu đãi là:",
    "options": [
      "10%",
      "15%",
      "17%",
      "18%"
    ],
    "correct": 2,
    "explanation": "DN nhỏ và vừa theo NĐ39/2018 (DT < 200 tỷ/năm hoặc < 200 lao động tùy ngành): Thuế suất TNDN 17%. DN siêu nhỏ (DT < 3 tỷ): Thuế suất 15%. Điều kiện: Phải đăng ký áp dụng và đủ tiêu chí. Hiện tại đây là ưu đãi quan trọng cho SME."
  },
  {
    "id": 1220,
    "code": "CIT035",
    "category": "thue_tndn",
    "question": "Chênh lệch kế toán và thuế trong TNDN gọi là gì và phân loại như thế nào?",
    "options": [
      "Không có chênh lệch vì kế toán và thuế như nhau",
      "Chênh lệch tạm thời (temporary) và chênh lệch vĩnh viễn (permanent)",
      "Chênh lệch dương và chênh lệch âm",
      "Chênh lệch thực tế và chênh lệch kế hoạch"
    ],
    "correct": 1,
    "explanation": "Chênh lệch kế toán-thuế: (1) Vĩnh viễn (permanent): Khoản không bao giờ được trừ (phạt hành chính, phần vượt 15%...) → không tạo thuế hoãn lại; (2) Tạm thời (temporary): Khác về thời điểm ghi nhận (KH TSCĐ, dự phòng...) → tạo thuế TNDN hoãn lại (TK 347/243 theo TT200). TT133 không yêu cầu ghi nhận thuế hoãn lại."
  }
]);
