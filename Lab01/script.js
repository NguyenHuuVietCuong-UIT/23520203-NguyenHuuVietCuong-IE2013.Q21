// 23520203-2.1 Tạo cơ sở dữ liệu có tên MSSV-IE213
use 23520203 - ie213
// 23520203-2.2 Thêm các document vào collection có tên là employees trong db vừa được tạo ở trên
db.employees.insertMany([
    { "id": 1, "name": { "first": "John", "last": "Doe" }, "age": 48 },
    { "id": 2, "name": { "first": "Jane", "last": "Doe" }, "age": 16 },
    { "id": 3, "name": { "first": "Alice", "last": "A" }, "age": 32 },
    { "id": 4, "name": { "first": "Bob", "last": "B" }, "age": 64 }
])
// 23520203-2.3 Biến trường id trong các document trên trở thành duy nhất
db.employees.createIndex({ id: 1 }, { unique: true })
// 23520203-2.4 Viết lệnh để tìm document có firstname là John và lastname là Doe
db.employees.find({ "name.first": "John", "name.last": "Doe" })
// 23520203-2.5 Viết lệnh để tìm những người có tuổi trên 30 và dưới 60
db.employees.find({ $and: [{ age: { $gt: 30 } }, { age: { $lt: 60 } }] })
// 23520203-2.6 Thêm các document vào collection sau đó viết lệnh để tìm tất cả các document có middle name
db.employees.insertMany([
    { "id": 5, "name": { "first": "Rooney", "middle": "K", "last": "A" }, "age": 30 },
    { "id": 6, "name": { "first": "Ronaldo", "middle": "T", "last": "B" }, "age": 60 }
])
db.employees.find({ "name.middle": { $exists: true } })
// 23520203-2.7 Hãy xoá middlename ra khỏi các document đó
db.employees.updateMany(
    { "name.middle": { $exists: true } },
    { $unset: { "name.middle": "" } }
)
// 23520203-2.8 Thêm trường dữ liệu organization: "UIT" vào tất cả các document
db.employees.updateMany({}, { $set: { organization: "UIT" } })
// 23520203-2.9 Điều chỉnh organization của nhân viên có id là 5 và 6 thành "USSH"
db.employees.updateMany(
    { id: { $in: [5, 6] } },
    { $set: { organization: "USSH" } }
)
// 23520203-2.10 Viết lệnh để tính tổng tuổi và tuổi trung bình của nhân viên thuộc 2 organization là UIT và USSH.
db.employees.aggregate([
    {
        $group: {
            _id: "$organization",
            tongTuoi: { $sum: "$age" },
            tuoiTrungBinh: { $avg: "$age" }
        }
    }
])