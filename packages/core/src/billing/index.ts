export module Billing {
  export function compute(storage: number) {
    const rate = storage <= 100 ? 4 : storage <= 1000 ? 2 : 1;
    return rate * storage * 100;
  }
}