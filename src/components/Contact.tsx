export default function Contact() {
	return (
		<section id="contact" className="space-y-6">
			<h3 className="text-sm uppercase tracking-wider font-semibold text-zinc-700 dark:text-white">
				Contact
			</h3>

			<p className="text-zinc-800 dark:text-zinc-200">
				Silakan hubungi saya jika ingin berdiskusi, berkolaborasi dalam project web,
				atau membutuhkan bantuan terkait pemrograman dan pengembangan website.
			</p>

			<div className="flex flex-col md:flex-row gap-x-6 gap-y-3 mt-6">

				{/* ✅ Gmail */}
				<a
					href="mailto:wardinadarmawan@gmail.com"
					className="flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-200"
				>
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="#EA4335"
							d="M12 13.5 2 6.75V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.75L12 13.5Z"
						/>
						<path
							fill="#FBBC04"
							d="M22 6.75V6c0-1.1-.9-2-2-2h-1l-7 5-7-5H4c-1.1 0-2 .9-2 2v.75L12 13.5l10-6.75Z"
						/>
						<path
							fill="#34A853"
							d="M2 6.75v11.25c0 1.1.9 2 2 2h1V9.5L2 6.75Z"
						/>
						<path
							fill="#4285F4"
							d="M22 6.75v11.25c0 1.1-.9 2-2 2h-1V9.5l3-2.75Z"
						/>
					</svg>
					<span className="text-zinc-800 dark:text-zinc-200 font-medium hover:text-red-600 transition-colors duration-200">
						wardinadarmawan@gmail.com
					</span>
				</a>

				{/* ✅ YouTube */}
				<a
					href="https://www.youtube.com/@wardinadarmawan"
					target="_blank"
					className="flex items-center gap-x-2.5 text-red-600 hover:scale-105 transition-transform duration-200"
				>
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						className="text-red-600"
					>
						<path d="M19.615 3.184C18.524 2.803 12 2.803 12 2.803s-6.524 0-7.615.381C3.177 3.565 2.564 4.177 2.184 5.269 1.803 6.36 1.803 9.177 1.803 9.177s0 2.817.381 3.908c.381 1.092.993 1.704 2.094 2.085 1.091.381 7.622.381 7.622.381s6.524 0 7.615-.381c1.091-.381 1.704-.993 2.085-2.085.381-1.091.381-3.908.381-3.908s0-2.817-.381-3.908c-.381-1.092-.993-1.704-2.085-2.085Z" />
						<path d="M10 12.75V7.5l4.5 2.625L10 12.75Z" fill="white" />
					</svg>
					<span className="font-medium">YouTube</span>
				</a>

				{/* ✅ Instagram */}
				<a
					href="https://www.instagram.com/dindd.__"
					target="_blank"
					className="flex items-center gap-x-2.5 hover:scale-105 transition-transform duration-200"
				>
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient id="instaGradient" x1="0" y1="0" x2="24" y2="24">
								<stop offset="0%" stopColor="#f58529" />
								<stop offset="30%" stopColor="#dd2a7b" />
								<stop offset="60%" stopColor="#8134af" />
								<stop offset="100%" stopColor="#515BD4" />
							</linearGradient>
						</defs>
						<rect
							x="2"
							y="2"
							width="20"
							height="20"
							rx="5"
							fill="url(#instaGradient)"
						/>
						<circle cx="12" cy="12" r="3.5" fill="white" />
						<circle cx="17.5" cy="6.5" r="1.2" fill="white" />
					</svg>
					<span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-medium">
						Instagram
					</span>
				</a>

			</div>
		</section>
	);
}
