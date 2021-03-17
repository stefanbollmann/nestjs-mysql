import { ApiProperty } from "@nestjs/swagger";
// import { Transform } from "class-transformer";


export class PaginateOptionsDTO {

    @ApiProperty({ required: false })
    // @Transform(pagination => !(pagination == 'false'), { toClassOnly: true })
    pagination?: boolean;

    @ApiProperty({ required: false })
    sort?: string;

    @ApiProperty({ required: false })
    page?: number = 0; //Standardwerte funktionieren so nicht

    @ApiProperty({ required: false })
    limit?: number = 10;

}