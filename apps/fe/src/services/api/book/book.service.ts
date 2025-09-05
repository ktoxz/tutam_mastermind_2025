import { TErrorFirst } from '@/types';
import { Book } from '@packages/models';

const books: Book[] = [
	{
		_id: 'book-1',
		title: 'Hiểu Về Trái Tim',
		author: 'Thiền sư Minh Niệm',
		summary:
			'Cuốn sách mở cửa thế giới cảm xúc của mỗi người, giúp hiểu rõ về trái tim, tâm hồn để chữa lành những tổn thương và đau khổ.',
		image: 'https://i.imgur.com/idoeqc1.jpg',
		slug: 'hieu-ve-trai-tim',
		mood_id: 'mood-2',
		content: `
## Hiểu Về Trái Tim - Chữa Lành và Thấu Hiểu

**Tóm tắt:** Cuốn sách "Hiểu Về Trái Tim" của Thiền sư Minh Niệm là một hành trình khám phá và chữa lành những vết thương sâu kín trong tâm hồn. Tác phẩm này không chỉ mở ra cánh cửa để thấu hiểu những cảm xúc phức tạp mà còn cung cấp những phương pháp thực hành giúp mỗi người tìm thấy sự bình yên và hạnh phúc thực sự.

**Nội dung chính:**

-   **Chữa lành:** Sách tập trung vào việc nhận diện và chữa lành những tổn thương tâm lý từ quá khứ, giúp người đọc giải phóng khỏi những gánh nặng và đau khổ.
-   **Thấu hiểu:** Tác phẩm giúp người đọc hiểu rõ hơn về cơ chế hoạt động của tâm trí và trái tim, từ đó có cái nhìn sâu sắc hơn về bản thân và thế giới xung quanh.
-   **Thực hành:** Sách cung cấp những bài tập và phương pháp thiền định đơn giản nhưng hiệu quả, giúp người đọc rèn luyện khả năng tự nhận thức và điều chỉnh cảm xúc.

**Mood:** Buồn, Bình yên

"Hiểu Về Trái Tim" là một nguồn động viên lớn lao cho những ai đang tìm kiếm sự chữa lành và bình yên trong cuộc sống.
`,
	},
	{
		_id: 'book-2',
		title: 'Dọn Nhà, Dọn Cửa, Gột Rửa Trái Tim',
		author: 'Shoukei Matsumoto',
		summary:
			'Thông qua nghi thức dọn dẹp, cuốn sách truyền tải thông điệp tu hành để bồi dưỡng vẻ đẹp tâm hồn và loại bỏ đám mây mù ẩn sâu trong trái tim.',
		image: 'https://i.imgur.com/NO51dM2.jpg',
		slug: 'don-nha-don-cua-got-rua-trai-tim',
		mood_id: 'mood-2',
		content: `
## Dọn Nhà, Dọn Cửa, Gột Rửa Trái Tim - Thanh Lọc Tâm Hồn

**Tóm tắt:** "Dọn Nhà, Dọn Cửa, Gột Rửa Trái Tim" của Shoukei Matsumoto không chỉ là một cuốn sách về dọn dẹp mà còn là một hành trình tu tập tâm linh. Tác phẩm này khám phá sự liên kết sâu sắc giữa không gian sống và trạng thái tinh thần, khuyến khích người đọc thanh lọc tâm hồn thông qua việc dọn dẹp và sắp xếp không gian xung quanh.

**Nội dung chính:**

-   **Nghi thức dọn dẹp:** Sách giới thiệu những nghi thức dọn dẹp truyền thống của Nhật Bản, giúp người đọc thực hiện công việc này một cách ý thức và trân trọng.
-   **Thông điệp tu hành:** Tác phẩm truyền tải những thông điệp sâu sắc về sự buông bỏ, chấp nhận và trân trọng những gì mình đang có.
-   **Bồi dưỡng tâm hồn:** Sách khuyến khích người đọc bồi dưỡng vẻ đẹp tâm hồn thông qua việc tạo ra một không gian sống sạch sẽ, gọn gàng và hài hòa.

**Mood:** Bình yên, Tĩnh lặng

"Dọn Nhà, Dọn Cửa, Gột Rửa Trái Tim" là một nguồn cảm hứng tuyệt vời cho những ai muốn tìm thấy sự bình yên và hạnh phúc trong cuộc sống hàng ngày.
`,
	},
	{
		_id: 'book-3',
		title: 'Tối Giản Tâm Trí',
		author: 'S.J. Scott & Barrie Davenport',
		summary:
			'Cuốn sách giúp giải phóng khỏi vòng xoáy suy nghĩ phức tạp, tối giản hóa tâm trí để tìm thấy sự hòa hợp và hạnh phúc thực sự.',
		image: 'https://i.imgur.com/uSuJH8r.jpg',
		slug: 'toi-gian-tam-tri',
		mood_id: 'mood-4',
		content: `
## Tối Giản Tâm Trí - Giải Phóng Khỏi Suy Nghĩ Phức Tạp

**Tóm tắt:** "Tối Giản Tâm Trí" của S.J. Scott & Barrie Davenport là một cuốn sách hướng dẫn thực tế giúp người đọc giải phóng khỏi vòng xoáy suy nghĩ phức tạp và tìm thấy sự hòa hợp trong tâm trí. Tác phẩm này cung cấp những công cụ và kỹ thuật đơn giản để tối giản hóa suy nghĩ, giảm căng thẳng và tăng cường sự tập trung.

**Nội dung chính:**

-   **Giải phóng suy nghĩ:** Sách giúp người đọc nhận diện và loại bỏ những suy nghĩ tiêu cực, lo lắng và ám ảnh.
-   **Tối giản hóa tâm trí:** Tác phẩm cung cấp những phương pháp để đơn giản hóa cuộc sống, giảm bớt những áp lực và trách nhiệm không cần thiết.
-   **Tìm thấy hạnh phúc:** Sách khuyến khích người đọc tập trung vào những điều quan trọng nhất trong cuộc sống và tìm thấy hạnh phúc trong sự giản đơn.

**Mood:** Tĩnh lặng, Bình yên

"Tối Giản Tâm Trí" là một nguồn tài liệu quý giá cho những ai muốn giảm bớt căng thẳng và tìm thấy sự bình yên trong cuộc sống hiện đại.
`,
	},
	{
		_id: 'book-4',
		title: 'Lối Sống Tối Giản Của Người Nhật',
		author: 'Sasaki Fumio',
		summary:
			'Cắt giảm đồ đạc không cần thiết để tập trung vào hạnh phúc, tối giản trong suy nghĩ và tư duy để sống đơn giản hơn.',
		image: 'https://i.imgur.com/UzjmoH0.jpg',
		slug: 'loi-song-toi-gian-cua-nguoi-nhat',
		mood_id: 'mood-4',
		content: `
## Lối Sống Tối Giản Của Người Nhật - Hạnh Phúc Từ Sự Đơn Giản

**Tóm tắt:** "Lối Sống Tối Giản Của Người Nhật" của Sasaki Fumio là một cuốn sách truyền cảm hứng về cách sống đơn giản và hạnh phúc hơn bằng cách loại bỏ những thứ không cần thiết. Tác phẩm này khám phá triết lý tối giản của người Nhật và cung cấp những lời khuyên thiết thực để áp dụng nó vào cuộc sống hàng ngày.

**Nội dung chính:**

-   **Cắt giảm đồ đạc:** Sách hướng dẫn người đọc cách loại bỏ những đồ đạc không cần thiết và tạo ra một không gian sống gọn gàng, thoải mái.
-   **Tối giản suy nghĩ:** Tác phẩm khuyến khích người đọc đơn giản hóa suy nghĩ và tập trung vào những điều quan trọng nhất trong cuộc sống.
-   **Tìm thấy hạnh phúc:** Sách giúp người đọc nhận ra rằng hạnh phúc không nằm ở những thứ vật chất mà ở sự giản đơn và tự do.

**Mood:** Tĩnh lặng, Bình yên

"Lối Sống Tối Giản Của Người Nhật" là một nguồn động viên lớn lao cho những ai muốn thay đổi cuộc sống và tìm thấy hạnh phúc trong sự giản đơn.
`,
	},
	{
		_id: 'book-5',
		title: 'Niksen – Sức Mạnh Của Việc Tạm Dừng',
		author: 'Annette Lavrijsen',
		summary:
			'Triết lý đơn giản của Hà Lan cổ vũ sống chậm lại, thư giãn và mơ mộng để thoát khỏi tình trạng kiệt sức và làm chủ cuộc sống.',
		image: 'https://i.imgur.com/PPmSlXB.jpg',
		slug: 'niken-suc-manh-cua-viec-tam-dung',
		mood_id: 'mood-4',
		content: `
## Niksen – Sức Mạnh Của Việc Tạm Dừng - Thư Giãn và Tái Tạo Năng Lượng

**Tóm tắt:** "Niksen – Sức Mạnh Của Việc Tạm Dừng" của Annette Lavrijsen giới thiệu triết lý Niksen của Hà Lan, khuyến khích mọi người sống chậm lại, thư giãn và mơ mộng để thoát khỏi tình trạng kiệt sức và làm chủ cuộc sống. Tác phẩm này khám phá những lợi ích của việc tạm dừng và cung cấp những gợi ý để thực hành Niksen trong cuộc sống hàng ngày.

**Nội dung chính:**

-   **Sống chậm lại:** Sách khuyến khích người đọc giảm bớt áp lực công việc và dành thời gian cho bản thân.
-   **Thư giãn và mơ mộng:** Tác phẩm giới thiệu những phương pháp thư giãn đơn giản như thiền định, yoga và đi bộ trong thiên nhiên.
-   **Tái tạo năng lượng:** Sách giúp người đọc nhận ra rằng việc tạm dừng là cần thiết để tái tạo năng lượng và duy trì sức khỏe tinh thần.

**Mood:** Tĩnh lặng, Bình yên

"Niksen – Sức Mạnh Của Việc Tạm Dừng" là một lời nhắc nhở nhẹ nhàng về tầm quan trọng của việc chăm sóc bản thân và tìm thấy sự bình yên trong cuộc sống.
`,
	},
	{
		_id: 'book-6',
		title: 'Nghĩ Đơn Giản - Sống Đơn Thuần',
		author: 'Tolly Burkan',
		summary:
			'Khuyến khích hướng đến cuộc sống đơn giản hơn bằng cách giảm bớt đồ đạc, tối ưu hóa không gian sống để tìm thấy sự hài lòng và hạnh phúc.',
		image: 'https://i.imgur.com/DIq3C4p.jpg',
		slug: 'nghi-don-gian-song-don-thuan',
		mood_id: 'mood-4',
		content: `
## Nghĩ Đơn Giản - Sống Đơn Thuần - Hạnh Phúc Từ Sự Giản Dị

**Tóm tắt:** "Nghĩ Đơn Giản - Sống Đơn Thuần" của Tolly Burkan là một cuốn sách hướng dẫn thực tế về cách đơn giản hóa cuộc sống và tìm thấy hạnh phúc trong sự giản dị. Tác phẩm này khuyến khích người đọc giảm bớt đồ đạc, tối ưu hóa không gian sống và tập trung vào những điều quan trọng nhất trong cuộc sống.

**Nội dung chính:**

-   **Giảm bớt đồ đạc:** Sách hướng dẫn người đọc cách loại bỏ những đồ đạc không cần thiết và tạo ra một không gian sống gọn gàng, thoải mái.
-   **Tối ưu hóa không gian sống:** Tác phẩm cung cấp những lời khuyên về cách sắp xếp và trang trí không gian sống một cách hiệu quả và thẩm mỹ.
-   **Tìm thấy hạnh phúc:** Sách giúp người đọc nhận ra rằng hạnh phúc không nằm ở những thứ vật chất mà ở sự giản đơn và tự do.

**Mood:** Tĩnh lặng, Bình yên

"Nghĩ Đơn Giản - Sống Đơn Thuần" là một nguồn cảm hứng tuyệt vời cho những ai muốn thay đổi cuộc sống và tìm thấy hạnh phúc trong sự giản dị.
`,
	},
	{
		_id: 'book-7',
		title: 'Ikigai - Bí Mật Sống Trường Thọ Và Hạnh Phúc Của Người Nhật',
		author: 'Ken Mogi',
		summary:
			'Triết lý ikigai mang lại hạnh phúc và trường thọ, xây dựng từ 5 trụ cột cơ bản để sống trọn khoảnh khắc hiện tại.',
		image: 'https://i.imgur.com/ThoM4Qk.jpg',
		slug: 'bi-mat-song-truong-tho-va-hanh-phuc-cua-nguoi-nhat',
		mood_id: 'mood-1',
		content: `
## Ikigai - Bí Mật Sống Trường Thọ Và Hạnh Phúc Của Người Nhật - Tìm Kiếm Mục Đích Sống

**Tóm tắt:** "Ikigai - Bí Mật Sống Trường Thọ Và Hạnh Phúc Của Người Nhật" của Ken Mogi khám phá triết lý Ikigai của người Nhật, một khái niệm về mục đích sống và niềm vui trong cuộc sống. Tác phẩm này giúp người đọc tìm thấy Ikigai của riêng mình và sống một cuộc đời ý nghĩa và hạnh phúc hơn.

**Nội dung chính:**

-   **Khám phá Ikigai:** Sách hướng dẫn người đọc cách tìm kiếm Ikigai của mình bằng cách trả lời những câu hỏi quan trọng về đam mê, sở thích, tài năng và giá trị của bản thân.
-   **5 trụ cột của Ikigai:** Tác phẩm giới thiệu 5 trụ cột cơ bản của Ikigai: bắt đầu nhỏ, giải phóng bản thân, hài hòa và bền vững, vui vẻ với hiện tại và nhận thức bản thân.
-   **Sống trọn khoảnh khắc:** Sách khuyến khích người đọc sống trọn khoảnh khắc hiện tại và tận hưởng những điều nhỏ nhặt trong cuộc sống.

**Mood:** Hạnh phúc, Bình yên

"Ikigai - Bí Mật Sống Trường Thọ Và Hạnh Phúc Của Người Nhật" là một nguồn cảm hứng tuyệt vời cho những ai muốn tìm kiếm mục đích sống và sống một cuộc đời ý nghĩa hơn.
`,
	},
	{
		_id: 'book-8',
		title: 'Nghệ Thuật Tối Giản: Có Ít Đi, Sống Nhiều Hơn',
		author: 'Dominique Loreau',
		summary:
			'Khám phá nghệ thuật sống tối giản để hướng đến cuộc sống đơn giản, tốt đẹp hơn trong tâm trí và cơ thể.',
		image: 'https://i.imgur.com/LuNe6Rf.jpg',
		slug: 'nghe-thuat-toi-gian-co-it-di-song-nhieu-hon',
		mood_id: 'mood-4',
		content: `
## Nghệ Thuật Tối Giản: Có Ít Đi, Sống Nhiều Hơn - Đơn Giản Hóa Cuộc Sống

**Tóm tắt:** "Nghệ Thuật Tối Giản: Có Ít Đi, Sống Nhiều Hơn" của Dominique Loreau là một cuốn sách hướng dẫn về cách đơn giản hóa cuộc sống và tìm thấy hạnh phúc trong sự giản dị. Tác phẩm này khuyến khích người đọc loại bỏ những thứ không cần thiết, tập trung vào những điều quan trọng nhất và sống một cuộc đời ý nghĩa hơn.

**Nội dung chính:**

-   **Loại bỏ những thứ không cần thiết:** Sách hướng dẫn người đọc cách loại bỏ những đồ đạc, mối quan hệ và thói quen không cần thiết trong cuộc sống.
-   **Tập trung vào những điều quan trọng nhất:** Tác phẩm khuyến khích người đọc tập trung vào những giá trị, mục tiêu và đam mê của bản thân.
-   **Sống một cuộc đời ý nghĩa hơn:** Sách giúp người đọc nhận ra rằng hạnh phúc không nằm ở những thứ vật chất mà ở sự giản đơn, tự do và ý nghĩa.

**Mood:** Tĩnh lặng, Bình yên

"Nghệ Thuật Tối Giản: Có Ít Đi, Sống Nhiều Hơn" là một nguồn cảm hứng tuyệt vời cho những ai muốn thay đổi cuộc sống và tìm thấy hạnh phúc trong sự giản dị.
`,
	},
	{
		_id: 'book-9',
		title: 'Chữa Lành Đứa Trẻ Bên Trong Bạn',
		author: 'Charles Whitfield',
		summary:
			'Cuốn sách dẫn dắt người đọc khám phá và chữa lành những tổn thương tâm lý từ tuổi thơ, giúp tái kết nối với bản thể chân thật và tìm lại sự bình yên trong tâm hồn.',
		image: 'https://tse1.explicit.bing.net/th/id/OIP.quWujTIombT9r0P7t-9jowHaK9?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', // Cần thay thế bằng URL hình ảnh thực tế
		slug: 'chua-lanh-dua-tre-ben-trong-ban',
		mood_id: 'mood-2',
		content: `
## Chữa Lành Đứa Trẻ Bên Trong Bạn - Vượt Qua Những Tổn Thương Từ Quá Khứ

**Tóm tắt:** "Chữa Lành Đứa Trẻ Bên Trong Bạn" của Charles Whitfield là một cuốn sách sâu sắc và cảm động về cách vượt qua những tổn thương tâm lý từ tuổi thơ. Tác phẩm này giúp người đọc khám phá và chữa lành những vết thương lòng, tái kết nối với bản thể chân thật và tìm lại sự bình yên trong tâm hồn.

**Nội dung chính:**

-   **Khám phá những tổn thương:** Sách hướng dẫn người đọc cách nhận diện và khám phá những tổn thương tâm lý từ tuổi thơ.
-   **Chữa lành vết thương:** Tác phẩm cung cấp những phương pháp và kỹ thuật để chữa lành những vết thương lòng và giải phóng khỏi những cảm xúc tiêu cực.
-   **Tái kết nối với bản thể:** Sách giúp người đọc tái kết nối với bản thể chân thật và tìm lại sự tự tin, yêu thương và hạnh phúc.

**Mood:** Buồn, Bình yên

"Chữa Lành Đứa Trẻ Bên Trong Bạn" là một nguồn động viên lớn lao cho những ai muốn vượt qua những tổn thương từ quá khứ và sống một cuộc đời trọn vẹn hơn.
`,
	},
	{
		_id: 'book-10',
		title: 'Vượt Qua Lo Âu Chữa Lành Tâm Trí',
		author: 'J. Gillihan',
		summary:
			'Hướng dẫn dễ hiểu về liệu pháp nhận thức hành vi (CBT) để kiểm soát trầm cảm và lo âu, giúp người đọc hiểu mối liên hệ giữa suy nghĩ và cảm xúc, từ đó áp dụng kỹ thuật để thoát khỏi trạng thái tiêu cực.',
		image: 'https://tse3.mm.bing.net/th/id/OIP.zAdGQk_3g6TtrzZuWSnwRwHaK2?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', // Cần thay thế bằng URL hình ảnh thực tế
		slug: 'vuot-qua-lo-au-chua-lanh-tam-tri',
		mood_id: 'mood-2',
		content: `
## Vượt Qua Lo Âu Chữa Lành Tâm Trí - Kiểm Soát Cảm Xúc Tiêu Cực

**Tóm tắt:** "Vượt Qua Lo Âu Chữa Lành Tâm Trí" của J. Gillihan là một cuốn sách hướng dẫn dễ hiểu về cách kiểm soát trầm cảm và lo âu bằng liệu pháp nhận thức hành vi (CBT). Tác phẩm này giúp người đọc hiểu mối liên hệ giữa suy nghĩ và cảm xúc, từ đó áp dụng những kỹ thuật để thoát khỏi trạng thái tiêu cực.

**Nội dung chính:**

-   **Liệu pháp nhận thức hành vi (CBT):** Sách giới thiệu những nguyên tắc cơ bản của CBT và cách áp dụng chúng vào cuộc sống hàng ngày.
-   **Kiểm soát suy nghĩ:** Tác phẩm cung cấp những kỹ thuật để nhận diện và thay đổi những suy nghĩ tiêu cực, lo lắng và ám ảnh.
-   **Điều chỉnh cảm xúc:** Sách giúp người đọc điều chỉnh cảm xúc và đối phó với những tình huống căng thẳng một cách hiệu quả.

**Mood:** Buồn, Bình yên

"Vượt Qua Lo Âu Chữa Lành Tâm Trí" là một nguồn tài liệu quý giá cho những ai muốn kiểm soát cảm xúc tiêu cực và sống một cuộc đời hạnh phúc hơn.
`,
	},
	{
		_id: 'book-11',
		title: 'Đại Dương Đen',
		author: 'Đặng Hoàng Giang',
		summary:
			'Cuốn sách ghi lại hành trình đồng hành cùng những người trầm cảm, mang đến cái nhìn sâu sắc về chứng rối loạn cảm xúc, giúp người đọc thấu hiểu và tìm cách vượt qua bóng tối tâm lý.',
		image: 'https://th.bing.com/th/id/R.f43753a3381b9a1420c4ce20c3b38d19?rik=akgZCvsz6U4FvA&pid=ImgRaw&r=0', // Cần thay thế bằng URL hình ảnh thực tế
		slug: 'dai-duong-den',
		mood_id: 'mood-2',
		content: `
## Đại Dương Đen - Thấu Hiểu và Vượt Qua Trầm Cảm

**Tóm tắt:** "Đại Dương Đen" của Đặng Hoàng Giang là một cuốn sách chân thực và cảm động về hành trình đồng hành cùng những người trầm cảm. Tác phẩm này mang đến cái nhìn sâu sắc về chứng rối loạn cảm xúc, giúp người đọc thấu hiểu và tìm cách vượt qua bóng tối tâm lý.

**Nội dung chính:**

-   **Trầm cảm là gì?:** Sách giải thích những nguyên nhân, triệu chứng và tác động của trầm cảm.
-   **Câu chuyện của những người trầm cảm:** Tác phẩm ghi lại những câu chuyện真实 của những người đã từng trải qua trầm cảm, giúp người đọc đồng cảm và thấu hiểu hơn.
-   **Tìm kiếm sự giúp đỡ:** Sách cung cấp những thông tin về các nguồn lực và phương pháp điều trị trầm cảm.

**Mood:** Buồn, Bình yên

"Đại Dương Đen" là một nguồn động viên lớn lao cho những ai đang phải đối mặt với trầm cảm và những người muốn tìm hiểu về chứng rối loạn cảm xúc này.
`,
	},
	{
		_id: 'book-12',
		title: 'Wabi Sabi – Thương Những Điều Không Hoàn Hảo',
		author: 'Beth Kempton',
		summary:
			'Khám phá triết lý Wabi Sabi của Nhật Bản, khuyến khích sống chậm rãi, trân trọng những điều không hoàn hảo và tìm kiếm hạnh phúc trong sự giản đơn của cuộc sống.',
		image: 'https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/39401.jpg?v=1&w=480&h=700', // Cần thay thế bằng URL hình ảnh thực tế
		slug: 'wabi-sabi-thuong-nhung-dieu-khong-hoan-hao',
		mood_id: 'mood-4',
		content: `
## Wabi Sabi – Thương Những Điều Không Hoàn Hảo - Tìm Thấy Vẻ Đẹp Trong Sự Giản Dị

**Tóm tắt:** "Wabi Sabi – Thương Những Điều Không Hoàn Hảo" của Beth Kempton khám phá triết lý Wabi Sabi của Nhật Bản, một khái niệm về vẻ đẹp trong sự không hoàn hảo, giản dị và tự nhiên. Tác phẩm này khuyến khích người đọc sống chậm rãi, trân trọng những điều nhỏ nhặt và tìm kiếm hạnh phúc trong sự giản đơn của cuộc sống.

**Nội dung chính:**

-   **Wabi Sabi là gì?:** Sách giải thích những nguyên tắc cơ bản của Wabi Sabi và cách áp dụng chúng vào cuộc sống hàng ngày.
-   **Vẻ đẹp trong sự không hoàn hảo:** Tác phẩm khuyến khích người đọc trân trọng những vết nứt, sự cũ kỹ và những dấu ấn của thời gian.
-   **Sống chậm rãi và giản dị:** Sách giúp người đọc tìm thấy sự bình yên và hạnh phúc trong sự giản đơn của cuộc sống.

**Mood:** Tĩnh lặng, Bình yên

"Wabi Sabi – Thương Những Điều Không Hoàn Hảo" là một nguồn cảm hứng tuyệt vời cho những ai muốn tìm thấy vẻ đẹp trong sự giản dị và sống một cuộc đời ý nghĩa hơn.
`,
	},
	{
		_id: 'book-13',
		title: 'Trí Tuệ Xúc Cảm',
		author: 'Daniel Goleman',
		summary:
			'Cuốn sách khám phá khái niệm trí tuệ cảm xúc, cung cấp các kỹ năng để quản lý cảm xúc, xây dựng lòng tự trọng và đạt được sự cân bằng trong cuộc sống.',
		image: 'https://tse3.mm.bing.net/th/id/OIP.uwKLgdSIjw88dMRsjTKp7AHaL5?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', // Cần thay thế bằng URL hình ảnh thực tế
		slug: 'tri-tue-xuc-cam',
		mood_id: 'mood-2',
		content: `
## Trí Tuệ Xúc Cảm - Làm Chủ Cảm Xúc, Xây Dựng Thành Công

**Tóm tắt:** "Trí Tuệ Xúc Cảm" của Daniel Goleman là một cuốn sách kinh điển về tầm quan trọng của trí tuệ cảm xúc (EQ) trong cuộc sống cá nhân và sự nghiệp. Tác phẩm này cung cấp những kỹ năng và công cụ để quản lý cảm xúc, xây dựng lòng tự trọng và đạt được sự cân bằng trong cuộc sống.

**Nội dung chính:**

-   **Trí tuệ cảm xúc (EQ) là gì?:** Sách giải thích những thành phần cơ bản của EQ: tự nhận thức, tự điều chỉnh, động lực, sự đồng cảm và kỹ năng xã hội.
-   **Quản lý cảm xúc:** Tác phẩm cung cấp những kỹ thuật để nhận diện, hiểu và điều chỉnh cảm xúc của bản thân và người khác.
-   **Xây dựng mối quan hệ:** Sách giúp người đọc xây dựng những mối quan hệ lành mạnh và hiệu quả.

**Mood:** Buồn, Hạnh phúc

"Trí Tuệ Xúc Cảm" là một nguồn tài liệu quý giá cho những ai muốn phát triển EQ và đạt được thành công trong cuộc sống.
`,
	},
	{
		_id: 'book-14',
		title: 'Bước Chậm Lại Giữa Thế Gian Vội Vã',
		author: 'Hae Min',
		summary:
			'Cuốn sách khuyến khích sống chậm lại, suy ngẫm về các mối quan hệ và bản thân, mang đến sự cân bằng cảm xúc giữa nhịp sống hối hả.',
		image: 'https://tse3.mm.bing.net/th/id/OIP.Zlyh6auN1vwBIhtpc00VpgAAAA?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3', // Cần thay thế bằng URL hình ảnh thực tế
		slug: 'buoc-cham-lai-giua-the-gian-voi-va',
		mood_id: 'mood-4',
		content: `
## Bước Chậm Lại Giữa Thế Gian Vội Vã - Tìm Lại Sự Cân Bằng Trong Cuộc Sống

**Tóm tắt:** "Bước Chậm Lại Giữa Thế Gian Vội Vã" của Hae Min là một cuốn sách nhẹ nhàng và sâu sắc về cách tìm lại sự cân bằng trong cuộc sống hiện đại. Tác phẩm này khuyến khích người đọc sống chậm lại, suy ngẫm về các mối quan hệ và bản thân, và tìm thấy sự bình yên trong tâm hồn.

**Nội dung chính:**

-   **Sống chậm lại:** Sách khuyến khích người đọc giảm bớt áp lực công việc và dành thời gian cho bản thân.
-   **Suy ngẫm về các mối quan hệ:** Tác phẩm giúp người đọc hiểu rõ hơn về các mối quan hệ của mình và xây dựng những mối quan hệ lành mạnh hơn.
-   **Tìm thấy sự bình yên:** Sách giúp người đọc tìm thấy sự bình yên trong tâm hồn bằng cách thực hành thiền định, yoga và những hoạt động thư giãn khác.

**Mood:** Tĩnh lặng, Bình yên

"Bước Chậm Lại Giữa Thế Gian Vội Vã" là một lời nhắc nhở nhẹ nhàng về tầm quan trọng của việc chăm sóc bản thân và tìm thấy sự bình yên trong cuộc sống.
`,
	},
	{
		_id: 'book-15',
		title: 'Chữa Lành Nỗi Đau',
		author: 'Louise L. Hay',
		summary:
			'Cung cấp các phương pháp thực hành để chữa lành những tổn thương tâm lý, giúp người đọc vượt qua cảm giác chán nản và tìm lại ý nghĩa cuộc sống.',
		image: 'https://thuviensach.vn/img/news/2024/05/larger/8659-chua-lanh-noi-dau-1.jpg?v=3884', // Cần thay thế bằng URL hình ảnh thực tế
		slug: 'chua-lanh-noi-dau',
		mood_id: 'mood-2',
		content: `
## Chữa Lành Nỗi Đau - Vượt Qua Khó Khăn, Tìm Lại Hạnh Phúc

**Tóm tắt:** "Chữa Lành Nỗi Đau" của Louise L. Hay là một cuốn sách đầy hy vọng và truyền cảm hứng về cách vượt qua những khó khăn và tìm lại hạnh phúc trong cuộc sống. Tác phẩm này cung cấp những phương pháp thực hành để chữa lành những tổn thương tâm lý, giúp người đọc vượt qua cảm giác chán nản và tìm lại ý nghĩa cuộc sống.

**Nội dung chính:**

-   **Chữa lành những tổn thương:** Sách hướng dẫn người đọc cách nhận diện và chữa lành những tổn thương tâm lý từ quá khứ.
-   **Thay đổi suy nghĩ:** Tác phẩm cung cấp những kỹ thuật để thay đổi những suy nghĩ tiêu cực và xây dựng những suy nghĩ tích cực hơn.
-   **Yêu thương bản thân:** Sách giúp người đọc yêu thương bản thân và chấp nhận những khuyết điểm của mình.

**Mood:** Buồn, Bình yên

"Chữa Lành Nỗi Đau" là một nguồn động viên lớn lao cho những ai đang phải đối mặt với những khó khăn trong cuộc sống và muốn tìm lại hạnh phúc.
`,
	},
];

