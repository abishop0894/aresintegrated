    import Image from "next/image";

    export default function Footer() {
    return (
        <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-20 py-12">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <Image src="https://aresintegrated.s3.us-east-1.amazonaws.com/longLogo.png" className="w-full h-auto invert md:-ml-[2vw] -ml-[7vw]" alt="Ares Integrated Resources" width={1000} height={1000} />
                <h3 className="font-bold text-xl mb-4">Ares Integrated Resources</h3>
                <p className="text-white">
                Excellence in defense, construction, and manufacturing solutions.
                </p>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                <li>
                    <a href="/services/k9" className="text-white hover:opacity-70 transition-opacity">
                    K9 Training
                    </a>
                </li>
                <li>
                    <a href="/services/general-construction" className="text-white hover:opacity-70 transition-opacity">
                    Construction
                    </a>
                </li>
                <li>
                    <a href="/services/small-arms-and-ammunition" className="text-white hover:opacity-70 transition-opacity">
                    Small Arms
                    </a>
                </li>
                <li>
                    <a href="/services/fabricated-metal" className="text-white hover:opacity-70 transition-opacity">
                    Metal Fabrication
                    </a>
                </li>
                </ul>
            </div>
            <div>
                
                {/* Contact */}
            </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white text-center text-white">
            <p>&copy; {new Date().getFullYear()} Ares Integrated Resources. All rights reserved.</p>
            </div>

        </div>
        </footer>
    );
    } 