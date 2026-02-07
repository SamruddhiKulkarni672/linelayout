"use client";
import { motion } from "framer-motion";
import { FaBeer } from "react-icons/fa";

const features = [
    {
        title: "Multiple Brushes",
        desc: "Professional brush collection with realistic textures",
    },
    {
        title: "Smart Color Picker",
        desc: "Advanced HSB controls with intelligent color suggestions",
    },
    {
        title: "Auto Video Recording",
        desc: "Capture your creative process automatically",
        badge: "NEW",
    },
    {
        title: "AI SVG Generation",
        desc: "Generate stunning SVG artwork using AI technology",
        badge: "NEW",
    },
    {
        title: "Advanced Layers",
        desc: "Professional layer system with blend modes",
    },
    {
        title: "Unlimited Undo",
        desc: "Never lose your progress with infinite history",
    },
];

export default function LyznFlowSection() {
    return (
        <section className="relative bg-[#f7f8f4] overflow-hidden mx-2 px-7">
            {/* Vertical dotted guide lines */}
            <div className="absolute left-20 top-0 bottom-0 border-l border-dashed border-[#ced3cd]" />
            <div className="absolute right-20 top-0 bottom-0 border-l border-dashed border-[#d9ded7]" />

            {/* Diagonal texture overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#00000008_0px,#00000008_1px,transparent_1px,transparent_6px)] opacity-100" />

            <div className="relative max-w-6xl mx-auto px-10 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* LEFT TEXT */}
                <div className="space-y-6">
                    <p className="text-[#2fbf9f] font-semibold tracking-wide text-sm">
                        Agent Marketplace
                    </p>

                    <h2 className="text-[42px] leading-tight font-semibold text-[#0f172a]">
                        Specialized agents for every
                        <br />
                        task, optimized to do it well
                    </h2>

                    <p className="text-[#5f6b66] max-w-md text-lg leading-relaxed">
                        Instead of a single assistant that tries to do everything, Lyzn is a store
                        of specialized agents — each designed for one job and optimized to do it
                        well.
                    </p>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative flex justify-center items-center">
                    <div className="relative w-[420px] h-[420px]">
                        {/* Outer dotted orbit */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-dashed border-[#cfd8d3]"
                        />

                        {/* Inner dotted orbit */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
                            className="absolute inset-[70px] rounded-full border border-dashed border-[#dfe6e1]"
                        />

                        {/* Floating agent nodes */}
                        {[0, 1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 22 + i * 6,
                                    ease: "linear",
                                }}
                                className="absolute inset-0"
                            >
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
                                    style={{ transform: "translateY(-210px)" }}
                                >
                                    <FaBeer />
                                </div>
                            </motion.div>
                        ))}

                        {/* Glow center */}
                        <motion.div
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className="absolute inset-[120px] rounded-full bg-[radial-gradient(circle,#6ee7c840,transparent_65%)] flex items-center justify-center shadow-[0_0_90px_rgba(110,231,200,0.5)]"
                        >
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#2fbf9f] font-semibold text-xl shadow-md">
                                AI
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>











          
            <footer className="relative bg-[#f7f8f4] text-[#55615c] overflow-hidden">
                {/* Vertical dotted guide lines */}
                <div className="absolute left-10 top-0 bottom-0 border-l border-dashed border-[#d9ded7]" />
                <div className="absolute right-10 top-0 bottom-0 border-l border-dashed border-[#d9ded7]" />

                {/* Diagonal texture strip */}
                <div className="w-full h-20 bg-[repeating-linear-gradient(135deg,#00000008_0px,#00000008_1px,transparent_1px,transparent_6px)] opacity-40 border-t border-b border-[#dde3de]" />

                <div className="relative max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* LEFT BRAND */}
                    <div className="space-y-6">
                        <h3 className="text-[#2fbf9f] font-semibold text-lg">LyznFlow</h3>

                        {/* Social icons */}
                        <div className="flex gap-4 text-[#6b7280]">
                            <span className="hover:text-black cursor-pointer">𝕏</span>
                            <span className="hover:text-black cursor-pointer">🐙</span>
                        </div>

                        <p className="text-sm text-[#6b7280]">© 2026 GHM Works Pvt. Ltd.</p>
                    </div>

                    {/* Product */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-[#0f172a]">Product</h4>
                        {[
                            "Agent Marketplace",
                            "LyznFlow Builder",
                            "Integrations",
                            "Documentation",
                        ].map((item) => (
                            <p key={item} className="text-sm hover:text-black cursor-pointer">
                                {item}
                            </p>
                        ))}
                    </div>

                    {/* Solutions */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-[#0f172a]">Solutions</h4>
                        {[
                            "Content Agents",
                            "Utility Agents",
                            "Automation Agents",
                            "Custom Workflows",
                        ].map((item) => (
                            <p key={item} className="text-sm hover:text-black cursor-pointer">
                                {item}
                            </p>
                        ))}
                    </div>

                    {/* Company */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-[#0f172a]">Company</h4>
                        {["About us", "Blog", "Careers", "Contact"].map((item) => (
                            <p key={item} className="text-sm hover:text-black cursor-pointer">
                                {item}
                            </p>
                        ))}
                    </div>

                    {/* Legal */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-[#0f172a]">Legal</h4>
                        {["Privacy Policy", "Terms of Service"].map((item) => (
                            <p key={item} className="text-sm hover:text-black cursor-pointer">
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </footer>


               <div className="bg-[#E1E1E8] p-6 rounded-xl max-w-6xl items-center justify-center">
                {/* Outer Gradient Border */}
                <div className="p-[2px] rounded-xl bg-gradient-to-b from-[#C6C6C6] to-[#DDDCDC]">
                    {/* Inner Gradient Border */}
                    <div className="p-[11px] rounded-lg bg-gradient-to-b from-[#CCD3DD] to-[#F5F8FD]">
                        {/* Inner Content */}
                        <div className="bg-[#E1E1E8]  p grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap">
                            {features.map((item, i) => (
                                <div
                                    key={i}
                                    className="relative   backdrop-blur-md border border-[#BDC2CE]   p-4 transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    {item.badge && (
                                        <span className="absolute top-2 right-2 text-[10px] bg-black text-white px-2 py-[2px] rounded-md">
                                            {item.badge}
                                        </span>
                                    )}

                                    <h3 className="text-sm font-semibold text-gray-800 mb-1">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-gray-600 leading-snug">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
