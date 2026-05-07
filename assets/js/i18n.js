/* =========================================================
   Bilingual EN / VI translations
   - data-i18n="key"  → textContent
   - data-i18n-html="key" → innerHTML (for content with inline HTML)
   - data-i18n-attr="attr:key;..." → set attribute(s)
   - [data-lang-toggle] flips language; persisted to localStorage
   ========================================================= */

const I18N = {
  en: {
    // Common
    'lang.toggle': 'VI',
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.teaching': 'Teaching',
    'nav.books': 'Books',
    'nav.talks': 'Talks & Awards',
    'nav.mentoring': 'Mentoring',
    'footer.role': 'Faculty of Information Technology · Van Lang University',
    'footer.copy': 'Nguyen Thai Anh.',

    // Mentoring page
    'mentor.eyebrow': 'Mentoring',
    'mentor.h1': 'Student supervision & mentoring',
    'mentor.lede': 'Below are the students I supervise — university-level research projects (NCKH), graduation theses, and external mentees from partner institutions.',
    'mentor.nckh.title': 'Research supervision · NCKH (university-level)',
    'mentor.nckh.intro': 'Student research groups conducting university-level scientific research projects (Nghiên cứu Khoa học Cấp trường). Names listed in alphabetical order within each project.',
    'mentor.thesis.title': 'Undergraduate students · Theses',
    'mentor.thesis.intro': 'Students I advise for graduation thesis (Khoá luận tốt nghiệp), grouped by graduation cohort. Co-supervised entries are advised jointly with Dr. Ngo Hoang Tu.',
    'mentor.thesis.cohort.20242020': '2020 – 2024 · Graduated',
    'mentor.thesis.cohort.20252021': '2021 – 2025 · Graduated',
    'mentor.thesis.cohort.20262022': '2022 – 2026 · In progress',
    'mentor.thesis.cohort.count.html': '{n} students',
    'mentor.thesis.honor.thesisvale': 'Thesis valedictorian',
    'mentor.thesis.honor.facvale': 'Faculty valedictorian, FIT-VLU 2026',
    'mentor.thesis.cosup': 'Co-supervised w/ Dr. Ngo Hoang Tu',
    'mentor.thesis.major.dt': 'Data Technology',
    'mentor.thesis.major.ai': 'Artificial Intelligence',
    'mentor.ext.cohort': 'External institutions',

    // Home — hero
    'home.eyebrow': 'Lecturer',
    'home.lede.html': 'Lecturer at the Faculty of Information Technology, <a href="https://www.vlu.edu.vn/" target="_blank" rel="noopener">Van Lang University</a>. MSc in Data Science & AI from <a href="https://ait.ac.th/" target="_blank" rel="noopener">AIT, Thailand</a>.',
    'home.fact.research.label': 'Research',
    'home.fact.research.body': 'Machine Learning · Deep Learning · Computer Vision',
    'home.fact.email.label': 'Email',
    'home.fact.github.label': 'GitHub',
    'home.fact.scholar.label': 'Scholar',
    'home.cta.research': 'View research →',
    'home.cta.cv': 'Download CV',

    // Affiliations
    'aff.label': 'Affiliations',
    'aff.vlu': 'Van Lang University',
    'aff.vlu.role': 'Lecturer · Assistant to the Dean, FIT',
    'aff.huit': 'University of Industry & Trade',
    'aff.huit.role': 'Guest lecturer',
    'aff.ait': 'Asian Institute of Technology',
    'aff.ait.role': 'MSc · Thailand · 2024',

    // Home — metrics
    'home.metrics.title': 'Scholar metrics',
    'home.metrics.citations': 'Citations',
    'home.metrics.hindex': 'h-index',
    'home.metrics.i10': 'i10-index',
    'home.metrics.note': 'Snapshot — open Google Scholar for the latest.',
    'home.metrics.cta': 'Open Scholar profile →',

    // Home — about
    'home.about.title': 'About',
    'home.about.p1': 'I am a lecturer at the Faculty of Information Technology, Van Lang University, and Assistant to the Dean. I earned my BSc in IT from VLU (2018–2022) and my MSc in Data Science and Artificial Intelligence from the Asian Institute of Technology (AIT), Thailand (2022–2024).',
    'home.about.p2.html': 'My research sits at the intersection of <em>machine learning</em>, <em>deep learning</em>, and <em>computer vision</em>, with active threads in LiDAR point cloud processing, recommendation systems, medical image segmentation, Vietnamese sign-language recognition, and agricultural vision. I supervise undergraduate research and thesis projects at VLU and collaborate with peers across partner institutions.',

    // Home — research interests
    'home.interests.title': 'Research interests',
    'home.interest.cv.tag': 'Computer Vision',
    'home.interest.cv.desc': 'Object detection, segmentation, LiDAR / point clouds, medical imaging.',
    'home.interest.dl.tag': 'Deep Learning',
    'home.interest.dl.desc': 'CNNs, Vision Transformers, hybrid pruned-residual architectures.',
    'home.interest.rec.tag': 'Recommender Systems',
    'home.interest.rec.desc': 'Image-based recommendation, fusion models for behavior data.',
    'home.interest.app.tag': 'Applied ML',
    'home.interest.app.desc': 'Healthcare, agriculture, sign language, mobility, networking.',

    // Home — news feed
    'home.news.title': 'News',
    'home.news.1.date': 'Jun 2025',
    'home.news.1.body.html': 'Served as <strong>Secretary of the Graduation Thesis Defense Committee</strong> at VLU.',
    'home.news.2.date': '2025',
    'home.news.2.body.html': 'Five conference papers accepted, including four at <strong>RIVF 2025</strong> and one Springer soft-computing volume.',
    'home.news.3.date': 'Sep 2025',
    'home.news.3.body': 'Began guest lectureship at the University of Industry and Trade (HUIT).',
    'home.news.5.date': 'Aug 2024',
    'home.news.5.body.html': 'Guest speaker on <strong>AI TECH</strong>.',
    'home.news.6.date': 'Jul 2024',
    'home.news.6.body': 'Joined Van Lang University as a lecturer in the Faculty of Information Technology.',
    'home.news.7.date': '2024',
    'home.news.7.body': 'Completed MSc in Data Science & AI at AIT, Thailand.',

    // Research
    'research.eyebrow': 'Research',
    'research.h1': 'Publications, projects & theses',
    'research.lede': 'My work spans data science, AI, computer vision, and machine learning applications — with active threads in LiDAR point clouds, recommendation systems, and deep learning models for healthcare and agriculture.',
    'research.cta.scholar': 'View on Google Scholar →',
    'research.cta.github': 'GitHub',

    'research.theses.title': 'Theses',
    'research.thesis.msc.kicker': 'MSc · 2024 · AIT, Thailand',
    'research.thesis.msc.degree': 'Master of Science in Data Science and Artificial Intelligence — Asian Institute of Technology (AIT), Thailand.',
    'research.thesis.bsc.kicker': 'BSc · 2022 · Van Lang University',
    'research.thesis.bsc.degree': 'Bachelor of Science in Information Technology — Van Lang University, Vietnam.',

    'research.pubs.title': 'Selected publications',
    'research.collab.title': 'Past research collaborations',

    // Teaching
    'teaching.eyebrow': 'Teaching',
    'teaching.h1': 'Courses, advising & supervision',
    'teaching.lede': 'I teach AI, deep learning, and data analytics at Van Lang University, with a guest appointment at HUIT and VLSC. Below: current term, full course history, and a complete list of student research and thesis projects I supervise.',

    'teaching.current.title': 'Current teaching · 2025–2026',
    'teaching.vlu.subtitle': 'Van Lang University (VLU)',
    'teaching.huit.subtitle.html': 'University of Industry and Trade (HUIT) <span class="badge muted-badge">Guest</span>',
    'teaching.vlsc.subtitle.html': 'VLSC <span class="badge muted-badge">Guest</span>',

    'teaching.history.title': 'Course history',
    'teaching.sem.251': 'Semester 251 · 2025–2026',
    'teaching.sem.243': 'Semester 243 · 2024–2025',
    'teaching.sem.242': 'Semester 242 · 2024–2025',
    'teaching.sem.241': 'Semester 241 · 2024–2025',
    'teaching.sem.233': 'Semester 233 · 2023–2024',

    'teaching.advisor.title': 'Academic advisor · 2024–2025',
    'teaching.advisor.body.html': 'Homeroom advisor for four classes: <strong>71K30IT05, 71K30IT06, 71K30IT13</strong> (29 students each cohort) and <strong>72K30IT01</strong> (33 students, Honors program).',

    'teaching.adv.title': 'Research supervision & thesis advising',
    'teaching.adv.intro': 'Below are student research groups and thesis projects I supervise (NCKH and graduation theses). Names listed in alphabetical order within each project.',
    'teaching.adv.label.period': 'Period',
    'teaching.adv.label.team': 'Team',
    'teaching.adv.label.coadv': 'Co-advisor',

    'teaching.adv.p1.title': 'Vietnamese Sign-Language Recognition with YOLO',
    'teaching.adv.p2.title': 'Computer Vision for Fruit Ripeness Detection via Ethylene Concentration',
    'teaching.adv.p3.title': 'Complete Autonomous Drone — Design and Construction',
    'teaching.adv.p4.title': 'Deep Embedded Clustering for Facebook Post Classification',
    'teaching.adv.p5.title': 'Semi-Automated Traffic Annotation (YOLOv8-seg + SAM2)',
    'teaching.adv.p6.title': 'YOLO-Segmentation for Skin Lesion Detection',
    'teaching.adv.p7.title': 'Deep Learning–Enhanced Clustering (UMAP / HDBSCAN) for scRNA-seq Data',

    'teaching.past.title': 'Past research collaborations',
    'teaching.past.label.role': 'Role',
    'teaching.past.role.member': 'Team member',
    'teaching.past.1.title': 'Moodle Plugin for Log-File Analysis (Student Learning Effectiveness)',
    'teaching.past.2.title': 'Improving the MetaDistil Framework (NLP)',

    'teaching.ext.title': 'External mentees & collaborators',
    'teaching.ext.intro': 'Students from partner institutions and external mentees I supervise or co-supervise outside VLU.',
    'teaching.ext.placeholder': 'List coming soon — entries will be added once provided.',

    'teaching.ta.title': 'Teaching assistant · Jan 2021 – Aug 2022',
    'teaching.ta.body': 'Assisted across six courses:',

    'teaching.materials.title': 'Course materials',
    'teaching.materials.body': 'Public repositories with slides, notebooks, and code:',
    'teaching.material.dl.title': 'Data Analytics & Deep Learning',
    'teaching.material.dl.desc': 'Lecture notebooks, datasets, and assignments.',
    'teaching.material.ml.title': 'Machine Learning',
    'teaching.material.ml.desc': 'Slides & coding exercises for the ML course.',
    'teaching.cta.github': 'Visit GitHub →',
    'badge.honors': 'Honors',

    // Books
    'books.eyebrow': 'Books',
    'books.h1': 'Books & writing',
    'books.lede': 'Books and longer-form writing projects. Updated as titles are released.',
    'books.placeholder.title': 'Title to be announced',
    'books.placeholder.meta': 'Publisher · Year',
    'books.placeholder.desc': 'Short description of the book — topic, audience, and what makes it useful. Replace this placeholder with the real cover image and metadata when available.',
    'books.contact.html': 'Have a book or chapter to feature here? Email <a href="mailto:anh.nt@vlu.edu.vn">anh.nt@vlu.edu.vn</a>.',

    // Talks & Awards
    'talks.eyebrow': 'Talks & Awards',
    'talks.h1': 'Talks, awards & academic service',
    'talks.lede': 'Selected presentations, honors, and service roles.',
    'talks.invited.title': 'Talks & presentations',

    'talks.t1.date': 'Aug 2024',
    'talks.t1.title': 'Guest speaker — AI TECH',
    'talks.t1.venue': 'AI TECH event',
    'talks.t1.desc': 'Invited talk on applied AI and deep learning for industry.',
    'talks.t2.date': '2025',
    'talks.t2.title': 'RIVF 2025 — Conference presentations',
    'talks.t2.venue': 'RIVF International Conference on Computing & Communication Technologies',
    'talks.t2.desc': 'Presentation of four papers (WiFi handover; YOLOv11 traffic annotation; brain-tumor segmentation; fruit ripeness detection).',
    'talks.t3.date': '2021',
    'talks.t3.title': 'FAIR 2021 — Conference presentation',
    'talks.t3.venue': 'Vietnam National Conference on Fundamental and Applied IT Research',
    'talks.t3.desc': 'Presented BSc thesis work — a job recommender system for IT students based on academic performance and industry demand.',

    'awards.title': 'Awards & honors',
    'awards.a1.title': 'Valedictorian recognition',
    'awards.a1.org': 'Van Lang University',
    'awards.a1.year': '2019–2020 · 2021–2022',
    'awards.a1.desc': 'Top of cohort across multiple academic years during BSc programme.',
    'awards.a2.title': 'VLU–AIT Scholarship',
    'awards.a2.org': 'Van Lang University × AIT Thailand',
    'awards.a2.year': '2022–2024',
    'awards.a2.desc': 'Full scholarship covering MSc in Data Science and Artificial Intelligence at the Asian Institute of Technology, Thailand.',
    'awards.a3.title': '100% & 50% tuition scholarships',
    'awards.a3.org': 'Van Lang University',
    'awards.a3.year': 'Multiple semesters',
    'awards.a3.desc': 'Awarded across several semesters during BSc for academic performance.',

    'service.title': 'Academic service',
    'service.s1.date': 'Jun 2025',
    'service.s1.body.html': '<strong>Secretary</strong> — Graduation Thesis Defense Committee, Faculty of Information Technology, VLU.',
    'service.s2.body': 'Reviewer for student research projects and undergraduate competitions at VLU.',
    'service.review.title': 'Conference review activities',
    'service.review.intro': 'Reviewer / programme committee member for the following conferences:',
    'service.review.icsoftcomp': 'icSoftComp 2025 — International Conference on Soft Computing and its Engineering Applications',
    'service.review.rivf': 'RIVF 2025 — International Conference on Computing & Communication Technologies',
  },

  vi: {
    // Common
    'lang.toggle': 'EN',
    'nav.home': 'Giới thiệu',
    'nav.research': 'Nghiên cứu',
    'nav.teaching': 'Giảng dạy',
    'nav.books': 'Sách',
    'nav.talks': 'Báo cáo & Giải thưởng',
    'nav.mentoring': 'Hướng dẫn',
    'footer.role': 'Khoa Công nghệ Thông tin · Đại học Văn Lang',
    'footer.copy': 'Nguyễn Thái Anh.',

    // Mentoring page
    'mentor.eyebrow': 'Hướng dẫn',
    'mentor.h1': 'Hướng dẫn sinh viên',
    'mentor.lede': 'Bên dưới là các sinh viên tôi đang hướng dẫn — đề tài Nghiên cứu Khoa học cấp trường (NCKH), khoá luận tốt nghiệp, và sinh viên ngoài VLU mà tôi đồng hướng dẫn.',
    'mentor.nckh.title': 'Hướng dẫn NCKH · Cấp trường',
    'mentor.nckh.intro': 'Các nhóm sinh viên đang thực hiện đề tài Nghiên cứu Khoa học Cấp trường. Tên sinh viên xếp theo thứ tự danh sách của nhóm.',
    'mentor.thesis.title': 'Sinh viên đại học · Khoá luận',
    'mentor.thesis.intro': 'Các sinh viên tôi hướng dẫn khoá luận tốt nghiệp, sắp xếp theo khoá ra trường. Các mục đồng hướng dẫn được phối hợp với TS. Ngô Hoàng Tú.',
    'mentor.thesis.cohort.20242020': '2020 – 2024 · Đã tốt nghiệp',
    'mentor.thesis.cohort.20252021': '2021 – 2025 · Đã tốt nghiệp',
    'mentor.thesis.cohort.20262022': '2022 – 2026 · Đang thực hiện',
    'mentor.thesis.cohort.count.html': '{n} sinh viên',
    'mentor.thesis.honor.thesisvale': 'Thủ khoa khoá luận',
    'mentor.thesis.honor.facvale': 'Thủ khoa Khoa CNTT-VLU 2026',
    'mentor.thesis.cosup': 'Đồng HD: TS. Ngô Hoàng Tú',
    'mentor.thesis.major.dt': 'Công nghệ Dữ liệu',
    'mentor.thesis.major.ai': 'Trí tuệ Nhân tạo',
    'mentor.ext.cohort': 'Đơn vị ngoài VLU',

    // Home — hero
    'home.eyebrow': 'Giảng viên',
    'home.lede.html': 'Giảng viên Khoa Công nghệ Thông tin, <a href="https://www.vlu.edu.vn/" target="_blank" rel="noopener">Đại học Văn Lang</a>. Thạc sĩ Khoa học Dữ liệu & TTNT từ <a href="https://ait.ac.th/" target="_blank" rel="noopener">AIT, Thái Lan</a>.',
    'home.fact.research.label': 'Hướng',
    'home.fact.research.body': 'Học máy · Học sâu · Thị giác máy tính',
    'home.fact.email.label': 'Email',
    'home.fact.github.label': 'GitHub',
    'home.fact.scholar.label': 'Scholar',
    'home.cta.research': 'Xem nghiên cứu →',
    'home.cta.cv': 'Tải CV',

    // Affiliations
    'aff.label': 'Đơn vị',
    'aff.vlu': 'Đại học Văn Lang',
    'aff.vlu.role': 'Giảng viên · Trợ lý Trưởng khoa CNTT',
    'aff.huit': 'Đại học Công Thương TP.HCM',
    'aff.huit.role': 'Thỉnh giảng',
    'aff.ait': 'Asian Institute of Technology',
    'aff.ait.role': 'Thạc sĩ · Thái Lan · 2024',

    // Home — metrics
    'home.metrics.title': 'Chỉ số Scholar',
    'home.metrics.citations': 'Trích dẫn',
    'home.metrics.hindex': 'h-index',
    'home.metrics.i10': 'i10-index',
    'home.metrics.note': 'Số liệu chụp lại — mở Google Scholar để xem mới nhất.',
    'home.metrics.cta': 'Mở hồ sơ Scholar →',

    // Home — about
    'home.about.title': 'Giới thiệu',
    'home.about.p1': 'Tôi là giảng viên Khoa Công nghệ Thông tin, Đại học Văn Lang, đồng thời là Trợ lý Trưởng khoa. Cử nhân CNTT tại Đại học Văn Lang (2018–2022), Thạc sĩ Khoa học Dữ liệu & TTNT tại Asian Institute of Technology (AIT), Thái Lan (2022–2024).',
    'home.about.p2.html': 'Hướng nghiên cứu của tôi nằm ở giao điểm của <em>học máy</em>, <em>học sâu</em> và <em>thị giác máy tính</em>, với các đề tài đang triển khai về xử lý điểm mây LiDAR, hệ khuyến nghị, phân vùng ảnh y tế, nhận dạng ngôn ngữ ký hiệu Việt Nam, và thị giác trong nông nghiệp. Tôi hướng dẫn NCKH và khoá luận sinh viên tại VLU, đồng thời cộng tác với đồng nghiệp tại các đơn vị đối tác.',

    // Home — research interests
    'home.interests.title': 'Hướng nghiên cứu',
    'home.interest.cv.tag': 'Thị giác máy tính',
    'home.interest.cv.desc': 'Phát hiện đối tượng, phân vùng, LiDAR / điểm mây, ảnh y khoa.',
    'home.interest.dl.tag': 'Học sâu',
    'home.interest.dl.desc': 'CNN, Vision Transformer, kiến trúc lai pruned-residual.',
    'home.interest.rec.tag': 'Hệ khuyến nghị',
    'home.interest.rec.desc': 'Khuyến nghị dựa trên ảnh, mô hình kết hợp dữ liệu hành vi.',
    'home.interest.app.tag': 'ML ứng dụng',
    'home.interest.app.desc': 'Y tế, nông nghiệp, ngôn ngữ ký hiệu, giao thông, mạng máy tính.',

    // Home — news feed
    'home.news.title': 'Tin mới',
    'home.news.1.date': '06/2025',
    'home.news.1.body.html': 'Đảm nhiệm <strong>Thư ký Hội đồng Bảo vệ Khoá luận tốt nghiệp</strong> tại VLU.',
    'home.news.2.date': '2025',
    'home.news.2.body.html': 'Năm bài hội nghị được chấp nhận, gồm bốn bài tại <strong>RIVF 2025</strong> và một bài Springer về soft computing.',
    'home.news.3.date': '09/2025',
    'home.news.3.body': 'Bắt đầu thỉnh giảng tại Đại học Công Thương TP.HCM (HUIT).',
    'home.news.5.date': '08/2024',
    'home.news.5.body.html': 'Khách mời chia sẻ tại sự kiện <strong>AI TECH</strong>.',
    'home.news.6.date': '07/2024',
    'home.news.6.body': 'Gia nhập Đại học Văn Lang với vai trò giảng viên Khoa CNTT.',
    'home.news.7.date': '2024',
    'home.news.7.body': 'Hoàn thành Thạc sĩ Khoa học Dữ liệu & TTNT tại AIT, Thái Lan.',

    // Research
    'research.eyebrow': 'Nghiên cứu',
    'research.h1': 'Công bố, dự án & luận văn',
    'research.lede': 'Công việc của tôi trải dài qua khoa học dữ liệu, AI, thị giác máy tính và các ứng dụng học máy — với các hướng đang triển khai về điểm mây LiDAR, hệ khuyến nghị và mô hình học sâu cho y tế và nông nghiệp.',
    'research.cta.scholar': 'Xem trên Google Scholar →',
    'research.cta.github': 'GitHub',

    'research.theses.title': 'Luận văn',
    'research.thesis.msc.kicker': 'Thạc sĩ · 2024 · AIT, Thái Lan',
    'research.thesis.msc.degree': 'Thạc sĩ Khoa học Dữ liệu & Trí tuệ nhân tạo — Asian Institute of Technology (AIT), Thái Lan.',
    'research.thesis.bsc.kicker': 'Cử nhân · 2022 · Đại học Văn Lang',
    'research.thesis.bsc.degree': 'Cử nhân Công nghệ Thông tin — Đại học Văn Lang, Việt Nam.',

    'research.pubs.title': 'Công bố tiêu biểu',
    'research.collab.title': 'Hợp tác nghiên cứu trước đây',

    // Teaching
    'teaching.eyebrow': 'Giảng dạy',
    'teaching.h1': 'Học phần, cố vấn & hướng dẫn',
    'teaching.lede': 'Tôi giảng dạy AI, học sâu và phân tích dữ liệu tại Đại học Văn Lang, đồng thời thỉnh giảng tại HUIT và VLSC. Bên dưới: học kỳ hiện tại, lịch sử giảng dạy đầy đủ, và toàn bộ danh sách nhóm sinh viên NCKH / khoá luận tôi đang hướng dẫn.',

    'teaching.current.title': 'Đang giảng dạy · 2025–2026',
    'teaching.vlu.subtitle': 'Đại học Văn Lang (VLU)',
    'teaching.huit.subtitle.html': 'Đại học Công Thương TP.HCM (HUIT) <span class="badge muted-badge">Thỉnh giảng</span>',
    'teaching.vlsc.subtitle.html': 'VLSC <span class="badge muted-badge">Thỉnh giảng</span>',

    'teaching.history.title': 'Lịch sử giảng dạy',
    'teaching.sem.251': 'Học kỳ 251 · 2025–2026',
    'teaching.sem.243': 'Học kỳ 243 · 2024–2025',
    'teaching.sem.242': 'Học kỳ 242 · 2024–2025',
    'teaching.sem.241': 'Học kỳ 241 · 2024–2025',
    'teaching.sem.233': 'Học kỳ 233 · 2023–2024',

    'teaching.advisor.title': 'Cố vấn học tập · 2024–2025',
    'teaching.advisor.body.html': 'Cố vấn học tập cho bốn lớp: <strong>71K30IT05, 71K30IT06, 71K30IT13</strong> (29 sinh viên/lớp) và <strong>72K30IT01</strong> (33 sinh viên, chương trình CTCLC).',

    'teaching.adv.title': 'Hướng dẫn NCKH & Khoá luận',
    'teaching.adv.intro': 'Bên dưới là các nhóm sinh viên NCKH và đề tài khoá luận tốt nghiệp mà tôi đang hướng dẫn. Tên sinh viên xếp theo trình tự danh sách của nhóm.',
    'teaching.adv.label.period': 'Thời gian',
    'teaching.adv.label.team': 'Nhóm sinh viên',
    'teaching.adv.label.coadv': 'Đồng hướng dẫn',

    'teaching.adv.p1.title': 'Nghiên cứu phương pháp ứng dụng mô hình YOLO tự động nhận diện ngôn ngữ ký hiệu tiếng Việt trên thời gian thực',
    'teaching.adv.p2.title': 'Nghiên cứu mô hình thị giác máy tính trong nhận diện và phân tích độ chín sống của trái cây thông qua nồng độ khí Ethylene để tối ưu hoá quy trình bảo quản',
    'teaching.adv.p3.title': 'Nghiên cứu, thiết kế và chế tạo một drone hoàn chỉnh có thể vận hành theo hành trình đặt trước',
    'teaching.adv.p4.title': 'Nghiên cứu mô hình deep embedded clustering trong phân loại bài đăng trên Facebook',
    'teaching.adv.p5.title': 'Nghiên cứu phương pháp gán nhãn phân đoạn bán tự động cho dữ liệu giao thông tích hợp YOLOv8-seg và SAM2',
    'teaching.adv.p6.title': 'Ứng dụng mô hình YOLO-Segmentation trong phát hiện và phân đoạn tổn thương da từ ảnh y khoa',
    'teaching.adv.p7.title': 'Đánh giá và so sánh hiệu suất của deep learning-enhanced kết hợp với UMAP và HDBSCAN với các phương pháp truyền thống trong phân cụm dữ liệu gene đơn tế bào (scRNA-seq)',

    'teaching.past.title': 'Hợp tác nghiên cứu trước đây',
    'teaching.past.label.role': 'Vai trò',
    'teaching.past.role.member': 'Thành viên',
    'teaching.past.1.title': 'Plugin Moodle phân tích log đánh giá hiệu quả học tập',
    'teaching.past.2.title': 'Cải tiến framework MetaDistil (NLP)',

    'teaching.ext.title': 'Sinh viên & cộng tác bên ngoài',
    'teaching.ext.intro': 'Sinh viên từ các đơn vị đối tác và mentees ngoài VLU mà tôi hướng dẫn hoặc đồng hướng dẫn.',
    'teaching.ext.placeholder': 'Danh sách sẽ cập nhật — mục này sẽ được điền khi có thông tin.',

    'teaching.ta.title': 'Trợ giảng · 01/2021 – 08/2022',
    'teaching.ta.body': 'Hỗ trợ giảng dạy sáu môn:',

    'teaching.materials.title': 'Tài liệu môn học',
    'teaching.materials.body': 'Repository công khai với slide, notebook và mã nguồn:',
    'teaching.material.dl.title': 'Phân tích dữ liệu & Học sâu',
    'teaching.material.dl.desc': 'Notebook bài giảng, dữ liệu và bài tập.',
    'teaching.material.ml.title': 'Học máy',
    'teaching.material.ml.desc': 'Slide và bài tập lập trình cho môn ML.',
    'teaching.cta.github': 'Mở GitHub →',
    'badge.honors': 'CTCLC',

    // Books
    'books.eyebrow': 'Sách',
    'books.h1': 'Sách & ấn phẩm',
    'books.lede': 'Các đầu sách và ấn phẩm dài. Cập nhật khi có ấn phẩm mới.',
    'books.placeholder.title': 'Tựa đề sẽ công bố sau',
    'books.placeholder.meta': 'Nhà xuất bản · Năm',
    'books.placeholder.desc': 'Mô tả ngắn về cuốn sách — chủ đề, độc giả mục tiêu, và điểm hữu ích. Thay placeholder này bằng ảnh bìa và thông tin thật khi có.',
    'books.contact.html': 'Có sách hoặc chương sách muốn xuất hiện ở đây? Liên hệ <a href="mailto:anh.nt@vlu.edu.vn">anh.nt@vlu.edu.vn</a>.',

    // Talks & Awards
    'talks.eyebrow': 'Báo cáo & Giải thưởng',
    'talks.h1': 'Báo cáo, giải thưởng & hoạt động học thuật',
    'talks.lede': 'Một số báo cáo, danh hiệu và vai trò học thuật.',
    'talks.invited.title': 'Báo cáo & trình bày',

    'talks.t1.date': '08/2024',
    'talks.t1.title': 'Khách mời — AI TECH',
    'talks.t1.venue': 'Sự kiện AI TECH',
    'talks.t1.desc': 'Báo cáo mời về AI ứng dụng và học sâu cho doanh nghiệp.',
    'talks.t2.date': '2025',
    'talks.t2.title': 'RIVF 2025 — Trình bày hội nghị',
    'talks.t2.venue': 'Hội nghị Quốc tế RIVF về Công nghệ Tính toán & Truyền thông',
    'talks.t2.desc': 'Trình bày bốn bài (WiFi handover; gán nhãn giao thông YOLOv11; phân vùng u não; phát hiện độ chín trái cây).',
    'talks.t3.date': '2021',
    'talks.t3.title': 'FAIR 2021 — Trình bày hội nghị',
    'talks.t3.venue': 'Hội nghị Quốc gia về Nghiên cứu Cơ bản và Ứng dụng CNTT',
    'talks.t3.desc': 'Trình bày nghiên cứu khoá luận tốt nghiệp — hệ khuyến nghị việc làm cho sinh viên CNTT dựa trên năng lực học tập và nhu cầu doanh nghiệp.',

    'awards.title': 'Giải thưởng & danh hiệu',
    'awards.a1.title': 'Thủ khoa',
    'awards.a1.org': 'Đại học Văn Lang',
    'awards.a1.year': '2019–2020 · 2021–2022',
    'awards.a1.desc': 'Đứng đầu khoá học trong nhiều năm học chương trình Cử nhân.',
    'awards.a2.title': 'Học bổng VLU–AIT',
    'awards.a2.org': 'Đại học Văn Lang × AIT Thái Lan',
    'awards.a2.year': '2022–2024',
    'awards.a2.desc': 'Học bổng toàn phần chương trình Thạc sĩ Khoa học Dữ liệu & TTNT tại Asian Institute of Technology, Thái Lan.',
    'awards.a3.title': 'Học bổng học phí 100% & 50%',
    'awards.a3.org': 'Đại học Văn Lang',
    'awards.a3.year': 'Nhiều học kỳ',
    'awards.a3.desc': 'Học bổng nhiều học kỳ trong chương trình Cử nhân nhờ thành tích học tập.',

    'service.title': 'Hoạt động học thuật',
    'service.s1.date': '06/2025',
    'service.s1.body.html': '<strong>Thư ký</strong> — Hội đồng Bảo vệ Khoá luận tốt nghiệp, Khoa CNTT, VLU.',
    'service.s2.body': 'Phản biện cho các đề tài NCKH và cuộc thi học thuật cấp khoa tại VLU.',
    'service.review.title': 'Phản biện hội nghị',
    'service.review.intro': 'Phản biện / thành viên hội đồng chương trình tại các hội nghị sau:',
    'service.review.icsoftcomp': 'icSoftComp 2025 — International Conference on Soft Computing and its Engineering Applications',
    'service.review.rivf': 'RIVF 2025 — Hội nghị Quốc tế RIVF về Công nghệ Tính toán & Truyền thông',
  },
};

(function () {
  const STORAGE_KEY = 'site-lang';
  const SUPPORTED = ['en', 'vi'];

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || 'en').toLowerCase();
    return nav.startsWith('vi') ? 'vi' : 'en';
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    const dict = I18N[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(';').forEach(function (pair) {
        const parts = pair.split(':');
        if (parts.length === 2 && dict[parts[1].trim()] !== undefined) {
          el.setAttribute(parts[0].trim(), dict[parts[1].trim()]);
        }
      });
    });

    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.textContent = dict['lang.toggle'];
      btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Vietnamese' : 'Switch to English');
    });

    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('data-i18n-ready', '');
  }

  function bindToggles() {
    document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const next = (document.documentElement.lang === 'vi') ? 'en' : 'vi';
        applyLang(next);
      });
    });
  }

  // Apply ASAP — don't wait for DOMContentLoaded if doc already parsed
  function init() {
    applyLang(getInitialLang());
    bindToggles();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
