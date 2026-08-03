function getConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Brakuje konfiguracji Supabase w zmiennych środowiskowych.");
  }

  return {
    baseUrl: `${url.replace(/\/$/, "")}/rest/v1`,
    serviceRoleKey
  };
}

export async function supabaseAdminFetch(path: string, init: RequestInit = {}) {
  const { baseUrl, serviceRoleKey } = getConfig();
  const headers = new Headers(init.headers);
  headers.set("apikey", serviceRoleKey);
  headers.set("Authorization", `Bearer ${serviceRoleKey}`);
  headers.set("Content-Type", "application/json");

  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers,
    cache: "no-store"
  });
}

export function parseExactCount(response: Response) {
  const contentRange = response.headers.get("content-range");
  if (!contentRange) return 0;
  const total = contentRange.split("/")[1];
  return total && total !== "*" ? Number(total) || 0 : 0;
}
