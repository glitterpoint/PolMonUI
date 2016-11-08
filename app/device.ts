
export class Device {
    Id: number;
    Name: string;
    Description: string;
    Location: Location;
    SoftwareVersion: number;
    CreatedOn: Date;
    ModifiedOn: Date;
    SoftwareUpdatedOn: Date;
}

export class Location{
    points: Points;
}

export class Points{
    x: number;
    y: number;
}