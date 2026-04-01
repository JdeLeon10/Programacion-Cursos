interface Hero {
  id: number;
  name: string;
  owner: Owner;
  //dueño: OwnerEnum;
}

type Owner = "DC" | "Marvel"; // Type define una serie de posibles valores

/*
enum OwnerEnum {
  DC = "DC", // 0
  Marvel = "Marvel", // 1
}
*/

const heroes: Hero[] = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
    //dueño: OwnerEnum.DC, // OwnerEnum.DC
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
    //dueño: OwnerEnum.Marvel,
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
    //dueño: OwnerEnum.DC,
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
    //dueño: OwnerEnum.DC,
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
    //dueño: OwnerEnum.Marvel, // OwnerEnum.Marvel
  },
  {
    id: 6,
    name: "Daredevil",
    owner: "Marvel",
    //dueño: OwnerEnum.Marvel,
  },
];
