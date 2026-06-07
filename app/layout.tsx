import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Action Cost Tracker — Track Actions Compute Costs by Repo",
  description:
    "Monitor GitHub Actions usage, calculate costs per repository and workflow, and identify expensive runs. Built for engineering teams with multiple repositories."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="e9ed5c67-25a1-4f88-a14f-ab50f9365761"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
