import { NextRequest, NextResponse } from 'next/server';

import { wooCommerceApiClient } from 'src/clients/wooCommerceApiClient';

export async function GET(req: NextRequest): Promise<Response> {
  try {
    const { status, statusText, data } = await wooCommerceApiClient.get(
      `products${req.nextUrl.search}`,
      {
        per_page: 30
      }
    );

    return NextResponse.json({ status, statusText, data });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw error;
    } else {
      console.log('Something went wrong', error);
    }

    throw error;
  }
}
