import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import nexoraLogo from "../assets/images/nexoraLogo.svg";

const footerLinks = {
    Product: ["Marketplace", "Creators", "Vendors"],
    Company: ["About", "Contact", "Careers"],
    Resources: ["Blog", "Guides", "Help Center"],
    Legal: ["Terms", "Privacy", "Cookies"],
};

const socialLinks = [
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
    { icon: FaGithub, label: "GitHub", href: "#" },
    { icon: FaDiscord, label: "Discord", href: "#" },
];

export default function NexoraFooter() {
    return (
        <footer
            style={{
                backgroundColor: "#0b0f1a",
                fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
            }}
            className="w-full text-gray-400"
        >
            <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">

                    {/* Brand */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <img
                            className="w-16"
                            src={nexoraLogo}
                            alt="nexora"
                        />

                        <p className="text-sm leading-relaxed max-w-xs">
                            A modern marketplace where vendors and creators grow.
                        </p>

                        <div className="flex gap-3 mt-1">
                            {socialLinks.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="group w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-indigo-600 hover:text-white"
                                    style={{
                                        backgroundColor: "#161b2e",
                                        color: "#8b92a9",
                                    }}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="flex flex-col gap-3">
                            <h3
                                className="text-xs font-semibold uppercase tracking-widest mb-1"
                                style={{ color: "#c5c9db" }}
                            >
                                {category}
                            </h3>

                            {links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-sm transition-colors duration-150 hover:text-white"
                                    style={{ color: "#6b7280" }}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6">
                <div style={{ height: "1px", backgroundColor: "#1e2538" }} />
            </div>

            {/* Bottom */}
            <div
                className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
                style={{ color: "#5a6177" }}
            >
                <span>© 2026 Nexora. All rights reserved.</span>

                <div className="flex gap-6">
                    {["Status", "Security", "Sitemap"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="transition-colors duration-150 hover:text-white"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}