# IE213.Q21 - Kỹ thuật phát triển hệ thống Web

## Thông tin sinh viên
- **Họ tên:** Việt Cường
- **MSSV:** 23520203
- **Lớp:** IE213.Q21.1

## Danh sách các Lab
- [x] **Lab 01:** MONGODB - CRUD Operation
- [x] **Lab 02:** Thiết lập Backend với Node và ExpressJS
- [x] **Lab 03:** Hoàn thiện Back-end cho ứng dụng minh hoạ
- [ ] **Lab 04:** [Chưa thực hiện]
- [ ] **Lab 05:** [Chưa thực hiện]
- [ ] **Lab 06:** [Chưa thực hiện]

---

## Chi tiết các Lab

### Lab 01: MONGODB - CRUD Operation

**1. Mục tiêu bài thực hành**
- Thiết lập môi trường cơ sở dữ liệu trên đám mây với MongoDB Atlas.
- Cài đặt và cấu hình công cụ quản trị MongoDB Compass.
- Thực hành viết các câu lệnh CRUD (Create, Read, Update, Delete) trực tiếp bằng công cụ MONGOSH.

**2. Công cụ / Môi trường sử dụng**
- **Cloud Database:** MongoDB Atlas.
- **Local GUI:** MongoDB Compass.
- **CLI/Shell:** MONGOSH (tích hợp trong Compass).

**3. Cách chạy chương trình**
1. Mở ứng dụng **MongoDB Compass**.
2. Nhập chuỗi kết nối (URI) lấy từ MongoDB Atlas: `mongodb+srv://23520203:<password>@cluster0.9dnmqvx.mongodb.net/` và nhấn **Connect**.
3. Click vào thanh **`>_ MONGOSH`** ở cạnh dưới màn hình để mở cửa sổ dòng lệnh.
4. Copy và dán lần lượt các câu lệnh từ file `Lab0/script.js` vào MONGOSH và nhấn `Enter` để thực thi.

**4. Kết quả thực hiện**
- **Kết nối thành công MongoDB Atlas qua Compass:**
  ![Kết nối thành công](Lab01/Minh%20chứng/Kết%20nối%20thành%20công.png) 
- **Thực thi lệnh:**
  ![Các lệnh đã sử dụng](Lab01/script.js)
  ![Kết quả](Lab01/Minh%20chứng/)

**6. Mức độ hoàn thành**
- Đã hoàn thành: 100% yêu cầu của Lab 01.
- Chưa hoàn thành: Không có.

**7. Khai báo sử dụng AI**
- **Công cụ đã sử dụng:** Google Gemini.
- **Mục đích sử dụng:** Hỗ trợ sửa lỗi môi trường, hỗ trợ viết README.md.
- **Phần được AI hỗ trợ:** 
  - Khắc phục lỗi IP (`SSL alert number 80`) và lỗi xác thực (`bad auth`).
  - Hỗ trợ viết README.md.

---

### Lab 02: Thiết lập Backend với Node và ExpressJS

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

**4. Kết quả thực hiện**
- **Thiết lập môi trường thành công:**
  ![Thiết lập môi trường thành công](Lab02/img/minhchung1.png)
- **Viết code:**
  ![Các file code đã viết](Lab02/movie-reviews/backend/)
  ![Kết quả](Lab02/img/minhchung2.png)

**6. Mức độ hoàn thành**
- Đã hoàn thành: 100% yêu cầu của Lab 02.
- Chưa hoàn thành: Không có.

**7. Khai báo sử dụng AI**
- **Công cụ đã sử dụng:** Google Gemini.
- **Mục đích sử dụng:** Hỗ trợ viết README.md.
- **Phần được AI hỗ trợ:** 
  - Hỗ trợ viết README.md.

---

### Lab 03: [Tên bài thực hành Lab 03]
**1. Mục tiêu bài thực hành**
- Xây dựng hoàn chỉnh các API xử lý tính năng đánh giá (review) phim.
- Hiểu sâu sắc sự kết nối giữa các phần Controller, Router, và Data Access Object (DAO).
- Thực hành gửi yêu cầu HTTP bằng các phương thức GET, POST, PUT, DELETE từ máy khách lên máy chủ.
- Vận dụng Aggregation Framework trong MongoDB để truy vấn và kết nối nhiều Collection.

