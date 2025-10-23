'use client';

import { PageHeader } from "@/components/admin/layout/page-header";
import { PageContent } from "@/components/admin/layout/page-content";
import DashboardPageContent from "@/components/admin/pages/dashboard";


export default function DashboardPage() {
  return (
    <PageContent
      header={
        <PageHeader
          title="Event Dashboard"
          subtitle="Welcome back! Here's an overview of your Event management portal."
        />
      }
    >
      <DashboardPageContent />
    </PageContent>
  );
}
