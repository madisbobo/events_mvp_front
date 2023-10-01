export default interface Event {
    id: number;
    name: string;
    startDateTime: string;
    locationName: string;
    posterImage: string | null;
    isActive: boolean;
}