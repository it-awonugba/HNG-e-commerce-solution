"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Singleton from "../_components/Product/Singleton";

export default function Page() {
  const searchParam = useSearchParams();
  const id = searchParam?.get("id");
  if (!id) {
    return <div>...loading</div>;
  }

  return (
    <Suspense fallback={<div>...loading</div>}>
      <Singleton id={id} />
    </Suspense>
  );
}
