export interface IMenu {
  id: string;
  name: string;
  fullPath: string;
  children: IMenu[];
}
