"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { CheckCircle, ArrowLeft } from "lucide-react"

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    fleetSize: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-semibold text-black">Thank you!</h1>
          <p className="text-lg text-gray-600">
            We've received your request. Our team will reach out within 24 hours to get you started with TruckWys.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="text-white hover:opacity-90 h-12 px-8"
              style={{ backgroundColor: "rgb(60, 131, 246)" }}
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left side - Form */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-6">
          <div className="max-w-md w-full mx-auto lg:mx-auto">
            {/* Back button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to home</span>
            </Link>

            {/* Header */}
            <div className="mb-4 text-left">
              <h1 className="text-2xl sm:text-3xl font-semibold text-black mb-2 text-balance">Get started</h1>
              <p className="text-sm text-gray-600 leading-relaxed">Start your free trial today.</p>
            </div>

            {/* Trust signals */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700">Free 30-day trial, no credit card required</p>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700">Personalized onboarding and support</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700">See your fleet's profit potential</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label htmlFor="firstName" className="text-xs font-medium text-black">
                    First name *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="h-9 border-gray-300 focus:border-black focus:ring-black text-sm"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lastName" className="text-xs font-medium text-black">
                    Last name *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="h-9 border-gray-300 focus:border-black focus:ring-black text-sm"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs font-medium text-black">
                  Work email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="h-9 border-gray-300 focus:border-black focus:ring-black text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="company" className="text-xs font-medium text-black">
                  Company name *
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="h-9 border-gray-300 focus:border-black focus:ring-black text-sm"
                  placeholder="Your company"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="phone" className="text-xs font-medium text-black">
                  Phone number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-9 border-gray-300 focus:border-black focus:ring-black text-sm"
                  placeholder="+27 XX XXX XXXX"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="fleetSize" className="text-xs font-medium text-black">
                  Fleet size *
                </Label>
                <select
                  id="fleetSize"
                  name="fleetSize"
                  required
                  value={formData.fleetSize}
                  onChange={handleChange}
                  className="w-full h-9 px-3 border border-gray-300 rounded-md focus:border-black focus:ring-1 focus:ring-black bg-white text-black text-sm"
                >
                  <option value="">Select fleet size</option>
                  <option value="1-10">1-10 vehicles</option>
                  <option value="11-25">11-25 vehicles</option>
                  <option value="26-50">26-50 vehicles</option>
                  <option value="51-100">51-100 vehicles</option>
                  <option value="100+">100+ vehicles</option>
                </select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-10 text-white hover:opacity-90 text-sm font-medium mt-4"
                style={{ backgroundColor: "rgb(60, 131, 246)" }}
              >
                Get started
              </Button>

              <p className="text-xs text-gray-500 text-center leading-relaxed pt-2">
                By submitting this form, you agree to our{" "}
                <Link href="#" className="underline hover:text-black">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline hover:text-black">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>

        {/* Right side - Image/Content */}
        <div
          className="hidden lg:flex flex-col justify-center p-12 xl:p-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgb(60, 131, 246) 0%, rgb(37, 99, 235) 100%)",
          }}
        >
          {/* Decorative squares */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-lg"></div>
            <div className="absolute top-32 left-40 w-16 h-16 bg-white rounded-lg"></div>
            <div className="absolute top-20 right-20 w-28 h-28 bg-white rounded-lg"></div>
            <div className="absolute bottom-20 left-16 w-20 h-20 bg-white rounded-lg"></div>
            <div className="absolute bottom-24 right-24 w-24 h-24 bg-white rounded-lg"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white rounded-lg transform -translate-y-1/2"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-lg text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl xl:text-4xl font-semibold leading-tight text-balance">
                Join leading fleets across Africa
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Discover how TruckWys helps fleet operators increase margins, reduce costs, and accelerate cash flow
                with AI-powered intelligence.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">15%</div>
                  <div className="text-white/80 text-sm">Average margin improvement</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">10 days</div>
                  <div className="text-white/80 text-sm">Faster payment cycles</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">5M+</div>
                  <div className="text-white/80 text-sm">Trips analyzed</div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/90 italic mb-4 leading-relaxed">
                "TruckWys transformed how we price and manage our fleet. We've seen a 12% margin improvement in just 3
                months."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-sm">Sipho Mthembu</div>
                  <div className="text-white/70 text-xs">Fleet Manager, Savanna Express</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
