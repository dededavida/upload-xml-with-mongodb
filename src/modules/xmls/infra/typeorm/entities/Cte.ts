import { Entity, ObjectIdColumn, ObjectID } from "typeorm";

@Entity()
class Cte {
  @ObjectIdColumn()
  id: ObjectID;
}

export default Cte;
