DROP DATABASE IF EXISTS `restaurant_system`;
CREATE DATABASE IF NOT EXISTS `restaurant_system`;
USE `restaurant_system`;

DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE IF NOT EXISTS `restaurant`(
	`res_id` 			INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `res_name` 			NVARCHAR(100) NOT NULL,
    `res_address` 		NVARCHAR(100) NOT NULL,
    `res_description` 	TEXT NOT NULL,
    `res_hotline` 		NVARCHAR(10) DEFAULT NULL,
    `res_img` 			TEXT NOT NULL
    
);

INSERT INTO `restaurant`(`res_name`,`res_address`, `res_hotline`, `res_img`,`res_description`)
VALUE ('Bò Tơ Quán Mộc - Hoàng Quốc Việt', 'Tầng 1, Tòa nhà CT2A, KĐT Nam Cường, Ngõ 234 Hoàng Quốc Việt, Q. Bắc Từ Liêm','9876543210','https://pasgo.vn/Upload/anh-chi-tiet/nha-hang-bo-to-quan-moc-hoang-quoc-viet-9-normal-1156698912632.jpg', 'Ẩm thực Việt vốn phong phú và đa dạng, với mỗi món ăn lại là một trải nghiệm, một câu chuyện hay một đặc trưng riêng của vùng miền… Trong số đó, những món ăn đồng quê tuy đơn giản, mộc mạc nhưng luôn nhận được những cảm tình thật đặc biệt của thực khách, bởi nó mang cả hồn quê của những ngày xưa cũ vào trong hương vị từng món ăn.

Nằm tại tầng 1, tòa nhà CT2A, KĐT Nam Cường, ngõ 234 Hoàng Quốc Việt, quận Bắc Từ Liêm, nhà hàng Bò Tơ Quán Mộc là điểm hẹn cho những tâm hồn đồng điệu, cho những người muốn tìm đến sự giản đơn, tìm đến những món ăn mang đậm hương vị đồng quê Việt. Qua thực đơn của Bò Tơ Quán Mộc, bạn có thể nhận thấy khá nhiều món ăn mà nguyên liệu của chúng bắt nguồn từ đồng ruộng như: ếch đồng, cua đồng… nhưng đặc biệt nhất thì phải nhắc tới các món ăn từ bò tơ. Từ nguyên liệu bò tơ tươi ngon tuyển chọn từ Mộc Châu, các đầu bếp của Bò Tơ Quán Mộc Hoàng Quốc Việt đã biến tấu thành nhiều món ăn vừa dậy hương thơm vừa giữ được vị quê nhà, chẳng hạn như: Bò tơ cuốn rau rừng, Bò cháy tiêu xanh, Bò nướng than hoa, Bê chao Mộc Châu...

Đâu chỉ có món ăn mang hương vị đồng quê mà cả không gian nhà hàng cũng gợi nhớ đến một góc làng quê Bắc Bộ cho thực khách. Sở hữu 1 tầng rộng lớn với sức chứa lên tới 320 khách, không gian của Bò Tơ Quán Mộc Hoàng Quốc Việt chẳng hề cầu kỳ mà mang những nét tính cách phóng khoáng, chân chất của người miền quê. Từ bàn ghế, hàng rào, những chum, những lọ cho đến các bức vẽ mộc… tất cả đều như mở ra không gian yên bình của một làng quê ngay nơi phố thị.

Với mức giá từ 180.000 đến 220.000 vnđ/người, nhà hàng Bò Tơ Quán Mộc Hoàng Quốc Việt rất phù hợp với những bữa tiệc liên hoan, sinh nhật hay chỉ đơn giản là những bữa ăn ấm áp bên bạn bè, người thân...'),
('Hẻm Quán – Hoàng Cầu', 'Số 151 - 161 Hoàng Cầu, P. Ô Chợ Dừa, Q. Đống Đa','0123456789','https://pasgo.vn/Upload/anh-chi-tiet/hem-quan-66-68-hoang-cau-1-normal-384095427917.jpg','Nằm tại số 151-161 Hoàng Cầu mới, Phường Ô Chợ Dừa, Quận Đống Đa, Hẻm Quán từ lâu đã trở thành địa chỉ ẩm thực quen thuộc của thực khách Thủ đô. Thực khách đến đây – người vì yêu thích các món ngon của miền Nam Bộ, người vì chưa từng thử qua nên tò mò muốn khám phá, nhiều người là khách quen, cũng có nhiều người là khách mới, nhưng điểm chung của họ là đều bước vào với tâm trạng tươi vui và rời đi với nụ cười hài lòng mãn nguyện.

Thương hiệu ẩm thực Nam Bộ đã gắn liền cùng tên tuổi của Hẻm Quán, với những món ăn vừa nghe đã thấy đậm chất miệt vườn phương Nam như Bê chao bản gang, Bò 1 nắng muối kiến, Bò nướng bánh hỏi, Cá đuối nướng, Cơm cháy kho quẹt, Gà tre nướng bia, Gỏi cổ hũ dừa, Lẩu Thái, Set gà Đông Tảo... trong mức giá từ 150.000 đến 300.000 vnđ/người.

Ấn tượng đầu tiên của Hẻm Quán chính là ở không gian rộng lớn, mát mẻ với nhiều cây xanh bao phủ, chim hót líu lo tạo cảm giác yên bình như đang ở giữa một vùng quê Nam Bộ trù phú. Màu sắc chủ đạo bạn dễ thấy ở đây là màu nâu trầm: màu nâu của các bộ bàn ghế gỗ, màu nâu của chụp đèn độc đáo bằng tre nứa bện, nâu cũ của tường gạch thô mộc mạc và nâu trầm của những thân cây lớn được trồng xung quanh. Sở hữu sức chứa 300 khách (03 tầng), Hẻm Quán trở thành điểm đến thú vị cho những buổi gặp gỡ bạn bè, tụ tập cuối tuần hay chỉ đơn giản muốn tìm một không gian yên tĩnh, thưởng thức các món ăn ngon Nam Bộ.' ),
('Quán Ăn Ngon - Hoàng Đạo Thúy', '25T2 Hoàng Đạo Thúy, Tầng 1, Q. Cầu Giấy', '3333333333','https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/quananngonhoangdaothuy/nha-hang-quan-an-ngon-hoang-dao-thuy-14-a.jpg','Suốt từ khi thành lập năm 2005 tới nay, Quán Ăn Ngon vẫn luôn là một địa điểm hấp dẫn để người Việt thêm yêu món ăn quê nhà, một nơi không thể bỏ qua của du khách bốn phương muốn tìm hiểu văn hóa Việt Nam. Vào năm 2009, Quán Ăn Ngon là nhà hàng duy nhất tại Hà Nội lọt vào Top 5 danh sách nhà hàng được ưa chuộng nhất tại Việt Nam do The Miele Guide công bố. Hơn thế nữa, trong số báo của Reuters Life phát hành ở Singapore ngày 10/08/2010 có bài viết về Quán Ăn Ngon khi Quán được một tổ chức chuyên theo dõi hệ thống nhà hàng ở châu Á bình chọn là một trong vài chục nhà hàng ngon nhất ở châu Á và một trong 5 quán ăn ngon nhất ở Việt Nam năm 2010. Và Quán Ăn Ngon - Tầng 1, 25T2 Hoàng Đạo Thúy, Phường Trung Hòa, Quận Cầu Giấy là một chi nhánh của chuỗi nhà hàng.'),
('Lẩu Phan','Số 989 Giải Phóng, quận Hoàng Mai, Hà Nội','1111111111','https://static.topcv.vn/company_covers/qbEk6K0DLwHyr3R4EMDh.jpg','Như đúng tên gọi của mình, Lẩu Phan chọn lẩu làm món ăn đặc trưng và đặt tâm huyết cũng như sự sáng tạo vào nó. Đến với nhà hàng, đón chào thực khách vào hành trình ẩm thực thú vị là các món lẩu độc đáo: Lẩu kim chi, Lẩu Thái, Lẩu măng cay.

Nhiều người mê Lẩu Thái bởi vị chua cay đậm đà, bởi vị cay nồng nàn nhưng đọng lại cuối cùng là những hương vị ngọt ngào khó quên. Dù là lẩu kim chi hay Thái, mỗi loại có một hương vị màu sắc riêng, nhưng lại không có sự khác nhau là mấy về thực đơn đồ nhúng. Vẫn là các loại thịt bò Úc như ba chỉ, gầu, sườn hay thăn,…màu đỏ tươi đẹp mắt dưới những lát cắt tài hoa của đầu bếp nơi đây mà trở nên sinh động hơn.');


DROP TABLE IF EXISTS `food`;
CREATE TABLE IF NOT EXISTS `food`(
	`food_id` 	INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `food_name` NVARCHAR(100) NOT NULL,
    `food_img` 	TEXT NOT NULL,
    `res_id` 	INT UNSIGNED NOT NULL ,
    FOREIGN KEY (`res_id`)	REFERENCES 	`restaurant`(`res_id`) ON DELETE CASCADE ON UPDATE CASCADE
);


-- DROP TABLE IF EXISTS `img`;
-- CREATE TABLE IF NOT EXISTS `img`(
-- 	`img_id` 			INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--     `img_base64` 		TEXT NOT NULL,
--     `img_content_type` 	TEXT NOT NULL,
--     `res_id` 	INT UNSIGNED NOT NULL ,
--     `food_id` 	INT UNSIGNED  NOT NULL,
--      FOREIGN KEY (`food_id`)	REFERENCES 	`food`(`food_id`) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	 FOREIGN KEY (`res_id`)	REFERENCES 	`restaurant`(`res_id`) ON DELETE CASCADE ON UPDATE CASCADE
-- );

INSERT INTO `food`(`food_name`,`food_img`, `res_id`)
VALUE 	('Lẩu cua đồng','https://momkitty.com/wp-content/uploads/2016/10/cach-nau-lau-cua-dong.jpg', 1 ),
		('Bò tơ nhúng lẩu','https://cdn.dealtoday.vn/img/s654x435/eef7450c85e54e7d984b773bda091337.JPG?sign=5Cp-nZ4zy8QFIGWyfZa8KA',1),
        ('Lẩu nấm', 'http://www.foodpanda.vn/wp-content/uploads/2018/10/lau-nam-ashima-7.jpg',1),
        ('Ốc móng tay xào rau muốn','https://cdn.daynauan.info.vn/wp-content/uploads/2018/08/oc-mong-tay-xao-rau-muong.jpg',2),
        ('Hàu nướng phô mai','https://fusionsuitesvungtau.com.vn/wp-content/uploads/cach-lam-hau-nuong-pho-mai-ngon-800-144044.jpg',2),
        ('Nộm sứa','https://moderncook.com.vn/recipes/wp-content/uploads/2020/06/N%E1%BB%99m-s%E1%BB%AFa-c%C3%A0-r%E1%BB%91t-d%C6%B0a-chu%E1%BB%99t-1024x682.jpg',2),
        ('Cơm niêu','https://diachiamthuc.vn/wp-content/uploads/2021/04/com-nieu-da-lat.png',3),
        ('Cơm tấm Sài Gòn','https://digiticket.vn/blog/wp-content/uploads/2021/08/com-tam-sai-gon-6.jpg',3),
        ('Canh cá lóc','https://cachlambep.net/wp-content/uploads/2021/12/Cach-Nau-Canh-Chua-Ca-Loc-Don-Gian-Ma-Ngon.jpg',3),
        ('Sườn chua ngọt','http://cdn.tgdd.vn/Files/2021/12/06/1402490/cach-lam-suon-xao-chua-ngot-kieu-mien-nam-vet-sach-noi-com-202112060401499018.jpg',3),
        ('Set 129k','https://cdn.lauphan.com/photo-storage/myFile-1643523231113.jpeg',4),
        ('Set 179k','https://cdn.lauphan.com/photo-storage/myFile-1643523242290.jpeg',4),
        ('Set 219k','https://cdn.lauphan.com/photo-storage/myFile-1643523250854.jpeg',4),
        ('Buffet Nấm','https://cdn.lauphan.com/photo-storage/myFile-1639712466932.jpeg',4);
        
        
        
SELECT * FROM `restaurant`;

SELECT * FROM `food`;
