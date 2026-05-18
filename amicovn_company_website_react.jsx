export default function AMICOVNWebsite() {
  const products = [
    {
      title: "Ống thép đen",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Ống thép mạ kẽm",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Ống thép không gỉ",
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Van công nghiệp",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Phụ kiện HVAC",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Hệ thống PCCC",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const projects = [
    "Nhà máy công nghiệp",
    "Trung tâm thương mại",
    "Tòa nhà văn phòng",
    "Hệ thống cấp thoát nước",
    "Hệ thống HVAC",
    "Hệ thống PCCC",
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-[0.35em] text-blue-500">
              AMICO
            </h1>
            <p className="text-[10px] text-red-400 tracking-[0.35em] mt-1">
              CONNECTING INDUSTRIAL FLOW
            </p>
          </div>

          <nav className="hidden lg:flex gap-8 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition">Giới thiệu</a>
            <a href="#products" className="hover:text-blue-400 transition">Sản phẩm</a>
            <a href="#projects" className="hover:text-blue-400 transition">Dự án</a>
            <a href="#capacity" className="hover:text-blue-400 transition">Năng lực</a>
            <a href="#contact" className="hover:text-blue-400 transition">Liên hệ</a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1920&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-950/50" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex px-5 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-sm mb-8">
              Công Ty Cổ Phần Kỹ Thuật AMICO Việt Nam
            </div>

            <h2 className="text-6xl lg:text-8xl font-black leading-none mb-8">
              KẾT NỐI
              <span className="block text-blue-500 mt-2">
                DÒNG CHẢY
              </span>
              <span className="block mt-2">CÔNG NGHIỆP</span>
            </h2>

            <p className="text-slate-300 text-xl leading-9 max-w-2xl mb-10">
              Chuyên cung cấp Ống thép, Van công nghiệp, Phụ kiện HVAC,
              Hệ thống PCCC và giải pháp MEP cho các công trình công nghiệp,
              thương mại và hạ tầng kỹ thuật trên toàn quốc.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-500 transition px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-blue-700/40"
              >
                Liên hệ tư vấn
              </a>

              <a
                href="#products"
                className="border border-blue-600 hover:bg-blue-600/10 transition px-10 py-5 rounded-2xl font-bold"
              >
                Xem sản phẩm
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/5 border border-white/10 backdrop-blur rounded-[2rem] p-6 shadow-2xl shadow-blue-950/50">
              <img
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1400&auto=format&fit=crop"
                alt="Factory"
                className="rounded-[1.5rem] h-[700px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop"
              alt="AMICO"
              className="rounded-[2rem] shadow-2xl"
            />
          </div>

          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Về AMICO
            </p>

            <h3 className="text-5xl font-black leading-tight mb-8">
              Đồng hành cùng các công trình
              <span className="block text-blue-500">
                MEP hiện đại
              </span>
            </h3>

            <p className="text-slate-300 leading-9 text-lg mb-8">
              AMICO Việt Nam hoạt động trong lĩnh vực cung cấp vật tư và giải
              pháp cho hệ thống Cơ điện (MEP), HVAC, cấp thoát nước, PCCC và
              công nghiệp. Với định hướng phát triển bền vững, AMICO luôn đặt
              chất lượng, uy tín và hiệu quả làm giá trị cốt lõi.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8">
                <div className="text-5xl font-black text-blue-500 mb-3">15+</div>
                <p className="text-slate-300">Năm kinh nghiệm</p>
              </div>

              <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8">
                <div className="text-5xl font-black text-blue-500 mb-3">150+</div>
                <p className="text-slate-300">Dự án cung cấp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Danh mục sản phẩm
            </p>

            <h3 className="text-6xl font-black mb-6">Sản phẩm AMICO</h3>

            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-9">
              Cung cấp đồng bộ vật tư cho hệ thống MEP, công nghiệp và hạ tầng
              kỹ thuật.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h4 className="text-3xl font-bold mb-4">{item.title}</h4>

                  <p className="text-slate-400 leading-8">
                    Sản phẩm đạt tiêu chuẩn chất lượng, đáp ứng nhiều hạng mục
                    công trình công nghiệp và thương mại.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Ứng dụng & dự án
            </p>

            <h3 className="text-6xl font-black">
              Giải pháp cho mọi công trình
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[2rem] group h-[420px]"
              >
                <img
                  src={`https://picsum.photos/1200/900?random=${index + 20}`}
                  alt={item}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute bottom-0 p-8">
                  <h4 className="text-4xl font-black leading-tight">
                    {item}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="capacity" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Năng lực doanh nghiệp
            </p>

            <h3 className="text-6xl font-black">
              Nền tảng vững chắc
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Nguồn hàng đa dạng",
              "Kho bãi quy mô lớn",
              "Đội ngũ chuyên nghiệp",
              "Kiểm soát chất lượng",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-[2rem] border border-slate-800 p-10 hover:border-blue-500 transition"
              >
                <div className="w-24 h-24 rounded-full bg-blue-600/20 flex items-center justify-center text-4xl mb-8">
                  ⚙️
                </div>

                <h4 className="text-3xl font-bold mb-5 leading-tight">
                  {item}
                </h4>

                <p className="text-slate-400 leading-8">
                  Cam kết mang đến giải pháp tối ưu, dịch vụ chuyên nghiệp và
                  giá trị bền vững.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-6xl font-black leading-tight mb-10">
            Kết nối dòng chảy công nghiệp
            <span className="block mt-3">Kiến tạo giá trị bền vững</span>
          </h3>

          <p className="text-blue-100 text-xl leading-9 mb-12">
            AMICO cam kết mang đến sản phẩm chất lượng, giải pháp tối ưu và
            dịch vụ tận tâm cho mọi đối tác và khách hàng.
          </p>

          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 font-black px-12 py-5 rounded-2xl hover:scale-105 transition"
          >
            Liên hệ ngay
          </a>
        </div>
      </section>

      <section id="contact" className="py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
              Thông tin liên hệ
            </p>

            <h3 className="text-6xl font-black mb-12">AMICO Việt Nam</h3>

            <div className="space-y-8 text-lg text-slate-300 leading-8">
              <div>
                <div className="text-white text-2xl font-bold mb-2">Địa chỉ</div>
                <p>LECOO Building, 33A-P, Vạn Phúc, Ngọc Hà, Hà Nội</p>
              </div>

              <div>
                <div className="text-white text-2xl font-bold mb-2">Hotline</div>
                <p>0888 060 481</p>
              </div>

              <div>
                <div className="text-white text-2xl font-bold mb-2">Email</div>
                <p>info@amicovn.com</p>
              </div>

              <div>
                <div className="text-white text-2xl font-bold mb-2">Website</div>
                <p>www.amicovn.com</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-10 shadow-2xl shadow-blue-900/30">
            <h4 className="text-4xl font-black mb-10">Yêu cầu tư vấn</h4>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Nội dung yêu cầu"
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-6 py-5 outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 transition rounded-2xl py-5 text-xl font-black"
              >
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>
      </section>

            {/* News Section */}
      <section className="py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-4">
                Tin tức & hoạt động
              </p>
              <h3 className="text-5xl font-black">Cập nhật từ AMICO</h3>
            </div>

            <button className="border border-blue-500 px-8 py-4 rounded-2xl hover:bg-blue-500/10 transition font-bold">
              Xem tất cả
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Giải pháp HVAC cho nhà máy công nghiệp hiện đại",
                image:
                  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "AMICO mở rộng hệ thống kho vận miền Bắc",
                image:
                  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Ứng dụng vật tư MEP trong công trình xanh",
                image:
                  "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-blue-500 transition duration-500 hover:-translate-y-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <div className="text-blue-400 text-sm mb-4">AMICO NEWS</div>

                  <h4 className="text-2xl font-bold leading-tight mb-5">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 leading-8 mb-6">
                    Cập nhật thông tin mới nhất về giải pháp công nghiệp,
                    vật tư MEP và hoạt động doanh nghiệp.
                  </p>

                  <button className="text-blue-400 font-bold hover:text-blue-300 transition">
                    Đọc thêm →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
            Đối tác & khách hàng
          </p>

          <h3 className="text-5xl font-black mb-16">
            Đồng hành cùng nhiều doanh nghiệp
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "DAIKIN",
              "REE",
              "VINACONEX",
              "DELTA",
              "Hòa Bình",
              "SIGMA",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-3xl py-10 text-2xl font-black text-slate-400 hover:text-blue-400 hover:border-blue-500 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-12 border-b border-slate-800">
          <div>
            <h3 className="text-4xl font-black tracking-[0.3em] text-blue-500 mb-4">
              AMICO
            </h3>

            <p className="text-slate-400 leading-8">
              Chuyên cung cấp vật tư và giải pháp MEP, HVAC, PCCC và công
              nghiệp cho các công trình trên toàn quốc.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6">Danh mục</h4>

            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-blue-400 transition">Giới thiệu</a></li>
              <li><a href="#products" className="hover:text-blue-400 transition">Sản phẩm</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Dự án</a></li>
              <li><a href="#capacity" className="hover:text-blue-400 transition">Năng lực</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6">Sản phẩm</h4>

            <ul className="space-y-4 text-slate-400">
              <li>Ống thép đen</li>
              <li>Ống thép mạ kẽm</li>
              <li>Ống thép không gỉ</li>
              <li>Van công nghiệp</li>
              <li>Phụ kiện HVAC</li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6">Liên hệ</h4>

            <div className="space-y-4 text-slate-400 leading-8">
              <p>LECOO Building, Hà Nội</p>
              <p>0888 060 481</p>
              <p>info@amicovn.com</p>
              <p>www.amicovn.com</p>
            </div>
          </div>
        </div>

        <footer className="border-t border-slate-800 py-10 text-center text-slate-500 text-sm">
        © 2026 AMICO Việt Nam — Connecting Industrial Flow
      </footer>
    </div>
  );
}
