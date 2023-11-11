export const localSaveSerialize = (name: string, value: any) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const localLoadSerialize = <T = any>(name: string, def?: T): T => {
  let item = localStorage.getItem(name);
  return item ? JSON.parse(item) : def;
};