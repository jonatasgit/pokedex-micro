export interface Pokemon{
    order: number
    name: number
    weight: number
    base_experience: number
    sprites: {
        front_default: string
    }
    types: [
        {
            slot: number, type: {
                name: string
            }
        }
    ]
    stats: [
        {
            base_stat: number, 
            stat: {
                name: string
            }
        }
    ]
}