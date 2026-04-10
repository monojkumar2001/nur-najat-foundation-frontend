"use client";

import { FilterablePostListing } from "@/components/listing/FilterablePostListing";
import { EmergencyPostGrid } from "@/components/emergencies/EmergencyPostGrid";

/** @param {{ posts: Record<string, unknown>[] }} props */
export function EmergencyListing({ posts }) {
  return (
    <FilterablePostListing
      posts={posts}
      resultLabel="Emergency updates"
      searchId="em-search"
      searchLabel="Search emergencies"
      emptyMessage='No updates match your filters. Try clearing search or choose "All" in the dropdowns.'
      renderPosts={(pagePosts, view) => (
        <EmergencyPostGrid posts={pagePosts} view={view} />
      )}
    />
  );
}
