
import Image from "next/image";

export default function TeamAndPartners() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            {/* <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center">V</div>
                            Venture<span className="text-red-500">Scale</span> */}
                            <Image src="/logo-inverted.png" alt="Logo" width={200} height={100} />
                        </div>

                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Helping the next generation of technical founders build, scale, and succeed. The complete venture capability ecosystem.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">For Founders</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">For Investors</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">Portfolio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-3">
                            <li>Mumbai, India</li>
                            <li>contact@venturescale.com</li>
                            <li>+91 999 999 9999</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2024 VentureScale. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}