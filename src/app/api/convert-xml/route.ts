import { NextResponse } from "next/server";
import { parseString as parseStringCb } from "xml2js";
import util from "util";

// Convert the callback-based parseString function to a Promise-based one
const parseString = util.promisify(parseStringCb);

export async function POST(req: Request, res: Response) {
  const { xml } = await req.json();

  if (!xml) {
    return new NextResponse("XML is required", { status: 400 });
  }

  let parsedResult;
  try {
    parsedResult = await parseString(xml);
    parsedResult = util.inspect(parsedResult, false, null, true);
  } catch (err) {
    return new NextResponse(
      `Failed to parse XML. Detailed error - ${err}`,
      { status: 500 }
    );
  }

  if (!parsedResult) {
    return new NextResponse("Failed to parse XML", { status: 500 });
  }

  return new NextResponse(parsedResult, { status: 200 });
}
