import { createClient } from "@supabase/supabase-js"
import type { APIRoute } from "astro"
import { SUPABASE_PUBLIC_URL, SERVICE_ROLE_KEY } from "astro:env/server"


const sql = createClient(SUPABASE_PUBLIC_URL, SERVICE_ROLE_KEY)

export const GET: APIRoute = async ({ request }) => {
    // CORS
    const headers = new Headers()

    headers.append('Access-Control-Allow-Origin', '*'); // o un dominio específico
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // DATA
    const url = request.url
    const { searchParams } = new URL(url)

    const key = searchParams.get('key')
    const name = searchParams.get('name')

    if (!key && !name) {
        const brainrots = await sql.from('brainrots').select('*')

        return new Response(JSON.stringify(brainrots.data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const existingParams = []

    if (key) existingParams.push(`key.eq.${key}`)
    if (name) existingParams.push(`slug.eq.${name}`)

    const brainrots = await sql.from('brainrots').select('*').or(existingParams.join(','))

    return new Response(JSON.stringify(brainrots.data), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}