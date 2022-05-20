export interface BaseModel {
  readonly id: string | number; //* la BBDD es la que debe asignar el ID, no una persona
  readonly createdAt: Date;
  updatedAt: Date;
}
