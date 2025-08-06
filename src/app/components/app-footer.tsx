import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { motion } from "motion/react";

export function AppFooter() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: "https://github.com/Keegan-Wright", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/keegan-wright-2a68aa168/", label: "LinkedIn" },
        { icon: Mail, href: "mailto:keeganwright12@gmail.com", label: "Email" }
    ];

    const services = [
        "Web Development",
        "Mobile Apps",
        "Backend Development",
        "Cloud Solutions",
        "Custom Software",
        "Technical Consulting"
    ];

    const contact = [
        {display: "keeganwright12@gmail.com", href: "mailto:keeganwright12@gmail.com"},
        {display: "07850260403", href: "tel:07850260403"}
    ];

    return (
        <footer className="bg-gradient-purple-light border-t border-border py-12 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="font-medium text-lg mb-4 text-gradient-purple"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                Wrights Dev
                            </motion.div>
                            <p className="text-muted-foreground text-sm mb-4">
                                Professional software and web development services.
                                Turning ideas into powerful digital solutions.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-medium mb-4 text-gradient-purple">Services</h4>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={service}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5, color: "rgb(139, 92, 246)" }}
                                        className="hover:text-primary transition-all duration-200 cursor-pointer"
                                    >
                                        {service}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-medium mb-4 text-gradient-purple">Contact</h4>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                {contact.map((item, index) => (
                                    <motion.div
                                        key={item.display}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.6 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5, color: "rgb(139, 92, 246)" }}
                                        className="hover:text-primary transition-all duration-200 cursor-pointer"
                                    >
                                        <a href={item.href}>{item.display}</a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.p
                            className="flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            © {currentYear} Wrights Dev. Made with
                            <motion.span
                                animate={{
                                    scale: [1, 1.2, 1],
                                    color: ["rgb(139, 92, 246)", "rgb(168, 85, 247)", "rgb(139, 92, 246)"]
                                }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Heart className="h-4 w-4 fill-current" />
                            </motion.span>
                            All rights reserved.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}