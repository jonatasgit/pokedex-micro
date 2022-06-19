export interface Pokemon{
    order: bigint
    name: string
    weight: bigint
    sprites: {
        front_default: string
    }
    types: [
        {
            slot: bigint, type: {
                name: string
            }
        }
    ]
    stats: [
        {
            base_stat: bigint, 
            stat: {
                name: string
            }
        }
    ]
}