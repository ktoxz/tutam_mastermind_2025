import { Blog } from '@packages/models';

const BLOGS: Blog[] = [
	{
		_id: '1',
		title: 'A Cup of Jo',
		author: 'Joanna Goddard',
		summary:
			'A Cup of Jo là một blog về phong cách sống, bao gồm các chủ đề về các mối quan hệ, thời trang, ẩm thực, du lịch và làm mẹ. Được sáng lập bởi Joanna Goddard, blog này có các bài viết chỉn chu với nét cá nhân và hỗ trợ từ thiện.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/Joanna-Goddard.png',
		slug: 'a-cup-of-jo',
		mood_id: 'mood-1',
		content: `
### A Cup of Jo — Không gian sống chân thật và giàu cảm xúc

**Tóm lược**  
- Được sáng lập bởi Joanna Goddard như một blog cuối tuần từ năm 2007, nay đã trở thành nền tảng lifestyle hàng đầu về thời trang, thiết kế, ẩm thực, du lịch, mối quan hệ và làm mẹ (từ *About*, *Wiki*, *Trang chính*).

**Điểm nổi bật**  
- Nội dung chân thực, trau chuốt và tương tác cộng đồng.  
- Tầm ảnh hưởng lớn: triệu lượt truy cập từng tháng, theo phong cách “come for the blog, stay for the comments”.  
- Minh bạch trong tài trợ, chỉ chia sẻ những gì Joanna thật sự yêu thích.  
- Ủng hộ các tổ chức như RAICES, NAACP, Greenpeace, Save the Children, Planned Parenthood.

**Tầm nhìn**  
A Cup of Jo không chỉ là blog — nó là **không gian sống chung**, nơi cảm xúc và hành trình người sáng tạo đồng hành cùng độc giả Gen Z: sống thật, kết nối sâu, và cùng nhau nâng tầm.
`,
	},

	{
		_id: '2',
		title: 'Ape to Gentleman',
		author: 'Multiple founders',
		summary:
			'Ape to Gentleman là một blog phong cách sống dành cho nam giới với các nhà báo chuyên nghiệp đưa tin về chăm sóc cá nhân, ô tô và nhiều lĩnh vực khác. Mỗi chuyên gia tập trung vào một ngành để đảm bảo chất lượng nội dung.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/Ape-to-Gentleman.png',
		slug: 'ape-to-gentleman',
		mood_id: 'mood-3',
		content: `
### Ape to Gentleman — Hướng đến tinh hoa của quý ông hiện đại

**Tóm lược**  
- Blog lifestyle cho nam giới với nội dung đa dạng về thời trang, chăm sóc cá nhân, du lịch, công nghệ và ẩm thực.  
- Duy trì chất lượng nội dung thông qua chuyên gia đầu ngành ở mỗi mảng.

**Điểm nổi bật**  
- Kết hợp cổ điển — hiện đại, gắn liền với xu hướng 2025.  
- Truyền tải thông điệp giá trị: “A true gentleman is one who puts more into the world than he takes out”.  
- Là biểu tượng của văn minh, lịch lãm và phát triển bản thân.

**Tầm nhìn**  
Gen Z hãy diện vẻ lịch lãm có chiều sâu, sống có giá trị và lan toả tác động tích cực — như Ape to Gentleman vẫn đang truyền cảm hứng bằng sự tinh tế đầy ý nghĩa.
`,
	},

	{
		_id: '10',
		title: 'Tò Mò',
		author: 'Phạm Quang',
		summary:
			'Blog đi sâu vào nhiều chủ đề khác nhau, từ trí tuệ nhân tạo đến sự trì hoãn, với những bài viết dài, chi tiết và hình ảnh minh họa độc đáo, khuyến khích bạn suy nghĩ sâu sắc hơn.',
		content:
			'### **Tò Mò Là Sức Mạnh**\n\nBạn có bao giờ tự hỏi về vũ trụ, về tâm lý con người hay về chính những thói quen của mình? Tò Mò là nơi để bạn giải đáp những câu hỏi đó, bằng cách tiếp cận đầy bất ngờ và thú vị. Mỗi bài viết như một chuyến phiêu lưu, đưa bạn từ chủ đề này đến chủ đề khác, giúp bạn mở rộng tầm nhìn một cách tự nhiên. Blog không chỉ cung cấp thông tin, mà còn khuyến khích bạn suy nghĩ, đặt câu hỏi và nhìn nhận mọi vấn đề từ nhiều góc độ.\n\n### **Điểm đặc biệt**\n\n* **Hành trình khám phá**: Mỗi bài viết như một chuyến phiêu lưu, đưa bạn từ chủ đề này đến chủ đề khác, giúp bạn mở rộng tầm nhìn một cách tự nhiên.\n* **Tư duy sâu**: Blog không chỉ cung cấp thông tin, mà còn khuyến khích bạn suy nghĩ, đặt câu hỏi và nhìn nhận mọi vấn đề từ nhiều góc độ.\n* **Nguồn cảm hứng bất tận**: Từ những bài viết tưởng chừng khô khan, bạn sẽ tìm thấy nguồn năng lượng và sự hứng khởi để khám phá thế giới xung quanh.\n\n### **Thông điệp gửi gắm**\n\nHãy để sự tò mò dẫn lối, và bạn sẽ nhận ra rằng, thế giới này rộng lớn và thú vị hơn bạn nghĩ rất nhiều!',
		image: 'https://i.pinimg.com/originals/62/51/c0/6251c0c0f11b15db9edd67b9dfb80ef7.jpg',
		slug: 'to-mo',
		mood_id: 'mood-3',
	},

	{
		_id: '4',
		title: 'Camille Styles',
		author: 'Camille Styles',
		summary:
			'Camille Styles là blog về thực phẩm lành mạnh, thời trang, du lịch và nghệ thuật tiếp đãi khách. Camille cùng đội ngũ nữ giới mang đến nội dung hấp dẫn với hình ảnh và video đẹp mắt.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/Camille-Styles.png',
		slug: 'camille-styles',
		mood_id: 'mood-1',
		content: `
### Camille Styles — Kỳ nghệ sống đẹp từ mọi khoảnh khắc

**Tóm lược**  
- Blogger & nhà sáng tạo lifestyle, xuất thân từ báo chí và event planning; hiện là founder kiêm Editor-in-Chief của blog.
- Mang đến nội dung về thiết kế, nấu ăn, tiếp đãi, wellness — tất cả được trình bày đầu tư và trọn vẹn cảm xúc.

**Điểm nổi bật**  
- Niềm tin: “Cuộc sống đẹp xuất phát từ những lựa chọn hằng ngày”.
- Thương hiệu liên đới: Casa Zuma — sản phẩm thủ công giúp nâng niu khoảnh khắc thường nhật.
- Hình ảnh và câu chữ giàu cảm xúc, kết nối độc giả theo cách "thật gần gũi mà tinh tế".

**Tầm nhìn**  
Không đơn thuần là blog — Camille Styles là thư mời sống đẹp, trân trọng khoảnh khắc, nuôi dưỡng cảm xúc và truyền cảm hứng cho Gen Z để “sống có moodboard”, nhưng đầy hiện thực và chạm lòng.
`,
	},

	{
		_id: '5',
		title: 'Corporette',
		author: 'Kat Griffin',
		summary:
			'Corporette, do Kat Griffin sáng lập, là blog dành cho phụ nữ chuyên nghiệp muốn ăn mặc thời trang và thành công trong sự nghiệp. Blog cung cấp ý tưởng trang phục và lời khuyên nghề nghiệp quý giá.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/Corporette.png',
		slug: 'corporette',
		mood_id: 'mood-4',
		content: `
### Corporette — Người bạn đồng hành chuyên nghiệp của phụ nữ hiện đại

**Tóm lược**  
- Blog được sáng lập bởi Kat Griffin, cựu luật sư chuyển sang viết blog từ năm 2008.
- Chuyên cung cấp thời trang công sở, lời khuyên nghề nghiệp cho phái đẹp đang phấn đấu và phát triển.

**Điểm nổi bật**  
- Được Forbes đánh giá là một trong 10 lifestyle websites hàng đầu dành cho phụ nữ, top các “Blawgs” từ ABA Journal liên tục trong 5 năm, và được nhắc đến trên nhiều tòa soạn danh tiếng như NYT, WSJ, Business Insider, Glamour...
- Nội dung sâu, bao gồm chủ đề như career, suits, heels, workwear essentials, organization.

**Tầm nhìn**  
Corporette là hành trang chuyên nghiệp giúp Gen Z ambitious trở thành phiên bản sắc sảo và tự tin nhất — từ style đến sự nghiệp, từ tư duy đến tầm nhìn.
`,
	},
	{
		_id: '11',
		title: 'Gương Mặt Hạnh Phúc',
		author: 'Vũ Bình',
		summary:
			'Blog bắt đầu như một dự án nhiếp ảnh ghi lại chân dung người Việt, phát triển thành nơi kể những câu chuyện sâu sắc về cuộc sống, lan tỏa giá trị tích cực.',
		content:
			'### **Những Gương Mặt Hạnh Phúc**\n\nHạnh phúc không chỉ là những điều to lớn, mà còn là nụ cười, là ánh mắt của những người xa lạ. Gương Mặt Hạnh Phúc là nơi chúng ta cùng nhau lắng nghe những câu chuyện đời thường, để nhận ra vẻ đẹp của sự kiên cường và lòng tốt vẫn hiện hữu quanh ta. Mỗi bức ảnh đi kèm một câu chuyện, giúp bạn cảm nhận sâu sắc hơn về cuộc sống và con người, tìm thấy sự kết nối qua những câu chuyện về tình yêu, sự tha thứ và lòng dũng cảm.\n\n### **Điểm đặc biệt**\n\n* **Sức mạnh của kể chuyện**: Mỗi bức ảnh đi kèm một câu chuyện, giúp bạn cảm nhận sâu sắc hơn về cuộc sống và con người.\n* **Lan tỏa yêu thương**: Từ những câu chuyện nhỏ, blog đã lan tỏa những hành động tử tế và gây quỹ cho nhiều hoàn cảnh khó khăn.\n* **Tìm thấy điểm chung**: Dù khác biệt về hoàn cảnh, chúng ta vẫn có thể tìm thấy sự kết nối qua những câu chuyện về tình yêu, sự tha thứ và lòng dũng cảm.\n\n### **Thông điệp gửi gắm**\n\nHãy mở lòng và lắng nghe, bạn sẽ nhận ra rằng, xung quanh chúng ta, hạnh phúc vẫn luôn hiện diện.',
		image: 'https://www.brucesdoggydaycare.co.uk/wp-content/uploads/2020/07/Laughing-dog.jpg',
		slug: 'guong-mat-hanh-phuc',
		mood_id: 'mood-1',
	},

	{
		_id: '6',
		title: 'The Blonde Abroad',
		author: 'Kiersten “Kiki” Rich',
		summary:
			'The Blonde Abroad của Kiersten Rich là blog du lịch truyền cảm hứng cho độc giả sống với đam mê du lịch. Blog đề cập đến các loại hình du lịch, nhiếp ảnh, chuẩn bị hành lý và nhiều chủ đề khác.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/The-Blonde-Abroad.png',
		slug: 'the-blonde-abroad',
		mood_id: 'mood-3',
		content: `
### The Blonde Abroad — Du lịch là hành trình khám phá và kết nối

**Tóm lược**  
- Blog solo female travel do Kiersten Rich sáng lập, nổi bật với tips, guides, visuals phong phú khắp thế giới.

**Điểm nổi bật**  
- Được công nhận là blog du lịch solo nữ thành công, đầy cảm hứng, với nội dung từ packing guides, travel tips đến destination highlights.
- Trải dài từ budget đến luxury, có cả tour all-female, giúp travel an toàn và dễ tiếp cận hơn.

**Tầm nhìn**  
Không chỉ là blog — The Blonde Abroad là lời mời chạm vào thế giới, tìm đến bản thân và cộng đồng qua hành trình. Gen Z, nếu bạn khao khát tự do và khác biệt — hãy để mỗi chuyến đi kể câu chuyện của bạn.
`,
	},
	{
		_id: '7',
		title: 'Sống Đủ',
		author: 'Nguyễn An',
		summary:
			'Blog về việc tìm kiếm sự đơn giản và chánh niệm trong cuộc sống hàng ngày. Tác giả Nguyễn An chia sẻ về thói quen, năng suất và sự tập trung, giúp bạn học cách sống đủ, sống an nhiên.',
		content:
			"### **Học Cách Đủ**\n\nGiữa dòng đời xô bồ, chúng ta thường tìm kiếm những điều lớn lao, quên mất rằng hạnh phúc nằm ngay trong những khoảnh khắc giản dị. Sống Đủ là blog dành cho những ai muốn sống chậm lại, tìm thấy sự an nhiên và cảm nhận trọn vẹn từng phút giây. Nội dung xoay quanh việc 'sống tối giản, tâm an nhiên', nơi chỉ có những câu chuyện thật, không bị làm phiền bởi quảng cáo. Các bài viết sẽ hướng dẫn bạn những cách thực tế để rèn luyện sự tập trung và sống một cuộc đời có ý nghĩa hơn.\n\n### **Điểm đặc biệt**\n\n* **Sống tối giản, tâm an nhiên**: Không chỉ là bỏ bớt đồ đạc, mà còn là học cách buông bỏ những gánh nặng tinh thần.\n* **Tâm hồn không quảng cáo**: Nơi đây chỉ có những câu chuyện thật, những lời khuyên chân thành, không bị làm phiền bởi những yếu tố bên ngoài.\n* **Thực hành chánh niệm**: Những bài viết sẽ hướng dẫn bạn những cách thực tế để rèn luyện sự tập trung, tìm lại bình yên và sống một cuộc đời có ý nghĩa hơn.\n\n### **Thông điệp gửi gắm**\n\nĐôi khi, để cảm thấy hạnh phúc, chúng ta không cần thêm bất cứ điều gì, mà chỉ cần học cách cảm thấy **đủ**.",
		image: 'https://i.pinimg.com/736x/b0/31/b1/b031b135ea8d9e8db91f2090f8e6fd18.jpg',
		slug: 'song-du',
		mood_id: 'mood-1',
	},
	{
		_id: '8',
		title: 'Chữa Lành',
		author: 'Lê Minh',
		summary:
			'Nơi chia sẻ trí tuệ đơn giản cho những vấn đề phức tạp của cuộc sống. Blog tổng hợp các câu chuyện và bài học từ độc giả, giúp bạn tìm thấy sức mạnh nội tại để chữa lành vết thương lòng.',
		content:
			'### **Chữa Lành Từ Bên Trong**\n\nCuộc sống không phải lúc nào cũng màu hồng, đôi khi những nỗi buồn, sự mất mát khiến chúng ta cảm thấy chênh vênh. Chữa Lành là nơi để bạn lắng nghe những câu chuyện, những lời sẻ chia chân thật, giúp bạn nhận ra rằng, dù cô đơn, bạn vẫn có thể tìm thấy sức mạnh nội tại để vượt qua. Đây là không gian an toàn để bạn giãi bày, để được thấu hiểu mà không sợ bị đánh giá.\n\n### **Điểm đặc biệt**\n\n* **Hộp thư tâm sự**: Mỗi bài viết là một lá thư được gửi về, kể về những nỗi lòng, những vết thương và cả hành trình tự chữa lành.\n* **Không phán xét**: Nơi đây là không gian an toàn để bạn giãi bày, để được thấu hiểu mà không sợ bị đánh giá.\n* **Đồng cảm và kết nối**: Đọc những câu chuyện của người khác, bạn sẽ tìm thấy sự đồng cảm và nhận ra rằng nỗi buồn là một phần tự nhiên của cuộc sống.\n\n### **Thông điệp gửi gắm**\n\nBuồn là một trạng thái, không phải là mãi mãi. Hãy cho phép bản thân được buồn, rồi nhẹ nhàng đứng lên, vì bạn xứng đáng được **chữa lành**.',
		image: 'https://wallpaperaccess.com/full/3815120.jpg',
		slug: 'chua-lanh',
		mood_id: 'mood-2',
	},
	{
		_id: '9',
		title: 'Sống Nhẹ',
		author: 'Trần Hòa',
		summary:
			'Blog kể về hành trình theo đuổi chủ nghĩa tối giản, truyền cảm hứng sống nhiều hơn với ít đồ đạc hơn, giúp buông bỏ những gánh nặng vô hình để lòng được thảnh thơi.',
		content:
			'### **Sống Nhẹ Để Lòng Thanh Thản**\n\nĐôi khi, chúng ta mệt mỏi không phải vì công việc, mà vì những gánh nặng vô hình do chính mình tạo ra. Sống Nhẹ là lời nhắc nhở rằng, hãy bớt đi một chút, để lòng được thảnh thơi hơn. Blog sẽ chỉ ra những gánh nặng vật chất và tinh thần mà bạn đang mang, và cách để buông bỏ chúng. Tối giản không phải là thiếu thốn, mà là sự lựa chọn để tập trung vào những điều thực sự quan trọng.\n\n### **Điểm đặc biệt**\n\n* **Buông bỏ là hạnh phúc**: Blog sẽ chỉ ra những gánh nặng vật chất và tinh thần mà bạn đang mang, và cách để buông bỏ chúng.\n* **Tìm lại năng lượng**: Khi bạn cảm thấy kiệt sức, hãy đọc những câu chuyện ở đây, để tìm thấy động lực và tái tạo năng lượng cho mình.\n* **Sống nhiều hơn, sở hữu ít hơn**: Tối giản không phải là thiếu thốn, mà là sự lựa chọn để tập trung vào những điều thực sự quan trọng.\n\n### **Thông điệp gửi gắm**\n\nNếu bạn đang cảm thấy mệt mỏi, hãy cho phép mình được nghỉ ngơi, để tâm hồn được hít thở và **sống nhẹ** hơn.',
		image: 'https://wallpaperaccess.com/full/5449936.jpg',
		slug: 'song-nhe',
		mood_id: 'mood-4',
	},
	{
		_id: '3',
		title: 'The Rugged Male',
		author: 'Maxwell',
		summary:
			'The Rugged Male là blog dành cho nam giới muốn nâng cao phong cách sống. Được dẫn dắt bởi Maxwell và đội ngũ cộng tác viên, blog này đề cập đến thời trang, ẩm thực, đồ uống, sức khỏe và nghệ thuật làm đàn ông.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/The-Rugged-Male.png',
		slug: 'the-rugged-male',
		mood_id: 'mood-3',
		content: `
### The Rugged Male — Phong cách sống cho quý ông bản lĩnh

**Tóm lược**  
- Blog lifestyle và travel dành cho nam giới từ năm 2012, do Maxwell sáng lập — là nền tảng lan truyền phong cách sống dựa trên trải nghiệm thực tế.
- Nội dung phong phú: thời trang, sức khỏe, du lịch, ẩm thực, lối sống có chiều sâu.

**Điểm nổi bật**  
- Được trích dẫn từ nhiều nguồn uy tín như Wikipedia, Forbes, LA Times, Chicago Sun-Times.
- Người sáng lập Maxwell có background độc đáo: học toán, từng điều hành công ty marketing digital tại LA.
- Gần đây, blog còn được đánh giá là một trong các lifestyle blogs nổi bật dành cho nam giới.

**Tầm nhìn**  
The Rugged Male không chỉ là phong cách — mà là hành trình cải thiện bản thân, sống mạnh mẽ, tử tế, và bản lĩnh. Gen Z, hãy vừa mạnh, vừa có chiều sâu.
`,
	},
];

export default BLOGS;
