export type Brainrot = {
    id: string
    digest: string
    collection: string
    slug: string
    data: {
       name: string
        lyrics: {
            spanish: string;
            english: string;
            italian: string;
        } | undefined
        personality: {
            spanish: string;
            english: string;
        } | undefined
        history: {
            spanish: string;
            english: string;
        } | undefined
        reception: {
            spanish: string;
            english: string;
        } | undefined
        inBattle: {
            spanish: string;
            english: string;
        } | undefined
        image: string
        video: string
        key: string 
    }
    
}