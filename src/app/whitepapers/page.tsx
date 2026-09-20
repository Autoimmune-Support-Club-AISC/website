import { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import OrganicShape from "@/components/OrganicShapes";

export const metadata: Metadata = {
  title: "Whitepapers | Coming Soon",
  description: "In-depth research and whitepapers from the Autoimmune Support Club are coming soon.",
};

export default function WhitepapersPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
        {/* Background shapes */}
        <div className="absolute bottom-1/4 left-1/4 -z-10 opacity-30">
          <OrganicShape variant="concave" color="rgba(207, 185, 168, 0.4)" size={350} />
        </div>
        
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto glass-card p-12 rounded-3xl">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
              Whitepapers
            </h1>
            <h2 className="text-2xl text-blush mb-8 font-serif">Coming Soon</h2>
            <p className="text-lg text-foreground-light/80 leading-relaxed font-light mb-8">
              We are compiling research, resources, and comprehensive guides to help you better understand and navigate the complexities of autoimmune diseases.
            </p>
            <div className="inline-block px-6 py-3 border border-blush/30 rounded-full text-foreground-light/80 bg-background/50 backdrop-blur-sm">
              Stay tuned for our first release
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
