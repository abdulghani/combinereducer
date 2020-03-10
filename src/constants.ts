export interface action {
  type: string;
  [args: string]: any;
}

export type reducer = (state: any, action: action) => any;

export interface reducers {
  [key: string]: reducer;
}
