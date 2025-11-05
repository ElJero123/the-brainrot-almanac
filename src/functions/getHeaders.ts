export async function getHeaders({ request }: { request : Request }) {
    const spanishCountries = ['CO', 'AR', 'BO', 'CL', 'CR', 'CU', 'DO', 'EC', 
        'SV', 'ES', 'GT', 'HN', 'MX', 'NI', 'PA', 'PY', 'PE', 'PR', 'UY', 'VE', 
        'GQ'
    ]

    const headerIPUbication = request.headers.get('x-vercel-ip-country') // CO
    const isUbication = spanishCountries.filter(country => country === headerIPUbication)
    
    // CO

    return isUbication[0] === headerIPUbication
}