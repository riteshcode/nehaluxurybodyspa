export const COOKIE_NAME = "admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 8;

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET not set");
  return secret;
}

async function getKey() {
  const secret = getSecret();
  const encoder = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function bufferToHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export type SessionData = {
  username: string;
  role: "admin" | "editor";
  expires: number;
};

export async function createSessionToken(
  username: string,
  role: "admin" | "editor"
): Promise<string> {
  const expires = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = JSON.stringify({ username, role, expires });
  const encodedPayload = Buffer.from(payload).toString("base64url");

  const key = await getKey();
  const encoder = new TextEncoder();
  const sigBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(encodedPayload)
  );
  const sig = bufferToHex(sigBuffer);

  return `${encodedPayload}.${sig}`;
}

export async function verifySessionToken(
  token?: string | null
): Promise<SessionData | null> {
  if (!token) return null;
  const [encodedPayload, sig] = token.split(".");
  if (!encodedPayload || !sig) return null;

  const key = await getKey();
  const encoder = new TextEncoder();
  const expectedSigBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(encodedPayload)
  );
  const expected = bufferToHex(expectedSigBuffer);

  if (sig !== expected) return null;

  try {
    const data: SessionData = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString()
    );
    if (Date.now() > data.expires) return null;
    return data;
  } catch {
    return null;
  }
}