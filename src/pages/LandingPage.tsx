import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 flex items-center bg-coffee-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-heading text-5xl lg:text-7xl font-black mb-6 leading-tight">
              Fresh Coffee,<br />
              <span className="text-caramel">Cozy Moments</span>
            </h1>
            <p className="text-lg lg:text-xl text-coffee/80 mb-10 max-w-lg leading-relaxed">
              Nikmati kopi terbaik dengan suasana hangat dan modern. Kami menyajikan biji kopi pilihan untuk setiap tegukan yang berkesan.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="px-8 py-4 bg-coffee text-white rounded-lg font-bold hover:bg-coffee-light transition-all shadow-xl hover-lift">
                View Menu
              </Link>
              <a href="#contact" className="px-8 py-4 border-2 border-coffee text-coffee rounded-lg font-bold hover:bg-coffee hover:text-white transition-all hover-lift">
                Visit Us
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7tQWGRbrFs-bsmZDP1IYzGQUT06Peuzioi_bEI8R9dzKtgC_Jcx-Q7YW8M7VNxDtCIZwCi1VIXPs2QGVVKFwFnXm-3J6e-SJyA0_tcQqYsEvaIf1oSyWBELxsXDPXORXHgpvndIdJ5rGUKXR_CGFsg4O3wE8VITkKBzqZU5XqIV2_79KhK7-RStc2ZbnqYs-0i8xZfdBlV20o0LgtawZ3eQO8-w-EcwRhQfNVcDT_BrOq0Z6Ih0VHXcDrIRBfW0g_sxR4gXeLnC0"
                alt="Steaming coffee cup"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-caramel p-6 rounded-lg text-white shadow-xl hidden lg:block">
              <p className="font-heading text-2xl font-bold italic">Est. 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-caramel mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-coffee/70 text-lg">
            The Morning Hub bermula dari kecintaan kami pada aroma kopi di pagi hari. Kami percaya bahwa setiap cangkir memiliki cerita, dan setiap pengunjung adalah bagian dari keluarga kami.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
          <div className="text-center p-8 bg-cream/30 rounded-2xl hover-lift">
            <div className="w-16 h-16 bg-coffee text-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">Premium Beans</h3>
            <p className="text-coffee/70">Kami menyeleksi biji kopi terbaik dari petani lokal dan internasional.</p>
          </div>
          <div className="text-center p-8 bg-cream/30 rounded-2xl hover-lift">
            <div className="w-16 h-16 bg-coffee text-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">Cozy Space</h3>
            <p className="text-coffee/70">Didesain modern namun tetap hangat untuk tempat kerja atau bercengkrama.</p>
          </div>
          <div className="text-center p-8 bg-cream/30 rounded-2xl hover-lift">
            <div className="w-16 h-16 bg-coffee text-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">Expert Baristas</h3>
            <p className="text-coffee/70">Barista berpengalaman yang siap menyajikan rasa kopi yang konsisten.</p>
          </div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section className="py-24 bg-coffee text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="text-left">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Our Signature Menu</h2>
              <div className="w-24 h-1 bg-caramel mb-6"></div>
            </div>
            <p className="max-w-md text-cream/70 text-right">Manjakan lidah Anda dengan pilihan kopi dan pastry premium buatan kami.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 hover-lift group">
              <div className="overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTCZzGWSdX2Z-Mq4RspgZzbG77yrwxdoM-ULb-FsvEbBL7fR1we7DJtJD0XnzGZqRx1EY1fBa35agy4dISUgvhmHRio6W3DVQUHbFPf13MgxYYhkR2CvE7Lp87KHCgxb_PzipXR8xi-vPVxuIfuK2mpKekpevE9fsBb4_U_1XEW9-68GwGz5D40iEENuOEbN-IX3lUChDyBIg2eI_mR--RoHS7n5enPhYWER-4tiIw1ZL3gUg4HJL0bcQZf-wpgnI62wlEt2Spf9g" alt="Espresso" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-heading text-xl font-bold">Espresso</h3>
                <span className="text-caramel font-bold">Rp 25k</span>
              </div>
              <p className="text-cream/60 text-sm">Rich, intense single shot of pure coffee essence.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 hover-lift group">
              <div className="overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDElPpaznTAHp8S0t8vo-7uUoqD76qZE2yqX3hGxzQLWKXH7BND6gEc5DZVivigoQEVafvsjgGBphk64eNuU6ql1VL0KGnVYo9fM59557Q0ZFOjnFgxv-86p8AOAuQkuY7caX8qzh-Km-DW2yhHbnunXTCgZMetNPS2oE8-RYsUgYXTkOSei0uoed3mtPpgK6LYZXwIrpLRVxQQ8jxt-JQSRQIgNRENql5ynTNFMHMJ1L_aAMnd6OwDV1AB7hlmFy9LOnk6aTvgylc" alt="Cappuccino" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-heading text-xl font-bold">Cappuccino</h3>
                <span className="text-caramel font-bold">Rp 35k</span>
              </div>
              <p className="text-cream/60 text-sm">Perfect balance of espresso, steamed milk, and foam.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 hover-lift group">
              <div className="overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYRWUtDgZnO2np-FGcOLlFIKiESxRsMlVGr1wibRsGyzmcpg8u04X2QJHq5UB3IGY8e4DXX7iCF8JWraBtdFMfVYcP0b3c1uPJdGu6NODJkcRVdy1BdUMUNrcb9G0x46Rt9LIF9O_fPFg7QqYkE68GqxMSQGehj8PI7X4G65fAT9MbzQW-Bn_Q9v_eTompT69WOXcAQr0pTHER39uX92BcoRX7NEgpnITRZnOkylfuvonJAtHpBjCyRcRmGgCphyg8pcsq6RwPIqs" alt="Latte" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-heading text-xl font-bold">Latte</h3>
                <span className="text-caramel font-bold">Rp 38k</span>
              </div>
              <p className="text-cream/60 text-sm">Creamy espresso drink with beautiful latte art.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm border border-white/10 hover-lift group">
              <div className="overflow-hidden rounded-2xl mb-4 aspect-square">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLxbbbwSDjtJ9VHLJ8Mzz5X-RAyOn7VoE-reapP_H0mVWHYoPKcGRICiFKyyYdhxaa5FLO1WeSjeD77ICpv8dDeHt5HhyF0dD5oKjhUkQajcX8ugJutuXzGIfIrHJfy9TJad3GcLVBFeiind6VbyEUv8J1jhjkIuTjEwzIBMXot7ju1O4OrccJI7BQ1h0JLpMqjvf2DYbatYtxbWL03c9il017R20pKdZeCkA1936akPo6kHul5WQ1jW67ixxXjosY2HQE1evSBHw" alt="Croissant" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-heading text-xl font-bold">Butter Croissant</h3>
                <span className="text-caramel font-bold">Rp 28k</span>
              </div>
              <p className="text-cream/60 text-sm">Flaky, buttery, and freshly baked every morning.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link to="/menu" className="inline-block px-8 py-4 border-2 border-caramel text-caramel rounded-lg font-bold hover:bg-caramel hover:text-white transition-all hover-lift">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center mb-16">Why People Love Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-coffee/5 hover-lift">
              <h4 className="font-heading text-xl font-bold text-caramel mb-4">Premium Coffee</h4>
              <p className="text-coffee/70 text-sm">Hanya menggunakan biji kopi grade A dengan roasting profil terbaik.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-coffee/5 hover-lift">
              <h4 className="font-heading text-xl font-bold text-caramel mb-4">Cozy Atmosphere</h4>
              <p className="text-coffee/70 text-sm">Pencahayaan hangat dan musik lo-fi yang menenangkan pikiran.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-coffee/5 hover-lift">
              <h4 className="font-heading text-xl font-bold text-caramel mb-4">Fresh Bakery</h4>
              <p className="text-coffee/70 text-sm">Pastry kami dipanggang setiap pagi untuk menjaga kesegaran.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-coffee/5 hover-lift">
              <h4 className="font-heading text-xl font-bold text-caramel mb-4">Friendly Barista</h4>
              <p className="text-coffee/70 text-sm">Senyum dan layanan terbaik adalah prioritas utama kami.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">Our Coffee Haven</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuATRo7yCj5Bzr_Wqx61VgPiP8e1Zz6zsboiIQ1V6im6Yb7IMtCupaiBNTJKasGu69m-5nrZp7X-MuT6rmsxhyRqbU5JhJaRN-HU16WN1hli3XKb4XItwdLtRXltld832axYSfn32ehUOIk1urrL3JwWrUWdRVh-g2Sldt8T_buebJpFnsPO2gNagIK_V7U-UYFeJ_MOhsT7lf9bFbmG5k49M-o1IYoEkohxlaFw1FcOBU9tHT5pMV2M0TdH0T_aqB7nhJbxHyFXZIg" alt="Cafe Interior" className="w-full h-64 object-cover rounded-xl hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSheqAOjfSB1sI4eyaGSRTZ4g-usFmVgHPQEftgK-Rp7aB0DD1gXAp851fGJrXyFWKHMtR2pT4zXztzCja4kkYp00TctkTKQm7GRHARiMBR3629xSLrTsclDfpbe9w8BC-5nMFVFdw1wb3G6iTgVIrj2yxQJv2ULMEfc2UphJcdOW0xIWh_Wiy9qQGHcvAloekpJbskunay0sKGkrGPcwpWDJlWusPVw-yHjq0Krm_EqL8Yf3GIQWrLq2hQjdmt8pCU7mVdaiDZ1s" alt="Coffee Table" className="w-full h-64 object-cover rounded-xl hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCI1XaRCuejP4-K8SowctlcM9NceMru_KMrH8lXMaaOwg3sTZI8z8yLakDTFJaN3HMc0Wowr9W8WJsFHxCWLI4nHXmPas7BG850VmPHja9OrFiXhzPaYC3BDujCmeMjp2SUpihEDclDim7-pW5uhj5lTA6TU2Dr6TnPY_wPH2nh-Pqx2leucxRm11zSRfziSK6ucYMi4jXJ-km_VozbMgbFvE5iIRz4fxVDDLOmo2hV3hNn2y8n76mlVIRYo3nXjcJZup7PIiGLpE" alt="Espresso Machine" className="w-full h-64 object-cover rounded-xl hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMijhsd3XbGI1Gxvj5LU_TqjR2famzRm4NTZkEC63NuSBK9jK5L8TzZU9KFFt9uSL0Dc0sXUFvXeWHaBKEOOgcaOBqxvgxr-GmkWUpD-gfGCQFGVAXAGckrEVoD30JDQ74_TAVysjXfa8aY6nf_qZxgAyrm6nBHv8IQadw5vtAzlW2BbxUfuzNUUMMTZEvIXrSJNq0axua6GhCGfRecT7MdDT4kovQuPYG1bBkvdURYLFzy1aWI2O9r-HZF0Dxx5wPC2k1tQGAuBY" alt="Latte Art" className="w-full h-64 object-cover rounded-xl hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-coffee-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center mb-16">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg italic">
              <p className="mb-6">"Tempat paling nyaman buat WFC! Kopinya juara banget, apalagi Hazelnut Latte-nya. Suasananya bikin betah berjam-jam."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream rounded-full"></div>
                <div>
                  <p className="font-bold text-coffee not-italic">Andi Pratama</p>
                  <p className="text-xs text-caramel not-italic">Graphic Designer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg italic">
              <p className="mb-6">"Croissant-nya super flaky dan buttery. Sangat cocok dipadukan dengan Cappuccino hangat di pagi hari."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream rounded-full"></div>
                <div>
                  <p className="font-bold text-coffee not-italic">Siti Aisyah</p>
                  <p className="text-xs text-caramel not-italic">Food Blogger</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg italic">
              <p className="mb-6">"Barista sangat ramah dan mengerti banget soal kopi. Bisa request tingkat kemanisan sesuai selera kita."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cream rounded-full"></div>
                <div>
                  <p className="font-bold text-coffee not-italic">Rendy Wijaya</p>
                  <p className="text-xs text-caramel not-italic">Freelancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-8">Visit The Hub</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-caramel mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-coffee/70">Jl. Kopi Harapan No. 42, Jakarta Selatan, Indonesia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-caramel mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Opening Hours</h4>
                  <p className="text-coffee/70">Mon - Fri: 08:00 AM - 10:00 PM</p>
                  <p className="text-coffee/70">Sat - Sun: 07:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-caramel mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <p className="text-coffee/70">+62 812 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 bg-cream rounded-3xl overflow-hidden relative shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center text-coffee/30 flex-col z-10">
              <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              <p className="font-semibold">Interactive Map Placeholder</p>
            </div>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuADTdGgsyHhuBvRHmK86d7_sD2dLcdcXv8ZgLYqBi8y0I_CAjGVBxj9fNXbTNb4mPOFekOQPznpClxugcJK73_jhJ7cL0fBx63lJF3qIsYorXbfhFnpE0GUxKVJEiT8VbRbl9_xgKWjx9jrxsBqAnXEHhnBwcNhiQmXj4YgeAypCijUBTvAoSffj9lxCX2urxv4BrJH7mFJ8O4Ln2eGPZuESzY7GF4MmzcGYLCUBDrIBsgT3Sw4933FZmYh4WKIL1xElLnFy-M-1Do" alt="Map Preview" className="w-full h-full object-cover opacity-40 absolute inset-0" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    </>
  );
}
