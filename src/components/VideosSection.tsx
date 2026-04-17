import { Reveal, Stagger, Item } from "@/components/motion/Motion";
import vid1 from "@/assets/bestojis-video-1.mp4";
import vid2 from "@/assets/bestojis-video-2.mp4";

const videos = [
  { src: vid1, title: "Inside Bestojis — Restoring Mobility" },
  { src: vid2, title: "Stories of Hope & Rehabilitation" },
];

const VideosSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Reveal direction="up" className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Watch</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
            Our Work in Motion
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            Short clips from our clinic, outreach and rehabilitation sessions.
          </p>
        </Reveal>
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" stagger={0.1}>
          {videos.map((v, i) => (
            <Item key={i} className="rounded-2xl overflow-hidden bg-muted shadow-sm">
              <video
                src={v.src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover aspect-video"
              />
              <p className="px-4 py-3 text-sm font-medium text-foreground">{v.title}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default VideosSection;
