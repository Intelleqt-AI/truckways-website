import { NextResponse } from 'next/server';

const TARGET_EMAIL = 'grant@truckwys.com';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, company, phone, fleetSize } = data;

    if (!firstName || !lastName || !email || !company || !phone || !fleetSize) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send via Formsubmit.co (free, no signup required)
    const response = await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `New TruckWys Trial Request from ${firstName} ${lastName} at ${company}`,
        'First Name': firstName,
        'Last Name': lastName,
        'Email': email,
        'Company': company,
        'Phone': phone,
        'Fleet Size': fleetSize,
        _replyto: email,
        _template: 'table',
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    console.log('=== GET-STARTED SUBMISSION ===', { firstName, lastName, email, company, phone, fleetSize });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Get-started form error:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
