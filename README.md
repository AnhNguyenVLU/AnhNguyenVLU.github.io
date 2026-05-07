# Nguyen Thai Anh — Personal Website

Trang web cá nhân học thuật, viết bằng HTML/CSS/JS thuần, host trên **GitHub Pages**.
Cấu trúc giống bản Google Sites cũ (Home / Research / Teaching / Books) nhưng layout hiện đại hơn.

## Cấu trúc thư mục

```
AnhNguyenVLU.github.io/
├── index.html          # Home / About + Scholar metrics
├── research.html       # Publications + projects
├── teaching.html       # Courses + advising
├── books.html          # Books
├── talks-awards.html   # Talks, awards, academic service
├── .nojekyll           # tắt Jekyll (giữ nguyên file _*)
├── assets/
│   ├── css/style.css
│   ├── js/main.js      # nav toggle + footer year
│   ├── js/i18n.js      # song ngữ EN / VI (toggle ở nav)
│   └── img/
│       ├── favicon.svg
│       └── profile.jpg
└── README.md
```

## Triển khai lên GitHub Pages (4 bước)

> Username GitHub đang dùng: **AnhNguyenVLU**.
> Repo phải đặt tên đúng dạng `AnhNguyenVLU.github.io` để site chạy ngay tại
> `https://AnhNguyenVLU.github.io/`.

### 1. Tạo repo mới trên GitHub
- Vào https://github.com/new
- **Repository name:** `AnhNguyenVLU.github.io`
- Để **Public** (Pages free chỉ chạy public với account thường)
- Không tick "Add a README" (đã có sẵn)
- Bấm **Create repository**

### 2. Push code lên (chạy trong PowerShell từ thư mục này)

```powershell
cd "d:\CaiTienLATS\AnhNguyenVLU.github.io"
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/AnhNguyenVLU/AnhNguyenVLU.github.io.git
git push -u origin main
```

### 3. Bật GitHub Pages
- Vào repo → **Settings** → **Pages**
- **Source**: chọn `Deploy from a branch`
- **Branch**: `main` / folder `/ (root)` → **Save**
- Đợi ~1 phút, mở `https://AnhNguyenVLU.github.io/` để xem.

### 4. (Tuỳ chọn) Tên miền riêng
Nếu mua domain (ví dụ `nguyenthaianh.com`):
- Tạo file `CNAME` ở root chứa đúng 1 dòng: `nguyenthaianh.com`
- Trỏ DNS về GitHub Pages (4 bản ghi A: 185.199.108.153, 109, 110, 111
  + CNAME `www` → `AnhNguyenVLU.github.io`)
- Bật **Enforce HTTPS** trong Settings → Pages.

## Tuỳ biến nhanh

| Muốn đổi… | Sửa file |
|---|---|
| Tên, chức danh, bio | `index.html` (mục `.hero`, `.section`) |
| Danh sách publications | `research.html` (mục `.pub-list`) |
| Khoá học đang dạy | `teaching.html` (mục `.course-grid`) |
| Sách | `books.html` |
| Talks / Awards | `talks-awards.html` (mục `.talk-list`, `.award-grid`) |
| **Scholar metrics** (citations / h-index / i10) | `index.html` mục `<ul class="metrics">` — đổi nội dung trong `<span class="metric-value">` |
| **Bản dịch EN / VI** | `assets/js/i18n.js` (object `I18N.en` và `I18N.vi`) |
| Màu sắc, font | biến CSS ở đầu `assets/css/style.css` (`--brand`, `--accent`, …) |
| Ảnh chân dung | thay file `assets/img/profile.jpg` (PNG/JPG đều được) |
| Link Google Scholar / ORCID | sửa `<a href=...>` trong block `.socials` của `index.html` |

### Cập nhật chỉ số Scholar

Mở https://scholar.google.com/citations?hl=en&user=YZFnMJYAAAAJ → khối "Cited by" có 3 con số: **Citations**, **h-index**, **i10-index**. Mở `index.html`, tìm khối:

```html
<ul class="metrics">
  <li><span class="metric-value">—</span> ... Citations ... </li>
  <li><span class="metric-value">—</span> ... h-index ... </li>
  <li><span class="metric-value">—</span> ... i10-index ... </li>
</ul>
```

Thay 3 dấu `—` bằng số thật (vd: `42`, `4`, `3`). Nên cập nhật ~6 tháng/lần.

### Song ngữ EN / VI

Trang đã có **toggle EN / VI** ở góc phải nav. Khi user bấm, toàn bộ chữ có gắn `data-i18n="key"` sẽ đổi theo từ điển trong `assets/js/i18n.js`. Lựa chọn được lưu vào `localStorage`, lần sau quay lại vẫn giữ ngôn ngữ cuối.

Mặc định (nếu chưa từng vào): tự nhận theo `navigator.language` — máy VN sẽ thấy tiếng Việt trước.

**Thêm chuỗi cần dịch?**
1. Trong HTML, thêm thuộc tính: `<p data-i18n="my.key">Default text</p>`.
   Nếu chuỗi có HTML (bold, link…), dùng `data-i18n-html="my.key"` thay vì `data-i18n`.
2. Trong `assets/js/i18n.js`, thêm key vào cả `en:` và `vi:`.

## Chạy thử cục bộ trước khi push

Cần xem trước trên trình duyệt? Mở terminal trong thư mục site và chạy 1 trong 2 lệnh:

```powershell
# Cần Python 3
python -m http.server 8000
# hoặc nếu đã có Node
npx serve .
```

Rồi mở `http://localhost:8000`.

## Ghi chú

- Đã thêm `.nojekyll` để tránh GitHub Pages xử lý Jekyll (giữ nguyên các tên file bắt đầu bằng `_`).
- Trang đã hỗ trợ **dark mode tự động** theo `prefers-color-scheme` của hệ điều hành.
- Có **toggle song ngữ EN / VI** ở nav, lưu lựa chọn vào `localStorage`.
- Có **trang Talks & Awards** riêng (nội dung hiện là placeholder, sửa trong `talks-awards.html`).
- Có **block Scholar metrics** ở Home — cần cập nhật con số thật bằng tay (xem mục "Cập nhật chỉ số Scholar" ở trên).
- Đã có `print` stylesheet để in CV ra PDF nếu cần.
- Responsive đầy đủ: nav burger ở mobile, layout 1 cột < 820px.
- Ảnh chân dung **bị thiếu** sẽ tự động hiển thị placeholder chữ "NTA".
