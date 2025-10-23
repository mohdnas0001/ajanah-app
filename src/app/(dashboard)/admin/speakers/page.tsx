'use client';

import { PageHeader } from "@/components/admin/layout/page-header";
import { PageContent } from "@/components/admin/layout/page-content";
import SpeakersPageContent from "@/components/admin/pages/speakers";


export default function SpeakersPage() {
  return (
    <PageContent
      header={
        <PageHeader
          title="Speakers Management"
          subtitle="Manage event speakers and their session assignments"
        />
      }
    >
      <SpeakersPageContent />
    </PageContent>
  );
}
