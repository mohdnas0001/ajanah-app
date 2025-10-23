'use client';

import { PageHeader } from "@/components/admin/layout/page-header";
import { PageContent } from "@/components/admin/layout/page-content";
import ExhibitorPageContent from "@/components/admin/pages/exhibitors";
import ETagsPageContent from "@/components/admin/pages/e-tags";


export default function ETagsPage() {
  return (
    <PageContent
      header={
        <PageHeader
          title="E-Tags Management"
          subtitle="Manage digital badges and QR codes for all event participants"
        />
      }
    >
      <ETagsPageContent />
    </PageContent>
  );
}
