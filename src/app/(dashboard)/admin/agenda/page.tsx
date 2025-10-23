'use client';

import { PageHeader } from "@/components/admin/layout/page-header";
import { PageContent } from "@/components/admin/layout/page-content";
import AgendaPageContent from "@/components/admin/pages/agenda";


export default function AgendaPage() {
  return (
    <PageContent
      header={
        <PageHeader
          title="Agenda Management"
          subtitle="Manage event schedule, sessions, and time slots"
        />
      }
    >
      <AgendaPageContent />
    </PageContent>
  );
}
