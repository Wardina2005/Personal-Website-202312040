import Image from 'next/image';

export default function Projects() {
	return (
		<section id="projects" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wider font-semibold text-zinc-700 dark:text-white">
				Projects
			</h3>

			{/* ✅ Project 1 */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="project image"
					src="/web1.jpg"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={600}
					height={350}
				/>

				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Lean Fashion – Website Toko Tas Elegan
					</h4>

					<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
						Lean Fashion adalah website e-commerce yang menampilkan koleksi tas branded dengan
						desain elegan dan modern. Website ini memiliki fitur beranda, produk, detail produk,
						keranjang belanja, dan sistem login untuk pengalaman pengguna yang lebih personal.
					</p>

					{/* 🌈 Tag dengan warna berbeda */}
					<div className="flex items-center flex-wrap gap-x-2.5 mt-3">
						<span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
							Lean Fashion
						</span>
						<span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
							E-commerce
						</span>
						<span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
							Web Project
						</span>
					</div>
				</div>
			</div>

			{/* ✅ Project 2 */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="project image"
					src="/web2.jpg"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={600}
					height={350}
				/>

				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Company Profile – PT Wardina Darmawan
					</h4>

					<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
						Project ini merupakan website company profile profesional yang berisi informasi 
						perusahaan, layanan seperti Web Development, IT Konsultasi, dan Pelatihan TI. 
						Tampilan dibuat modern, rapi, dan responsif menggunakan HTML, CSS, dan Bootstrap.
						Fitur yang ditampilkan mencakup data perusahaan, layanan lengkap, serta footer
						informasi perusahaan.
					</p>

					<div className="flex items-center flex-wrap gap-x-2.5 mt-3">
						<span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
							Company Profile
						</span>
						<span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-700">
							Web Design
						</span>
						<span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
							Bootstrap
						</span>
					</div>
				</div>
			</div>

			{/* ✅ Project 3 */}
			<div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
				<Image
					alt="project image"
					src="/web3.jpg"
					className="w-full md:w-3xs aspect-video rounded-3xl object-cover"
					width={600}
					height={350}
				/>

				<div className="w-full">
					<h4 className="font-medium text-zinc-800 dark:text-zinc-100 mb-2">
						Sahabat Kampus – Sistem Informasi Kampus
					</h4>

					<p className="text-sm text-zinc-500 dark:text-zinc-300 leading-relaxed">
			Sahabat Kampus merupakan sistem informasi yang dirancang untuk membantu 
			mahasiswa baru mengenal lingkungan kampus. Aplikasi ini menyediakan berbagai fitur 
			seperti panduan akademik, informasi kegiatan kampus, forum diskusi antar mahasiswa, 
			serta sistem login bagi pengguna. Tampilan dibuat modern, responsif, dan mudah digunakan 
			untuk mendukung proses adaptasi mahasiswa baru di dunia perkuliahan.
		</p>

					<div className="flex items-center flex-wrap gap-x-2.5 mt-3">
						<span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-700">
							Sahabat Kampus
						</span>
						<span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
							Information System
						</span>
						<span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
							PHP & MySQL
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
