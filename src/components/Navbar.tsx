import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useSiteContent } from "@/contexts/SiteContentContext";
import logo from "@/assets/bestojis-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { content } = useSiteContent();

  return (
    <nav className="bg-background shadow-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt={`${content.siteName} logo`} className="h-10 w-10 object-contain" />
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/donate" className="hidden sm:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Donate Now
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background border-l border-border">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-foreground">
                  <img src={logo} alt="" className="h-8 w-8 object-contain" />
                  <span className="font-heading text-base">{content.siteName}</span>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col">
                {content.navLinks.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <Link to="/donate" onClick={() => setOpen(false)} className="mt-4">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Donate Now
                  </Button>
                </Link>

                {content.topBar.socialLinks.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-1">
                      Follow us
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {content.topBar.socialLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                          className="flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                        >
                          <span className="font-semibold">{link.shortLabel}</span>
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
