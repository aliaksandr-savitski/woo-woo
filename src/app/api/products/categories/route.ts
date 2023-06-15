import { NextRequest, NextResponse } from 'next/server';

import { wooCommerceApiClient } from 'src/clients/wooCommerceApiClient';

export async function GET(req: NextRequest): Promise<Response> {
  try {
    const { status, statusText, data } = await wooCommerceApiClient.get('products/categories');

    return NextResponse.json({ status, statusText, data });
  } catch (error) {
    return NextResponse.json(error);
  }
}
