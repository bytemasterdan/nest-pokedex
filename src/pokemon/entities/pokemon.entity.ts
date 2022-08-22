import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {

    //id : String -- mongo genera este campo dentro de la base de datos 

    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    item: number;

}

export const PokemonSchema =  SchemaFactory.createForClass( Pokemon )
