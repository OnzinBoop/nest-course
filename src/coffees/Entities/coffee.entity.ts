import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from './flavor.entity';

@Entity()
export class Coffee {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable() // Specifies the OWNER part of the relation
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees) // Param1: what is the type of the relation? returns reference to teh related entity. Param 2: What property needs to be selected that is on the inverse side of the relationship? What is coffee inside the Flavor entity? Because we want to reference 'coffee' as the 'coffees' property in the Flavor Entity, we take a flavor as the arrow function param and set flavor.coffees as the column we want to reference
  flavors: string[];
}
