function cleanEnvironmentValue(value: string | undefined) {
  return value
    ?.trim()
    .replace(/^["']/, "")
    .replace(/["']$/, "");
}

function getConfig() {
  const rawUrl = cleanEnvironmentValue(
    process.env.NEXT_PUBLIC_SUPABASE_URL
  );

  const secretKey = cleanEnvironmentValue(
    process.env.SUPABASE_SECRET_KEY ||
      process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  if (!rawUrl || !secretKey) {
    throw new Error(
      "Brakuje adresu lub tajnego klucza Supabase w konfiguracji Netlify."
    );
  }

  let projectUrl: URL;

  try {
    projectUrl = new URL(rawUrl);
  } catch {
    throw new Error(
      "Adres Supabase jest nieprawidłowy. Powinien mieć postać https://nazwa-projektu.supabase.co"
    );
  }

  if (
    projectUrl.protocol !== "https:" ||
    !projectUrl.hostname.endsWith(".supabase.co")
  ) {
    throw new Error(
      "Adres Supabase powinien mieć postać https://nazwa-projektu.supabase.co"
    );
  }

  return {
    baseUrl: `${projectUrl.origin}/rest/v1`,
    secretKey
  };
}

export async function supabaseAdminFetch(
  path: string,
  init: RequestInit = {}
) {
  const { baseUrl, secretKey } = getConfig();
  const headers = new Headers(init.headers);

  headers.set("apikey", secretKey);
  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");

  // Starszy service_role jest tokenem JWT.
  // Nowy klucz sb_secret_ trafia wyłącznie do nagłówka apikey.
  if (!secretKey.startsWith("sb_secret_")) {
    headers.set("Authorization", `Bearer ${secretKey}`);
  }

  try {
    return await fetch(`${baseUrl}${path}`, {
      ...init,
      headers,
      cache: "no-store"
    });
  } catch (error) {
    console.error("Supabase request failed", {
      baseUrl,
      path,
      cause: error instanceof Error ? error.message : String(error)
    });

    throw new Error(
      "Nie udało się połączyć z bazą danych. Sprawdź konfigurację Supabase w Netlify."
    );
  }
}

export function parseExactCount(response: Response) {
  const contentRange = response.headers.get("content-range");

  if (!contentRange) return 0;

  const total = contentRange.split("/")[1];

  return total && total !== "*" ? Number(total) || 0 : 0;
}
