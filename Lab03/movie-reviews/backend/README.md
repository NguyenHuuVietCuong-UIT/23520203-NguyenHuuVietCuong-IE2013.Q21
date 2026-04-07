### Lab 03: Hoàn thiện Back-end cho ứng dụng minh hoạ

**1. Mục tiêu bài thực hành**
- Xây dựng hoàn chỉnh các API xử lý tính năng đánh giá (review) phim.
- Hiểu sâu sắc sự kết nối giữa các phần Controller, Router, và Data Access Object (DAO) trong kiến trúc source code.
- Thực hành gửi yêu cầu HTTP bằng các phương thức cơ bản (GET, POST, PUT, DELETE) từ máy khách lên máy chủ.
- Vận dụng Aggregation Framework trong MongoDB để truy xuất và kết nối dữ liệu từ nhiều Collection khác nhau.

**2. Công cụ / Môi trường sử dụng**
- **Ngôn ngữ / Nền tảng:** Node.js.
- **Framework/Thư viện:** Express.js, MongoDB Node.js Driver.
- **Công cụ kiểm thử API:** Postman.
- **Database:** MongoDB Atlas (Dataset `sample_mflix`).

**3. Cách chạy chương trình**
1. Mở Terminal và trỏ vào thư mục chứa source code backend : `Lab03/movie-reviews/backend`.
2. Đảm bảo file `.env` chứa chuỗi kết nối DB (`MOVIEREVIEWS_DB_URI`) vẫn hoạt động.
3. Chạy lệnh `npx nodemon index.js` (hoặc `node index.js`) để chạy máy chủ.
4. Mở công cụ Insomnia, tạo các HTTP Request với địa chỉ URL `http://localhost:3000/api/v1/movies/...` (POST/PUT/DELETE tới `/review`, GET tới `/ratings` và `/id/:id`) kết hợp truyền data dạng JSON ở thẻ Body.

**4. Kết quả đầu ra (Output)**
- **Hoạt động trơn tru các endpoint:**
  ![Kết quả POST Review](/Lab03/img/3.6.1.png)
  ![Kết quả PUT Review](/Lab03/img/3.6.2.png)
  ![Kết quả DELETE Review](/Lab03/img/3.6.3.png)
  ![Kết quả GET Ratings](/Lab03/img/4.4.1.png)
  ![Kết quả GET Movie ID](/Lab03/img/4.4.2.png)

**5. Giải thích ngắn gọn phần chính đã thực hiện**
- **Định tuyến (Router):** Cập nhật file `movies.route.js` để tích hợp định tuyến dạng chuỗi (Route Chaining) `.route('/review').post(...).put(...).delete(...)`, giúp code gọn gàng và dễ bảo trì.
- **Xây dựng Review Modules:** Tạo `reviews.controller.js` để tiếp nhận body JSON từ Client và `reviews.DAO.js` chứa các lệnh MongoDB tương ứng (như `insertOne`, `updateOne`, `deleteOne`) để thay đổi dữ liệu database. Cuối cùng, gọi kết nối `ReviewsDAO.injectDB` tại `index.js`.
- **Cập nhật Movies Modules:** Bổ sung phương thức `getRatings` sử dụng `.distinct("rated")` để lấy danh sách dán nhãn độc nhất, và phương thức `getMovieById` sử dụng ống dẫn `.aggregate()` kết hợp toán tử `$match` và `$lookup` nhằm gộp các comment từ collection `reviews` vào chung với kết quả chi tiết phim trả về.