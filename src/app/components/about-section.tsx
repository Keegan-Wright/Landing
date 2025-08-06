import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
    const skills = [
        ".NET", "C#","Kotlin", "Angular", "TypeScript", "Node.js", "Rust", "Next.js",
        "Database Design", "API Development", "Cloud Architecture",
        "Mobile Apps", "DevOps", "UI/UX Design", "Project Management"
    ];

    const values = [
        "Clean, maintainable code",
        "User-centered design",
        "Scalable architecture",
        "Continuous learning",
        "Transparent communication"
    ];

    return (
        <section id="about" className="py-16 px-4 bg-gradient-purple-light relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
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
                            About Me
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Passionate developer with a proven track record of delivering
                            high-quality software solutions that exceed client expectations.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <motion.h3
                                className="text-xl font-medium mb-4 flex items-center gap-2"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Sparkles className="h-5 w-5 text-primary" />
                                My Story
                            </motion.h3>
                            <div className="space-y-4 text-muted-foreground">
                                {[
                                    "With over 5 years of experience in software development, I've helped businesses of all sizes transform their ideas into powerful digital solutions. My journey began with a computer science degree and has evolved through countless projects across various industries.",
                                    "I specialize in full-stack development, combining modern frontend technologies with robust backend systems. My approach focuses on understanding your business needs and translating them into efficient, scalable solutions.",
                                    "When I'm not coding, I'm staying up-to-date with the latest technologies and contributing to open-source projects. I believe in continuous learning and bringing the best practices to every project."
                                ].map((paragraph, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 + index * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}
                            </div>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <h4 className="font-medium mb-4 text-gradient-purple">Technical Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skill, index) => (
                                                <motion.div
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                                                    viewport={{ once: true }}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-200"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/80 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <h4 className="font-medium mb-4 text-gradient-purple">Core Values</h4>
                                        <div className="space-y-3">
                                            {values.map((value, index) => (
                                                <motion.div
                                                    key={value}
                                                    className="flex items-center gap-3 group"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                                                    viewport={{ once: true }}
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <motion.div
                                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 group-hover:text-primary transition-colors" />
                                                    </motion.div>
                                                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {value}
                          </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}