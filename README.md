# torpoznanhalas.pl

Minimalistyczna strona Stowarzyszenia Mieszkańców Ławica-Bajkowe poświęcona hałasowi emitowanemu przez Tor Poznań, dokumentom źródłowym i liście społecznego poparcia.

## Kolejność uruchomienia bez terminala

### 1. Wgraj kod na GitHub

1. Pobierz i rozpakuj paczkę projektu.
2. Otwórz puste repozytorium `strona` w organizacji `torpoznanhalas`.
3. Kliknij **Add file > Upload files**.
4. Przeciągnij do okna wszystkie pliki i foldery znajdujące się **wewnątrz** folderu projektu. Nie wgrywaj samego pliku ZIP.
5. W polu opisu wpisz `Pierwsza wersja strony` i kliknij **Commit changes**.

### 2. Utwórz tabelę w Supabase

1. Otwórz projekt Supabase.
2. Wejdź w **SQL Editor > New query**.
3. Otwórz lokalny plik `supabase/schema.sql`, skopiuj całą treść i wklej do edytora.
4. Kliknij **Run**.
5. W **Table Editor** powinna pojawić się tabela `supporters`.

### 3. Pobierz dane konfiguracyjne Supabase

W Supabase otwórz **Project Settings > API Keys** i zanotuj:

- Project URL,
- klucz `service_role` / secret key przeznaczony wyłącznie dla serwera.

Klucza serwerowego nigdy nie umieszczaj w kodzie, wiadomości ani publicznym repozytorium.

### 4. Importuj repozytorium do Vercela

1. W Vercel kliknij **Add New > Project**.
2. Wybierz repozytorium `torpoznanhalas/strona`.
3. Framework powinien zostać rozpoznany jako **Next.js**.
4. Przed pierwszym wdrożeniem dodaj zmienne środowiskowe:

```text
NEXT_PUBLIC_SUPABASE_URL = adres projektu Supabase
SUPABASE_SERVICE_ROLE_KEY = serwerowy klucz service_role / secret
IP_HASH_SALT = długi losowy sekret, minimum 32 znaki
```

Na razie pozostaw puste:

```text
NEXT_PUBLIC_TURNSTILE_SITE_KEY
TURNSTILE_SECRET_KEY
```

5. Kliknij **Deploy**.

Po udanym wdrożeniu Vercel utworzy adres testowy zakończony `.vercel.app`.

### 5. Sprawdź stronę testową

Sprawdź:

- stronę główną,
- `/dokumenty`,
- `/media`,
- `/polityka-prywatnosci`,
- wysłanie formularza poparcia.

Po wysłaniu formularza wpis powinien pojawić się w Supabase w tabeli `supporters` ze statusem `pending`.

### 6. Zatwierdź pierwszy wpis testowy

1. W Supabase otwórz **Table Editor > supporters**.
2. Znajdź zgłoszenie testowe.
3. Zmień `status` z `pending` na `approved`.
4. Odśwież stronę. Licznik powinien wzrosnąć.
5. Usuń wpis testowy albo zmień jego status na `rejected`.

### 7. Podłącz domenę

Dopiero po udanym teście:

1. W Vercel otwórz projekt > **Settings > Domains**.
2. Dodaj `torpoznanhalas.pl` oraz `www.torpoznanhalas.pl`.
3. Vercel wyświetli rekordy DNS.
4. W panelu cyber_Folks edytuj strefę DNS i przepisz rekordy dokładnie tak, jak pokaże Vercel.
5. Ustaw `torpoznanhalas.pl` jako domenę główną, a `www` jako przekierowanie.

## Dodawanie filmów YouTube

Edytuj `content/videos.ts`. Dla każdego filmu wpisz identyfikator z adresu YouTube, nie cały adres.

Przykład:

```ts
{
  title: "Hałas słyszany w domu mieszkańców",
  description: "Nagranie wykonane przy zamkniętych oknach.",
  youtubeId: "ABC123XYZ",
  date: "2026-08-01",
  location: "Poznań, Ławica"
}
```

Po zapisaniu zmiany GitHub automatycznie uruchomi nowe wdrożenie Vercela.

## Moderowanie poparcia

Nowe wpisy otrzymują status `pending`. Licznik obejmuje tylko `approved`.

- `approved` — doliczony do licznika,
- `pending` — czeka na weryfikację,
- `rejected` — odrzucony,
- `withdrawn` — poparcie wycofane.

Szczegółowa instrukcja znajduje się w `ADMIN.md`.

## Ważne przed publiczną premierą

1. Zatwierdź politykę prywatności z osobą znającą RODO.
2. Dodaj system potwierdzania adresu e-mail lub ustal procedurę ręcznej weryfikacji.
3. Skonfiguruj Cloudflare Turnstile przed szeroką kampanią.
4. Sprawdź umowy powierzenia i lokalizację przetwarzania danych u dostawców.
5. Uzupełnij NIP i REGON po ich nadaniu.
6. Każde oskarżenie personalne lub dotyczące bezprawności oprzyj na opublikowanym dokumencie źródłowym.
