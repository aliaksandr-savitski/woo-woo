import { NextRequest, NextResponse } from 'next/server';

import wpRestApiClient from 'src/clients/wpRestApiClient';

interface Context {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, context: Context): Promise<Response> {
  const { id } = context.params;

  if (!id) {
    throw NextResponse.json({
      status: 400,
      statusCode: 'BAD_REQUEST',
      message: 'No productId was specified'
    });
  }

  const { status, statusText, data } = await wpRestApiClient.get(`/menu-items/?menus=${id}`);

  return NextResponse.json({ status, statusText, data });
}
