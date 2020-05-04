import { MutableKeys, RequiredKeys } from 'utility-types';

export type TypeormConstructorParam<T extends object> = Pick<
  T,
  Extract<MutableKeys<T>, RequiredKeys<T>>
>;
