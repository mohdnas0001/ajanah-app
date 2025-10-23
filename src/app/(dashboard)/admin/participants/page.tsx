'use client';

import { PageHeader } from "@/components/admin/layout/page-header";
import { PageContent } from "@/components/admin/layout/page-content";
import ParticipantsPageContent from "@/components/admin/pages/participants";


export default function ParticipantsPage() {
  return (
    <PageContent
      header={
        <PageHeader
          title="Participants Management"
          subtitle="Manage all event participants and their registration status"
        />
      }
    >
      <ParticipantsPageContent />
    </PageContent>
  );
}
