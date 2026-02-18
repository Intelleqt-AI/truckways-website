'use client';

import { useState } from 'react';

export default function LinkedInProfilePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const profileData = {
    headline: "Helping African fleet operators add 15% to margins in 90 days | AI-powered quoting & payments | Founder @TruckWys",

    about: `Most fleet operators know their revenue. Very few know their profit per trip.

That's the blind spot killing margins across African transport.

I've spent months talking to fleet owners. The same story keeps coming up:

→ "I quote based on what feels right"
→ "My best customer? The one who gives me the most loads"
→ "I know my revenue, but I don't really know my profit"

These are smart operators. Hardworking people. Building real businesses.

But they're flying blind on the numbers that matter most.

We analyzed 50,000+ trips across 12 fleets. What we found:
• 23% of trips were priced below true cost
• 31% of "best customers" were actually margin-negative
• Average payment: 47 days (vs. 30-day terms)

That's why we built TruckWys.

Not another TMS. Not another tracking system.

A financial platform that shows you exactly where your money is going—and where it should be going.

AI-powered quoting that accounts for real costs. Payment behavior scoring. Instant visibility into trip-level profitability.

The result? 15% average margin uplift. 10 days faster payments.

→ Running a fleet with 10+ trucks?
→ Want to see which customers are actually making you money?

DM me "PROFIT" and I'll send you our free Fleet Profitability Calculator.

Or book a call: truckwys.com/contact`,

    featuredPost: `I just built a free Fleet Profitability Calculator.

It shows you exactly which trips are making money and which are bleeding cash.

Most fleet operators I talk to don't know:
→ Their true cost per km (including hidden costs)
→ Which customers are actually profitable
→ How much late payments are really costing them

This spreadsheet calculates all three in under 10 minutes.

We used this exact framework analyzing 50,000+ trips.

Comment "PROFIT" and I'll DM you the link.

(Must be connected so I can send it)

#FleetManagement #TransportSA #Logistics`,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">LinkedIn Profile Optimization</h1>
        <p className="text-gray-600 mb-8">Copy each section and paste it into your LinkedIn profile</p>

        {/* Headline */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Headline</h2>
              <p className="text-sm text-gray-500">The most important field - appears everywhere</p>
            </div>
            <button
              onClick={() => copyToClipboard(profileData.headline, 'headline')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                copiedField === 'headline'
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {copiedField === 'headline' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
            <p className="text-gray-800 font-medium">{profileData.headline}</p>
          </div>
          <p className="text-xs text-gray-400 mt-2">Characters: {profileData.headline.length}/220</p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">About Section</h2>
              <p className="text-sm text-gray-500">Your mini sales letter - structure: Problem → Insight → Proof → CTA</p>
            </div>
            <button
              onClick={() => copyToClipboard(profileData.about, 'about')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                copiedField === 'about'
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {copiedField === 'about' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="bg-gray-50 rounded-md p-4 border border-gray-200 max-h-96 overflow-y-auto">
            <pre className="text-gray-800 whitespace-pre-wrap font-sans text-sm leading-relaxed">{profileData.about}</pre>
          </div>
          <p className="text-xs text-gray-400 mt-2">Characters: {profileData.about.length}/2,600</p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Featured Post (Lead Magnet)</h2>
              <p className="text-sm text-gray-500">Post this, then add it to your Featured section</p>
            </div>
            <button
              onClick={() => copyToClipboard(profileData.featuredPost, 'featured')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                copiedField === 'featured'
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {copiedField === 'featured' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
            <pre className="text-gray-800 whitespace-pre-wrap font-sans text-sm leading-relaxed">{profileData.featuredPost}</pre>
          </div>
        </div>

        {/* Checklist */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Optimization Checklist</h2>
          <div className="space-y-3">
            {[
              { task: 'Change name to your real name (not "Truckwys .")', priority: 'Critical' },
              { task: 'Update headline with the formula above', priority: 'Critical' },
              { task: 'Replace About section with the new copy', priority: 'Critical' },
              { task: 'Add custom "Book a call" button → truckwys.com/contact', priority: 'High' },
              { task: 'Post the lead magnet post', priority: 'High' },
              { task: 'Add lead magnet post to Featured section', priority: 'High' },
              { task: 'Connect with 20+ fleet managers/owners today', priority: 'High' },
              { task: 'Add experience: "Founder at TruckWys"', priority: 'Medium' },
              { task: 'Add skills: Fleet Management, Logistics, AI, Fintech', priority: 'Medium' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <div className="flex-1">
                  <p className="text-gray-800">{item.task}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  item.priority === 'Critical' ? 'bg-red-100 text-red-700' :
                  item.priority === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {item.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Pro Tips from Paolo's Framework</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Post once per day, every day (including weekends)</li>
            <li>• DM everyone who comments within 24 hours</li>
            <li>• Lead with value in DMs, never pitch first</li>
            <li>• Your profile is your 24/7 salesperson - optimize it</li>
            <li>• Build to 500+ connections for algorithm reach</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
