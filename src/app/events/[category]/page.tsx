import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickActionBar } from "@/components/common/QuickActionBar";
import { CategoryClientView } from "./CategoryClientView";
import { getEventCategory, getAllEventCategories } from "@/data/eventCatalog";

export async function generateStaticParams() {
  const categories = getAllEventCategories();
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getEventCategory(categorySlug);

  if (!category) {
    return {
      title: "Event Category Not Found | Deep Events",
    };
  }

  return {
    title: `${category.name} (${category.hindiName}) Services | Deep Events & Decor`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Deep Events & Decor`,
      description: category.description,
      images: [category.heroImage],
    },
  };
}

export default async function EventCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getEventCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-clip bg-[#090d16] text-slate-100">
      <Navbar />
      <div className="flex-1 relative z-10">
        <CategoryClientView category={category} />
      </div>
      <Footer />
      <QuickActionBar />
    </main>
  );
}
