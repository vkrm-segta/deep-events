import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuickActionBar } from "@/components/common/QuickActionBar";
import { ServiceClientView } from "./ServiceClientView";
import { getEventCategory, getService, getAllEventCategories } from "@/data/eventCatalog";

export async function generateStaticParams() {
  const categories = getAllEventCategories();
  const paramsList: { category: string; service: string }[] = [];

  categories.forEach((cat) => {
    cat.services.forEach((srv) => {
      paramsList.push({
        category: cat.slug,
        service: srv.slug,
      });
    });
  });

  return paramsList;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug } = await params;
  const category = getEventCategory(categorySlug);
  const service = getService(categorySlug, serviceSlug);

  if (!category || !service) {
    return {
      title: "Service Not Found | Deep Events",
    };
  }

  return {
    title: `${service.title} (${service.hindiTitle}) | ${category.name} | Deep Events`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Deep Events`,
      description: service.description,
      images: [service.coverImage],
    },
  };
}

export default async function IndividualServicePage({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category: categorySlug, service: serviceSlug } = await params;
  const category = getEventCategory(categorySlug);
  const service = getService(categorySlug, serviceSlug);

  if (!category || !service) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col relative overflow-x-clip bg-[#090d16] text-slate-100">
      <Navbar />
      <div className="flex-1 relative z-10">
        <ServiceClientView category={category} service={service} />
      </div>
      <Footer />
      <QuickActionBar />
    </main>
  );
}
