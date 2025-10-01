export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gray-900 text-white">
      <h2 className="text-5xl font-bold mb-4">Merhaba, ben Baha 👋</h2>
      <p className="text-lg max-w-2xl mb-6">
        Bilgisayar mühendisiyim. Web geliştirme, yapay zekâ ve grafik programlama projeleri üzerinde çalışıyorum.
      </p>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        Projelerime Göz At
      </a>
    </section>
  );
}