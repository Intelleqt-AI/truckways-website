'use client';

import { useState } from 'react';
import {
  CheckCircle,
  Shield,
  Clock,
  DollarSign,
  FileText,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Zap,
  BookOpen,
  XCircle,
} from 'lucide-react';

// ── Design tokens matching baselinq.ai ──────────────────────────────
const PRIMARY = '#8081F6';
const PRIMARY_LIGHT = 'rgba(128, 129, 246, 0.08)';
const PRIMARY_BORDER = 'rgba(128, 129, 246, 0.2)';

type ComplianceStatus = 'compliant' | 'non_compliant' | 'warning';

function StatusDot({ status }: { status: ComplianceStatus }) {
  const color = {
    compliant: 'bg-emerald-500',
    non_compliant: 'bg-red-500',
    warning: 'bg-amber-500',
  }[status];
  return <span className={`w-1.5 h-1.5 rounded-full ${color} shrink-0`} />;
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-gray-100">
      <span className="text-[10px] font-medium text-gray-400 tracking-[0.15em] uppercase">{number}</span>
      <span className="text-[14px] font-semibold text-black tracking-[-0.2px]">{title}</span>
    </div>
  );
}

function CheckItem({
  label,
  clause,
  verdict,
  status,
}: {
  label: string;
  clause: string;
  verdict: string;
  status: ComplianceStatus;
}) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-50 last:border-b-0">
      <div className="mt-1">
        {status === 'compliant' ? (
          <CheckCircle className="w-4 h-4 text-emerald-500" />
        ) : status === 'non_compliant' ? (
          <XCircle className="w-4 h-4 text-red-500" />
        ) : (
          <AlertTriangle className="w-4 h-4 text-amber-500" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-black">{label}</span>
          {clause !== 'N/A' && (
            <span
              className="text-[10px] font-medium px-1.5 py-0.5 rounded"
              style={{ backgroundColor: PRIMARY_LIGHT, color: PRIMARY }}
            >
              {clause}
            </span>
          )}
        </div>
        <p className="text-[12px] text-gray-500 mt-0.5">{verdict}</p>
      </div>
    </div>
  );
}

