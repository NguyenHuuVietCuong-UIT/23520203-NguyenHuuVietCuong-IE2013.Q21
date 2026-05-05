### Lab 05: XÂY DỰNG FRONTEND VỚI REACTJS

**1. Mục tiêu bài thực hành**
- Hiểu được cách kết nối dữ liệu từ Frontend (ReactJS) tới Backend (Node.js/Express).
- Cài đặt và sử dụng package `axios` để thực hiện các lời gọi dịch vụ API (như GET, POST, PUT, DELETE).
- Thực hành tạo các form nhập liệu để người dùng tìm kiếm dữ liệu (theo tên phim và phân loại đánh giá - rating).
- Hiển thị danh sách dữ liệu bằng các component của React-Bootstrap (như `Card`, `Row`, `Col`).
- Làm quen và áp dụng thực tế các React Hook quan trọng là `useState()` và `useEffect()` trong việc quản lý trạng thái và vòng đời Component.
- Hiển thị trang chi tiết về một bộ phim và danh sách các đánh giá (reviews) có liên quan.

**2. Công cụ / Môi trường sử dụng**
- **Frontend Framework:** ReactJS.
- **Thư viện gọi API:** Axios.
- **Thư viện định dạng thời gian:** Moment.js.
- **UI Library:** Bootstrap, React-Bootstrap.
- **Môi trường yêu cầu:** Node.js, MongoDB Atlas (Yêu cầu phải bật song song máy chủ Backend để Frontend có thể lấy dữ liệu).

**3. Cách chạy chương trình**
1. Mở terminal, di chuyển vào thư mục Backend (ví dụ: `Lab05/movie-reviews/backend`), đảm bảo cấu hình đúng cổng trong file `.env` và khởi chạy máy chủ Backend bằng lệnh: `node index.js`.
2. Mở một cửa sổ terminal mới, di chuyển vào thư mục Frontend: `cd Lab05/movie-reviews/frontend`.
3. Cài đặt bổ sung các package cần thiết bằng lệnh: `npm install axios moment`.
4. Đảm bảo file `src/services/movies.js` ở Frontend đã được cấu hình đường dẫn `http://localhost:...` khớp đúng với cổng mà Backend đang chạy.
5. Khởi chạy ứng dụng web React bằng lệnh: `npm start`.
6. Trình duyệt sẽ mở tại địa chỉ `http://localhost:3000` để bạn kiểm tra ứng dụng.

**4. Kết quả đầu ra (Output)**
- **Giao diện trang web trước khi tìm kiếm:**
  ![Giao diện trang web trước khi tìm kiếm](/Lab05/img/Hình%20ảnh%20chưa%20search.png)
- **Giao diện sau khi tìm kiếm:**
  ![Giao diện sau khi tìm kiếm](/Lab05/img/Hình%20ảnh%20search%20train.png)

**5. Giải thích ngắn gọn phần chính đã thực hiện**
- **Kết nối Backend:** Tạo class `MovieDataService` bên trong thư mục `services` để gom nhóm các phương thức gọi API bằng `axios` (lấy danh sách phim, tìm kiếm, lấy phân loại rating, CRUD review).
- **Thao tác Frontend (MoviesList):** 
  - Sử dụng `useState` để quản lý trạng thái biến `movies`, `searchTitle`, `searchRating`. 
  - Gọi API lấy dữ liệu phim ngay khi load trang thông qua hook `useEffect`. 
  - Tạo giao diện hiển thị danh sách phim dạng lưới bằng `<Card>` của React-Bootstrap.
  - Tích hợp logic tìm kiếm: gửi truy vấn `title` hoặc `rated` xuống Backend để lọc kết quả hiển thị.
- **Thao tác Frontend (Movie Detail):** 
  - Bắt tham số ID từ URL (`props.match.params.id`) để gọi API lấy chi tiết một bộ phim cụ thể cùng mảng reviews đi kèm.
  - Dùng hàm `map()` duyệt qua mảng reviews để in ra tên, nội dung, và sử dụng thư viện `momentjs` để định dạng lại ngày tháng chuẩn (VD: *18th April 2022*). Bổ sung điều kiện chỉ hiển thị nút Edit/Delete đối với review do chính người dùng hiện tại (user) viết.