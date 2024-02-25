import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link legacyBehavior href="/products/1">
        <a>Product 1</a>
      </Link>
    </div>
  );
}
