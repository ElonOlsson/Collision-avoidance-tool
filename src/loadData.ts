
export type Ship = {
    shipId: number;
    name: string;
    type: string;
    lengthOverAll: number;
    lengthPp: number;
    beam: number;
    draft: number;
    maxSpeed: number;
    bulb: number;
    parameter: number;
};

export type Voyage = {
    shipId: number;
    voyageId: number;
    departurePort: string;
    departureDate: string;
    departurePosition: [ number, number ];
    destinationPort: string;
    destinationDate: string;
    destinationPosition: [ number, number ];
    cargoWeight: number;
    hfoFuelConsumption: number;
    distance: number;
    displacement: number;
  }

export async function loadData() {
    const ships = await (await fetch("/data/ships.json")).json() as Ship[];
    const voyages = await (await fetch("/data/voyages.json")).json() as Voyage[];

    return {
        ships, voyages
    };
}

