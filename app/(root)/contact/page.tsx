import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact • Dev Academy",
  description: "Get in touch with the Dev Academy team.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground">
          Have questions, feedback, or partnership ideas? We’d love to hear from you.
        </p>

        <div className="rounded-lg border p-5 space-y-4">
          <div>
            <h2 className="font-semibold mb-1">Email</h2>
            <p className="text-sm text-muted-foreground">support@devacademy.example</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Community</h2>
            <p className="text-sm text-muted-foreground">
              Join our community channels for updates and help.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="text-primary hover:underline">Discord</Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">Twitter</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}