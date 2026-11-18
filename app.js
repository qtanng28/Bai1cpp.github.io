// Engine Trắc Nghiệm Ôn Tập Bài 1 C++ (200 câu - 10 hạng mục)

const CATEGORIES = [
  {
    id: "single",
    name: "1. Trắc nghiệm 4 lựa chọn",
    shortName: "4 lựa chọn",
    icon: "🎯",
    desc: "Chọn 1 đáp án đúng nhất trong 4 phương án A, B, C, D phủ khắp lý thuyết bài 1."
  },
  {
    id: "multiple",
    name: "2. Trắc nghiệm nhiều lựa chọn",
    shortName: "Nhiều lựa chọn",
    icon: "☑️",
    desc: "Chọn tất cả các mệnh đề đúng. Rèn khả năng tổng hợp và phân biệt chi tiết."
  },
  {
    id: "fill",
    name: "3. Điền từ còn thiếu",
    shortName: "Điền khuyết",
    icon: "✍️",
    desc: "Điền tên header, từ khóa, hàm, hậu tố hoặc giá trị số còn khuyết trong câu."
  },
  {
    id: "truefalse",
    name: "4. Đúng / Sai",
    shortName: "Đúng / Sai",
    icon: "⚖️",
    desc: "Xác định tính Đúng hoặc Sai của các nhận định lý thuyết và cẫy bẫy thường gặp."
  },
  {
    id: "conversion",
    name: "5. Chuyển đổi hệ thống số",
    shortName: "Đổi cơ số",
    icon: "🔢",
    desc: "Chuyển đổi qua lại giữa Thập phân (10), Nhị phân (2), Thập lục phân (16) và Bát phân (8)."
  },
  {
    id: "bitfill",
    name: "6. Điền giá trị từng bit",
    shortName: "Điền từng bit",
    icon: "🎛️",
    desc: "Bật/tắt trực tiếp 8 bit (trọng số 128..1) trên thanh ghi để biểu diễn giá trị yêu cầu."
  },
  {
    id: "table",
    name: "7. Điền bảng giá trị còn thiếu",
    shortName: "Điền bảng",
    icon: "📊",
    desc: "Hoàn thành các ô còn khuyết trong các bảng tổng hợp thư viện, kiểu dữ liệu và định dạng."
  },
  {
    id: "output",
    name: "8. Dự đoán kết quả chương trình",
    shortName: "Dự đoán Output",
    icon: "💻",
    desc: "Đọc đoạn mã C++23 và dự đoán chính xác chuỗi kết quả in ra màn hình console."
  },
  {
    id: "finderror",
    name: "9. Tìm lỗi sai",
    shortName: "Tìm lỗi sai",
    icon: "🐛",
    desc: "Phát hiện lỗi biên dịch, lỗi narrowing conversion, tràn số hoặc lỗi logic trong code."
  },
  {
    id: "trace",
    name: "10. Truy vết chương trình",
    shortName: "Truy vết",
    icon: "🔍",
    desc: "Theo dõi sự biến đổi giá trị biến, kiểu dữ liệu và bộ đệm qua từng bước chạy."
  }
];

const ALL_QUESTIONS = [
  ...(window.QUIZ_PART_1 || []),
  ...(window.QUIZ_PART_2 || []),
  ...(window.QUIZ_PART_3 || [])
];

// State
let state = {
  mode: "home", // "home" | "quiz" | "summary"
  quizTitle: "",
  mixedCount: 20,
  selectedCategories: new Set(CATEGORIES.map((c) => c.id)),
  shuffleSingleCategory: false,
  mainQueue: [],
  retryQueue: [],
  currentIndex: 0,
  inRetryPhase: false,
  currentQuestion: null,
  hasChecked: false,
  isCurrentCorrect: false,
  // User temporary input state per question
  userSingleChoice: null,
  userMultiChoice: new Set(),
  userTextInput: "",
  userTrueFalse: null,
  userBits: [0, 0, 0, 0, 0, 0, 0, 0],
  userTableInputs: {},
  // Stats
  initialTotal: 0,
  firstTryCorrectCount: 0,
  totalResolvedCount: 0,
  totalAttempts: 0,
  wrongHistoryIds: new Set()
};

