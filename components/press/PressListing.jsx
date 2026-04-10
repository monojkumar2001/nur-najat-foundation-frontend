"use client";

import { FilterablePostListing } from "@/components/listing/FilterablePostListing";
import { PressPostGrid } from "@/components/press/PressPostGrid";

/** @param {{ posts: Record<string, unknown>[] }} props */
export function PressListing({ posts }) {
  return (
    <FilterablePostListing
      posts={posts}
      resultLabel="Press releases"
      searchId="press-search"
      searchLabel="Search press releases"
      emptyMessage='No releases match your filters. Try clearing search or choose "All" in the dropdowns.'
      renderPosts={(pagePosts, view) => <PressPostGrid posts={pagePosts} view={view} />}
    />
  );
}
