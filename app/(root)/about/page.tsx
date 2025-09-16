import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About • Dev Academy",
  description: "Learn more about Dev Academy's mission, team, and what we offer.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">About DevAcademy</h1>
        <p className="text-muted-foreground">
          DevAcademy is a modern learning platform focused on practical, project-driven courses.
          Our mission is to make high-quality software education accessible to everyone.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h2 className="font-semibold mb-2">What We Offer</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Curated courses on web development</li>
              <li>Hands-on projects and assessments</li>
              <li>Progress tracking and certifications</li>
              <li>Career-aligned learning paths</li>
            </ul>
          </div>
          <div className="rounded-lg border p-5">
            <h2 className="font-semibold mb-2">Our Values</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Clarity over complexity</li>
              <li>Real-world skills</li>
              <li>Community and mentorship</li>
              <li>Continuous improvement</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}