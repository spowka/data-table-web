export interface CrimeRecord {
    crime_id: number;
    crime_date: string;
    crime_location: string;
    crime_description: string;
    evidence_id: number;
    evidence_type: string;
    evidence_description: string;
    suspect_id: number;
    suspect_name: string;
    suspect_gender: string;
}

export interface CrimeResponseInterface {
    data: any[];
    first: number;
    items: number;
    last: number;
    next: number;
    pages: number;
    prev: number;
}