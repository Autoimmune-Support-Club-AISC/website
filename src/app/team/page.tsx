import { Metadata } from "next";
import PageTransition from "@/components/PageTransition";
import OrganicShape from "@/components/OrganicShapes";

export const metadata: Metadata = {
  title: "Our Team | Autoimmune Support Club",
  description:
    "Meet the founders, volunteers, and early contributors behind the Autoimmune Support Club. We are dedicated to creating a safe, understanding space for those with chronic illnesses.",
};

export default function TeamPage() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/3 opacity-40">
          <OrganicShape variant="blob" color="rgba(215, 154, 125, 0.4)" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/3 opacity-30">
          <OrganicShape variant="heart" color="rgba(207, 185, 168, 0.5)" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-foreground-light/80 leading-relaxed font-light">
              We are a passionate group of individuals dedicated to making sure no one 
              has to navigate the complexities of autoimmune disease alone.
            </p>
          </div>

          {/* Founders Section */}
          <section className="mb-32">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-foreground">
              Founders
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Founder 1 */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-foreground-light/10 mb-6 flex items-center justify-center">
                  <span className="text-foreground-light/40 text-sm">Image Placeholder</span>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-foreground">Angel P.</h3>
                <p className="text-blush font-medium mb-4">Co-Founder</p>
                <p className="text-center text-foreground-light/70 text-sm leading-relaxed max-w-xs">
                  Driven by personal experience with chronic illness to create the space they wished they had.
                </p>
              </div>

              {/* Founder 2 */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-foreground-light/10 mb-6 flex items-center justify-center">
                  <span className="text-foreground-light/40 text-sm">Image Placeholder</span>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-foreground">Abdul Aleem Jaseer</h3>
                <p className="text-blush font-medium mb-4">Co-Founder</p>
                <p className="text-center text-foreground-light/70 text-sm leading-relaxed max-w-xs">
                  Passionate about community building and mental health advocacy for invisible illnesses.
                </p>
              </div>
            </div>
          </section>

          {/* Volunteers Section */}
          <section className="mb-32">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 text-foreground">
              Core Volunteers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="flex flex-col items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-foreground-light/10 mb-4 flex items-center justify-center">
                    <span className="text-foreground-light/40 text-xs text-center px-2">Volunteer Pic</span>
                  </div>
                  <h3 className="font-serif text-lg mb-1 text-foreground">Volunteer {item}</h3>
                  <p className="text-blush/80 text-xs font-medium text-center">Community Role</p>
                </div>
              ))}
            </div>
          </section>

          {/* Early Contributors / Past Volunteers Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
                Early Contributors & Past Volunteers
              </h2>
              <p className="text-foreground-light/60 text-sm max-w-2xl mx-auto">
                We are immensely grateful to those who helped build this community from the ground up and supported our mission along the way.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                <div key={item} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-foreground-light/10 mb-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <span className="text-foreground-light/30 text-[10px] text-center leading-tight">Pic</span>
                  </div>
                  <span className="text-xs text-foreground-light/80 group-hover:text-blush transition-colors">Name {item}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </PageTransition>
  );
}