// Utility: Shuffle array (Fisher-Yates)
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Normalize string for comparison
function normalizeAnswer(str) {
  return String(str || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function initApp() {
  renderHome();
  updateHeaderStats();
}

function updateHeaderStats() {
  const statsContainer = document.getElementById("header-stats");
  if (!statsContainer) return;

  if (state.mode === "home") {
    statsContainer.innerHTML = `
      <span class="stat-pill">📚 Tổng ngân hàng: <strong>${ALL_QUESTIONS.length} câu</strong></span>
      <span class="stat-pill correct">✨ 150 câu trong bài + 50 câu nâng cao</span>
    `;
  } else if (state.mode === "quiz") {
    const remainingMain = Math.max(0, state.mainQueue.length - state.currentIndex);
    const retryCount = state.retryQueue.length;
    statsContainer.innerHTML = `
      <span class="stat-pill">✅ Đã hoàn thành: <strong>${state.totalResolvedCount}/${state.initialTotal}</strong></span>
      <span class="stat-pill retry">🔄 Hàng đợi làm lại: <strong>${retryCount} câu</strong></span>
      <button class="btn btn-secondary btn-sm" onclick="confirmReturnHome()">🏠 Về trang chủ</button>
    `;
  } else {
    statsContainer.innerHTML = `
      <button class="btn btn-secondary btn-sm" onclick="renderHome()">🏠 Về trang chủ</button>
    `;
  }
}

function confirmReturnHome() {
  renderHome();
}

// ============================================================================
// HOME SCREEN
// ============================================================================
function renderHome() {
  state.mode = "home";
  updateHeaderStats();
  const root = document.getElementById("app-root");

  const catChipsHtml = CATEGORIES.map((cat) => {
    const isSel = state.selectedCategories.has(cat.id);
    return `
      <div class="filter-chip ${isSel ? "selected" : ""}" onclick="toggleCategoryFilter('${cat.id}')">
        ${cat.icon} ${cat.shortName}
      </div>
    `;
  }).join("");

  const catCardsHtml = CATEGORIES.map((cat) => {
    const questions = ALL_QUESTIONS.filter((q) => q.category === cat.id);
    const inLessonCount = questions.filter((q) => q.source === "in-lesson").length;
    const advCount = questions.filter((q) => q.source === "advanced").length;
    return `
      <div class="category-card">
        <div>
          <div class="cat-top">
            <div class="cat-icon">${cat.icon}</div>
            <div>
              <div class="cat-title">${cat.name}</div>
              <div class="cat-desc">${cat.desc}</div>
            </div>
          </div>
        </div>
        <div class="cat-meta">
          <div>
            <span class="badge badge-primary">${questions.length} câu</span>
            <span class="badge badge-emerald">${inLessonCount} trong bài</span>
            <span class="badge badge-amber">+${advCount} nâng cao</span>
          </div>
          <div style="display:flex; gap:0.4rem;">
            <button class="btn btn-secondary btn-sm" title="Làm theo thứ tự chuẩn" onclick="startCategoryQuiz('${cat.id}', false)">Làm tuần tự</button>
            <button class="btn btn-primary btn-sm" title="Xáo trộn ngẫu nhiên" onclick="startCategoryQuiz('${cat.id}', true)">🔀 Trộn</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const counts = [20, 30, 40, 50, 200];

  root.innerHTML = `
    <div class="hero-banner">
      <div class="hero-text">
        <h1>Hệ Thống Luyện Tập Toàn Diện — Bài 1: Nền Tảng C++ & Hệ Thống Số</h1>
        <p>Ôn tập chuyên sâu với <strong>200 câu hỏi tương tác</strong> chia làm 10 dạng bài tập. Khi làm sai bạn vẫn được đi tiếp và câu sai sẽ tự động gom về cuối bài để làm lại tới khi nắm vững — <strong>chỉ khi trả lời đúng hệ thống mới mở khóa lời giải thích!</strong></p>
        <div class="hero-badges">
          <span class="badge badge-primary">10 dạng câu hỏi tương tác</span>
          <span class="badge badge-emerald">15 câu/phần bám sát tài liệu</span>
          <span class="badge badge-amber">5 câu/phần nâng cao rèn tư duy</span>
          <span class="badge badge-rose">Làm lại câu sai ở cuối bài</span>
        </div>
      </div>
    </div>

    <div class="mixed-panel">
      <div class="panel-header">
        <div>
          <div class="panel-title">🎲 Chế độ Gom Chung & Xáo Trộn Ngẫu Nhiên (Tổng hợp)</div>
          <div class="panel-desc">Trộn ngẫu nhiên các dạng câu hỏi (từ dễ đến khó, kết hợp lý thuyết trong bài và câu nâng cao) để kiểm tra tổng thể.</div>
        </div>
        <div>
          <button class="btn btn-secondary btn-sm" onclick="selectAllCategories(true)">Chọn tất cả (10)</button>
          <button class="btn btn-secondary btn-sm" onclick="selectAllCategories(false)">Bỏ chọn</button>
        </div>
      </div>

      <div style="font-size:0.83rem; font-weight:600; color:var(--text-secondary);">Chọn các phần muốn đưa vào đề tổng hợp (${state.selectedCategories.size}/10 phần đang chọn):</div>
      <div class="filter-chips">
        ${catChipsHtml}
      </div>

      <div class="mixed-controls">
        <div class="count-selector">
          <span style="font-size:0.88rem; font-weight:600; color:var(--text-secondary); margin-right:0.35rem;">Số lượng câu hỏi:</span>
          ${counts
            .map(
              (c) => `
            <button class="count-btn ${state.mixedCount === c ? "active" : ""}" onclick="setMixedCount(${c})">
              ${c === 200 ? "Tất cả (200 câu)" : c + " câu"}
            </button>
          `
            )
            .join("")}
        </div>
        <button class="btn btn-primary btn-lg" onclick="startMixedQuiz()">
          🚀 Bắt đầu bài kiểm tra tổng hợp (${state.mixedCount} câu)
        </button>
      </div>
    </div>

    <div class="section-heading">
      <span>📂 Luyện tập chuyên sâu theo từng phần (10 phần × 20 câu)</span>
    </div>
    <div class="category-grid">
      ${catCardsHtml}
    </div>
  `;
}

function toggleCategoryFilter(catId) {
  if (state.selectedCategories.has(catId)) {
    if (state.selectedCategories.size > 1) {
      state.selectedCategories.delete(catId);
    }
  } else {
    state.selectedCategories.add(catId);
  }
  renderHome();
}

function selectAllCategories(selectAll) {
  if (selectAll) {
    state.selectedCategories = new Set(CATEGORIES.map((c) => c.id));
  } else {
    state.selectedCategories = new Set([CATEGORIES[0].id]);
  }
  renderHome();
}

function setMixedCount(count) {
  state.mixedCount = count;
  renderHome();
}

// ============================================================================
// START QUIZ
// ============================================================================
function startCategoryQuiz(catId, shouldShuffle) {
  const cat = CATEGORIES.find((c) => c.id === catId);
  let pool = ALL_QUESTIONS.filter((q) => q.category === catId);
  if (shouldShuffle) {
    pool = shuffleArray(pool);
  }
  launchQuizSession(pool, `${cat.icon} ${cat.name}`);
}

function startMixedQuiz() {
  const selectedIds = Array.from(state.selectedCategories);
  if (selectedIds.length === 0) return;

  // Balanced selection across chosen categories and difficulties
  let poolByCat = {};
  selectedIds.forEach((id) => {
    poolByCat[id] = shuffleArray(ALL_QUESTIONS.filter((q) => q.category === id));
  });

  let selectedQuestions = [];
  const targetCount = state.mixedCount;
  let round = 0;

  while (selectedQuestions.length < targetCount) {
    let addedInRound = false;
    for (const id of shuffleArray(selectedIds)) {
      if (selectedQuestions.length >= targetCount) break;
      if (poolByCat[id] && poolByCat[id][round]) {
        selectedQuestions.push(poolByCat[id][round]);
        addedInRound = true;
      }
    }
    if (!addedInRound) break;
    round++;
  }

  selectedQuestions = shuffleArray(selectedQuestions);
  launchQuizSession(
    selectedQuestions,
    `🎲 Đề Tổng Hợp Ngẫu Nhiên (${selectedQuestions.length} câu)`
  );
}

function launchQuizSession(questions, title) {
  state.mode = "quiz";
  state.quizTitle = title;
  state.mainQueue = questions.map((q) => ({ ...q, isRetry: false }));
  state.retryQueue = [];
  state.currentIndex = 0;
  state.inRetryPhase = false;
  state.initialTotal = questions.length;
  state.firstTryCorrectCount = 0;
  state.totalResolvedCount = 0;
  state.totalAttempts = 0;
  state.wrongHistoryIds = new Set();

  loadQuestion(state.mainQueue[0]);
}

function loadQuestion(questionObj) {
  state.currentQuestion = questionObj;
  state.hasChecked = false;
  state.isCurrentCorrect = false;
  state.userSingleChoice = null;
  state.userMultiChoice = new Set();
  state.userTextInput = "";
  state.userTrueFalse = null;
  state.userBits = [0, 0, 0, 0, 0, 0, 0, 0];
  state.userTableInputs = {};

  updateHeaderStats();
  renderQuizWorkspace();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================================
// RENDER QUESTION WORKSPACE
// ============================================================================
function renderQuizWorkspace() {
  const root = document.getElementById("app-root");
  const q = state.currentQuestion;
  const cat = CATEGORIES.find((c) => c.id === q.category);

  const progressPercent =
    state.initialTotal > 0
      ? Math.min(100, Math.round((state.totalResolvedCount / state.initialTotal) * 100))
      : 0;

  const diffBadge =
    q.difficulty === "easy"
      ? `<span class="badge badge-emerald">Độ khó: Dễ</span>`
      : q.difficulty === "medium"
      ? `<span class="badge badge-sky">Độ khó: Trung bình</span>`
      : `<span class="badge badge-rose">Độ khó: Khó 🔥</span>`;

  const sourceBadge =
    q.source === "in-lesson"
      ? `<span class="badge badge-primary">📖 Kiến thức trong bài</span>`
      : `<span class="badge badge-amber">🌟 Câu hỏi nâng cao tư duy</span>`;

  const stepLabel = state.inRetryPhase
    ? `Làm lại câu sai (Còn ${state.retryQueue.length} câu cần hoàn thành)`
    : `Câu ${state.currentIndex + 1} / ${state.mainQueue.length}`;

  const retryBannerHtml = state.inRetryPhase
    ? `<div class="retry-banner">
        🔄 <strong>Vòng làm lại các câu chưa đúng:</strong> Hãy đọc kỹ lại đề và trả lời chính xác để mở khóa phần giải thích chi tiết! (Còn ${state.retryQueue.length} câu)
       </div>`
    : "";

  const codeHtml = q.code
    ? `<pre class="code-block"><code>${escapeHtml(q.code)}</code></pre>`
    : "";

  const bodyHtml = renderQuestionBody(q);
  const feedbackHtml = renderFeedbackSection(q);

  root.innerHTML = `
    <div class="quiz-workspace">
      <div class="quiz-topbar">
        <div class="quiz-topbar-row">
          <div style="font-weight:700; color:var(--text-primary);">${state.quizTitle}</div>
          <div style="font-size:0.86rem; font-weight:600; color:var(--text-secondary);">
            Tiến độ nắm vững: ${state.totalResolvedCount}/${state.initialTotal} câu (${progressPercent}%)
          </div>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${progressPercent}%;"></div>
        </div>
      </div>

      ${retryBannerHtml}

      <div class="question-card">
        <div class="q-header">
          <span class="q-num">${stepLabel}</span>
          <div class="q-badges">
            <span class="badge badge-primary">${cat ? cat.icon + " " + cat.shortName : ""}</span>
            ${sourceBadge}
            ${diffBadge}
          </div>
        </div>

        <div class="q-prompt">${q.prompt}</div>
        ${codeHtml}
        <div id="question-interactive-area">
          ${bodyHtml}
        </div>

        ${feedbackHtml}

        <div class="action-bar">
          <div style="font-size:0.82rem; color:var(--text-muted);">
            ${
              !state.hasChecked
                ? "💡 Chọn hoặc nhập đáp án rồi nhấn <strong>Kiểm tra đáp án</strong>."
                : state.isCurrentCorrect
                ? "✅ Bạn đã mở khóa giải thích chi tiết!"
                : "📌 Câu trả lời chưa đúng sẽ được xếp vào cuối bài để bạn thử sức lại."
            }
          </div>
          <div style="display:flex; gap:0.65rem;">
            ${
              !state.hasChecked
                ? `<button class="btn btn-primary btn-lg" onclick="checkCurrentAnswer()">✔️ Kiểm tra đáp án</button>`
                : `<button class="btn btn-primary btn-lg" onclick="goNextQuestion()">
                    ${getNextButtonText()}
                  </button>`
            }
          </div>
        </div>
      </div>
    </div>
  `;
}

function getNextButtonText() {
  const hasMoreMain = !state.inRetryPhase && state.currentIndex + 1 < state.mainQueue.length;
  if (hasMoreMain) return "Làm tiếp câu sau →";
  if (state.retryQueue.length > 0) return `Vào vòng làm lại (${state.retryQueue.length} câu) →`;
  return "Xem kết quả tổng kết 🏆";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ============================================================================
// RENDER SPECIFIC QUESTION TYPES
// ============================================================================
function renderQuestionBody(q) {
  // 1. Single Choice OR FindError OR Output (with options)
  if (
    q.category === "single" ||
    q.category === "finderror" ||
    (q.category === "output" && q.inputMode === "options")
  ) {
    const letters = ["A", "B", "C", "D"];
    return `
      <div class="options-list">
        ${q.options
          .map((opt, idx) => {
            const isSelected = state.userSingleChoice === idx;
            let statusClass = "";
            if (state.hasChecked && isSelected) {
              statusClass = state.isCurrentCorrect ? "correct-choice" : "wrong-choice";
            } else if (isSelected) {
              statusClass = "selected";
            }
            return `
              <div class="option-item ${statusClass} ${state.hasChecked ? "disabled" : ""}"
                   onclick="${state.hasChecked ? "" : `selectSingleOption(${idx})`}">
                <div class="option-marker">${letters[idx] || idx + 1}</div>
                <div class="option-text">${opt}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  // 2. Multiple Choice
  if (q.category === "multiple") {
    const letters = ["A", "B", "C", "D"];
    return `
      <div style="font-size:0.84rem; font-weight:600; color:var(--primary); margin-bottom:0.6rem;">
        ☑️ Chọn TẤT CẢ các phương án đúng (có thể có 2, 3 hoặc 4 đáp án đúng):
      </div>
      <div class="options-list">
        ${q.options
          .map((opt, idx) => {
            const isSelected = state.userMultiChoice.has(idx);
            let statusClass = "";
            if (state.hasChecked && isSelected) {
              statusClass = state.isCurrentCorrect ? "correct-choice" : "wrong-choice";
            } else if (isSelected) {
              statusClass = "selected";
            }
            return `
              <div class="option-item ${statusClass} ${state.hasChecked ? "disabled" : ""}"
                   onclick="${state.hasChecked ? "" : `toggleMultiOption(${idx})`}">
                <div class="option-marker">${isSelected ? "✓" : letters[idx]}</div>
                <div class="option-text">${opt}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  // 3. True / False
  if (q.category === "truefalse") {
    const choices = [
      { val: true, label: "ĐÚNG (True)" },
      { val: false, label: "SAI (False)" }
    ];
    return `
      <div class="options-list" style="flex-direction:row; gap:1rem;">
        ${choices
          .map((ch) => {
            const isSelected = state.userTrueFalse === ch.val;
            let statusClass = "";
            if (state.hasChecked && isSelected) {
              statusClass = state.isCurrentCorrect ? "correct-choice" : "wrong-choice";
            } else if (isSelected) {
              statusClass = "selected";
            }
            return `
              <div class="option-item ${statusClass} ${state.hasChecked ? "disabled" : ""}"
                   style="flex:1; justify-content:center; align-items:center; padding:1.1rem;"
                   onclick="${state.hasChecked ? "" : `selectTrueFalse(${ch.val})`}">
                <div class="option-marker">${ch.val ? "T" : "F"}</div>
                <div class="option-text" style="font-weight:700; flex:initial;">${ch.label}</div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  // 4. Fill in the blank, Number Conversion, or Text-based Output Prediction
  if (q.category === "fill" || q.category === "conversion" || q.category === "output") {
    return `
      <div class="input-group">
        <label class="input-label">Nhập câu trả lời của bạn:</label>
        <input type="text"
               id="quiz-text-input"
               class="text-input"
               placeholder="${q.placeholder || "Nhập đáp án..."}"
               value="${escapeHtml(state.userTextInput)}"
               ${state.hasChecked ? "disabled" : ""}
               oninput="updateTextInput(this.value)"
               onkeydown="if(event.key === 'Enter' && !state.hasChecked) checkCurrentAnswer();" />
      </div>
    `;
  }

  // 5. Bitfill (Interactive 8-bit grid)
  if (q.category === "bitfill") {
    const weights = [128, 64, 32, 16, 8, 4, 2, 1];
    const currentSum = state.userBits.reduce((acc, bit, i) => acc + bit * weights[i], 0);
    const binStr = state.userBits.join("");
    const hexStr = "0x" + currentSum.toString(16).toUpperCase().padStart(2, "0");

    return `
      <div class="bit-grid-wrapper">
        <table class="bit-table">
          <thead>
            <tr>
              <th>Vị trí bit</th>
              <th>7</th><th>6</th><th>5</th><th>4</th><th>3</th><th>2</th><th>1</th><th>0</th>
            </tr>
            <tr>
              <th>Lũy thừa 2</th>
              <th>2⁷</th><th>2⁶</th><th>2⁵</th><th>2⁴</th><th>2³</th><th>2²</th><th>2¹</th><th>2⁰</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bit-weight-row">
              <td>Trọng số</td>
              ${weights.map((w) => `<td>${w}</td>`).join("")}
            </tr>
            <tr>
              <td style="font-weight:700; color:var(--primary);">Giá trị Bit (Nhấn để đổi 0/1)</td>
              ${state.userBits
                .map(
                  (bit, idx) => `
                <td>
                  <button type="button"
                          class="bit-toggle-btn ${bit === 1 ? "bit-on" : ""}"
                          ${state.hasChecked ? "disabled" : ""}
                          onclick="toggleBitValue(${idx})">
                    ${bit}
                  </button>
                </td>
              `
                )
                .join("")}
            </tr>
          </tbody>
        </table>
        <div class="bit-live-helper">
          <span>Dãy nhị phân đang chọn: <code>0b${binStr}</code></span>
          ${
            q.showLiveSum !== false
              ? `<span>Tổng trọng số hiện tại: <strong>${currentSum}</strong> (Hex: <code>${hexStr}</code>)</span>`
              : `<span>🧠 <em>Chế độ tự tính nhẩm: Tổng trọng số được ẩn để rèn kỹ năng cộng nhẩm!</em></span>`
          }
        </div>
      </div>
    `;
  }

  // 6. Table & Trace (Interactive table with missing cells)
  if (q.category === "table" || q.category === "trace") {
    return `
      <div class="quiz-table-wrap">
        <table class="quiz-table">
          <thead>
            <tr>
              ${q.headers.map((h) => `<th>${h}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${q.rows
              .map(
                (row) => `
              <tr>
                ${row
                  .map((cell) => {
                    if (cell && typeof cell === "object" && cell.inputId) {
                      const val = state.userTableInputs[cell.inputId] || "";
                      return `
                        <td>
                          <input type="text"
                                 class="table-cell-input"
                                 placeholder="${cell.placeholder || "Điền giá trị..."}"
                                 value="${escapeHtml(val)}"
                                 ${state.hasChecked ? "disabled" : ""}
                                 oninput="updateTableCellInput('${cell.inputId}', this.value)"
                                 onkeydown="if(event.key === 'Enter' && !state.hasChecked) checkCurrentAnswer();" />
                        </td>
                      `;
                    }
                    return `<td>${cell}</td>`;
                  })
                  .join("")}
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  return "";
}

// ============================================================================
// INTERACTION HANDLERS
// ============================================================================
function selectSingleOption(idx) {
  state.userSingleChoice = idx;
  renderQuizWorkspace();
}

function toggleMultiOption(idx) {
  if (state.userMultiChoice.has(idx)) {
    state.userMultiChoice.delete(idx);
  } else {
    state.userMultiChoice.add(idx);
  }
  renderQuizWorkspace();
}

function selectTrueFalse(val) {
  state.userTrueFalse = val;
  renderQuizWorkspace();
}

function updateTextInput(val) {
  state.userTextInput = val;
}

function toggleBitValue(idx) {
  state.userBits[idx] = state.userBits[idx] === 1 ? 0 : 1;
  renderQuizWorkspace();
}

function updateTableCellInput(inputId, val) {
  state.userTableInputs[inputId] = val;
}

// ============================================================================
// CHECK ANSWER & RETRY QUEUE LOGIC
// ============================================================================
function evaluateCurrentQuestion(q) {
  if (
    q.category === "single" ||
    q.category === "finderror" ||
    (q.category === "output" && q.inputMode === "options")
  ) {
    if (state.userSingleChoice === null) return { valid: false, msg: "Vui lòng chọn 1 đáp án trước khi kiểm tra!" };
    return { valid: true, correct: state.userSingleChoice === q.answer };
  }

  if (q.category === "multiple") {
    if (state.userMultiChoice.size === 0) {
      return { valid: false, msg: "Vui lòng chọn ít nhất 1 phương án!" };
    }
    const expected = new Set(q.answer);
    if (expected.size !== state.userMultiChoice.size) {
      return { valid: true, correct: false };
    }
    for (const item of expected) {
      if (!state.userMultiChoice.has(item)) return { valid: true, correct: false };
    }
    return { valid: true, correct: true };
  }

  if (q.category === "truefalse") {
    if (state.userTrueFalse === null) {
      return { valid: false, msg: "Vui lòng chọn ĐÚNG hoặc SAI!" };
    }
    return { valid: true, correct: state.userTrueFalse === q.answer };
  }

  if (q.category === "fill" || q.category === "conversion" || q.category === "output") {
    if (!state.userTextInput || !state.userTextInput.trim()) {
      return { valid: false, msg: "Vui lòng nhập câu trả lời vào ô trống!" };
    }
    const normUser = normalizeAnswer(state.userTextInput);
    const isOk = q.acceptedAnswers.some((ans) => normalizeAnswer(ans) === normUser);
    return { valid: true, correct: isOk };
  }

  if (q.category === "bitfill") {
    const isOk = q.targetBits.every((b, idx) => b === state.userBits[idx]);
    return { valid: true, correct: isOk };
  }

  if (q.category === "table" || q.category === "trace") {
    const requiredCells = [];
    q.rows.forEach((row) => {
      row.forEach((cell) => {
        if (cell && typeof cell === "object" && cell.inputId) {
          requiredCells.push(cell);
        }
      });
    });

    for (const cell of requiredCells) {
      const val = state.userTableInputs[cell.inputId];
      if (!val || !val.trim()) {
        return { valid: false, msg: "Vui lòng điền đầy đủ tất cả các ô còn trống trong bảng!" };
      }
    }

    const allCorrect = requiredCells.every((cell) => {
      const normUser = normalizeAnswer(state.userTableInputs[cell.inputId]);
      return cell.answers.some((ans) => normalizeAnswer(ans) === normUser);
    });

    return { valid: true, correct: allCorrect };
  }

  return { valid: false, msg: "Không xác định được định dạng câu hỏi." };
}

function checkCurrentAnswer() {
  if (state.hasChecked) return;
  const q = state.currentQuestion;
  const res = evaluateCurrentQuestion(q);

  if (!res.valid) {
    alert(res.msg);
    return;
  }

  state.hasChecked = true;
  state.isCurrentCorrect = res.correct;
  state.totalAttempts++;

  if (res.correct) {
    state.totalResolvedCount++;
    if (!state.wrongHistoryIds.has(q.id)) {
      state.firstTryCorrectCount++;
    }
    // If we are in retry phase, remove the current question from the head of retryQueue
    if (state.inRetryPhase) {
      state.retryQueue.shift();
    }
  } else {
    state.wrongHistoryIds.add(q.id);
    if (state.inRetryPhase) {
      // Move from head of retryQueue to the end of retryQueue so user retries it later
      const failedQ = state.retryQueue.shift();
      state.retryQueue.push({ ...failedQ, isRetry: true });
    } else {
      // Push to retryQueue for the end of the quiz
      state.retryQueue.push({ ...q, isRetry: true });
    }
  }

  updateHeaderStats();
  renderQuizWorkspace();
}

function renderFeedbackSection(q) {
  if (!state.hasChecked) return "";

  if (state.isCurrentCorrect) {
    // ONLY show explanation when answered correctly!
    return `
      <div class="feedback-banner success">
        <div class="feedback-title">🎉 Chính xác! Bạn đã làm chủ câu hỏi này.</div>
        <div class="explanation-box">
          <strong>💡 Giải thích chi tiết:</strong> ${q.explanation}
        </div>
      </div>
    `;
  } else {
    // When wrong: do NOT reveal the answer or explanation!
    return `
      <div class="feedback-banner error">
        <div class="feedback-title">❌ Chưa chính xác!</div>
        <div>
          Để giúp bạn tự rèn tư duy, đáp án và lời giải thích sẽ <strong>chưa hiển thị ngay</strong>.
          Câu hỏi này đã được đưa vào <strong>danh sách làm lại ở cuối bài</strong>. Bạn cứ yên tâm bấm nút bên dưới để làm tiếp câu sau nhé!
        </div>
      </div>
    `;
  }
}

function goNextQuestion() {
  if (!state.inRetryPhase) {
    if (state.currentIndex + 1 < state.mainQueue.length) {
      state.currentIndex++;
      loadQuestion(state.mainQueue[state.currentIndex]);
      return;
    }
    // Finished main queue -> check if retryQueue has items
    if (state.retryQueue.length > 0) {
      state.inRetryPhase = true;
      loadQuestion(state.retryQueue[0]);
      return;
    }
    // All done!
    renderSummary();
  } else {
    // In retry phase
    if (state.retryQueue.length > 0) {
      loadQuestion(state.retryQueue[0]);
    } else {
      renderSummary();
    }
  }
}

// ============================================================================
// SUMMARY SCREEN
// ============================================================================
function renderSummary() {
  state.mode = "summary";
  updateHeaderStats();
  const root = document.getElementById("app-root");

  const firstTryAccuracy =
    state.initialTotal > 0
      ? Math.round((state.firstTryCorrectCount / state.initialTotal) * 100)
      : 100;

  const retriedCount = state.wrongHistoryIds.size;

  root.innerHTML = `
    <div class="summary-card">
      <div style="font-size:3rem;">🏆</div>
      <h2 style="font-size:1.5rem; font-weight:800; margin-top:0.5rem;">Hoàn Thành Xuất Sắc Bài Ôn Tập!</h2>
      <p style="color:var(--text-secondary); margin-top:0.25rem;">${state.quizTitle}</p>

      <div class="summary-score">100% Hoàn Tất</div>
      <p style="font-size:0.92rem; color:var(--text-secondary);">
        Bạn đã trả lời đúng toàn bộ <strong>${state.initialTotal}/${state.initialTotal}</strong> câu hỏi (bao gồm cả các câu làm lại ở cuối bài).
      </p>

      <div class="summary-stats-grid">
        <div class="summary-stat-box">
          <div class="num" style="color:var(--success);">${state.firstTryCorrectCount}/${state.initialTotal}</div>
          <div class="lbl">Đúng ngay lần đầu (${firstTryAccuracy}%)</div>
        </div>
        <div class="summary-stat-box">
          <div class="num" style="color:var(--warning);">${retriedCount}</div>
          <div class="lbl">Số câu đã ôn lại ở cuối bài</div>
        </div>
        <div class="summary-stat-box">
          <div class="num" style="color:var(--primary);">${state.totalAttempts}</div>
          <div class="lbl">Tổng số lượt kiểm tra đáp án</div>
        </div>
      </div>

      <div style="display:flex; justify-content:center; gap:0.85rem; flex-wrap:wrap; margin-top:1.5rem;">
        <button class="btn btn-secondary btn-lg" onclick="renderHome()">🏠 Chọn phần kiểm tra khác</button>
        <button class="btn btn-primary btn-lg" onclick="startMixedQuiz()">🎲 Làm đề tổng hợp mới</button>
      </div>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", initApp);
