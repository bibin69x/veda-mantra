"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Video,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Star,
  Sun,
  Heart,
  Flame,
  Activity,
  Moon,
  Shield,
  CreditCard,
  Download,
  AlertCircle,
  HelpCircle,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DOCTORS, HEALTH_CONCERNS, Doctor } from "@/data/doctors";

// Icon mapper for health concerns
const ICONS: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5 text-brand-gold" />,
  Flame: <Flame className="w-5 h-5 text-brand-gold" />,
  Sun: <Sun className="w-5 h-5 text-brand-gold" />,
  Heart: <Heart className="w-5 h-5 text-brand-gold" />,
  Moon: <Moon className="w-5 h-5 text-brand-gold" />,
  Shield: <Shield className="w-5 h-5 text-brand-gold" />,
};

// Generate next 14 days
const generateAvailableDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push({
      dateString: d.toISOString().split("T")[0],
      dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
      dayNumber: d.getDate(),
      monthName: d.toLocaleDateString("en-US", { month: "short" }),
      fullDate: d.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    });
  }
  return dates;
};

const TIME_SLOTS = {
  morning: ["09:30 AM", "10:15 AM", "11:00 AM", "11:45 AM"],
  afternoon: ["02:00 PM", "02:45 PM", "03:30 PM", "04:15 PM"],
  evening: ["05:00 PM", "05:45 PM", "06:30 PM", "07:15 PM"],
};

