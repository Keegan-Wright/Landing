import { Button } from "./ui/button";
import {Code, Computer, Database, Globe, Sparkles} from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToPortfolio = () => {
        const element = document.getElementById('portfolio');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const floatingIcons = [
        { Icon: Code, delay: 0, x: -90, y: -30 },
        { Icon: Database, delay: 0.5, x: -20, y: -20 },
        { Icon: Globe, delay: 1, x: 50, y: -40 },
        { Icon: Computer, delay: 1, x:120, y: -20 }
    ];

    const stats = [
        { label: "Years Experience", value: "5+", delay: 0.2 },
        { label: "Projects Delivered", value: "50+", delay: 0.4 },
        { label: "Client Satisfaction", value: "100%", delay: 0.6 }
    ];

    return (
        <section id="home" className="relative pt-20 pb-16 px-4 min-h-screen flex items-center overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 4,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Floating Icons */}
                    <motion.div
                        className="flex justify-center mb-8 relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: delay + 0.5, duration: 0.6 }}
                                    style={{ left: `${x}px`, top: `${y}px` }}
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            delay: delay,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center shadow-lg animate-pulse-glow"
                                    >
                                        <Icon className="h-8 w-8 text-white" />
                                    </motion.div>
                                </motion.div>
                            ))}
                            <div className="w-16 h-16 opacity-0">
                                <Sparkles className="h-8 w-8" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        className="text-4xl md:text-6xl font-medium mb-6 tracking-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.span
                            className="block text-gradient-purple"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            Software & Web Development
                        </motion.span>
                        <motion.span
                            className="block text-muted-foreground"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            Expert Solutions
                        </motion.span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        Transform your ideas into powerful digital solutions. I create custom software,
                        web applications, and digital experiences that drive results for your business.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                onClick={scrollToContact}
                                className="bg-gradient-purple hover:bg-gradient-purple-dark transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                />
                                Start Your Project
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={scrollToPortfolio}
                                className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            >
                                View My Work
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.8 + stat.delay }}
                                whileHover={{ scale: 1.05 }}
                                className="group cursor-pointer"
                            >
                                <motion.div
                                    className="text-2xl md:text-3xl font-medium mb-2 text-gradient-purple"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}