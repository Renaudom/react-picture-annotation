import { IShapeData } from "Shape";

export type TagValue = {
  tag: string;
  value: string;
};
export const defaultTagValue = { tag: "", value: "" } as TagValue;

export interface IAnnotation<T = IShapeData> {
  comment?: TagValue;
  id: string;
  mark: T;
}
