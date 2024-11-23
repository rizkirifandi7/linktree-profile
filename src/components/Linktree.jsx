import { MediaSosial } from "./MediaSosial";
import TypingAnimation from "./ui/typing-animation";

const Linktree = () => {
	return (
		<div className="max-w-lg mx-auto bg-black min-h-screen">
			<div className="relative flex justify-center items-center">
				<img
					src="foto.jpeg"
					alt=""
					className="h-[300px] w-auto bg-center bg-no-repeat"
				/>
				<div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black to-transparent"></div>
				<div className="absolute top-0 bottom-0 left-0 w-[18%] bg-gradient-to-r from-black to-transparent"></div>
				<div className="absolute top-0 bottom-0 right-0 w-[15%] bg-gradient-to-l from-black to-transparent"></div>
			</div>

			<div className="flex flex-col items-center justify-center text-white">
				<h1 className="text-center text-3xl font-bold">Rizki Rifani</h1>
				<p className="text-base text-gray-400 mt-3">Web Developer</p>
				<MediaSosial />
			</div>

			<div className="flex flex-col items-center justify-center text-white px-12 mt-10">
				<h1 className="text-center text-xl font-semibold">About</h1>
				<TypingAnimation
          duration={80}
					className="text-base text-gray-400 mt-3 text-center font-medium"
					text="Hey there! I'm Rizki Rifani, a web developer based in Indonesia. I
					love to create beautiful and functional websites. I'm passionate about
					web development and always eager to learn new things."
				/>
			</div>
		</div>
	);
};

export default Linktree;
