// Phần 1:
// 1. single (Trắc nghiệm 4 lựa chọn - 20 câu)
// 2. multiple (Trắc nghiệm nhiều lựa chọn - 20 câu)
// 3. fill (Điền từ còn thiếu - 20 câu)
// 4. truefalse (Đúng / Sai - 20 câu)

window.QUIZ_PART_1 = [
  // ============================================================================
  // CATEGORY 1: TRẮC NGHIỆM 4 LỰA CHỌN (single) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "single-1",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong C++ chuẩn, hàm <code>std::printf()</code> và <code>std::scanf()</code> được khai báo trong header nào?",
    options: [
      "<code>&lt;printf&gt;</code>",
      "<code>&lt;cstdio&gt;</code>",
      "<code>&lt;iostream&gt;</code>",
      "<code>&lt;print&gt;</code>"
    ],
    answer: 1,
    explanation: "Theo bảng tổng hợp header thư viện chuẩn C++, <code>&lt;cstdio&gt;</code> là header chuẩn kế thừa từ C cung cấp <code>std::printf()</code>, <code>std::scanf()</code>, <code>std::fopen()</code> (không phải <code>&lt;printf&gt;</code>)."
  },
  {
    id: "single-2",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Header <code>&lt;print&gt;</code> hỗ trợ hàm <code>std::print()</code> và <code>std::println()</code> được giới thiệu từ phiên bản chuẩn C++ nào và yêu cầu GCC tối thiểu bao nhiêu trên MinGW 64-bit?",
    options: [
      "C++17, yêu cầu GCC 11 trở đi",
      "C++20, yêu cầu GCC 12 trở đi",
      "C++23, yêu cầu GCC 14 trở đi",
      "C++23, chạy sẵn hoàn chỉnh trên GCC 13"
    ],
    answer: 2,
    explanation: "Cơ sở in ấn <code>&lt;print&gt;</code> (<code>std::print</code>, <code>std::println</code>) ra mắt ở chuẩn C++23. Trình biên dịch MinGW 64-bit dùng GCC 13 chưa hỗ trợ sẵn mà cần phiên bản GCC 14 trở đi."
  },
  {
    id: "single-3",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong câu lệnh <code>std::printf(\"Hello World!%c\", 10);</code>, số <code>10</code> đóng vai trò gì?",
    options: [
      "In ra số 10 ở cuối chuỗi",
      "Lặp lại chuỗi 10 lần",
      "Mã ASCII của ký tự xuống dòng (Line Feed <code>'\\n'</code>) được in qua định dạng <code>%c</code>",
      "Khoảng đệm 10 dấu cách"
    ],
    answer: 2,
    explanation: "Khi dùng định dạng <code>%c</code> kèm giá trị <code>10</code>, <code>printf</code> sẽ in ký tự có mã ASCII là 10, tức là ký tự xuống dòng (newline)."
  },
  {
    id: "single-4",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Tại sao cần gọi <code>std::cin.ignore();</code> ngay sau <code>std::cin &gt;&gt; bien;</code> và trước <code>std::getline(std::cin, chuoi);</code>?",
    options: [
      "Để xoá toàn bộ dữ liệu của biến vừa nhập",
      "Để loại bỏ ký tự Enter (<code>'\\n'</code>) còn thừa trong bộ đệm nhập",
      "Để chuyển bộ đệm sang chế độ đọc số nguyên",
      "Để đẩy dữ liệu ra màn hình nhanh hơn"
    ],
    answer: 1,
    explanation: "<code>std::cin &gt;&gt;</code> dừng đọc trước ký tự xuống dòng <code>'\\n'</code> và để lại nó trong bộ đệm. Nếu không dùng <code>std::cin.ignore()</code>, hàm <code>std::getline()</code> kế tiếp sẽ gặp ngay <code>'\\n'</code> và kết thúc sớm."
  },
  {
    id: "single-5",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Với một kiểu dữ liệu sử dụng <code>n</code> bit, công thức tính phạm vi biểu diễn của số nguyên **có dấu (Signed)** là gì?",
    options: [
      "Từ <code>0</code> đến <code>2ⁿ - 1</code>",
      "Từ <code>-2ⁿ</code> đến <code>2ⁿ - 1</code>",
      "Từ <code>-2ⁿ⁻¹</code> đến <code>2ⁿ⁻¹ - 1</code>",
      "Từ <code>-2ⁿ⁻¹ + 1</code> đến <code>2ⁿ⁻¹</code>"
    ],
    answer: 2,
    explanation: "Với <code>n</code> bit có tất cả <code>2ⁿ</code> tổ hợp giá trị. Số nguyên có dấu chia nửa cho số âm và số không âm nên phạm vi là từ <code>-2ⁿ⁻¹</code> đến <code>2ⁿ⁻¹ - 1</code> (ví dụ 8 bit: -128 đến 127)."
  },
  {
    id: "single-6",
    category: "single",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Khi sử dụng khởi tạo dấu ngoặc nhọn <code>{}</code> với giá trị vượt ngoài phạm vi lưu trữ hoặc gây mất phần thập phân (ví dụ gán <code>double</code> vào <code>int</code>), trình biên dịch sẽ cảnh báo/báo lỗi gì?",
    options: [
      "Segmentation fault",
      "Narrowing conversion (ép kiểu hẹp)",
      "Stack overflow",
      "Null pointer exception"
    ],
    answer: 1,
    explanation: "Khởi tạo truyền thống bằng dấu <code>=</code> từ C tự động ép kiểu hẹp gây mất dữ liệu, còn khởi tạo bằng <code>{}</code> trong C++ sẽ phát hiện và báo lỗi <strong>narrowing conversion</strong>."
  },
  {
    id: "single-7",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Kiểu dữ liệu nào trong <code>&lt;cstdint&gt;</code> dùng để chọn kiểu số nguyên có dấu **nhỏ nhất** nhưng vẫn đảm bảo có **ít nhất 16 bit**?",
    options: [
      "<code>std::int16_t</code>",
      "<code>std::int_least16_t</code>",
      "<code>std::int_fast16_t</code>",
      "<code>std::intmax_t</code>"
    ],
    answer: 1,
    explanation: "Nhóm <code>least</code> (như <code>std::int_least16_t</code>) chọn kiểu nhỏ nhất có ít nhất số bit yêu cầu. Nhóm <code>fast</code> ưu tiên tốc độ xử lý, còn <code>std::int16_t</code> yêu cầu đúng chính xác 16 bit."
  },
  {
    id: "single-8",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Toán tử <code>sizeof</code> trả về kết quả mang kiểu dữ liệu chuẩn nào trong C++?",
    options: [
      "<code>int</code>",
      "<code>unsigned int</code>",
      "<code>std::size_t</code>",
      "<code>std::ptrdiff_t</code>"
    ],
    answer: 2,
    explanation: "<code>sizeof</code> là công cụ đo kích thước (tính bằng byte), và kiểu dữ liệu chuẩn dùng để lưu trữ kết quả đo của <code>sizeof</code> là <code>std::size_t</code>."
  },
  {
    id: "single-9",
    category: "single",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Kích thước phổ biến của kiểu <code>long double</code> trên **Windows với MSVC** và trên **Linux x86-64 với GCC** lần lượt là bao nhiêu?",
    options: [
      "Cùng là 8 byte trên cả hai hệ thống",
      "Windows MSVC: 8 byte; Linux x86-64 GCC: thường 16 byte",
      "Windows MSVC: 16 byte; Linux x86-64 GCC: 8 byte",
      "Cùng là 12 byte trên cả hai hệ thống"
    ],
    answer: 1,
    explanation: "Trên Windows với MSVC, <code>long double</code> phổ biến là 8 byte (cùng độ chính xác với <code>double</code>). Trên Linux x86-64 với GCC, <code>long double</code> thường chiếm 16 byte (lưu dấu phẩy động mở rộng 80 bit)."
  },
  {
    id: "single-10",
    category: "single",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Trong các khai báo <code>auto</code> sau đây, khai báo nào giúp biến được suy luận thành kiểu <code>std::string</code> thay vì con trỏ <code>const char*</code>?",
    options: [
      "<code>auto name{ \"Ada\" };</code>",
      "<code>auto name{ 'Ada' };</code>",
      "<code>auto name{ \"Ada\"s };</code> (kèm <code>using namespace std::string_literals;</code>)",
      "<code>auto name{ \"Ada\"f };</code>"
    ],
    answer: 2,
    explanation: "Chuỗi <code>\"Ada\"</code> mặc định suy luận thành <code>const char*</code> (C-string). Thêm hậu tố <code>s</code> (<code>\"Ada\"s</code>) cùng <code>using namespace std::string_literals;</code> (hoặc <code>std::literals</code>) sẽ suy luận thành <code>std::string</code>."
  },
  {
    id: "single-11",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong C++, các tiền tố (prefix) biểu diễn số ở hệ Bát phân (Octal), Thập lục phân (Hexadecimal) và Nhị phân (Binary) lần lượt là gì?",
    options: [
      "<code>0o</code>, <code>0x</code>, <code>0b</code>",
      "<code>0</code>, <code>0x</code>, <code>0b</code>",
      "<code>0</code>, <code>0h</code>, <code>0b</code>",
      "<code>08</code>, <code>016</code>, <code>02</code>"
    ],
    answer: 1,
    explanation: "Trong C++, số bắt đầu bằng <code>0</code> là hệ 8 (ví dụ <code>017</code>), bắt đầu bằng <code>0x</code> là hệ 16 (ví dụ <code>0x0F</code>), và bắt đầu bằng <code>0b</code> là hệ 2 (ví dụ <code>0b00001111</code>)."
  },
  {
    id: "single-12",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Một byte (8 bit) được biểu diễn trọn vẹn bằng bao nhiêu chữ số hệ Thập lục phân (Hexadecimal)?",
    options: [
      "1 chữ số Hex",
      "2 chữ số Hex",
      "4 chữ số Hex",
      "8 chữ số Hex"
    ],
    answer: 1,
    explanation: "Mỗi chữ số Hex biểu diễn chính xác 4 bit (từ <code>0000</code> đến <code>1111</code>). Do đó 1 byte (8 bit) được chia thành 2 nhóm 4 bit, tương ứng với đúng 2 chữ số Hex (ví dụ <code>11110000₂ = 0xF0</code>)."
  },
  {
    id: "single-13",
    category: "single",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Khi gọi <code>sizeof(custumer_name)</code> với <code>std::string custumer_name{\"Ada\"};</code>, giá trị trả về phản ánh điều gì?",
    options: [
      "Số lượng ký tự đang có trong chuỗi (là 3 byte)",
      "Số lượng ký tự cộng thêm ký tự kết thúc null (là 4 byte)",
      "Kích thước của đối tượng quản lý chuỗi <code>std::string</code> trong bộ nhớ (ví dụ 24, 32 hoặc 40 byte tuỳ trình biên dịch)",
      "Luôn luôn cố định là 8 byte trên mọi trình biên dịch"
    ],
    answer: 2,
    explanation: "<code>sizeof(std::string)</code> đo kích thước của bản thân đối tượng quản lý chuỗi (thường 24, 32 hoặc 40 byte tuỳ trình biên dịch), không phải độ dài chuỗi. Muốn đếm số ký tự phải dùng <code>.size()</code>."
  },
  {
    id: "single-14",
    category: "single",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Sự khác biệt giữa việc dùng <code>std::cout &lt;&lt; std::setprecision(n)</code> khi **không có** <code>std::fixed</code> và khi **có** <code>std::fixed</code> là gì?",
    options: [
      "Không có sự khác biệt, cả hai đều lấy n chữ số sau dấu phẩy",
      "Không có <code>fixed</code> thì lấy <code>n</code> chữ số có nghĩa; có <code>fixed</code> thì lấy <code>n</code> chữ số sau dấu thập phân",
      "Không có <code>fixed</code> thì lấy <code>n</code> chữ số sau dấu thập phân; có <code>fixed</code> thì lấy <code>n</code> chữ số có nghĩa",
      "<code>std::fixed</code> làm tròn xuống còn <code>setprecision</code> làm tròn lên"
    ],
    answer: 1,
    explanation: "Theo lưu ý trong bài: <code>setprecision(n)</code> khi không có <code>fixed</code> sẽ hiển thị tổng cộng <code>n</code> chữ số có nghĩa; khi kết hợp <code>std::fixed &lt;&lt; std::setprecision(n)</code> sẽ hiển thị <code>n</code> chữ số sau dấu thập phân."
  },
  {
    id: "single-15",
    category: "single",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Số thực <code>0.00123</code> và số thực <code>12.30</code> lần lượt có bao nhiêu chữ số có nghĩa (significant figures)?",
    options: [
      "5 chữ số và 4 chữ số",
      "3 chữ số và 3 chữ số",
      "3 chữ số và 4 chữ số",
      "6 chữ số và 4 chữ số"
    ],
    answer: 2,
    explanation: "Ở <code>0.00123</code>, các chữ số 0 đứng đầu không được tính nên có 3 chữ số có nghĩa (1, 2, 3). Ở <code>12.30</code>, chữ số 0 đứng cuối phần thập phân được tính nên có 4 chữ số có nghĩa."
  },
  // --- 5 CÂU NÂNG CAO (advanced) ---
  {
    id: "single-16",
    category: "single",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Giả sử khai báo <code>auto x{ 017 + 0x10 + 0b101 };</code>. Kiểu dữ liệu của <code>x</code> và giá trị thập phân của <code>x</code> là bao nhiêu?",
    options: [
      "Kiểu <code>int</code>, giá trị là <code>36</code>",
      "Kiểu <code>int</code>, giá trị là <code>38</code>",
      "Kiểu <code>double</code>, giá trị là <code>36.0</code>",
      "Báo lỗi biên dịch vì không thể cộng trực tiếp 3 hệ cơ số khác nhau"
    ],
    answer: 0,
    explanation: "Mọi literal số nguyên ở hệ 8, 16, 2 đều có bản chất là số nguyên (<code>int</code>). Ta có: <code>017</code> (bát phân) = 1×8 + 7 = 15; <code>0x10</code> (thập lục phân) = 1×16 + 0 = 16; <code>0b101</code> (nhị phân) = 4 + 1 = 5. Tổng: 15 + 16 + 5 = 36."
  },
  {
    id: "single-17",
    category: "single",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Trong biểu thức <code>auto res{ 10u - 15 };</code>, điều gì xảy ra với kiểu dữ liệu và giá trị của <code>res</code> trên hệ thống <code>unsigned int</code> 32-bit?",
    options: [
      "<code>res</code> có kiểu <code>int</code> và mang giá trị <code>-5</code>",
      "<code>res</code> có kiểu <code>unsigned int</code> và bị tràn số dưới (wrap-around) thành <code>2³² - 5 = 4294967291</code>",
      "Trình biên dịch báo lỗi narrowing conversion",
      "<code>res</code> tự động chuyển thành <code>0</code>"
    ],
    answer: 1,
    explanation: "Khi tính toán giữa <code>unsigned int</code> (<code>10u</code>) và <code>int</code> (<code>15</code>) có cùng kích thước, toán hạng <code>int</code> được chuyển sang <code>unsigned int</code>. Kết quả <code>-5</code> không biểu diễn được ở số không dấu nên lấy theo modulo <code>2³²</code>: <code>4294967296 - 5 = 4294967291</code>."
  },
  {
    id: "single-18",
    category: "single",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Cho <code>std::uint8_t flags{ 0b1010'0101 };</code>. Nếu ta đảo trạng thái bit ở vị trí 0 và vị trí 7 (từ 1 thành 0), giá trị thập lục phân mới của <code>flags</code> là bao nhiêu?",
    options: [
      "<code>0x24</code>",
      "<code>0x25</code>",
      "<code>0xA4</code>",
      "<code>0x84</code>"
    ],
    answer: 0,
    explanation: "Ban đầu <code>0b1010'0101</code> có bit 7 = 1 và bit 0 = 1. Khi đổi cả bit 7 và bit 0 thành 0, chuỗi bit trở thành <code>0b0010'0100</code>. Chia 2 nhóm 4 bit: <code>0010</code> = <code>2</code>, <code>0100</code> = <code>4</code> → kết quả là <code>0x24</code> (tức 36 ở hệ thập phân)."
  },
  {
    id: "single-19",
    category: "single",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Cho biến <code>double val{ 9.996 };</code>. Kết quả xuất ra của <code>std::println(\"{:08.2f}\", val);</code> là chuỗi nào sau đây?",
    options: [
      "<code>00009.99</code>",
      "<code>00010.00</code>",
      "<code>0010.00</code>",
      "<code>   10.00</code>"
    ],
    answer: 1,
    explanation: "Với <code>{:.2f}</code>, giá trị <code>9.996</code> làm tròn đến 2 chữ số thập phân thành <code>10.00</code> (chiếm 5 ký tự gồm <code>1</code>, <code>0</code>, <code>.</code>, <code>0</code>, <code>0</code>). Độ rộng tổng là <code>8</code> và đệm <code>0</code> bên trái nên thêm 3 chữ số <code>0</code> ở đầu → <code>00010.00</code>."
  },
  {
    id: "single-20",
    category: "single",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Một cảm biến trả về dữ liệu 12-bit có dấu (sử dụng quy tắc bù 2 chuẩn như trong công thức bài học). Phạm vi giá trị nguyên mà cảm biến này có thể biểu diễn là:",
    options: [
      "Từ <code>0</code> đến <code>4095</code>",
      "Từ <code>-2048</code> đến <code>2047</code>",
      "Từ <code>-4096</code> đến <code>4095</code>",
      "Từ <code>-1024</code> đến <code>1023</code>"
    ],
    answer: 1,
    explanation: "Áp dụng công thức phạm vi có dấu với <code>n = 12</code> bit: từ <code>-2¹²⁻¹ = -2¹¹ = -2048</code> đến <code>2¹¹ - 1 = 2047</code>."
  },

  // ============================================================================
  // CATEGORY 2: TRẮC NGHIỆM NHIỀU LỰA CHỌN (multiple) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "multiple-1",
    category: "multiple",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Những header nào sau đây liên quan trực tiếp đến thao tác **nhập/xuất hoặc điều khiển định dạng luồng xuất** trong C++? (Chọn tất cả đáp án đúng)",
    options: [
      "<code>&lt;iostream&gt;</code>",
      "<code>&lt;print&gt;</code>",
      "<code>&lt;iomanip&gt;</code>",
      "<code>&lt;numeric&gt;</code>"
    ],
    answer: [0, 1, 2],
    explanation: "<code>&lt;iostream&gt;</code> dùng cho luồng nhập/xuất chuẩn, <code>&lt;print&gt;</code> in có định dạng C++23, và <code>&lt;iomanip&gt;</code> điều khiển định dạng luồng. Còn <code>&lt;numeric&gt;</code> chứa các thuật toán số học như <code>std::gcd()</code>, <code>std::lcm()</code>."
  },
  {
    id: "multiple-2",
    category: "multiple",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Theo bảng tổng hợp thư viện, những hàm/thành phần nào sau đây thuộc về cặp header <code>&lt;cmath&gt;</code> và <code>&lt;numbers&gt;</code>?",
    options: [
      "<code>std::sqrt()</code>",
      "<code>std::hypot()</code>",
      "<code>std::numbers::pi</code>",
      "<code>std::clamp()</code>"
    ],
    answer: [0, 1, 2],
    explanation: "<code>std::sqrt()</code>, <code>std::pow()</code>, <code>std::hypot()</code> và <code>std::numbers::pi</code> thuộc <code>&lt;cmath&gt;</code>, <code>&lt;numbers&gt;</code>. Trong khi đó <code>std::clamp()</code> thuộc <code>&lt;algorithm&gt;</code>."
  },
  {
    id: "multiple-3",
    category: "multiple",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Những cách viết nào sau đây trong C++ vừa thực hiện **xuống dòng** vừa **đẩy bộ đệm (flush) xuất hình ngay lập tức**?",
    options: [
      "<code>std::cout &lt;&lt; \"Hello\" &lt;&lt; std::endl;</code>",
      "<code>std::cout &lt;&lt; \"Hello\\n\";</code>",
      "<code>std::println(\"Hello\");</code> kèm <code>fflush(stdout);</code>",
      "<code>std::cout &lt;&lt; \"Hello\\n\" &lt;&lt; std::flush;</code>"
    ],
    answer: [0, 2, 3],
    explanation: "<code>std::endl</code> vừa xuống dòng vừa flush bộ đệm; <code>\"\\n\"</code> kết hợp <code>std::flush</code> hoặc <code>std::println</code> kèm <code>fflush(stdout)</code> cũng đảm bảo vừa xuống dòng vừa đẩy bộ đệm. Riêng <code>\"Hello\\n\"</code> chỉ xuống dòng chứ không bắt buộc flush ngay."
  },
  {
    id: "multiple-4",
    category: "multiple",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Những phát biểu nào sau đây là ĐÚNG về **giá trị gán động (Runtime/Dynamic value)** và **giá trị gán cứng (Hardcoded value)**?",
    options: [
      "Giá trị nhập từ <code>std::cin &gt;&gt; a &gt;&gt; b;</code> rồi tính <code>int sum{a + b};</code> là giá trị gán động",
      "Giá trị gán động được xác định trong lúc chương trình đang chạy (runtime)",
      "Với <code>int b = 7, c = 3; int a = b + c;</code> thì <code>a</code> mang giá trị gán cứng gián tiếp",
      "Giá trị trả về của một hàm không bao giờ được dùng làm giá trị gán động"
    ],
    answer: [0, 1, 2],
    explanation: "Giá trị gán động được xác định lúc chương trình chạy (từ dữ liệu nhập, tính toán hoặc kết quả trả về của hàm). Còn khi <code>b</code> và <code>c</code> đều cố định trong mã nguồn thì <code>a = b + c</code> là giá trị gán cứng gián tiếp."
  },
  {
    id: "multiple-5",
    category: "multiple",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Xét định nghĩa hàm: <code>int add_number(int first, int second) { return first + second; }</code>. Những nhận định nào sau đây là ĐÚNG?",
    options: [
      "<code>int</code> ở đầu là kiểu dữ liệu trả về của hàm",
      "<code>add_number</code> là tên hàm",
      "<code>(int first, int second)</code> là danh sách tham số",
      "<code>{ return first + second; }</code> được gọi là tiền xử lý (preprocessor)"
    ],
    answer: [0, 1, 2],
    explanation: "Cấu trúc hàm gồm 4 phần: Kiểu trả về (<code>int</code>), Tên hàm (<code>add_number</code>), Danh sách tham số (<code>(int first, int second)</code>) và Phần thân hàm (<code>{ return first + second; }</code>)."
  },
  {
    id: "multiple-6",
    category: "multiple",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Những kiểu dữ liệu nào sau đây dùng để biểu diễn **ký tự Unicode** với kích thước cố định 1, 2 và 4 byte trong C++?",
    options: [
      "<code>char8_t</code> (1 byte - UTF-8)",
      "<code>char16_t</code> (2 byte - UTF-16)",
      "<code>char32_t</code> (4 byte - UTF-32)",
      "<code>wchar_t</code> (luôn cố định 1 byte trên mọi hệ thống)"
    ],
    answer: [0, 1, 2],
    explanation: "Theo bảng kiểu dữ liệu, bộ ba <code>char8_t</code>, <code>char16_t</code>, <code>char32_t</code> lần lượt chiếm 1, 2, 4 byte cho UTF-8, UTF-16, UTF-32. Còn <code>wchar_t</code> là ký tự rộng có kích thước 2 hoặc 4 byte phụ thuộc hệ thống."
  },
  {
    id: "multiple-7",
    category: "multiple",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Những phát biểu nào sau đây ĐÚNG khi nói về các nhóm kiểu số nguyên trong header <code>&lt;cstdint&gt;</code>?",
    options: [
      "<code>std::int32_t</code> là kiểu có dấu cố định đúng 32 bit",
      "<code>std::uint_least8_t</code> chọn kiểu không dấu nhỏ nhất có ít nhất 8 bit",
      "<code>std::int_fast16_t</code> ưu tiên tốc độ xử lý nên kích thước thực tế có thể lớn hơn 16 bit",
      "<code>std::int8_t</code> có phạm vi từ 0 đến 255"
    ],
    answer: [0, 1, 2],
    explanation: "<code>std::int8_t</code> là kiểu có dấu 8 bit nên phạm vi từ -128 đến 127 (0 đến 255 là của <code>std::uint8_t</code>). Ba phát biểu đầu hoàn toàn chính xác theo tài liệu."
  },
  {
    id: "multiple-8",
    category: "multiple",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Trong danh sách các kiểu số nguyên đặc biệt, những cặp ghép **Kiểu dữ liệu — Ý nghĩa** nào sau đây là ĐÚNG?",
    options: [
      "<code>std::intmax_t</code> — Kiểu số nguyên có dấu rộng nhất được hệ thống hỗ trợ",
      "<code>std::size_t</code> — Kiểu lưu kích thước đối tượng, số phần tử và kết quả của <code>sizeof</code>",
      "<code>std::ptrdiff_t</code> — Khoảng cách (hiệu) giữa hai con trỏ",
      "<code>std::uintptr_t</code> — Kiểu dấu phẩy động 128-bit"
    ],
    answer: [0, 1, 2],
    explanation: "<code>std::uintptr_t</code> là kiểu số nguyên không dấu có khả năng chứa giá trị địa chỉ con trỏ (nếu nền tảng hỗ trợ), không phải kiểu dấu phẩy động."
  },
  {
    id: "multiple-9",
    category: "multiple",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Header <code>&lt;stdfloat&gt;</code> (C++23) cung cấp những kiểu dữ liệu dấu phẩy động có độ rộng cố định nào sau đây?",
    options: [
      "<code>std::float16_t</code> và <code>std::bfloat16_t</code>",
      "<code>std::float32_t</code> và <code>std::float64_t</code>",
      "<code>std::float128_t</code>",
      "<code>std::ufloat32_t</code> (số thực không dấu)"
    ],
    answer: [0, 1, 2],
    explanation: "Trong <code>&lt;stdfloat&gt;</code> có 5 kiểu tuỳ chọn: <code>float16_t</code>, <code>float32_t</code>, <code>float64_t</code>, <code>float128_t</code> và <code>bfloat16_t</code>. C++ không có khái niệm số thực không dấu <code>ufloat</code>."
  },
  {
    id: "multiple-10",
    category: "multiple",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Khi làm việc với kiểu <code>bool</code> và luồng xuất <code>std::cout</code> hoặc <code>std::println</code>, những khẳng định nào sau đây là ĐÚNG?",
    options: [
      "Mặc định <code>std::cout &lt;&lt; true;</code> sẽ in ra số <code>1</code>",
      "Mặc định <code>std::println(\"{}\", false);</code> trong C++23 sẽ in ra chữ <code>false</code>",
      "Bộ thao tác <code>std::boolalpha</code> giúp <code>std::cout</code> in giá trị <code>bool</code> dưới dạng chữ <code>true</code>/<code>false</code>",
      "Bộ thao tác <code>std::noboolalpha</code> dùng để xóa biến <code>bool</code> khỏi bộ nhớ"
    ],
    answer: [0, 1, 2],
    explanation: "<code>std::cout</code> mặc định in <code>1</code>/<code>0</code>, dùng <code>std::boolalpha</code> để chuyển sang chữ và <code>std::noboolalpha</code> để quay lại dạng số. Còn <code>std::println(\"{}\", over_budget)</code> mặc định in dạng chữ <code>true</code>/<code>false</code>."
  },
  {
    id: "multiple-11",
    category: "multiple",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Khi sử dụng từ khóa <code>auto</code> để tự động suy luận kiểu, những cặp khai báo và kiểu suy luận nào sau đây là ĐÚNG?",
    options: [
      "<code>auto a{ 99.33 };</code> → suy luận thành <code>double</code>",
      "<code>auto b{ 7.0f };</code> → suy luận thành <code>float</code>",
      "<code>auto c{ 7ll };</code> → suy luận thành <code>long long int</code>",
      "<code>auto d{ 7 + 2.5 };</code> → suy luận thành <code>int</code>"
    ],
    answer: [0, 1, 2],
    explanation: "Trong biểu thức hỗn hợp <code>7 + 2.5</code>, vì <code>7</code> là <code>int</code> (4 byte) và <code>2.5</code> là <code>double</code> (8 byte), trình biên dịch chọn kiểu dữ liệu lớn hơn là <code>double</code> chứ không phải <code>int</code>."
  },
  {
    id: "multiple-12",
    category: "multiple",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong hệ nhị phân 8 bit, để biểu diễn số thập phân <code>67</code> bằng phương pháp trừ trọng số, những cột trọng số nào có bit bằng <code>1</code>?",
    options: [
      "Cột trọng số <code>64</code> (vị trí bit 6)",
      "Cột trọng số <code>32</code> (vị trí bit 5)",
      "Cột trọng số <code>2</code> (vị trí bit 1)",
      "Cột trọng số <code>1</code> (vị trí bit 0)"
    ],
    answer: [0, 2, 3],
    explanation: "Ta có <code>67 - 64 = 3</code> (bật bit 64); <code>3</code> không trừ được 32, 16, 8, 4; <code>3 - 2 = 1</code> (bật bit 2); <code>1 - 1 = 0</code> (bật bit 1). Vậy các cột có bit 1 là 64, 2 và 1 (<code>01000011₂</code>)."
  },
  {
    id: "multiple-13",
    category: "multiple",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Những biểu diễn nào sau đây có cùng giá trị thập phân bằng <code>15</code>?",
    options: [
      "<code>15</code> (Cơ số 10)",
      "<code>017</code> (Cơ số 8 - Octal)",
      "<code>0x0F</code> (Cơ số 16 - Hexadecimal)",
      "<code>0b00001111</code> (Cơ số 2 - Binary)"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Cả 4 cách viết trong ví dụ bài học: <code>15</code>, <code>017</code> (1×8 + 7 = 15), <code>0x0F</code> (15), và <code>0b00001111</code> (8+4+2+1 = 15) đều biểu diễn số 15."
  },
  {
    id: "multiple-14",
    category: "multiple",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Khi định dạng số với <code>std::println</code> cho biến <code>int number{ 42 };</code> và <code>double first{ 12.3456 };</code>, những mẫu định dạng nào sau đây cho kết quả ĐÚNG?",
    options: [
      "<code>std::println(\"{:#b}\", number)</code> in ra <code>0b101010</code>",
      "<code>std::println(\"{:#x}\", number)</code> in ra <code>0x2a</code>",
      "<code>std::println(\"{:+.2f}\", first)</code> in ra <code>+12.35</code>",
      "<code>std::println(\"{:.0f}\", first)</code> in ra <code>12.3</code>"
    ],
    answer: [0, 1, 2],
    explanation: "Mẫu <code>{:.0f}</code> lấy 0 chữ số sau dấu thập phân nên sẽ in ra <code>12</code> chứ không phải <code>12.3</code>. Ba đáp án đầu hoàn toàn chính xác."
  },
  {
    id: "multiple-15",
    category: "multiple",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Những con số nào sau đây có đúng **4 chữ số có nghĩa (4 significant figures)** theo bảng quy tắc trong bài?",
    options: [
      "<code>1234</code>",
      "<code>12.30</code>",
      "<code>1.005</code>",
      "<code>100.0</code>"
    ],
    answer: [0, 1, 2, 3],
    explanation: "Cả 4 số đều có 4 chữ số có nghĩa: <code>1234</code> (4 chữ số khác 0), <code>12.30</code> (số 0 cuối phần thập phân được tính), <code>1.005</code> (số 0 ở giữa được tính), và <code>100.0</code> (có dấu chấm thập phân nên các số 0 được tính)."
  },
  // --- 5 CÂU NÂNG CAO (advanced) ---
  {
    id: "multiple-16",
    category: "multiple",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Những khai báo biến nào sau đây sẽ gây ra lỗi **narrowing conversion** khi biên dịch theo chuẩn C++ hiện đại (dùng khởi tạo <code>{}</code>)?",
    options: [
      "<code>int x{ 3.14 };</code>",
      "<code>float rate{ 0.15 };</code> (khi trình biên dịch kiểm tra chặt việc ép từ literal <code>double</code> xuống <code>float</code> hoặc mất độ chính xác)",
      "<code>unsigned char c{ -2 };</code>",
      "<code>long long big{ 1'234'567 };</code>"
    ],
    answer: [0, 2],
    explanation: "Gán số thực <code>3.14</code> vào <code>int</code> bằng <code>{}</code> hoặc gán số âm <code>-2</code> trực tiếp trong <code>unsigned char c{ -2 };</code> đều vi phạm quy tắc narrowing conversion trong list-initialization <code>{}</code> (trong bài học phải gán <code>my_data = -2;</code> ở câu lệnh riêng thì mới không bị chặn bởi <code>{}</code>)."
  },
  {
    id: "multiple-17",
    category: "multiple",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Cho số nguyên 8 bit không dấu có dạng thập lục phân là <code>0x2C</code>. Những phát biểu nào sau đây về số này là ĐÚNG?",
    options: [
      "Dạng nhị phân 8 bit của nó là <code>00101100₂</code>",
      "Giá trị thập phân của nó là <code>44</code>",
      "Giá trị bát phân (Octal) của nó trong C++ viết là <code>054</code>",
      "Nó có tổng cộng 4 bit mang giá trị <code>1</code>"
    ],
    answer: [0, 1, 2],
    explanation: "<code>0x2C</code> = <code>0010 1100₂</code> = 32 + 8 + 4 = 44. Đổi sang hệ 8: 44 = 5×8 + 4 → <code>054</code>. Số lượng bit 1 trong <code>00101100₂</code> là 3 bit (ở vị trí 32, 8, 4), không phải 4 bit."
  },
  {
    id: "multiple-18",
    category: "multiple",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Khi làm việc với chuỗi ký tự trong C++, những nhận xét nào sau đây là ĐÚNG khi so sánh <code>std::cin &gt;&gt; str</code> và <code>std::getline(std::cin, str)</code>?",
    options: [
      "<code>std::cin &gt;&gt; str</code> dừng đọc ngay khi gặp khoảng trắng (Space, Tab, Enter)",
      "<code>std::getline(std::cin, str)</code> đọc được cả khoảng trắng (Space) và kết thúc khi gặp ký tự Enter (<code>'\\n'</code>)",
      "Nếu người dùng nhập <code>\"Ada Lovelace\"</code>, <code>std::cin &gt;&gt; str</code> chỉ lưu được <code>\"Ada\"</code> vào <code>str</code>",
      "<code>std::getline()</code> chỉ hoạt động với kiểu <code>char</code> đơn lẻ, không dùng được cho <code>std::string</code>"
    ],
    answer: [0, 1, 2],
    explanation: "Toán tử <code>&gt;&gt;</code> trên <code>std::cin</code> tách từ theo khoảng trắng nên chỉ lấy được <code>\"Ada\"</code>. Để lấy trọn dòng <code>\"Ada Lovelace\"</code> vào <code>std::string</code>, ta dùng <code>std::getline(std::cin, str)</code>."
  },
  {
    id: "multiple-19",
    category: "multiple",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Giả sử trên một nền tảng 64-bit (MSVC x64 Release), ta có các biến: <code>auto a{ 42 }; auto b{ 42.0 }; auto c{ \"42\" }; auto d{ \"42\"s };</code>. Những kết quả <code>sizeof</code> nào sau đây là hợp lý theo bài học?",
    options: [
      "<code>sizeof(a)</code> bằng <code>4</code> (kiểu <code>int</code>)",
      "<code>sizeof(b)</code> bằng <code>8</code> (kiểu <code>double</code>)",
      "<code>sizeof(c)</code> bằng <code>8</code> (con trỏ <code>const char*</code> trên hệ 64-bit)",
      "<code>sizeof(d)</code> bằng <code>2</code> vì chuỗi <code>\"42\"</code> có 2 ký tự"
    ],
    answer: [0, 1, 2],
    explanation: "<code>d</code> có kiểu <code>std::string</code> nên <code>sizeof(d)</code> là kích thước bộ quản lý chuỗi (32 byte trên MSVC x64 Release / GCC, hoặc 40 byte ở Debug), tuyệt đối không phải 2 byte."
  },
  {
    id: "multiple-20",
    category: "multiple",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Với biến <code>double x{ 12.345678 };</code>, những câu lệnh xuất nào sau đây sẽ in ra đúng chuỗi <code>12.35</code>?",
    options: [
      "<code>std::println(\"{:.2f}\", x);</code>",
      "<code>std::println(\"{:.4g}\", x);</code>",
      "<code>std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(2) &lt;&lt; x;</code>",
      "<code>std::cout &lt;&lt; std::defaultfloat &lt;&lt; std::setprecision(2) &lt;&lt; x;</code>"
    ],
    answer: [0, 1, 2],
    explanation: "<code>{:.2f}</code> và <code>fixed &lt;&lt; setprecision(2)</code> lấy 2 chữ số sau dấu phẩy → <code>12.35</code>. <code>{:.4g}</code> lấy 4 chữ số có nghĩa → <code>12.35</code>. Còn <code>defaultfloat &lt;&lt; setprecision(2)</code> chỉ lấy 2 chữ số có nghĩa nên in ra <code>12</code>."
  },

  // ============================================================================
  // CATEGORY 3: ĐIỀN TỪ CÒN THIẾU (fill) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "fill-1",
    category: "fill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Điền tên header chuẩn C++ dùng để làm việc với đường dẫn và hệ thống tệp (chứa <code>std::filesystem::path</code>, <code>exists()</code>): <code>#include &lt;______&gt;</code> (chỉ điền tên bên trong dấu ngoặc nhọn).",
    placeholder: "Ví dụ: iostream",
    acceptedAnswers: ["filesystem", "<filesystem>"],
    explanation: "Header <code>&lt;filesystem&gt;</code> cung cấp các công cụ thao tác đường dẫn và hệ thống tệp như <code>std::filesystem::path</code>, <code>current_path()</code>, <code>exists()</code>."
  },
  {
    id: "fill-2",
    category: "fill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Điền tên header chứa các thuật toán số học như tìm ước chung lớn nhất <code>std::gcd()</code> và bội chung nhỏ nhất <code>std::lcm()</code>: <code>#include &lt;______&gt;</code>",
    placeholder: "Nhập tên header...",
    acceptedAnswers: ["numeric", "<numeric>"],
    explanation: "Hai hàm <code>std::gcd()</code> và <code>std::lcm()</code> nằm trong header <code>&lt;numeric&gt;</code>."
  },
  {
    id: "fill-3",
    category: "fill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Điền tên lời gọi hàm giúp xóa 1 ký tự Enter (<code>'\\n'</code>) còn thừa trong bộ đệm nhập chuẩn trước khi gọi <code>std::getline()</code>: <code>std::cin.______();</code>",
    placeholder: "Nhập tên hàm...",
    acceptedAnswers: ["ignore", "ignore()"],
    explanation: "Ta dùng <code>std::cin.ignore();</code> để bỏ qua ký tự <code>'\\n'</code> còn sót lại trong bộ đệm sau lệnh <code>std::cin &gt;&gt;</code>."
  },
  {
    id: "fill-4",
    category: "fill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hoàn thành câu lệnh đọc toàn bộ một dòng văn bản (kể cả khoảng trắng) từ bàn phím vào biến <code>std::string Vanban;</code>: <code>std::______(std::cin, Vanban);</code>",
    placeholder: "Nhập tên hàm...",
    acceptedAnswers: ["getline", "std::getline"],
    explanation: "Hàm <code>std::getline(std::cin, Vanban);</code> giúp đọc cả dòng văn bản bao gồm dấu cách cho đến khi gặp phím Enter."
  },
  {
    id: "fill-5",
    category: "fill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Với kiểu dữ liệu <code>1 byte (8 bit)</code> không dấu (Unsigned), số lượng giá trị có thể biểu diễn là <code>256</code>, và phạm vi lưu trữ là từ <code>0</code> đến <code>______</code>.",
    placeholder: "Nhập một số nguyên...",
    acceptedAnswers: ["255"],
    explanation: "Theo công thức <code>0</code> đến <code>2ⁿ - 1</code>, với <code>n = 8</code> bit thì giá trị lớn nhất là <code>2⁸ - 1 = 255</code>."
  },
  {
    id: "fill-6",
    category: "fill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Với kiểu dữ liệu <code>1 byte (8 bit)</code> có dấu (Signed), phạm vi lưu trữ là từ <code>______</code> đến <code>127</code>.",
    placeholder: "Nhập số nguyên âm...",
    acceptedAnswers: ["-128"],
    explanation: "Theo công thức <code>-2ⁿ⁻¹</code> đến <code>2ⁿ⁻¹ - 1</code>, với <code>n = 8</code> bit thì giới hạn dưới là <code>-2⁷ = -128</code>."
  },
  {
    id: "fill-7",
    category: "fill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Trong C++, từ khóa dùng làm kiểu trả về cho hàm để biểu thị **không có giá trị trả về** là: <code>______</code>",
    placeholder: "Nhập từ khóa C++...",
    acceptedAnswers: ["void"],
    explanation: "Kiểu <code>void</code> biểu thị không có giá trị trả về."
  },
  {
    id: "fill-8",
    category: "fill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Để đo xem một kiểu dữ liệu hoặc đối tượng chiếm bao nhiêu byte trong bộ nhớ, ta dùng toán tử <code>______(int)</code>.",
    placeholder: "Nhập tên toán tử...",
    acceptedAnswers: ["sizeof"],
    explanation: "Toán tử <code>sizeof</code> trả về kích thước tính bằng byte của một kiểu dữ liệu hoặc đối tượng."
  },
  {
    id: "fill-9",
    category: "fill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Bộ thao tác luồng (stream manipulator) giúp <code>std::cout</code> in giá trị <code>bool</code> thành chữ <code>true</code> / <code>false</code> thay vì <code>1</code> / <code>0</code> là <code>std::______</code>.",
    placeholder: "Nhập tên manipulator...",
    acceptedAnswers: ["boolalpha", "std::boolalpha"],
    explanation: "<code>std::cout &lt;&lt; std::boolalpha &lt;&lt; true;</code> sẽ in ra chữ <code>true</code>."
  },
  {
    id: "fill-10",
    category: "fill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Để sử dụng hậu tố chuỗi <code>\"Ada\"s</code> giúp <code>auto</code> suy luận thành <code>std::string</code>, ta cần khai báo: <code>using namespace std::______;</code> (hoặc <code>std::literals</code>).",
    placeholder: "Nhập tên namespace...",
    acceptedAnswers: ["string_literals", "literals", "std::string_literals", "std::literals"],
    explanation: "Hậu tố <code>s</code> cho chuỗi thuộc không gian tên <code>std::string_literals</code> (nằm trong <code>std::literals</code>)."
  },
  {
    id: "fill-11",
    category: "fill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong hệ thập lục phân (Hexadecimal), chữ số <code>A</code> tương ứng với giá trị thập phân là <code>10</code>, còn chữ số <code>F</code> tương ứng với giá trị thập phân là <code>______</code>.",
    placeholder: "Nhập số thập phân...",
    acceptedAnswers: ["15"],
    explanation: "Các chữ số từ A đến F trong hệ 16 lần lượt có giá trị thập phân: A=10, B=11, C=12, D=13, E=14, F=15."
  },
  {
    id: "fill-12",
    category: "fill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong C++14 trở đi, để phân tách các nhóm chữ số trong một số lớn giúp dễ đọc hơn (ví dụ <code>1_234_567</code> trong ngôn ngữ khác), C++ sử dụng ký tự dấu gì ở vị trí gạch dưới? (Nhập đúng 1 ký tự đó)",
    placeholder: "Nhập 1 ký tự...",
    acceptedAnswers: ["'"],
    explanation: "C++ sử dụng dấu nháy đơn <code>'</code> để phân tách chữ số, ví dụ: <code>int price{ 1'234'567'890 };</code>."
  },
  {
    id: "fill-13",
    category: "fill",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Khi khai báo biến <code>float a{ 0.15______ };</code>, ta cần thêm hậu tố gì ngay sau số <code>0.15</code> để chỉ định đây là literal kiểu <code>float</code> thay vì <code>double</code>?",
    placeholder: "Nhập hậu tố...",
    acceptedAnswers: ["f", "F"],
    explanation: "Hậu tố <code>f</code> hoặc <code>F</code> (ví dụ <code>0.15f</code>) báo cho trình biên dịch biết số thực có kiểu <code>float</code>."
  },
  {
    id: "fill-14",
    category: "fill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Với <code>int number{ 42 };</code>, để in ra dạng nhị phân **có kèm tiền tố <code>0b</code>** (tức <code>0b101010</code>) bằng <code>std::println</code>, ta viết mẫu định dạng là <code>\"{______}\"</code>.",
    placeholder: "Ví dụ: :b",
    acceptedAnswers: [":#b", "{:#b}"],
    explanation: "Mẫu <code>{:b}</code> in nhị phân không có tiền tố (<code>101010</code>), còn thêm dấu <code>#</code> thành <code>{:#b}</code> sẽ tự động thêm tiền tố <code>0b</code> (<code>0b101010</code>)."
  },
  {
    id: "fill-15",
    category: "fill",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Để đếm số lượng ký tự thực tế đang lưu trong một biến <code>std::string text;</code> (thay vì dùng <code>sizeof</code>), ta gọi phương thức <code>text.______()</code>.",
    placeholder: "Nhập tên phương thức...",
    acceptedAnswers: ["size", "size()", "length", "length()"],
    explanation: "Phương thức <code>.size()</code> (hoặc <code>.length()</code>) trả về số ký tự đang được lưu trong <code>std::string</code>."
  },
  // --- 5 CÂU NÂNG CAO (advanced) ---
  {
    id: "fill-16",
    category: "fill",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Cho <code>unsigned char my_data{ 0 }; my_data = -2;</code>. Khi in <code>my_data</code> ra dưới dạng số nguyên, kết quả là bao nhiêu? (Biết <code>unsigned char</code> 8-bit tính theo modulo 256)",
    placeholder: "Nhập kết quả số nguyên...",
    acceptedAnswers: ["254"],
    explanation: "Vì <code>unsigned char</code> có phạm vi 256 giá trị (0..255), khi gán <code>-2</code>, giá trị sẽ quấn vòng theo modulo 256: <code>-2 mod 256 = 256 - 2 = 254</code>."
  },
  {
    id: "fill-17",
    category: "fill",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Nếu một biến <code>std::uint8_t points</code> bị gán giá trị vượt ngưỡng là <code>500</code> (tràn số 8-bit không dấu), giá trị thực tế lưu trong <code>points</code> theo phép tính <code>500 mod 256</code> là bao nhiêu?",
    placeholder: "Nhập kết quả số nguyên...",
    acceptedAnswers: ["244"],
    explanation: "Theo ví dụ trong phần thực hành suy luận kiểu: khi vượt giới hạn 0–255 của 8-bit không dấu với giá trị 500, kết quả là <code>500 mod 256 = 500 - 256 = 244</code>."
  },
  {
    id: "fill-18",
    category: "fill",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Để khai báo một hằng số nguyên không dấu rất dài (<code>unsigned long long</code>) cho biến <code>auto x{ 100______ };</code>, ta cần dùng hậu tố chữ thường hoặc chữ hoa nào?",
    placeholder: "Nhập hậu tố...",
    acceptedAnswers: ["ull", "ULL", "llu", "LLU"],
    explanation: "Hậu tố <code>ull</code> hoặc <code>ULL</code> biểu thị kiểu <code>unsigned long long</code>."
  },
  {
    id: "fill-19",
    category: "fill",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Cho biến <code>double d{ 12345.6789 };</code>. Nếu chạy lệnh <code>std::cout &lt;&lt; std::defaultfloat &lt;&lt; std::setprecision(6) &lt;&lt; d;</code> thì kết quả in ra màn hình là gì?",
    placeholder: "Nhập chuỗi kết quả...",
    acceptedAnswers: ["12345.7"],
    explanation: "Với <code>std::defaultfloat</code> và độ chính xác 6 chữ số có nghĩa (mặc định), số <code>12345.6789</code> được làm tròn lấy 6 chữ số có nghĩa thành <code>12345.7</code>."
  },
  {
    id: "fill-20",
    category: "fill",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Trong header <code>&lt;cstdint&gt;</code>, kiểu dữ liệu dùng để lưu **khoảng cách (hiệu) giữa hai con trỏ** có tên đầy đủ là <code>std::______</code>.",
    placeholder: "Nhập tên kiểu...",
    acceptedAnswers: ["ptrdiff_t", "std::ptrdiff_t"],
    explanation: "<code>std::ptrdiff_t</code> (pointer difference type) là kiểu số nguyên có dấu chuyên dùng để lưu hiệu của hai con trỏ."
  },

  // ============================================================================
  // CATEGORY 4: ĐÚNG / SAI (truefalse) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "tf-1",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong C++ chuẩn, để sử dụng hàm <code>std::printf()</code>, ta bắt buộc phải khai báo <code>#include &lt;printf&gt;</code> chứ không phải <code>#include &lt;cstdio&gt;</code>.",
    answer: false,
    explanation: "SAI. C++ chuẩn khai báo <code>std::printf()</code> trong header <code>&lt;cstdio&gt;</code>, không có header chuẩn nào tên là <code>&lt;printf&gt;</code>."
  },
  {
    id: "tf-2",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Hàm <code>std::println()</code> trong C++23 tự động thêm ký tự xuống dòng ở cuối nội dung in ra, trong khi <code>std::print()</code> thì không tự xuống dòng.",
    answer: true,
    explanation: "ĐÚNG. <code>std::println()</code> tự động xuống dòng, còn <code>std::print()</code> in trên cùng dòng tương tự như <code>std::cout</code> không kèm <code>'\\n'</code>."
  },
  {
    id: "tf-3",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Toán tử nhập <code>std::cin &gt;&gt; Vanban;</code> có thể đọc toàn bộ một câu có chứa nhiều dấu cách (Space) cho đến khi người dùng nhấn phím Enter.",
    answer: false,
    explanation: "SAI. <code>std::cin &gt;&gt; Vanban;</code> sẽ kết thúc ngay khi gặp dấu cách (Space). Để đọc cả dấu cách đến khi nhấn Enter, phải dùng <code>std::getline(std::cin, Vanban);</code>."
  },
  {
    id: "tf-4",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Một kiểu dữ liệu 1 bit có dấu (Signed 1-bit) theo công thức bù 2 có phạm vi biểu diễn từ <code>-1</code> đến <code>0</code>.",
    answer: true,
    explanation: "ĐÚNG. Theo bảng phạm vi lưu trữ và công thức <code>-2ⁿ⁻¹</code> đến <code>2ⁿ⁻¹ - 1</code> với <code>n = 1</code>: từ <code>-2⁰ = -1</code> đến <code>2⁰ - 1 = 0</code>."
  },
  {
    id: "tf-5",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Chuẩn C++ quy định cứng rằng kiểu <code>long</code> luôn luôn có kích thước đúng 8 byte trên mọi hệ điều hành và mọi trình biên dịch.",
    answer: false,
    explanation: "SAI. Kích thước của <code>long</code> là 4 hoặc 8 byte phụ thuộc vào hệ thống và mô hình dữ liệu (ví dụ trên Windows 64-bit <code>long</code> vẫn là 4 byte, còn trên Linux 64-bit thường là 8 byte)."
  },
  {
    id: "tf-6",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Các kiểu số nguyên kích thước cố định như <code>std::int16_t</code>, <code>std::int32_t</code> trong <code>&lt;cstdint&gt;</code> chỉ tồn tại nếu nền tảng phần cứng/hệ thống có kiểu số nguyên đúng số bit tương ứng.",
    answer: true,
    explanation: "ĐÚNG. Ghi chú trong bài nêu rõ: các kiểu kích thước cố định chỉ tồn tại khi nền tảng có kiểu số nguyên đúng số bit tương ứng."
  },
  {
    id: "tf-7",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Kiểu <code>float</code> (4 byte) thường có độ chính xác khoảng 15–16 chữ số thập phân có nghĩa, còn <code>double</code> (8 byte) chỉ có khoảng 6–7 chữ số thập phân có nghĩa.",
    answer: false,
    explanation: "SAI. Ngược lại: <code>float</code> (4 byte) có khoảng 6–7 chữ số thập phân có nghĩa, còn <code>double</code> (8 byte) có khoảng 15–16 chữ số thập phân có nghĩa."
  },
  {
    id: "tf-8",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Khi khai báo <code>auto store_id{ \"store-42\" };</code> (không có hậu tố <code>s</code>), trình biên dịch sẽ suy luận <code>store_id</code> thành kiểu con trỏ <code>const char*</code> chứ không phải <code>std::string</code>.",
    answer: true,
    explanation: "ĐÚNG. Chuỗi đặt trong ngoặc kép <code>\"...\"</code> mặc định là C-string nên <code>auto</code> suy luận thành <code>const char*</code>."
  },
  {
    id: "tf-9",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong hệ nhị phân, mỗi vị trí bit bên trái có trọng số gấp 2 lần vị trí ngay bên phải nó.",
    answer: true,
    explanation: "ĐÚNG. Trọng số các cột từ phải sang trái lần lượt là <code>2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128...</code>, mỗi vị trí gấp 2 lần vị trí bên phải."
  },
  {
    id: "tf-10",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Số nguyên viết là <code>017</code> trong mã nguồn C++ có giá trị bằng 17 ở hệ thập phân vì số 0 ở đầu chỉ là số 0 vô nghĩa.",
    answer: false,
    explanation: "SAI. Trong C++, số nguyên bắt đầu bằng chữ số <code>0</code> được hiểu là hệ bát phân (Octal). Do đó <code>017</code> = 1×8¹ + 7×8⁰ = 15 ở hệ thập phân."
  },
  {
    id: "tf-11",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong hệ thập lục phân (Hexadecimal), số <code>0x24</code> có giá trị thập phân bằng <code>36</code>.",
    answer: true,
    explanation: "ĐÚNG. <code>0x24 = (2 × 16¹) + (4 × 16⁰) = 32 + 4 = 36</code>."
  },
  {
    id: "tf-12",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Khi viết <code>long long yearly_total{ 1'284'950'000 };</code>, các dấu nháy đơn <code>'</code> chỉ giúp lập trình viên dễ đọc số lớn hơn chứ không làm thay đổi giá trị của số.",
    answer: true,
    explanation: "ĐÚNG. Dấu nháy đơn <code>'</code> là digit separator trong C++, hoàn toàn không ảnh hưởng đến giá trị số."
  },
  {
    id: "tf-13",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Ký pháp khoa học <code>double debt{ 3.4e13 };</code> có nghĩa là <code>3.4</code> nhân với <code>e</code> (cơ số logarit tự nhiên 2.718...) mũ 13.",
    answer: false,
    explanation: "SAI. Trong ký pháp khoa học của C++, chữ <code>e</code> hoặc <code>E</code> đại diện cho cơ số 10 (Exponent), nghĩa là <code>3.4 × 10¹³</code>."
  },
  {
    id: "tf-14",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Trong mẫu định dạng của <code>std::println</code>, <code>|{:10.2f}|</code> sẽ căn phải giá trị trong độ rộng 10 ký tự, còn <code>|{:&lt;10.2f}|</code> sẽ căn trái giá trị trong độ rộng 10 ký tự.",
    answer: true,
    explanation: "ĐÚNG. Mặc định với số, <code>{:10.2f}</code> căn phải, còn ký tự <code>&lt;</code> trong <code>{:&lt;10.2f}</code> chỉ định căn lề trái."
  },
  {
    id: "tf-15",
    category: "truefalse",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Số nguyên <code>100</code> (không có dấu chấm thập phân) luôn được xác định chắc chắn là có đúng 3 chữ số có nghĩa.",
    answer: false,
    explanation: "SAI. Theo bảng số chữ số có nghĩa trong bài, số <code>100</code> có số chữ số có nghĩa là 'Không rõ' vì các số 0 đứng cuối một số nguyên không có dấu chấm thập phân có thể là kết quả đã làm tròn. Muốn thể hiện rõ cần viết <code>100.0</code> (4 chữ số) hoặc <code>1.00 × 10²</code> (3 chữ số)."
  },
  // --- 5 CÂU NÂNG CAO (advanced) ---
  {
    id: "tf-16",
    category: "truefalse",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Trong C++, việc gán một số âm cho một biến đã khai báo kiểu không dấu (như <code>unsigned int a = -5;</code>) sẽ luôn bị trình biên dịch chặn lại và báo lỗi dừng biên dịch.",
    answer: false,
    explanation: "SAI. Như cảnh báo trong bài học: gán giá trị âm cho biến không dấu bằng phép gán <code>=</code> thường KHÔNG báo lỗi biên dịch mà âm thầm chuyển đổi modulo gây ra số dương cực lớn rất nguy hiểm!"
  },
  {
    id: "tf-17",
    category: "truefalse",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Hai kiểu dữ liệu <code>std::float16_t</code> và <code>std::bfloat16_t</code> trong <code>&lt;stdfloat&gt;</code> đều có cùng kích thước là 16 bit nhưng <code>std::bfloat16_t</code> có phạm vi giá trị lớn nhất gần bằng <code>std::float32_t</code> (khoảng 3,39 × 10³⁸).",
    answer: true,
    explanation: "ĐÚNG. Theo bảng <code>&lt;stdfloat&gt;</code>, cả <code>float16_t</code> và <code>bfloat16_t</code> đều 16 bit, nhưng <code>float16_t</code> có giá trị lớn nhất khoảng <code>6,50 × 10⁴</code> (độ chính xác 3–4 chữ số), còn <code>bfloat16_t</code> đánh đổi độ chính xác (2–3 chữ số) để lấy dải động rộng tới <code>3,39 × 10³⁸</code> tương đương <code>float32_t</code>."
  },
  {
    id: "tf-18",
    category: "truefalse",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Với <code>std::string s{\"Hello World from C++23!\"};</code> và <code>std::string t{\"A\"};</code> trên cùng một trình biên dịch, kết quả của <code>sizeof(s)</code> và <code>sizeof(t)</code> là bằng nhau.",
    answer: true,
    explanation: "ĐÚNG. Vì <code>sizeof(std::string)</code> đo kích thước cấu trúc quản lý chuỗi cố định trên stack (chứa con trỏ, size, capacity) chứ không đo nội dung chuỗi động, nên <code>sizeof(s) == sizeof(t)</code>."
  },
  {
    id: "tf-19",
    category: "truefalse",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Biểu thức khởi tạo <code>int val{ 0b0010'1100 };</code> và <code>int val{ 0x2C };</code> tạo ra hai biến có giá trị hoàn toàn giống nhau trong bộ nhớ.",
    answer: true,
    explanation: "ĐÚNG. <code>0b0010'1100</code> chia thành 2 nhóm 4 bit là <code>0010</code> (2) và <code>1100</code> (12 = C), tức là <code>0x2C</code> (bằng 44 ở hệ thập phân). Trong bộ nhớ máy tính cả hai lưu cùng một dãy bit."
  },
  {
    id: "tf-20",
    category: "truefalse",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Sau khi gọi <code>std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(2);</code>, định dạng <code>fixed</code> chỉ có tác dụng cho đúng một lệnh <code>std::cout</code> đó rồi tự động trở về <code>defaultfloat</code> ở câu lệnh <code>std::cout</code> tiếp theo.",
    answer: false,
    explanation: "SAI. Các bộ thao tác luồng như <code>std::fixed</code>, <code>std::scientific</code>, <code>std::setprecision(n)</code>, <code>std::boolalpha</code> có tính **lưu trạng thái (sticky)** trên <code>std::cout</code> cho đến khi ta chủ động đổi lại bằng <code>std::defaultfloat</code> hoặc <code>std::noboolalpha</code>."
  }
];
