export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    debris: boolean;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
        this.debris = this.shouldShowWarning();
    }

    shouldShowWarning() {
        if(this.type === "Space Debris"){
            this.debris = true;
        } else {
            this.debris = false;
        }
    return this.debris;
    }
}
