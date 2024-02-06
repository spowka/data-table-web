import { ColumnPropertiesInterface } from "angular-mko-lib";
import { CrimeDateComponent } from "../components/crime-date/crime-date.component";

export const CriminalisticsTableDefinitions: ColumnPropertiesInterface[] = [
    {
        display: true,
        order: 1,
        header: "Crime ID",
        propName: "crime_id"
    },
    {
        display: true,
        order: 2,
        header: "Crime Date",
        component: CrimeDateComponent
    },
    {
        display: true,
        order: 3,
        header: "Crime Location",
        propName: "crime_location"
    },
    {
        display: true,
        order: 4,
        header: "Crime Description",
        propName: "crime_description"
    },
    {
        display: true,
        order: 5,
        header: "Evidence ID",
        propName: "evidence_id"
    },
    {
        display: true,
        order: 6,
        header: "Evidence Type",
        propName: "evidence_type"
    },
    {
        display: true,
        order: 7,
        header: "Evidence Description",
        propName: "evidence_description"
    },
    {
        display: true,
        order: 8,
        header: "Suspect ID",
        propName: "suspect_id"
    },
    {
        display: true,
        order: 9,
        header: "Suspect Name",
        propName: "suspect_name"
    },
    {
        display: true,
        order: 10,
        header: "Suspect Gender",
        propName: "suspect_gender"
    },
]