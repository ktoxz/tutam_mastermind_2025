import { Blog } from '@models';

const BLOGS: Blog[] = [
	{
		_id: '13',
		title: 'Viết Nhật Ký Trị Liệu: Ghi Để Hiểu, Viết Để Nhẹ',
		author: 'Trịnh Minh',
		summary: 'Viết nhật ký trị liệu là công cụ đơn giản nhưng mạnh mẽ để khám phá sâu bên trong, tổ chức suy nghĩ và tìm ra giải pháp cho những khúc mắc tinh thần.',
		image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
		slug: 'viet-nhat-ky-tri-lieu',
		mood_id: 'mood-1',
		content: `
> Viết nhật ký trị liệu là liệu pháp tự quản lý cảm xúc, giúp chuyển tải cảm xúc từ bên trong ra trang giấy — nơi chúng có thể được quan sát, đánh giá và xử lý.

### Cách bắt đầu

#### Thiết lập thói quen
- **Thời gian cố định:** 10–20 phút mỗi sáng hoặc tối
- **Sự đều đặn quan trọng hơn cường độ**
- **Không cần hoàn hảo:** viết như nói chuyện, không cần sửa lỗi hay quy chuẩn

### Các bài tập viết hữu ích

#### 1. Viết không ngừng (Free Writing)

Quy tắc:
- Đặt đồng hồ 10 phút
- Viết mọi thứ xuất hiện trong đầu
- Không dừng, không sửa
- Không đánh giá nội dung


#### 2. Thư gửi quá khứ/tương lai
Viết một lá thư gửi cho chính mình:
- **Gửi quá khứ:** Tha thứ và chữa lành
- **Gửi tương lai:** Khích lệ và định hướng

#### 3. Danh sách biết ơn
Mỗi ngày ghi **3 điều biết ơn** để:
- Thay đổi góc nhìn khi cảm thấy bế tắc
- Tăng cường cảm xúc tích cực
- Rèn luyện thói quen nhận thức

### Lợi ích lặp lại

**Giảm lo lắng:** Sắp xếp suy nghĩ khiến não dễ xử lý hơn  
**Tăng nhận thức bản thân:** Nhận ra mẫu hành vi, kích hoạt cảm xúc  
**Lộ trình hành động:** Từ nhật ký xuất hiện hành động thực tế

### Kết luận

Viết nhật ký không chữa lành tức thì, nhưng từng dòng chữ đóng góp vào sự rõ ràng tâm lý — và từ đó, bạn chọn con đường lành mạnh hơn.

---

*Hãy bắt đầu từ hôm nay, chỉ cần 10 phút và một trang giấy trắng.*
`,
	},
	{
		_id: '14',
		title: 'Lo Âu Xã Hội: Làm Thế Nào Để Thoát Vòng Áp Lực',
		author: 'Đỗ Quỳnh',
		summary: 'Lo âu xã hội có thể khiến những tương tác bình thường trở nên nặng nề. Bài viết trình bày cách nhận biết, luyện tập và từng bước kết nối lại với người khác mà không bị sợ hãi chi phối.',
		image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
		slug: 'lo-au-xa-hoi',
		mood_id: 'mood-3',
		content: `
Lo âu xã hội thường biểu hiện qua sợ bị phán xét, đọc được ánh mắt người khác như tiêu chuẩn đánh giá bản thân. Dưới đây là lộ trình thực tiễn để giảm bớt ảnh hưởng của lo âu.

**Nhận diện triệu chứng**  
- Cảm giác hồi hộp trước khi giao tiếp, tránh mặt, lo lắng về điều đã nói.  
- Triệu chứng cơ thể: tim đập nhanh, ra mồ hôi, run tay.

**Kỹ thuật đối diện (exposure) từng bước**  
- Bắt đầu nhỏ: chào hàng xóm, đặt một câu hỏi đơn giản ở cửa hàng. Ghi nhận phản hồi thực tế — thường không như kịch bản tiêu cực trong đầu.  
- Tăng dần độ khó: tham gia nhóm nhỏ, sau đó trình bày ý kiến trước nhóm lớn hơn.

**Cách suy nghĩ lại (cognitive reframing)**  
- Thử nghiệm thực tế: đặt giả thuyết “người kia không chú tâm đến tôi” và kiểm chứng.  
- Tập trung vào mục tiêu giao tiếp (kết nối, học hỏi) thay vì tiêu chuẩn “phải hoàn hảo”.

**Kết nối hỗ trợ**  
- Nhóm hỗ trợ hoặc trị liệu nhóm: nơi bạn luyện tập mà không bị đánh giá.  
- Nếu triệu chứng nặng, gặp chuyên gia để cân nhắc CBT hoặc can thiệp chuyên sâu.

Lo âu xã hội có thể giảm đáng kể khi bạn luyện tập theo lộ trình, có người đồng hành và học cách thay đổi suy nghĩ theo hướng thực tế hơn.
`,
	},
	{
		_id: '1',
		title: 'A Cup of Jo',
		author: 'Joanna Goddard',
		summary: 'A Cup of Jo là một blog về phong cách sống, bao gồm các chủ đề về các mối quan hệ, thời trang, ẩm thực, du lịch và làm mẹ.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/Joanna-Goddard.png',
		slug: 'a-cup-of-jo',
		mood_id: 'mood-1',
		content: `
> Được sáng lập bởi **Joanna Goddard** như một blog cuối tuần từ năm 2007, nay đã trở thành nền tảng lifestyle hàng đầu về thời trang, thiết kế, ẩm thực, du lịch, mối quan hệ và làm mẹ.

### Điểm nổi bật

#### Nội dung chất lượng
- **Chân thực và trau chuốt:** Mọi bài viết đều được đầu tư kỹ lưỡng
- **Tương tác cộng đồng:** Triều lưu "come for the blog, stay for the comments"
- **Tầm ảnh hưởng lớn:** Triệu lượt truy cập từng tháng

#### Giá trị cốt lõi
- **Minh bạch trong tài trợ:** Chỉ chia sẻ những gì Joanna thật sự yêu thích
- **Ủng hộ xã hội:** Đóng góp cho các tổ chức như:
  - RAICES
  - NAACP  
  - Greenpeace
  - Save the Children
  - Planned Parenthood

### Tầm nhìn

> A Cup of Jo không chỉ là blog — nó là **không gian sống chung**, nơi cảm xúc và hành trình người sáng tạo đồng hành cùng độc giả Gen Z: sống thật, kết nối sâu, và cùng nhau nâng tầm.

---

*Khám phá thêm tại: [cupofjo.com](https://cupofjo.com)*
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
		summary: 'Blog đi sâu vào nhiều chủ đề khác nhau, từ trí tuệ nhân tạo đến sự trì hoãn, với những bài viết dài, chi tiết và hình ảnh minh họa độc đáo, khuyến khích bạn suy nghĩ sâu sắc hơn.',
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
		summary: 'Camille Styles là blog về thực phẩm lành mạnh, thời trang, du lịch và nghệ thuật tiếp đãi khách. Camille cùng đội ngũ nữ giới mang đến nội dung hấp dẫn với hình ảnh và video đẹp mắt.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/Camille-Styles.png',
		slug: 'camille-styles',
		mood_id: 'mood-1',
		content: `
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
		_id: '16',
		title: 'Ngủ & Tâm Trạng: Liên Kết Ít Ai Lưu Tâm Nhưng Rất Quyết Định',
		author: 'Nguyễn Hữu',
		summary: 'Chất lượng giấc ngủ ảnh hưởng mạnh mẽ đến cảm xúc, trí nhớ và khả năng xử lý stress. Bài viết trình bày cách cải thiện giấc ngủ để hỗ trợ sức khỏe tâm thần.',
		image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb',
		slug: 'ngu-va-tam-trang',
		mood_id: 'mood-3',
		content: `
Ngủ kém khiến bộ lọc cảm xúc hoạt động kém, làm tăng phản ứng tiêu cực và giảm khả năng giải quyết vấn đề.

**Nguyên tắc vệ sinh giấc ngủ**  
- Lịch ngủ đều đặn: đi ngủ và thức dậy cố định, kể cả cuối tuần.  
- Môi trường ngủ tối, mát, yên tĩnh; hạn chế màn hình 1 giờ trước ngủ.

**Chiến lược khi lo lắng khiến khó ngủ**  
- Ghi nhật ký lo lắng: viết ra 10 phút trước giờ ngủ để chuyển bớt suy nghĩ ra giấy.  
- Kỹ thuật thở hình vuông, body scan, hoặc thiền dẫn dắt ngắn.

**Khi cần trợ giúp chuyên môn**  
- Mất ngủ kéo dài ảnh hưởng chức năng ngày: tìm chuyên gia giấc ngủ hoặc bác sĩ để loại trừ nguyên nhân y tế.  
- Một số trường hợp, CBT-I (CBT for Insomnia) rất hiệu quả.

Cải thiện giấc ngủ là đầu tư dài hạn cho sức khỏe tâm thần — bắt đầu bằng những thay đổi nhỏ và kiên trì thực hiện.
`,
	},
	{
		_id: '5',
		title: 'Corporette',
		author: 'Kat Griffin',
		summary: 'Corporette, do Kat Griffin sáng lập, là blog dành cho phụ nữ chuyên nghiệp muốn ăn mặc thời trang và thành công trong sự nghiệp. Blog cung cấp ý tưởng trang phục và lời khuyên nghề nghiệp quý giá.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/Corporette.png',
		slug: 'corporette',
		mood_id: 'mood-4',
		content: `
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
		summary: 'Blog bắt đầu như một dự án nhiếp ảnh ghi lại chân dung người Việt, phát triển thành nơi kể những câu chuyện sâu sắc về cuộc sống, lan tỏa giá trị tích cực.',
		content:
			'### **Những Gương Mặt Hạnh Phúc**\n\nHạnh phúc không chỉ là những điều to lớn, mà còn là nụ cười, là ánh mắt của những người xa lạ. Gương Mặt Hạnh Phúc là nơi chúng ta cùng nhau lắng nghe những câu chuyện đời thường, để nhận ra vẻ đẹp của sự kiên cường và lòng tốt vẫn hiện hữu quanh ta. Mỗi bức ảnh đi kèm một câu chuyện, giúp bạn cảm nhận sâu sắc hơn về cuộc sống và con người, tìm thấy sự kết nối qua những câu chuyện về tình yêu, sự tha thứ và lòng dũng cảm.\n\n### **Điểm đặc biệt**\n\n* **Sức mạnh của kể chuyện**: Mỗi bức ảnh đi kèm một câu chuyện, giúp bạn cảm nhận sâu sắc hơn về cuộc sống và con người.\n* **Lan tỏa yêu thương**: Từ những câu chuyện nhỏ, blog đã lan tỏa những hành động tử tế và gây quỹ cho nhiều hoàn cảnh khó khăn.\n* **Tìm thấy điểm chung**: Dù khác biệt về hoàn cảnh, chúng ta vẫn có thể tìm thấy sự kết nối qua những câu chuyện về tình yêu, sự tha thứ và lòng dũng cảm.\n\n### **Thông điệp gửi gắm**\n\nHãy mở lòng và lắng nghe, bạn sẽ nhận ra rằng, xung quanh chúng ta, hạnh phúc vẫn luôn hiện diện.',
		image: 'https://www.brucesdoggydaycare.co.uk/wp-content/uploads/2020/07/Laughing-dog.jpg',
		slug: 'guong-mat-hanh-phuc',
		mood_id: 'mood-1',
	},
	{
		_id: '12',
		title: 'Hành Trình Chữa Lành: Từ Vết Thương Đến Sức Mạnh',
		author: 'Lê Thảo',
		summary: 'Hành trình chữa lành không phải một đường thẳng. Bài viết này hướng dẫn từng bước thực tiễn để nhận diện, tiếp nhận và nuôi dưỡng lại bản thân sau tổn thương cảm xúc.',
		image: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18',
		slug: 'hanh-trinh-chua-lanh',
		mood_id: 'mood-2',
		content: `
Chữa lành bắt đầu bằng một bước nhỏ: cho phép mình cảm nhận. Khi vết thương được thừa nhận, năng lượng tiêu cực mới có thể biến đổi thay vì bị chôn vùi.

**Nhận diện cảm xúc**  
- Ghi nhật ký mỗi ngày: tên cảm xúc, mức độ (1-10), hoàn cảnh. Việc viết giúp tách cảm xúc ra khỏi bản thân bạn, từ đó dễ quan sát và xử lý.  
- Phân biệt giữa cảm xúc và suy nghĩ: “Tôi buồn” khác với “Tôi thất bại”. Thực hành đặt câu hỏi để phân tách.

**Tiếp nhận và khoan dung với bản thân**  
- Dừng tự trách móc: Hãy tưởng tượng bạn nói với một người bạn thân — bạn có nghiêm khắc với họ như với chính mình không?  
- Thực hành lời nói nội tâm tích cực: thay ‘tôi không đủ tốt’ bằng ‘tôi đang học và có quyền sai’.

**Kỹ thuật nhỏ, ảnh hưởng lớn**  
- Thở 4-4-4: hít 4, giữ 4, thở 4. Khi cảm xúc cuộn lên, kỹ thuật này giúp cơ thể lắng xuống.  
- Nghĩ về cơ thể: quét cơ thể (body scan) để biết nơi nào đang giữ căng thẳng, từ đó giải phóng bằng chuyển động nhẹ nhàng.

**Tái xây dựng qua mối quan hệ và giới hạn**  
- Thiết lập ranh giới lành mạnh: không phải cắt đứt hoàn toàn mà là biết nói “không” khi cần.  
- Chọn người hỗ trợ: tâm sự với người tin cậy hoặc chuyên gia tâm lý khi cần.

Chữa lành không phải đích đến một lần mà là chuỗi hành động đều đặn. Khi bạn kiên nhẫn với quá trình, vết thương dần trở thành nguồn học hỏi và sức mạnh.
`,
	},
	{
		_id: '6',
		title: 'The Blonde Abroad',
		author: 'Kiersten “Kiki” Rich',
		summary: 'The Blonde Abroad của Kiersten Rich là blog du lịch truyền cảm hứng cho độc giả sống với đam mê du lịch. Blog đề cập đến các loại hình du lịch, nhiếp ảnh, chuẩn bị hành lý và nhiều chủ đề khác.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/The-Blonde-Abroad.png',
		slug: 'the-blonde-abroad',
		mood_id: 'mood-3',
		content: `
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
		_id: '15',
		title: 'Giới Hạn & Từ Chối: Nghệ Thuật Bảo Vệ Năng Lượng Tâm Lý',
		author: 'Phan Hương',
		summary: 'Biết nói “không” là kỹ năng thiết yếu để bảo vệ sức khoẻ tâm thần. Bài viết này hướng dẫn cách đặt ranh giới mềm mại nhưng kiên định và quản lý cảm giác tội lỗi liên quan.',
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
		slug: 'gioi-han-va-tu-choi',
		mood_id: 'mood-4',
		content: `
Ranh giới là cơ chế tự nhiên giúp bạn giữ lại nguồn lực tinh thần để nuôi dưỡng những gì quan trọng.

**Tại sao khó nói “không”?**  
- Nỗi sợ bị mất lòng, bị tẩy chay, hoặc mất cơ hội.  
- Quyền lợi cảm xúc: người khác có thể dựa dẫm, và bạn cảm thấy có trách nhiệm phải gánh vác.

**Cách thiết lập ranh giới hiệu quả**  
- Rõ ràng và ngắn gọn: “Hiện tại mình không thể, cảm ơn bạn đã nghĩ đến mình.”  
- Thực hành câu thay thế: không cần biện minh dài dòng — câu ngắn gọn đủ truyền tải.

**Quản lý cảm giác tội lỗi**  
- Nhận diện suy nghĩ tự phê phán: “Mình ích kỷ” → thử đổi sang “Mình đang chăm sóc bản thân để có thể cho đi bền vững hơn.”  
- Tập dần: bắt đầu với việc từ chối những yêu cầu nhỏ, cảm nhận phản ứng và điều chỉnh.

Giữ ranh giới không làm bạn ích kỷ; nó giúp bạn bền bỉ hơn trong các mối quan hệ và có năng lượng để thực sự hiện diện khi cần.
`,
	},

	{
		_id: '18',
		title: 'Phòng Ngừa Kiệt Sức: Khi Công Việc Làm Mất Niềm Vui',
		author: 'Trần Bảo',
		summary: 'Burnout (kiệt sức) dần trở thành vấn đề phổ biến. Bài viết nêu dấu hiệu cảnh báo và chiến lược ngăn ngừa, phục hồi để giữ cân bằng giữa công việc và cuộc sống.',
		image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b',
		slug: 'phong-ngua-kiet-suc',
		mood_id: 'mood-4',
		content: `
Kiệt sức là hậu quả của áp lực kéo dài mà không có phục hồi. Nhận diện sớm giúp can thiệp kịp thời.

**Dấu hiệu cần lưu ý**  
- Mệt mỏi mãn tính, giảm hiệu suất, mất hứng thú với công việc trước đây yêu thích.  
- Cảm thấy vô nghĩa, xa cách, dễ cáu gắt với đồng nghiệp và người thân.

**Chiến lược phòng ngừa**  
- Nghỉ ngơi chủ động: micro-breaks (5–10 phút mỗi 60–90 phút làm việc).  
- Đa dạng hóa nhiệm vụ: xen kẽ công việc sáng tạo và công việc kỹ thuật.  
- Xây dựng hệ thống hỗ trợ tại nơi làm việc: trao đổi với quản lý về khối lượng và ưu tiên.

**Phục hồi sau kiệt sức**  
- Giảm tải ngay lập tức nếu cần thiết (nghỉ phép, giảm ca).  
- Tìm hỗ trợ chuyên môn (tư vấn tâm lý).  
- Tái khám phá giá trị cá nhân ngoài công việc: sở thích, mối quan hệ, mục tiêu dài hạn.

Kiệt sức không phải là thất bại cá nhân mà là tín hiệu hệ thống — lắng nghe và hành động có thể giúp bạn trở lại mạnh mẽ hơn.
`,
	},

	{
		_id: '19',
		title: 'Kỹ Năng Lắng Nghe Bản Thân: Khi Câu Trả Lời Đã Ở Bên Trong',
		author: 'Võ An',
		summary: 'Lắng nghe bản thân là kỹ năng giúp bạn ra quyết định phù hợp và sống trọn vẹn hơn. Bài viết giới thiệu phương pháp thực hành để nhận biết nhu cầu thật sự và hành động từ sự rõ ràng nội tâm.',
		image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb',
		slug: 'ky-nang-lang-nghe-ban-than',
		mood_id: 'mood-4',
		content: `
Trong nhịp sống nhanh, dễ mất liên hệ với cảm giác và giá trị nội tại. Lắng nghe bản thân là quá trình tái kết nối đó.

**Các bước thực hành**  
- Dừng lại 5 phút mỗi ngày: hỏi “Hiện tại mình cần gì?” và lắng im để cảm nhận.  
- Ghi lại phản hồi cơ thể: đói, mệt, căng thẳng, vui vẻ — cơ thể là nguồn thông tin khách quan.  
- So sánh lựa chọn theo 2 tiêu chí: “Có lợi cho sức khoẻ lâu dài?” và “Có phù hợp với giá trị của mình?”

**Kết hợp với ra quyết định**  
- Thử nghiệm nhỏ: đưa ra quyết định với quy mô nhỏ để kiểm tra cảm giác thật sự.  
- Điều chỉnh dựa trên phản hồi: nếu quyết định làm bạn mất ngủ hay thấy áp lực, cân nhắc thay đổi.

Lắng nghe bản thân không phải lúc nào cũng mang đến câu trả lời hoàn hảo, nhưng nó giúp bạn ra quyết định có căn cứ và sống trọn vẹn hơn từng ngày.
`,
	},
	{
		_id: '7',
		title: 'Sống Đủ',
		author: 'Nguyễn An',
		summary: 'Blog về việc tìm kiếm sự đơn giản và chánh niệm trong cuộc sống hàng ngày. Tác giả Nguyễn An chia sẻ về thói quen, năng suất và sự tập trung, giúp bạn học cách sống đủ, sống an nhiên.',
		content:
			"### **Học Cách Đủ**\n\nGiữa dòng đời xô bồ, chúng ta thường tìm kiếm những điều lớn lao, quên mất rằng hạnh phúc nằm ngay trong những khoảnh khắc giản dị. Sống Đủ là blog dành cho những ai muốn sống chậm lại, tìm thấy sự an nhiên và cảm nhận trọn vẹn từng phút giây. Nội dung xoay quanh việc 'sống tối giản, tâm an nhiên', nơi chỉ có những câu chuyện thật, không bị làm phiền bởi quảng cáo. Các bài viết sẽ hướng dẫn bạn những cách thực tế để rèn luyện sự tập trung và sống một cuộc đời có ý nghĩa hơn.\n\n### **Điểm đặc biệt**\n\n* **Sống tối giản, tâm an nhiên**: Không chỉ là bỏ bớt đồ đạc, mà còn là học cách buông bỏ những gánh nặng tinh thần.\n* **Tâm hồn không quảng cáo**: Nơi đây chỉ có những câu chuyện thật, những lời khuyên chân thành, không bị làm phiền bởi những yếu tố bên ngoài.\n* **Thực hành chánh niệm**: Những bài viết sẽ hướng dẫn bạn những cách thực tế để rèn luyện sự tập trung, tìm lại bình yên và sống một cuộc đời có ý nghĩa hơn.\n\n### **Thông điệp gửi gắm**\n\nĐôi khi, để cảm thấy hạnh phúc, chúng ta không cần thêm bất cứ điều gì, mà chỉ cần học cách cảm thấy **đủ**.",
		image: 'https://i.pinimg.com/736x/b0/31/b1/b031b135ea8d9e8db91f2090f8e6fd18.jpg',
		slug: 'song-du',
		mood_id: 'mood-1',
	},
	{
		_id: '17',
		title: 'Tự Thương: Học Yêu Bản Thân Sau Những Ngày Mệt Mỏi',
		author: 'Hoàng Lan',
		summary: 'Tự thương là khả năng chăm sóc, khoan dung và nuôi dưỡng bản thân khi gặp khó khăn. Bài viết đưa ra thực hành cụ thể để phát triển lòng tự trọng và sự chấp nhận.',
		image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
		slug: 'tu-thuong-hoc-yeu-ban-than',
		mood_id: 'mood-1',
		content: `
Tự thương không phải là tự mãn, mà là giữ cho mình an toàn để trưởng thành.

**Ba bước căn bản**  
1. Nhận diện đau khổ: dừng lại và thừa nhận “Mình đang đau”.  
2. Nhân từ với chính mình: nói lời an ủi như với bạn thân.  
3. Hành động chăm sóc: làm điều nhỏ có lợi cho sức khỏe (ăn, ngủ, di chuyển).

**Bài tập thực hành**  
- Gương tự thương: mỗi sáng nhìn vào gương, nói một câu nhẹ nhàng về bản thân.  
- Danh sách “Tôi cần”: viết ra 5 điều giúp bạn cảm thấy an toàn và thực hiện 1-2 điều đó mỗi tuần.

Tự thương là nền tảng để bạn có thể giúp người khác mà không cạn kiệt. Nó là phép trao quyền nội tại, không phải điều xa xỉ.
`,
	},
	{
		_id: '8',
		title: 'Chữa Lành',
		author: 'Lê Minh',
		summary: 'Nơi chia sẻ trí tuệ đơn giản cho những vấn đề phức tạp của cuộc sống. Blog tổng hợp các câu chuyện và bài học từ độc giả, giúp bạn tìm thấy sức mạnh nội tại để chữa lành vết thương lòng.',
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
		summary: 'Blog kể về hành trình theo đuổi chủ nghĩa tối giản, truyền cảm hứng sống nhiều hơn với ít đồ đạc hơn, giúp buông bỏ những gánh nặng vô hình để lòng được thảnh thơi.',
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
		summary: 'The Rugged Male là blog dành cho nam giới muốn nâng cao phong cách sống. Được dẫn dắt bởi Maxwell và đội ngũ cộng tác viên, blog này đề cập đến thời trang, ẩm thực, đồ uống, sức khỏe và nghệ thuật làm đàn ông.',
		image: 'https://masterblogging.com/wp-content/uploads/2020/03/The-Rugged-Male.png',
		slug: 'the-rugged-male',
		mood_id: 'mood-3',
		content: `
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
