export default function HomePage() {
  const products = [
    {
      title: 'Ống thép đen',
      desc: 'Black Steel Pipe',
      image:
        'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Ống thép mạ kẽm',
      desc: 'GI Galvanized Pipe',
      image:
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Ống thép không rỉ',
      desc: 'Stainless Steel Pipe',
      image:
        'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Van công nghiệp',
      desc: 'Industrial Valves',
      image:
        'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Phụ kiện cơ điện',
      desc: 'HVAC Accessories',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Hệ thống PCCC',
      desc: 'Fire Protection System',
      image:
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const applications = [
    'Hệ thống HVAC',
    'Hệ thống PCCC',
    'Hệ thống cấp thoát nước',
    'Hệ thống bơm công nghiệp',
    'Nhà máy công nghiệp',
  ]

  return (
    <main className="bg-[#020b24] text-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020817] via-[#02163f] to-[#031d5c]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm tracking-widest uppercase">
              Connecting Industrial Flow
            </div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              AMICO
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Công Ty Cổ Phần Kỹ Thuật
              <span className="block text-blue-400 mt-2">
                AMICO Việt Nam
              </span>
            </h2>

            <p className="text-lg text-gray-300 leading-8 mb-10">
              Chuyên cung cấp Ống, Phụ kiện cho Thép đen,
              Thép mạ kẽm, Thép không rỉ và các mặt hàng hỗ trợ
              khác cho lĩnh vực Cơ điện (MEP).
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2 text-blue-400">
                  15+
                </h3>
                <p>Kinh nghiệm</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2 text-blue-400">
                  100+
                </h3>
                <p>Khách hàng</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2 text-blue-400">
                  150+
                </h3>
                <p>Dự án đã cung cấp</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2 text-blue-400">
                  Toàn quốc
                </h3>
                <p>Hệ thống cung ứng</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1400&auto=format&fit=crop"
              alt="industrial"
              className="rounded-3xl shadow-2xl border border-blue-500/20"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 text-blue-700">
              Thư ngỏ
            </h2>

            <div className="space-y-6 text-lg leading-8 text-gray-700">
              <p>
                Công ty Cổ phần Kỹ thuật AMICO Việt Nam xin gửi
                tới Quý khách hàng, Quý đối tác lời chúc sức khỏe,
                thành công và thịnh vượng.
              </p>

              <p>
                Chúng tôi hoạt động trong lĩnh vực cung cấp Ống và
                phụ kiện cho Thép đen, Thép mạ kẽm, Thép không rỉ
                và các mặt hàng hỗ trợ khác cho lĩnh vực Cơ điện
                (MEP).
              </p>

              <p>
                Với đội ngũ giàu kinh nghiệm và hệ thống cung ứng
                chuyên nghiệp, AMICO cam kết mang đến những sản
                phẩm chất lượng cùng giải pháp tối ưu cho khách
                hàng.
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
              alt="city"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-[#06163b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              Sản phẩm
            </h2>
            <p className="text-xl text-gray-300">
              Cung cấp đồng bộ vật tư cho hệ thống MEP và công nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6 text-gray-900">
                  <h3 className="text-2xl font-bold mb-2 text-blue-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-white text-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-blue-700 mb-4">
              Ứng dụng
            </h2>
            <p className="text-xl text-gray-700">
              Giải pháp MEP cho mọi công trình
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#06163b] to-[#0a2d7a] rounded-3xl p-10 text-white shadow-xl"
              >
                <div className="text-5xl font-black text-blue-300 mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">{app}</h3>

                <p className="text-gray-300 leading-7">
                  Giải pháp cơ điện hiện đại, tối ưu hiệu quả vận
                  hành và tiết kiệm chi phí cho doanh nghiệp.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITY */}
      <section className="py-24 bg-[#020b24]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              Năng lực của chúng tôi
            </h2>
            <p className="text-xl text-gray-300">
              Nền tảng vững chắc – Cam kết dài lâu
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Nguồn hàng đa dạng',
              'Kho hàng lớn',
              'Đội ngũ chuyên nghiệp',
              'Kiểm soát chất lượng',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
              >
                <div className="text-blue-400 text-5xl font-black mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">{item}</h3>

                <p className="text-gray-300 leading-7">
                  Cam kết đồng hành cùng khách hàng bằng chất lượng,
                  uy tín và giải pháp tối ưu.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gradient-to-br from-[#04112e] via-[#05235f] to-[#03122f] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8">
                Đồng hành cùng bạn
                <span className="block text-blue-400 mt-3">
                  kiến tạo giá trị bền vững
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-9 mb-10">
                AMICO cam kết mang đến những sản phẩm và giải pháp
                MEP chất lượng cao, dịch vụ tận tâm và đồng hành lâu
                dài cùng khách hàng.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-blue-400 font-bold text-xl mb-3">
                    Địa chỉ
                  </h3>
                  <p className="text-gray-300 leading-7">
                    LECOO Building, 33A-P, Vạn Phúc,
                    Ngọc Hà, Hà Nội, Việt Nam
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-blue-400 font-bold text-xl mb-3">
                    Hotline
                  </h3>
                  <p className="text-gray-300 text-2xl font-bold">
                    0888 060 481
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-blue-400 font-bold text-xl mb-3">
                    Email
                  </h3>
                  <p className="text-gray-300">
                    info@amicovn.com
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-blue-400 font-bold text-xl mb-3">
                    Website
                  </h3>
                  <p className="text-gray-300">www.amicovn.com</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop"
                alt="factory"
                className="rounded-3xl shadow-2xl border border-blue-500/20"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
