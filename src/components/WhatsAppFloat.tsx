import { MessageCircle } from "lucide-react";
import { useSiteContent } from "@/contexts/SiteContentContext";

const WhatsAppFloat = () => {
  const { content } = useSiteContent();
  // Take the first phone number from "09122696126 / 08134295144" style strings
  const raw = content.topBar.phone.split("/")[0].trim();
  // Strip non-digits and convert leading 0 to Nigeria country code 234
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("0")) digits = "234" + digits.slice(1);
  const href = `https://wa.me/${digits}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant ring-1 ring-black/10 transition-transform duration-300 hover:scale-105 hover:bg-[#1DA851] focus:outline-none focus:ring-2 focus:ring-[#25D366]/60"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/40" />
    </a>
  );
};

export default WhatsAppFloat;
