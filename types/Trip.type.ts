type Trip = {
    id: string,
    layovers: number,
    airlines: string[],
    countries: string[],
    destinations: {
        fromCity: string,
        toCity: string
    }
}
export default Trip
