import { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import OrganicShape from "@/components/OrganicShapes";

export const metadata: Metadata = {
  title: "Blog | Coming Soon",
  description: "Our blog is currently under construction. Check back soon for updates and stories from the Autoimmune Support Club.",
};

export default function BlogPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
        {/* Background shapes */}
        <div className="absolute top-1/4 right-1/4 -z-10 opacity-30">
          <OrganicShape variant="blob" color="rgba(215, 154, 125, 0.4)" size={300} />
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto glass-card p-12 rounded-3xl">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
              Blog
            </h1>
            <h2 className="text-2xl text-blush mb-8 font-serif">Coming Soon</h2>
            <p className="text-lg text-foreground-light/80 leading-relaxed font-light mb-8">
              We are working hard to bring you thoughtful articles, personal stories, and helpful resources. 
              Our blog will be a space to share, learn, and grow together.
            </p>
            <div className="inline-block px-6 py-3 border border-blush/30 rounded-full text-foreground-light/80 bg-background/50 backdrop-blur-sm">
              Stay tuned for updates
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
