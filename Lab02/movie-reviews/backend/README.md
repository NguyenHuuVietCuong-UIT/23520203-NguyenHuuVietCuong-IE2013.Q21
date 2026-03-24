### Lab 01: Thiết lập Backend với Node và ExpressJS

**1. Mục tiêu bài thực hành**
- Thiết lập môi trường phát triển Node.js.
- Thực hành tạo các tệp tin `server.js`, `index.js`, `api/movies.route.js`.
- Cấu hình kiến trúc Controller và DAO (Data Access Object) để kết nối với MongoDB Atlas.

**2. Công cụ / Môi trường sử dụng**
- **Ngôn ngữ / Nền tảng:** Node.js, npm.
- **Framework/Thư viện:** Express.js, MongoDB Node.js Driver, CORS, dotenv, Nodemon.
- **Database:** MongoDB Atlas (Dataset `sample_mflix`).
- **IDE:** Visual Studio Code.

**3. Cách chạy chương trình**
1. Mở Terminal và di chuyển vào thư mục dự án: `Lab02/movie-reviews/backend`.
2. Chạy lệnh `npm install` để cài đặt các thư viện phụ thuộc (dependencies).
3. Tạo file `.env` ngang hàng với tệp `server.js` và cấu hình chuỗi kết nối:
   - `MOVIEREVIEWS_DB_URI=mongodb+srv://<username>:<password>@cluster.../sample_mflix`
   - `MOVIEREVIEWS_NS=sample_mflix`
   - `PORT=3000`
4. Chạy lệnh `npx nodemon index.js` (hoặc `npm run dev`) để khởi động máy chủ.
5. Mở trình duyệt và truy cập vào đường dẫn: `http://localhost:3000/api/v1/movies`.

**4. Kết quả đầu ra (Output)**
- **Thiết lập môi trường thành công:**
  ![Thiết lập môi trường thành công](Lab02/img/minhchung1.png)
- **Viết code:**
  ![Các file code đã viết](Lab02/movie-reviews/backend/)
  ![Kết quả](Lab02/img/minhchung2.png)


**5. Giải thích ngắn gọn phần chính đã thực hiện**
- **Thiết lập:** Khởi tạo dự án bằng lệnh `npm init`, cập nhật file `package.json` với trường `"type": "module"` để sử dụng cú pháp ES Modules.
- **Xây dựng cấu trúc Backend:**
  - `server.js`: Khởi tạo Express app, cấu hình middleware `cors` và định tuyến `/api/v1/movies`.
  - `dao/moviesDAO.js`: Viết hàm `injectDB` để kết nối database và `getMovies` để lấy dữ liệu. Đã xử lý thêm khối `catch` để tránh lỗi crash server khi truy xuất thất bại.
  - `api/movies.controller.js`: Xử lý Request từ trình duyệt, gọi tới DAO và trả về Response dưới dạng chuỗi JSON.
  - `index.js`: File gốc để kết nối cơ sở dữ liệu và khởi động máy chủ lắng nghe ở cổng 3000.