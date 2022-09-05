import { Space } from "../Model/Model"

export class DataService {
    public async getSpaces(): Promise<Space[]> {
        const result: Space[] = []
        result.push({
            location: '5, Rue Riboutté, 9th arr., Paris',
            photoUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/255539100.jpg?k=716bc4caaa0ce4f63028a20b091c8b5bd8e16be577cd8ec5b571cb24db6256e7&o=&hp=1',
            name: "Hôtel Veryste Paris",
            spaceId: '123'
        })
        result.push({
            location: 'Mal. de la Reserva 615, Miraflores 15074, Peru',
            name: "JW Marriott Hotel Lima",
            spaceId: '124',
            photoUrl: 'https://images.trvl-media.com/hotels/1000000/540000/533700/533641/9bcbadc1.jpg?impolicy=resizecrop&rw=1200&ra=fit'
        })
        result.push({
            location: '808 Howell St, Seattle, WA, 98101',
            name: "Hyatt Regency Seattle",
            spaceId: '125',
            photoUrl: 'https://images.trvl-media.com/hotels/30000000/29050000/29049600/29049536/e2aa141f.jpg?impolicy=resizecrop&rw=1200&ra=fit'
        })
        result.push({
            location: '160-0023 Shinjuku-Ku 6-6-2 Nishi-Shinjuku Japan',
            name: "Hilton Tokyo",
            spaceId: '126',
            photoUrl: 'https://www.hilton.com/im/en/TYOHITW/14915388/hilton-double-night-3000.jpg?impolicy=crop&cw=4349&ch=2293&gravity=NorthWest&xposition=0&yposition=353&rw=1100&rh=580'
        })
        return result;
    }

    public async reserveSpace(spaceId: string): Promise<string | undefined> {
        if (spaceId === '123') {
            return ('5555')
        } else {
            return undefined
        }
    }
}