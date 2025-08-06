import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
    Globe,
    Smartphone,
    Database,
    Cloud,
    Code,
    Users,
    ArrowRight, Table, TableIcon, Computer
} from "lucide-react";
import { motion } from "motion/react";

export function ServicesSection() {
    const services = [
        {
            icon: Globe,
            title: "Web Development",
            description: "Custom web applications built with modern frameworks. Responsive, fast, and SEO-optimized.",
            features: ["WASM","Blazor","Avalonia","Angular","React/Next.js", "TypeScript", "Responsive Design", "SEO Optimization"],
            gradient: "from-violet-500 to-purple-500"
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "Cross-platform mobile apps that work seamlessly on iOS and Android. Built with cross platform .NET or native technologies.",
            features: ["C#","Avalonia", "MAUI","Kotlin", "iOS/Android", "Cross-platform", "App Store Deployment"],
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            icon: Computer,
            title: "Desktop Development",
            description: "Cross-platform and native desktop applications built to run on all architectures. Built with cross platform .NET or native technologies.",
            features: ["C#","Avalonia", "MAUI","WPF","Console", "WIN UI", "Cross-platform"],
            gradient: "from-purple-500 to-indigo-500"
        },
        {
            icon: Database,
            title: "Backend Development",
            description: "Robust APIs and backend systems with databases, authentication, and scalable architecture.",
            features: ["REST APIs","GraphQL APIs", "T-SQL", "Database Design", "Authentication", "Cloud Integration"],
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            description: "Deploy and scale your applications with modern cloud infrastructure and DevOps practices.",
            features: ["Azure", "Docker", "CI/CD Pipelines", "Monitoring"],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Code,
            title: "Custom Software",
            description: "Bespoke software solutions tailored to your specific business needs and requirements.",
            features: ["Business Logic", "Integration", "Automation", "Legacy Modernization"],
            gradient: "from-cyan-500 to-teal-500"
        },
        {
            icon: Users,
            title: "Consulting",
            description: "Technical guidance, code reviews, and strategic planning to help your team succeed.",
            features: ["Code Review", "Architecture Planning", "Team Training", "Technical Strategy"],
            gradient: "from-teal-500 to-green-500"
        }
    ];

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="py-16 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-medium mb-4 text-gradient-purple"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            Services
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Comprehensive development services to bring your ideas to life,
                            from concept to deployment and beyond.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <Card className="h-full hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/80 backdrop-blur-sm group relative overflow-hidden">
                                    {/* Hover gradient overlay */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <CardHeader className="relative z-10">
                                        <motion.div
                                            className="w-12 h-12 bg-gradient-purple rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <service.icon className="h-6 w-6 text-white" />
                                        </motion.div>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col relative z-10">
                                        <p className="text-muted-foreground mb-4 flex-1 group-hover:text-foreground transition-colors">
                                            {service.description}
                                        </p>
                                        <div className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <motion.div
                                                    key={feature}
                                                    className="flex items-center gap-2"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <motion.div
                                                        whileHover={{ scale: 1.2, rotate: 90 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                                                    </motion.div>
                                                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature}
                          </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
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
                                Discuss Your Project
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}