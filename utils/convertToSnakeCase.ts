// utils/convertToSnakeCase.ts
const toSnakeCase = (str: string) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

export const convertToSnakeCase = (obj: any) => {
  return Object.keys(obj).reduce(
    (acc, key) => {
      const snakeKey = toSnakeCase(key);
      acc[snakeKey] = obj[key];
      return acc;
    },
    {} as Record<string, any>
  );
};
