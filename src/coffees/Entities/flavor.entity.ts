import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    // Inverse side of the Many-To-Many relation
    @ManyToMany(() => Coffee, (coffee) => coffee.flavors) // Param1: type of inverse relation. Param2: select where flavor is at the cofee entity. The flavors property
    coffees: Coffee[]
}
