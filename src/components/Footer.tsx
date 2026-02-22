import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark-900 py-12 border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-2xl font-bold font-display tracking-tight text-white">
                            MS<span className="text-primary-400">.dev</span>
                        </span>
                        <p className="text-gray-400 text-sm mt-2">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/sanjai45-m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sanjai-20-01-2002-m/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:sanjaim202@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Sanjai M. All rights reserved.</p>

                </div>
            </div>
        </footer>
    );
}
