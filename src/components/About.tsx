export default function About() {
	return (
		<section id="about" className="space-y-6">
			{/* Judul Section */}
			<h3 className="text-sm uppercase tracking-wider font-semibold text-zinc-700 dark:text-zinc-100">
				About
			</h3>

			{/* Paragraf 1 */}
			<p className="text-sm text-zinc-600 dark:text-zinc-200 leading-relaxed">
				Saya adalah seorang mahasiswa{" "}
				<span className="font-medium text-zinc-700 dark:text-zinc-100">
					STITEK Bontang
				</span>{" "}
				jurusan Teknik Informatika yang saat ini sedang mendalami mata kuliah{" "}
				<span className="font-medium text-zinc-700 dark:text-zinc-100">
					Pemrograman Berbasis Framework
				</span>
				. Fokus utama saya adalah memahami konsep pengembangan aplikasi modern, termasuk penggunaan framework
				frontend maupun backend, sekaligus menerapkan praktik terbaik dalam penulisan kode yang bersih, efisien,
				dan terstruktur.
			</p>

			{/* Paragraf 2 */}
			<p className="text-sm text-zinc-600 dark:text-zinc-200 leading-relaxed">
				Melalui mata kuliah ini, saya terus mengembangkan kemampuan dalam membangun proyek web dinamis,
				mempelajari arsitektur aplikasi, serta meningkatkan pemahaman tentang pengelolaan komponen, routing, dan
				integrasi API. Tujuan saya adalah menjadi pengembang yang kompeten dan mampu menghasilkan aplikasi yang
				fungsional, responsif, dan dapat diandalkan.
			</p>
		</section>
	);
}
