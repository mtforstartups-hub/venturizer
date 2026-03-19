import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    label: "360 Support",
    href: "#solution",
  },
  {
    label: "Our Models",
    href: "#ventures",
  },
  {
    label: "Who We Impact",
    href: "#ecosystem",
  },
  // {
  //   label: "Team",
  //   href: "#team",
  // },
  // {
  //   label: "Contact",
  //   href: "#contact",
  // },
];

export default function NewFooter() {
  return (
    <footer className="bg-[#111111] border-t border-gray-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo-inverted.png"
              alt="Venturizer Logo"
              width={180}
              height={90}
            />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              A venture capability ecosystem enabling founders in their 0-100 cr
              revenue journey.
            </p>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/venturizer/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Venturizer on LinkedIn"
              className="mt-2 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group w-fit"
            >
              <span className="w-8 h-8 rounded-md bg-gray-800 group-hover:bg-[#0A66C2] flex items-center justify-center transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-300 group-hover:text-white transition-colors duration-200"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          {/* Column 2: Navigation links */}
          <div className="flex flex-col gap-4 md:items-center">
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200 w-fit relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact info */}
          <div className="flex flex-col gap-4 md:items-end">
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest pr-13">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 shrink-0 text-gray-500"
                >
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="leading-relaxed">
                  {/* 123 Innovation Drive, Suite 400
                  <br /> */}
                  Noida, India
                </span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-gray-500"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:connect@venturizer.in"
                  className="hover:text-white transition-colors duration-200"
                >
                  connect@venturizer.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Venturizer.
          </p>
          <div className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200">
            All rights reserved.
          </div>
          {/* <div className="flex items-center gap-5">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-400 text-xs transition-colors duration-200"
            >
              Terms of Use
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
