import { NextRequest, NextResponse } from 'next/server';

import wpRestApiClient from 'src/clients/wpRestApiClient';

interface Context {
  params: {
    slug: string;
  };
}

export async function GET(req: NextRequest, context: Context): Promise<Response> {
  const { slug } = context.params;

  if (!slug) {
    throw NextResponse.json({
      status: 400,
      statusCode: 'BAD_REQUEST',
      message: 'No page slug was specified'
    });
  }

  const { status, statusText, data } = await wpRestApiClient.get(`/pages/?slug=${slug}`);

  const [page] = data;

  return NextResponse.json({ status, statusText, data: page });
}
