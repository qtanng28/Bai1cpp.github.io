// Phần 3:
// 8. output (Dự đoán kết quả chương trình - 20 câu)
// 9. finderror (Tìm lỗi sai trong chương trình - 20 câu)
// 10. trace (Truy vết chương trình từng bước - 20 câu)

window.QUIZ_PART_3 = [
  // ============================================================================
  // CATEGORY 8: DỰ ĐOÁN KẾT QUẢ CHƯƠNG TRÌNH (output) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "out-1",
    category: "output",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Dự đoán kết quả in ra màn hình của đoạn chương trình sau:",
    code: `#include <print>
#include <string>

int main() {
    std::string name{"Ada"};
    int age{28};
    std::println("{} is {} years old.", name, age);
    return 0;
}`,
    inputMode: "text",
    placeholder: "Nhập chính xác dòng chữ kết quả...",
    acceptedAnswers: ["Ada is 28 years old."],
    explanation: "Hàm <code>std::println</code> thay thế lần lượt hai cặp ngoặc nhọn <code>{}</code> bằng giá trị của <code>name</code> (<code>\"Ada\"</code>) và <code>age</code> (<code>28</code>), tạo ra chuỗi <code>Ada is 28 years old.</code>."
  },
  {
    id: "out-2",
    category: "output",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Dự đoán kết quả in ra màn hình của chương trình gọi hàm <code>add_numbers</code> sau:",
    code: `#include <print>

int add_numbers(int first, int second) {
    int result = first + second;
    return result;
}

int main() {
    int sum = add_numbers(25, 7);
    std::println("Sum: {}", sum);
}`,
    inputMode: "text",
    placeholder: "Nhập kết quả in ra...",
    acceptedAnswers: ["Sum: 32"],
    explanation: "Hàm <code>add_numbers(25, 7)</code> tính <code>25 + 7 = 32</code> và trả về cho biến <code>sum</code>. Lệnh <code>std::println(\"Sum: {}\", sum);</code> in ra <code>Sum: 32</code>."
  },
  {
    id: "out-3",
    category: "output",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Dự đoán kết quả in ra của đoạn mã kiểm tra kiểu <code>bool</code> với <code>std::cout</code> mặc định:",
    code: `#include <iostream>

int main() {
    double amount_spent{ 93.33 };
    bool over_budget{ amount_spent > 100.0 };
    std::cout << over_budget;
}`,
    inputMode: "text",
    placeholder: "Nhập kết quả in ra...",
    acceptedAnswers: ["0"],
    explanation: "Vì <code>93.33 &gt; 100.0</code> là sai nên <code>over_budget</code> mang giá trị <code>false</code>. Khi xuất bằng <code>std::cout</code> mà chưa bật <code>std::boolalpha</code>, mặc định <code>false</code> được in thành số <code>0</code>."
  },
  {
    id: "out-4",
    category: "output",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Nếu thêm <code>std::boolalpha</code> rồi sau đó lại thêm <code>std::noboolalpha</code> như đoạn mã dưới đây, kết quả in ra là gì?",
    code: `#include <iostream>

int main() {
    bool flag{ true };
    std::cout << std::boolalpha << flag << " | " << std::noboolalpha << flag;
}`,
    inputMode: "text",
    placeholder: "Ví dụ: true | 1",
    acceptedAnswers: ["true | 1"],
    explanation: "Khi gặp <code>std::boolalpha</code>, <code>flag</code> in ra chữ <code>true</code>. Sau khi gặp <code>std::noboolalpha</code>, luồng trở lại định dạng số mặc định nên in ra <code>1</code>. Kết quả: <code>true | 1</code>."
  },
  {
    id: "out-5",
    category: "output",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Dự đoán kết quả in ra màn hình của chương trình sử dụng các hệ cơ số sau:",
    code: `#include <print>

int main() {
    int decimal{15};
    int octal{017};
    int hex{0x0F};
    std::println("{} - {} - {}", decimal, octal, hex);
}`,
    inputMode: "text",
    placeholder: "Ví dụ: 15 - 15 - 15",
    acceptedAnswers: ["15 - 15 - 15"],
    explanation: "Mặc định <code>{}</code> trong <code>std::println</code> in giá trị số nguyên ở hệ thập phân. Cả <code>15</code>, <code>017</code> (bát phân) và <code>0x0F</code> (thập lục phân) đều có giá trị thập phân là <code>15</code>."
  },
  {
    id: "out-6",
    category: "output",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Dự đoán kết quả in ra màn hình của câu lệnh định dạng nhị phân sau:",
    code: `#include <print>

int main() {
    int number{42};
    std::println("{:b} | {:#b}", number, number);
}`,
    inputMode: "text",
    placeholder: "Nhập chính xác chuỗi kết quả...",
    acceptedAnswers: ["101010 | 0b101010"],
    explanation: "Số <code>42</code> ở hệ nhị phân là <code>101010</code>. Định dạng <code>{:b}</code> in không có tiền tố (<code>101010</code>), còn <code>{:#b}</code> in kèm tiền tố <code>0b</code> (<code>0b101010</code>)."
  },
  {
    id: "out-7",
    category: "output",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Dự đoán kết quả in ra màn hình của câu lệnh định dạng thập lục phân (Hex) sau:",
    code: `#include <print>

int main() {
    int number{42};
    std::println("{:x} | {:#x}", number, number);
}`,
    inputMode: "text",
    placeholder: "Nhập chính xác chuỗi kết quả...",
    acceptedAnswers: ["2a | 0x2a"],
    explanation: "Số <code>42 = 2×16 + 10</code> nên ở hệ Hex chữ thường là <code>2a</code>. Mẫu <code>{:x}</code> in <code>2a</code>, còn <code>{:#x}</code> in kèm tiền tố <code>0x2a</code>."
  },
  {
    id: "out-8",
    category: "output",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Dự đoán kết quả in ra màn hình của câu lệnh định dạng dấu (<code>+</code>/<code>-</code>) sau:",
    code: `#include <print>

int main() {
    double first{12.3456};
    double second{7.5};
    std::println("{:+.2f} | {:+.2f}", first, -second);
}`,
    inputMode: "text",
    placeholder: "Nhập chính xác chuỗi kết quả...",
    acceptedAnswers: ["+12.35 | -7.50"],
    explanation: "Mẫu <code>{:+.2f}</code> luôn hiển thị dấu (<code>+</code> cho số dương, <code>-</code> cho số âm) và lấy 2 chữ số sau dấu thập phân: <code>+12.35 | -7.50</code>."
  },
  {
    id: "out-9",
    category: "output",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Dự đoán kết quả in ra của câu lệnh đệm số 0 bên trái sau:",
    code: `#include <print>

int main() {
    double first{12.3456};
    std::println("|{:010.2f}|", first);
}`,
    inputMode: "text",
    placeholder: "Ví dụ: |0000012.35|",
    acceptedAnswers: ["|0000012.35|"],
    explanation: "<code>12.3456</code> làm tròn 2 chữ số sau dấu phẩy là <code>12.35</code> (5 ký tự). Độ rộng 10 kèm đệm <code>0</code> sẽ thêm 5 số <code>0</code> ở đầu thành <code>|0000012.35|</code>."
  },
  {
    id: "out-10",
    category: "output",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Dự đoán kết quả in ra của câu lệnh định dạng ký pháp khoa học (scientific) trong <code>std::println</code>:",
    code: `#include <print>

int main() {
    double first{12.3456};
    double second{7.5};
    std::println("{:.2e} | {:.2e}", first, second);
}`,
    inputMode: "text",
    placeholder: "Nhập chuỗi kết quả...",
    acceptedAnswers: ["1.23e+01 | 7.50e+00"],
    explanation: "Với <code>{:.2e}</code>: <code>12.3456 = 1.23456 × 10¹</code> làm tròn 2 chữ số thập phân thành <code>1.23e+01</code>; <code>7.5 = 7.50 × 10⁰</code> thành <code>7.50e+00</code>."
  },
  {
    id: "out-11",
    category: "output",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Dự đoán kết quả in ra màn hình của đoạn mã ghép ký tự tiền tệ và chuỗi sau:",
    code: `#include <print>
#include <string>

int main() {
    char currency_symbol{ '$' };
    double amount_spent{ 93.33 };
    std::string custumer_name{ "Ada" };
    std::println("{}{} spent by {}", currency_symbol, amount_spent, custumer_name);
}`,
    inputMode: "text",
    placeholder: "Nhập chuỗi kết quả...",
    acceptedAnswers: ["$93.33 spent by Ada"],
    explanation: "Hai cặp <code>{}{}</code> đầu tiên đứng sát nhau nên ghép trực tiếp ký tự <code>$</code> và số <code>93.33</code> thành <code>$93.33</code>, theo sau là <code> spent by Ada</code>."
  },
  {
    id: "out-12",
    category: "output",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Dự đoán kết quả in ra của đoạn mã dùng <code>std::scientific</code> và <code>std::defaultfloat</code>:",
    code: `#include <iostream>

int main() {
    double number{12345.6789};
    std::cout << std::scientific << number << " | ";
    std::cout << std::defaultfloat << number;
}`,
    inputMode: "options",
    options: [
      "<code>1.234568e+04 | 12345.7</code>",
      "<code>12345.6789 | 12345.6789</code>",
      "<code>1.23e+04 | 12345</code>",
      "<code>1.234568e+04 | 1.234568e+04</code>"
    ],
    answer: 0,
    explanation: "Theo ví dụ trong bài: với độ chính xác mặc định là 6, <code>std::scientific</code> in 6 chữ số sau dấu phẩy ở dạng khoa học là <code>1.234568e+04</code>; khi chuyển về <code>std::defaultfloat</code>, nó in 6 chữ số có nghĩa là <code>12345.7</code>."
  },
  {
    id: "out-13",
    category: "output",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Dự đoán kết quả của hai dòng lệnh <code>std::cout</code> sử dụng <code>std::setprecision</code> dưới đây:",
    code: `#include <iostream>
#include <iomanip>

int main() {
    double number{ 12.345678 };
    std::cout << std::setprecision(2) << number << " | ";
    std::cout << std::fixed << std::setprecision(2) << number;
}`,
    inputMode: "text",
    placeholder: "Ví dụ: 12 | 12.35",
    acceptedAnswers: ["12 | 12.35"],
    explanation: "Lệnh đầu tiên không có <code>fixed</code> nên <code>setprecision(2)</code> lấy 2 chữ số có nghĩa → <code>12</code>. Lệnh thứ hai có <code>std::fixed</code> nên lấy 2 chữ số sau dấu thập phân → <code>12.35</code>."
  },
  {
    id: "out-14",
    category: "output",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trên hệ thống thông thường (64-bit phổ biến trong bài), đoạn mã đo kích thước dưới đây in ra kết quả gì?",
    code: `#include <print>

int main() {
    std::println("{} - {} - {}", sizeof(char), sizeof(int), sizeof(double));
}`,
    inputMode: "text",
    placeholder: "Ví dụ: 1 - 4 - 8",
    acceptedAnswers: ["1 - 4 - 8"],
    explanation: "Theo ví dụ <code>sizeof</code> trong bài học: <code>sizeof(char)</code> là <code>1</code>, <code>sizeof(int)</code> thường là <code>4</code>, và <code>sizeof(double)</code> là <code>8</code>."
  },
  {
    id: "out-15",
    category: "output",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Dự đoán kết quả khi người dùng nhập chuỗi <code>Ada Lovelace</code> rồi nhấn Enter cho chương trình dùng <code>std::cin &gt;&gt;</code> dưới đây:",
    code: `#include <iostream>
#include <string>

int main() {
    std::string vanban{};
    std::cin >> vanban; // Người dùng gõ: Ada Lovelace
    std::cout << vanban;
}`,
    inputMode: "text",
    placeholder: "Nhập kết quả in ra...",
    acceptedAnswers: ["Ada"],
    explanation: "Vì <code>std::cin &gt;&gt; vanban</code> dừng đọc ngay khi gặp ký tự khoảng trắng (Space), biến <code>vanban</code> chỉ nhận được từ đầu tiên là <code>Ada</code>."
  },
  // --- 5 CÂU NÂNG CAO (advanced) ---
  {
    id: "out-16",
    category: "output",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Dự đoán kết quả in ra khi người dùng nhập <code>20</code>, nhấn Enter, rồi nhập <code>Ada Lovelace</code> và nhấn Enter:",
    code: `#include <iostream>
#include <print>
#include <string>

int main() {
    int age{};
    std::string full_name{};
    std::cin >> age;
    std::cin.ignore();
    std::getline(std::cin, full_name);
    std::println("{} - {}", full_name, age + 010);
}`,
    inputMode: "text",
    placeholder: "Nhập chính xác kết quả...",
    acceptedAnswers: ["Ada Lovelace - 28"],
    explanation: "Nhờ có <code>std::cin.ignore()</code> bỏ ký tự <code>'\\n'</code> sau khi nhập <code>20</code>, <code>std::getline</code> đọc trọn vẹn <code>\"Ada Lovelace\"</code>. Lưu ý <code>010</code> là số bát phân (bằng <code>8</code> ở hệ thập phân), nên <code>20 + 010 = 28</code>!"
  },
  {
    id: "out-17",
    category: "output",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Dự đoán kết quả in ra của chương trình kết hợp tràn số <code>std::uint8_t</code> và định dạng Hex:",
    code: `#include <cstdint>
#include <print>

int main() {
    std::uint8_t data{ 250 };
    data = data + 10; // Tràn số 8-bit không dấu (modulo 256)
    std::println("{} | {:#x}", data, data);
}`,
    inputMode: "text",
    placeholder: "Ví dụ: 4 | 0x4",
    acceptedAnswers: ["4 | 0x4", "4 | 0x04"],
    explanation: "<code>250 + 10 = 260</code>. Vì <code>std::uint8_t</code> lưu theo modulo 256 nên <code>260 mod 256 = 4</code>. Khi in thập phân là <code>4</code>, và in với <code>{:#x}</code> là <code>0x4</code>."
  },
  {
    id: "out-18",
    category: "output",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Dự đoán kết quả in ra của chương trình so sánh <code>.size()</code> và <code>sizeof</code>:",
    code: `#include <print>
#include <string>
using namespace std::string_literals;

int main() {
    auto s{ "Hello"s };
    auto n{ 1'000 };
    std::println("{} - {}", s.size(), sizeof(n));
}`,
    inputMode: "text",
    placeholder: "Ví dụ: 5 - 4",
    acceptedAnswers: ["5 - 4"],
    explanation: "Biến <code>s</code> có kiểu <code>std::string</code> chứa 5 ký tự nên <code>s.size()</code> trả về <code>5</code>. Biến <code>n</code> được suy luận là <code>int</code> nên <code>sizeof(n)</code> trả về <code>4</code>."
  },
  {
    id: "out-19",
    category: "output",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Dự đoán kết quả in ra của chương trình kiểm tra tính lưu trạng thái (sticky) của bộ thao tác luồng <code>std::cout</code>:",
    code: `#include <iostream>
#include <iomanip>

int main() {
    double a{ 5.1 };
    double b{ 8.0 };
    std::cout << std::fixed << std::setprecision(2);
    std::cout << a << " ";
    std::cout << b;
}`,
    inputMode: "text",
    placeholder: "Nhập kết quả in ra...",
    acceptedAnswers: ["5.10 8.00"],
    explanation: "Cả <code>std::fixed</code> và <code>std::setprecision(2)</code> đều giữ nguyên hiệu lực cho mọi lệnh <code>std::cout</code> phía sau, nên <code>5.1</code> in thành <code>5.10</code> và <code>8.0</code> in thành <code>8.00</code>."
  },
  {
    id: "out-20",
    category: "output",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Dự đoán kết quả của chương trình kết hợp hàm, hệ cơ số và định dạng:",
    code: `#include <print>

int calc(int a, int b) {
    return a + b;
}

int main() {
    int x{ 0x24 };      // Hệ 16
    int y{ 0b00000110 }; // Hệ 2
    int res{ calc(x, y) };
    std::println("{} | {:#x}", res, res);
}`,
    inputMode: "text",
    placeholder: "Ví dụ: 42 | 0x2a",
    acceptedAnswers: ["42 | 0x2a"],
    explanation: "Ta có <code>x = 0x24 = 36</code> (như ví dụ trong bài) và <code>y = 0b00000110 = 4 + 2 = 6</code>. Hàm <code>calc(36, 6)</code> trả về <code>42</code>. Định dạng <code>{} | {:#x}</code> của 42 in ra <code>42 | 0x2a</code>."
  },

  // ============================================================================
  // CATEGORY 9: TÌM LỖI SAI (finderror) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "err-1",
    category: "finderror",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Đoạn chương trình dưới đây có 1 lỗi chỉ thị tiền xử lý (header) không chuẩn C++. Hãy chọn phương án chỉ đúng dòng bị lỗi và cách sửa:",
    code: `1: #include <printf>
2: 
3: int main() {
4:     std::printf("Hello World!%c", 10);
5:     return 0;
6: }`,
    options: [
      "Dòng 1 sai: Trong C++ chuẩn không có header <code>&lt;printf&gt;</code>, phải sửa thành <code>#include &lt;cstdio&gt;</code>",
      "Dòng 4 sai: Hàm <code>printf</code> không hỗ trợ định dạng <code>%c</code>",
      "Dòng 5 sai: Hàm <code>main()</code> không được phép <code>return 0;</code>",
      "Chương trình hoàn toàn đúng chuẩn C++"
    ],
    answer: 0,
    explanation: "Như ghi chú đầu bài học: C++ chuẩn khai báo <code>std::printf</code> trong header <code>&lt;cstdio&gt;</code>, không phải <code>&lt;printf&gt;</code>."
  },
  {
    id: "err-2",
    category: "finderror",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Một học viên biên dịch chương trình C++23 dưới đây bằng trình biên dịch **MinGW 64-bit đi kèm GCC 13** và gặp lỗi không tìm thấy <code>&lt;print&gt;</code>. Nguyên nhân là gì?",
    code: `1: #include <print>
2: 
3: int main() {
4:     std::println("Day la C++23");
5: }`,
    options: [
      "Hàm <code>std::println</code> phải viết hoa chữ P thành <code>std::Println</code>",
      "GCC 13 trên MinGW 64-bit chưa hỗ trợ cơ sở in ấn <code>&lt;print&gt;</code> của C++23; cần nâng cấp lên GCC 14 trở đi",
      "Thiếu lệnh <code>#include &lt;random&gt;</code> ở đầu chương trình",
      "Chuỗi trong <code>std::println</code> bắt buộc phải dùng dấu nháy đơn <code>'...'</code>"
    ],
    answer: 1,
    explanation: "Theo bài học: trình biên dịch MinGW 64-bit sử dụng GNU 13 chạy GCC 13 chưa hỗ trợ cơ sở in ấn <code>&lt;print&gt;</code>; để chạy chuẩn C++23 cần phiên bản GCC 14 trở đi."
  },
  {
    id: "err-3",
    category: "finderror",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Trong chương trình nhập tuổi rồi nhập họ tên dưới đây, biến <code>name</code> luôn bị rỗng (bỏ qua không cho nhập). Lỗi nằm ở đâu?",
    code: `1: #include <iostream>
2: #include <string>
3: 
4: int main() {
5:     int age{};
6:     std::string name{};
7:     std::cin >> age;
8:     std::getline(std::cin, name);
9: }`,
    options: [
      "Thiếu câu lệnh <code>std::cin.ignore();</code> giữa dòng 7 và dòng 8 để bỏ ký tự <code>'\\n'</code> còn lại trong bộ đệm",
      "Dòng 8 phải đổi thành <code>std::cin &gt;&gt; name;</code> mới đọc được khoảng trắng",
      "Biến <code>age</code> bắt buộc phải khai báo kiểu <code>double</code>",
      "Không được khai báo <code>int</code> và <code>std::string</code> trong cùng hàm <code>main</code>"
    ],
    answer: 0,
    explanation: "Sau <code>std::cin &gt;&gt; age;</code>, ký tự xuống dòng <code>'\\n'</code> vẫn nằm lại trong bộ đệm. Khi gọi ngay <code>std::getline(std::cin, name);</code>, nó đọc phải <code>'\\n'</code> và kết thúc ngay. Cần thêm <code>std::cin.ignore();</code>."
  },
  {
    id: "err-4",
    category: "finderror",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Trong ví dụ thực hành I/O gốc của bài học có một lỗi chính tả ở phần chú thích/gọi hàm dòng 3. Nếu ta thực sự viết <code>std::fflush(stout);</code> trong code thì lỗi gì xảy ra?",
    code: `1: #include <iostream>
2: #include <print>
3: #include <cstdio>
4: 
5: int main() {
6:     std::println("Hello, C++!");
7:     std::fflush(stout);
8: }`,
    options: [
      "Lỗi biên dịch ở dòng 7: viết sai tên luồng chuẩn từ <code>stdout</code> thành <code>stout</code> (undeclared identifier)",
      "Lỗi ở dòng 6: <code>std::println</code> không nhận chuỗi có dấu chấm than",
      "Lỗi ở dòng 3: <code>fflush</code> nằm trong <code>&lt;cmath&gt;</code>",
      "Không có lỗi nào, <code>stout</code> là từ khóa chuẩn của C++"
    ],
    answer: 0,
    explanation: "Luồng xuất chuẩn của C trong <code>&lt;cstdio&gt;</code> có tên chính xác là <code>stdout</code> (standard output), viết <code>stout</code> sẽ báo lỗi chưa khai báo định danh."
  },
  {
    id: "err-5",
    category: "finderror",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Đoạn mã dưới đây gây ra cảnh báo/lỗi **narrowing conversion** ở dòng nào và tại sao?",
    code: `1: int main() {
2:     int a{ 10 };
3:     int b{ 3.75 };
4:     return 0;
5: }`,
    options: [
      "Dòng 2: không được khởi tạo số nguyên bằng <code>{}</code>",
      "Dòng 3: khởi tạo biến <code>int b</code> bằng số thực <code>3.75</code> trong cặp ngoặc nhọn <code>{}</code> gây ép kiểu hẹp (narrowing conversion) làm mất phần thập phân",
      "Dòng 4: thiếu <code>std::endl</code>",
      "Không có dòng nào lỗi"
    ],
    answer: 1,
    explanation: "Khởi tạo bằng dấu ngoặc nhọn <code>{}</code> (list-initialization) ngăn chặn việc tự động ép kiểu hẹp (narrowing conversion) từ <code>double</code> (<code>3.75</code>) sang <code>int</code>."
  },
  {
    id: "err-6",
    category: "finderror",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Tìm lỗi biên dịch khi sử dụng hậu tố chuỗi <code>\"Ada\"s</code> trong đoạn chương trình sau:",
    code: `1: #include <print>
2: #include <string>
3: 
4: int main() {
5:     auto customer_name{ "Ada"s };
6:     std::println("{}", customer_name);
7: }`,
    options: [
      "Dòng 5 báo lỗi vì chưa khai báo <code>using namespace std::string_literals;</code> (hoặc <code>using namespace std::literals;</code>) trước khi dùng hậu tố <code>s</code>",
      "Dòng 5 báo lỗi vì <code>auto</code> không dùng được với chuỗi",
      "Dòng 2 sai vì <code>std::string</code> nằm trong <code>&lt;cstdint&gt;</code>",
      "Dòng 6 sai vì <code>std::println</code> không in được <code>std::string</code>"
    ],
    answer: 0,
    explanation: "Lưu ý trong bài nêu rõ: Hậu tố <code>s</code> yêu cầu phải có <code>using namespace std::string_literals;</code> hoặc <code>using namespace std::literals;</code>."
  },
  {
    id: "err-7",
    category: "finderror",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Lập trình viên muốn kiểm tra xem tên khách hàng <code>\"Ada\"</code> có bao nhiêu ký tự nên viết đoạn mã dưới đây, nhưng kết quả luôn in ra <code>32</code> (hoặc <code>40</code>) thay vì <code>3</code>. Lỗi logic nằm ở đâu?",
    code: `1: #include <print>
2: #include <string>
3: 
4: int main() {
5:     std::string name{ "Ada" };
6:     std::println("So ky tu: {}", sizeof(name));
7: }`,
    options: [
      "Ở dòng 6: <code>sizeof(name)</code> đo kích thước đối tượng quản lý <code>std::string</code> theo byte chứ không đếm số ký tự; phải sửa thành <code>name.size()</code>",
      "Ở dòng 5: phải khai báo là <code>char name{\"Ada\"};</code>",
      "Ở dòng 6: phải viết <code>sizeof(std::string)</code> mới ra 3",
      "Ở dòng 2: thiếu <code>#include &lt;iomanip&gt;</code>"
    ],
    answer: 0,
    explanation: "Theo bảng lưu ý về <code>sizeof</code>: <code>sizeof(std::string)</code> đo kích thước của đối tượng quản lý chuỗi (24/32/40 byte), không phải số ký tự đang lưu. Phải dùng <code>name.size()</code> để đếm ký tự."
  },
  {
    id: "err-8",
    category: "finderror",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Tìm lỗi cú pháp hệ cơ số trong đoạn chương trình sau:",
    code: `1: int main() {
2:     int a{ 017 };
3:     int b{ 018 };
4:     return 0;
5: }`,
    options: [
      "Dòng 2 lỗi vì số nguyên không được bắt đầu bằng số 0",
      "Dòng 3 lỗi vì số bắt đầu bằng <code>0</code> là hệ bát phân (Octal) chỉ cho phép các chữ số từ <code>0</code> đến <code>7</code>, chữ số <code>8</code> trong <code>018</code> là không hợp lệ",
      "Cả dòng 2 và dòng 3 đều hợp lệ",
      "Dòng 4 lỗi vì thiếu giá trị trả về"
    ],
    answer: 1,
    explanation: "Hệ bát phân (bắt đầu bằng <code>0</code>) chỉ sử dụng các chữ số <code>0–7</code>. Do đó <code>018</code> gây lỗi biên dịch: invalid digit '8' in octal constant."
  },
  {
    id: "err-9",
    category: "finderror",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Trong đoạn mã ví dụ <code>main(4).cpp</code> của bài học, có một lỗi gõ nhầm nhỏ ở chuỗi định dạng dòng 6 khiến kết quả in ra chữ <code>sizeof(float)L 4</code> thay vì <code>sizeof(float): 4</code>. Đó là gì?",
    code: `1: #include <print>
2: 
3: int main() {
4:     std::println("sizeof(float)L {}, sizeof(double): {}",
5:                  sizeof(float), sizeof(double));
6: }`,
    options: [
      "Gõ nhầm chữ <code>L</code> thay vì dấu hai chấm <code>:</code> ngay sau <code>sizeof(float)</code> trong chuỗi định dạng",
      "Hàm <code>sizeof(float)</code> trả về chữ <code>L</code>",
      "Không được truyền 2 lệnh <code>sizeof</code> vào cùng một <code>std::println</code>",
      "Thiếu hậu tố <code>f</code> trong <code>sizeof(float)</code>"
    ],
    answer: 0,
    explanation: "Trong <code>main(4).cpp</code>, chuỗi định dạng bị gõ nhầm <code>\"sizeof(float)L {}\"</code> (chữ L nằm cạnh phím dấu chấm phẩy/hai chấm trên bàn phím) thay vì <code>\"sizeof(float): {}\"</code>."
  },
  {
    id: "err-10",
    category: "finderror",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Đoạn mã dưới đây sử dụng <code>std::setprecision(2)</code> nhưng bị lỗi biên dịch không nhận diện được <code>setprecision</code>. Tại sao?",
    code: `1: #include <iostream>
2: 
3: int main() {
4:     double number{ 12.3456 };
5:     std::cout << std::fixed << std::setprecision(2) << number;
6: }`,
    options: [
      "Thiếu chỉ thị <code>#include &lt;iomanip&gt;</code> ở đầu chương trình (vì <code>std::setprecision</code> thuộc <code>&lt;iomanip&gt;</code>)",
      "<code>std::setprecision</code> chỉ dùng được bên trong <code>std::println</code>",
      "Dòng 4 phải khai báo kiểu <code>int</code>",
      "<code>std::fixed</code> phải đặt sau <code>number</code>"
    ],
    answer: 0,
    explanation: "Theo bảng tổng hợp header ở đầu bài: <code>std::setprecision()</code> và <code>std::setw()</code> được khai báo trong header <code>&lt;iomanip&gt;</code>."
  },
  {
    id: "err-11",
    category: "finderror",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Tìm lỗi vượt phạm vi lưu trữ trong khai báo biến kiểu cố định 8-bit dưới đây:",
    code: `1: #include <cstdint>
2: 
3: int main() {
4:     std::int8_t temp{ 200 };
5:     return 0;
6: }`,
    options: [
      "Dòng 4 lỗi narrowing conversion vì <code>std::int8_t</code> (8-bit có dấu) chỉ có phạm vi từ <code>-128</code> đến <code>127</code>, không chứa được số <code>200</code>",
      "Dòng 1 lỗi vì <code>std::int8_t</code> nằm trong <code>&lt;stdfloat&gt;</code>",
      "Dòng 4 lỗi vì số <code>200</code> là số âm",
      "Không có lỗi vì 1 byte luôn lưu được tới 255 cho cả kiểu có dấu"
    ],
    answer: 0,
    explanation: "<code>std::int8_t</code> là số nguyên 8-bit **có dấu**, phạm vi từ <code>-128</code> đến <code>127</code>. Muốn lưu <code>200</code> trong 1 byte phải dùng kiểu không dấu <code>std::uint8_t</code> (0 đến 255)."
  },
  {
    id: "err-12",
    category: "finderror",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Lập trình viên muốn thay đổi ký tự đầu tiên của chuỗi được khai báo bằng <code>auto</code> như dưới đây nhưng bị lỗi biên dịch. Tại sao?",
    code: `1: int main() {
2:     auto store_id{ "store-42" };
3:     store_id[0] = 'S';
4:     return 0;
5: }`,
    options: [
      "Dòng 2: <code>auto</code> với chuỗi <code>\"store-42\"</code> suy luận thành <code>const char*</code> (con trỏ tới ký tự hằng không thể thay đổi), nên dòng 3 gán <code>store_id[0] = 'S'</code> bị cấm",
      "Dòng 3: chỉ số mảng trong C++ bắt đầu từ 1 chứ không phải 0",
      "Dòng 2: dấu gạch ngang <code>-</code> không được xuất hiện trong chuỗi",
      "Dòng 3: chữ <code>'S'</code> phải viết trong ngoặc kép"
    ],
    answer: 0,
    explanation: "Bài học chỉ rõ: <code>auto store_id{ \"store-42\" };</code> tự suy luận thành <code>const char*</code> (con trỏ tới ký tự hằng — không thể thay đổi nội dung). Muốn chỉnh sửa chuỗi, hãy dùng <code>std::string</code> (thêm hậu tố <code>s</code>)."
  },
  {
    id: "err-13",
    category: "finderror",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Tìm lỗi trong định nghĩa hàm tính tổng dưới đây:",
    code: `1: void add_number(int first, int second) {
2:     return first + second;
3: }`,
    options: [
      "Kiểu trả về của hàm ở dòng 1 đang để là <code>void</code> (không có giá trị trả về) nhưng thân hàm dòng 2 lại <code>return</code> một giá trị số nguyên; phải sửa <code>void</code> thành <code>int</code>",
      "Tên hàm không được có dấu gạch dưới <code>_</code>",
      "Tham số <code>first</code> và <code>second</code> không được cùng kiểu <code>int</code>",
      "Toán tử <code>+</code> không dùng được trong câu lệnh <code>return</code>"
    ],
    answer: 0,
    explanation: "Kiểu <code>void</code> biểu thị hàm không trả về giá trị. Khi hàm trả về tổng hai số nguyên <code>first + second</code>, kiểu trả về ở đầu hàm phải là <code>int</code>."
  },
  {
    id: "err-14",
    category: "finderror",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Lập trình viên muốn dùng dấu phân tách hàng nghìn cho dễ đọc nhưng viết như dưới đây và gặp lỗi biên dịch. Lỗi ở đâu?",
    code: `1: int main() {
2:     long long yearly_total{ 1,284,950,000 };
3:     return 0;
4: }`,
    options: [
      "Dòng 2: Trong mã nguồn C++, không được dùng dấu phẩy <code>,</code> để phân tách chữ số (vì dấu phẩy được hiểu là ngăn cách nhiều đối số); phải dùng dấu nháy đơn <code>1'284'950'000</code>",
      "Dòng 2: Kiểu <code>long long</code> không lưu được số lớn hơn 1 tỷ",
      "Dòng 2: Phải dùng dấu chấm <code>1.284.950.000</code>",
      "Không có lỗi nào"
    ],
    answer: 0,
    explanation: "Trong C++, dấu phân tách chữ số hợp lệ là dấu nháy đơn <code>'</code> (ví dụ <code>1'284'950'000</code>), còn viết dấu phẩy <code>,</code> bên trong <code>{}</code> sẽ bị hiểu là truyền 4 giá trị khởi tạo riêng biệt gây lỗi biên dịch!"
  },
  {
    id: "err-15",
    category: "finderror",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Trong đoạn mã dưới đây, lập trình viên muốn in <code>12.3456</code> với đúng **2 chữ số sau dấu thập phân** (tức <code>12.35</code>) nhưng màn hình chỉ in ra <code>12</code>. Lỗi logic nằm ở đâu?",
    code: `1: #include <iostream>
2: #include <iomanip>
3: 
4: int main() {
5:     double number{ 12.3456 };
6:     std::cout << std::setprecision(2) << number;
7: }`,
    options: [
      "Ở dòng 6: thiếu <code>std::fixed</code> trước <code>std::setprecision(2)</code>; khi không có <code>std::fixed</code>, <code>setprecision(2)</code> chỉ lấy 2 chữ số có nghĩa (in ra <code>12</code>)",
      "Ở dòng 5: <code>number</code> phải khai báo kiểu <code>int</code>",
      "Ở dòng 6: phải truyền <code>std::setprecision(0)</code>",
      "Ở dòng 1: phải xoá <code>#include &lt;iostream&gt;</code>"
    ],
    answer: 0,
    explanation: "Quy tắc vàng trong bài: <code>setprecision(n)</code> không có <code>fixed</code> → <code>n</code> chữ số có nghĩa. Muốn lấy <code>n</code> chữ số sau dấu thập phân phải viết <code>std::cout &lt;&lt; std::fixed &lt;&lt; std::setprecision(2) &lt;&lt; number;</code>."
  },
  // --- 5 CÂU NÂNG CAO (advanced) ---
  {
    id: "err-16",
    category: "finderror",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Đoạn chương trình tính toán điểm thưởng dưới đây không báo lỗi biên dịch nhưng cho kết quả sai lệch nghiêm trọng (in ra số dương hơn 4 tỷ thay vì -50). Lỗi logic nằm ở đâu?",
    code: `1: #include <print>
2: 
3: int main() {
4:     auto loyalty_points{ 100u };
5:     loyalty_points = loyalty_points - 150;
6:     std::println("Points: {}", loyalty_points);
7: }`,
    options: [
      "Dòng 4-5: Hậu tố <code>u</code> làm <code>loyalty_points</code> có kiểu không dấu (<code>unsigned int</code>); khi trừ <code>100 - 150</code> ra số âm, biến không dấu bị tràn số dưới (wrap-around) thành số dương cực lớn",
      "Dòng 6: <code>std::println</code> không hỗ trợ in kiểu <code>unsigned int</code>",
      "Dòng 4: Không được dùng <code>auto</code> với số có chữ số 0",
      "Dòng 5: Phép trừ không hợp lệ trong C++"
    ],
    answer: 0,
    explanation: "Đúng như cảnh báo 'NGUY HIỂM' trong bài thực hành suy luận kiểu: biến <code>auto loyalty_points{ 100u };</code> là <code>unsigned int</code>, không thể lưu số âm. Khi kết quả âm, nó không báo lỗi mà quấn vòng theo modulo gây lỗi logic nghiêm trọng."
  },
  {
    id: "err-17",
    category: "finderror",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Lập trình viên muốn gán mã màu thập lục phân và mã nhị phân nhưng dòng 3 và dòng 4 bị lỗi biên dịch. Hãy chỉ ra nguyên nhân:",
    code: `1: int main() {
2:     int color{ 0x2C };
3:     int mask1{ 0x2G };
4:     int mask2{ 0b1020 };
5: }`,
    options: [
      "Dòng 3 dùng chữ <code>G</code> (ngoài phạm vi <code>0-9, A-F</code> của hệ Hex) và dòng 4 dùng chữ số <code>2</code> (ngoài phạm vi <code>0-1</code> của hệ nhị phân)",
      "Dòng 2 sai vì không có chữ <code>C</code> trong hệ Hex",
      "C++ không hỗ trợ tiền tố <code>0x</code> và <code>0b</code>",
      "Chỉ có dòng 4 sai, dòng 3 hoàn toàn đúng"
    ],
    answer: 0,
    explanation: "Hệ thập lục phân (<code>0x</code>) chỉ dùng 16 ký tự từ <code>0–9</code> và <code>A–F</code> (không có <code>G</code>). Hệ nhị phân (<code>0b</code>) chỉ dùng <code>0</code> và <code>1</code> (không có <code>2</code>)."
  },
  {
    id: "err-18",
    category: "finderror",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Lập trình viên viết câu lệnh <code>std::println</code> dưới đây nhưng trình biên dịch báo lỗi định dạng (format error). Tại sao?",
    code: `1: #include <print>
2: 
3: int main() {
4:     double price{ 12.3456 };
5:     std::println("{:#b}", price);
6: }`,
    options: [
      "Dòng 5: Mẫu định dạng nhị phân <code>{:#b}</code> (cũng như <code>{:x}</code>, <code>{:o}</code>, <code>{:d}</code>) chỉ áp dụng cho **số nguyên**, không dùng trực tiếp cho kiểu số thực <code>double</code>",
      "Dòng 4: <code>price</code> phải có hậu tố <code>L</code>",
      "Dòng 5: Phải viết <code>{:##b}</code> với 2 dấu thăng",
      "Dòng 1: Thiếu <code>#include &lt;fstream&gt;</code>"
    ],
    answer: 0,
    explanation: "Các định dạng hệ cơ số nguyên <code>{:d}</code>, <code>{:b}</code>, <code>{:o}</code>, <code>{:x}</code> chỉ dành cho các kiểu nguyên (integer/char/bool). Với kiểu số thực <code>double</code>, ta dùng <code>{:.2f}</code>, <code>{:.2e}</code>, <code>{:.4g}</code>..."
  },
  {
    id: "err-19",
    category: "finderror",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Xem đoạn chương trình dưới đây. Người lập trình kỳ vọng dòng 7 sẽ in ra <code>12.3456</code> (định dạng mặc định), nhưng nó vẫn in <code>1.23e+01</code>. Lỗi ở đâu?",
    code: `1: #include <iostream>
2: #include <iomanip>
3: 
4: int main() {
5:     double x{ 12.3456 };
6:     std::cout << std::scientific << std::setprecision(2) << x << "\\n";
7:     std::cout << std::setprecision(6) << x << "\\n";
8: }`,
    options: [
      "Ở dòng 7: Đã đổi <code>setprecision(6)</code> nhưng quên gọi <code>std::defaultfloat</code> để tắt chế độ <code>std::scientific</code> đã bật ở dòng 6",
      "Ở dòng 6: <code>std::scientific</code> làm thay đổi vĩnh viễn giá trị của biến <code>x</code> trong RAM",
      "Ở dòng 5: Không được dùng kiểu <code>double</code> với <code>std::scientific</code>",
      "Ở dòng 7: Phải dùng <code>std::noboolalpha</code> để tắt <code>scientific</code>"
    ],
    answer: 0,
    explanation: "Chế độ <code>std::scientific</code> có tính lưu trạng thái trên <code>std::cout</code>. Chỉ thay đổi <code>std::setprecision(6)</code> ở dòng 7 sẽ khiến nó in 6 chữ số sau dấu phẩy ở dạng khoa học (<code>1.234560e+01</code>). Muốn về mặc định phải truyền <code>std::defaultfloat</code>."
  },
  {
    id: "err-20",
    category: "finderror",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Đoạn mã dưới đây có một lỗi tiềm ẩn khi truyền tham số vào hàm <code>add_number</code>. Hãy xác định điều gì xảy ra:",
    code: `1: #include <print>
2: 
3: int add_number(int first, int second) {
4:     return first + second;
5: }
6: 
7: int main() {
8:     std::println("{}", add_number(2.9, 3.9));
9: }`,
    options: [
      "Ở dòng 8: Hai đối số <code>2.9</code> và <code>3.9</code> (kiểu <code>double</code>) bị ép kiểu ngầm định sang tham số <code>int</code> của hàm (cắt cụt phần thập phân thành <code>2</code> và <code>3</code>), nên hàm trả về <code>5</code> thay vì <code>6.8</code> hay <code>7</code>",
      "Hàm <code>add_number</code> tự động làm tròn <code>2.9</code> thành <code>3</code> và <code>3.9</code> thành <code>4</code> nên trả về <code>7</code>",
      "Dòng 8 tự động đổi kiểu trả về của <code>add_number</code> thành <code>double</code> và in ra <code>6.8</code>",
      "Chương trình bị treo lúc chạy"
    ],
    answer: 0,
    explanation: "Khi gọi <code>add_number(2.9, 3.9)</code> với tham số kiểu <code>int</code> (không dùng <code>{}</code>), C++ thực hiện ép kiểu hẹp ngầm định cắt bỏ phần thập phân: <code>first = 2</code>, <code>second = 3</code>, dẫn tới kết quả <code>2 + 3 = 5</code> (mất dữ liệu)."
  },

  // ============================================================================
  // CATEGORY 10: TRUY VẾT CHƯƠNG TRÌNH (trace) - 20 CÂU (15 Trong bài + 5 Nâng cao)
  // ============================================================================
  {
    id: "trc-1",
    category: "trace",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Truy vết giá trị của các biến <code>first_number</code>, <code>second_number</code> và <code>sum</code> sau từng bước thực thi:",
    code: `int first_number{ 13 };
int second_number{ 7 };
int sum{ first_number + second_number };`,
    headers: ["Bước thực thi", "first_number", "second_number", "sum"],
    rows: [
      ["Sau dòng 1", { inputId: "c1", placeholder: "Giá trị...", answers: ["13"] }, "—", "—"],
      ["Sau dòng 2", "13", { inputId: "c2", placeholder: "Giá trị...", answers: ["7"] }, "—"],
      ["Sau dòng 3", "13", "7", { inputId: "c3", placeholder: "Giá trị...", answers: ["20"] }]
    ],
    explanation: "Dòng 1 khởi tạo <code>first_number = 13</code>; dòng 2 khởi tạo <code>second_number = 7</code>; dòng 3 tính <code>sum = 13 + 7 = 20</code>."
  },
  {
    id: "trc-2",
    category: "trace",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Truy vết sự thay đổi của biến <code>sum</code> qua các lần gọi hàm <code>add_numbers</code> (từ ví dụ trong bài):",
    code: `int add_numbers(int first, int second) {
    return first + second;
}
int main() {
    int sum{ 13 + 7 };           // Bước 1
    sum = add_numbers(25, 7);    // Bước 2
    sum = add_numbers(3, 42);    // Bước 3
}`,
    headers: ["Thời điểm", "Giá trị của biến sum"],
    rows: [
      ["Sau Bước 1 (<code>int sum{ 13 + 7 };</code>)", { inputId: "c1", placeholder: "sum = ...", answers: ["20"] }],
      ["Sau Bước 2 (<code>sum = add_numbers(25, 7);</code>)", { inputId: "c2", placeholder: "sum = ...", answers: ["32"] }],
      ["Sau Bước 3 (<code>sum = add_numbers(3, 42);</code>)", { inputId: "c3", placeholder: "sum = ...", answers: ["45"] }]
    ],
    explanation: "Bước 1: <code>13 + 7 = 20</code>. Bước 2: <code>add_numbers(25, 7)</code> trả về <code>32</code>. Bước 3: <code>add_numbers(3, 42)</code> trả về <code>45</code>."
  },
  {
    id: "trc-3",
    category: "trace",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Truy vết quá trình đo kích thước bằng <code>sizeof</code> và lưu vào biến <code>bytes</code>:",
    code: `std::size_t b1{ sizeof(char) };
std::size_t b2{ sizeof(short) };
std::size_t b3{ sizeof(int) };`,
    headers: ["Câu lệnh", "Giá trị lưu vào biến (trên hệ thống chuẩn trong bài)"],
    rows: [
      ["<code>b1</code> sau dòng 1", { inputId: "c1", placeholder: "Số byte...", answers: ["1"] }],
      ["<code>b2</code> sau dòng 2", { inputId: "c2", placeholder: "Số byte...", answers: ["2"] }],
      ["<code>b3</code> sau dòng 3", { inputId: "c3", placeholder: "Số byte...", answers: ["4"] }]
    ],
    explanation: "<code>sizeof(char) = 1</code>, <code>sizeof(short) = 2</code>, và <code>sizeof(int) = 4</code>."
  },
  {
    id: "trc-4",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết từng bước thuật toán trừ trọng số để đổi số thập phân <code>67</code> sang nhị phân (theo bảng trong bài):",
    code: `// Đổi n = 67 sang nhị phân 8-bit
// Trọng số: 128, 64, 32, 16, 8, 4, 2, 1`,
    headers: ["Bước", "Phép trừ kiểm tra trọng số", "Số dư còn lại", "Giá trị Bit ghi nhận"],
    rows: [
      ["Xét cột 64", "<code>67 - 64</code>", { inputId: "c1", placeholder: "Số dư...", answers: ["3"] }, { inputId: "c2", placeholder: "Bit (0/1)...", answers: ["1"] }],
      ["Xét các cột 32, 16, 8, 4", "Không trừ được", "3", "0"],
      ["Xét cột 2", "<code>3 - 2</code>", { inputId: "c3", placeholder: "Số dư...", answers: ["1"] }, "1"],
      ["Xét cột 1", "<code>1 - 1</code>", "0", "1"]
    ],
    explanation: "Lấy <code>67 - 64 = 3</code> (ghi bit 1 ở cột 64); số dư 3 không trừ được cho 32, 16, 8, 4 (ghi bit 0); lấy <code>3 - 2 = 1</code> (ghi bit 1 ở cột 2); lấy <code>1 - 1 = 0</code> (ghi bit 1 ở cột 1)."
  },
  {
    id: "trc-5",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết các bước chuyển đổi số thập phân <code>36</code> sang hệ Thập lục phân (Hex):",
    code: `int n{ 36 }; // Chuyển sang Hex qua trung gian nhị phân 8-bit`,
    headers: ["Bước", "Mô tả thao tác", "Kết quả tại bước đó"],
    rows: [
      ["Bước 1", "Đổi <code>36</code> sang nhị phân 8-bit", { inputId: "c1", placeholder: "8 chữ số 0/1...", answers: ["00100100"] }],
      ["Bước 2", "Đổi nhóm 4-bit cao (<code>0010</code>) sang chữ số Hex", { inputId: "c2", placeholder: "Chữ số Hex...", answers: ["2"] }],
      ["Bước 3", "Đổi nhóm 4-bit thấp (<code>0100</code>) sang chữ số Hex", { inputId: "c3", placeholder: "Chữ số Hex...", answers: ["4"] }]
    ],
    explanation: "<code>36₁₀ = 00100100₂</code>. Nhóm cao <code>0010 = 2</code>, nhóm thấp <code>0100 = 4</code> → ghép lại thành <code>0x24</code>."
  },
  {
    id: "trc-6",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết giá trị thập phân của các biến khi khởi tạo bằng các hệ cơ số khác nhau trong C++:",
    code: `int a{ 15 };         // Dòng 1
int b{ 017 };        // Dòng 2
int c{ 0x24 };       // Dòng 3
int d{ 0b00101100 }; // Dòng 4`,
    headers: ["Biến", "Hệ cơ số viết trong code", "Giá trị thập phân thực tế lưu trong biến"],
    rows: [
      ["<code>a</code>", "Hệ 10 (Decimal)", "15"],
      ["<code>b</code>", "Hệ 8 (Octal <code>017</code>)", { inputId: "c1", placeholder: "Giá trị thập phân...", answers: ["15"] }],
      ["<code>c</code>", "Hệ 16 (Hex <code>0x24</code>)", { inputId: "c2", placeholder: "Giá trị thập phân...", answers: ["36"] }],
      ["<code>d</code>", "Hệ 2 (Binary <code>0b00101100</code>)", { inputId: "c3", placeholder: "Giá trị thập phân...", answers: ["44"] }]
    ],
    explanation: "<code>017₈ = 15</code>; <code>0x24 = 2×16 + 4 = 36</code>; <code>0b00101100 = 32 + 8 + 4 = 44</code>."
  },
  {
    id: "trc-7",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết kiểu dữ liệu được suy luận bởi <code>auto</code> cho từng dòng lệnh trong chương trình:",
    code: `auto v1{ 42 };       // Dòng 1
auto v2{ 99.33 };    // Dòng 2
auto v3{ 7.0f };     // Dòng 3
auto v4{ 350u };     // Dòng 4`,
    headers: ["Biến", "Literal khởi tạo", "Kiểu dữ liệu trình biên dịch suy ra"],
    rows: [
      ["<code>v1</code>", "<code>42</code>", { inputId: "c1", placeholder: "Kiểu...", answers: ["int"] }],
      ["<code>v2</code>", "<code>99.33</code>", { inputId: "c2", placeholder: "Kiểu...", answers: ["double"] }],
      ["<code>v3</code>", "<code>7.0f</code>", { inputId: "c3", placeholder: "Kiểu...", answers: ["float"] }],
      ["<code>v4</code>", "<code>350u</code>", "<code>unsigned int</code>"]
    ],
    explanation: "Số nguyên mặc định là <code>int</code> (<code>42</code>); số thực mặc định là <code>double</code> (<code>99.33</code>); hậu tố <code>f</code> là <code>float</code> (<code>7.0f</code>)."
  },
  {
    id: "trc-8",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết trạng thái của biến <code>over_budget</code> và chuỗi xuất ra màn hình qua từng dòng lệnh trong <code>main(4).cpp</code>:",
    code: `double amount_spent{ 93.33 };
bool over_budget{ amount_spent > 100.0 };
std::println("{}", over_budget);                        // Xuất 1
std::cout << over_budget << "\\n";                       // Xuất 2
std::cout << std::boolalpha << over_budget << "\\n";     // Xuất 3
std::cout << std::noboolalpha << over_budget << "\\n";   // Xuất 4`,
    headers: ["Lệnh xuất", "Kết quả hiển thị trên màn hình"],
    rows: [
      ["Xuất 1 (<code>std::println</code>)", { inputId: "c1", placeholder: "Kết quả...", answers: ["false"] }],
      ["Xuất 2 (<code>std::cout</code> mặc định)", { inputId: "c2", placeholder: "Kết quả...", answers: ["0"] }],
      ["Xuất 3 (<code>std::cout &lt;&lt; std::boolalpha</code>)", { inputId: "c3", placeholder: "Kết quả...", answers: ["false"] }],
      ["Xuất 4 (<code>std::cout &lt;&lt; std::noboolalpha</code>)", "<code>0</code>"]
    ],
    explanation: "Vì <code>over_budget</code> là sai: <code>std::println</code> in chữ <code>false</code>; <code>std::cout</code> mặc định in <code>0</code>; bật <code>std::boolalpha</code> in <code>false</code>; bật <code>std::noboolalpha</code> quay lại in <code>0</code>."
  },
  {
    id: "trc-9",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết kết quả xuất ra ở từng dòng trong chương trình cuối bài học (minh họa <code>setprecision</code>, <code>fixed</code>, <code>scientific</code>, <code>defaultfloat</code>):",
    code: `double number{ 12.345678 };
std::cout << std::setprecision(2) << number << "\\n";                   // Dòng 1
std::cout << std::fixed << std::setprecision(2) << number << "\\n";     // Dòng 2
std::cout << std::scientific << std::setprecision(2) << number << "\\n";// Dòng 3
std::cout << std::defaultfloat << std::setprecision(6) << number << "\\n";// Dòng 4`,
    headers: ["Dòng lệnh", "Chế độ định dạng đang bật", "Kết quả in ra màn hình"],
    rows: [
      ["Dòng 1", "Mặc định (2 chữ số có nghĩa)", { inputId: "c1", placeholder: "Kết quả dòng 1...", answers: ["12"] }],
      ["Dòng 2", "Fixed (2 chữ số sau dấu phẩy)", { inputId: "c2", placeholder: "Kết quả dòng 2...", answers: ["12.35"] }],
      ["Dòng 3", "Scientific (2 chữ số sau dấu phẩy)", { inputId: "c3", placeholder: "Kết quả dòng 3...", answers: ["1.23e+01"] }],
      ["Dòng 4", "Defaultfloat (6 chữ số có nghĩa)", "<code>12.3457</code>"]
    ],
    explanation: "Dòng 1 in <code>12</code>; Dòng 2 in <code>12.35</code>; Dòng 3 in <code>1.23e+01</code>; Dòng 4 in <code>12.3457</code>."
  },
  {
    id: "trc-10",
    category: "trace",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Truy vết các thành phần cấu tạo nên hàm <code>int add_number(int first, int second) { return first + second; }</code>:",
    code: `int add_number(int first, int second) { return first + second; }`,
    headers: ["Thành phần trong mã nguồn", "Vai trò trong định nghĩa hàm"],
    rows: [
      [{ inputId: "c1", placeholder: "Từ khóa đầu tiên...", answers: ["int"] }, "Kiểu trả về (Return type)"],
      [{ inputId: "c2", placeholder: "Định danh...", answers: ["add_number"] }, "Tên hàm (Function name)"],
      ["<code>(int first, int second)</code>", "Danh sách tham số (Parameter list)"],
      ["<code>{ return first + second; }</code>", "Phần thân hàm (Function body)"]
    ],
    explanation: "Kiểu trả về là <code>int</code> và tên hàm là <code>add_number</code>."
  },
  {
    id: "trc-11",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết chuỗi xuất ra của <code>std::println</code> với biến <code>double first{ 12.3456 };</code>:",
    code: `double first{ 12.3456 };
std::println("{}", first);       // Dòng 1
std::println("{:.2f}", first);   // Dòng 2
std::println("{:.0f}", first);   // Dòng 3`,
    headers: ["Dòng lệnh", "Mẫu định dạng", "Chuỗi kết quả"],
    rows: [
      ["Dòng 1", "<code>{}</code>", { inputId: "c1", placeholder: "Kết quả...", answers: ["12.3456"] }],
      ["Dòng 2", "<code>{:.2f}</code>", { inputId: "c2", placeholder: "Kết quả...", answers: ["12.35"] }],
      ["Dòng 3", "<code>{:.0f}</code>", { inputId: "c3", placeholder: "Kết quả...", answers: ["12"] }]
    ],
    explanation: "<code>{}</code> in mặc định <code>12.3456</code>; <code>{:.2f}</code> làm tròn 2 chữ số thập phân thành <code>12.35</code>; <code>{:.0f}</code> lấy 0 chữ số thập phân thành <code>12</code>."
  },
  {
    id: "trc-12",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết việc tính giá trị thập phân của số <code>0x24</code> theo trọng số từng vị trí:",
    code: `// Số Hex: 0x24 (Chữ số '2' ở vị trí 1, chữ số '4' ở vị trí 0)`,
    headers: ["Vị trí (Position)", "Chữ số Hex", "Trọng số (16ⁿ)", "Giá trị đóng góp (Chữ số × Trọng số)"],
    rows: [
      ["Vị trí 1", "<code>2</code>", { inputId: "c1", placeholder: "16^1 = ...", answers: ["16"] }, { inputId: "c2", placeholder: "2 x 16 = ...", answers: ["32"] }],
      ["Vị trí 0", "<code>4</code>", "<code>1</code>", "<code>4</code>"],
      ["Tổng cộng", "<code>0x24</code>", "—", { inputId: "c3", placeholder: "32 + 4 = ...", answers: ["36"] }]
    ],
    explanation: "Ở vị trí 1, trọng số là <code>16¹ = 16</code>, đóng góp <code>2 × 16 = 32</code>. Cộng với vị trí 0 (<code>4 × 1 = 4</code>) được tổng <code>36</code>."
  },
  {
    id: "trc-13",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết giá trị thực tế lưu trong biến 8-bit không dấu (<code>unsigned char</code> / <code>std::uint8_t</code>) khi xảy ra tràn số modulo 256:",
    code: `unsigned char data{ 0 };
data = 255;   // Bước 1
data = 500;   // Bước 2 (500 mod 256)
data = -1000; // Bước 3 (-1000 mod 256 theo ví dụ trong bài)`,
    headers: ["Bước thực thi", "Phép tính modulo 256", "Giá trị lưu trong biến data"],
    rows: [
      ["Sau Bước 1", "Nằm trong phạm vi 0..255", { inputId: "c1", placeholder: "Giá trị...", answers: ["255"] }],
      ["Sau Bước 2 (gán 500)", "<code>500 mod 256</code>", { inputId: "c2", placeholder: "Giá trị...", answers: ["244"] }],
      ["Sau Bước 3 (gán -1000)", "<code>-1000 mod 256</code>", { inputId: "c3", placeholder: "Giá trị...", answers: ["24"] }]
    ],
    explanation: "Bước 1: <code>255</code>. Bước 2: <code>500 - 256 = 244</code>. Bước 3: <code>-1000 + 4×256 = -1000 + 1024 = 24</code> (như chú thích trong bài)."
  },
  {
    id: "trc-14",
    category: "trace",
    source: "in-lesson",
    difficulty: "easy",
    prompt: "Truy vết giá trị thực của các biến sử dụng dấu phân tách chữ số <code>'</code> và ký pháp khoa học <code>e</code>:",
    code: `int price{ 1'234 };        // Dòng 1
double a{ 1.5e3 };         // Dòng 2
double b{ 1.5e-2 };        // Dòng 3`,
    headers: ["Biến", "Cách viết trong code", "Giá trị số thông thường"],
    rows: [
      ["<code>price</code>", "<code>1'234</code>", { inputId: "c1", placeholder: "Viết liền không dấu...", answers: ["1234"] }],
      ["<code>a</code>", "<code>1.5e3</code> (<code>1.5 × 10³</code>)", { inputId: "c2", placeholder: "Giá trị...", answers: ["1500", "1500.0"] }],
      ["<code>b</code>", "<code>1.5e-2</code> (<code>1.5 × 10⁻²</code>)", { inputId: "c3", placeholder: "Giá trị...", answers: ["0.015"] }]
    ],
    explanation: "<code>1'234 = 1234</code>; <code>1.5e3 = 1.5 × 1000 = 1500</code>; <code>1.5e-2 = 1.5 / 100 = 0.015</code>."
  },
  {
    id: "trc-15",
    category: "trace",
    source: "in-lesson",
    difficulty: "medium",
    prompt: "Truy vết bộ đệm nhập chuẩn (<code>stdin</code>) khi người dùng gõ <code>42</code> rồi nhấn <code>Enter</code> và sau đó gõ <code>Hello C++</code> rồi nhấn <code>Enter</code>:",
    code: `int n{};
std::string s{};
std::cin >> n;               // Bước 1
std::cin.ignore();           // Bước 2
std::getline(std::cin, s);   // Bước 3`,
    headers: ["Sau bước", "Giá trị biến n", "Ký tự đầu tiên còn lại trong bộ đệm", "Giá trị biến s"],
    rows: [
      ["Sau Bước 1 (<code>std::cin &gt;&gt; n;</code>)", { inputId: "c1", placeholder: "n = ...", answers: ["42"] }, "<code>'\\n'</code> (Enter)", "<code>\"\"</code> (rỗng)"],
      ["Sau Bước 2 (<code>std::cin.ignore();</code>)", "42", { inputId: "c2", placeholder: "Ký tự kế tiếp...", answers: ["H", "'H'", "Hello C++"] }, "<code>\"\"</code> (rỗng)"],
      ["Sau Bước 3 (<code>std::getline</code>)", "42", "Rỗng", { inputId: "c3", placeholder: "Nội dung s...", answers: ["Hello C++", "\"Hello C++\""] }]
    ],
    explanation: "Bước 1 đọc <code>42</code> vào <code>n</code>, để lại <code>'\\n'</code>. Bước 2 bỏ <code>'\\n'</code> nên đầu bộ đệm là dòng <code>Hello C++</code> (bắt đầu bằng ký tự <code>H</code>). Bước 3 đọc trọn <code>Hello C++</code> vào <code>s</code>."
  },
  // --- 5 CÂU NÂNG CAO (advanced) ---
  {
    id: "trc-16",
    category: "trace",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Truy vết chương trình thực hiện nhiều phép tính qua hàm và các hệ cơ số:",
    code: `int add_number(int first, int second) {
    return first + second;
}
int main() {
    int a{ 0x10 };               // Bước 1
    int b{ 010 };                // Bước 2
    int c{ add_number(a, b) };   // Bước 3
    int d{ add_number(c, 0b100) };// Bước 4
}`,
    headers: ["Bước thực thi", "Biến được tạo", "Giá trị thập phân của biến đó"],
    rows: [
      ["Bước 1 (<code>int a{ 0x10 };</code>)", "<code>a</code>", { inputId: "c1", placeholder: "a = ...", answers: ["16"] }],
      ["Bước 2 (<code>int b{ 010 };</code>)", "<code>b</code>", { inputId: "c2", placeholder: "b = ...", answers: ["8"] }],
      ["Bước 3 (<code>c = add_number(a, b)</code>)", "<code>c</code>", { inputId: "c3", placeholder: "c = ...", answers: ["24"] }],
      ["Bước 4 (<code>d = add_number(c, 0b100)</code>)", "<code>d</code>", { inputId: "c4", placeholder: "d = ...", answers: ["28"] }]
    ],
    explanation: "<code>a = 0x10 = 16</code>; <code>b = 010₈ = 8</code>; <code>c = 16 + 8 = 24</code>; <code>0b100 = 4</code> nên <code>d = 24 + 4 = 28</code>."
  },
  {
    id: "trc-17",
    category: "trace",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Truy vết sự thay đổi trạng thái bit và giá trị thập lục phân của biến <code>std::uint8_t reg</code>:",
    code: `std::uint8_t reg{ 0b00100100 }; // Bước 1
reg = reg + 8;                  // Bước 2
reg = reg + 0x10;               // Bước 3`,
    headers: ["Thời điểm", "Dạng nhị phân 8-bit", "Giá trị thập phân", "Dạng Hex (có 0x)"],
    rows: [
      ["Sau Bước 1", "<code>00100100</code>", { inputId: "c1", placeholder: "Thập phân...", answers: ["36"] }, "<code>0x24</code>"],
      ["Sau Bước 2 (<code>+ 8</code>)", "<code>00101100</code>", "44", { inputId: "c2", placeholder: "0x...", answers: ["0x2C", "0x2c"] }],
      ["Sau Bước 3 (<code>+ 0x10</code>)", { inputId: "c3", placeholder: "8 bit...", answers: ["00111100"] }, "60", "<code>0x3C</code>"]
    ],
    explanation: "Bước 1: <code>00100100₂ = 36 = 0x24</code>. Bước 2: cộng 8 bật thêm bit 3 thành <code>00101100₂ = 44 = 0x2C</code>. Bước 3: cộng <code>0x10</code> (16) bật thêm bit 4 thành <code>00111100₂ = 60 = 0x3C</code>."
  },
  {
    id: "trc-18",
    category: "trace",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Truy vết kết quả xuất ra màn hình khi kết hợp nhiều thao tác định dạng luồng liên tiếp:",
    code: `double val{ 7.5 };
bool ok{ val < 10.0 };
std::cout << ok << "\\n";                                      // Dòng 1
std::cout << std::boolalpha << ok << "\\n";                    // Dòng 2
std::cout << std::fixed << std::setprecision(3) << val << "\\n";// Dòng 3
std::cout << std::defaultfloat << std::noboolalpha << ok;     // Dòng 4`,
    headers: ["Dòng lệnh", "Kết quả in ra"],
    rows: [
      ["Dòng 1", { inputId: "c1", placeholder: "Kết quả...", answers: ["1"] }],
      ["Dòng 2", { inputId: "c2", placeholder: "Kết quả...", answers: ["true"] }],
      ["Dòng 3", { inputId: "c3", placeholder: "Kết quả...", answers: ["7.500"] }],
      ["Dòng 4", { inputId: "c4", placeholder: "Kết quả...", answers: ["1"] }]
    ],
    explanation: "<code>ok</code> là <code>true</code>. Dòng 1 in mặc định <code>1</code>; Dòng 2 có <code>boolalpha</code> in <code>true</code>; Dòng 3 in <code>val</code> với 3 chữ số sau dấu phẩy là <code>7.500</code>; Dòng 4 tắt <code>boolalpha</code> bằng <code>noboolalpha</code> nên <code>ok</code> lại in ra <code>1</code>."
  },
  {
    id: "trc-19",
    category: "trace",
    source: "advanced",
    difficulty: "medium",
    prompt: "[Nâng cao] Truy vết kiểu suy luận và giá trị của các biến có sử dụng biểu thức hỗn hợp với <code>auto</code>:",
    code: `auto a{ 10 };          // Dòng 1
auto b{ 2.5 };         // Dòng 2
auto c{ a + b };       // Dòng 3
auto d{ a > b };       // Dòng 4`,
    headers: ["Biến", "Kiểu dữ liệu suy ra", "Giá trị của biến"],
    rows: [
      ["<code>a</code>", "<code>int</code>", "10"],
      ["<code>b</code>", "<code>double</code>", "2.5"],
      ["<code>c</code>", { inputId: "c1", placeholder: "Kiểu của c...", answers: ["double"] }, { inputId: "c2", placeholder: "Giá trị c...", answers: ["12.5"] }],
      ["<code>d</code>", { inputId: "c3", placeholder: "Kiểu của d...", answers: ["bool"] }, "<code>true</code> (1)"]
    ],
    explanation: "Ở dòng 3, <code>int + double</code> được nâng lên kiểu lớn hơn là <code>double</code> với giá trị <code>12.5</code>. Ở dòng 4, phép so sánh <code>a &gt; b</code> trả về kiểu logic <code>bool</code>."
  },
  {
    id: "trc-20",
    category: "trace",
    source: "advanced",
    difficulty: "hard",
    prompt: "[Nâng cao] Truy vết nội dung các biến sau khi chạy chương trình nhập dữ liệu hỗn hợp dưới đây với chuỗi đầu vào từ bàn phím là:\n<code>15 C++23 Modern Language</code> (trên cùng 1 dòng rồi nhấn Enter):",
    code: `int ver{};
std::string word{};
std::string rest{};
std::cin >> ver >> word;
std::cin.ignore();
std::getline(std::cin, rest);`,
    headers: ["Biến", "Giá trị lưu trong biến sau khi chạy xong"],
    rows: [
      ["<code>ver</code>", { inputId: "c1", placeholder: "ver = ...", answers: ["15"] }],
      ["<code>word</code>", { inputId: "c2", placeholder: "word = ...", answers: ["C++23", "\"C++23\""] }],
      ["<code>rest</code>", { inputId: "c3", placeholder: "rest = ...", answers: ["Modern Language", "\"Modern Language\""] }]
    ],
    explanation: "<code>std::cin &gt;&gt; ver</code> đọc <code>15</code>; <code>&gt;&gt; word</code> bỏ qua dấu cách và đọc từ tiếp theo đến dấu cách là <code>\"C++23\"</code>. Sau đó <code>std::cin.ignore()</code> bỏ qua đúng 1 dấu cách sau chữ <code>C++23</code>, và <code>std::getline</code> đọc toàn bộ phần còn lại trên dòng là <code>\"Modern Language\"</code>!"
  }
];
