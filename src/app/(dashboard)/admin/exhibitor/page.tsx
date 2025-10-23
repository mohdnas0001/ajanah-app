'use client';

import { PageHeader } from "@/components/admin/layout/page-header";
import { PageContent } from "@/components/admin/layout/page-content";
import ExhibitorPageContent from "@/components/admin/pages/exhibitors";


export default function ExhibitorPage() {
  return (
    <PageContent
      header={
        <PageHeader
          title="Exhibitors Management"
          subtitle="Manage event exhibitors, booths, and categories"
        />
      }
    >
      <ExhibitorPageContent />
    </PageContent>
  );
}
