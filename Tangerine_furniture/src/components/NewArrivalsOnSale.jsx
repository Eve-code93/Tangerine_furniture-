import React from "react";
import { NewArrivals } from "./NewArrivals";
import { OnSale } from "./OnSale";

export function NewArrivalsOnSale() {
  return (
    <section className="w-full flex gap-6 px-6 py-12 min-h-[600px]">
      <div className="flex-1 bg-beige p-6 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-3xl font-bold text-navy mb-4">New Arrivals</h2>
        <NewArrivals />
      </div>

      <div className="flex-1 bg-navy p-6 rounded-lg shadow-lg flex flex-col">
        <h2 className="text-3xl font-bold text-tangerine mb-4">On Sale</h2>
        <OnSale />
      </div>
    </section>
  );
}

