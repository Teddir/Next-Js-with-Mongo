export async function POST (req, res) {
  const body = await req.json();
  
  try {
    const response = new Response(`hello ${body?.name}`, { headers: { 'Content-Type': 'application/json' } })
    return response
  } catch (error) {
    return new Response({ status: 500 }, { error: error.message })
  }
}