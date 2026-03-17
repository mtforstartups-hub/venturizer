import Image from "next/image";

export default function NewFooter() {
  return (
    <footer className="bg-[#111111] py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#22418F] flex items-center justify-center">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Nova<span className="text-[#EF3F3C]">Ventures</span></span>
          </div> */}
        <Image src="/logo-inverted.png" alt="Logo" width={200} height={100} />

        {/* <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div> */}

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Venturizer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
