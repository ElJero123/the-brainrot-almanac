import { useEffect, useState } from "react"
import type { Brainrot } from "../../../types"

export function ShowBrainrots({ brainrots }: { brainrots: Brainrot[] }) {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('none')
    const [brainrotsFiltered, setBrainrotsFiltered] = useState(brainrots)


    useEffect(() => {
        let filtered = [...brainrots]

        if (search) {
            filtered = filtered.filter(brainrot => brainrot.data.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (filter === 'A-Z') {
            filtered.sort((a, b) => a.data.name.localeCompare(b.data.name))
        } else if (filter === 'Z-A') {
            filtered.sort((a, b) => b.data.name.localeCompare(a.data.name))
        }

        setBrainrotsFiltered(filtered)
    }, [filter, search])

    return (
        <main className="flex flex-col items-center justify-center gap-20 mt-5">
            <section className="flex flex-wrap items-center justify-center gap-4 mx-2 md:mx-0 sm:gap-6 md:gap-8 p-4 md:p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.1)]">
            {/* Filtro */}
            <div className="relative">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="appearance-none bg-[var(--primary)]/80 text-[var(--secondary)] h-[48px] pl-4 pr-10 rounded-xl border border-white/20 shadow-inner backdrop-blur-sm focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent transition-all duration-200"
                >
                    <option value="none">No filter</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
                {/* Icono del select */}
                
            </div>

            {/* Input de búsqueda */}
            <div className="relative w-full sm:w-[250px] md:w-[350px]">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search brainrots..."
                    className="w-full h-[48px] rounded-xl bg-[var(--primary)]/80 text-[var(--secondary)] pl-10 pr-3 placeholder-[var(--secondary)]/70 border border-white/20 shadow-inner backdrop-blur-sm focus:ring-2 focus:ring-[var(--secondary)] focus:outline-none transition-all duration-200"
                />
                {/*absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--secondary)]/70 */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--secondary)]/70">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

            {/* Botón moderno */}
            <button onClick={() => { window.location.href = 'https://mpago.li/2zZrF69' }} className="bg-gradient-to-r from-fuchsia-500 to-[var(--secondary)] hover:from-fuchsia-400 hover:to-[var(--secondary)]/90 active:scale-95 transition-all duration-200 px-5 py-2.5 rounded-xl text-white font-semibold shadow-lg hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                Donate 1 Dlr ♥
            </button>
            </section>
            <section className="flex flex-col sm:flex-row items-start justify-center gap-5 flex-wrap">
                {brainrotsFiltered.map(brainrotData => {
                    const brainrot = brainrotData.data
                    return (
                        <div key={brainrotData.digest} className="flex flex-col items-center justify-center gap-2 border-1 border-[var(--fourty)] p-5 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                                hover:shadow-[0_6px_18px_rgba(0,0,0,0.12)] transition-all duration-300">
                            <img src={brainrot.image} alt={brainrot.name} className="sm:w-35 w-48 md:w-48 rounded-2xl sm:h-35 md:h-48 h-48" />
                            <h2 className="font-semibold max-w-full text-normal sm:text-sm md:text-normal">{brainrot.name}</h2>
                            <a href={`/brainrots/${brainrotData.slug}`} className="bg-[var(--fourty)] mt-3 px-4 py-2 
                            rounded-2xl font-semibold text-[var(--secondary)] text-sm">
                                View more
                            </a>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}