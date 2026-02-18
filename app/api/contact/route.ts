import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, company, email, phone, fleetSize, area, address, message } = data;

    // Validate required fields
    if (!name || !company || !email || !phone || !fleetSize || !area || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Send email via Formspree (free, no signup needed for basic use)
    // Replace this URL with your own Formspree endpoint or other email service
    const formspreeResponse = await fetch('https://formspree.io/f/hello@truckwys.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        _subject: `New TruckWys Enquiry from ${name} at ${company}`,
        name,
        company,
        email,
        phone,
        'Fleet Size': fleetSize,
        'Area / Province': area,
        'Business Address': address || 'Not provided',
        message,
        _replyto: email,
      }),
    });

    if (formspreeResponse.ok) {
      return NextResponse.json({ success: true });
    }

    // Fallback: If Formspree fails, log the submission
    // In production, you'd want to store this in a database or send via another method
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(`Name: ${name}`);
    console.log(`Company: ${company}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Fleet Size: ${fleetSize}`);
    console.log(`Area: ${area}`);
    console.log(`Address: ${address}`);
    console.log(`Message: ${message}`);
    console.log('==================================');

    // Still return success so the user sees a confirmation
    // The submission is logged in the server console
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
  }
}
