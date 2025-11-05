export async function getHeaders({ request }: { request : Request }) {
    const spanishCountries = ['co', 'ar', 'bo', 'cl', 'cr', 'cu', 'do', 'ec', 
    'sv', 'es', 'gt', 'hn', 'mx', 'ni', 'pa', 'py', 'pe', 'pr', 'uy', 've', 'gq']

    const headerIPUbication = request.headers.get('x-vercel-ip-country') // CO
    const isUbication = spanishCountries.filter(country => country.toUpperCase() === headerIPUbication)
    
    // CO

    return isUbication[0].toUpperCase() === headerIPUbication
}