import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-navy-900 border-t border-teal-500/20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8 my-6">
          {/* About */}
          {/* <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-gradient">
              Noufal Rahman
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>
          </div> */}
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Blog', href: '/blog' },
                { name: 'Flow', href: '/flow' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Contact & Social */}
          <div className="block md:flex items-end flex-col">
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <a
                href="mailto:iam@noufal.dev"
                className="flex items-center flex-reverse gap-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={16} />
                iam@noufal.dev
              </a>
              <div className="flex gap-4 mt-4">
                {[
                  { icon: Github, href: "https://github.com/iamnoufal", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/iamnoufal", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com/_iam_noufal", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            {/* <div className="space-y-3">
              
              
              
            </div> */}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Noufal Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
