// Phần 2:
// 5. conversion (Chuyển đổi hệ thống số - 20 câu)
// 6. bitfill (Điền giá trị từng bit trên lưới 8-bit - 20 câu)
// 7. table (Điền bảng giá trị còn thiếu - 20 câu)

window.QUIZ_PART_2 = [
  // ============================================================================
  // CATEGORY 5: CHUYỂN ĐỔI HỆ THỐNG SỐ (conversion) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "conv-1",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuyển số nhị phân <code>10000000000₂</code> (tương ứng lũy thừa <code>2¹⁰</code> trong bảng lũy thừa của 2) sang hệ **Thập phân (Decimal)**:",
    placeholder: "Nhập số thập phân...",
    acceptedAnswers: ["1024"],
    explanation: "Theo bảng lũy thừa của 2 trong bài học: <code>2¹⁰ = 10000000000₂ = 1024</code> ở hệ thập phân."
  },
  {
    id: "conv-2",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuyển số thập phân <code>67</code> sang hệ **Nhị phân 8-bit** (viết đủ 8 chữ số 0/1, không cần tiền tố <code>0b</code>):",
    placeholder: "Ví dụ: 00001111",
    acceptedAnswers: ["01000011", "0b01000011", "1000011"],
    explanation: "Dùng phương pháp trừ trong bài: <code>67 - 64 = 3</code> (bit 6 = 1), <code>3 - 2 = 1</code> (bit 1 = 1), <code>1 - 1 = 0</code> (bit 0 = 1). Kết quả 8-bit: <code>01000011</code>."
  },
  {
    id: "conv-3",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuyển số thập phân <code>36</code> sang hệ **Thập lục phân (Hexadecimal)** có tiền tố <code>0x</code> (như ví dụ trong bài):",
    placeholder: "Ví dụ: 0x1A",
    acceptedAnswers: ["0x24", "24", "0X24"],
    explanation: "Đổi <code>36</code> sang nhị phân 8 bit được <code>0010 0100₂</code>. Nhóm <code>0010</code> = 2, nhóm <code>0100</code> = 4. Ghép lại được <code>0x24</code>."
  },
  {
    id: "conv-4",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuyển số thập phân <code>44</code> sang hệ **Thập lục phân (Hexadecimal)** có tiền tố <code>0x</code>:",
    placeholder: "Ví dụ: 0x1A",
    acceptedAnswers: ["0x2c", "0x2C", "2c", "2C"],
    explanation: "Đổi <code>44</code> sang nhị phân 8 bit được <code>0010 1100₂</code>. Nhóm <code>0010</code> = 2, nhóm <code>1100</code> = 12 (C). Ghép lại được <code>0x2C</code>."
  },
  {
    id: "conv-5",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuyển chuỗi nhị phân 8-bit <code>11110000₂</code> sang hệ **Thập lục phân (Hexadecimal)** có tiền tố <code>0x</code>:",
    placeholder: "Ví dụ: 0xA0",
    acceptedAnswers: ["0xf0", "0xF0", "f0", "F0"],
    explanation: "Chia <code>11110000₂</code> thành 2 nhóm 4 bit: <code>1111</code> = 15 = <code>F</code> và <code>0000</code> = 0 = <code>0</code>. Kết quả là <code>0xF0</code>."
  },
  {
    id: "conv-6",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuyển literal bát phân (Octal) <code>017</code> trong C++ sang hệ **Thập phân (Decimal)**:",
    placeholder: "Nhập số thập phân...",
    acceptedAnswers: ["15"],
    explanation: "Số bắt đầu bằng <code>0</code> là hệ bát phân (cơ số 8): <code>017₈ = 1 × 8¹ + 7 × 8⁰ = 8 + 7 = 15</code>."
  },
  {
    id: "conv-7",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuyển nhóm 4-bit nhị phân <code>1101₂</code> sang chữ số **Thập lục phân (Hexadecimal)** tương ứng (1 chữ cái in hoa):",
    placeholder: "Nhập chữ số Hex (0-9, A-F)...",
    acceptedAnswers: ["D", "d", "0xD", "0xd"],
    explanation: "Ta có <code>1101₂ = 8 + 4 + 0 + 1 = 13</code>. Trong hệ Hex: A=10, B=11, C=12, <strong>D=13</strong>."
  },
  {
    id: "conv-8",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuyển chữ số Thập lục phân <code>B</code> sang dạng **Nhị phân 4-bit** (viết đủ 4 chữ số 0/1):",
    placeholder: "Ví dụ: 1010",
    acceptedAnswers: ["1011", "0b1011"],
    explanation: "Chữ số <code>B</code> trong hệ Hex có giá trị thập phân là <code>11</code>. Ta có <code>11 = 8 + 2 + 1 = 1011₂</code>."
  },
  {
    id: "conv-9",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuyển chữ số Bát phân (Octal) <code>6</code> sang dạng **Nhị phân 3-bit** (theo bảng hệ bát phân trong bài):",
    placeholder: "Ví dụ: 101",
    acceptedAnswers: ["110", "0b110"],
    explanation: "Theo bảng hệ bát phân: <code>6₈ = 4 + 2 + 0 = 110₂</code>."
  },
  {
    id: "conv-10",
    category: "conversion",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Trong phần định dạng xuất của bài học, với <code>int number{ 42 };</code>, kết quả của <code>std::println(\"{:#b}\", number);</code> là chuỗi nhị phân nào (có kèm tiền tố <code>0b</code>)?",
    placeholder: "Ví dụ: 0b1010",
    acceptedAnswers: ["0b101010"],
    explanation: "Ta có <code>42 = 32 + 8 + 2 = 101010₂</code>. Với <code>{:#b}</code>, chuỗi xuất ra có tiền tố là <code>0b101010</code>."
  },
  {
    id: "conv-11",
    category: "conversion",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Với <code>int number{ 42 };</code>, kết quả của <code>std::println(\"{:#x}\", number);</code> (hệ Hex chữ thường kèm tiền tố <code>0x</code>) là gì?",
    placeholder: "Ví dụ: 0x1f",
    acceptedAnswers: ["0x2a", "0x2A"],
    explanation: "<code>42 = 2 × 16 + 10 = 0x2a</code>."
  },
  {
    id: "conv-12",
    category: "conversion",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Với <code>int number{ 42 };</code>, mẫu định dạng <code>{:#o}</code> (bát phân kèm tiền tố <code>0</code>) trong bảng định dạng in ra giá trị nào?",
    placeholder: "Ví dụ: 017",
    acceptedAnswers: ["052", "52"],
    explanation: "Đổi 42 sang hệ 8: <code>42 = 5 × 8¹ + 2 × 8⁰ = 052</code>."
  },
  {
    id: "conv-13",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong bảng lũy thừa của 2, số nhị phân <code>100000000₂</code> (tương ứng <code>2⁸</code>) có giá trị **Thập phân** là bao nhiêu?",
    placeholder: "Nhập số thập phân...",
    acceptedAnswers: ["256"],
    explanation: "Theo bảng lũy thừa: <code>2⁸ = 100000000₂ = 256</code>."
  },
  {
    id: "conv-14",
    category: "conversion",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong bảng trọng số theo vị trí của hệ Thập lục phân (Hexadecimal), vị trí số <code>2</code> (tức <code>16²</code>) có trọng số thập phân là bao nhiêu?",
    placeholder: "Nhập trọng số thập phân...",
    acceptedAnswers: ["256"],
    explanation: "Các vị trí trong hệ 16 từ phải sang trái có trọng số: <code>16⁰ = 1</code>, <code>16¹ = 16</code>, <code>16² = 256</code>, <code>16³ = 4096</code>."
  },
  {
    id: "conv-15",
    category: "conversion",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Chuyển số thập phân <code>36</code> sang dạng **Nhị phân 8-bit** (viết đủ 8 chữ số 0/1 như bước 1 trong bài):",
    placeholder: "Ví dụ: 00100100",
    acceptedAnswers: ["00100100", "0b00100100"],
    explanation: "<code>36 = 32 + 4</code>, do đó bật bit ở cột 32 (vị trí 5) và cột 4 (vị trí 2) → <code>00100100</code>."
  },
  // --- 5 CÂU NÂNG CAO (advanced) ---
  {
    id: "conv-16",
    category: "conversion",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Chuyển số thập lục phân <code>0xA5</code> sang hệ **Thập phân (Decimal)**:",
    placeholder: "Nhập số thập phân...",
    acceptedAnswers: ["165"],
    explanation: "Ta có <code>A = 10</code>, <code>5 = 5</code>. Giá trị thập phân: <code>(10 × 16¹) + (5 × 16⁰) = 160 + 5 = 165</code>."
  },
  {
    id: "conv-17",
    category: "conversion",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Chuyển số thập phân <code>200</code> sang hệ **Thập lục phân (Hexadecimal)** có tiền tố <code>0x</code>:",
    placeholder: "Ví dụ: 0xC8",
    acceptedAnswers: ["0xc8", "0xC8", "c8", "C8"],
    explanation: "Đổi <code>200</code> sang nhị phân 8 bit: <code>200 = 128 + 64 + 8 = 1100 1000₂</code>. Nhóm đầu <code>1100 = 12 = C</code>, nhóm sau <code>1000 = 8</code> → <code>0xC8</code>."
  },
  {
    id: "conv-18",
    category: "conversion",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Thực hiện phép cộng hai số ở hai hệ cơ số khác nhau: <code>0x1F + 0b00010001</code>. Hãy viết kết quả ở hệ **Thập phân (Decimal)**:",
    placeholder: "Nhập tổng ở hệ thập phân...",
    acceptedAnswers: ["48"],
    explanation: "Ta có: <code>0x1F = 1×16 + 15 = 31</code>; <code>0b00010001 = 16 + 1 = 17</code>. Tổng: <code>31 + 17 = 48</code>."
  },
  {
    id: "conv-19",
    category: "conversion",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Chuyển số bát phân <code>075</code> (Octal) sang hệ **Thập lục phân (Hexadecimal)** có tiền tố <code>0x</code>:",
    placeholder: "Ví dụ: 0x3D",
    acceptedAnswers: ["0x3d", "0x3D", "3d", "3D"],
    explanation: "Cách 1 (qua nhị phân): <code>7₈ = 111₂</code>, <code>5₈ = 101₂</code> → ghép thành <code>0011 1101₂ = 0x3D</code>. Cách 2 (qua thập phân): <code>7×8 + 5 = 61 = 3×16 + 13 = 0x3D</code>."
  },
  {
    id: "conv-20",
    category: "conversion",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Cho số thập lục phân <code>0x104</code>. Giá trị **Thập phân (Decimal)** của số này là bao nhiêu?",
    placeholder: "Nhập số thập phân...",
    acceptedAnswers: ["260"],
    explanation: "Theo bảng trọng số hệ 16: <code>0x104 = (1 × 16²) + (0 × 16¹) + (4 × 16⁰) = 256 + 0 + 4 = 260</code>."
  },

  // ============================================================================
  // CATEGORY 6: ĐIỀN GIÁ TRỊ TỪNG BIT (bitfill) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "bit-1",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy bật/tắt từng bit trên bảng 8-bit bên dưới để biểu diễn số thập phân <code>67</code> (như ví dụ mẫu trong bài học):",
    targetBits: [0, 1, 0, 0, 0, 0, 1, 1],
    showLiveSum: true,
    explanation: "Số <code>67 = 64 + 2 + 1</code>. Do đó các bit ở trọng số <code>64</code> (bit 6), <code>2</code> (bit 1) và <code>1</code> (bit 0) bằng <code>1</code>, các bit còn lại bằng <code>0</code>: <code>01000011₂</code>."
  },
  {
    id: "bit-2",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy điền giá trị từng bit (0 hoặc 1) để biểu diễn số thập phân <code>15</code> (tương ứng <code>0b00001111</code> hoặc <code>0x0F</code> trong bài):",
    targetBits: [0, 0, 0, 0, 1, 1, 1, 1],
    showLiveSum: true,
    explanation: "Số <code>15 = 8 + 4 + 2 + 1</code>, bật 4 bit thấp nhất (bit 3, 2, 1, 0): <code>00001111₂</code>."
  },
  {
    id: "bit-3",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy điền giá trị từng bit để biểu diễn số thập phân <code>36</code> (tương ứng <code>0x24</code> trong phần chuyển đổi sang Hex):",
    targetBits: [0, 0, 1, 0, 0, 1, 0, 0],
    showLiveSum: true,
    explanation: "Số <code>36 = 32 + 4</code>, bật bit ở cột trọng số <code>32</code> (bit 5) và cột <code>4</code> (bit 2): <code>00100100₂</code>."
  },
  {
    id: "bit-4",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy điền giá trị từng bit để biểu diễn số thập phân <code>44</code> (tương ứng <code>0x2C</code> trong phần chuyển đổi sang Hex):",
    targetBits: [0, 0, 1, 0, 1, 1, 0, 0],
    showLiveSum: true,
    explanation: "Số <code>44 = 32 + 8 + 4</code>, bật các bit ở cột <code>32</code>, <code>8</code> và <code>4</code>: <code>00101100₂</code>."
  },
  {
    id: "bit-5",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy điền giá trị từng bit để biểu diễn số thập lục phân <code>0xF0</code> (ví dụ một byte và hai chữ số Hex trong bài):",
    targetBits: [1, 1, 1, 1, 0, 0, 0, 0],
    showLiveSum: true,
    explanation: "Chữ số <code>F</code> đầu ứng với 4 bit cao <code>1111</code> (128+64+32+16 = 240), chữ số <code>0</code> sau ứng với 4 bit thấp <code>0000</code>: <code>11110000₂</code>."
  },
  {
    id: "bit-6",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy điền giá trị từng bit để biểu diễn số thập phân <code>42</code> (biến <code>int number{42};</code> trong phần định dạng nhị phân <code>101010</code>):",
    targetBits: [0, 0, 1, 0, 1, 0, 1, 0],
    showLiveSum: true,
    explanation: "Số <code>42 = 32 + 8 + 2</code>, nên các bit ở cột <code>32</code>, <code>8</code>, <code>2</code> bằng <code>1</code>: <code>00101010₂</code>."
  },
  {
    id: "bit-7",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy điền giá trị từng bit để biểu diễn lũy thừa <code>2⁷ = 128</code> trong bảng hệ nhị phân 8-bit:",
    targetBits: [1, 0, 0, 0, 0, 0, 0, 0],
    showLiveSum: true,
    explanation: "<code>2⁷ = 128</code> chỉ bật duy nhất bit ở vị trí 7 (trọng số 128): <code>10000000₂</code>."
  },
  {
    id: "bit-8",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy điền giá trị từng bit để biểu diễn giá trị lớn nhất của kiểu <code>std::uint8_t</code> (1 byte không dấu = <code>255</code>):",
    targetBits: [1, 1, 1, 1, 1, 1, 1, 1],
    showLiveSum: true,
    explanation: "Giá trị lớn nhất của 8-bit không dấu là <code>2⁸ - 1 = 255 = 128+64+32+16+8+4+2+1</code>, tức cả 8 bit đều bằng <code>1</code> (<code>11111111₂</code>)."
  },
  {
    id: "bit-9",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy điền giá trị từng bit để biểu diễn mã ASCII của ký tự <code>'A'</code> (trong bài có ví dụ <code>signed char a{65};</code>):",
    targetBits: [0, 1, 0, 0, 0, 0, 0, 1],
    showLiveSum: true,
    explanation: "Số <code>65 = 64 + 1</code>, bật bit 6 (trọng số 64) và bit 0 (trọng số 1): <code>01000001₂</code>."
  },
  {
    id: "bit-10",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hãy điền giá trị từng bit để biểu diễn mã ASCII của ký tự xuống dòng <code>10</code> (trong <code>std::printf(\"Hello World!%c\", 10);</code>):",
    targetBits: [0, 0, 0, 0, 1, 0, 1, 0],
    showLiveSum: true,
    explanation: "Số <code>10 = 8 + 2</code>, bật bit ở trọng số <code>8</code> và <code>2</code>: <code>00001010₂</code>."
  },
  {
    id: "bit-11",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hãy điền giá trị từng bit để biểu diễn giá trị dương lớn nhất của kiểu <code>std::int8_t</code> (1 byte có dấu = <code>127</code>):",
    targetBits: [0, 1, 1, 1, 1, 1, 1, 1],
    showLiveSum: true,
    explanation: "Số <code>127 = 64 + 32 + 16 + 8 + 4 + 2 + 1</code>. Bit dấu (bit 7) bằng <code>0</code> và 7 bit còn lại đều bằng <code>1</code>: <code>01111111₂</code>."
  },
  {
    id: "bit-12",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hãy điền giá trị từng bit để biểu diễn số thập phân <code>28</code> (tuổi của Ada <code>int age{28};</code> trong ví dụ thực hành I/O):",
    targetBits: [0, 0, 0, 1, 1, 1, 0, 0],
    showLiveSum: true,
    explanation: "Số <code>28 = 16 + 8 + 4</code>, bật các bit ở trọng số <code>16</code>, <code>8</code> và <code>4</code>: <code>00011100₂</code>."
  },
  {
    id: "bit-13",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hãy điền giá trị từng bit để biểu diễn số thập phân <code>24</code> (kết quả của phép tính <code>-1000 mod 256 = 24</code> trong phần kiểu dữ liệu):",
    targetBits: [0, 0, 0, 1, 1, 0, 0, 0],
    showLiveSum: true,
    explanation: "Số <code>24 = 16 + 8</code>, bật bit 4 (16) và bit 3 (8): <code>00011000₂</code>."
  },
  {
    id: "bit-14",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hãy điền giá trị từng bit để biểu diễn số thập phân <code>244</code> (kết quả của phép tràn số <code>500 mod 256 = 244</code> trong ví dụ thực hành):",
    targetBits: [1, 1, 1, 1, 0, 1, 0, 0],
    showLiveSum: true,
    explanation: "Ta có <code>244 = 128 + 64 + 32 + 16 + 4 = 240 + 4</code> (tức <code>0xF4</code>). Dãy bit là <code>11110100₂</code>."
  },
  {
    id: "bit-15",
    category: "bitfill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hãy điền giá trị từng bit để biểu diễn số bát phân <code>052</code> (tương ứng số 42 trong bảng định dạng <code>{:#o}</code>):",
    targetBits: [0, 0, 1, 0, 1, 0, 1, 0],
    showLiveSum: false,
    explanation: "<code>052₈</code>: chữ số <code>5</code> = <code>101₂</code>, chữ số <code>2</code> = <code>010₂</code>, ghép lại và thêm hai bit 0 ở đầu cho đủ 8 bit: <code>00101010₂</code> (= 42)."
  },
  // --- 5 CÂU NÂNG CAO (advanced - ẩn tổng tự động để rèn tính nhẩm!) ---
  {
    id: "bit-16",
    category: "bitfill",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao - Tự tính nhẩm] Hãy bật/tắt các bit để biểu diễn số thập lục phân <code>0x9E</code> (Gợi ý: tách thành 2 nhóm 4-bit <code>9</code> và <code>E</code>):",
    targetBits: [1, 0, 0, 1, 1, 1, 1, 0],
    showLiveSum: false,
    explanation: "Nhóm 4 bit cao: <code>9 = 8 + 1 = 1001₂</code>. Nhóm 4 bit thấp: <code>E = 14 = 8 + 4 + 2 = 1110₂</code>. Ghép lại được <code>10011110₂</code> (158 ở hệ thập phân)."
  },
  {
    id: "bit-17",
    category: "bitfill",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao - Tự tính nhẩm] Hãy điền giá trị từng bit để biểu diễn số thập phân <code>173</code> bằng phương pháp trừ trọng số từ trái sang phải:",
    targetBits: [1, 0, 1, 0, 1, 1, 0, 1],
    showLiveSum: false,
    explanation: "<code>173 - 128 = 45</code> (bit 7=1); 45 < 64 (bit 6=0); <code>45 - 32 = 13</code> (bit 5=1); 13 < 16 (bit 4=0); <code>13 - 8 = 5</code> (bit 3=1); <code>5 - 4 = 1</code> (bit 2=1); 1 < 2 (bit 1=0); <code>1 - 1 = 0</code> (bit 0=1) → <code>10101101₂</code>."
  },
  {
    id: "bit-18",
    category: "bitfill",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao - Tự tính nhẩm] Cho biến <code>unsigned char my_data{ 0 }; my_data = -2;</code>. Hãy bật các bit biểu diễn giá trị thực tế của <code>my_data</code> trong bộ nhớ 8-bit:",
    targetBits: [1, 1, 1, 1, 1, 1, 1, 0],
    showLiveSum: false,
    explanation: "Với kiểu 8-bit không dấu, <code>-2 mod 256 = 254</code>. Ta có <code>254 = 255 - 1</code>, nghĩa là tất cả các bit đều bằng <code>1</code> ngoại trừ bit 0 (trọng số 1) bằng <code>0</code>: <code>11111110₂</code>."
  },
  {
    id: "bit-19",
    category: "bitfill",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao - Tự tính nhẩm] Hãy bật các bit biểu diễn kết quả của phép cộng <code>0x3A + 011</code> (lưu ý <code>011</code> là hệ bát phân!):",
    targetBits: [0, 1, 0, 0, 0, 0, 1, 1],
    showLiveSum: false,
    explanation: "Ta có <code>0x3A = 3×16 + 10 = 58</code>. Số bát phân <code>011₈ = 1×8 + 1 = 9</code>. Tổng: <code>58 + 9 = 67 = 64 + 2 + 1 = 01000011₂</code>."
  },
  {
    id: "bit-20",
    category: "bitfill",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao - Tự tính nhẩm] Một thanh ghi điều khiển 8-bit yêu cầu bật các bit ở vị trí là **số nguyên tố** (trong các vị trí từ 0 đến 7). Hãy bật đúng các bit đó:",
    targetBits: [0, 1, 1, 0, 1, 1, 0, 0],
    showLiveSum: false,
    explanation: "Trong các vị trí bit từ 0 đến 7, các số nguyên tố là <code>2, 3, 5, 7</code> (trọng số tương ứng là 4, 8, 32, 128). Bật các cột vị trí 7, 5, 3, 2 ta được <code>10101100₂</code> (= 172) — Lưu ý thứ tự cột trên bảng từ trái qua phải là vị trí 7, 6, 5, 4, 3, 2, 1, 0!"
  },

  // ============================================================================
  // CATEGORY 7: ĐIỀN BẢNG GIÁ TRỊ CÒN THIẾU (table) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "tbl-1",
    category: "table",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Điền tên các header chuẩn C++ còn thiếu trong bảng tổng hợp thư viện dưới đây (chỉ cần gõ tên hoặc kèm dấu <code>&lt; &gt;</code>):",
    headers: ["Header", "Nội dung chính", "Thành phần / hàm ví dụ"],
    rows: [
      ["<code>&lt;iostream&gt;</code>", "Nhập/xuất bằng luồng chuẩn", "<code>std::cin, std::cout, std::cerr</code>"],
      [{ inputId: "c1", placeholder: "Ví dụ: <cstdio>", answers: ["<cstdio>", "cstdio"] }, "Nhập/xuất theo phong cách C chuẩn", "<code>std::printf(), std::scanf()</code>"],
      [{ inputId: "c2", placeholder: "Ví dụ: <iomanip>", answers: ["<iomanip>", "iomanip"] }, "Điều khiển định dạng luồng", "<code>std::setprecision(), std::setw(), std::fixed</code>"]
    ],
    explanation: "Header chuẩn cho <code>std::printf()</code> là <code>&lt;cstdio&gt;</code>, còn header chứa các bộ điều khiển định dạng luồng như <code>std::setprecision()</code> là <code>&lt;iomanip&gt;</code>."
  },
  {
    id: "tbl-2",
    category: "table",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Điền tên các header chuẩn C++ còn thiếu tương ứng với chức năng đọc/ghi tệp và tạo số giả ngẫu nhiên:",
    headers: ["Header", "Nội dung chính", "Thành phần / hàm ví dụ"],
    rows: [
      [{ inputId: "c1", placeholder: "Nhập header...", answers: ["<fstream>", "fstream"] }, "Luồng đọc và ghi tệp", "<code>std::ifstream, std::ofstream, std::fstream</code>"],
      ["<code>&lt;algorithm&gt;</code>", "Chọn, giới hạn, tìm kiếm và sắp xếp", "<code>std::min(), std::max(), std::clamp()</code>"],
      [{ inputId: "c2", placeholder: "Nhập header...", answers: ["<random>", "random"] }, "Engine và distribution tạo số giả ngẫu nhiên", "<code>std::random_device, std::uniform_int_distribution</code>"]
    ],
    explanation: "Luồng đọc/ghi tệp nằm trong <code>&lt;fstream&gt;</code>, còn bộ sinh số giả ngẫu nhiên nằm trong <code>&lt;random&gt;</code>."
  },
  {
    id: "tbl-3",
    category: "table",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hoàn thành bảng đối chiếu phương thức xuất dữ liệu và đẩy bộ đệm (flush) giữa C++ và C:",
    headers: ["Ngôn ngữ", "Xuất dữ liệu", "Xuống dòng", "Đẩy bộ đệm rõ ràng"],
    rows: [
      ["C++ (C++23)", "<code>std::print()</code>", { inputId: "c1", placeholder: "Hàm xuống dòng...", answers: ["std::println()", "std::println", "println()", "println"] }, "<code>std::flush</code>"],
      ["C++ (Truyền thống)", "<code>std::cout</code>", "<code>'\\n'</code> hoặc <code>std::endl</code>", { inputId: "c2", placeholder: "Bộ thao tác...", answers: ["std::flush", "flush"] }],
      ["C", "<code>std::printf()</code>", "<code>'\\n'</code>", "<code>std::fflush(stdout)</code>"]
    ],
    explanation: "Trong C++23 hàm xuất kèm xuống dòng là <code>std::println()</code>, và bộ thao tác đẩy bộ đệm rõ ràng của C++ là <code>std::flush</code>."
  },
  {
    id: "tbl-4",
    category: "table",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hoàn thành các ô còn trống trong bảng phạm vi lưu trữ theo số bit (1 bit và 1 byte):",
    headers: ["Dung lượng", "Số bit", "Số giá trị biểu diễn", "Phạm vi không dấu (Unsigned)", "Phạm vi có dấu (Signed)"],
    rows: [
      ["1 bit", "1", { inputId: "c1", placeholder: "Số giá trị...", answers: ["2"] }, "<code>0</code> đến <code>1</code>", "<code>-1</code> đến <code>0</code>"],
      ["1 byte", "8", { inputId: "c2", placeholder: "Số giá trị...", answers: ["256"] }, "<code>0</code> đến <code>255</code>", "<code>-128</code> đến <code>127</code>"]
    ],
    explanation: "Với 1 bit có <code>2¹ = 2</code> giá trị; với 1 byte (8 bit) có <code>2⁸ = 256</code> giá trị."
  },
  {
    id: "tbl-5",
    category: "table",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hoàn thành bảng kích thước phổ biến (tính bằng byte, chỉ cần điền số) của các kiểu dữ liệu cơ bản:",
    headers: ["Nhóm", "Kiểu dữ liệu", "Kích thước phổ biến (byte)", "Phạm vi / Ý nghĩa"],
    rows: [
      ["Số nguyên có dấu", "<code>short</code>", { inputId: "c1", placeholder: "Số byte...", answers: ["2", "2 byte", "2 bytes"] }, "Thường từ -32.768 đến 32.767"],
      ["Số nguyên có dấu", "<code>int</code>", { inputId: "c2", placeholder: "Số byte...", answers: ["4", "4 byte", "4 bytes"] }, "Thường từ -2.147.483.648 đến 2.147.483.647"],
      ["Số nguyên có dấu", "<code>long long</code>", { inputId: "c3", placeholder: "Số byte...", answers: ["8", "8 byte", "8 bytes"] }, "Thường từ -9,22×10¹⁸ đến 9,22×10¹⁸"]
    ],
    explanation: "Trên máy tính hiện đại: <code>short</code> chiếm 2 byte, <code>int</code> chiếm 4 byte, và <code>long long</code> chiếm 8 byte."
  },
  {
    id: "tbl-6",
    category: "table",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hoàn thành bảng số nguyên kích thước cố định (Fixed-width integers) trong <code>&lt;cstdint&gt;</code>:",
    headers: ["Nhóm", "Kiểu dữ liệu", "Số bit", "Phạm vi"],
    rows: [
      ["Có dấu", "<code>std::int8_t</code>", "8", "-128 đến 127"],
      ["Không dấu", { inputId: "c1", placeholder: "std::...", answers: ["std::uint8_t", "uint8_t"] }, "8", "0 đến 255"],
      ["Không dấu", "<code>std::uint16_t</code>", { inputId: "c2", placeholder: "Số bit...", answers: ["16"] }, "0 đến 65.535"]
    ],
    explanation: "Kiểu không dấu 8 bit là <code>std::uint8_t</code> (0 đến 255), còn <code>std::uint16_t</code> có độ rộng cố định là <code>16</code> bit."
  },
  {
    id: "tbl-7",
    category: "table",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Điền tên kiểu dữ liệu đặc biệt còn thiếu trong bảng dưới đây:",
    headers: ["Tên gọi", "Kiểu dữ liệu", "Ý nghĩa"],
    rows: [
      ["Số nguyên có dấu rộng nhất", { inputId: "c1", placeholder: "std::...", answers: ["std::intmax_t", "intmax_t"] }, "Kiểu số nguyên có dấu rộng nhất được hỗ trợ"],
      ["Kích thước đối tượng", { inputId: "c2", placeholder: "std::...", answers: ["std::size_t", "size_t"] }, "Kích thước, số phần tử và kiểu kết quả của sizeof"],
      ["Hiệu hai con trỏ", "<code>std::ptrdiff_t</code>", "Khoảng cách giữa hai con trỏ"]
    ],
    explanation: "<code>std::intmax_t</code> là số nguyên có dấu rộng nhất, và <code>std::size_t</code> là kiểu lưu kích thước đối tượng / kết quả của <code>sizeof</code>."
  },
  {
    id: "tbl-8",
    category: "table",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hoàn thành bảng thành phần kiểu dữ liệu logic (Boolean) và kết quả in mặc định với <code>std::cout</code>:",
    headers: ["Thành phần", "Chức năng", "Ví dụ", "Kết quả in mặc định"],
    rows: [
      ["<code>true</code>", "Biểu thị đúng", "<code>std::cout &lt;&lt; true;</code>", { inputId: "c1", placeholder: "Kết quả in...", answers: ["1"] }],
      ["<code>false</code>", "Biểu thị sai", "<code>std::cout &lt;&lt; false;</code>", { inputId: "c2", placeholder: "Kết quả in...", answers: ["0"] }],
      ["<code>std::boolalpha</code>", "In bool dưới dạng chữ", "<code>std::cout &lt;&lt; std::boolalpha &lt;&lt; true;</code>", { inputId: "c3", placeholder: "Kết quả in...", answers: ["true"] }]
    ],
    explanation: "Mặc định <code>std::cout</code> in <code>true</code> là <code>1</code>, <code>false</code> là <code>0</code>. Khi có <code>std::boolalpha</code> thì <code>true</code> in ra chữ <code>true</code>."
  },
  {
    id: "tbl-9",
    category: "table",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hoàn thành bảng phân tích trọng số của số thập phân <code>1024</code>:",
    headers: ["Chỉ tiêu", "Chữ số 1", "Chữ số 0", "Chữ số 2", "Chữ số 4"],
    rows: [
      ["Trọng số (Place value)", "<code>10³</code>", "<code>10²</code>", "<code>10¹</code>", "<code>10⁰</code>"],
      ["Giá trị trọng số", { inputId: "c1", placeholder: "Giá trị...", answers: ["1000"] }, "<code>100</code>", "<code>10</code>", "<code>1</code>"],
      ["Giá trị đóng góp", "<code>1000</code>", "<code>0</code>", { inputId: "c2", placeholder: "Đóng góp...", answers: ["20"] }, "<code>4</code>"]
    ],
    explanation: "Ở hàng nghìn <code>10³ = 1000</code>; ở hàng chục <code>2 × 10¹ = 20</code>. Tổng: <code>1000 + 0 + 20 + 4 = 1024</code>."
  },
  {
    id: "tbl-10",
    category: "table",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hoàn thành bảng trọng số (Weight) tương ứng với vị trí bit trong 1 byte (8-bit):",
    headers: ["Vị trí bit", "7", "6", "5", "4", "3", "2", "1", "0"],
    rows: [
      ["Lũy thừa của 2", "<code>2⁷</code>", "<code>2⁶</code>", "<code>2⁵</code>", "<code>2⁴</code>", "<code>2³</code>", "<code>2²</code>", "<code>2¹</code>", "<code>2⁰</code>"],
      ["Trọng số (Weight)", { inputId: "c1", placeholder: "2^7", answers: ["128"] }, "64", { inputId: "c2", placeholder: "2^5", answers: ["32"] }, "16", "8", { inputId: "c3", placeholder: "2^2", answers: ["4"] }, "2", "1"]
    ],
    explanation: "Trọng số lũy thừa của 2 từ trái sang phải là: <code>2⁷ = 128</code>, <code>2⁶ = 64</code>, <code>2⁵ = 32</code>, <code>2⁴ = 16</code>, <code>2³ = 8</code>, <code>2² = 4</code>, <code>2¹ = 2</code>, <code>2⁰ = 1</code>."
  },
  {
    id: "tbl-11",
    category: "table",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hoàn thành bảng quy đổi giữa Thập phân, Nhị phân 4-bit và Thập lục phân (Hexadecimal):",
    headers: ["Thập phân (Decimal)", "Nhị phân 4 bit", "Thập lục phân (Hex)"],
    rows: [
      ["<code>10</code>", { inputId: "c1", placeholder: "4 bit...", answers: ["1010"] }, "<code>A</code>"],
      ["<code>12</code>", "<code>1100</code>", { inputId: "c2", placeholder: "Hex...", answers: ["C", "c"] }],
      ["<code>15</code>", { inputId: "c3", placeholder: "4 bit...", answers: ["1111"] }, "<code>F</code>"]
    ],
    explanation: "<code>10 = 1010₂ = A₁₆</code>; <code>12 = 1100₂ = C₁₆</code>; <code>15 = 1111₂ = F₁₆</code>."
  },
  {
    id: "tbl-12",
    category: "table",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hoàn thành bảng các bước chuyển số thập phân <code>44</code> sang hệ Hex:",
    headers: ["Bước", "Thao tác", "Kết quả"],
    rows: [
      ["1", "Đổi <code>44</code> sang nhị phân 8 bit", { inputId: "c1", placeholder: "8 bit...", answers: ["00101100"] }],
      ["2", "Chia thành hai nhóm 4 bit", "<code>0010 1100</code>"],
      ["3", "Đổi <code>0010</code> sang Hex", "<code>2</code>"],
      ["4", "Đổi <code>1100</code> sang Hex", { inputId: "c2", placeholder: "Chữ số Hex...", answers: ["C", "c"] }],
      ["5", "Ghép hai chữ số Hex (có tiền tố 0x)", { inputId: "c3", placeholder: "0x...", answers: ["0x2C", "0x2c"] }]
    ],
    explanation: "<code>44₁₀ = 00101100₂</code> → tách <code>0010</code> (2) và <code>1100</code> (C) → ghép thành <code>0x2C</code>."
  },
  {
    id: "tbl-13",
    category: "table",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hoàn thành bảng hậu tố literal và kiểu dữ liệu được trình biên dịch suy ra:",
    headers: ["Hậu tố / ký pháp", "Kiểu suy ra (Deduced type)", "Ví dụ"],
    rows: [
      ["<code>f</code>, <code>F</code>", { inputId: "c1", placeholder: "Kiểu...", answers: ["float"] }, "<code>0.15f</code>"],
      ["Không có hậu tố (số thực)", { inputId: "c2", placeholder: "Kiểu...", answers: ["double"] }, "<code>0.15</code>"],
      ["<code>ll</code>, <code>LL</code>", { inputId: "c3", placeholder: "Kiểu...", answers: ["long long", "long long int"] }, "<code>100LL</code>"]
    ],
    explanation: "Hậu tố <code>f</code> suy ra <code>float</code>; số thực không có hậu tố mặc định là <code>double</code>; hậu tố <code>ll</code> suy ra <code>long long</code>."
  },
  {
    id: "tbl-14",
    category: "table",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Cho <code>double number{ 12.3456 };</code>. Hoàn thành bảng kết quả xuất với các mẫu định dạng của <code>std::println</code>:",
    headers: ["Mẫu định dạng", "Ý nghĩa", "Kết quả mẫu"],
    rows: [
      ["<code>{:.2f}</code>", "Hai chữ số sau dấu thập phân", { inputId: "c1", placeholder: "Kết quả...", answers: ["12.35"] }],
      ["<code>{:.3f}</code>", "Ba chữ số sau dấu thập phân", { inputId: "c2", placeholder: "Kết quả...", answers: ["12.346"] }],
      ["<code>{:010.2f}</code>", "Độ rộng 10, đệm 0 bên trái", { inputId: "c3", placeholder: "Kết quả...", answers: ["0000012.35"] }]
    ],
    explanation: "Với <code>12.3456</code>: <code>{:.2f}</code> làm tròn thành <code>12.35</code>; <code>{:.3f}</code> làm tròn thành <code>12.346</code>; <code>{:010.2f}</code> đệm 5 số 0 ở đầu cho đủ 10 ký tự thành <code>0000012.35</code>."
  },
  {
    id: "tbl-15",
    category: "table",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Hoàn thành bảng xác định **số chữ số có nghĩa (significant figures)** cho các số sau:",
    headers: ["Số", "Số chữ số có nghĩa", "Giải thích"],
    rows: [
      ["<code>12.30</code>", { inputId: "c1", placeholder: "Nhập số...", answers: ["4"] }, "Số 0 cuối phần thập phân được tính"],
      ["<code>0.00123</code>", { inputId: "c2", placeholder: "Nhập số...", answers: ["3"] }, "Các số 0 đứng đầu không được tính"],
      ["<code>1.005</code>", { inputId: "c3", placeholder: "Nhập số...", answers: ["4"] }, "Các số 0 nằm giữa được tính"]
    ],
    explanation: "<code>12.30</code> có 4 chữ số có nghĩa; <code>0.00123</code> có 3 chữ số có nghĩa (1, 2, 3); <code>1.005</code> có 4 chữ số có nghĩa."
  },
  // --- 5 CÂU NÂNG CAO (advanced) ---
  {
    id: "tbl-16",
    category: "table",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Hoàn thành bảng kích thước <code>sizeof(std::string)</code> trên các trình biên dịch 64-bit theo chú thích trong bài thực hành:",
    headers: ["Trình biên dịch / Chế độ", "Kích thước sizeof(std::string) (chỉ điền số byte)"],
    rows: [
      ["MSVC x64 Debug", { inputId: "c1", placeholder: "Số byte...", answers: ["40", "40 bytes", "40 byte"] }],
      ["MSVC x64 Release / GCC", { inputId: "c2", placeholder: "Số byte...", answers: ["32", "32 bytes", "32 byte"] }],
      ["Clang (libc++)", { inputId: "c3", placeholder: "Số byte...", answers: ["24", "24 bytes", "24 byte"] }]
    ],
    explanation: "Theo ghi chú thực hành trong bài: MSVC x64 Debug là 40 bytes, MSVC x64 Release và GCC là 32 bytes, còn Clang (libc++) là 24 bytes."
  },
  {
    id: "tbl-17",
    category: "table",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Áp dụng công thức tính phạm vi theo số bit cho các độ rộng không có sẵn trong bảng (5 bit và 10 bit):",
    headers: ["Số bit (n)", "Số giá trị biểu diễn (2ⁿ)", "Phạm vi không dấu (0 .. 2ⁿ-1)", "Phạm vi có dấu (-2ⁿ⁻¹ .. 2ⁿ⁻¹-1)"],
    rows: [
      ["5 bit", { inputId: "c1", placeholder: "2^5 = ...", answers: ["32"] }, "0 đến 31", { inputId: "c2", placeholder: "Ví dụ: -16 đến 15", answers: ["-16 đến 15", "-16..15", "-16 - 15"] }],
      ["10 bit", "1024", { inputId: "c3", placeholder: "Ví dụ: 0 đến 1023", answers: ["0 đến 1023", "0..1023", "0 - 1023"] }, "-512 đến 511"]
    ],
    explanation: "Với <code>n = 5</code>: <code>2⁵ = 32</code> giá trị, có dấu từ <code>-2⁴ = -16</code> đến <code>2⁴ - 1 = 15</code>. Với <code>n = 10</code>: không dấu từ <code>0</code> đến <code>2¹⁰ - 1 = 1023</code>."
  },
  {
    id: "tbl-18",
    category: "table",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Hoàn thành bảng quy đổi cùng một giá trị trên cả 4 hệ cơ số (viết đúng tiền tố C++ cho Octal <code>0...</code>, Hex <code>0x...</code>, Binary 8-bit <code>0b...</code>):",
    headers: ["Thập phân (Dec)", "Bát phân (Octal)", "Thập lục phân (Hex)", "Nhị phân (8-bit Binary)"],
    rows: [
      ["<code>15</code>", "<code>017</code>", "<code>0x0F</code>", "<code>0b00001111</code>"],
      ["<code>36</code>", { inputId: "c1", placeholder: "0...", answers: ["044"] }, "<code>0x24</code>", "<code>0b00100100</code>"],
      [{ inputId: "c2", placeholder: "Số thập phân...", answers: ["67"] }, "<code>0103</code>", { inputId: "c3", placeholder: "0x...", answers: ["0x43"] }, "<code>0b01000011</code>"]
    ],
    explanation: "Dòng 2: <code>36 = 4 × 8 + 4 = 044</code>. Dòng 3: <code>0b01000011 = 64 + 2 + 1 = 67</code>; đổi sang Hex: <code>0100</code> (4) và <code>0011</code> (3) → <code>0x43</code>."
  },
  {
    id: "tbl-19",
    category: "table",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Cho biến <code>double number{ 12.345678 };</code>. Điền kết quả xuất ra màn hình của từng dòng lệnh <code>std::cout</code> theo đúng thứ tự trong ví dụ cuối bài:",
    headers: ["Câu lệnh xuất", "Kết quả in ra"],
    rows: [
      ["<code>std::cout &lt;&lt; std::setprecision(2) &lt;&lt; number;</code>", { inputId: "c1", placeholder: "Kết quả...", answers: ["12"] }],
      ["<code>std::cout &lt;&lt; std::setprecision(4) &lt;&lt; number;</code>", { inputId: "c2", placeholder: "Kết quả...", answers: ["12.35", "12.34"] }],
      ["<code>std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(2) &lt;&lt; number;</code>", { inputId: "c3", placeholder: "Kết quả...", answers: ["12.35"] }]
    ],
    explanation: "Dòng 1: 2 chữ số có nghĩa → <code>12</code>. Dòng 2: 4 chữ số có nghĩa → <code>12.35</code> (hoặc <code>12.34</code> theo output mẫu trong bài). Dòng 3: <code>fixed</code> + <code>setprecision(2)</code> lấy 2 chữ số sau dấu phẩy → <code>12.35</code>."
  },
  {
    id: "tbl-20",
    category: "table",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Hoàn thành bảng phân tích kiểu suy luận của <code>auto</code> và kích thước <code>sizeof</code> trên hệ thống 64-bit:",
    headers: ["Khai báo biến", "Kiểu dữ liệu suy ra", "Kích thước sizeof (số byte)"],
    rows: [
      ["<code>auto a{ 7u };</code>", { inputId: "c1", placeholder: "Kiểu...", answers: ["unsigned int", "unsigned"] }, "4"],
      ["<code>auto b{ 7.0f };</code>", "<code>float</code>", { inputId: "c2", placeholder: "Số byte...", answers: ["4"] }],
      ["<code>auto c{ 7 + 2.5 };</code>", { inputId: "c3", placeholder: "Kiểu...", answers: ["double"] }, "8"]
    ],
    explanation: "<code>7u</code> suy ra <code>unsigned int</code> (4 byte); <code>7.0f</code> suy ra <code>float</code> (4 byte); <code>7 + 2.5</code> kết hợp <code>int</code> và <code>double</code> nên suy ra kiểu lớn hơn là <code>double</code> (8 byte)."
  }
];
