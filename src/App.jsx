import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ExternalLink, Gamepad2, Code2, Wrench, Server, FileStack, Globe, Palette, Smartphone, Megaphone, PenTool, Brain, ShoppingCart, Mail, Phone, Instagram, Send, Menu } from 'lucide-react'

// Lightweight UI with subtle motion and clear information architecture

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
)

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    try {
      const m = window.matchMedia('(prefers-reduced-motion: reduce)')
      setReduced(m.matches)
      const onChange = () => setReduced(m.matches)
      m.addEventListener ? m.addEventListener('change', onChange) : m.addListener(onChange)
      return () => m.removeEventListener ? m.removeEventListener('change', onChange) : m.removeListener(onChange)
    } catch {}
  }, [])
  return reduced
}

// Only render Spline when in view to keep it light
const SplineLite = () => {
  const containerRef = React.useRef(null)
  const [inView, setInView] = React.useState(false)
  const reduced = usePrefersReducedMotion()

  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true)
        })
      },
      { root: null, threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative aspect-[4/3] w-full max-w-md mx-auto rounded-xl border border-neutral-200 bg-white overflow-hidden">
      {inView && !reduced ? (
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      ) : (
        <div className="h-full w-full grid place-items-center text-neutral-500 text-sm">Visual 3D dimuat saat terlihat</div>
      )}
    </div>
  )
}

const Header = () => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]
  const [open, setOpen] = React.useState(false)
  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        <a href="#home" className="font-extrabold tracking-tight text-neutral-900">VELLIXAO OFFICIAL</a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map(link => (
            <a key={link.href} href={link.href} className="text-neutral-700 hover:text-neutral-900 transition-colors">{link.label}</a>
          ))}
          <a href="#services" className="inline-flex items-center gap-2 bg-neutral-900 text-white px-3 py-1.5 rounded-md text-sm hover:bg-neutral-800 transition-colors">
            <ShoppingCart size={16}/> Hire Me
          </a>
        </nav>
        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-md border border-neutral-200">
          <Menu size={18} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-3 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-1.5 rounded-md border border-neutral-200 hover:bg-neutral-50">{l.label}</a>
            ))}
            <a href="#services" onClick={() => setOpen(false)} className="px-3 py-1.5 rounded-md bg-neutral-900 text-white">Hire Me</a>
          </div>
        </div>
      )}
    </div>
  )
}

const Hero = () => {
  return (
    <div id="home" className="relative py-12 md:py-20 bg-white">
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4 w-max">
                Smooth • Lightweight • Professional
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-neutral-900">
                VELLIXAO — Programmer • Developer • Designer
              </h1>
              <p className="mt-4 text-neutral-600 text-base sm:text-lg leading-relaxed">
                Portofolio profesional dengan sentuhan karakter anime bergaya Jepang. Fokus pada kejelasan informasi, performa tinggi, dan animasi mikro yang halus tanpa latar belakang bergerak yang berat.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#portfolio" className="inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-md text-sm hover:bg-neutral-800 transition-colors">
                  Lihat Portfolio <ExternalLink size={16}/>
                </a>
                <a href="#services" className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm border border-neutral-300 hover:bg-neutral-50 transition-colors">
                  Jasa & Harga
                </a>
              </div>
            </motion.div>
          </div>
          <div>
            <SplineLite />
            <p className="mt-3 text-xs text-neutral-500 text-center">Maskot anime (Neko) tampil sebagai elemen fokus — bukan latar belakang — agar tetap ringan.</p>
          </div>
        </div>
      </Section>
    </div>
  )
}

const About = () => (
  <Section id="about" className="py-14 md:py-20">
    <div className="max-w-3xl">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Tentang Website</h2>
      <p className="mt-4 text-neutral-700 leading-relaxed">
        Situs ini menyajikan profil dan karya VELLIXAO dengan struktur sederhana: Home, About, Portfolio, Services, dan Contact. Semua elemen dirancang dengan tipografi bersih, kontras warna yang jelas, serta hierarki visual yang konsisten.
      </p>
      <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-neutral-700">
        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"/> Animasi mikro yang halus, tanpa latar belakang animasi berat.</li>
        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"/> Komponen responsif untuk semua ukuran layar.</li>
        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"/> Navigasi ringkas dan mudah dimengerti.</li>
        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"/> Konten singkat, relevan, dan profesional.</li>
      </ul>
    </div>
  </Section>
)

