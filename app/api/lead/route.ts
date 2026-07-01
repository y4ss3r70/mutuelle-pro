export async function POST(request: Request) {
  try {
    const data = await request.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbziwCEbswrPXTBIfn9zFFd7hpsgCd5hNltaDUp3nGiyEvXSOv106Ea7Yl5zkbc748TW/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const text = await response.text();

    return new Response(text, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Erreur serveur",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}