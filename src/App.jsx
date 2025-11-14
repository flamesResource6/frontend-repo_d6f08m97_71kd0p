import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ExternalLink, Gamepad2, Code2, Boxes, Server, Wrench, FileStack, LineChart, Globe, Palette, Smartphone, Megaphone, PenTool, Brain, ShoppingCart, Mail, Phone, Instagram, Send } from 'lucide-react'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
)

const Header = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#web', label: 'Web' },
    { href: '#shop', label: 'Shop' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        <div className="font-extrabold tracking-tight text-neutral-900">VELLIXAO OFFICIAL</div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map(link => (
            <a key={link.href} href={link.href} className="text-neutral-700 hover:text-neutral-900 transition-colors">{link.label}</a>
          ))}
        </nav>
        <a href="#shop" className="md:inline-flex hidden items-center gap-2 bg-neutral-900 text-white px-3 py-1.5 rounded-md text-sm hover:bg-neutral-800 transition-colors">
          <ShoppingCart size={16}/> Shop
        </a>
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div id="home" className="relative min-h-[80vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4 w-max">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"/> 3D Interactive • Smooth & Lightweight
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-neutral-900">
            Hai! Aku Neko — maskot anime Jepang yang menyapa ramah.
          </h1>
          <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
            Selamat datang di website resmi VELLIXAO OFFICIAL. Di sini kamu akan menemukan profil, portofolio web, toko layanan digital, dan cara menghubungi kami — semuanya dengan visual futuristik, animasi 3D yang halus, dan performa yang ringan untuk semua perangkat.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#web" className="pointer-events-auto inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-md text-sm hover:bg-neutral-800 transition-colors">
              Jelajahi Web <ExternalLink size={16}/>
            </a>
            <a href="#about" className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm border border-neutral-300 bg-white/70 hover:bg-white transition-colors">
              Tentang Situs
            </a>
          </div>
          <div className="mt-6 text-neutral-700 text-sm">
            Developer: <span className="font-semibold">VELLIXAO</span> • Job: Programer, Developer, Desainer
          </div>
        </motion.div>
        <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)]">
            <div className="text-2xl font-bold">VELLIXAO OFFICIAL</div>
            <div className="text-neutral-600">Portofolio • Layanan • Kontak</div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-neutral-700">
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center gap-2"><Gamepad2 size={16}/> Games</div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center gap-2"><Code2 size={16}/> Coding</div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center gap-2"><Boxes size={16}/> Tools</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const About = () => (
  <Section id="about" className="py-16 md:py-24">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="prose prose-neutral max-w-none">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Tentang Website</h2>
      <p className="mt-4 text-neutral-700 leading-relaxed">
        Website ini dirancang untuk menjadi pusat informasi mengenai VELLIXAO: siapa kami, apa yang kami buat, dan layanan apa yang tersedia. Fokus kami adalah pengalaman pengguna yang halus, visual futuristik, dan performa ringan. Navigasi sederhana dengan 5 bagian utama: Home, About, Web, Shop, dan Contact.
      </p>
      <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-neutral-700">
        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"/> Animasi 3D responsif, berjalan mulus di semua perangkat.</li>
        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"/> Desain bersih, modern, dan profesional.</li>
        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"/> Portofolio terstruktur dengan link langsung ke proyek.</li>
        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"/> Toko layanan digital dengan deskripsi dan harga jelas.</li>
      </ul>
      <div className="mt-6 p-4 rounded-xl border border-neutral-200 bg-neutral-50">
        <div className="font-semibold">Gaya Visual & Animasi</div>
        <p className="text-neutral-700 mt-1">Saat dibuka, halaman menampilkan maskot Neko dengan nuansa teknologi yang interaktif. Gerakan mengikuti kursor, transisi halus, dan lapisan glassmorphism untuk kesan profesional namun playful.</p>
      </div>
    </motion.div>
  </Section>
)

