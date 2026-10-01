/**
 * Sources shared by more than one blog post. Every URL was opened and the
 * figure checked on the date in each post's `reviewed` field. Re-check each
 * one when a post is reviewed. A source only one post uses can live in that
 * post's file instead (see README.md).
 */
export type Source = { readonly name: string; readonly url: string };

export const SRC = {
  dmprSep: {
    name: 'DMPR media statement: fuel price adjustments effective 2 September 2026',
    url: 'https://www.dmpr.gov.za/Media-Centre/ArtMID/1168/ArticleID/1030/MEDIA-STATEMENT-FUEL-PRICE-ADJUSTMENTS-EFFECTIVE-FROM-THE-2ND-OF-SEPTEMBER-2026',
  },
  dmprPrices: { name: 'DMPR: fuel prices (monthly price documents)', url: 'https://www.dmpr.gov.za/Branches/Petroleum-Resources/Fuel-Prices' },
  citizenSep: {
    name: 'The Citizen, 31 Aug 2026: petrol and diesel prices for September',
    url: 'https://www.citizen.co.za/motoring/petrol-and-diesel-september-heres-what-youll-pay/',
  },
  sanralPoster: {
    name: 'SANRAL toll tariffs 2026 poster (Government Gazette 54087 and 54088)',
    url: 'https://www.nra.co.za/uploads/17/SANRAL%20Toll%20Tariff%202026%20A3%20Poster%20v2.pdf',
  },
  sanralBooklet: {
    name: 'SANRAL toll adjustment booklet (vehicle classes)',
    url: 'https://www.nra.co.za/uploads/17/SANRAL%20Toll%20Adjustment%20Booklet%20-%20Online.pdf',
  },
  etolls: { name: 'Department of Transport, 10 Apr 2024: end of Gauteng e-tolls', url: 'https://www.transport.gov.za/?p=1969' },
  sarsVat: { name: 'SARS: value-added tax', url: 'https://www.sars.gov.za/types-of-tax/value-added-tax/' },
  vat404: {
    name: 'SARS VAT 404: Guide for Vendors',
    url: 'https://www.sars.gov.za/wp-content/uploads/Ops/Guides/Legal-Pub-Guide-VAT404-VAT-404-Guide-for-Vendors.pdf',
  },
  sarsThreshold: { name: 'SARS FAQ: the new VAT registration threshold', url: 'https://www.sars.gov.za/faq/what-is-the-new-threshold-for-vat-registration/' },
  sarsBudget: {
    name: 'SARS: Budget 2026 frequently asked questions (fuel levies)',
    url: 'https://www.sars.gov.za/about/sars-tax-and-customs-system/budget/budget-2026-frequently-asked-questions/',
  },
  rafLevy: { name: 'Freight News: Road Accident Fund levy amendments', url: 'https://www.freightnews.co.za/article/road-accident-fund-raf-levy-tariff-amendments' },
  levyRelief: {
    name: 'National Treasury, 28 Apr 2026: extension of short-term fuel price relief',
    url: 'https://www.gov.za/news/media-statements/national-treasury-extension-short-term-relief-measures-address-fuel-price',
  },
  dieselRefund: { name: 'SARS: diesel refund system', url: 'https://www.sars.gov.za/customs-and-excise/excise/diesel-refund-system/' },
  rfa: { name: 'Road Freight Association: Vehicle Cost Schedule', url: 'https://rfa.co.za/SA/vehicle-cost-schedule/' },
  nbcrfli: { name: 'NBCRFLI: Main Collective Agreement', url: 'https://www.nbcrfli.org.za/collective-agreements/main' },
  prescribedAct: {
    name: 'Judicial Matters Amendment Act 24 of 2015, section 3: new section 1 of the Prescribed Rate of Interest Act, 1975',
    url: 'https://www.justice.gov.za/legislation/acts/2015-024JudicinalMattersAmend.pdf',
  },
  repoMay: { name: 'SAnews, 28 May 2026: SARB raises repo rate to 7%, effective 29 May', url: 'https://www.sanews.gov.za/south-africa/sarb-raises-repo-rate-7' },
  repoSep: {
    name: 'SARB: Statement of the Monetary Policy Committee, September 2026 (repo rate 7,25% from 25 September)',
    url: 'https://www.resbank.co.za/en/home/publications/publication-detail-pages/statements/monetary-policy-statements/2026/september',
  },
  cbrta: { name: 'Cross-Border Road Transport Agency: permits', url: 'https://www.cbrta.co.za/permits' },
  botswana: { name: 'Government of Botswana: single transit permit', url: 'https://www.gov.bw/transport-permits/single-transit-permit' },
  namibia: { name: 'Road Fund Administration (Namibia): fees and tariffs', url: 'https://rfanam.com.na/fees-tariffs/' },
  trac: { name: 'TRAC N4: toll plazas and toll fees', url: 'https://tracn4.co.za/toll-plazas-toll-fees/' },
  eswatini: { name: 'Eswatini Tourism Authority: how to get there (road toll)', url: 'https://www.thekingdomofeswatini.com/how-to-get-there/' },
  lesotho: { name: 'Road Fund (Lesotho), 29 Apr 2022: increase in toll gate fees', url: 'https://www.roadfund.org.ls/news/road-fund-announces-an-increase-in-toll-gate-fees/' },
} as const satisfies Record<string, Source>;
