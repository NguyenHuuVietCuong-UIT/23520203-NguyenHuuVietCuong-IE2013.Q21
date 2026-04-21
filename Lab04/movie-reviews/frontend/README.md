### Lab 04: THIẾT LẬP FRONTEND VỚI REACTJS

**1. Mục tiêu bài thực hành**
- Hiểu được cách thiết lập Frontend trong kiến trúc MERN stack với ReactJS.
- Giới thiệu và làm quen với một số package chủ yếu hỗ trợ xây dựng mã nguồn Frontend (Bootstrap, React Router DOM).
- Thực hành xây dựng thanh Navigation Header bar với sự hỗ trợ của React-Bootstrap.
- Nắm bắt cách phân chia các Component và thiết lập định tuyến (Routing) trong dự án.

**2. Công cụ / Môi trường sử dụng**
- **Frontend Framework:** ReactJS.
- **UI Library:** Bootstrap, React-Bootstrap.
- **Routing:** React-Router-DOM (v5).
- **Môi trường chạy:** Node.js (sử dụng `npm` hoặc `npx`).

**3. Cách chạy chương trình**
1. Mở terminal / cửa sổ dòng lệnh.
2. Di chuyển vào thư mục chứa mã nguồn frontend: `cd Lab04/movie-reviews/frontend` (đường dẫn có thể thay đổi tùy thư mục lưu).
3. Cài đặt các thư viện và package cần thiết bằng lệnh: `npm install` (hoặc `npm i react-bootstrap bootstrap react-router-dom@5.3.4`).
4. Khởi chạy ứng dụng web React bằng lệnh: `npm start`.
5. Trình duyệt sẽ tự động mở hoặc bạn có thể truy cập thủ công vào địa chỉ `http://localhost:3000` để xem ứng dụng.

**4. Kết quả đầu ra (Output)**
- **Giao diện thanh Navigation (Trạng thái chưa đăng nhập - Login):**
  ![Trạng thái Login](/Lab04/img/navbar-login.png) 
- **Giao diện thanh Navigation (Trạng thái đã đăng nhập - Logout User):**
  ![Trạng thái Logout](/Lab04/img/navbar-logout.png)

**5. Giải thích ngắn gọn phần chính đã thực hiện**
- **Thiết lập:** Khởi tạo template dự án React bằng `create-react-app`. Cài đặt các thư viện hỗ trợ giao diện và điều hướng (`bootstrap`, `react-bootstrap`, `react-router-dom`).
- **Thao tác Frontend:** - Tạo thư mục `components` và khởi tạo các file thành phần cơ bản (`movies-list.js`, `movie.js`, `add-review.js`, `login.js`).
  - Xây dựng thanh điều hướng `Navbar` linh hoạt (hiển thị nút Login/Logout tùy trạng thái) bằng cách sử dụng React hook `useState` để lưu giữ trạng thái `user`.
  - Thiết lập định tuyến (Routing) trong file `App.js` sử dụng thẻ `<Switch>` và `<Route>` để chuyển hướng chính xác đến 4 component tương ứng.