class BookService {
	private static instance: BookService = BookService.getInstance();

	private constructor() {}

	public static getInstance(): BookService {
		if (!BookService.instance) {
			BookService.instance = new BookService();
		}
		return BookService.instance;
	}

	public async getList(params?: { page?: number; limit?: number }): Promise<TErrorFirst<null, Book[]>> {
		try {
			const page = params?.page ?? 1;
			const limit = params?.limit ?? books.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = books.slice(start, end);
			return [null, result];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getById(_id: string): Promise<TErrorFirst<null, Book | undefined>> {
		try {
			const book = books.find((b) => b._id === _id);
			return [null, book];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getBySlug(slug: string): Promise<TErrorFirst<null, Book | undefined>> {
		try {
			const book = books.find((b) => b.slug === slug);
			return [null, book];
		} catch (err: any) {
			return [err, null];
		}
	}

	public async getByMoodId(
		mood_id: string,
		params?: { page?: number; limit?: number }
	): Promise<TErrorFirst<null, Book[]>> {
		try {
			const filtered = books.filter((p) => p.mood_id === mood_id);
			const page = params?.page ?? 1;
			const limit = params?.limit ?? filtered.length;
			const start = (page - 1) * limit;
			const end = start + limit;
			const result = filtered.slice(start, end);
			return [null, result];
		} catch (err: any) {
			return [err, null];
		}
	}
}

export { BookService };
