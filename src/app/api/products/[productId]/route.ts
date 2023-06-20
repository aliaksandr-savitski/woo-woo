import { NextRequest, NextResponse } from 'next/server';

import { wooCommerceApiClient } from 'src/clients/wooCommerceApiClient';

interface Context {
  params: {
    productId: string;
  };
}

export async function GET(req: NextRequest, context: Context): Promise<Response> {
  const { productId } = context.params;

  if (!productId) {
    return NextResponse.json({
      status: 400,
      statusCode: 'BAD_REQUEST',
      message: 'No productId was specified'
    });
  }

  try {
    const { status, statusText, data } = await wooCommerceApiClient.get(`products/${productId}`);

    return NextResponse.json({ status, statusText, data });
  } catch (error) {
    return NextResponse.json(error);
  }
}
