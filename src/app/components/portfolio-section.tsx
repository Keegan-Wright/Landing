import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export function PortfolioSection() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
            technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
            type: "Web Application",
            features: ["Payment Processing", "Admin Dashboard", "Inventory Management"],
            personal: true
        },
        {
            title: "Task Management App",
            description: "Collaborative project management tool with real-time updates, team features, and mobile app.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
            technologies: ["React Native", "Firebase", "TypeScript"],
            type: "Mobile & Web",
            features: ["Real-time Sync", "Team Collaboration", "Cross-platform"],
            personal: false
        }
    ];

    return (
        <section id="portfolio" className="py-16 px-4 bg-gradient-purple-light relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-32 h-32 bg-primary rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                            Portfolio
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            A selection of projects that showcase my expertise across
                            different industries and technologies.
                        </motion.p>
                    </motion.div>

                    <motion.h3
                        className="text-xl md:text-2xl font-medium mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Personal Projects
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.filter(x => x.personal).map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-primary/20 hover:border-primary/40 bg-card/90 backdrop-blur-sm h-full">
                                    <div className="aspect-video relative overflow-hidden">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-full h-full"
                                        >
                                            <Image
                                                fill
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-primary/10 text-primary border-primary/20"
                                                >
                                                    {project.type}
                                                </Badge>
                                            </motion.div>
                                        </div>
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex-1 flex flex-col">
                                        <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors flex-1">
                                            {project.description}
                                        </p>

                                        <div>
                                            <div className="text-sm font-medium mb-2">Key Features:</div>
                                            <div className="space-y-1">
                                                {project.features.map((feature, featureIndex) => (
                                                    <motion.div
                                                        key={feature}
                                                        className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        • {feature}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-sm font-medium mb-2">Technologies:</div>
                                            <div className="flex flex-wrap gap-1">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <motion.div
                                                        key={tech}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                                                        viewport={{ once: true }}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <Badge
                                                            variant="outline"
                                                            className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-2 pt-2">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1"
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 group/btn"
                                                >
                                                    <motion.div
                                                        whileHover={{ rotate: 45 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ExternalLink className="h-4 w-4 mr-2" />
                                                    </motion.div>
                                                    Demo
                                                </Button>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1"
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                                                >
                                                    <motion.div
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.4 }}
                                                    >
                                                        <Github className="h-4 w-4 mr-2" />
                                                    </motion.div>
                                                    Code
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <motion.h3
                        className="text-xl md:text-2xl font-medium mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Professional Projects
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.filter(x => !x.personal).map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-primary/20 hover:border-primary/40 bg-card/90 backdrop-blur-sm h-full">
                                    <div className="aspect-video relative overflow-hidden">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-full h-full"
                                        >
                                            <Image
                                                fill
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-primary/10 text-primary border-primary/20"
                                                >
                                                    {project.type}
                                                </Badge>
                                            </motion.div>
                                        </div>
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4 flex-1 flex flex-col">
                                        <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors flex-1">
                                            {project.description}
                                        </p>

                                        <div>
                                            <div className="text-sm font-medium mb-2">Key Features:</div>
                                            <div className="space-y-1">
                                                {project.features.map((feature, featureIndex) => (
                                                    <motion.div
                                                        key={feature}
                                                        className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        • {feature}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-sm font-medium mb-2">Technologies:</div>
                                            <div className="flex flex-wrap gap-1">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <motion.div
                                                        key={tech}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                                                        viewport={{ once: true }}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <Badge
                                                            variant="outline"
                                                            className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-2 pt-2">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1"
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10 group/btn"
                                                >
                                                    <motion.div
                                                        whileHover={{ rotate: 45 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ExternalLink className="h-4 w-4 mr-2" />
                                                    </motion.div>
                                                    Demo
                                                </Button>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1"
                                            >
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                                                >
                                                    <motion.div
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.4 }}
                                                    >
                                                        <Github className="h-4 w-4 mr-2" />
                                                    </motion.div>
                                                    Code
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}