"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Plus,
  Trash2,
  Edit2,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AccountNav } from "@/components/account/AccountNav";

const INITIAL_ADDRESSES = [
  {
    id: "addr-1",
    name: "Radhika Sharma (Residence)",
    addressLine1: "42, Temple Road, Near Sree Krishna Temple",
    landmark: "Opposite Post Office",
    city: "Kochi",
    state: "Kerala",
    pincode: "682001",
    phone: "9876543210",
    isDefault: true,
  },
  {
    id: "addr-2",
    name: "Radhika Sharma (Office)",
    addressLine1: "7th Floor, Infopark Tower II, Kakkanad",
    landmark: "Near Expressway Junction",
    city: "Kochi",
    state: "Kerala",
    pincode: "682042",
    phone: "9876543210",
    isDefault: false,
  },
];

export default function AccountAddressesPage() {
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    addressLine1: "",
    landmark: "",
    city: "",
    state: "Kerala",
    pincode: "",
    phone: "",
    isDefault: false,
  });

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAddress.name || !newAddress.addressLine1 || !newAddress.city || !newAddress.pincode) {
      alert("Please fill all required fields.");
      return;
    }

    const created = {
      id: `addr-${Date.now()}`,
      ...newAddress,
    };

    setAddresses([...addresses, created]);
    setShowAddForm(false);
    setNewAddress({
      name: "",
      addressLine1: "",
      landmark: "",
      city: "",
      state: "Kerala",
      pincode: "",
      phone: "",
      isDefault: false,
    });
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((a) => ({
        ...a,
        isDefault: a.id === id,
      }))
    );
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Breadcrumbs */}
      <div className="bg-white border-b border-brand-brown-border/60 py-3">
        <Container size="xl">
          <nav className="flex items-center space-x-2 text-xs text-brand-brown-muted">
            <Link href="/" className="hover:text-brand-green transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-brown-border" />
            <Link href="/account" className="hover:text-brand-green transition-colors">
              Patient Dashboard
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-brown-border" />
            <span className="text-brand-brown font-medium">Saved Addresses</span>
          </nav>
        </Container>
      </div>

      <Container size="xl" className="pt-8 sm:pt-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <AccountNav />

          <main className="flex-1 space-y-6 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-brown-border pb-4">
              <div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                  Saved Delivery Destinations
                </h1>
                <p className="text-xs text-brand-brown-muted pt-1">
                  Manage shipping addresses for fast dispatch of classical Ayurvedic medicines.
                </p>
              </div>

              {!showAddForm && (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setShowAddForm(true)}
                  leftIcon={<Plus className="w-3.5 h-3.5" />}
                >
                  Add New Address
                </Button>
              )}
            </div>

            {/* Add Address Form Modal / Expandable */}
            {showAddForm && (
              <div className="bg-white rounded-2xl p-6 border-2 border-brand-green/40 shadow-card space-y-5 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-brand-brown-border/60 pb-3">
                  <h3 className="font-serif font-bold text-lg text-brand-brown">
                    New Shipping Address
                  </h3>
                  <button
                    onClick={() => setShowAddForm(false)}
                    className="p-1 text-brand-brown-muted hover:text-brand-brown"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <form onSubmit={handleAddAddress} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Address Label / Recipient Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                      placeholder="e.g. Radhika Sharma (Residence)"
                      className="w-full p-2.5 bg-white border border-brand-brown-border rounded-lg text-xs"
                    />
                  </div>

                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Flat / House No. / Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={newAddress.addressLine1}
                      onChange={(e) =>
                        setNewAddress({ ...newAddress, addressLine1: e.target.value })
                      }
                      placeholder="Street address"
                      className="w-full p-2.5 bg-white border border-brand-brown-border rounded-lg text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Landmark
                    </label>
                    <input
                      type="text"
                      value={newAddress.landmark}
                      onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })}
                      placeholder="Optional landmark"
                      className="w-full p-2.5 bg-white border border-brand-brown-border rounded-lg text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      placeholder="City name"
                      className="w-full p-2.5 bg-white border border-brand-brown-border rounded-lg text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      className="w-full p-2.5 bg-white border border-brand-brown-border rounded-lg text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={newAddress.pincode}
                      onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                      placeholder="6-digit PIN code"
                      className="w-full p-2.5 bg-white border border-brand-brown-border rounded-lg text-xs font-mono"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2 flex gap-3">
                    <Button type="submit" variant="primary" size="sm">
                      Save Destination
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Address Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className={`p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                    addr.isDefault
                      ? "bg-white border-brand-green/40 shadow-card ring-1 ring-brand-green/20"
                      : "bg-white border-brand-brown-border shadow-card"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-bold text-base text-brand-brown">
                        {addr.name}
                      </h3>
                      {addr.isDefault && (
                        <span className="bg-brand-green/10 text-brand-green text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Default Shipping
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-brand-brown leading-relaxed">
                      {addr.addressLine1}
                      {addr.landmark && `, ${addr.landmark}`}
                      <br />
                      {addr.city}, {addr.state} — <strong className="font-mono">{addr.pincode}</strong>
                    </p>

                    <p className="text-[11px] text-brand-brown-muted">
                      Phone: <span className="font-mono">{addr.phone}</span>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brand-brown-border/60 flex items-center justify-between text-xs">
                    {!addr.isDefault ? (
                      <button
                        onClick={() => handleSetDefault(addr.id)}
                        className="text-brand-green font-semibold hover:underline"
                      >
                        Set as Default
                      </button>
                    ) : (
                      <span className="text-[11px] text-brand-green flex items-center gap-1 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Active Default
                      </span>
                    )}

                    <button
                      onClick={() => handleDeleteAddress(addr.id)}
                      className="text-brand-brown-muted hover:text-red-700 p-1 transition-colors"
                      title="Delete Address"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