function InvoiceRow({
  index,
  description,
  qty,
  unit,
  rate,
  amount,
  fairValue,
  verdict,
}: {
  index: number;
  description: string;
  qty: number;
  unit: string;
  rate: number;
  amount: number;
  fairValue: number;
  verdict: 'below' | 'at' | 'above';
}) {
  const verdictConfig = {
    below: { dot: 'bg-emerald-500' },
    at: { dot: 'bg-gray-400' },
    above: { dot: 'bg-red-500' },
  }[verdict];

  return (
    <div className="grid grid-cols-12 items-center gap-2 py-3.5 border-b border-gray-100 last:border-b-0 px-5">
      <div className="col-span-1 text-[12px] text-gray-400 text-center">{index}</div>
      <div className="col-span-3 text-[13px] font-medium text-black">{description}</div>
      <div className="col-span-1 text-[12px] text-gray-600 text-center">{qty}</div>
      <div className="col-span-1 text-[12px] text-gray-500 text-center">{unit}</div>
      <div className="col-span-2 text-[13px] text-black text-right">R {rate.toLocaleString()}</div>
      <div className="col-span-2 text-[13px] font-semibold text-black text-right">R {amount.toLocaleString()}</div>
      <div className="col-span-2 text-right flex items-center justify-end gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${verdictConfig.dot}`} />
        <span className="text-[13px] font-medium" style={{ color: PRIMARY }}>R {fairValue.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default function AIAnalysisPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      {/* ── Header ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: PRIMARY }}
              >
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-[16px] font-semibold text-black tracking-[-0.3px]">
                  Contract Analysis
                </h1>
                <p className="text-[11px] text-gray-400">VO-001 &middot; 22.7s</p>
              </div>
            </div>
            {/* Overall verdict — the only thing that matters at the top */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-right">
                <div className="text-[14px] font-semibold text-black">Compliant</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Low Risk</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-6 space-y-4">

        {/* ── Summary — one sentence, not a paragraph ─────────────── */}
        <div className="bg-white rounded-lg border border-gray-200 px-5 py-4">
          <p className="text-[13px] text-gray-600 leading-relaxed">
            VO-001 is compliant. Properly issued by the Principal Agent, all required details present, valuation follows BoQ rates per contract. No risks identified.
          </p>
        </div>

        {/* ── Procedural Compliance — checklist, not cards ─────────── */}
        <div className="bg-white rounded-lg border border-gray-200 px-5 py-5">
          <SectionLabel number="01" title="Procedural Compliance" />
          <div>
            <CheckItem
              label="Authorised Issuer"
              clause="Clause 8.1.1"
              verdict="Issued by Principal Agent as required."
              status="compliant"
            />
            <CheckItem
              label="Written Form"
              clause="Clause 8.2.1"
              verdict="Properly numbered and formatted."
              status="compliant"
            />
            <CheckItem
              label="Notification Timeline"
              clause="N/A"
              verdict="No specific timeline clause in contract."
              status="compliant"
            />
            <CheckItem
              label="Required Approvals"
              clause="N/A"
              verdict="No additional approvals required beyond Principal Agent."
              status="compliant"
            />
          </div>
        </div>

        {/* ── Valuation & Time — compact side by side ──────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Valuation */}
          <div className="bg-white rounded-lg border border-gray-200 px-5 py-5">
            <SectionLabel number="02" title="Valuation" />
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[14px] font-semibold text-black">BoQ Rates</div>
                <span
                  className="text-[10px] font-medium px-1.5 py-0.5 rounded mt-1 inline-block"
                  style={{ backgroundColor: PRIMARY_LIGHT, color: PRIMARY }}
                >
                  Clause 8.4.1
                </span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span className="text-[13px] font-semibold text-black">Rates Compliant</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">0% variance</div>
              </div>
            </div>
          </div>

          {/* Time Impact */}
          <div className="bg-white rounded-lg border border-gray-200 px-5 py-5">
            <SectionLabel number="03" title="Time Impact" />
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-[22px] font-semibold text-black tracking-tight">0</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Days</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">Critical Path OK</div>
              </div>
              <div className="text-center">
                <AlertTriangle className="w-4 h-4 text-red-500 mx-auto mb-1" />
                <div className="text-[10px] text-gray-400 uppercase tracking-wider">0 Days Notice</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Variation Order Invoice ─────────────────────────────── */}
        <div className="bg-white rounded-lg border border-gray-200 py-5">
          <div className="px-5">
            <SectionLabel number="04" title="Variation Order Invoice" />
          </div>

          {/* Invoice header */}
          <div className="px-5 mb-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Invoice For</div>
                <div className="text-[14px] font-semibold text-black">Variation Order VO-001</div>
                <div className="text-[12px] text-gray-500 mt-0.5">Valuation method: BoQ Rates &middot; Clause 8.4.1</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Date</div>
                <div className="text-[13px] text-black">13 Feb 2026</div>
              </div>
            </div>
          </div>

          {/* Invoice table */}
          <div className="border-t border-gray-200">
            <div className="grid grid-cols-12 gap-2 py-2.5 px-5 bg-gray-50 text-[10px] text-gray-400 uppercase tracking-wider font-medium border-b border-gray-200">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-3">Description</div>
              <div className="col-span-1 text-center">Qty</div>
              <div className="col-span-1 text-center">Unit</div>
              <div className="col-span-2 text-right">Rate</div>
              <div className="col-span-2 text-right">Amount</div>
              <div className="col-span-2 text-right">Fair Value</div>
            </div>
            <InvoiceRow
              index={1}
              description="Cement"
              qty={100}
              unit="bags"
              rate={70}
              amount={7000}
              fairValue={7000}
              verdict="below"
            />
            <InvoiceRow
              index={2}
              description="Reinforcement Steel"
              qty={5000}
              unit="kg"
              rate={10}
              amount={50000}
              fairValue={50000}
              verdict="below"
            />
          </div>

          {/* Invoice totals */}
          <div className="border-t border-gray-200 px-5 pt-4">
            <div className="flex justify-end">
              <div className="w-72 space-y-2">
                <div className="flex justify-between text-[12px]">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-black">R 57,000</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span className="text-gray-500">VAT (15%)</span>
                  <span className="font-medium text-black">R 8,550</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="text-[13px] font-semibold text-black">Total Due</span>
                  <span className="text-[16px] font-bold text-black">R 65,550</span>
                </div>
                <div className="flex justify-between text-[12px]">
                  <span className="text-gray-500">AI Fair Value</span>
                  <span className="font-semibold" style={{ color: PRIMARY }}>R 65,550</span>
                </div>
              </div>
            </div>
          </div>

          {/* Generate Invoice button */}
          <div className="px-5 pt-5 mt-4 border-t border-gray-100">
            <button
              className="w-full py-3 rounded-lg text-white text-[14px] font-medium tracking-[-0.2px] transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: PRIMARY }}
              onClick={() => alert('Invoice generation — coming soon')}
            >
              <FileText className="w-4 h-4" />
              Generate Invoice
            </button>
          </div>
        </div>

        {/* ── Contract Citations — clean references ────────────────── */}
        <div className="bg-white rounded-lg border border-gray-200 px-5 py-5">
          <SectionLabel number="05" title="Contract References" />
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-[3px] h-10 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: PRIMARY }} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ backgroundColor: PRIMARY_LIGHT, color: PRIMARY }}>8.1.1</span>
                  <span className="text-[13px] font-medium text-black">Variation Order Process</span>
                </div>
                <p className="text-[12px] text-gray-500 mt-1">Authorises issuance of the VO by Principal Agent.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-[3px] h-10 rounded-full shrink-0 mt-0.5" style={{ backgroundColor: PRIMARY }} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded" style={{ backgroundColor: PRIMARY_LIGHT, color: PRIMARY }}>8.4.1</span>
                  <span className="text-[13px] font-medium text-black">Valuation of Variations</span>
                </div>
                <p className="text-[12px] text-gray-500 mt-1">Variations valued using BoQ rates where applicable.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Actions — what to do, not what to think about ─────────── */}
        <div className="bg-white rounded-lg border border-gray-200 px-5 py-5">
          <SectionLabel number="06" title="Actions Required" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
            <div className="bg-[#FAFAFA] rounded-lg p-4 border border-gray-100">
              <div className="text-[10px] font-medium uppercase tracking-wider mb-2" style={{ color: PRIMARY }}>Employer</div>
              <p className="text-[13px] text-gray-700">Verify VO rates against Bill of Quantities.</p>
            </div>
            <div className="bg-[#FAFAFA] rounded-lg p-4 border border-gray-100">
              <div className="text-[10px] font-medium uppercase tracking-wider mb-2" style={{ color: PRIMARY }}>Contractor</div>
              <p className="text-[13px] text-gray-700">Ensure rate documentation is available for audit.</p>
            </div>
          </div>

          {/* Deadline action */}
          <div
            className="rounded-lg p-4 flex items-center justify-between border"
            style={{ borderColor: PRIMARY_BORDER, backgroundColor: PRIMARY_LIGHT }}
          >
            <div>
              <p className="text-[13px] font-medium text-black">Verify rates against BoQ</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[11px]" style={{ color: PRIMARY }}>5 business days</span>
                <span className="text-[11px] text-gray-500">Contractor's QS</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* ── Footer ──────────────────────────────────────────────── */}
        <div className="text-center pt-2 pb-8">
          <p className="text-[10px] text-gray-400 tracking-wide">
            AI-assisted &middot; All decisions require professional sign-off &middot; Baselinq
          </p>
        </div>
      </div>
    </div>
  );
}
