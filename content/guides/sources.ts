/**
 * Sources cited in the guides. Every URL was opened and the figure checked on
 * 30 Sep 2026. Re-check each one when a guide is reviewed.
 */
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
  prescribedRate: {
    name: 'Government Gazette 54520, Notice 3887 of 2026: prescribed rate of interest',
    url: 'https://www.gov.za/sites/default/files/gcis_document/202604/54520gen3887.pdf',
  },
  cbrta: { name: 'Cross-Border Road Transport Agency: permits', url: 'https://www.cbrta.co.za/permits' },
  botswana: { name: 'Government of Botswana: single transit permit', url: 'https://www.gov.bw/transport-permits/single-transit-permit' },
  namibia: { name: 'Road Fund Administration (Namibia): cross-border charges', url: 'https://www.rfanam.com.na/cbc-cross-border-charges/' },
  trac: { name: 'TRAC N4: toll plazas and toll fees', url: 'https://tracn4.co.za/toll-plazas-toll-fees/' },
  eswatini: { name: 'Eswatini Tourism Authority: how to get there (road toll)', url: 'https://www.thekingdomofeswatini.com/how-to-get-there/' },
  lesotho: { name: 'Road Fund (Lesotho), 29 Apr 2022: increase in toll gate fees', url: 'https://www.roadfund.org.ls/news/road-fund-announces-an-increase-in-toll-gate-fees/' },
} as const;

export type Source = (typeof SRC)[keyof typeof SRC];
