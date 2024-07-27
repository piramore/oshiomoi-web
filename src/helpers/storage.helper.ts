export function setStorage(key: string, value: any) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function getStorage(key: string) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  return JSON.parse(raw);
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}
