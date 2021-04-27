import { Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
class Nfe {
  @ObjectIdColumn()
  id: ObjectID;

  constructor() {}
}

export default Nfe;