export default function ConsultationPage() {
  const availableDates = generateAvailableDates();

  // Wizard Step: 1 = Mode & Concerns, 2 = Doctor, 3 = Date & Time, 4 = Patient Intake, 5 = Review & Confirmation
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Booking Form State
  const [consultationMode, setConsultationMode] = useState<"online" | "clinic">("online");
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(["spine-joints"]);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>("auto"); // 'auto' or doctor.id
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0].dateString);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("10:15 AM");

  // Patient Intake Details
  const [patientDetails, setPatientDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "female",
    preferredLanguage: "English",
    symptoms: "",
    medicalHistory: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Selected Doctor Object
  const selectedDoctor: Doctor | undefined =
    selectedDoctorId === "auto"
      ? undefined
      : DOCTORS.find((d) => d.id === selectedDoctorId);

  const consultationFee =
    consultationMode === "online"
      ? selectedDoctor
        ? selectedDoctor.onlineFee
        : 800
      : selectedDoctor
      ? selectedDoctor.clinicFee
      : 1200;

  const gstAmount = Math.round(consultationFee * 0.18);
  const totalAmount = consultationFee + gstAmount;

  // Toggle Health Concern Selection
  const toggleConcern = (concernId: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(concernId)
        ? prev.filter((id) => id !== concernId)
        : [...prev, concernId]
    );
  };

  // Validate Step 4 Patient Details
  const validatePatientForm = () => {
    const errors: Record<string, string> = {};
    if (!patientDetails.fullName.trim()) errors.fullName = "Please enter your full name.";
    if (!patientDetails.email.trim() || !patientDetails.email.includes("@")) {
      errors.email = "Please enter a valid email address.";
    }
    if (!patientDetails.phone.trim() || patientDetails.phone.replace(/\D/g, "").length < 10) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!patientDetails.age.trim() || isNaN(Number(patientDetails.age))) {
      errors.age = "Please specify patient age.";
    }
    if (!patientDetails.symptoms.trim()) {
      errors.symptoms = "Please briefly describe your primary health symptoms.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 4) {
      if (!validatePatientForm()) return;
    }
    setCurrentStep((prev) => Math.min(5, prev + 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 120, behavior: "smooth" });
  };

  // Handle Payment & Confirmation
  const handleConfirmBooking = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `AVM-${new Date().getFullYear()}-${Math.floor(
        1000 + Math.random() * 9000
      )}`;
      setBookingId(generatedId);
      setIsSubmitting(false);
      setBookingConfirmed(true);
      window.scrollTo({ top: 80, behavior: "smooth" });
    }, 1200);
  };

  // Download .ics Calendar File
  const handleDownloadCalendar = () => {
    const selectedDateObj = availableDates.find((d) => d.dateString === selectedDate);
    const dateFormatted = selectedDate.replace(/-/g, "");
    const doctorName = selectedDoctor ? selectedDoctor.name : "Senior Ayurvedic Vaidya";
    const modeLabel =
      consultationMode === "online" ? "Online Video Tele-Consultation" : "In-Clinic Nadi Pariksha Visit";

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ayur Veda Mantra//Ayurvedic Consultation//EN
BEGIN:VEVENT
SUMMARY:Ayurvedic Consultation with ${doctorName}
DESCRIPTION:Ayur Veda Mantra ${modeLabel}. Booking Reference: ${bookingId}. Please arrive / join 5 minutes before scheduled slot.
LOCATION:${
      consultationMode === "online"
        ? "Google Meet / Zoom Video Link (Will be sent via WhatsApp)"
        : "Ayur Veda Mantra Panchakarma Sanctum, Kerala"
    }
DTSTART:${dateFormatted}T050000Z
DTEND:${dateFormatted}T060000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `AyurVedaMantra-Appointment-${bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const selectedDateObject = availableDates.find((d) => d.dateString === selectedDate);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Banner */}
      <section className="relative bg-brand-brown text-white py-14 lg:py-18 overflow-hidden border-b border-brand-brown-light/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container size="xl" className="relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <Badge
            variant="gold"
            size="md"
            className="mx-auto bg-brand-gold/20 text-brand-gold-light border-brand-gold/40"
          >
            Vaidya Chikitsa • Certified Medical Faculty
          </Badge>

          <div className="space-y-2">
            <p className="font-serif italic text-brand-gold text-xs sm:text-sm tracking-widest uppercase">
              Classical Nadi Pariksha & Pulse Diagnosis
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Book Your Ayurvedic Doctor Consultation
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl mx-auto">
            Experience authentic Nadi Pariksha (Pulse Diagnosis), Prakriti constitutional analysis, and customized Panchakarma roadmaps with our Senior Certified Vaidyas.
          </p>
        </Container>
      </section>

      {/* Main Booking Container */}
      <Container size="xl" className="pt-8 sm:pt-12">
        {!bookingConfirmed ? (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Multi-Step Progress Tracker */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-brand-brown-border shadow-card">
              <div className="grid grid-cols-5 gap-2 text-center">
                {[
                  { step: 1, label: "Mode & Concerns" },
                  { step: 2, label: "Select Vaidya" },
                  { step: 3, label: "Date & Slot" },
                  { step: 4, label: "Patient Intake" },
                  { step: 5, label: "Confirm & Pay" },
                ].map((s) => {
                  const isDone = currentStep > s.step;
                  const isCurrent = currentStep === s.step;

                  return (
                    <div key={s.step} className="flex flex-col items-center space-y-1.5">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isDone
                            ? "bg-brand-green text-white"
                            : isCurrent
                            ? "bg-brand-brown text-white ring-4 ring-brand-brown/10"
                            : "bg-brand-brown/10 text-brand-brown-muted"
                        }`}
                      >
                        {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : s.step}
                      </div>
                      <span
                        className={`text-[10px] sm:text-xs font-medium line-clamp-1 ${
                          isCurrent
                            ? "text-brand-brown font-bold"
                            : isDone
                            ? "text-brand-green"
                            : "text-brand-brown-muted"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 1: Consultation Mode & Health Concerns */}
            {currentStep === 1 && (
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-brand-brown-border shadow-card space-y-8 animate-fadeIn">
                <div className="space-y-1 border-b border-brand-brown-border/60 pb-4">
                  <Badge variant="green" size="sm">
                    Step 1 of 5
                  </Badge>
                  <h2 className="font-serif text-2xl font-bold text-brand-brown">
                    Select Consultation Mode & Health Concerns
                  </h2>
                  <p className="text-xs text-brand-brown-muted">
                    Choose between a remote tele-consultation or an in-person clinic examination.
                  </p>
                </div>

                {/* Consultation Mode Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Online Mode */}
                  <div
                    onClick={() => setConsultationMode("online")}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between space-y-4 ${
                      consultationMode === "online"
                        ? "border-brand-green bg-brand-green/5 shadow-md ring-2 ring-brand-green/10"
                        : "border-brand-brown-border hover:border-brand-brown bg-white"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                          <Video className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-bold font-serif text-brand-brown">
                          ₹800
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg font-bold text-brand-brown">
                          Online Video Tele-Consultation
                        </h3>
                        <p className="text-xs text-brand-brown-muted leading-relaxed">
                          30–45 mins one-on-one HD video call with senior Vaidya via Google Meet or WhatsApp.
                        </p>
                      </div>
                      <ul className="space-y-1.5 text-xs text-brand-brown pt-2 border-t border-brand-brown-border/40">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                          <span>Prakriti (Dosha) Assessment Questionnaire</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                          <span>Digital Sastric Prescription within 2 hours</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                          <span>7-Day WhatsApp follow-up support</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2">
                      <span
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                          consultationMode === "online"
                            ? "bg-brand-green text-white"
                            : "bg-brand-brown/10 text-brand-brown-muted"
                        }`}
                      >
                        {consultationMode === "online" ? "Selected Mode" : "Choose Online"}
                      </span>
                    </div>
                  </div>

                  {/* Clinic Mode */}
                  <div
                    onClick={() => setConsultationMode("clinic")}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between space-y-4 ${
                      consultationMode === "clinic"
                        ? "border-brand-green bg-brand-green/5 shadow-md ring-2 ring-brand-green/10"
                        : "border-brand-brown-border hover:border-brand-brown bg-white"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-brand-brown/10 text-brand-brown flex items-center justify-center">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-bold font-serif text-brand-brown">
                          ₹1,200
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif text-lg font-bold text-brand-brown">
                          In-Clinic Assessment & Nadi Pariksha
                        </h3>
                        <p className="text-xs text-brand-brown-muted leading-relaxed">
                          45–60 mins physical clinical visit at our Kerala Panchakarma Sanctum.
                        </p>
                      </div>
                      <ul className="space-y-1.5 text-xs text-brand-brown pt-2 border-t border-brand-brown-border/40">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
                          <span>Traditional Pulse Diagnosis (Nadi Pariksha)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
                          <span>8-Fold Clinical Examination (Ashtavidha)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
                          <span>Tailored In-House Panchakarma Plan</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2">
                      <span
                        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                          consultationMode === "clinic"
                            ? "bg-brand-green text-white"
                            : "bg-brand-brown/10 text-brand-brown-muted"
                        }`}
                      >
                        {consultationMode === "clinic" ? "Selected Mode" : "Choose In-Clinic"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary Health Concern Areas */}
                <div className="space-y-4 pt-4 border-t border-brand-brown-border/60">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-semibold text-brand-brown">
                      Select Primary Health Concerns
                    </h3>
                    <p className="text-xs text-brand-brown-muted">
                      Select one or more conditions to help our Vaidyas prepare your clinical case sheet.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {HEALTH_CONCERNS.map((concern) => {
                      const isSelected = selectedConcerns.includes(concern.id);
                      return (
                        <div
                          key={concern.id}
                          onClick={() => toggleConcern(concern.id)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                            isSelected
                              ? "bg-brand-brown text-white border-brand-brown shadow-sm"
                              : "bg-white text-brand-brown border-brand-brown-border hover:border-brand-brown"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <span className="p-2 rounded-lg bg-white/10 shrink-0">
                              {ICONS[concern.iconName] || <Activity className="w-5 h-5" />}
                            </span>
                            {isSelected && (
                              <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-serif font-bold text-sm leading-snug">
                              {concern.title}
                            </h4>
                            <p
                              className={`text-[11px] line-clamp-2 pt-1 ${
                                isSelected ? "text-white/80" : "text-brand-brown-muted"
                              }`}
                            >
                              {concern.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Continue CTA */}
                <div className="pt-4 flex justify-end">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleNextStep}
                    rightIcon={<ChevronRight className="w-4 h-4" />}
                  >
                    Proceed to Vaidya Selection
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Doctor Selection */}
            {currentStep === 2 && (
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-brand-brown-border shadow-card space-y-8 animate-fadeIn">
                <div className="space-y-1 border-b border-brand-brown-border/60 pb-4">
                  <Badge variant="green" size="sm">
                    Step 2 of 5
                  </Badge>
                  <h2 className="font-serif text-2xl font-bold text-brand-brown">
                    Select Your Ayurvedic Physician
                  </h2>
                  <p className="text-xs text-brand-brown-muted">
                    Choose a specific Senior Vaidya or select automatic allocation for the fastest available appointment.
                  </p>
                </div>

                {/* Option 1: Auto Assign */}
                <div
                  onClick={() => setSelectedDoctorId("auto")}
                  className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    selectedDoctorId === "auto"
                      ? "border-brand-green bg-brand-green/5 shadow-md"
                      : "border-brand-brown-border hover:border-brand-brown bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center font-serif text-xl font-bold shrink-0">
                      ⚡
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif text-base font-bold text-brand-brown">
                          Next Available Senior Vaidya
                        </h3>
                        <span className="bg-brand-green/10 text-brand-green text-[10px] font-bold px-2 py-0.5 rounded">
                          Recommended
                        </span>
                      </div>
                      <p className="text-xs text-brand-brown-muted pt-0.5">
                        We will allocate the most experienced specialist matching your health concern area.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                        selectedDoctorId === "auto"
                          ? "bg-brand-green text-white"
                          : "bg-brand-brown/10 text-brand-brown-muted"
                      }`}
                    >
                      {selectedDoctorId === "auto" ? "Selected" : "Select Auto"}
                    </span>
                  </div>
                </div>

                {/* Specific Doctors Cards */}
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted block">
                    Or Select A Specific Certified Practitioner:
                  </span>

                  <div className="grid grid-cols-1 gap-4">
                    {DOCTORS.map((doc) => {
                      const isSelected = selectedDoctorId === doc.id;
                      return (
                        <div
                          key={doc.id}
                          onClick={() => setSelectedDoctorId(doc.id)}
                          className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col md:flex-row gap-5 items-start md:items-center justify-between ${
                            isSelected
                              ? "border-brand-brown bg-brand-brown/5 shadow-md ring-2 ring-brand-brown/10"
                              : "border-brand-brown-border hover:border-brand-brown bg-white"
                          }`}
                        >
                          <div className="flex gap-4 items-center">
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-white shrink-0 border border-brand-brown-border">
                              <Image
                                src={doc.image}
                                alt={doc.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="space-y-1">
                              <span className="text-[11px] font-serif italic text-brand-gold-dark block">
                                {doc.sanskritTitle}
                              </span>
                              <h3 className="font-serif text-base sm:text-lg font-bold text-brand-brown">
                                {doc.name}
                              </h3>
                              <p className="text-xs text-brand-brown font-medium">
                                {doc.title}
                              </p>
                              <p className="text-[11px] text-brand-brown-muted">
                                {doc.degrees} • {doc.experience}
                              </p>
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {doc.specialties.slice(0, 2).map((spec, i) => (
                                  <span
                                    key={i}
                                    className="bg-brand-brown/5 border border-brand-brown-border/60 text-brand-brown text-[10px] font-medium px-2 py-0.5 rounded"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-brand-brown-border/40 gap-3">
                            <div className="text-left md:text-right">
                              <span className="text-sm font-bold text-brand-brown">
                                ₹{consultationMode === "online" ? doc.onlineFee : doc.clinicFee}
                              </span>
                              <span className="text-[10px] text-brand-green block font-medium">
                                Next: {doc.nextSlot}
                              </span>
                            </div>

                            <span
                              className={`text-xs font-semibold px-4 py-1.5 rounded-full ${
                                isSelected
                                  ? "bg-brand-brown text-white"
                                  : "bg-brand-brown/10 text-brand-brown-muted"
                              }`}
                            >
                              {isSelected ? "Selected Vaidya" : "Select"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation CTA */}
                <div className="pt-4 flex items-center justify-between border-t border-brand-brown-border/60">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handlePrevStep}
                    leftIcon={<ChevronLeft className="w-4 h-4" />}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleNextStep}
                    rightIcon={<ChevronRight className="w-4 h-4" />}
                  >
                    Choose Appointment Slot
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Calendar & Time Slots */}
            {currentStep === 3 && (
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-brand-brown-border shadow-card space-y-8 animate-fadeIn">
                <div className="space-y-1 border-b border-brand-brown-border/60 pb-4">
                  <Badge variant="green" size="sm">
                    Step 3 of 5
                  </Badge>
                  <h2 className="font-serif text-2xl font-bold text-brand-brown">
                    Select Date & Time Slot
                  </h2>
                  <p className="text-xs text-brand-brown-muted">
                    Times are displayed in Indian Standard Time (IST / GMT+5:30).
                  </p>
                </div>

                {/* 14-Day Date Selector Carousel */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                    <CalendarIcon className="w-4 h-4 text-brand-green" />
                    Available Consultation Dates:
                  </span>

                  <div className="flex gap-2.5 overflow-x-auto pb-3 pt-1">
                    {availableDates.map((item) => {
                      const isSelected = selectedDate === item.dateString;
                      return (
                        <button
                          key={item.dateString}
                          onClick={() => setSelectedDate(item.dateString)}
                          className={`p-3 rounded-xl border text-center transition-all min-w-[72px] shrink-0 ${
                            isSelected
                              ? "bg-brand-brown text-white border-brand-brown shadow-md scale-105"
                              : "bg-white text-brand-brown border-brand-brown-border hover:border-brand-brown"
                          }`}
                        >
                          <span className="block text-[10px] uppercase font-semibold tracking-wider opacity-80">
                            {item.dayName}
                          </span>
                          <span className="block text-lg font-bold font-serif my-0.5">
                            {item.dayNumber}
                          </span>
                          <span className="block text-[10px] font-medium opacity-80">
                            {item.monthName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots Categorized */}
                <div className="space-y-6 pt-2">
                  <div className="flex items-center justify-between text-xs text-brand-brown">
                    <span className="font-semibold">
                      Selected Date:{" "}
                      <strong className="text-brand-green font-serif text-sm">
                        {selectedDateObject?.fullDate}
                      </strong>
                    </span>
                    <span className="text-brand-brown-muted">Duration: 30–45 Mins</span>
                  </div>

                  {/* Morning Slots */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      Morning Slots (09:30 AM – 12:30 PM)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {TIME_SLOTS.morning.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all border ${
                            selectedTimeSlot === slot
                              ? "bg-brand-green text-white border-brand-green shadow-sm"
                              : "bg-white text-brand-brown border-brand-brown-border hover:border-brand-brown"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Afternoon Slots */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      Afternoon Slots (02:00 PM – 04:30 PM)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {TIME_SLOTS.afternoon.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all border ${
                            selectedTimeSlot === slot
                              ? "bg-brand-green text-white border-brand-green shadow-sm"
                              : "bg-white text-brand-brown border-brand-brown-border hover:border-brand-brown"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Evening Slots */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      Evening Slots (05:00 PM – 07:30 PM)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {TIME_SLOTS.evening.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all border ${
                            selectedTimeSlot === slot
                              ? "bg-brand-green text-white border-brand-green shadow-sm"
                              : "bg-white text-brand-brown border-brand-brown-border hover:border-brand-brown"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation CTA */}
                <div className="pt-4 flex items-center justify-between border-t border-brand-brown-border/60">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handlePrevStep}
                    leftIcon={<ChevronLeft className="w-4 h-4" />}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleNextStep}
                    rightIcon={<ChevronRight className="w-4 h-4" />}
                  >
                    Enter Patient Details
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Patient Intake & Case Sheet */}
            {currentStep === 4 && (
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-brand-brown-border shadow-card space-y-8 animate-fadeIn">
                <div className="space-y-1 border-b border-brand-brown-border/60 pb-4">
                  <Badge variant="green" size="sm">
                    Step 4 of 5
                  </Badge>
                  <h2 className="font-serif text-2xl font-bold text-brand-brown">
                    Patient Intake & Health Profile
                  </h2>
                  <p className="text-xs text-brand-brown-muted">
                    This medical profile is confidential and encrypted directly for the attending Vaidya.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-brown-muted" />
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      value={patientDetails.fullName}
                      onChange={(e) =>
                        setPatientDetails({ ...patientDetails, fullName: e.target.value })
                      }
                      placeholder="e.g. Radhika Sharma"
                      className={`w-full p-3 bg-white border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.fullName ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-brand-brown-muted" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={patientDetails.email}
                      onChange={(e) =>
                        setPatientDetails({ ...patientDetails, email: e.target.value })
                      }
                      placeholder="e.g. radhika@example.com"
                      className={`w-full p-3 bg-white border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.email ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.email}</p>
                    )}
                  </div>

                  {/* WhatsApp Mobile */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-brand-brown-muted" />
                      WhatsApp Phone Number (+91) *
                    </label>
                    <input
                      type="tel"
                      value={patientDetails.phone}
                      onChange={(e) =>
                        setPatientDetails({ ...patientDetails, phone: e.target.value })
                      }
                      placeholder="e.g. 9876543210"
                      className={`w-full p-3 bg-white border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.phone ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Age */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Age (Years) *
                    </label>
                    <input
                      type="number"
                      value={patientDetails.age}
                      onChange={(e) =>
                        setPatientDetails({ ...patientDetails, age: e.target.value })
                      }
                      placeholder="e.g. 38"
                      className={`w-full p-3 bg-white border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.age ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.age && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.age}</p>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Gender
                    </label>
                    <select
                      value={patientDetails.gender}
                      onChange={(e) =>
                        setPatientDetails({ ...patientDetails, gender: e.target.value })
                      }
                      className="w-full p-3 bg-white border border-brand-brown-border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Language */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Preferred Language for Consultation
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1">
                      {["English", "Hindi", "Malayalam", "Tamil", "Kannada", "Telugu"].map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() =>
                            setPatientDetails({ ...patientDetails, preferredLanguage: lang })
                          }
                          className={`py-2 px-2 rounded-lg text-xs font-medium border transition-all ${
                            patientDetails.preferredLanguage === lang
                              ? "bg-brand-brown text-white border-brand-brown font-bold"
                              : "bg-white text-brand-brown border-brand-brown-border"
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Symptoms */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-brand-brown-muted" />
                      Describe Primary Health Symptoms & Duration *
                    </label>
                    <textarea
                      rows={3}
                      value={patientDetails.symptoms}
                      onChange={(e) =>
                        setPatientDetails({ ...patientDetails, symptoms: e.target.value })
                      }
                      placeholder="e.g. Chronic lower back pain for 6 months, aggravated in cold weather. Disturbed sleep and morning joint stiffness."
                      className={`w-full p-3 bg-white border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green ${
                        formErrors.symptoms ? "border-red-500" : "border-brand-brown-border"
                      }`}
                    />
                    {formErrors.symptoms && (
                      <p className="text-xs text-red-600 font-medium">{formErrors.symptoms}</p>
                    )}
                  </div>

                  {/* Past History & Current Medications */}
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-brown">
                      Ongoing Medications or Known Allergies (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={patientDetails.medicalHistory}
                      onChange={(e) =>
                        setPatientDetails({ ...patientDetails, medicalHistory: e.target.value })
                      }
                      placeholder="e.g. Taking thyroid supplements, allergic to penicillin, previous lumbar MRI available."
                      className="w-full p-3 bg-white border border-brand-brown-border rounded-lg text-sm text-brand-brown focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>
                </div>

                {/* Navigation CTA */}
                <div className="pt-4 flex items-center justify-between border-t border-brand-brown-border/60">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handlePrevStep}
                    leftIcon={<ChevronLeft className="w-4 h-4" />}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={handleNextStep}
                    rightIcon={<ChevronRight className="w-4 h-4" />}
                  >
                    Review Appointment & Pay
                  </Button>
                </div>
              </div>
            )}

            {/* Step 5: Review & Confirm with Razorpay */}
            {currentStep === 5 && (
              <div className="bg-white rounded-2xl p-6 sm:p-10 border border-brand-brown-border shadow-card space-y-8 animate-fadeIn">
                <div className="space-y-1 border-b border-brand-brown-border/60 pb-4">
                  <Badge variant="gold" size="sm">
                    Step 5 of 5
                  </Badge>
                  <h2 className="font-serif text-2xl font-bold text-brand-brown">
                    Review Appointment & Secure Checkout
                  </h2>
                  <p className="text-xs text-brand-brown-muted">
                    Confirm consultation details and complete server-verified Razorpay payment.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="bg-white rounded-2xl p-6 border border-brand-brown-border shadow-sm space-y-5">
                  <h3 className="font-serif text-lg font-bold text-brand-brown border-b border-brand-brown-border/60 pb-2">
                    Consultation Summary
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-brand-brown-muted block">Consultation Mode:</span>
                      <strong className="text-brand-brown text-sm font-serif">
                        {consultationMode === "online"
                          ? "Online Video Tele-Consultation (Google Meet / Zoom)"
                          : "In-Clinic Sanctum Visit & Nadi Pariksha"}
                      </strong>
                    </div>

                    <div>
                      <span className="text-brand-brown-muted block">Attending Physician:</span>
                      <strong className="text-brand-brown text-sm font-serif">
                        {selectedDoctor ? selectedDoctor.name : "Next Available Senior Vaidya"}
                      </strong>
                    </div>

                    <div>
                      <span className="text-brand-brown-muted block">Date & Time:</span>
                      <strong className="text-brand-brown text-sm font-serif">
                        {selectedDateObject?.fullDate} at {selectedTimeSlot} (IST)
                      </strong>
                    </div>

                    <div>
                      <span className="text-brand-brown-muted block">Patient:</span>
                      <strong className="text-brand-brown text-sm font-serif">
                        {patientDetails.fullName} ({patientDetails.age} yrs, {patientDetails.gender})
                      </strong>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brand-brown-border/60 flex items-center justify-between text-xs text-brand-brown">
                    <span>WhatsApp Updates Sent To:</span>
                    <strong className="font-mono">{patientDetails.phone}</strong>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="p-5 rounded-xl border border-brand-brown-border bg-white space-y-2.5 text-xs text-brand-brown">
                  <div className="flex justify-between">
                    <span className="text-brand-brown-muted">Consultation Clinical Fee</span>
                    <span className="font-medium font-mono">₹{consultationFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-brown-muted">Healthcare GST (18%)</span>
                    <span className="font-medium font-mono">₹{gstAmount}</span>
                  </div>
                  <div className="pt-2 border-t border-brand-brown-border/60 flex justify-between items-baseline font-serif">
                    <span className="text-base font-bold text-brand-brown">Total Amount</span>
                    <span className="text-2xl font-bold text-brand-green font-sans">
                      ₹{totalAmount}
                    </span>
                  </div>
                </div>

                {/* Razorpay Integration Box */}
                <div className="bg-brand-brown text-white p-5 rounded-xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-white">
                        Razorpay Standard Secure Gateway
                      </h4>
                      <p className="text-[11px] text-white/80">
                        UPI (GPay, PhonePe, Paytm), Cards, Net Banking & Net-Banking.
                      </p>
                    </div>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0" />
                </div>

                {/* Navigation CTA */}
                <div className="pt-4 flex items-center justify-between border-t border-brand-brown-border/60">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={handlePrevStep}
                    disabled={isSubmitting}
                    leftIcon={<ChevronLeft className="w-4 h-4" />}
                  >
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    onClick={handleConfirmBooking}
                    className="shadow-lg font-bold"
                  >
                    Pay ₹{totalAmount} & Confirm Appointment
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Booking Confirmation State */
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 sm:p-12 border border-brand-brown-border shadow-luxury space-y-8 animate-fadeIn text-center">
            <div className="w-20 h-20 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-12 h-12 stroke-[2.2]" />
            </div>

            <div className="space-y-2">
              <Badge variant="gold" size="md" className="mx-auto">
                Consultation Confirmed
              </Badge>
              <h2 className="font-serif text-3xl font-bold text-brand-brown">
                Namaste, {patientDetails.fullName}
              </h2>
              <p className="text-sm text-brand-brown-muted">
                Your Ayurvedic Doctor Consultation has been successfully scheduled.
              </p>
              <p className="text-xs font-mono font-bold text-brand-gold-dark bg-brand-brown/5 border border-brand-brown-border/60 py-1 px-3 rounded-full inline-block mt-2">
                Booking ID: {bookingId}
              </p>
            </div>

            {/* Appointment Details Box */}
            <div className="bg-white rounded-xl p-6 border border-brand-brown-border shadow-sm text-left space-y-3 text-xs text-brand-brown">
              <div className="flex justify-between border-b border-brand-brown-border/40 pb-2">
                <span className="text-brand-brown-muted">Consultation Mode:</span>
                <strong className="font-serif text-sm">
                  {consultationMode === "online" ? "Online Video Call" : "In-Clinic Sanctum Visit"}
                </strong>
              </div>
              <div className="flex justify-between border-b border-brand-brown-border/40 pb-2">
                <span className="text-brand-brown-muted">Attending Vaidya:</span>
                <strong className="font-serif text-sm">
                  {selectedDoctor ? selectedDoctor.name : "Senior Ayurvedic Physician"}
                </strong>
              </div>
              <div className="flex justify-between border-b border-brand-brown-border/40 pb-2">
                <span className="text-brand-brown-muted">Scheduled Slot:</span>
                <strong className="font-serif text-sm">
                  {selectedDateObject?.fullDate} at {selectedTimeSlot}
                </strong>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-brown-muted">Amount Paid:</span>
                <strong className="text-brand-green font-bold text-sm">
                  ₹{totalAmount} (GST Included)
                </strong>
              </div>
            </div>

            {/* Pre-Consultation Instructions */}
            <div className="p-4 rounded-xl bg-brand-brown/5 border border-brand-brown-border text-left text-xs text-brand-brown space-y-1.5">
              <h4 className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-brand-gold-dark" />
                Pre-Consultation Clinical Guidelines:
              </h4>
              <ul className="space-y-1 list-disc list-inside text-[11px] leading-relaxed">
                {consultationMode === "clinic" ? (
                  <>
                    <li>Fast for at least 2 hours prior to arrival for accurate Nadi Pariksha pulse reading.</li>
                    <li>Avoid heavy caffeine, tobacco, or cold refrigerated drinks before the pulse diagnosis.</li>
                    <li>Bring any recent blood panels, scans, or allopathic prescriptions with you.</li>
                  </>
                ) : (
                  <>
                    <li>Video consultation link will be dispatched via WhatsApp and Email 15 minutes before the slot.</li>
                    <li>Ensure you are in a quiet, well-lit room for video constitutional inspection.</li>
                    <li>Have your current medicine list and past diagnostic reports handy.</li>
                  </>
                )}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={handleDownloadCalendar}
                leftIcon={<Download className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-md"
              >
                Add to Google / Apple Calendar (.ics)
              </Button>

              <Button
                href="/products"
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                Explore Classical Remedies &rarr;
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
