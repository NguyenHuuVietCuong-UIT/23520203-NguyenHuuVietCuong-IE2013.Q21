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

**4. Kết quả đầu ra (Output)**
- **Kết nối thành công MongoDB Atlas qua Compass:**
  ![Kết nối thành công](Lab01/Minh%20chứng/Kết%20nối%20thành%20công.png) 
- **Thực thi lệnh:**
  ![Các lệnh đã sử dụng](/Lab01/script.js)
  ![Kết quả 2.1-2.4](/Lab01/Minh%20chứng/2.1-2.4.png)
  ![Kết quả 2.5-2.6.1](Lab01/Minh%20chứng/2.5-2.6.1.png)
  ![Kết quả 2.6.2](/Lab01/Minh%20chứng/2.6.2.png)
  ![Kết quả 2.7-2.8](/Lab01/Minh%20chứng/2.7-2.8.png)
  ![Kết quả 2.9](/Lab01/Minh%20chứng/2.9.png)
  ![Kết quả 2.10](/Lab01/Minh%20chứng/2.10.png)

**5. Giải thích ngắn gọn phần chính đã thực hiện**
- **Thiết lập:** Đã tạo Cluster, tải Sample Dataset. Cấu hình *Network Access (Allow Access From Anywhere)* và tạo *Database User* để xử lý các lỗi kết nối (SSL alert 80 và bad auth).
- **Thao tác dữ liệu (CRUD):** - Tạo Database `23520203-ie213` và Collection `employees`.
  - Dùng `createIndex` thiết lập khóa unique.
  - Sử dụng `$and`, `$gt`, `$lt` để lọc dữ liệu; `$set`, `$unset` để cập nhật/xóa trường dữ liệu.
  - Dùng pipeline `aggregate` với `$group`, `$sum`, `$avg` để thống kê dữ liệu.