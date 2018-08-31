import { Reducer } from "redux";
import { IAction } from ".";
import { IConstant } from "../interfaces";

export const createReducer = (initialState: any, handlers: any): Reducer => (
  state: any = initialState,
  action: any
) =>
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state;

export const isFetchingReducer = (
  constants: IConstant,
  prefix: string
): Reducer =>
  createReducer(false, {
    [constants[prefix + "_REQUEST"]]: () => true,
    [constants[prefix + "_SUCCESS"]]: () => false,
    [constants[prefix + "_FAILURE"]]: () => false
  });

export const errorReducer = (constants: IConstant, prefix: string): Reducer =>
  createReducer(null, {
    [constants[prefix + "_REQUEST"]]: () => null,
    [constants[prefix + "_SUCCESS"]]: () => null,
    [constants[prefix + "_FAILURE"]]: (_: any, action: IAction) =>
      action.payload
  });

export const expirationReducer = (
  constants: IConstant,
  prefix: string
): Reducer =>
  createReducer(0, {
    [constants[prefix + "_SUCCESS"]]: () => new Date().getTime(),
    [constants[prefix + "_FAILURE"]]: () => 0
  });
