import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8 font-sans antialiased text-foreground">
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Azimuthal Crab Design System
          </h1>
          <p className="text-xl text-muted-foreground">
            A premium, high-performance design system built with Next.js 15, shadcn/ui, and Google Antigravity.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Core Components</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-lg border-2 border-primary/10">
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Premium rounded edges and smooth transitions.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Button>Primary Action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-primary/10">
              <CardHeader>
                <CardTitle>Inputs</CardTitle>
                <CardDescription>Clean and focused form controls.</CardDescription>
              </CardHeader>
              <CardContent>
                <Input placeholder="Enter your email..." className="max-w-xs" />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Theme Tokens</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-primary" />
              <p className="text-sm font-medium">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-secondary" />
              <p className="text-sm font-medium">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg bg-accent" />
              <p className="text-sm font-medium">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 w-full rounded-lg border bg-background" />
              <p className="text-sm font-medium">Background</p>
            </div>
          </div>
        </section>

        <footer className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Azimuthal Crab DS. Maintained via GitHub and documented in Notion.
          </p>
        </footer>
      </div>
    </main>
  );
}