const Portfolio = () => {
  const items = [
    {
      title: 'Game Guardian & Roblox Tools',
      icon: <Wrench className="text-emerald-600" size={20} />, 
      url: 'https://vellixaotools.byethost3.com',
      desc: 'Kumpulan tools untuk kebutuhan game modding dan utilitas.'
    },
    {
      title: 'Rekapan Pembelajaran Coding',
      icon: <Code2 className="text-blue-600" size={20} />, 
      url: 'https://basiccode.vercel.app',
      desc: 'Catatan, snippet, dan pembelajaran coding yang terstruktur.'
    },
    {
      title: 'Script & Tools Roblox (Exploit)',
      icon: <Gamepad2 className="text-indigo-600" size={20} />, 
      url: 'https://scriptblox.com',
      desc: 'Referensi script dan tools terkait Roblox.'
    },
    {
      title: 'Script Game Guardian',
      icon: <Server className="text-purple-600" size={20} />, 
      url: 'https://scriptggby-vellixao.vercel.app',
      desc: 'Koleksi script untuk Game Guardian.'
    },
    {
      title: 'Hosting File',
      icon: <FileStack className="text-orange-600" size={20} />, 
      url: 'https://uploader-website.vercel.app',
      desc: 'Layanan unggah dan simpan file sederhana.'
    },
  ]
  return (
    <Section id="portfolio" className="py-14 md:py-20">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Portfolio</h2>
        <span className="text-xs text-neutral-600">Link proyek dengan deskripsi singkat</span>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.a
            key={it.title}
            href={it.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group relative rounded-xl border border-neutral-200 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-neutral-50 border border-neutral-200 flex items-center justify-center">
                {it.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-neutral-900">{it.title}</div>
                <p className="text-xs text-neutral-600 mt-1">{it.desc}</p>
              </div>
              <ExternalLink size={16} className="text-neutral-400 group-hover:text-neutral-900 transition-colors"/>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

const Services = () => {
  const services = [
    { title: 'Panel Pterodactyl — Public', price: 'Rp10.000', icon: <Server size={18} />, desc: 'Panel public untuk hosting game dan aplikasi. Stabil, mudah digunakan, dan siap pakai.' },
    { title: 'Panel Pterodactyl — Private', price: 'Rp25.000', icon: <Server size={18} />, desc: 'Panel privat dengan kontrol penuh serta keamanan lebih untuk penggunaan eksklusif.' },
    { title: 'VIP Script', price: 'Hubungi via WhatsApp', icon: <Gamepad2 size={18} />, desc: 'Akses script premium. Dapatkan detail dan update melalui WhatsApp.', link: 'https://wa.me/6285706400' },

    { title: 'Web Development', price: 'Mulai Rp499.000', icon: <Globe size={18} />, desc: 'Custom website development using modern technologies and best practices. Responsive design, optimized performance, and clean code.' },
    { title: 'UI/UX Design', price: 'Mulai Rp399.000', icon: <Palette size={18} />, desc: 'User-centric interface and experience design. Clear visual hierarchy, consistent components, and usability focus.' },
    { title: 'Mobile Apps', price: 'Mulai Rp799.000', icon: <Smartphone size={18} />, desc: 'Cross-platform app development with smooth performance and intuitive UX.' },

    { title: 'Digital Marketing', price: 'Mulai Rp299.000', icon: <Megaphone size={18} />, desc: 'Campaign strategy, SEO, paid ads, and content planning to grow your audience.' },
    { title: 'Graphic Design', price: 'Mulai Rp199.000', icon: <PenTool size={18} />, desc: 'Brand assets, logos, posters, and marketing visuals crafted professionally.' },
    { title: 'IT Consulting', price: 'Mulai Rp149.000', icon: <Brain size={18} />, desc: 'Expert technology consulting services. Strategic planning, technical architecture, and solution design.' },
  ]
  return (
    <Section id="services" className="py-14 md:py-20">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Services & Pricing</h2>
        <span className="text-xs text-neutral-600">Pilih layanan, baca deskripsi, lalu pesan</span>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group rounded-xl border border-neutral-200 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
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
    <Section id="contact" className="py-14 md:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Contact</h2>
      <p className="mt-2 text-neutral-600">Pilih platform di bawah untuk terhubung langsung.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contacts.map((c) => (
          <a key={c.label} href={c.url} target="_blank" rel="noreferrer" className="group">
            <div className="relative h-24 rounded-xl border border-neutral-200 bg-white overflow-hidden transition-transform duration-300 group-hover:-translate-y-0.5">
              <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-10 group-hover:opacity-15 transition-opacity pointer-events-none`}/>
              <div className="relative h-full w-full p-5 grid grid-cols-[auto_1fr] items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center shadow-md">
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
        © {new Date().getFullYear()} VELLIXAO OFFICIAL • Programmer • Developer • Designer
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
      <Portfolio />
      <Services />
      <Contact />
    </div>
  )
}
