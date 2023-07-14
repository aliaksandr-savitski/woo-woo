import { NextRequest, NextResponse } from 'next/server';

import { wooCommerceApiClient } from 'src/clients/wooCommerceApiClient';

interface Context {
  params: {
    categoryId: string;
  };
}

export async function GET(req: NextRequest, context: Context): Promise<Response> {
  const { categoryId } = context.params;

  if (!categoryId) {
    return NextResponse.json({
      status: 400,
      statusCode: 'BAD_REQUEST',
      message: 'No categoryId was specified'
    });
  }

  try {
    const { status, statusText, data } = await wooCommerceApiClient.get(
      `products/categories/${categoryId}`
    );

    return NextResponse.json({ status, statusText, data });
  } catch (error) {
    return NextResponse.json(error);
  }
}