**2. Công cụ / Môi trường sử dụng**
- **Ngôn ngữ / Nền tảng:** Node.js.
- **Framework/Thư viện:** Express.js, MongoDB Node.js Driver.
- **Database:** MongoDB Atlas.
- **Công cụ kiểm thử API:** Postman.

**3. Cách chạy chương trình**
1. Mở Terminal tại thư mục chứa source code backend: `Lab03/movie-reviews/backend`.
2. Chạy lệnh `npx nodemon index.js` để khởi động máy chủ.
3. Mở ứng dụng Postman.
4. Gửi các Request tương ứng (GET, POST, PUT, DELETE) với định dạng body JSON đến các đường dẫn `/review`, `/id/:id`, `/ratings` để kiểm tra kết quả.

**4. Kết quả thực hiện**
- **Thực thi các API thành công bằng Postman:**
  ![Test API POST Review](Lab03/img/3.6.1.png)
  ![Test API PUT Review](Lab03/img/3.6.2.png)
  ![Test API DELETE Review](Lab03/img/3.6.3.png)
  ![Test API GET Ratings](Lab03/img/4.4.1.png)
  ![Test API GET Movies](Lab03/img/4.4.2.png)

**6. Mức độ hoàn thành**
- Đã hoàn thành: 100% yêu cầu của Lab 03.
- Chưa hoàn thành: Không có.

**7. Khai báo sử dụng AI**
- **Công cụ đã sử dụng:** Google Gemini.
- **Mục đích sử dụng:** Hỗ trợ viết README.md.
- **Phần được AI hỗ trợ:** 
  - Hỗ trợ viết README.md.

---

### Lab 04: [Tên bài thực hành Lab 04]
**1. Mục tiêu bài thực hành**
- Hiểu được cách thiết lập Frontend trong kiến trúc MERN stack với ReactJS.
- Giới thiệu và làm quen với các package hỗ trợ UI và Routing (Bootstrap, React Router DOM).
- Thực hành xây dựng thanh Navigation Header bar với React-Bootstrap.
- Nắm bắt cách phân chia Component và thiết lập định tuyến cơ bản cho ứng dụng.

**2. Công cụ / Môi trường sử dụng**
- **Frontend Framework:** ReactJS.
- **UI Library:** Bootstrap, React-Bootstrap.
- **Routing:** React-Router-DOM (v5).
- **Môi trường chạy:** Node.js, npm.

**3. Cách chạy chương trình**
1. Mở Terminal và di chuyển vào thư mục frontend: `Lab04/movie-reviews/frontend`.
2. Cài đặt các package cần thiết: `npm install react-bootstrap bootstrap react-router-dom@5.3.4`.
3. Khởi chạy ứng dụng: `npm start`.
4. Truy cập giao diện tại: `http://localhost:3000`.

**4. Kết quả thực hiện**
- **Giao diện thanh Navigation (Trạng thái Login):**
  ![Trạng thái Login](Lab04/img/navbar-login.png) 
- **Giao diện thanh Navigation (Trạng thái Logout User):**
  ![Trạng thái Logout](Lab04/img/navbar-logout.png)

**6. Mức độ hoàn thành**
- Đã hoàn thành: 100% yêu cầu của Lab 04.
- Chưa hoàn thành: Không có.

**7. Khai báo sử dụng AI**
- **Công cụ đã sử dụng:** Google Gemini.
- **Mục đích sử dụng:** Hỗ trợ viết README.md.
- **Phần được AI hỗ trợ:** 
  - Hỗ trợ viết README.md.
---

### Lab 05: [Tên bài thực hành Lab 05]
- **Mục tiêu:** [Chưa thực hiện]
- **Trạng thái:** [Chưa thực hiện]

---

### Lab 06: [Tên bài thực hành Lab 06]
- **Mục tiêu:** [Chưa thực hiện]
- **Trạng thái:** [Chưa thực hiện]