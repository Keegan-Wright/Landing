import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Sparkles
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        budget: '',
        message: ''
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You could integrate with Supabase, EmailJS, or another service
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({
            name: '',
            email: '',
            project: '',
            budget: '',
            message: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "keeganwright12@gmail.com",
            href: "mailto:keeganwright12@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "07850260403",
            href: "tel:+07850260403"
        }
    ];

    const benefits = [
        "5+ years of proven experience",
        "Clean, maintainable code",
        "Regular communication & updates",
        "Post-launch support included",
        "Fixed-price projects available"
    ];

    return (
        <section id="contact" className="py-16 px-4 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                            Let&#39;s Work Together
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Ready to bring your project to life? Get in touch and let&#39;s discuss
                            how I can help you achieve your goals.
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/90 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <motion.div
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Sparkles className="h-5 w-5 text-primary" />
                                        </motion.div>
                                        Send me a message
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Label htmlFor="name">Name *</Label>
                                                <motion.div
                                                    animate={{
                                                        borderColor: focusedField === 'name' ? 'rgb(139, 92, 246)' : 'rgb(229, 231, 235)'
                                                    }}
                                                    className="mt-1"
                                                >
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('name')}
                                                        onBlur={() => setFocusedField(null)}
                                                        required
                                                        placeholder="Your name"
                                                        className="border-primary/20 focus:border-primary transition-colors"
                                                    />
                                                </motion.div>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Label htmlFor="email">Email *</Label>
                                                <motion.div
                                                    animate={{
                                                        borderColor: focusedField === 'email' ? 'rgb(139, 92, 246)' : 'rgb(229, 231, 235)'
                                                    }}
                                                    className="mt-1"
                                                >
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        onFocus={() => setFocusedField('email')}
                                                        onBlur={() => setFocusedField(null)}
                                                        required
                                                        placeholder="your@email.com"
                                                        className="border-primary/20 focus:border-primary transition-colors"
                                                    />
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Label htmlFor="project">Project Type</Label>
                                                <select
                                                    id="project"
                                                    name="project"
                                                    value={formData.project}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('project')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full px-3 py-2 border border-primary/20 rounded-md bg-background mt-1 focus:border-primary transition-colors"
                                                >
                                                    <option value="">Select project type</option>
                                                    <option value="web-app">Web Application</option>
                                                    <option value="mobile-app">Mobile App</option>
                                                    <option value="backend">Backend/API</option>
                                                    <option value="consulting">Consulting</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Label htmlFor="budget">Budget Range</Label>
                                                <select
                                                    id="budget"
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('budget')}
                                                    onBlur={() => setFocusedField(null)}
                                                    className="w-full px-3 py-2 border border-primary/20 rounded-md bg-background mt-1 focus:border-primary transition-colors"
                                                >
                                                    <option value="">Select budget range</option>
                                                    <option value="5k-10k">£1,000 - £5,000</option>
                                                    <option value="5k-10k">£5,000 - £10,000</option>
                                                    <option value="10k-25k">$10,000 - $25,000</option>
                                                    <option value="25k-50k">£25,000 - £50,000</option>
                                                    <option value="50k+">£50,000+</option>
                                                    <option value="discuss">Let&#39;s discuss</option>
                                                </select>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Label htmlFor="message">Message *</Label>
                                            <motion.div
                                                animate={{
                                                    borderColor: focusedField === 'message' ? 'rgb(139, 92, 246)' : 'rgb(229, 231, 235)'
                                                }}
                                                className="mt-1"
                                            >
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocusedField('message')}
                                                    onBlur={() => setFocusedField(null)}
                                                    required
                                                    placeholder="Tell me about your project..."
                                                    rows={5}
                                                    className="border-primary/20 focus:border-primary transition-colors resize-none"
                                                />
                                            </motion.div>
                                        </motion.div>

                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Button
                                                type="submit"
                                                className="w-full bg-gradient-purple hover:bg-gradient-purple-dark transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                                />
                                                <Send className="h-4 w-4 mr-2" />
                                                Send Message
                                            </Button>
                                        </motion.div>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/90 backdrop-blur-sm">
                                    <CardHeader>
                                        <CardTitle>Get in touch</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        {contactInfo.map((info, index) => (
                                            <motion.div
                                                key={info.label}
                                                className="flex items-center gap-4 group"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 + 0.4 }}
                                                viewport={{ once: true }}
                                                whileHover={{ x: 5 }}
                                            >
                                                <motion.div
                                                    className="bg-gradient-purple p-3 rounded-lg group-hover:scale-110 transition-transform duration-300"
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <info.icon className="h-5 w-5 text-white" />
                                                </motion.div>
                                                <div>
                                                    <div className="font-medium group-hover:text-primary transition-colors">
                                                        {info.label}
                                                    </div>
                                                    {info.href ? (
                                                        <a
                                                            href={info.href}
                                                            className="text-muted-foreground hover:text-primary transition-colors"
                                                        >
                                                            {info.value}
                                                        </a>
                                                    ) : (
                                                        <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                                                            {info.value}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/90 backdrop-blur-sm">
                                    <CardContent className="p-6">
                                        <h4 className="font-medium mb-4 text-gradient-purple">Why choose me?</h4>
                                        <div className="space-y-3">
                                            {benefits.map((benefit, index) => (
                                                <motion.div
                                                    key={benefit}
                                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + 0.6 }}
                                                    viewport={{ once: true }}
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <motion.span
                                                        className="text-primary group-hover:scale-125 transition-transform"
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        ✅
                                                    </motion.span>
                                                    {benefit}
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