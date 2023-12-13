interface ILocation {
    id: number;
}

interface IRoom {
    room_number: number;
    bed_type: string;
    is_available: boolean;
}

export interface IHotel {
    id: number
    name: string
    descriptions: string
    locations: ILocation[]
    rooms: IRoom[]
}