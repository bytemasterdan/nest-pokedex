import { IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsNumber()
    @IsPositive()
    @Min(1)
    item: number;

    @IsString()
    @MinLength(1)
    name:string;



}