const WebLinks = () => {
  const items = [
    {
      title: 'Game Guardian & Roblox Tools',
      icon: <Wrench className="text-emerald-600" size={20} />, 
      url: 'https://vellixaotools.byethost3.com'
    },
    {
      title: 'Rekapan Pembelajaran Coding',
      icon: <Code2 className="text-blue-600" size={20} />, 
      url: 'https://basiccode.vercel.app'
    },
    {
      title: 'Script & Tools Roblox (Exploit)',
      icon: <Gamepad2 className="text-indigo-600" size={20} />, 
      url: 'https://scriptblox.com'
    },
    {
      title: 'Script Game Guardian',
      icon: <Server className="text-purple-600" size={20} />, 
      url: 'https://scriptggby-vellixao.vercel.app'
    },
    {
      title: 'Hosting File',
      icon: <FileStack className="text-orange-600" size={20} />, 
      url: 'https://uploader-website.vercel.app'
    },
  ]
  return (
    <Section id="web" className="py-16 md:py-24">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Kumpulan Website</h2>
        <span className="text-xs text-neutral-600">Tampilan fresh dengan animasi halus</span>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.a
            key={it.title}
            href={it.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative rounded-xl border border-neutral-200 bg-white p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                {it.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-neutral-900">{it.title}</div>
                <div className="text-xs text-neutral-600 mt-1">Klik untuk membuka link</div>
              </div>
              <ExternalLink size={16} className="text-neutral-400 group-hover:text-neutral-900 transition-colors"/>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

const Shop = () => {
  const services = [
    { title: 'Panel Pterodactyl — Public', price: 'Rp10.000', icon: <Server size={18} />, desc: 'Panel public untuk kebutuhan hosting game dan aplikasi. Stabil, mudah digunakan, dan siap pakai.' },
    { title: 'Panel Pterodactyl — Private', price: 'Rp25.000', icon: <Server size={18} />, desc: 'Panel privat dengan kontrol penuh dan keamanan lebih untuk penggunaan eksklusif.' },
    { title: 'VIP Script', price: 'Hubungi WA', icon: <Gamepad2 size={18} />, desc: 'Akses script premium. Dapatkan detail melalui WhatsApp untuk informasi lengkap dan update.' , link: 'https://wa.me/6285706400' },
    { title: 'Web Development', price: 'Mulai Rp499.000', icon: <Globe size={18} />, desc: 'Custom website menggunakan teknologi modern. Desain responsif, performa optimal, dan kode bersih.' },
    { title: 'UI/UX Design', price: 'Mulai Rp399.000', icon: <Palette size={18} />, desc: 'Desain antarmuka dan pengalaman pengguna yang elegan, intuitif, dan berfokus pada konversi.' },
    { title: 'Mobile Apps', price: 'Mulai Rp799.000', icon: <Smartphone size={18} />, desc: 'Pengembangan aplikasi mobile yang cepat, stabil, dan menarik untuk Android/iOS.' },
    { title: 'Digital Marketing', price: 'Mulai Rp299.000', icon: <Megaphone size={18} />, desc: 'Layanan pemasaran digital: SEO, iklan, dan strategi konten untuk meningkatkan jangkauan brand.' },
    { title: 'Graphic Design', price: 'Mulai Rp199.000', icon: <PenTool size={18} />, desc: 'Desain grafis untuk logo, poster, banner, hingga brand guideline yang profesional.' },
    { title: 'IT Consulting', price: 'Mulai Rp149.000', icon: <Brain size={18} />, desc: 'Expert technology consulting services. Strategic planning, technical architecture, and solution design.' },
  ]
  return (
    <Section id="shop" className="py-16 md:py-24">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Shop Layanan</h2>
        <span className="text-xs text-neutral-600">Pilih layanan, baca deskripsi, lalu pesan</span>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-xl border border-neutral-200 bg-white p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-800">
                {svc.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-neutral-900">{svc.title}</div>
                <div className="text-sm text-emerald-700 font-medium mt-0.5">{svc.price}</div>
              </div>
            </div>
            <p className="text-sm text-neutral-700 mt-3 leading-relaxed">{svc.desc}</p>
            <div className="mt-4 flex items-center gap-2">
              {svc.link ? (
                <a href={svc.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 px-3 py-1.5 rounded-md">
                  Pesan via WhatsApp <ExternalLink size={16} />
                </a>
              ) : (
                <a href={`https://wa.me/6285706400133?text=Halo,%20saya%20ingin%20memesan:%20${encodeURIComponent(svc.title)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 px-3 py-1.5 rounded-md">
                  Pesan Sekarang <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

const Contact = () => {
  const contacts = [
    { label: 'WhatsApp', icon: <Phone/>, url: 'https://wa.me/6285706400133', color: 'from-emerald-400 to-emerald-600' },
    { label: 'Instagram', icon: <Instagram/>, url: 'https://www.instagram.com/vellix_cc', color: 'from-fuchsia-400 to-pink-600' },
    { label: 'Telegram', icon: <Send/>, url: 'https://t.me/VELLIX_AO', color: 'from-sky-400 to-blue-600' },
    { label: 'Gmail', icon: <Mail/>, url: 'mailto:aurcusojapan@gmail.com', color: 'from-amber-400 to-red-500' },
  ]

  return (
    <Section id="contact" className="py-16 md:py-24">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Contact</h2>
      <p className="mt-2 text-neutral-600">Terhubung dengan kami melalui platform di bawah ini.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((c, i) => (
          <a key={c.label} href={c.url} target="_blank" rel="noreferrer" className="group [transform-style:preserve-3d] perspective-[1200px]">
            <div className="relative h-28 rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-x-6 group-hover:rotate-y-[-6deg]">
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none`}/>
              <div className="absolute -inset-1 rounded-xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity bg-gradient-to-br from-white/0 to-black/10 pointer-events-none"/>
              <div className="relative h-full w-full p-5 grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center shadow-lg">
                  {c.icon}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">{c.label}</div>
                  <div className="text-xs text-neutral-600">Klik untuk membuka</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 text-sm text-neutral-600">
        Developer: <span className="font-semibold">VELLIXAO</span> • Job: Programer, Developer, Desainer
      </div>
    </Section>
  )
}

export default function App() {
  React.useEffect(() => {
    try {
      document.documentElement.style.scrollBehavior = 'smooth'
    } catch (e) {}
  }, [])

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <Hero />
      <About />
      <WebLinks />
      <Shop />
      <Contact />
      <footer className="py-8 border-t border-neutral-200 mt-8">
        <Section>
          <div className="text-center text-sm text-neutral-600">© {new Date().getFullYear()} VELLIXAO OFFICIAL • All rights reserved.</div>
        </Section>
      </footer>
    </div>
  )
}
