import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Code2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export function BlogSection() {

    const featuredPost = {
        id: 1,
        title: "Placeholder title",
        slug: "placeholder-title",
        excerpt: "Placeholder excerpt",
        content: "Additional content here",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
        author: "Keegan Wright",
        publishedAt: "2025-08-01",
        readTime: "0 min read",
        tags: ["C#", "Avalonia","Docker", "Open Banking", "Self Hosting"],
        category: "Development",
        featured: true
    };

    const blogPosts = [
        {
            id: 2,
            title: "Placeholder Title",
            slug: "placeholder-tile",
            excerpt: "Placeholder excerpt",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
            author: "Keegan Wright",
            publishedAt: "2024-07-25",
            readTime: "0 min read",
            tags: ["PlaceHolder"],
            category: "Development"
        }
    ];

    const categories = [
        { name: "All", count: blogPosts.length + 1, color: "bg-primary" },
        { name: "Development", count: 2, color: "bg-blue-500" }
    ];


    return (
        <section id="blog" className="py-16 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>

    <div className="container mx-auto relative z-10">
    <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
>
    <motion.div
        className="flex items-center justify-center gap-2 mb-4"
    whileHover={{ scale: 1.05 }}
>
    <motion.div
        animate={{ rotate: [0, 360] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
>
    <BookOpen className="h-8 w-8 text-primary" />
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-medium text-gradient-purple">
        Tech Blog
    </h2>
    </motion.div>
    <motion.p
    className="text-lg text-muted-foreground max-w-2xl mx-auto"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
>
    Insights, tutorials, and thoughts on modern web development,
        software architecture, and the latest technology trends.
    </motion.p>
    </motion.div>

    {/* Categories */}
    <motion.div
        className="flex flex-wrap gap-2 justify-center mb-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
>
    {categories.map((category, index) => (
        <motion.button
            key={category.name}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group"
        >
        <Badge
            variant="secondary"
        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-200 cursor-pointer px-4 py-2"
        >
        <span className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${category.color} group-hover:scale-125 transition-transform`} />
        {category.name}
        <span className="text-xs opacity-60">({category.count})</span>
            </span>
            </Badge>
            </motion.button>
    ))}
    </motion.div>

    {/* Featured Post */}
    <motion.div
        className="mb-16"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
>
    <motion.div
        whileHover={{ y: -5 }}
    className="group"
    >
    <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 bg-card/90 backdrop-blur-sm">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
    <div className="aspect-video lg:aspect-auto relative overflow-hidden">
    <motion.div
        whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.6 }}
    className="w-full h-full"
    >
    <Image
        fill
        src={featuredPost.image}
    alt={featuredPost.title}
    className="w-full h-full object-cover"
        />
        </motion.div>
        <motion.div
    className="absolute top-4 left-4"
    whileHover={{ scale: 1.1 }}
>
    <Badge className="bg-gradient-purple text-white border-0">
        Featured
        </Badge>
        </motion.div>
        <motion.div
    className="absolute inset-0 bg-gradient-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        </div>
        <div className="p-8 flex flex-col justify-between">
    <div>
        <div className="flex items-center gap-4 mb-4">
    <Badge variant="secondary" className="bg-primary/10 text-primary">
        {featuredPost.category}
        </Badge>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
    <div className="flex items-center gap-1">
    <Calendar className="h-4 w-4" />
        {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })}
        </div>
        <div className="flex items-center gap-1">
    <Clock className="h-4 w-4" />
        {featuredPost.readTime}
        </div>
        </div>
        </div>
        <h3 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-primary transition-colors line-clamp-2">
        {featuredPost.title}
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-3">
        {featuredPost.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
        {featuredPost.tags.slice(0, 3).map((tag, index) => (
                <motion.div
                    key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
>
    <Badge variant="outline" className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200">
        {tag}
        </Badge>
        </motion.div>
))}
    </div>
    </div>
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
    </div>
    <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
>
    <Button
    className="bg-gradient-purple hover:bg-gradient-purple-dark transition-all duration-300 group/btn"
        >
        Read More
    <motion.div
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
>
    <ArrowRight className="h-4 w-4 ml-2" />
        </motion.div>
        </Button>
        </motion.div>
        </div>
        </div>
        </div>
        </Card>
        </motion.div>
        </motion.div>

    {/* Recent Posts Grid */}
    <div>
        <motion.h3
            className="text-xl md:text-2xl font-medium mb-8 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
>
    Recent Articles
    </motion.h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
                <motion.div
                    key={post.id}
            initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group h-full"
    >
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/90 backdrop-blur-sm h-full flex flex-col">
    <div className="aspect-video relative overflow-hidden">
    <motion.div
        whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.6 }}
    className="w-full h-full"
    >
    <Image
        fill
        src={post.image}
    alt={post.title}
    className="w-full h-full object-cover"
        />
        </motion.div>
        <motion.div
    className="absolute top-4 left-4"
    whileHover={{ scale: 1.1 }}
>
    <Badge variant="secondary" className="bg-primary/90 text-white border-0">
        {post.category}
        </Badge>
        </motion.div>
        <motion.div
    className="absolute inset-0 bg-gradient-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        </div>
        <CardHeader className="flex-1">
    <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
    <div className="flex items-center gap-1">
    <Calendar className="h-3 w-3" />
        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            })}
        </div>
        <div className="flex items-center gap-1">
    <Clock className="h-3 w-3" />
        {post.readTime}
        </div>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2 mb-3">
        {post.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-3 flex-1">
    {post.excerpt}
    </p>
    </CardHeader>
    <CardContent>
    <div className="flex flex-wrap gap-1 mb-4">
        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                <motion.div
                    key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
>
    <Badge variant="outline" className="text-xs border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200">
        {tag}
        </Badge>
        </motion.div>
))}
    </div>
    <div className="flex items-center justify-between">
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
    </div>
    <motion.button
    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors flex items-center gap-1 group/link"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
>
    Read
    <motion.div
    whileHover={{ x: 3 }}
    transition={{ duration: 0.2 }}
>
    <ArrowRight className="h-3 w-3" />
        </motion.div>
        </motion.button>
        </div>
        </CardContent>
        </Card>
        </motion.div>
))}
    </div>
    </div>

    {/* View All Posts CTA */}
    <motion.div
        className="text-center mt-12"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    viewport={{ once: true }}
>
    <motion.div
        whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
>
    <Button
        variant="outline"
    size="lg"
    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
    >
    <Code2 className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
        View All Posts
    <motion.div
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
>
    <ArrowRight className="h-4 w-4 ml-2" />
        </motion.div>
        </Button>
        </motion.div>
        </motion.div>
        </div>
        </div>
        </section>
);
}