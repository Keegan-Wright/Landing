import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import {Menu, X} from "lucide-react";
export default function AppHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    //const { trackClick } = useAnalytics();

    const scrollToSection = (sectionId: string) => {
        //trackClick("navigation", `nav_${sectionId}`);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "portfolio", label: "Portfolio" },
        { id: "blog", label: "Blog" },
    ];

    // Track active section with Intersection Observer
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Trigger when section is 20% from top
            threshold: 0,
        };

        const observerCallback = (
            entries: IntersectionObserverEntry[],
        ) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    if (
                        sectionId &&
                        navItems.some((item) => item.id === sectionId)
                    ) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions,
        );

        // Observe all sections
        navItems.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="font-medium text-lg cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                        }}
                        onClick={() => scrollToSection("home")}
                    >
            <span className="text-gradient-purple">
              Wrights Dev
            </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => {
                            const isActive = activeSection === item.id;
                            return (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative transition-colors group ${
                                        isActive
                                            ? "text-primary font-medium"
                                            : "hover:text-primary"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}

                                    {/* Active indicator */}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-purple"
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: isActive ? "100%" : "0%",
                                            opacity: isActive ? 1 : 0,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* Hover indicator */}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-purple group-hover:w-full transition-all duration-300"
                                        style={{
                                            opacity: isActive ? 0 : 1, // Hide on active items since they have the main indicator
                                        }}
                                    />

                                    {/* Active dot indicator */}
                                    <motion.div
                                        className="absolute -top-1 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                            scale: isActive ? 1 : 0,
                                            opacity: isActive ? 1 : 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </motion.button>
                            );
                        })}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <ThemeToggle />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                onClick={() => scrollToSection("contact")}
                                className="ml-4 bg-gradient-purple hover:bg-gradient-purple-dark transition-all duration-300"
                            >
                                Contact
                            </Button>
                        </motion.div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative"
                        >
                            <motion.div
                                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </motion.div>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 pb-4 border-t border-border pt-4 overflow-hidden"
                        >
                            <div className="flex flex-col space-y-3">
                                {navItems.map((item, index) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <motion.button
                                            key={item.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`text-left py-2 px-3 rounded-md transition-all duration-200 relative ${
                                                isActive
                                                    ? "text-primary bg-primary/10 border-l-2 border-primary font-medium"
                                                    : "hover:text-primary hover:bg-primary/5"
                                            }`}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className="flex items-center gap-2">
                                                {/* Active indicator dot for mobile */}
                                                <motion.div
                                                    className="w-2 h-2 bg-primary rounded-full"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{
                                                        scale: isActive ? 1 : 0,
                                                        opacity: isActive ? 1 : 0,
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                                <span
                                                    className={isActive ? "" : "ml-4"}
                                                >
                          {item.label}
                        </span>
                                            </div>
                                        </motion.button>
                                    );
                                })}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-2"
                                >
                                    <Button
                                        onClick={() => scrollToSection("contact")}
                                        className="w-fit bg-gradient-purple hover:bg-gradient-purple-dark"
                                    >
                                        Contact
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
